// Content for Artifact 02 — Methodology & Risk.
// Edit the text here; the page layout, counts and risk matrix update automatically.

export const methodologies = {
  planDriven: [
    {
      name: 'Waterfall',
      strengths:
        'Predictable timelines and budgets, comprehensive up-front documentation, and clear phase-gate milestones that suit formal government approval and procurement processes.',
      weaknesses:
        'Inflexible to changing requirements, testing happens late in the lifecycle, and users see no working software until the end — risky for an AI matching engine whose behaviour must be tuned with real feedback.',
      fit: {
        project: 'Low. Requirements for matching, career guidance and analytics will evolve as data and policy mature.',
        team: 'Medium. Works with large teams, but slows cross-team learning between engineering and data science.',
        stakeholder: 'Medium. Suits MHRSD reporting, but limits end-user feedback until late.',
      },
    },
    {
      name: 'Spiral Model',
      strengths:
        'Strong, explicit risk management in every cycle, with iterative prototyping and refinement within each loop — well suited to high-risk, high-cost systems.',
      weaknesses:
        'Complex to manage, depends on highly skilled risk assessors, and heavy analysis per loop makes it costly and slow to reach a usable release.',
      fit: {
        project: 'Medium. The risk focus fits national scale, but release cadence is too slow for phased rollout.',
        team: 'Low. Needs specialist risk expertise the core team does not have.',
        stakeholder: 'Medium. Regular reviews, but formal and infrequent.',
      },
    },
  ],
  agile: [
    {
      name: 'Scrum',
      strengths:
        'High adaptability through fixed-length sprints, frequent delivery of working increments, clear roles (Product Owner, Scrum Master, Developers) and built-in inspection through reviews and retrospectives.',
      weaknesses:
        'Risk of scope creep without strong backlog governance, requires dedicated client involvement, and final cost is less predictable without release-level planning.',
      fit: {
        project: 'High. Evolving requirements and a phased rollout map naturally to sprints and releases.',
        team: 'High. Cross-functional teams of engineers, designers and data scientists can scale via multiple Scrum teams.',
        stakeholder: 'High. Sprint reviews give MHRSD and pilot users continuous visibility and influence.',
      },
    },
    {
      name: 'Kanban',
      strengths:
        'Visual workflow, continuous delivery, WIP limits that expose bottlenecks, and flexibility to reprioritise at any time without waiting for a sprint boundary.',
      weaknesses:
        'No fixed iterations or built-in planning cadence, making milestone forecasting harder; bottlenecks can go unnoticed if the board is not monitored closely.',
      fit: {
        project: 'Medium. Excellent for post-launch support and operations, weaker for building new modules to a deadline.',
        team: 'Medium. Good for capacity-driven work, but gives less structure to a new team.',
        stakeholder: 'Low. Lacks the regular review events sponsors expect for a national programme.',
      },
    },
  ],
};

export const selectedMethodology = {
  name: 'Scrum',
  qualifier: 'with phase-gated releases',
  why:
    'Scrum lets the team deliver a working platform incrementally, validate the matching engine with real users early, and absorb changes in labor policy and data availability without re-planning the whole project. Each two-week sprint produces a reviewable increment.',
  fit:
    "The platform's three implementation phases become release goals, each ending in a formal MHRSD gate review for compliance, security and data-privacy sign-off. This keeps agile delivery aligned with government governance and the needs of job seekers, employers and integration partners.",
  preferred:
    'Waterfall and Spiral offer predictability and risk control but delay user feedback and working software. Kanban is flexible but lacks the cadence needed for milestone reporting. We accept less up-front cost certainty in exchange for adaptability, mitigated by release-level planning and velocity tracking. Kanban remains the model for post-launch operations.',
};

export const probabilityLabels = ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost Certain'];
export const impactLabels = ['Negligible', 'Minor', 'Moderate', 'Major', 'Extreme'];

