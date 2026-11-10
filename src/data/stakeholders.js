// Content for Artifact 04 — Stakeholders, Communication & Metrics.
//
// Sections 1–3 are placeholders until the team finishes them: the structures below
// only name the columns, groups and categories from the agreed outline.
// Section 4 (metrics) is final.

// 1. Stakeholder Register — placeholder.
export const registerSubsections = [
  {
    id: "1.1",
    title: "Stakeholder Identification",
    note: "Expanded from Artifact 1",
  },
  {
    id: "1.2",
    title: "Classification Scheme",
    note: "For example Internal, External, Government or End Users",
  },
];

export const registerColumns = [
  "Name / Group & Title",
  "Classification",
  "Power Level (1–5)",
  "How the Stakeholder Can Affect the Project",
  "Interest Level (1–5)",
  "Artifacts / Metrics Communicated",
  "Management Strategy",
];

// 2. Stakeholder Analysis — placeholder. Listed in grid order: top row is high power.
export const strategyGroups = [
  { title: "Keep Satisfied", subtitle: "High power · Low interest" },
  { title: "Manage Closely", subtitle: "High power · High interest" },
  { title: "Monitor", subtitle: "Low power · Low interest" },
  { title: "Keep Informed", subtitle: "Low power · High interest" },
];

// 3. Communications Plan — placeholder.
export const communicationCategories = [
  { id: "3.2.1", title: "Project Status & Progress" },
  { id: "3.2.2", title: "Risks & Issues" },
  { id: "3.2.3", title: "Scope & Change Requests" },
  { id: "3.2.4", title: "Phase Releases & Reviews" },
  { id: "3.2.5", title: "Metrics Reports" },
  { id: "3.2.6", title: "Government Integration & Compliance Updates" },
];

export const communicationFields = [
  "Why It Must Be Conveyed",
  "Audience",
  "Format & Tone",
  "Responsible Person",
  "Timing & Frequency",
];

// 4. Project Metrics.
export const metricsIntro =
  "The Fursah team will track four metrics throughout the project. They provide evidence about whether the project is progressing according to schedule, whether the platform is of satisfactory quality, whether its key component functions properly, and whether stakeholders are happy with the deliverables being provided. All metrics are collected within the Scrum process defined in Artifact 3, so measurement is part of the team’s normal sprint work rather than an extra activity.";

// 4.5 Each metric is described with the same three parts.
export const metricParts =
  "Each metric is described using the same three parts. The Rationale explains why it was chosen for Fursah. The Measurement explains what is measured, how often and by whom. The Usage & Benefits explain how it helps the project, the team and stakeholders over time.";

