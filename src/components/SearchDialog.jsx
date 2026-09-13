import { Fragment, useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, MagnifyingGlass, X } from '@phosphor-icons/react';
import { searchSite } from '../data/searchIndex.js';

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function Highlight({ text, query }) {
  const tokens = query.trim().split(/\s+/).filter(Boolean);
  if (!tokens.length) return text;
  const parts = text.split(new RegExp(`(${tokens.map(escapeRegExp).join('|')})`, 'gi'));
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className="rounded-sm bg-saudi-light px-0.5 text-saudi">
        {part}
      </mark>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export default function SearchDialog({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const listId = useId();

  const results = useMemo(() => searchSite(query), [query]);

  useEffect(() => setActive(0), [query]);

  // Reset, focus the input and lock page scroll while open.
  useEffect(() => {
    if (!open) return undefined;
    setQuery('');
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => inputRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.({ preventScroll: true });
    };
  }, [open]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  if (!open) return null;

  const select = (item) => {
    if (!item) return;
    const target = `${item.path}${item.hash ? `#${item.hash}` : ''}`;
    const current = `${location.pathname}${location.hash}`;
    onClose();
    if (target === current || (item.path === location.pathname && !item.hash && !location.hash)) {
      // Same URL: the router won't re-scroll, so do it here.
      const el = item.hash ? document.getElementById(item.hash) : null;
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(target);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      select(results[active]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'Tab') {
      // Keep focus inside the dialog; the input is the only focus stop.
      e.preventDefault();
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[10vh] sm:pt-[12vh]">
      <div className="absolute inset-0 bg-charcoal-dark/50 backdrop-blur-[2px]" aria-hidden="true" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the site"
        className="relative flex max-h-[75vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-slate-200 px-4">
          <MagnifyingGlass size={20} className="flex-shrink-0 text-slate-400" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search pages, risks, stakeholders, team…"
            className="h-14 w-full bg-transparent text-base text-charcoal placeholder:text-slate-400 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 [&::-webkit-search-cancel-button]:hidden"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={results[active] ? `${listId}-${active}` : undefined}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-charcoal"
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto p-2">
          {!query.trim() && <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Pages</p>}
          {results.length ? (
            <ul ref={listRef} id={listId} role="listbox" aria-label="Search results">
              {results.map((item, i) => (
                <li
                  key={item.id}
                  id={`${listId}-${i}`}
                  role="option"
                  aria-selected={i === active}
                  onMouseMove={() => setActive(i)}
                  onClick={() => select(item)}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 ${i === active ? 'bg-saudi-light' : ''}`}
                >
                  <span className="hidden w-28 flex-shrink-0 truncate rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-center text-[11px] font-medium text-slate-500 sm:block">
                    {item.type}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block truncate text-sm font-medium ${i === active ? 'text-saudi' : 'text-charcoal'}`}>
                      <Highlight text={item.title} query={query} />
                    </span>
                    <span className="block truncate text-xs text-slate-500">
                      <span className="sm:hidden">{item.type} · </span>
                      {item.page}
                    </span>
                  </span>
                  <ArrowRight size={16} className={`flex-shrink-0 ${i === active ? 'text-saudi' : 'text-slate-300'}`} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-3 py-10 text-center text-sm text-slate-500">
              No results for “<span className="font-medium text-charcoal">{query}</span>”.
            </p>
          )}
        </div>

        <div className="hidden items-center gap-4 border-t border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-500 sm:flex">
          <span>
            <kbd className="rounded border border-slate-300 bg-white px-1.5 font-sans">↑</kbd>{' '}
            <kbd className="rounded border border-slate-300 bg-white px-1.5 font-sans">↓</kbd> to navigate
          </span>
          <span>
            <kbd className="rounded border border-slate-300 bg-white px-1.5 font-sans">Enter</kbd> to open
          </span>
          <span>
            <kbd className="rounded border border-slate-300 bg-white px-1.5 font-sans">Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>,
    document.body,
  );
}
