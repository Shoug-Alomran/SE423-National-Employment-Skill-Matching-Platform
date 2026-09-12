import { Link } from 'react-router-dom';
import { ArrowLeft, MagnifyingGlass } from '@phosphor-icons/react';
import { navItems } from '../config.js';

export default function NotFound() {
  return (
    <section className="container-page flex flex-col items-center py-24 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-saudi-light text-saudi">
        <MagnifyingGlass size={32} />
      </div>
      <p className="eyebrow mb-2">Error 404</p>
      <h1 className="mb-4 text-4xl font-bold text-charcoal-dark">Page not found</h1>
      <p className="mb-8 max-w-md text-slate-600">The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="btn-primary">
        <ArrowLeft size={16} weight="bold" />
        Back to Home
      </Link>
      <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        {navItems.slice(1).map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="text-saudi hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