export const metrics = [
  {
    key: "schedule",
    id: "4.1",
    title: "Schedule Progress",
    rationale:
      "Fursah is a government-sponsored national project, and HRSD needs reliable information about when each release will be delivered. Because the project uses Scrum, progress cannot be measured by completed phases as in Waterfall. Instead, it is measured by the story points completed according to the Definition of Done. This metric was chosen because it shows actual delivered work rather than estimated effort. It also allows the team to test the initial capacity forecast of 20–25 story points per sprint from Artifact 3.",
    measures: [
      {
        name: "Sprint velocity",
        text: "The story points of user stories fully completed according to the Definition of Done in each sprint. Incomplete stories count as zero.",
      },
      {
        name: "Sprint burndown",
        text: "The remaining story points in the current sprint, tracked each working day.",
      },
      {
        name: "Release progress",
        text: "Completed story points compared with the total planned for the release. The expected amounts are 126 SP in Release 1 (Sprints 1–6), 68 SP in Release 2 (Sprints 7–9) and 42 SP in Release 3 (Sprints 10–11), for a total of 236 SP.",
        formula:
          "Release Progress (%) = Completed Story Points ÷ Planned Release Story Points × 100",
      },
    ],
    when: "The burndown is reviewed daily after the Daily Scrum. Velocity and release progress are calculated at the end of every sprint.",
    owner:
      "The Scrum Master updates and reports the measurements using the team’s task board. The Product Owner checks release progress before each Sprint Review.",
    threshold: {
      label: "Warning level",
      text: "If velocity is below 20 story points for two sprints in succession, the Product Owner and the team replan the backlog for that release.",
    },
    usage: [
      {
        name: "For the sprint team",
        text: "The burndown chart lets the team identify issues with the sprint goal early, during the Daily Scrum, rather than waiting for the end of the sprint.",
      },
      {
        name: "For forecasting",
        text: "After some sprints are done, the real average velocity replaces the estimated 22.5 story points. The number of sprints left can then be calculated as Remaining Story Points ÷ Average Velocity.",
      },
      {
        name: "For HRSD",
        text: "The status of each release gives the sponsor an accurate, consistent view of how far it is from completion, allowing better budgeting and planning of the national rollout.",
      },
      {
        name: "For the project",
        text: "Comparing planned and actual velocity improves future estimates and helps the team plan Releases 2 and 3 in more detail, as stated in Artifact 3.",
      },
    ],
  },
  {
    key: "quality",
    id: "4.2",
    title: "Defect Rate / Quality",
    rationale:
      "Fursah will store personal and employment data that must be safeguarded under the PDPL. Defects in security, access controls and applications can affect users adversely. Since the software will later serve users across the country, any defect can tarnish its image and create distrust in the government platform. Measuring defects in each sprint ensures the team can correct issues at an early stage.",
    measures: [
      {
        name: "Defect density",
        text: "The number of defects identified in each sprint relative to the story points completed in that sprint.",
        formula: "Defect Density = Defects Identified ÷ Completed Story Points",
      },
      {
        name: "Defects by severity",
        text: "Each defect is categorized as Critical, High, Medium or Low. Any defect relating to data security, PDPL compliance or role-based access control is considered Critical.",
      },
      {
        name: "Escaped defects",
        text: "Defects found after a story was accepted as Done, for example during the Sprint Review or after a release.",
      },
      {
        name: "Open defects",
        text: "The number of open defects at the end of each sprint.",
      },
    ],
    when: "Defects are captured as soon as they are encountered during testing. Totals are calculated at the end of each sprint and reported at the Sprint Review and Sprint Retrospective.",
    owner:
      "The Development Team logs and fixes defects in the issue tracker. The Scrum Master compiles the measurements each sprint.",
    threshold: {
      label: "Quality objectives",
      text: "No open Critical defects at the end of each sprint, and no open Critical or High defects before a release is delivered to HRSD.",
    },
    usage: [
      {
        name: "For the team",
        text: "The Sprint Retrospective uses defect trends to find their causes, such as poor acceptance criteria or a lack of tests, and ways to improve in the next sprint.",
      },
      {
        name: "For release decisions",
        text: "The number of open defects by severity indicates whether a release is ready. This matters especially in Sprint 6, which has a lighter load for integration, security testing and defect fixing before Release 1.",
      },
      {
        name: "For the Definition of Done",
        text: "A growing number of escaped defects shows that the Definition of Done or the testing process needs to improve.",
      },
      {
        name: "For HRSD and end users",
        text: "Fewer defects in released software indicate a reliable, safe platform and proper handling of personal information.",
      },
    ],
  },
  {
    key: "matching",
    id: "4.3",
    title: "Smart Matching Accuracy",
    rationale:
      "The Smart Matching Engine is Fursah’s main feature and its greatest technical risk, as identified in Artifact 2. The platform’s value depends on recommending suitable jobs to job seekers and suitable candidates to employers. A platform that runs without errors but gives poor matches would still fail its purpose. Because the engine must process both Arabic and English resumes and job descriptions, accuracy must be measured separately for each language to make sure neither group of users receives worse results.",
    measures: [
      {
        name: "Skill extraction accuracy",
        text: "The percentage of skills correctly extracted from a set of resumes and job descriptions, compared with skills identified manually by the team.",
      },
      {
        name: "Recommendation relevance",
        text: "The percentage of the top 10 recommended jobs or candidates that reviewers judge to be relevant to the profile or job posting.",
      },
      {
        name: "Language gap",
        text: "The difference between Arabic and English accuracy results.",
      },
      {
        name: "Real-use indicators (after release)",
        text: "The percentage of recommended jobs that job seekers apply to, and the percentage of recommended candidates that employers shortlist.",
      },
    ],
    when: "A test set of labelled Arabic and English resumes and job descriptions will be prepared during the SP-01 spike in Sprint 4. Accuracy is then measured at the end of every sprint that changes the matching engine, starting in Sprint 4. Real-use indicators are measured monthly after Release 1.",
    owner:
      "The Development Team runs the accuracy tests. The Product Owner reviews the results, with employer and job seeker representatives helping to judge recommendation relevance.",
    threshold: {
      label: "Initial targets",
      text: "At least 80% skill extraction accuracy, at least 70% recommendation relevance, and a gap of no more than 5 percentage points between Arabic and English. These targets will be confirmed or adjusted based on the findings of SP-01.",
    },
    usage: [
      {
        name: "For the team",
        text: "Accuracy results show which part of the engine needs improvement, whether skill extraction, comparison or ranking, and guide the matching stories in Sprints 4 and 5.",
      },
      {
        name: "For fairness",
        text: "Tracking the language gap makes sure Arabic-speaking and English-speaking users receive equally good results, which supports the bilingual constraint from Artifact 1.",
      },
      {
        name: "For risk management",
        text: "Regular measurement shows early whether the NLP approach is working, so the team can change direction before the engine is built into later features such as career guidance and training recommendations.",
      },
      {
        name: "For stakeholders",
        text: "Employers and job seekers receive more useful recommendations, saving them time, which is the main benefit Fursah promises in Artifact 1. HRSD gains evidence that the platform reduces skill mismatch.",
      },
    ],
  },
  {
    key: "satisfaction",
    id: "4.4",
    title: "Stakeholder Satisfaction",
    rationale:
      "The team chose Scrum in Artifact 2 because Fursah’s requirements are expected to change and stakeholder feedback is needed throughout development. Schedule and quality measurements help to determine whether the team is building the product right, but not whether it is building the right product. Stakeholder satisfaction shows whether the product meets the requirements of HRSD, job seekers, employers and training institutes.",
    measures: [
      {
        name: "Sprint Review rating",
        text: "At the end of each Sprint Review, attending stakeholders rate the features produced from 1 (very dissatisfied) to 5 (very satisfied) for usefulness, ease of use and level of satisfaction, and can add comments.",
      },
      {
        name: "Job seeker and employer satisfaction",
        text: "After each release, users are surveyed on their satisfaction with the system on a scale of 1 to 5.",
      },
      {
        name: "Release acceptance",
        text: "Whether HRSD formally accepts each release at the release review.",
      },
    ],
    when: "Sprint Review ratings are collected every two weeks. User surveys are collected after each release. Release acceptance is recorded at the end of Releases 1, 2 and 3.",
    owner:
      "The Product Owner collects and summarizes the ratings, grouped by stakeholder group, and records HRSD’s release acceptance.",
    threshold: {
      label: "Targets",
      text: "An average rating of at least 4 out of 5 for each stakeholder group. Any group with an average below 3 is followed up by the Product Owner before the next sprint.",
    },
    usage: [
      {
        name: "For the Product Owner",
        text: "Low ratings and comments are turned into new or changed backlog items during Backlog Refinement, so stakeholder needs directly shape later sprints.",
      },
      {
        name: "Detecting mismatches",
        text: "A decrease in satisfaction for one party, for example employers, indicates a mismatch between that party’s needs and the product.",
      },
      {
        name: "Motivation",
        text: "Understanding how stakeholders react to the work done allows the team to focus on the most important elements.",
      },
      {
        name: "For HRSD",
        text: "Satisfaction results provide evidence of whether the platform is likely to be adopted, which is important for planning public awareness and the national rollout in Release 3.",
      },
    ],
  },
];

