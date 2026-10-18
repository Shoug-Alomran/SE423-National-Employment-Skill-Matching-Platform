import { Link } from 'react-router-dom';
import {
  Bank,
  Briefcase,
  Buildings,
  CheckCircle,
  Code,
  File,
  Flag,
  GraduationCap,
  Info,
  Lightbulb,
  Lightning,
  ListChecks,
  MagnifyingGlass,
  SealCheck,
  Student,
  TreeStructure,
  TrendUp,
  User,
  Warning,
  X,
  XCircle,
} from '@phosphor-icons/react';
import { PageHeader, SectionHeading } from '../components/ui.jsx';

const nationalTargets = [
  { value: '7%', label: 'Unemployment target by 2030 under Saudi Vision 2030' },
  { value: '10.3%', label: 'Female unemployment in 2025, down on rising participation' },
  { value: '15%', label: 'Target employment share for people with disabilities by 2030' },
];

const goals = [
  {
    icon: Flag,
    title: 'One National Platform',
    text: 'Build a unified national employment and skill matching platform that refines the connection between employers and applicants, replacing traditional job searching.',
  },
  {
    icon: MagnifyingGlass,
    title: 'Skill-Based Matching',
    text: "Use applicants' skills and experience to propose well-suited opportunities, and help employers find applicants who match the skills and requirements they seek.",
  },
  {
    icon: Student,
    title: 'Close Skill Gaps',
    text: 'Go beyond job openings: recommend learning programs based on qualifications and interests so users can spot gaps in their skill sets and advance.',
  },
  {
    icon: TrendUp,
    title: 'Faster, Better Hiring',
    text: 'Reduce the time and effort applicants and employers spend finding matches, improve recruitment, and create better career opportunities.',
  },
];

const stakeholders = [
  {
    icon: Flag,
    name: 'Ministry of Human Resources and Social Development (HRSD)',
    classification: 'Internal – Sponsor',
    stake: 'Sponsors and oversees the project to support employment, improve labor market efficiency and reduce skill mismatch.',
    primary: true,
  },
  {
    icon: User,
    name: 'Job Seekers',
    classification: 'External',
    stake: 'Use the platform to create profiles, discover suitable employment opportunities, apply for positions and track applications.',
  },
  {
    icon: GraduationCap,
    name: 'Students',
    classification: 'External',
    stake: 'Use the platform to explore career and employment opportunities aligned with their skills and qualifications.',
  },
  {
    icon: Briefcase,
    name: 'Employers – Large Firms and SMEs',
    classification: 'External',
    stake: 'Use the platform to publish job opportunities, receive and manage applications, screen candidates and schedule interviews.',
  },
  {
    icon: Bank,
    name: 'Universities and Training Providers',
    classification: 'External',
    stake: 'Support workforce development by providing education and training that help users build skills relevant to labor-market needs.',
  },
  {
    icon: Code,
    name: 'Technology Firms',
    classification: 'External',
    stake: 'Provide the technical expertise, technologies or implementation support needed to develop and operate the platform.',
  },
  {
    icon: Buildings,
    name: 'Other Government Agencies',
    classification: 'External',
    stake: 'Provide government services or information that may be integrated with the platform in later phases.',
  },
];

const departments = [
  { title: 'Product & Design', roles: ['UX/UI Lead', 'Product Owner'] },
  { title: 'Engineering', roles: ['Technical Lead', 'Data Scientists'] },
  { title: 'Policy & Strategy', roles: ['Labor Experts', 'Compliance'] },
];

