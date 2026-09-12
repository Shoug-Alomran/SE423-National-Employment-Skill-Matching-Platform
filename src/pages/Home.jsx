import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bank,
  Briefcase,
  ChartBar,
  ClipboardText,
  Clock,
  Cpu,
  GraduationCap,
  Lightning,
  MagnifyingGlass,
  SealCheck,
  Stack,
  TrendUp,
  User,
  Users,
  UsersThree,
  Warning,
} from '@phosphor-icons/react';

const challenges = [
  {
    icon: Stack,
    tone: 'bg-red-50 border-red-100 text-red-500',
    title: 'Fragmented Platforms',
    text: 'Job seekers must navigate dozens of disparate portals, while employers struggle to consolidate candidate pools.',
  },
  {
    icon: Clock,
    tone: 'bg-orange-50 border-orange-100 text-orange-500',
    title: 'Manual Hiring Processes',
    text: 'HR departments spend excessive time manually filtering resumes rather than engaging with qualified candidates.',
  },
  {
    icon: Warning,
    tone: 'bg-amber-50 border-amber-100 text-amber-500',
    title: 'Skill Mismatches',
    text: 'Educational outcomes often do not align with evolving industry requirements, creating a gap in the labor market.',
  },
];

const modules = [
  {
    icon: Lightning,
    title: '1. Smart Matching Engine',
    text: 'The core algorithm that evaluates non-obvious skill intersections to surface the best candidates for specific roles, reducing time-to-hire.',
  },
  {
    icon: Briefcase,
    title: '2. Employer Portal',
    text: 'A unified dashboard for organizations to post opportunities, manage talent pipelines, and access predictive hiring analytics in one place.',
  },
  {
    icon: GraduationCap,
    title: '3. Career Guidance & Training',
    text: 'Integrated upskilling pathways and personalized career roadmaps aligned with current market demands and Vision 2030 objectives.',
  },
  {
    icon: ChartBar,
    title: '4. Data Analytics Dashboard',
    text: 'Macro-level insights for policymakers detailing real-time labor market trends, skill shortages, and employment demographics.',
  },
  {
    icon: UsersThree,
    title: '5. Professional Networking',
    text: 'Secure spaces for industry professionals, mentors, and fresh graduates to connect, fostering a collaborative national workforce.',
  },
];

const impacts = [
  {
    icon: TrendUp,
    title: 'Improved Labor Market Efficiency',
    text: 'Drastically reduced time-to-hire and lowered recruitment costs across both public and private sectors.',
  },
  {
    icon: MagnifyingGlass,
    title: 'Reduced Skill Mismatches',
    text: 'Higher retention rates and job satisfaction by ensuring candidates are placed in roles fitting their true capabilities.',
  },
  {
    icon: Users,
    title: 'Empowered Workforce',
    text: 'Providing citizens with clear, actionable pathways for continuous learning and career advancement.',
  },
  {
    icon: Bank,
    title: 'Informed Policymaking',
    text: 'Equipping government bodies with precise, real-time data to drive educational and economic strategies.',
  },
];

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Core Platform',
    text: 'Development of the Smart Matching Engine, primary Job Seeker profiles, and essential Employer portal functions.',
  },
  {
    phase: 'Phase 2',
    title: 'Career & Training Expansion',
    text: 'Integration of educational pathways, upskilling modules, and preliminary data analytics dashboards.',
  },
  {
    phase: 'Phase 3',
    title: 'National Rollout',
    text: 'Full-scale launch, advanced networking features, and integration with broader government API ecosystems.',
  },
];

