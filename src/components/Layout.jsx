import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const titles = {
  '/': 'National Employment & Skill Matching Platform',
  '/project': 'Project Overview',
  '/methodology-risk': 'Methodology & Risk',
  '/planning': 'Planning',
  '/stakeholders-metrics': 'Stakeholders & Metrics',
  '/team': 'Team',
};

// Scrolls to the top on page change, or to the #section when a hash is present.
function useScrollManagement() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const page = titles[pathname];
    document.title = page && pathname !== '/' ? `${page} · NESMP` : page ?? 'Page Not Found · NESMP';
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
}

export default function Layout() {
  useScrollManagement();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-saudi focus:shadow"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
