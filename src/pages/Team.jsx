import { Link } from 'react-router-dom';
import {
  BookBookmark,
  CalendarCheck,
  ChatsCircle,
  CheckCircle,
  FigmaLogo,
  FileText,
  GithubLogo,
  Info,
  ListChecks,
  ArrowSquareOut,
  Kanban,
  LinkedinLogo,
  MicrosoftTeamsLogo,
  PlugsConnected,
  ShieldWarning,
  Student,
  UsersThree,
} from '@phosphor-icons/react';
import { site } from '../config.js';
import { artifacts, members, tools } from '../data/team.js';

const domains = [
  { icon: Kanban, title: 'Project Management', text: 'Oversight, integration, and final approvals.', to: '/project' },
  { icon: CalendarCheck, title: 'Planning & Scheduling', text: 'WBS, Gantt charts, and resource leveling.', to: '/planning' },
  { icon: ShieldWarning, title: 'Risk & Methodology', text: 'Process definition and hazard mitigation.', to: '/methodology-risk' },
  { icon: ChatsCircle, title: 'Stakeholder & Comm', text: 'Engagement matrices and reporting.', to: '/stakeholders-metrics' },
  { icon: FileText, title: 'Documentation & Quality', text: 'Standards compliance and formatting.' },
];

const toolIcons = {
  github: { icon: GithubLogo, tone: 'text-charcoal-dark' },
  notion: { icon: BookBookmark, tone: 'text-blue-600' },
  teams: { icon: MicrosoftTeamsLogo, tone: 'text-indigo-600' },
  figma: { icon: FigmaLogo, tone: 'text-pink-500' },
};

function initials(name) {
  return name
    .split(/[\s-]+/)
    .filter((part) => part && part[0] === part[0].toUpperCase())
    .map((part) => part[0])
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .join('');
}