const scopePhases = [
  {
    title: 'Core Matching Engine & Basic Portals',
    features: [
      {
        name: 'Job Seeker Portal',
        items: [
          'Build and maintain a personal profile of skills, qualifications and experience.',
          'Upload resumes and other professional details.',
          'Find and browse available employment opportunities.',
          'Apply for jobs and track application status.',
          "See opportunities relevant to the job seeker's profile.",
        ],
      },
      {
        name: 'Smart Matching Engine',
        items: [
          "Analyze the job seeker's resume, qualifications, skills and experience.",
          'Analyze employer job descriptions and requirements using Natural Language Processing (NLP).',
          'Compare candidate profiles with job requirements to find suitable matches.',
          'Suggest suitable opportunities to job seekers and suitable candidates to employers.',
        ],
      },
      {
        name: 'Employer Portal',
        items: [
          'Build and maintain an employer profile and job postings.',
          'Specify the skills, qualifications and other requirements for each opening.',
          'Receive and review job applications.',
          'Screen suitable candidates against the job requirements.',
        ],
      },
    ],
  },
  {
    title: 'Career Guidance, Training & Platform Expansion',
    features: [
      {
        name: 'Career Guidance and Training',
        items: [
          "Evaluate users' skills and interests to offer tailored career advice.",
          'Identify the gap between user skills and those required by career paths.',
          'Suggest training programs and courses to fill the gap, and show how each one helps.',
        ],
      },
      {
        name: 'Analytics Dashboard',
        items: [
          'Provide labor-market analytics for the Ministry of Human Resources and Social Development.',
          'Monitor labor-market trends from data gathered through the platform.',
          'Identify skill gaps between the workforce and employer needs.',
          'Support data-driven decisions on labor and education policy.',
        ],
      },
      {
        name: 'Professional Networking',
        items: [
          'Let job seekers and professionals create professional links with other users.',
          'Let users share career insights.',
          'Offer industry forums for professional discussion.',
        ],
      },
    ],
  },
  {
    title: 'National Rollout & Government Integration',
    features: [
      {
        name: 'Government Service Integration',
        items: [
          'Integrate the platform with relevant existing government services.',
          'Support the information exchange required for approved integrations.',
          'Let platform services use information made available through authorized integrations.',
        ],
      },
      {
        name: 'National Rollout',
        items: [
          'Expand the platform for nationwide use across Saudi Arabia.',
          'Expand coverage to a wider range of industries.',
          'Run public-awareness activities to support adoption.',
          'Support Arabic and English for the national user base.',
        ],
      },
    ],
  },
];

const outOfScope = [
  ['Training Course Delivery', 'Fursah recommends training programs and courses but will not create, teach or deliver them.'],
  ['Payroll Processing', 'Fursah will not calculate salaries, process payroll or manage employee compensation.'],
  ['Background Checks', 'These remain the responsibility of employers and relevant authorized entities.'],
  ['Final Hiring Decisions', 'Fursah provides matching, recommendations and recruitment support; employers make the final decision.'],
  ['Employment Contracts', 'Fursah will not negotiate, issue or execute contracts on behalf of employers or job seekers.'],
];

const assumptions = [
  'Relevant government agencies will provide the necessary authorization and interfaces for approved government service integrations.',
  'Job seekers and employers will provide accurate and sufficiently complete information for matching and recommendations.',
  'Government agencies, employers, educational institutions and technology partners will provide the cooperation and information required throughout the project.',
  'Suitable external training programs and courses will be available to recommend to users.',
];

const constraints = [
  'The platform must support both Arabic and English for its national user base.',
  'Personal and employment data must be handled in line with applicable Saudi data-protection requirements.',
  'Platform data and infrastructure must be hosted within Saudi Arabia.',
  'Implementation must follow the defined phased rollout rather than deploying all capabilities at once.',
  'Government integrations depend on the availability, authorization and technical interfaces of participating agencies.',
];

const deliverables = [
  {
    phase: 'Core Platform',
    items: [
      ['Job Seeker Portal', 'Job seekers can create and manage profiles, provide their skills and qualifications, search and view job opportunities, submit applications, and track application status.'],
      ['Smart Matching Engine', 'The platform analyzes candidate profiles and job descriptions and recommends relevant jobs to job seekers and candidates to employers based on skills and requirements.'],
      ['Employer Portal', 'Employers can create job postings, define requirements, receive and review applications, screen candidates, track the hiring process, and schedule interviews.'],
    ],
  },
  {
    phase: 'Platform Expansion',
    items: [
      ['Career Guidance and Training Module', 'Users receive career recommendations based on their skills and interests, see relevant skill gaps, and get training or course recommendations for those gaps.'],
      ['Data Analytics Dashboard', 'Authorized Ministry users can access labor-market trends and skill-gap information that supports data-driven policy decisions.'],
      ['Professional Networking', 'Users can establish professional connections, share career insights, and take part in industry forums.'],
    ],
  },
  {
    phase: 'National Rollout & Integration',
    items: [
      ['Government Service Integration', 'The platform exchanges required information with approved government services through authorized integrations.'],
      ['National Rollout', 'The platform is available nationwide, covers the planned range of industries, supports Arabic and English, and is backed by public-awareness activities.'],
    ],
  },
];

