import { Link } from 'react-router-dom';
import { Buildings, GithubLogo } from '@phosphor-icons/react';
import { navItems, site } from '../config.js';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-charcoal-dark text-slate-300">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800">
                <Buildings size={20} className="text-saudi-400" />
              </span>
              <span className="text-lg font-bold text-white">{site.name}</span>
            </div>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-slate-400">
              A proposed national digital initiative, planned as part of {site.course}. This site documents the
              project's scope, methodology, risks, schedule, stakeholders and team.
            </p>
            <a
              href={site.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <GithubLogo size={18} />
              View Repository
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Pages</h2>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Academic Context</h2>
            <ul className="space-y-3 text-sm">
              <li>Course: {site.courseCode}</li>
              <li>Software Project Management</li>
              <li>Assignment: {site.scenario}</li>
              <li>
                <Link to="/methodology-risk#risk-register" className="text-saudi-400 transition-colors hover:text-saudi-300">
                  Risk Register
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} {site.courseCode} Project Team. For academic purposes only.</p>
          <p>Conceptual planning documentation.</p>
        </div>
      </div>
    </footer>
  );
}
