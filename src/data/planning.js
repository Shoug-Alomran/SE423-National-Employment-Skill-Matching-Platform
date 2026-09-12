// Content for Artifact 03 — Estimation & Scheduling.

export const wbs = {
  root: 'NESMP System',
  branches: [
    { id: '1', title: 'Foundation & Prep', items: ['Project Management', 'Requirements & UX', 'Architecture Design'] },
    { id: '2', title: 'User Portals', items: ['Job Seeker Portal', 'Employer Portal', 'Admin Dashboard'] },
    { id: '3', title: 'Intelligence & Data', items: ['Smart Matching Engine', 'Data Analytics', 'Reporting Services'] },
    { id: '4', title: 'Value-Added Services', items: ['Career Guidance & Training', 'Professional Networking'] },
    { id: '5', title: 'Integration & Delivery', items: ['Government Integrations', 'QA & Testing', 'Deployment & Ops'] },
  ],
};

export const estimation = {
  technique: 'Story Points (Agile Planning Poker)',
  crossCheck: 'Cross-checked with Expert Judgment (Delphi) for integration work',
  rationale:
    'Story points match the selected Scrum approach: teams estimate relative complexity together, which surfaces hidden uncertainty in the matching engine and government integrations. Estimates are refined every sprint as actual velocity replaces assumptions.',
  totals: [
    { value: '≈ 2,160', label: 'Total Story Points' },
    { value: '≈ 250', label: 'Person-Months' },
  ],
  basis: '3 Scrum teams × 7 members, ~120 points per 2-week sprint, 18 delivery sprints plus Sprint 0 and transition (~12 months).',
};

export const planningFactors = [
  {
    key: 'assumptions',
    title: 'Assumptions',
    tone: 'border-t-blue-500',
    iconTone: 'text-blue-500',
    items: [
      'Cloud infrastructure provisioned by Q3.',
      'Stakeholder availability for sprint reviews.',
      'Three stable Scrum teams for the project duration.',
    ],
  },
  {
    key: 'constraints',
    title: 'Constraints',
    tone: 'border-t-red-500',
    iconTone: 'text-red-500',
    items: [
      'Fixed national launch date set by MHRSD.',
      'Compliance with national data privacy laws (PDPL).',
      'Data hosted within the Kingdom.',
    ],
  },
  {
    key: 'dependencies',
    title: 'Dependencies',
    tone: 'border-t-amber-500',
    iconTone: 'text-amber-500',
    items: [
      'NIC integration API readiness.',
      'Ministry data schemas and access approvals.',
      'Training providers publishing course catalogs.',
    ],
  },
  {
    key: 'notes',
    title: 'Planning Notes',
    tone: 'border-t-purple-500',
    iconTone: 'text-purple-500',
    items: [
      'Estimates are re-baselined at each phase gate.',
      'A 15% schedule buffer is held for integration risk (G1).',
    ],
  },
];

export const agile = {
  epics: ['User Profile Management', 'Core Matching Algorithm', 'Gov Data Integration', 'Employer Job Posting', 'Career Pathways'],
  sprint0: {
    duration: '2 Weeks',
    tasks: [
      { title: 'Architecture Setup', detail: 'Cloud env provisioning' },
      { title: 'Design System Spike', detail: 'Initial component library' },
      { title: 'Integration Access Requests', detail: 'Yakeen / Absher sandboxes' },
      { title: 'CI/CD Pipeline', detail: 'Build, test and deploy automation' },
    ],
  },
  sprint1: {
    capacity: 120,
    stories: [
      { title: 'User Auth Module', points: 34 },
      { title: 'Job Seeker Profile (basic)', points: 29 },
      { title: 'Employer Registration', points: 26 },
      { title: 'Basic Landing Page', points: 13 },
      { title: 'Skills Taxonomy Import', points: 18 },
    ],
  },
};

export const planDriven = {
  tasks: [
    { task: 'Requirements Analysis', duration: '6 weeks', prereq: 'None' },
    { task: 'System Design', duration: '4 weeks', prereq: 'Requirements' },
    { task: 'DB Schema', duration: '2 weeks', prereq: 'Design' },
    { task: 'Core Portals Build', duration: '16 weeks', prereq: 'DB Schema' },
    { task: 'Matching Engine', duration: '20 weeks', prereq: 'Design' },
    { task: 'Gov Integrations', duration: '14 weeks', prereq: 'Core Portals' },
    { task: 'System Testing', duration: '6 weeks', prereq: 'All builds' },
  ],
  resources: [
    { role: 'Project Manager', allocation: 'All phases' },
    { role: 'Product Owner & UX Lead', allocation: 'Inception, Elaboration' },
    { role: 'Tech Lead & Developers', allocation: 'Elaboration → Transition' },
    { role: 'Data Scientists', allocation: 'Construction (Matching Engine)' },
    { role: 'QA & Compliance', allocation: 'Construction, Transition' },
  ],
  // start and length are in months (0–12).
  gantt: [
    { label: 'Phase 1: Core Platform', start: 0, length: 5, level: 0, tone: 'bg-saudi/80 border border-saudi' },
    { label: 'Requirements', start: 0, length: 1.5, level: 1, tone: 'bg-saudi/50' },
    { label: 'Design', start: 1, length: 1, level: 1, tone: 'bg-saudi/50' },
    { label: 'Portals & Matching MVP', start: 2, length: 3, level: 1, tone: 'bg-saudi/50' },
    { label: 'Phase 2: Expansion', start: 5, length: 4, level: 0, tone: 'bg-blue-500/80 border border-blue-600' },
    { label: 'Career & Training', start: 5, length: 3, level: 1, tone: 'bg-blue-400/60' },
    { label: 'Analytics', start: 6, length: 3, level: 1, tone: 'bg-blue-400/60' },
    { label: 'Phase 3: National Rollout', start: 9, length: 3, level: 0, tone: 'bg-amber-500/80 border border-amber-600' },
    { label: 'Gov Integrations', start: 8, length: 3, level: 1, tone: 'bg-amber-400/60' },
    { label: 'Launch & Hypercare', start: 11, length: 1, level: 1, tone: 'bg-amber-400/60' },
  ],
};

export const milestones = [
  { phase: 'Inception Phase', code: 'M1 – Planning', when: 'Months 1–2', text: 'Scope defined, architecture drafted, initial estimates.' },
  { phase: 'Elaboration Phase', code: 'M2 – Core Base', when: 'Months 3–4', text: 'Architecture baseline, portals and matching MVP.' },
  { phase: 'Construction Phase', code: 'M3 – Beta Release', when: 'Months 5–10', text: 'Career, training and analytics modules; public beta.' },
  { phase: 'Transition Phase', code: 'M4 – Go Live', when: 'Months 11–12', text: 'Government integrations, national launch, handover.' },
];
