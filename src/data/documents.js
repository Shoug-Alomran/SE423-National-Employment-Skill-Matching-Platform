// Documents listed on the Documents page. Files live in public/artifacts/.
// Add a new artifact here and it appears on that page, in search and on its artifact page's bar.
export const documents = [
  {
    id: 'artifact-1',
    artifact: 1,
    title: 'Overview, Organizational Structure & Scope',
    description: 'The problem and opportunity, project goals, stakeholders, team and organization, and the detailed scope.',
    file: 'artifacts/artifact-1-overview-and-scope.pdf',
    format: 'PDF',
    pages: 11,
    path: '/project',
  },
  {
    id: 'artifact-2',
    artifact: 2,
    title: 'Methodology Analysis, Risks & Decision',
    description: 'Scrum, XP, Waterfall and Incremental compared, the risk register, and the final methodology decision.',
    file: 'artifacts/artifact-2-methodology-and-risk.pdf',
    format: 'PDF',
    pages: 13,
    path: '/methodology-risk',
  },
  {
    id: 'risk-register',
    artifact: 2,
    title: 'Risk Register Workbook',
    description: 'The full risk register for all four methodologies, as an Excel workbook. This file downloads rather than opening in the browser.',
    file: 'artifacts/artifact-2-risk-register.xlsx',
    format: 'Excel',
    path: '/methodology-risk',
  },
  {
    id: 'artifact-3',
    artifact: 3,
    title: 'Estimation & Scheduling',
    description: 'The work breakdown structure, estimates, product backlog, release plan and a fully specified Sprint 1.',
    file: 'artifacts/artifact-3-estimation-and-scheduling.pdf',
    format: 'PDF',
    pages: 22,
    path: '/planning',
  },
];

export const documentUrl = (doc) => `${import.meta.env.BASE_URL}${doc.file}`;
