// Content for Artifact 04 — Stakeholders, Communication & Metrics.

export const stakeholders = [
  {
    name: 'MHRSD',
    classification: 'Sponsor / Internal',
    classTone: 'bg-blue-100 text-blue-800',
    power: 'High',
    interest: 'High',
    effect: 'Provides funding, defines ultimate strategic goals, approves major changes.',
    communication: 'Executive summaries, milestone reports, budget updates.',
    strategy: 'Manage Closely',
  },
  {
    name: 'Job Seekers',
    classification: 'End User / External',
    classTone: 'bg-green-100 text-green-800',
    power: 'Low',
    interest: 'High',
    effect: 'Determines platform adoption rate. Requires intuitive UX and real value.',
    communication: 'Platform features, launch dates, support channels.',
    strategy: 'Keep Informed',
  },
  {
    name: 'Employers',
    classification: 'End User / External',
    classTone: 'bg-green-100 text-green-800',
    power: 'Medium',
    interest: 'High',
    effect: 'Provides job listings. Their engagement is critical for platform success.',
    communication: 'Integration guides, feature updates, candidate quality metrics.',
    strategy: 'Manage Closely',
  },
  {
    name: 'Students',
    classification: 'End User / External',
    classTone: 'bg-green-100 text-green-800',
    power: 'Low',
    interest: 'High',
    effect: 'Future workforce. Needs career guidance and skill mapping features.',
    communication: 'Skill requirements, internship opportunities, platform access.',
    strategy: 'Keep Informed',
  },
  {
    name: 'Educational Institutions',
    classification: 'Partner / External',
    classTone: 'bg-purple-100 text-purple-800',
    power: 'Medium',
    interest: 'Medium',
    effect: 'Aligns curriculum with market needs based on platform data.',
    communication: 'Skills gap reports, integration APIs, partnership meetings.',
    strategy: 'Keep Satisfied',
  },
  {
    name: 'Government Agencies',
    classification: 'Regulator / Internal',
    classTone: 'bg-blue-100 text-blue-800',
    power: 'High',
    interest: 'Low',
    effect: 'Ensures compliance with national digital standards and labor laws.',
    communication: 'Compliance audits, security reports, formal briefings.',
    strategy: 'Keep Satisfied',
  },
  {
    name: 'Technology Partners',
    classification: 'Vendor / External',
    classTone: 'bg-purple-100 text-purple-800',
    power: 'High',
    interest: 'High',
    effect: 'Builds and maintains the infrastructure. Direct impact on delivery.',
    communication: 'Daily standups, technical specs, performance metrics.',
    strategy: 'Manage Closely',
  },
];

export const strategyStyles = {
  'Manage Closely': 'text-saudi',
  'Keep Informed': 'text-blue-600',
  'Keep Satisfied': 'text-purple-600',
  Monitor: 'text-gray-600',
};

// Quadrants in reading order: top-left, top-right, bottom-left, bottom-right.
export const powerInterestMatrix = [
  { title: 'Keep Satisfied', subtitle: 'High power · Low interest', tone: 'bg-purple-50 hover:bg-purple-100', titleTone: 'text-purple-700', textTone: 'text-purple-700/80', members: ['Government Agencies', 'Educational Institutions'] },
  { title: 'Manage Closely', subtitle: 'High power · High interest', tone: 'bg-saudi-light hover:bg-saudi-100/80', titleTone: 'text-saudi', textTone: 'text-saudi/80', members: ['MHRSD', 'Employers', 'Technology Partners'] },
  { title: 'Monitor', subtitle: 'Low power · Low interest', tone: 'bg-gray-50 hover:bg-gray-100', titleTone: 'text-gray-600', textTone: 'text-gray-500', members: ['General Public', 'Media'] },
  { title: 'Keep Informed', subtitle: 'Low power · High interest', tone: 'bg-blue-50 hover:bg-blue-100', titleTone: 'text-blue-700', textTone: 'text-blue-700/80', members: ['Job Seekers', 'Students'] },
];

export const communicationPlan = [
  { info: 'Project status', why: 'Ensures alignment on progress and immediate roadblocks.', audience: 'MHRSD, Core Team', method: 'Executive Dashboard, Meeting', owner: 'Project Manager', frequency: 'Weekly' },
  { info: 'Risks', why: 'Allows for proactive mitigation of threats to project success.', audience: 'Steering Committee, Partners', method: 'Risk Register Report, Email', owner: 'Risk Officer', frequency: 'Bi-weekly' },
  { info: 'Scope changes', why: 'Prevents scope creep and ensures budget/timeline alignment.', audience: 'MHRSD, Tech Partners', method: 'Change Request Document', owner: 'Project Manager', frequency: 'As Needed' },
  { info: 'Schedule updates', why: 'Coordinates dependencies between different teams and vendors.', audience: 'All Internal Teams', method: 'Sprint Review, Standup', owner: 'Scrum Master', frequency: 'Every Sprint' },
  { info: 'Metrics', why: 'Demonstrates value realization and platform adoption.', audience: 'MHRSD, Public (selected)', method: 'Analytics Report, Press Release', owner: 'Data Analytics Lead', frequency: 'Monthly' },
];

export const metrics = [
  {
    key: 'registration',
    title: 'User Registration Rate',
    tone: 'bg-blue-50 text-blue-600',
    rationale: 'Indicates initial platform adoption and marketing effectiveness among target demographics.',
    measure: 'Total number of verified accounts created per week via the authentication service.',
    frequency: 'Weekly',
    responsible: 'Marketing & Analytics Team',
    benefit: 'Justifies ongoing funding and validates the demand for the platform in the market.',
  },
  {
    key: 'match',
    title: 'Successful Match Rate',
    tone: 'bg-green-50 text-green-600',
    rationale: 'The core value proposition of the platform. Measures the effectiveness of the matching algorithm.',
    measure: 'Percentage of job applications resulting in an interview or formal offer through the platform.',
    frequency: 'Monthly',
    responsible: 'Data Science Lead',
    benefit: 'Directly correlates with solving the national employment challenge; proves algorithmic efficacy.',
  },
  {
    key: 'uptime',
    title: 'System Uptime & Reliability',
    tone: 'bg-purple-50 text-purple-600',
    rationale: 'Critical for maintaining user trust and ensuring continuous service availability nationwide.',
    measure: 'Automated monitoring tools calculating the percentage of time core services are accessible.',
    frequency: 'Real-time / Daily Report',
    responsible: 'DevOps Manager',
    benefit: 'Ensures technical stability, minimizes reputational risk, and satisfies SLA requirements.',
  },
  {
    key: 'retention',
    title: 'Employer Retention Rate',
    tone: 'bg-amber-50 text-amber-600',
    rationale: 'Measures ongoing value for businesses. Without consistent employer usage, the platform fails.',
    measure: 'Percentage of registered employers who post at least one new job within a 90-day period.',
    frequency: 'Quarterly',
    responsible: 'B2B Account Management',
    benefit: 'Indicates long-term sustainability and healthy supply side of the employment marketplace.',
  },
];

// Targets shown in the performance overview. Live values will come from the platform after launch.
export const kpiTargets = [
  { label: 'Total Active Users', target: '1M+ by end of Year 1' },
  { label: 'Match Success Rate', target: '≥ 30% interview rate' },
  { label: 'System Uptime', target: '≥ 99.9% monthly' },
  { label: 'Employer Retention', target: '≥ 70% per quarter' },
];
