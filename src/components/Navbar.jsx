import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Briefcase, List, MagnifyingGlass, X } from '@phosphor-icons/react';
import { navItems, site } from '../config.js';
import SearchDialog from './SearchDialog.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Global shortcuts: Cmd/Ctrl+K, or "/" when not typing in a field.
  useEffect(() => {
    const onKey = (e) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((v) => !v);
      } else if (e.key === '/' && !typing) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openSearch = () => {
    setOpen(false);
    setSearchOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <nav className="container-page" aria-label="Main">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex flex-shrink-0 items-center gap-3" aria-label={`${site.shortName} home`}>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-saudi text-white shadow-sm">
              <Briefcase size={20} weight="regular" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-charcoal">{site.shortName}</span>
              <span className="hidden text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:block">
                {site.courseCode} Project Portal
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                {item.external ? (
                  <a
                    href={item.to}
                    className="relative inline-flex h-16 items-center px-2.5 text-sm font-medium text-slate-600 transition-colors hover:text-saudi xl:px-3"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `relative inline-flex h-16 items-center px-2.5 text-sm font-medium transition-colors xl:px-3 ${
                        isActive
                          ? 'text-saudi after:absolute after:inset-x-2.5 after:bottom-0 after:h-0.5 after:bg-saudi'
                          : 'text-slate-600 hover:text-saudi'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={openSearch}
              className="hidden h-9 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 pl-3 pr-2 text-sm text-slate-500 transition-colors hover:border-slate-300 hover:text-charcoal xl:inline-flex"
              aria-label="Search the site"
            >
              <MagnifyingGlass size={16} />
              <span className="pr-3">Search</span>
              <kbd className="rounded border border-slate-200 bg-white px-1.5 font-sans text-[11px] text-slate-400">{isMac ? '⌘K' : 'Ctrl K'}</kbd>
            </button>
            <button
              type="button"
              onClick={openSearch}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-600 transition-colors hover:bg-slate-100 hover:text-charcoal xl:hidden"
              aria-label="Search the site"
              title={`Search (${isMac ? '⌘K' : 'Ctrl+K'})`}
            >
              <MagnifyingGlass size={20} />
            </button>
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 hover:text-charcoal lg:hidden"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              {open ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="container-page space-y-1 py-3">
            {navItems.map((item) => (
              <li key={item.to}>
                {item.external ? (
                  <a
                    href={item.to}
                    className="block rounded-md border-l-4 border-transparent px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-charcoal"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block rounded-md border-l-4 px-3 py-2.5 text-sm font-medium ${
                        isActive
                          ? 'border-saudi bg-saudi-light text-saudi'
                          : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-charcoal'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
