// Builds the site search index from the page data files.
// Each entry links to a page and, optionally, a section id on that page.
// When you add a section or page, add an entry here so it can be found.
import { navItems } from '../config.js';
import { methodologies, risks, selectedMethodology } from './methodologyRisk.js';
import { milestones, planningFactors, wbs } from './planning.js';
import { communicationPlan, metrics, stakeholders } from './stakeholders.js';
import { members } from './team.js';

const pageLabel = Object.fromEntries(navItems.map((n) => [n.to, n.label]));

function entry(type, title, path, hash, text = '') {
  return { id: `${path}#${hash ?? ''}:${type}:${title}`, type, title, path, hash, page: pageLabel[path], text };
}

const pages = [
  entry('Page', 'Home', '/', null, 'National Employment & Skill Matching Platform overview, challenge, solution, modules, impact, roadmap'),
  entry('Page', 'Project Overview', '/project', null, 'Artifact 01 vision objectives organization scope'),
  entry('Page', 'Methodology & Risk', '/methodology-risk', null, 'Artifact 02 development approaches risk management'),
  entry('Page', 'Estimation & Scheduling', '/planning', null, 'Artifact 03 planning WBS estimation schedule'),
  entry('Page', 'Stakeholders, Communication & Metrics', '/stakeholders-metrics', null, 'Artifact 04 stakeholder communication performance measurement'),
  entry('Page', 'Project Team', '/team', null, 'team members roles responsibilities collaboration'),
];

const sections = [
  entry('Section', 'The Challenge: A Fragmented Landscape', '/', 'challenge', 'fragmented platforms manual hiring processes skill mismatches'),
  entry('Section', 'The Solution: Intelligent Connection', '/', 'solution', 'job seekers skills qualifications smart matching engine job requirements employers'),
  entry('Section', 'Core Platform Modules', '/', 'modules', 'smart matching engine employer portal career guidance training data analytics dashboard professional networking'),
  entry('Section', 'Expected National Impact', '/', 'impact', 'labor market efficiency skill mismatches empowered workforce informed policymaking Vision 2030'),
  entry('Section', 'Implementation Roadmap', '/', 'roadmap', 'phase 1 core platform phase 2 career training expansion phase 3 national rollout'),

  entry('Section', 'Problem & Opportunity', '/project', 'problem', 'fragmented employment ecosystem job boards hiring inefficiencies unified intelligent platform'),
  entry('Section', 'Project Goals & Benefits', '/project', 'goals', 'improve labor market efficiency reduce skill mismatches empower workforce informed policymaking MHRSD'),
  entry('Section', 'Project Scope', '/project', 'scope', 'in scope out of scope matching engine portals career guidance analytics networking government integrations Yakeen Absher payroll HR visa'),
  entry('Section', 'Initial Stakeholders', '/project', 'stakeholders', 'MHRSD job seekers employers students educational institutions government agencies technology partners'),
  entry('Section', 'Organizational Structure', '/project', 'org-structure', 'steering committee project management office product design engineering policy strategy'),
  entry('Section', 'Implementation Approach', '/project', 'implementation', 'phases core matching engine portals career guidance national rollout'),

  entry('Section', 'Methodology Analysis', '/methodology-risk', 'methodology-analysis', 'plan-driven agile strengths weaknesses project fit team fit stakeholder fit'),
  entry('Section', `Selected Methodology: ${selectedMethodology.name}`, '/methodology-risk', 'selected-methodology', `${selectedMethodology.qualifier} ${selectedMethodology.why}`),
  entry('Section', 'Risk Overview', '/methodology-risk', 'risk-overview', 'total risks high priority methodology-specific general'),
  entry('Section', 'Risk Register', '/methodology-risk', 'risk-register', 'probability impact exposure first indicator mitigation export CSV'),
  entry('Section', 'Risk Matrix Visualization', '/methodology-risk', 'risk-matrix', 'probability impact severity heat map'),

  entry('Section', 'Work Breakdown Structure', '/planning', 'wbs', 'WBS deliverables hierarchy'),
  entry('Section', 'Estimation Approach', '/planning', 'estimation', 'story points planning poker person-months effort'),
  entry('Section', 'Planning Assumptions', '/planning', 'assumptions', 'assumptions constraints dependencies planning notes'),
  entry('Section', 'Schedule & Delivery Model', '/planning', 'schedule', 'agile sprint backlog epics sprint 0 sprint 1 plan-driven gantt chart task breakdown resource allocation'),
  entry('Section', 'Project Timeline Overview', '/planning', 'timeline', 'milestones inception elaboration construction transition go live'),

  entry('Section', 'Stakeholder Analysis', '/stakeholders-metrics', 'stakeholder-analysis', 'power interest classification management strategy'),
  entry('Section', 'Power–Interest Matrix', '/stakeholders-metrics', 'power-interest', 'manage closely keep satisfied keep informed monitor'),
  entry('Section', 'Communication Plan', '/stakeholders-metrics', 'communication-plan', 'information audience method responsible frequency'),
  entry('Section', 'Project Metrics', '/stakeholders-metrics', 'project-metrics', 'KPIs rationale measurement'),
  entry('Section', 'Performance Overview', '/stakeholders-metrics', 'performance-overview', 'dashboard targets active users match rate uptime retention'),

  entry('Section', 'Core Members', '/team', 'core-members', 'team members roles'),
  entry('Section', 'Responsibility Distribution', '/team', 'responsibilities', 'project management planning risk stakeholder documentation quality'),
];

