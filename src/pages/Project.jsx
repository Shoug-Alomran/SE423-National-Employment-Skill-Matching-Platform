import { Link } from 'react-router-dom';
import {
  ArrowsLeftRight,
  Bank,
  Briefcase,
  Buildings,
  ChartBar,
  CheckCircle,
  Code,
  File,
  Flag,
  GraduationCap,
  Info,
  Lightning,
  TrendUp,
  User,
  Users,
  Warning,
  X,
  XCircle,
} from '@phosphor-icons/react';
import { PageHeader, SectionHeading } from '../components/ui.jsx';

const goals = [
  {
    icon: TrendUp,
    title: 'Improve Labor Market Efficiency',
    text: 'Streamline recruitment processes and reduce time-to-hire through centralized data and automated preliminary vetting.',
  },
  {
    icon: ArrowsLeftRight,
    title: 'Reduce Skill Mismatches',
    text: 'Implement intelligent taxonomy matching to ensure candidate capabilities accurately align with role requirements.',
  },
  {
    icon: Users,
    title: 'Empower the Workforce',
    text: 'Provide citizens with transparent access to opportunities, career mapping, and targeted upskilling pathways.',
  },
  {
    icon: ChartBar,
    title: 'Enable Informed Policymaking',
    text: 'Generate real-time analytics on labor trends, skill gaps, and employment rates to support MHRSD initiatives.',
  },
];

const inScope = [
  {
    title: 'Core Platforms & Engines',
    items: ['Advanced AI-driven Matching Engine', 'Comprehensive Job Seeker Services Portal', 'Enterprise-grade Employer Services Dashboard'],
  },
  {
    title: 'Development & Insights',
    items: ['Personalized Career Guidance & Mapping', 'Training Provider Integrations & Upskilling Paths', 'Labor Market Analytics & Reporting Suite'],
  },
  {
    title: 'Ecosystem Integration',
    items: ['Professional Networking & Collaboration Tools', 'Essential Government System Integrations (e.g., Yakeen, Absher)'],
  },
];

const outOfScope = [
  'Direct payroll processing or financial transactions between employers and employees.',
  'Management of internal company HR operations (e.g., performance reviews, leave management beyond initial hiring).',
  'Creation of proprietary training content (platform aggregates and links to third-party providers).',
  'Visa processing or immigration services directly within the platform (handled via external integration links only).',
];

const stakeholders = [
  { icon: Flag, name: 'MHRSD', role: 'Project Sponsor & Owner', primary: true },
  { icon: User, name: 'Job Seekers', role: 'Primary End-Users' },
  { icon: Briefcase, name: 'Employers', role: 'Corporate & SME Users' },
  { icon: GraduationCap, name: 'Students', role: 'Future Workforce' },
  { icon: Bank, name: 'Educational Inst.', role: 'Universities & Trainers' },
  { icon: Buildings, name: 'Govt. Agencies', role: 'Integration Partners' },
  { icon: Code, name: 'Technology Partners', role: 'Vendors & IT Providers' },
];

const departments = [
  { title: 'Product & Design', roles: ['UX/UI Lead', 'Product Owner'] },
  { title: 'Engineering', roles: ['Technical Lead', 'Data Scientists'] },
  { title: 'Policy & Strategy', roles: ['Labor Experts', 'Compliance'] },
];

const phases = [
  {
    title: 'Core Matching Engine & Portals',
    text: 'Establish foundational architecture, MVP job seeker and employer dashboards, and initial AI matching capabilities.',
  },
  {
    title: 'Career Guidance, Training & Expansion',
    text: 'Integrate educational providers, launch upskilling pathways, and introduce comprehensive career mapping tools.',
  },
  {
    title: 'National Rollout & Gov. Integration',
    text: 'Full scale deployment, advanced analytics dashboarding, and seamless API integration with all core governmental systems.',
  },
];

