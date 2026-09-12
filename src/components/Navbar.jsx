import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Briefcase, List, X } from '@phosphor-icons/react';
import { navItems, site } from '../config.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <nav className="container-page" aria-label="Main">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label={`${site.shortName} home`}>
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

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative inline-flex h-16 items-center px-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-saudi after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-saudi'
                        : 'text-slate-600 hover:text-saudi'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-charcoal lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="container-page space-y-1 py-3">
            {navItems.map((item) => (
              <li key={item.to}>
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
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