const content = [
  ...[...methodologies.planDriven, ...methodologies.agile].map((m) =>
    entry('Methodology', m.name, '/methodology-risk', 'methodology-analysis', `${m.strengths} ${m.weaknesses}`),
  ),
  ...risks.map((r) =>
    entry('Risk', `${r.id} · ${r.name}`, '/methodology-risk', 'risk-register', `${r.description} ${r.indicator} ${r.mitigation}`),
  ),
  ...wbs.branches.map((b) => entry('WBS', `${b.id}.0 ${b.title}`, '/planning', 'wbs', b.items.join(' '))),
  ...planningFactors.map((f) => entry('Planning', f.title, '/planning', 'assumptions', f.items.join(' '))),
  ...milestones.map((m) => entry('Milestone', `${m.phase} (${m.code})`, '/planning', 'timeline', `${m.when} ${m.text}`)),
  ...stakeholders.map((s) =>
    entry('Stakeholder', s.name, '/stakeholders-metrics', 'stakeholder-analysis', `${s.classification} ${s.strategy} ${s.effect} ${s.communication}`),
  ),
  ...communicationPlan.map((c) =>
    entry('Communication', c.info, '/stakeholders-metrics', 'communication-plan', `${c.why} ${c.audience} ${c.method} ${c.owner} ${c.frequency}`),
  ),
  ...metrics.map((m) => entry('Metric', m.title, '/stakeholders-metrics', 'project-metrics', `${m.rationale} ${m.measure} ${m.responsible}`)),
  ...members.map((m) => entry('Team', m.name, '/team', 'core-members', `${m.role} ${m.responsibilities.join(' ')}`)),
];

export const searchIndex = [...pages, ...sections, ...content];
export const defaultResults = pages;

export function searchSite(query, limit = 20) {
  const q = query.trim().toLowerCase();
  if (!q) return defaultResults;
  const tokens = q.split(/\s+/);

  return searchIndex
    .map((item) => {
      const title = item.title.toLowerCase();
      const haystack = `${title} ${item.type} ${item.page} ${item.text}`.toLowerCase();
      if (!tokens.every((t) => haystack.includes(t))) return null;
      let score = 0;
      if (title.startsWith(q)) score += 100;
      else if (title.includes(q)) score += 50;
      score += tokens.filter((t) => title.includes(t)).length * 10;
      if (item.type === 'Page') score += 6;
      if (item.type === 'Section') score += 3;
      return { item, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.item);
}