export default function Project() {
  return (
    <>
      <PageHeader
        badge="Artifact 01"
        badgeIcon={File}
        title="Project Overview"
        description="Defining the vision, objectives, organization, and scope of a national platform connecting Saudi talent with opportunity."
      />

      <div className="container-page space-y-20 py-16 lg:space-y-28 lg:py-20">
        {/* 1. Problem & Opportunity */}
        <section aria-labelledby="problem">
          <SectionHeading id="problem" number={1} title="Problem & Opportunity" />
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <article className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="absolute left-0 top-0 h-full w-2 bg-amber-500" />
              <div className="flex items-start gap-5">
                <div className="mt-1 rounded-xl bg-amber-50 p-3 text-amber-600">
                  <Warning size={24} />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-charcoal">The Problem</h3>
                  <p className="leading-relaxed text-gray-600">
                    Saudi Arabia's employment ecosystem is fragmented across private job boards and manual processes,
                    contributing to hiring inefficiencies and skill mismatches. This disjointed landscape makes it
                    difficult for talent to find the right opportunities and for employers to locate candidates with the
                    precise qualifications needed.
                  </p>
                </div>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="absolute left-0 top-0 h-full w-2 bg-saudi" />
              <div className="flex items-start gap-5">
                <div className="mt-1 rounded-xl bg-saudi-50 p-3 text-saudi">
                  <Lightning size={24} />
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-charcoal">The Opportunity</h3>
                  <p className="leading-relaxed text-gray-600">
                    Build a unified intelligent platform that connects talent and employers through skills,
                    qualifications, and employment needs. By leveraging data and advanced matching algorithms, we can
                    streamline the hiring process, guide career development, and foster a more dynamic national
                    workforce.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 2. Goals */}
        <section aria-labelledby="goals">
          <SectionHeading id="goals" number={2} title="Project Goals & Benefits" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-saudi">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-charcoal">{title}</h3>
                <p className="text-sm text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Scope */}
        <section aria-labelledby="scope" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 md:p-12">
          <SectionHeading id="scope" number={3} title="Project Scope" />
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle size={20} weight="bold" />
                </span>
                <h3 className="text-xl font-bold text-charcoal">In Scope</h3>
              </div>
              <div className="space-y-4">
                {inScope.map((group) => (
                  <div key={group.title} className="rounded-lg border border-gray-100 bg-offwhite p-5">
                    <h4 className="mb-2 flex items-center font-semibold text-charcoal-light">
                      <CheckCircle size={16} weight="fill" className="mr-2 text-saudi" />
                      {group.title}
                    </h4>
                    <ul className="ml-6 list-disc space-y-2 pl-2 text-sm text-gray-600 marker:text-gray-300">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                  <X size={20} weight="bold" />
                </span>
                <h3 className="text-xl font-bold text-gray-500">Out of Scope</h3>
              </div>
              <ul className="space-y-3">
                {outOfScope.map((item) => (
                  <li key={item} className="flex items-start">
                    <XCircle size={20} className="mr-3 mt-0.5 flex-shrink-0 text-gray-400" />
                    <span className="text-sm text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-start rounded-lg border border-blue-100 bg-blue-50/50 p-4">
                <Info size={20} className="mr-3 mt-0.5 flex-shrink-0 text-blue-500" />
                <p className="text-xs leading-relaxed text-blue-800">
                  Note: The detailed work breakdown structure and delivery schedule are documented in{' '}
                  <Link to="/planning" className="font-semibold underline underline-offset-2 hover:text-blue-950">
                    Artifact 03 (Planning)
                  </Link>
                  , and project risks in{' '}
                  <Link to="/methodology-risk#risk-register" className="font-semibold underline underline-offset-2 hover:text-blue-950">
                    Artifact 02 (Methodology &amp; Risk)
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Stakeholders */}
        <section aria-labelledby="stakeholders">
          <SectionHeading
            id="stakeholders"
            number={4}
            title="Initial Stakeholders"
            action={
              <Link to="/stakeholders-metrics" className="text-sm font-medium text-saudi hover:underline">
                Full stakeholder analysis →
              </Link>
            }
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stakeholders.map(({ icon: Icon, name, role, primary }) => (
              <div key={name} className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border ${
                    primary ? 'border-saudi/20 bg-saudi-50 text-saudi' : 'border-gray-200 bg-gray-50 text-gray-600'
                  }`}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal">{name}</h3>
                  <p className="text-xs text-gray-500">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Org structure */}
        <section aria-labelledby="org-structure">
          <SectionHeading id="org-structure" number={5} title="Organizational Structure" />
          <div className="rounded-2xl border border-gray-200 bg-white px-4 py-10 shadow-sm sm:px-8 sm:py-12">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs rounded-lg bg-charcoal p-4 text-center text-white shadow-md">
                <h3 className="text-sm font-bold">MHRSD Steering Committee</h3>
                <p className="mt-1 text-xs text-gray-400">Executive Sponsorship</p>
              </div>
              <div className="h-8 w-0.5 bg-gray-300" />
              <div className="w-full max-w-xs rounded-lg bg-saudi p-4 text-center text-white shadow-md">
                <h3 className="text-sm font-bold">Project Management Office</h3>
                <p className="mt-1 text-xs text-saudi-100">Platform Project Manager</p>
              </div>
              <div className="h-8 w-0.5 bg-gray-300" />

              {/* Branch connector (desktop) */}
              <div className="relative hidden h-8 w-full max-w-[640px] md:block">
                <div className="absolute left-[16.66%] right-[16.66%] top-0 h-0.5 bg-gray-300" />
                <div className="absolute left-[16.66%] top-0 h-full w-0.5 bg-gray-300" />
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300" />
                <div className="absolute right-[16.66%] top-0 h-full w-0.5 bg-gray-300" />
              </div>

              <div className="grid w-full max-w-[640px] grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                {departments.map((d) => (
                  <div key={d.title} className="rounded-lg border border-gray-200 bg-offwhite p-4 text-center shadow-sm">
                    <h3 className="text-sm font-bold text-charcoal">{d.title}</h3>
                    <div className="mt-3 space-y-1">
                      {d.roles.map((r) => (
                        <div key={r} className="rounded border border-dashed border-gray-300 bg-white p-1 text-xs text-gray-500">
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Implementation */}
        <section aria-labelledby="implementation">
          <SectionHeading id="implementation" number={6} title="Implementation Approach" />
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-[16.66%] right-[16.66%] top-6 hidden h-1 bg-gray-200 sm:block" />
            <ol className="relative grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-4">
              {phases.map((p, i) => (
                <li key={p.title} className="group flex flex-col items-center text-center">
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full border-4 bg-white font-bold shadow-sm transition-transform group-hover:scale-110 ${
                      i === 0 ? 'border-saudi text-saudi' : 'border-gray-300 text-gray-400 group-hover:border-saudi group-hover:text-saudi'
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="mb-2 font-bold text-charcoal">Phase {i + 1}</h3>
                    <p className={`mb-3 text-sm font-semibold ${i === 0 ? 'text-saudi' : 'text-gray-700'}`}>{p.title}</p>
                    <p className="text-xs leading-relaxed text-gray-500">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </>
  );
}