export default function Project() {
  return (
    <>
      <PageHeader
        badge="Artifact 01"
        badgeIcon={File}
        title="Project Overview"
        description="Fursah — Arabic for “chance” — is a national platform connecting Saudi talent with opportunity. This artifact defines its purpose, stakeholders, organization and scope."
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
                    The nation's efforts to increase employment are helping, but they are spread across different
                    platforms, which causes confusion. Manual procedures make finding suitable candidates a challenge,
                    and current methods don't accurately reveal whether an individual's skill set matches the job.
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
                    In a digital era, a platform like Fursah can reach audiences across the nation and beyond. Fursah
                    will give people across Saudi Arabia, including people with disabilities, the opportunity to find
                    jobs within their skill set, supporting the Labor Market Strategy and the Human Capability
                    Development Program.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            {nationalTargets.map((t) => (
              <div key={t.value} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <dd className="text-3xl font-bold text-saudi">{t.value}</dd>
                <dt className="mt-1 text-sm text-gray-500">{t.label}</dt>
              </div>
            ))}
          </dl>
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

        {/* 3. Stakeholders */}
        <section aria-labelledby="stakeholders">
          <SectionHeading
            id="stakeholders"
            number={3}
            title="Initial Stakeholders"
            action={
              <Link to="/stakeholders-metrics" className="text-sm font-medium text-saudi hover:underline">
                Full stakeholder analysis →
              </Link>
            }
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {stakeholders.map(({ icon: Icon, name, classification, stake, primary }) => (
              <article key={name} className={`flex gap-4 rounded-xl border bg-white p-5 shadow-sm ${primary ? 'border-saudi/30 md:col-span-2' : 'border-gray-200'}`}>
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border ${
                    primary ? 'border-saudi/20 bg-saudi-50 text-saudi' : 'border-gray-200 bg-gray-50 text-gray-600'
                  }`}
                >
                  <Icon size={24} />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-bold text-charcoal">{name}</h3>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        primary ? 'bg-saudi-50 text-saudi' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {classification}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{stake}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Team & org structure */}
        <section aria-labelledby="org-structure">
          <SectionHeading id="org-structure" number={4} title="Team & Organizational Structure" />
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-saudi-50 p-3 text-saudi">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <p className="eyebrow text-gray-400">Team structure</p>
                  <h3 className="text-xl font-bold text-charcoal">Creativity objective</h3>
                </div>
              </div>
              <p className="leading-relaxed text-gray-600">
                Fursah is a new concept that needs quick adaptation and out-of-the-box ideas, so the team is structured
                around the creativity objective. Such teams tolerate ambiguity and iteration, are willing to experiment,
                and encourage divergent thinking — backed by a diverse skill set and a culture that supports sharing
                ideas and taking risks.
              </p>
            </article>
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-saudi-50 p-3 text-saudi">
                  <TreeStructure size={24} />
                </div>
                <div>
                  <p className="eyebrow text-gray-400">Organizational structure</p>
                  <h3 className="text-xl font-bold text-charcoal">Matrix organization</h3>
                </div>
              </div>
              <p className="leading-relaxed text-gray-600">
                A matrix structure combines the project structure's rapid response to market opportunities with the
                functional structure's loyalty to the firm — needed for a fast-changing job market. It gives equal
                weight to functional efficiency and project management, coordinates functional units that share
                limited resources, supports effective decision-making as the market grows, and suits a dynamic
                environment.
              </p>
            </article>
          </div>

          {/* Matrix reporting chart */}
          <div className="mt-6 rounded-2xl border border-gray-200 bg-white px-4 py-10 shadow-sm sm:px-8 sm:py-12">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs rounded-lg bg-charcoal p-4 text-center text-white shadow-md">
                <h3 className="text-sm font-bold">Board of Directors</h3>
              </div>
              <div className="h-6 w-0.5 bg-gray-300" />
              <div className="w-full max-w-xs rounded-lg bg-charcoal p-4 text-center text-white shadow-md">
                <h3 className="text-sm font-bold">Chief Executive</h3>
              </div>
              <div className="h-6 w-0.5 bg-gray-300" />

              <div className="w-full max-w-[720px] overflow-x-auto">
                <table className="w-full min-w-[520px] border-separate border-spacing-2 text-center text-xs">
                  <thead>
                    <tr>
                      <th scope="col" className="w-1/4" />
                      {departments.map((d) => (
                        <th key={d.title} scope="col" className="rounded-lg bg-gray-100 p-3 font-bold text-charcoal">
                          <span className="block text-[10px] font-medium uppercase tracking-wider text-gray-400">VP</span>
                          {d.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="rounded-lg bg-saudi p-3 font-bold text-white">
                        <span className="block text-[10px] font-medium uppercase tracking-wider text-saudi-100">VP of Projects</span>
                        Fursah Project
                      </th>
                      {departments.map((d) => (
                        <td key={d.title} className="rounded-lg border border-dashed border-gray-300 bg-offwhite p-2 text-gray-500">
                          {d.roles.join(' · ')}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 max-w-xl text-center text-xs text-gray-500">
                Staff report to both their functional VP and the VP of Projects; teams are grouped by department and by
                project.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Scope */}
        <section aria-labelledby="scope">
          <SectionHeading id="scope" number={5} title="Detailed Scope Statement" description="In-scope features, delivered in three phases." />
          <ol className="grid gap-6 lg:grid-cols-3">
            {scopePhases.map((p, i) => (
              <li key={p.title} className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-100 p-5">
                  <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-4 bg-white text-sm font-bold ${i === 0 ? 'border-saudi text-saudi' : 'border-gray-300 text-gray-500'}`}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="eyebrow text-gray-400">Phase {i + 1}</p>
                    <h3 className="font-bold text-charcoal">{p.title}</h3>
                  </div>
                </div>
                <div className="space-y-4 p-5">
                  {p.features.map((f) => (
                    <div key={f.name} className="rounded-lg border border-gray-100 bg-offwhite p-4">
                      <h4 className="mb-2 flex items-center text-sm font-semibold text-charcoal-light">
                        <CheckCircle size={16} weight="fill" className="mr-2 text-saudi" />
                        {f.name}
                      </h4>
                      <ul className="ml-6 list-disc space-y-1.5 pl-2 text-sm text-gray-600 marker:text-gray-300">
                        {f.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                <X size={20} weight="bold" />
              </span>
              <h3 className="text-xl font-bold text-gray-500">Out of Scope</h3>
            </div>
            <ul className="grid gap-4 md:grid-cols-2">
              {outOfScope.map(([title, text]) => (
                <li key={title} className="flex items-start">
                  <XCircle size={20} className="mr-3 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    <strong className="font-semibold text-gray-700">{title}:</strong> {text}
                  </span>
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
        </section>

        {/* 6. Assumptions & constraints */}
        <section aria-labelledby="assumptions">
          <SectionHeading id="assumptions" number={6} title="Assumptions & Constraints" />
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              { icon: Lightbulb, title: 'Assumptions', items: assumptions, tone: 'bg-blue-50 text-blue-500' },
              { icon: Warning, title: 'Constraints', items: constraints, tone: 'bg-amber-50 text-amber-600' },
            ].map(({ icon: Icon, title, items, tone }) => (
              <article key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className={`rounded-xl p-3 ${tone}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">{title}</h3>
                </div>
                <ul className="ml-5 list-disc space-y-3 pl-1 text-sm leading-relaxed text-gray-600 marker:text-gray-300">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* 7. Deliverables */}
        <section aria-labelledby="deliverables">
          <SectionHeading id="deliverables" number={7} title="Phase Deliverables & Acceptance Criteria" />
          <div className="space-y-8">
            {deliverables.map((group, i) => (
              <div key={group.phase}>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500">
                  <ListChecks size={16} /> Phase {i + 1} · {group.phase}
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map(([name, criteria]) => (
                    <article key={name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                      <p className="eyebrow text-gray-400">Deliverable</p>
                      <h4 className="mb-3 font-bold text-charcoal">{name}</h4>
                      <p className="eyebrow mb-1 flex items-center gap-1.5 text-gray-400">
                        <SealCheck size={14} className="text-saudi" /> Acceptance criteria
                      </p>
                      <p className="text-sm leading-relaxed text-gray-600">{criteria}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
