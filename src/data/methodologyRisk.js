// Content for Artifact 02 — Methodology & Risk.
// Edit the text here; the page layout, counts and risk matrix update automatically.

// Strengths and weaknesses are lists of { title, text } points (a plain string also works).
// Fit keys: project, team, organization, stakeholder, overall — include the ones that apply.
export const methodologies = {
  planDriven: [
    {
      name: 'Waterfall',
      strengths: [
        {
          title: 'Clear, documented requirements up front',
          text: 'Fursah handles employment and personal data, so it must comply with the Personal Data Protection Law (PDPL) and be hosted in Saudi Arabia. Finalized requirements and design documents make it simpler to show regulators and HRSD that these constraints are managed before any code is written.',
        },
        {
          title: 'Well-defined schedule and budget',
          text: 'Cost, scope and schedule are fixed early, making progress easier to track. As a government-backed national project, HRSD needs well-defined cost and schedule estimates to support budgeting and approval.',
        },
        {
          title: 'Effective oversight and accountability',
          text: 'Each phase has approval gates, assigned responsibilities and deliverables. With many stakeholders — HRSD, government agencies, technology firms and universities — defined gates make sure each organization knows its responsibilities, reducing misunderstandings.',
        },
        {
          title: 'Suits well-defined, stable components',
          text: 'Some Fursah components, such as managing profiles, job listings and monitoring applications, are stable and well defined, and can be specified before development with low risk.',
        },
      ],
      weaknesses: [
        {
          title: 'Poor at handling changing requirements',
          text: 'Once a phase is approved, going back is costly and time-consuming. Fursah serves a changing job market and Vision 2030 labor policies are evolving rapidly, so job listings, analytics and training suggestions may need changes during development.',
        },
        {
          title: 'No usable software until late',
          text: 'Sponsors and users see nothing until testing is finished. Issues with matching accuracy or Arabic/English language support could be found too late and become expensive to fix.',
        },
        {
          title: 'Risky for creative or unclear components',
          text: 'The NLP-based Smart Matching Engine is new and must be tested for accuracy with real data, which does not suit a method that requires the design to be finished before development begins.',
        },
        {
          title: 'Not suited to a phased rollout',
          text: 'Artifact 1 defines a phased rollout (Core Platform → Platform Expansion → National Rollout). Pure Waterfall delivers the whole system at once at the end, so it would need adjusting to support the plan.',
        },
      ],
      fit: {
        team: "The team was formed around creativity, so it can handle iteration and ambiguity and explore new ideas. Waterfall requires clear requirements up front and makes it hard to revisit decisions, forcing the team to finalize designs — such as NLP-based job matching and career guidance — before testing whether their ideas work.",
        organization:
          "Partially suitable. Team members report to both functional managers and project managers, and fixed phases help departments plan when their staff are needed. But the matrix structure was adopted to respond to rapid shifts in the job market, and Waterfall's fixed phases limit that flexibility.",
        stakeholder:
          "HRSD and other government agencies benefit from defined deadlines, documentation and approvals. Employers, students and job seekers could not test the platform until the final steps, reducing feedback, and training providers and universities would have little chance to adjust requirements after approval.",
      },
    },
    {
      name: 'Incremental Model',
      subtitle: 'Plan-driven, staged delivery',
      overview:
        'All requirements and the system architecture are defined and approved at the start, as in a predictive approach, then the scope is split into a series of increments. Each increment goes through requirements analysis, design, implementation, testing and a gate review before delivery, adding to the increments delivered before it. Unlike Waterfall, users receive working parts of the system before the whole is complete.',
      increments: [
        'Core Smart Matching Engine (NLP), basic Job Seeker Portal and basic Employer Portal (job postings, applications, candidate screening, interview scheduling).',
        'Career Guidance and Training modules, and expansion to a wider range of industries.',
        'Data Analytics Dashboard for the Ministry, Professional Networking, full government service integration and the national rollout.',
      ],
      strengths: [
        {
          title: 'Early delivery of core value',
          text: 'The Smart Matching Engine and the basic Job Seeker and Employer Portals arrive in the first increment, so users benefit long before the full scope is complete.',
        },
        {
          title: 'Reduces technical risk early',
          text: 'The NLP matching engine is the riskiest element. Building and verifying it first reveals accuracy and parsing issues before other modules are developed.',
        },
        {
          title: 'Predictable schedule and budget',
          text: "Each increment's schedule and budget are defined in advance, so the Ministry can approve them and control them against a baseline.",
        },
        {
          title: 'Phase-gate control',
          text: 'A formal Ministry review at the end of each increment gives the government the control it needs over data security and integration with government services.',
        },
      ],
      weaknesses: [
        {
          title: 'Limited flexibility',
          text: 'Requirements are locked early, so changes such as new screening criteria or Ministry policies must go through change control.',
        },
        {
          title: 'Dependence on up-front design',
          text: 'If the initial design misses future needs such as national data and the dashboard, already-delivered components will need redesigning.',
        },
        {
          title: 'Growing integration work',
          text: 'Each increment must be integrated and regression-tested against all previous ones, including government systems, so this work grows over time.',
        },
        {
          title: 'Feedback only at increment boundaries',
          text: 'Stakeholders give feedback only when an increment is delivered, so usability problems may not surface until then.',
        },
      ],
      fit: {
        team: 'The creative team can experiment with NLP techniques within each increment, and lessons from one increment shape the next. But scope and architecture are predefined, so it suits the team better than Waterfall, though not as well as Agile.',
        organization:
          'Increments make it easy for functional managers to see when their people are needed (for example, NLP specialists in Increment 1), avoiding resource conflicts. But change management can delay the rapid responses the matrix structure was chosen for.',
        stakeholder:
          'The Ministry gets predictable milestones and approvals, while job seekers and employers use the basic product and their input shapes later increments.',
        overall:
          "A better fit than Waterfall: it combines plan-driven control with early delivery and early risk reduction, and matches the scenario's phased implementation. Its fixed up-front plan still limits the flexibility Fursah's creative team and changing stakeholder needs require.",
      },
    },
  ],
  agile: [
    {
      name: 'Scrum',
      strengths: [
        {
          title: 'Improved team communication',
          text: 'Daily scrums let members share what they did and what they plan next, so everyone stays up to date on progress and changes.',
        },
        {
          title: 'Lightweight, adaptable plans',
          text: 'As a new project, Fursah involves risk-taking, experimentation and volatility, which need adaptable, resilient teams. Agile planning is continuously updated based on feedback and changing requirements.',
        },
        {
          title: 'Emphasis on finishing work',
          text: 'Scrum encourages members to complete tasks rather than juggling many items at once, raising productivity and quality.',
        },
        {
          title: 'Continuous improvement and rapid feedback',
          text: 'Regular retrospectives keep members accountable and help them improve, while rapid feedback lets the team adjust its work iteratively and learn what went well, what went wrong and what to improve.',
        },
      ],
      weaknesses: [
        {
          title: 'Assumes human perfection',
          text: 'Scrum assumes every member communicates effectively, thinks independently, adapts readily and is willing to join meetings every day.',
        },
        {
          title: 'Member burnout',
          text: 'The quick pace — continuous work, meetings and changes for improvement — can burn members out in practice.',
        },
        {
          title: 'Replacement affects the schedule',
          text: 'Replacing team members can disrupt the schedule and make on-time delivery harder.',
        },
      ],
      fit: {
        team: "Scrum's principles correspond directly to our creativity-focused team structure, which was chosen because Fursah is a new concept that requires iteration and constant change.",
        organization:
          'The matrix structure was chosen for rapid response in a dynamic, potentially unstable environment — matching Scrum, which is built for handling change and responding quickly.',
        stakeholder:
          'Stakeholders are not members of the Scrum team (Product Owner, Scrum Master, Developers). They give feedback at each sprint review and feed the product backlog through the Product Owner, sharing business needs and market insights.',
      },
    },
    {
      name: 'Extreme Programming (XP)',
      strengths: [
        {
          title: 'High quality through continuous testing',
          text: 'Test-Driven Development has developers write tests before code, helping verify CV parsing, matching-score calculations, job recommendations and application workflows throughout development instead of finding defects near the end.',
        },
        {
          title: 'Adapts to changing requirements',
          text: 'Short cycles, frequent feedback and continuous improvement help when HRSD, employers or job seekers identify improvements to matching criteria, Arabic and English CV processing, or portal usability.',
        },
        {
          title: 'Early detection of integration defects',
          text: 'Continuous integration surfaces compatibility issues between the Smart Matching Engine, Job Seeker Portal and Employer Portal before they become harder to fix.',
        },
        {
          title: 'Collaboration and shared knowledge',
          text: 'Pair programming and collective code ownership spread knowledge and peer review across the NLP engine and both portals, which need coordinated development.',
        },
      ],
      weaknesses: [
        {
          title: 'Requires strong technical discipline',
          text: 'XP depends on consistent testing, refactoring, continuous integration and coding standards; without that experience, implementation and quality may suffer.',
        },
        {
          title: 'High initial testing effort',
          text: 'Building automated tests, test data and evaluation procedures for CV parsing and matching accuracy takes time and may slow early feature work on the matching engine.',
        },
        {
          title: 'Needs frequent stakeholder feedback',
          text: 'XP works best with an available business representative. If HRSD representatives or users are unavailable, developers may make wrong assumptions about matching rules or portal requirements.',
        },
        {
          title: 'Coordination challenges in a matrix',
          text: 'Pair programming needs overlapping availability, and competing assignments from functional managers could interrupt pairing sessions and delay development.',
        },
      ],
      fit: {
        team: "The creativity-oriented team benefits from XP's experimentation, short cycles, continuous testing and frequent feedback to try different approaches to CV parsing and job matching — provided it keeps to agreed testing and coding standards.",
        organization:
          'Continuous integration, shared code ownership and frequent communication improve coordination across the matching engine and both portals, but competing assignments make pairing harder; project and functional managers should protect time for essential development and testing.',
        stakeholder:
          'HRSD can set business priorities and clarify requirements, while job seekers and employers give feedback on profiles, postings, applications and match usefulness. Universities, training providers, technology firms and government stakeholders contribute where relevant. Timely participation is necessary.',
        overall:
          'A suitable Agile alternative that emphasizes quality, early defect detection, collaboration and adaptability. Compared with Scrum’s focus on sprint planning, coordination and reviews, XP stresses engineering practices — TDD, pair programming, continuous integration and refactoring — and its success depends on team skills, testing discipline, stakeholder availability and shared-resource coordination.',
      },
    },
  ],
};

export const selectedMethodology = {
  name: 'Scrum',
  qualifier: 'An adaptive approach for a new, evolving product',
  why:
    'Fursah is a new idea that comes with risk-taking, experimentation and iteration. After reviewing each methodology and its risks, Scrum was the most fitting: it responds quickly to customer needs, makes change easy, and copes with an unstable scope.',
  fit:
    'Scrum matches our creativity-focused team and our matrix organization, both chosen to handle change and respond quickly. Stakeholders such as HRSD, employers and job seekers stay involved through sprint reviews and product backlog input via the Product Owner.',
  preferred:
    'We moved away from predictive methods (Waterfall and the Incremental Model) because Fursah does not have well-defined requirements at the start. That left the two adaptive approaches; we chose Scrum over XP for its quick response to customer needs and ease of change.',
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