// 4.6 Metrics-to-Stakeholder Mapping.
export const metricsMapping = [
  {
    metric: "Schedule Progress",
    rows: [
      {
        audience: "Development Team, Scrum Master",
        frequency: "Daily",
        format: "Sprint burndown chart on the task board",
      },
      {
        audience: "Product Owner, HRSD",
        frequency: "End of each sprint",
        format: "Velocity and release progress report at the Sprint Review",
      },
      {
        audience: "Other Government Agencies, Technology Firms",
        frequency: "End of each release",
        format: "Release progress summary, mainly for integration timing",
      },
    ],
  },
  {
    metric: "Defect Rate / Quality",
    rows: [
      {
        audience: "Development Team, Scrum Master, Product Owner",
        frequency: "End of each sprint",
        format:
          "Defect report by severity at the Sprint Review and Retrospective",
      },
      {
        audience: "HRSD",
        frequency: "End of each release",
        format: "Quality and PDPL compliance summary at the release review",
      },
    ],
  },
  {
    metric: "Smart Matching Accuracy",
    rows: [
      {
        audience: "Development Team, Product Owner",
        frequency: "End of each sprint from Sprint 4",
        format: "Accuracy results by language",
      },
      {
        audience: "HRSD, Employers, Job Seekers",
        frequency: "End of each release",
        format: "Summary of matching performance and real-use indicators",
      },
    ],
  },
  {
    metric: "Stakeholder Satisfaction",
    rows: [
      {
        audience: "Product Owner, Scrum Team",
        frequency: "End of each sprint",
        format:
          "Sprint Review rating summary, used in Backlog Refinement and Retrospective",
      },
      {
        audience: "HRSD",
        frequency: "End of each release",
        format:
          "Satisfaction results by stakeholder group, with release acceptance",
      },
      {
        audience: "Job Seekers, Employers, Universities and Training Providers",
        frequency: "After each release",
        format: "Survey (they provide the input)",
      },
    ],
  },
];
