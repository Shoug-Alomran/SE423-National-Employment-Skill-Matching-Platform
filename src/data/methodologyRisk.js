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

// Risk register groups, one per analyzed methodology (see public/artifact-2-risk-register.xlsx).
export const riskGroups = [
  { key: 'scrum', label: 'Agile 1 · Scrum', family: 'agile' },
  { key: 'xp', label: 'Agile 2 · Extreme Programming (XP)', family: 'agile' },
  { key: 'waterfall', label: 'Plan-Driven 1 · Waterfall', family: 'planDriven' },
  { key: 'incremental', label: 'Plan-Driven 2 · Incremental Model', family: 'planDriven' },
];

// probability and impact are on a 1–5 scale; exposure = probability × impact.
// prevention = the "Risk Mitigation" column; mitigation = "Mitigation/Management Strategies".
export const risks = [
  {
    id: 'S1',
    category: 'scrum',
    name: 'Scope Creep',
    description:
      "Managing and prioritizing the backlog is one of the Product Owner's many tasks. If they fail to do it, scope creep begins — partly because Scrum is open to continuous change.",
    prevention:
      "Set a sprint goal during planning, so changes can still happen throughout the project, in keeping with Scrum's values, as long as they align with that sprint's goal. Anything that doesn't fit moves to the product backlog.",
    probability: 3,
    impact: 4,
    indicator:
      "Skill-matching features or user stories are suddenly added mid-sprint without adjusting the commitment or checking alignment with the sprint goal.",
    mitigation:
      'Abide by the sprint goal: even if stakeholders suggest something new mid-sprint, keep it in the product backlog.',
  },
  {
    id: 'S2',
    category: 'scrum',
    name: 'Lack of Awareness of the Scrum Method',
    description:
      "Not understanding Scrum's principles can defeat its purpose. If members aren't used to quick-paced meetings and continuous change, the project's success is at risk.",
    prevention:
      "Before the organization shifts to Scrum, prepare everyone involved with introductory training sessions so those unfamiliar with it understand how the method works.",
    probability: 3,
    impact: 3,
    indicator:
      'Members miss daily stand-ups and don’t engage with the team; a lack of communication and planning skills is an early sign.',
    mitigation:
      'Ensure all organization staff fully understand sprint methods, and hold them accountable according to our policy.',
  },
  {
    id: 'S3',
    category: 'scrum',
    name: 'Going Over Budget and Time',
    description:
      'Scrum focuses on short-term sprint goals rather than the big-picture plan, which lets slip-ups happen with deadlines and finances.',
    prevention:
      'Plan sprints realistically according to the team’s abilities, and track a sprint burndown chart daily so no red flags are missed.',
    probability: 4,
    impact: 4,
    indicator:
      'The sprint burndown chart rises above the ideal line mid-sprint, or plans go against the known historical velocity and staff skills.',
    mitigation:
      'Track the sprint burndown chart and plan according to it, to avoid exceeding the budget or missing deadlines.',
  },
  {
    id: 'S4',
    category: 'scrum',
    name: 'Developer Burnout',
    description:
      "Fast sprints and constant iteration can tire out members who aren't used to them.",
    prevention:
      'Use historical velocity — the average story points completed per sprint — to make plans that are more likely to match reality, and move unfinished work to the backlog without penalizing the team.',
    probability: 3,
    impact: 4,
    indicator:
      "Team complaints about sprint tasks are dismissed, especially when the sprint's planned velocity is clearly higher than the team's history supports.",
    mitigation: 'Stick to historical velocity and actively listen to our staff.',
  },
  {
    id: 'X1',
    category: 'xp',
    name: 'Insufficient Test-Driven Development (TDD) Skills',
    description:
      'XP relies on writing automated tests before code. If the team lacks TDD experience, tests may be poorly designed or the practice abandoned, leaving defects in CV parsing, match scoring or portal workflows undetected.',
    prevention:
      'Provide a short TDD workshop and agree on test-writing standards before applying the practice to Phase 1 features.',
    probability: 3,
    impact: 4,
    indicator:
      'Developers frequently skip writing tests first, or automated tests fail to cover important matching and portal behavior.',
    mitigation:
      'Pair less-experienced developers with experienced team members; review test coverage during code reviews; include test quality in the Definition of Done.',
  },
  {
    id: 'X2',
    category: 'xp',
    name: 'Pair-Programming Scheduling Conflicts',
    description:
      "XP encourages developers to work in pairs. In Fursah's matrix structure, competing responsibilities from functional managers can make pairing sessions hard to maintain and slow implementation.",
    prevention:
      'Agree on protected pairing time and coordinate developer availability with functional managers before each development cycle.',
    probability: 4,
    impact: 3,
    indicator: 'Pairing sessions are repeatedly cancelled, or tasks stay blocked waiting for an available partner.',
    mitigation:
      'Plan pairing rotations; use shared calendars; document decisions and code context; check that pairing is applied to the highest-risk or most complex tasks.',
  },
  {
    id: 'X3',
    category: 'xp',
    name: 'Continuous-Integration Build Instability',
    description:
      'XP emphasizes frequent integration. Unreliable builds and tests, or incompatible changes, may repeatedly break the shared codebase and delay work across the Smart Matching Engine and both portals.',
    prevention:
      'Configure a shared automated build and test pipeline, and require changes to pass the agreed checks before integration.',
    probability: 3,
    impact: 4,
    indicator: 'The main branch frequently fails automated builds, or integration defects recur across components.',
    mitigation:
      'Keep changes small; fix broken builds promptly; automate unit and integration tests; assign responsibility for monitoring pipeline health and reviewing recurring failures.',
  },
  {
    id: 'X4',
    category: 'xp',
    name: 'Refactoring Introduces Regressions',
    description:
      'XP encourages frequent refactoring. Without adequate automated regression tests, previously working CV parsing, matching scores, job recommendations or application functions may break.',
    prevention: 'Run automated unit and regression tests before and after refactoring, and refactor in small, reviewable changes.',
    probability: 3,
    impact: 4,
    indicator:
      'Previously passing tests fail after code restructuring, or defects keep appearing in features that were already completed.',
    mitigation:
      'Maintain regression tests for critical workflows; require peer review for high-impact changes; use version control and revert unsafe changes promptly.',
  },
  {
    id: 'W1',
    category: 'waterfall',
    name: 'Fixed Requirements No Longer Meet Project Needs',
    description:
      'Requirements are approved at the start and stay unchanged through development. By launch, job-market needs and HRSD policies may have changed, leaving features out of date.',
    prevention: 'Review project requirements with HRSD at each approval stage and follow a process to approve necessary changes.',
    probability: 4,
    impact: 4,
    indicator:
      'HRSD introduces new labor policies or Vision 2030 goals, or stakeholders request changes after requirements are approved.',
    mitigation:
      'Apply a formal change control board involving HRSD and functional managers; keep a prioritized list of changes to implement after launch; include extra schedule time for approved changes.',
  },
  {
    id: 'W2',
    category: 'waterfall',
    name: 'User Rejection During Acceptance Testing',
    description:
      'Job seekers, employers and HRSD can only test the platform in the final stages. Dissatisfaction with usability, language support or how the system works would be costly and time-consuming to fix that late.',
    prevention:
      'Create UI prototypes during the design phase and have users test and approve them before the final design is approved.',
    probability: 3,
    impact: 5,
    indicator: 'Users give negative feedback on prototypes, or stakeholders often miss design review meetings.',
    mitigation:
      'Require stakeholders to review and approve UI designs; involve employers, job seekers and people with disabilities in design evaluations; allocate extra budget to fix issues found in final testing.',
  },
  {
    id: 'W3',
    category: 'waterfall',
    name: 'Matching Engine Fails Final Testing',
    description:
      'The NLP matching engine is fully planned before development and only tested at the final stage. If matching accuracy is too low, there may not be enough time or money to improve the design.',
    prevention:
      'Test the NLP approach on sample resumes and job listings during the requirements stage to confirm it is suitable before finalizing the design.',
    probability: 3,
    impact: 5,
    indicator: 'Initial tests show inaccurate job matching, or trouble understanding information in Arabic resumes.',
    mitigation:
      'Set a minimum matching accuracy the system must achieve; keep a keyword-based matching fallback; assign NLP experts from the matrix organization from the earliest stages.',
  },
  {
    id: 'W4',
    category: 'waterfall',
    name: 'Failure During Full System Launch',
    description:
      'Waterfall delivers every component at once — matching engine, portals, networking and government integrations. A problem in one component, or a government system that fails to connect, could delay the whole national launch.',
    prevention: 'Test the complete platform with a selected group of users and government agencies before the national launch.',
    probability: 3,
    impact: 5,
    indicator: 'Testing shows issues in several parts of the system, or connections with government agencies are delayed.',
    mitigation:
      'Create a detailed integration testing plan with entry and exit criteria; prepare a backup and recovery plan for launch problems; confirm government systems are ready to connect at each approval stage.',
  },
  {
    id: 'I1',
    category: 'incremental',
    name: 'Late Requirement Changes',
    description:
      'Changes to employer recruitment requirements or government integration specifications after requirements approval may require extensive rework of completed phases.',
    prevention: 'Validate requirements with employers and government stakeholders before final approval.',
    probability: 4,
    impact: 4,
    indicator: 'New requirements are requested after requirements sign-off.',
    mitigation: 'Apply formal change control, assess the impact on scope and schedule, and update approved documentation.',
  },
  {
    id: 'I2',
    category: 'incremental',
    name: 'Late Discovery of Matching Errors',
    description:
      'Problems with the NLP-based matching engine may only appear during system testing, requiring changes to earlier design and implementation work.',
    prevention: 'Define measurable matching accuracy criteria and review the matching design before implementation.',
    probability: 3,
    impact: 5,
    indicator: 'Matching results fail acceptance criteria during system testing.',
    mitigation:
      'Review NLP matching requirements early, establish measurable acceptance criteria, and allocate time for corrective testing.',
  },
  {
    id: 'I3',
    category: 'incremental',
    name: 'Delayed Stakeholder Validation',
    description:
      'Job seekers and employers may not evaluate the working platform until late in development, leaving usability problems undiscovered.',
    prevention: 'Conduct formal stakeholder reviews of requirements and interface designs before development.',
    probability: 4,
    impact: 4,
    indicator: 'Major usability issues are identified during stakeholder acceptance testing.',
    mitigation:
      'Conduct stakeholder reviews at requirements and design milestones, and document feedback before implementation.',
  },
  {
    id: 'I4',
    category: 'incremental',
    name: 'Sequential Phase Dependencies',
    description:
      'Delays in completing the platform architecture or government integration specifications may stop later development and testing from starting on schedule.',
    prevention: 'Establish phase milestones and monitor critical dependencies throughout development.',
    probability: 3,
    impact: 4,
    indicator: 'A development phase misses its milestone and delays dependent activities.',
    mitigation: 'Track phase dependencies, monitor critical milestones, and allocate schedule contingency for delays.',
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