function HeroIllustration() {
  return (
    <svg className="h-full w-full p-6 sm:p-8" viewBox="0 0 400 400" fill="none" role="img" aria-label="Diagram of job seekers and employers connected through a central matching engine">
      <path d="M100 150 C 150 150, 200 200, 250 150" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M150 250 C 200 250, 250 200, 300 250" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M80 200 C 180 200, 220 200, 320 200" stroke="#006C35" strokeWidth="3" strokeLinecap="round" className="animate-pulse-slow" />
      <path d="M120 100 C 200 100, 200 200, 280 100" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M120 300 C 200 300, 200 200, 280 300" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />

      <g transform="translate(80, 200)">
        <circle r="24" fill="white" stroke="#006C35" strokeWidth="2" />
        <path d="M-8 4C-8 1.8 -6.2 0 -4 0H4C6.2 0 8 1.8 8 4V8C8 10.2 6.2 12 4 12H-4C-6.2 12 -8 10.2 -8 8V4Z" fill="#006C35" />
        <circle cy="-6" r="4" fill="#006C35" />
      </g>

      <circle cx="100" cy="150" r="12" fill="white" stroke="#9CA3AF" strokeWidth="2" />
      <circle cx="120" cy="100" r="8" fill="#E5E7EB" />
      <circle cx="150" cy="250" r="12" fill="white" stroke="#9CA3AF" strokeWidth="2" />
      <circle cx="120" cy="300" r="8" fill="#E5E7EB" />

      <g transform="translate(200, 200)">
        <circle r="40" fill="#006C35" className="animate-pulse-slow" />
        <circle r="32" fill="white" stroke="#006C35" strokeWidth="2" />
        <path d="M-10 -10 H10 V10 H-10 Z" stroke="#006C35" strokeWidth="2" strokeLinejoin="round" />
        <path d="M-4 -4 H4 V4 H-4 Z" fill="#006C35" />
        <g stroke="#006C35" strokeWidth="2">
          <line x1="-10" y1="-5" x2="-14" y2="-5" />
          <line x1="-10" y1="5" x2="-14" y2="5" />
          <line x1="10" y1="-5" x2="14" y2="-5" />
          <line x1="10" y1="5" x2="14" y2="5" />
          <line x1="-5" y1="-10" x2="-5" y2="-14" />
          <line x1="5" y1="-10" x2="5" y2="-14" />
          <line x1="-5" y1="10" x2="-5" y2="14" />
          <line x1="5" y1="10" x2="5" y2="14" />
        </g>
      </g>

      <g transform="translate(320, 200)">
        <circle r="24" fill="white" stroke="#006C35" strokeWidth="2" />
        <path d="M-8 -6 H8 V12 H-8 Z" stroke="#006C35" strokeWidth="2" strokeLinejoin="round" />
        <path d="M-4 -6 V-10 H4 V-6" stroke="#006C35" strokeWidth="2" strokeLinejoin="round" />
        <line x1="-8" y1="0" x2="8" y2="0" stroke="#006C35" strokeWidth="2" />
      </g>

      <circle cx="250" cy="150" r="12" fill="white" stroke="#9CA3AF" strokeWidth="2" />
      <circle cx="280" cy="100" r="8" fill="#E5E7EB" />
      <circle cx="300" cy="250" r="12" fill="white" stroke="#9CA3AF" strokeWidth="2" />
      <circle cx="280" cy="300" r="8" fill="#E5E7EB" />
    </svg>
  );
}

function FlowNode({ icon: Icon, label, shape = 'rounded-full', tone = 'bg-gray-50 border-gray-200 text-charcoal-lighter' }) {
  return (
    <div className="z-10 flex w-full flex-col items-center bg-white lg:w-[15%]">
      <div className={`mb-3 flex h-16 w-16 items-center justify-center border-2 shadow-sm ${shape} ${tone}`}>
        <Icon size={30} />
      </div>
      <h3 className="text-center text-sm font-bold text-charcoal">{label}</h3>
    </div>
  );
}

