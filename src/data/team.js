// Team members shown on the Team page.
// Replace names, roles and links with your team's details.
// Leave github or linkedin as an empty string ('') to hide that icon.

// Each member's work, matching project-task-distribution.html.
export const artifacts = [
  { key: 'a1', title: 'Artifact 1', subtitle: 'Overview, organization and scope' },
  { key: 'a2', title: 'Artifact 2', subtitle: 'Methodology, risks and decision' },
  { key: 'a3', title: 'Artifact 3', subtitle: 'Estimation and scheduling' },
  { key: 'a4', title: 'Artifact 4', subtitle: 'Stakeholders, communications and metrics' },
  { key: 'talk', title: 'Final presentation', subtitle: 'Ten minutes covering all four artifacts' },
];

export const members = [
  {
    name: 'Hatoon Abdullah',
    role: 'Project Manager',
    responsibilities: ['Stakeholder list and Phase 1 scope', 'Spiral analysis and external risks', 'Communications plan'],
    contributions: {
      a1: 'Initial stakeholder list and Phase 1 scope: matching engine, job seeker portal and employer portal.',
      a2: 'Spiral analysis and the four risks not tied to the methodology, fully scored.',
      a3: 'WBS branches and estimated user stories for the employer portal, career guidance and analytics dashboard.',
      a4: 'Communications plan covering status, risks, changes, releases and metric reports.',
      talk: 'Why the methodology was chosen and the top risks.',
    },
    github: '',
    linkedin: '',
  },
  {
    name: 'Yara Faris Faihan Albugami',
    role: 'Planning Lead',
    responsibilities: ['Problem statement and goals', 'Methodology comparison and decision', 'WBS and Sprint 1 backlog'],
    contributions: {
      a1: 'Problem and opportunity statement, SMART goals and projected benefits.',
      a2: 'Waterfall analysis, the comparison matrix and the final methodology decision.',
      a3: 'WBS branches and user stories for the matching engine and job seeker portal, plus the fully elaborated Sprint 1 backlog.',
      a4: 'Stakeholder register and power-interest grid.',
      talk: 'Opening: the problem and what the platform will deliver.',
    },
    github: '',
    linkedin: '',
  },
  {
    name: 'Rose Saeed Rakan Al Rakan',
    role: 'Risk & Methodology',
    responsibilities: ['Organizational structure', 'Scrum analysis and methodology risks', 'Process overview and metrics'],
    contributions: {
      a1: 'Team and organizational structure, including the org chart.',
      a2: 'Scrum analysis and the four risks unique to the chosen methodology.',
      a3: 'Technical process overview (sprints, ceremonies, Sprint 0, spikes) and the professional networking stories.',
      a4: 'The four project metrics: rationale, measurement and use.',
      talk: 'How the platform gets built: process, backlog and Sprint 1.',
    },
    github: '',
    linkedin: '',
  },
  {
    name: 'Shoug Fawaz Abdullah Alomran',
    role: 'Docs & Quality',
    responsibilities: ['Later-phase scope and constraints', 'Kanban analysis and risk register', 'Release plan and cohesion audit'],
    contributions: {
      a1: 'Phase 2 and 3 scope, exclusions, assumptions and constraints.',
      a2: 'Kanban analysis and the Excel risk register workbook.',
      a3: 'Integration and platform stories, project management and rollout WBS branches, epic table and release roadmap.',
      a4: 'Cohesion audit across all four artifacts and final formatting.',
      talk: 'Stakeholders, communication and metrics, then the close.',
    },
    github: 'https://github.com/Shoug-Alomran',
    linkedin: '',
  },
];

export const tools = [
  { name: 'GitHub', use: 'Version Control', key: 'github' },
  { name: 'Notion', use: 'Documentation', key: 'notion' },
  { name: 'MS Teams', use: 'Coordination', key: 'teams' },
  { name: 'Figma', use: 'Wireframing', key: 'figma' },
];