// probability and impact are on a 1–5 scale; exposure = probability × impact.
export const risks = [
  {
    id: 'M1',
    category: 'methodology',
    name: 'Scope Creep',
    description:
      'An evolving backlog and frequent stakeholder requests expand scope sprint by sprint, pushing Phase 1 release dates and budget.',
    probability: 4,
    impact: 4,
    indicator: 'Backlog grows by more than 15% between releases, or unplanned items enter an active sprint.',
    mitigation:
      'Product Owner owns a prioritised backlog; changes enter via backlog refinement only; release goals are locked at the phase gate; formal change requests for anything affecting the release scope.',
  },
  {
    id: 'M2',
    category: 'methodology',
    name: 'Limited Product Owner Availability',
    description:
      'MHRSD representatives cannot attend sprint reviews or answer questions quickly, causing blocked stories and misaligned increments.',
    probability: 3,
    impact: 4,
    indicator: 'Two consecutive sprint reviews without sponsor attendance, or stories blocked waiting for decisions for more than 3 days.',
    mitigation:
      'Appoint a dedicated, empowered Product Owner and a delegate; agree a decision-response SLA in the project charter; schedule reviews a quarter in advance.',
  },
  {
    id: 'M3',
    category: 'methodology',
    name: 'Insufficient Compliance Documentation',
    description:
      "Scrum's lightweight documentation falls short of government audit, security and data-privacy documentation requirements.",
    probability: 3,
    impact: 3,
    indicator: 'Gate-review checklist items marked incomplete, or audit requests that cannot be answered from existing artifacts.',
    mitigation:
      'Add compliance documentation to the Definition of Done; maintain architecture decision records; the Docs & Quality lead reviews artifacts every sprint.',
  },
  {
    id: 'M4',
    category: 'methodology',
    name: 'Multi-Team Coordination Overhead',
    description:
      'Multiple Scrum teams working on shared components (matching engine, integrations) create dependency conflicts and unstable velocity.',
    probability: 2,
    impact: 3,
    indicator: 'Velocity varies by more than 25% between sprints, or cross-team dependencies block stories.',
    mitigation:
      'Weekly Scrum-of-Scrums; shared dependency board; joint sprint planning for integration work; stable team membership.',
  },
  {
    id: 'G1',
    category: 'general',
    name: 'Government API Integration Delays',
    description:
      'Integrations with national systems (e.g., Yakeen, Absher, GOSI) depend on external agencies for access approvals, sandboxes and API changes.',
    probability: 4,
    impact: 5,
    indicator: 'API access or sandbox credentials not granted by Sprint 4; integration test environments unavailable.',
    mitigation:
      'Start access requests during Sprint 0; build against mocked contracts; assign an integration liaison; sequence dependent features later in the release.',
  },
  {
    id: 'G2',
    category: 'general',
    name: 'Data Privacy & Security Breach',
    description:
      'Personal data of job seekers and employers is exposed or processed in breach of the national Personal Data Protection Law (PDPL) and cybersecurity controls.',
    probability: 2,
    impact: 5,
    indicator: 'Penetration test findings rated high or critical; anomalous access in audit logs.',
    mitigation:
      'Privacy-by-design reviews; encryption in transit and at rest; role-based access control; regular penetration testing; an incident response plan agreed with regulators.',
  },
  {
    id: 'G3',
    category: 'general',
    name: 'Low User Adoption',
    description:
      'Job seekers and employers continue using existing private job boards, limiting data volume and match quality.',
    probability: 3,
    impact: 3,
    indicator: 'Weekly registrations below target for four consecutive weeks after launch; low employer job-post activity.',
    mitigation:
      'Pilot with selected employers and universities; usability testing every release; onboarding campaigns; employer incentives coordinated with MHRSD.',
  },
  {
    id: 'G4',
    category: 'general',
    name: 'Algorithmic Bias in Matching',
    description:
      'The matching engine systematically disadvantages certain groups (e.g., by gender, region or institution), damaging fairness and public trust.',
    probability: 3,
    impact: 4,
    indicator: 'Fairness metrics show significant disparity in match or interview rates between demographic groups.',
    mitigation:
      'Bias audits on training data and outputs each release; explainable match scores; human review of flagged cases; oversight from the Policy & Compliance team.',
  },
];

export function exposure(risk) {
  return risk.probability * risk.impact;
}

export function severity(score) {
  if (score >= 16) return 'extreme';
  if (score >= 10) return 'high';
  if (score >= 5) return 'med';
  return 'low';
}

export const severityLabels = { extreme: 'Extreme', high: 'High', med: 'Medium', low: 'Low' };