function FlowArrow({ reverse, accent }) {
  return (
    <div
      aria-hidden="true"
      className={`z-10 flex justify-center bg-white lg:w-[5%] ${accent ? 'text-saudi-400' : 'text-gray-300'} ${
        reverse ? '-rotate-90 lg:rotate-180' : 'rotate-90 lg:rotate-0'
      }`}
    >
      <ArrowRight size={24} weight="bold" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pb-20 pt-16 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-[600px] w-[600px] rounded-full bg-saudi-50 opacity-60 blur-3xl" />
        <div className="container-page relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-fade-in-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-saudi-100 bg-saudi-50 px-3 py-1 text-sm font-medium text-saudi">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saudi-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-saudi-500" />
                </span>
                Proposed National Initiative
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
                Connecting Saudi Talent with <span className="text-saudi">Opportunity</span>
              </h1>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-charcoal-lighter">
                A unified, intelligent national platform designed to seamlessly bridge the gap between job seekers and
                employers through advanced skill-based matching, comprehensive career guidance, and data-driven
                workforce insights.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/project" className="btn-primary px-8 py-4">
                  Explore the Project
                  <ArrowRight size={16} weight="bold" />
                </Link>
                <Link to="/methodology-risk" className="btn-secondary px-8 py-4">
                  Read the Proposal
                </Link>
              </div>
            </div>

            <div
              className="relative flex h-[340px] w-full animate-fade-in-up items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 shadow-inner sm:h-[420px] lg:h-[500px]"
              style={{ animationDelay: '0.2s' }}
            >
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="border-t border-gray-100 bg-gray-50 py-20 lg:py-24">
        <div className="container-page">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-charcoal">The Challenge: A Fragmented Landscape</h2>
            <p className="text-lg text-charcoal-lighter">
              Currently, the employment ecosystem suffers from disconnected systems, manual processes, and information
              silos, leading to significant inefficiencies.
            </p>
          </div>
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-gray-200 md:block" />
            {challenges.map(({ icon: Icon, tone, title, text }) => (
              <div
                key={title}
                className="relative z-10 flex flex-col items-center rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full border ${tone}`}>
                  <Icon size={32} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-charcoal">{title}</h3>
                <p className="text-sm text-charcoal-lighter">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-page">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-charcoal">The Solution: Intelligent Connection</h2>
            <p className="text-lg text-charcoal-lighter">
              A centralized platform utilizing smart algorithms to translate profiles and job descriptions into a common
              taxonomy of skills.
            </p>
          </div>

          <div className="relative flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-0">
            <div className="absolute left-0 top-1/2 -z-0 hidden h-0.5 w-full -translate-y-1/2 bg-gray-100 lg:block" />
            <FlowNode icon={User} label="Job Seekers" />
            <FlowArrow />
            <FlowNode icon={SealCheck} label="Skills & Qualifications" shape="rounded-lg" tone="bg-blue-50 border-blue-100 text-blue-600" />
            <FlowArrow accent />
            <div className="z-20 my-4 flex w-full flex-col items-center lg:my-0 lg:w-[20%]">
              <div className="flex h-44 w-44 flex-col items-center justify-center rounded-2xl border-4 border-saudi-100 bg-saudi text-white shadow-card transition-transform duration-300 hover:scale-105 sm:h-48 sm:w-48">
                <Cpu size={48} className="mb-3" />
                <h3 className="text-center text-base font-bold leading-tight">
                  Smart
                  <br />
                  Matching
                  <br />
                  Engine
                </h3>
              </div>
            </div>
            <FlowArrow reverse accent />
            <FlowNode icon={ClipboardText} label="Job Requirements" shape="rounded-lg" tone="bg-purple-50 border-purple-100 text-purple-600" />
            <FlowArrow reverse />
            <FlowNode icon={Bank} label="Employers" />
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="border-y border-gray-100 bg-gray-50 py-20 lg:py-24">
        <div className="container-page">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-charcoal">Core Platform Modules</h2>
            <p className="text-lg text-charcoal-lighter">
              Five integrated systems designed to deliver a comprehensive employment solution for the nation.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {modules.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="w-full rounded-xl border border-gray-200 bg-white p-8 shadow-subtle transition-shadow hover:shadow-card md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.35rem)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-saudi-50 text-saudi">
                  <Icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-charcoal">{title}</h3>
                <p className="text-sm leading-relaxed text-charcoal-lighter">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-page">
          <div className="mb-14 border-l-4 border-saudi pl-6">
            <h2 className="mb-2 text-3xl font-bold text-charcoal">Expected National Impact</h2>
            <p className="max-w-2xl text-lg text-charcoal-lighter">
              Strategic outcomes aligning with national digital transformation goals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {impacts.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-lg border-t-4 border-saudi-600 bg-gray-50 p-6 shadow-sm transition-all hover:bg-white hover:shadow-md"
              >
                <Icon size={40} className="mb-4 text-saudi" />
                <h3 className="mb-2 text-lg font-bold text-charcoal">{title}</h3>
                <p className="text-sm text-charcoal-lighter">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="overflow-hidden border-t border-gray-100 bg-gray-50 py-20 lg:py-24">
        <div className="container-page">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-charcoal">Implementation Roadmap</h2>
            <p className="text-lg text-charcoal-lighter">A structured, phased approach to delivery and national rollout.</p>
          </div>
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-1 bg-gray-200 md:block" />
            <div className="absolute left-[16.66%] top-8 hidden h-1 w-1/3 bg-saudi md:block" />
            <ol className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
              {roadmap.map((step, i) => (
                <li key={step.phase} className="flex flex-col items-center text-center">
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 text-xl font-bold ${
                      i === 0 ? 'border-white bg-saudi text-white shadow-md' : 'border-gray-200 bg-white text-gray-400 shadow-sm'
                    }`}
                  >
                    {i + 1}
                  </div>
                  <p className={`mb-2 text-sm font-bold uppercase tracking-wider ${i === 0 ? 'text-saudi' : 'text-gray-500'}`}>
                    {step.phase}
                  </p>
                  <h3 className="mb-3 text-xl font-bold text-charcoal">{step.title}</h3>
                  <p className="text-sm text-charcoal-lighter">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-14 text-center">
            <Link to="/planning" className="btn-secondary">
              View the Detailed Schedule
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