export default function Team() {
  return (
    <>
      <section className="container-page pb-12 pt-14 md:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center rounded-full bg-saudi-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-saudi ring-1 ring-inset ring-saudi/20">
            {site.course}
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-charcoal-dark sm:text-5xl">Project Team</h1>
          <p className="mb-8 text-lg leading-8 text-charcoal-light">
            The team responsible for planning and managing the {site.name}.
          </p>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm sm:p-8">
            <div className="absolute left-0 top-0 h-full w-1 bg-saudi" />
            <p className="text-sm leading-relaxed text-charcoal-light sm:text-base">
              This project is developed as part of the <strong>{site.course}</strong> course. Our primary focus is on
              meticulously planning and designing the architecture, methodologies, and management strategies required
              for a national-scale digital employment platform. The team works collaboratively to ensure rigorous
              documentation, realistic scheduling, and comprehensive risk management.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="core-members" className="container-page border-t border-slate-200 py-12">
        <h2 id="core-members" className="mb-10 flex items-center gap-2 text-2xl font-bold text-charcoal-dark">
          <UsersThree size={28} className="text-saudi" />
          Core Members
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <article key={m.name} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex items-start justify-between">
                <div
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-saudi-light text-xl font-bold text-saudi transition-colors group-hover:bg-saudi group-hover:text-white"
                >
                  {initials(m.name)}
                </div>
                <div className="flex gap-2">
                  {m.linkedin && (
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-saudi" aria-label={`${m.name} on LinkedIn`}>
                      <LinkedinLogo size={22} />
                    </a>
                  )}
                  {m.github && (
                    <a href={m.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-charcoal-dark" aria-label={`${m.name} on GitHub`}>
                      <GithubLogo size={22} />
                    </a>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-charcoal-dark">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-saudi">{m.role}</p>
              </div>
              <div className="flex-grow border-t border-slate-100 pt-4">
                <p className="eyebrow mb-2 text-charcoal-lighter">Key Responsibilities</p>
                <ul className="space-y-2 text-sm text-charcoal-light">
                  {m.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <CheckCircle size={16} weight="fill" className="mt-0.5 flex-shrink-0 text-saudi" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="contributions" className="container-page border-t border-slate-200 py-12">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="contributions" className="flex items-center gap-2 text-2xl font-bold text-charcoal-dark">
              <ListChecks size={28} className="text-saudi" />
              Who Did What
            </h2>
            <p className="mt-2 max-w-2xl text-charcoal-lighter">
              Every member worked on every artifact, each owning separate sections with an equal share of the work.
            </p>
          </div>
          <a
            href={`${import.meta.env.BASE_URL}project-task-distribution.html`}
            className="inline-flex items-center gap-2 self-start rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-charcoal-dark transition-colors hover:border-saudi/50 sm:self-auto"
          >
            Full task breakdown <ArrowSquareOut size={16} />
          </a>
        </div>
        <div className="space-y-6">
          {artifacts.map((a) => (
            <article key={a.key} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-bold text-charcoal-dark">{a.title}</h3>
                <p className="text-sm text-charcoal-lighter">{a.subtitle}</p>
              </div>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {members.map((m) => (
                  <li key={m.name} className="flex gap-3 rounded-lg border border-slate-100 bg-slate-50 p-4">
                    <div
                      aria-hidden="true"
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-saudi-light text-sm font-bold text-saudi"
                    >
                      {initials(m.name)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal-dark">{m.name.split(' ')[0]}</p>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal-light">{m.contributions[a.key]}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="responsibilities" className="container-page border-t border-slate-200 py-12">
        <div className="mb-10 text-center">
          <h2 id="responsibilities" className="text-2xl font-bold text-charcoal-dark">Responsibility Distribution</h2>
          <p className="mx-auto mt-2 max-w-2xl text-charcoal-lighter">
            How core project domains are managed across the team to ensure comprehensive coverage.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {domains.map(({ icon: Icon, title, text, to }, i) => {
            const className = `flex flex-col items-center rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-colors ${
              i === domains.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
            } ${to ? 'hover:border-saudi/50' : ''}`;
            const content = (
              <>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-saudi-50 text-saudi">
                  <Icon size={26} />
                </div>
                <h3 className="mb-1 text-sm font-bold text-charcoal-dark">{title}</h3>
                <p className="text-xs text-charcoal-lighter">{text}</p>
              </>
            );
            return to ? (
              <Link key={title} to={to} className={className}>
                {content}
              </Link>
            ) : (
              <div key={title} className={className}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-page mb-12 border-t border-slate-200 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-charcoal-dark">
              <PlugsConnected size={22} className="text-saudi" />
              Team Collaboration
            </h2>
            <ul className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2">
              {tools.map((t) => {
                const { icon: Icon, tone } = toolIcons[t.key];
                return (
                  <li key={t.name} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
                    <Icon size={28} className={tone} />
                    <div>
                      <p className="text-sm font-semibold text-charcoal-dark">{t.name}</p>
                      <p className="text-xs text-charcoal-lighter">{t.use}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-saudi-900 p-6 text-white shadow-sm sm:p-8">
            <Student size={144} weight="fill" className="pointer-events-none absolute -right-8 -top-8 opacity-10" aria-hidden="true" />
            <div className="relative">
              <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-saudi-100">
                <Info size={22} />
                Project Context
              </h2>
              <dl className="space-y-4">
                <div className="border-l-2 border-saudi-400 pl-4">
                  <dt className="mb-1 text-xs uppercase tracking-wider text-saudi-100">Course</dt>
                  <dd className="text-lg font-semibold">{site.courseCode} — Software Project Management</dd>
                </div>
                <div className="border-l-2 border-saudi-400 pl-4">
                  <dt className="mb-1 text-xs uppercase tracking-wider text-saudi-100">Platform</dt>
                  <dd className="text-base font-medium">National Employment &amp; Skill Matching</dd>
                </div>
                <div className="border-l-2 border-saudi-400 pl-4">
                  <dt className="mb-1 text-xs uppercase tracking-wider text-saudi-100">Assignment</dt>
                  <dd className="mt-1 inline-flex items-center rounded-md bg-white/20 px-2.5 py-0.5 text-sm font-medium text-white">{site.scenario}</dd>
                </div>
              </dl>
              <a
                href={site.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
              >
                <GithubLogo size={18} /> View Repository
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
