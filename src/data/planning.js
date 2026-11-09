// Content for Artifact 03 — Estimation & Scheduling (see public/artifacts/artifact-3-estimation-and-scheduling.pdf).

// 1. Hybrid WBS — seven phases.
export const wbs = {
  root: "Fursah Platform",
  phases: [
    {
      id: "1.1",
      title: "Project Planning",
      text: "Defines objectives, scope, deliverables, team responsibilities, schedule and resources. Identifies key stakeholders, assesses initial risks and sets up progress monitoring.",
    },
    {
      id: "1.2",
      title: "Requirement Analysis",
      text: "Captures requirements for the portals, Smart Matching Engine, career advisory, training recommendation, analytics and networking, plus security, bilingual, government connectivity and hosting needs. Validated by stakeholders before design.",
    },
    {
      id: "1.3",
      title: "System Design",
      text: "Turns approved requirements into a technical design: architecture, data structure, user interfaces, the Smart Matching Engine, the NLP processing workflow, security features and interfaces for approved government services.",
    },
    {
      id: "1.4",
      title: "System Development",
      text: "Implements the Job Seeker and Employer Portals, Smart Matching Engine, career guidance, training suggestions, analytics and professional networking, with Arabic and English support.",
    },
    {
      id: "1.5",
      title: "System Testing",
      text: "Checks the platform against its requirements: module, interface, search and recruiting, matching, security, performance, usability and multilingual testing, followed by defect fixing and regression testing.",
    },
    {
      id: "1.6",
      title: "System Integration & Delivery",
      text: "Integrates portals, matching engine, database and other modules, connects to authorized government service providers where applicable, prepares the deployment environment and deploys the platform.",
    },
    {
      id: "1.7",
      title: "Scope Review",
      text: "Confirms the product meets the agreed scope and acceptance criteria, checks for scope discrepancies and open issues, and ensures excluded functionality was not added by mistake.",
    },
  ],
};

// 2.2 Story point scale (Fibonacci) and priority levels.
export const pointScale = [
  { points: 1, meaning: "Very small and simple change" },
  { points: 2, meaning: "Small story with clear requirements" },
  { points: 3, meaning: "Medium story that needs some design and testing" },
  {
    points: 5,
    meaning: "Large story with several parts or connections to other features",
  },
  { points: 8, meaning: "Very large or complex story with some uncertainty" },
];

export const priorityLevels = [
  {
    level: "High",
    text: "Required for the main job-search and hiring process.",
  },
  {
    level: "Medium",
    text: "Improves overall user experience, but the platform can work without it initially.",
  },
  {
    level: "Low",
    text: "Useful additions that can be postponed until the main features are delivered.",
  },
];

// 2.3 Prioritized product backlog. points is null for spikes.
export const backlog = [
  {
    id: "US-01",
    epic: "Shared Platform Services",
    story:
      "As a user, I want to register as a job seeker or an employer, so that I can access Fursah's features.",
    points: 3,
    priority: "High",
    sprint: 1,
  },
  {
    id: "US-02",
    epic: "Shared Platform Services",
    story:
      "As a registered user, I want to log in and out securely, so that I can access my account safely.",
    points: 3,
    priority: "High",
    sprint: 1,
  },
  {
    id: "US-03",
    epic: "Job Seeker Portal",
    story:
      "As a job seeker, I want to create and maintain a profile with my skills, qualifications, and experience, so that the platform can find opportunities that suit me.",
    points: 5,
    priority: "High",
    sprint: 1,
  },
  {
    id: "US-04",
    epic: "Employer Portal",
    story:
      "As an employer, I want to create and maintain an employer profile, so that job seekers can learn about my organization.",
    points: 5,
    priority: "High",
    sprint: 1,
  },
  {
    id: "US-05",
    epic: "Shared Platform Services",
    story:
      "As a platform administrator, I want job seekers, employers, and administrators to have different access permissions, so that each user only uses the features meant for them.",
    points: 3,
    priority: "High",
    sprint: 1,
  },
  {
    id: "US-06",
    epic: "Shared Platform Services",
    story:
      "As the Ministry (HRSD), I want platform data and infrastructure hosted within Saudi Arabia, so that the project meets its hosting requirement.",
    points: 3,
    priority: "High",
    sprint: 1,
  },
  {
    id: "US-07",
    epic: "Employer Portal",
    story:
      "As an employer, I want to create job postings, so that job seekers can find and apply for them.",
    points: 5,
    priority: "High",
    sprint: 2,
  },
  {
    id: "US-08",
    epic: "Employer Portal",
    story:
      "As an employer, I want to specify the skills, qualifications, and other requirements for each opening, so that Fursah can match the job with suitable candidates.",
    points: 3,
    priority: "High",
    sprint: 2,
  },
  {
    id: "US-09",
    epic: "Job Seeker Portal",
    story:
      "As a job seeker, I want to find and browse available employment opportunities, so that I can discover jobs that interest me.",
    points: 5,
    priority: "High",
    sprint: 2,
  },
  {
    id: "US-12",
    epic: "Job Seeker Portal",
    story:
      "As a job seeker, I want to upload my resume and other professional details, so that employers and the matching engine can review my full background.",
    points: 3,
    priority: "High",
    sprint: 2,
  },
  {
    id: "US-10",
    epic: "Employer Portal",
    story:
      "As an employer, I want to edit or remove my job postings, so that my listings stay accurate and up to date.",
    points: 3,
    priority: "Medium",
    sprint: 2,
  },
  {
    id: "US-11",
    epic: "Job Seeker Portal",
    story:
      "As a job seeker, I want to filter jobs by field, location, job type, or experience level, so that I can quickly find relevant results.",
    points: 3,
    priority: "Medium",
    sprint: 2,
  },
  {
    id: "US-13",
    epic: "Job Seeker Portal",
    story:
      "As a job seeker, I want to apply for jobs, so that employers can consider me for the position.",
    points: 5,
    priority: "High",
    sprint: 3,
  },
  {
    id: "US-14",
    epic: "Job Seeker Portal",
    story:
      "As a job seeker, I want to track the status of my applications, so that I know the progress of each one.",
    points: 3,
    priority: "High",
    sprint: 3,
  },
  {
    id: "US-15",
    epic: "Employer Portal",
    story:
      "As an employer, I want to receive and view submitted applications, so that I can review the candidates for my jobs.",
    points: 3,
    priority: "High",
    sprint: 3,
  },
  {
    id: "US-16",
    epic: "Employer Portal",
    story:
      "As an employer, I want to view candidate profiles and resumes, so that I can evaluate whether they fit the position.",
    points: 3,
    priority: "High",
    sprint: 3,
  },
  {
    id: "US-17",
    epic: "Employer Portal",
    story:
      "As an employer, I want to update application statuses and track the hiring process, so that applicants know the result of their application.",
    points: 3,
    priority: "High",
    sprint: 3,
  },
  {
    id: "US-18",
    epic: "Employer Portal",
    story:
      "As an employer, I want to schedule interviews with selected candidates, so that the hiring process moves forward.",
    points: 5,
    priority: "High",
    sprint: 3,
  },
  {
    id: "SP-01",
    epic: "Smart Matching Engine",
    story:
      "Spike: Investigate NLP approaches for extracting skills from Arabic and English resumes and job descriptions, and how to calculate a meaningful match score. Timeboxed to 2–3 working days.",
    points: null,
    priority: "High",
    sprint: 4,
  },
  {
    id: "US-19",
    epic: "Smart Matching Engine",
    story:
      "As a job seeker, I want my resume, qualifications, skills, and experience to be analyzed, so that the platform understands my profile.",
    points: 8,
    priority: "High",
    sprint: 4,
  },
  {
    id: "US-20",
    epic: "Smart Matching Engine",
    story:
      "As an employer, I want my job descriptions and requirements to be analyzed using NLP, so that they can be compared accurately with candidate profiles.",
    points: 8,
    priority: "High",
    sprint: 4,
  },
  {
    id: "US-21",
    epic: "Smart Matching Engine",
    story:
      "As a user, I want candidate profiles to be compared with job requirements, so that suitable matches are identified.",
    points: 8,
    priority: "High",
    sprint: 4,
  },
  {
    id: "US-22",
    epic: "Smart Matching Engine",
    story:
      "As a job seeker, I want to see job opportunities recommended from my qualifications and skills, so that I can find suitable jobs faster.",
    points: 5,
    priority: "High",
    sprint: 5,
  },
  {
    id: "US-23",
    epic: "Smart Matching Engine",
    story:
      "As a job seeker, I want to see a match percentage for each job, so that I understand how well I fit the position.",
    points: 3,
    priority: "High",
    sprint: 5,
  },
  {
    id: "US-24",
    epic: "Smart Matching Engine",
    story:
      "As an employer, I want suitable candidates to be suggested for my openings, so that I can find the right people faster.",
    points: 5,
    priority: "High",
    sprint: 5,
  },
  {
    id: "US-25",
    epic: "Employer Portal",
    story:
      "As an employer, I want to screen applicants based on the job requirements, so that I can shortlist candidates efficiently.",
    points: 5,
    priority: "High",
    sprint: 5,
  },
  {
    id: "US-26",
    epic: "Shared Platform Services",
    story:
      "As a user, I want to use the platform in Arabic or English, so that I can work in my preferred language.",
    points: 5,
    priority: "High",
    sprint: 5,
  },
  {
    id: "US-27",
    epic: "Shared Platform Services",
    story:
      "As a user, I want my personal and employment data, including my resume, to be stored securely and handled according to Saudi data-protection requirements, so that my data is protected from unauthorized access.",
    points: 5,
    priority: "High",
    sprint: 6,
  },
  {
    id: "US-28",
    epic: "Shared Platform Services",
    story:
      "As a platform administrator, I want to manage user accounts, so that the platform stays organized and safe.",
    points: 3,
    priority: "Medium",
    sprint: 6,
  },
  {
    id: "US-29",
    epic: "Shared Platform Services",
    story:
      "As a platform administrator, I want to review job postings and remove false or inappropriate content, so that the platform stays trustworthy.",
    points: 3,
    priority: "Medium",
    sprint: 6,
  },
  {
    id: "US-30",
    epic: "Shared Platform Services",
    story:
      "As a platform administrator, I want important actions to be logged, so that I can track suspicious or unusual activity.",
    points: 2,
    priority: "Medium",
    sprint: 6,
  },
  {
    id: "SP-02",
    epic: "Career Guidance and Training",
    story:
      "Spike: Investigate where external training programs and courses can be sourced from and how they can be linked to skills. Time-boxed to 2–3 working days.",
    points: null,
    priority: "Medium",
    sprint: 7,
  },
  {
    id: "US-31",
    epic: "Career Guidance and Training",
    story:
      "As a job seeker, I want my skills and interests evaluated to receive tailored career advice, so that I can choose suitable career paths.",
    points: 5,
    priority: "Medium",
    sprint: 7,
  },
  {
    id: "US-32",
    epic: "Career Guidance and Training",
    story:
      "As a job seeker, I want to see the gap between my skills and the skills required for a career path, so that I know what I need to improve.",
    points: 8,
    priority: "Medium",
    sprint: 7,
  },
  {
    id: "US-33",
    epic: "Career Guidance and Training",
    story:
      "As a job seeker, I want training programs and courses recommended for my skill gaps, so that I can become more qualified.",
    points: 5,
    priority: "Medium",
    sprint: 7,
  },
  {
    id: "US-34",
    epic: "Career Guidance and Training",
    story:
      "As a job seeker, I want to see how a suggested training program would help close my skill gap, so that I can choose the most useful one.",
    points: 5,
    priority: "Medium",
    sprint: 7,
  },
  {
    id: "US-35",
    epic: "Analytics Dashboard",
    story:
      "As a Ministry (HRSD) user, I want to view labor-market trends based on platform data, so that I can monitor the job market.",
    points: 8,
    priority: "Medium",
    sprint: 8,
  },
  {
    id: "US-36",
    epic: "Analytics Dashboard",
    story:
      "As a Ministry (HRSD) user, I want to identify skill gaps between the workforce and employer needs, so that I can support workforce planning.",
    points: 8,
    priority: "Medium",
    sprint: 8,
  },
  {
    id: "US-37",
    epic: "Analytics Dashboard",
    story:
      "As a Ministry (HRSD) user, I want data and reports for labor and education policy, so that decisions are based on evidence.",
    points: 5,
    priority: "Medium",
    sprint: 8,
  },
  {
    id: "US-38",
    epic: "Analytics Dashboard",
    story:
      "As a platform administrator, I want the dashboard to be available only to authorized Ministry users, so that sensitive labor-market data is protected.",
    points: 3,
    priority: "Medium",
    sprint: 8,
  },
  {
    id: "US-39",
    epic: "Professional Networking",
    story:
      "As a job seeker or professional, I want to connect with other users, so that I can build my professional network.",
    points: 5,
    priority: "Low",
    sprint: 9,
  },
  {
    id: "US-40",
    epic: "Professional Networking",
    story:
      "As a user, I want to share career insights, so that others can learn from my experience.",
    points: 5,
    priority: "Low",
    sprint: 9,
  },
  {
    id: "US-41",
    epic: "Professional Networking",
    story:
      "As a user, I want to join industry forums, so that I can discuss professional topics with others.",
    points: 8,
    priority: "Low",
    sprint: 9,
  },
  {
    id: "US-42",
    epic: "Professional Networking",
    story:
      "As a platform administrator, I want to moderate forum content, so that discussions stay professional.",
    points: 3,
    priority: "Low",
    sprint: 9,
  },
  {
    id: "SP-03",
    epic: "Government Service Integration",
    story:
      "Spike: Investigate the interfaces, authorization, and data formats offered by the participating government agencies. Time-boxed to 2–3 working days.",
    points: null,
    priority: "Medium",
    sprint: 10,
  },
  {
    id: "US-43",
    epic: "Government Service Integration",
    story:
      "As the Ministry (HRSD), I want the platform integrated with relevant government services, so that users benefit from existing national services.",
    points: 8,
    priority: "Medium",
    sprint: 10,
  },
  {
    id: "US-44",
    epic: "Government Service Integration",
    story:
      "As a government agency, I want to exchange required information with the platform through approved integrations, so that data stays consistent and authorized.",
    points: 8,
    priority: "Medium",
    sprint: 10,
  },
  {
    id: "US-45",
    epic: "Government Service Integration",
    story:
      "As a job seeker, I want the platform to use information made available through authorized government integrations, so that I enter less information manually.",
    points: 5,
    priority: "Medium",
    sprint: 10,
  },
  {
    id: "US-46",
    epic: "National Rollout",
    story:
      "As an employer from any industry, I want the platform to cover a wider range of industries, so that I can find candidates in my field.",
    points: 5,
    priority: "Medium",
    sprint: 11,
  },
  {
    id: "US-47",
    epic: "National Rollout",
    story:
      "As a user anywhere in Saudi Arabia, I want the platform to remain fast and reliable under nationwide use, so that I can use it whenever I need it.",
    points: 8,
    priority: "Medium",
    sprint: 11,
  },
  {
    id: "US-48",
    epic: "National Rollout",
    story:
      "As the Ministry (HRSD), I want public awareness activities and onboarding material, so that more people adopt the platform.",
    points: 3,
    priority: "Low",
    sprint: 11,
  },
  {
    id: "US-49",
    epic: "National Rollout",
    story:
      "As the Ministry (HRSD), I want the platform deployed for nationwide use after final testing, so that all users across Saudi Arabia can access it.",
    points: 5,
    priority: "Medium",
    sprint: 11,
  },
];

// 2.4 Backlog summary by sprint. Release 1 = Sprints 1–6, Release 2 = 7–9, Release 3 = 10–11.
export const sprintSummary = [
  {
    sprint: 1,
    release: 1,
    focus: "User accounts, profiles, access permissions, Saudi hosting",
    items: "6",
    points: 22,
  },
  {
    sprint: 2,
    release: 1,
    focus: "Job postings, job search, resume upload",
    items: "6",
    points: 22,
  },
  {
    sprint: 3,
    release: 1,
    focus: "Job applications, employer review, interview scheduling",
    items: "6",
    points: 22,
  },
  {
    sprint: 4,
    release: 1,
    focus: "Matching spike, resume and job description analysis, matching",
    items: "4 (3 stories + 1 spike)",
    points: 24,
  },
  {
    sprint: 5,
    release: 1,
    focus:
      "Job and candidate recommendations, match percentage, screening, Arabic/English",
    items: "5",
    points: 23,
  },
  {
    sprint: 6,
    release: 1,
    focus:
      "Data security, administration, action logging, core platform testing",
    items: "4",
    points: 13,
  },
  {
    sprint: 7,
    release: 2,
    focus: "Career guidance and training recommendations",
    items: "5 (4 stories + 1 spike)",
    points: 23,
  },
  {
    sprint: 8,
    release: 2,
    focus: "Analytics Dashboard for the Ministry",
    items: "4",
    points: 24,
  },
  {
    sprint: 9,
    release: 2,
    focus: "Professional networking",
    items: "4",
    points: 21,
  },
  {
    sprint: 10,
    release: 3,
    focus: "Government service integration",
    items: "4 (3 stories + 1 spike)",
    points: 21,
  },
  { sprint: 11, release: 3, focus: "National rollout", items: "4", points: 21 },
];

export const backlogTotals = [
  { value: "52", label: "Backlog items", note: "49 user stories + 3 spikes" },
  { value: "236", label: "Story points" },
  { value: "11", label: "Sprints", note: "plus Sprint 0, across 3 releases" },
  { value: "20–25", label: "SP per sprint", note: "planned capacity" },
];

export const sprint6Note =
  "Sprint 6 carries the lightest load (13 SP) on purpose: it leaves time for integration, system and security testing, defect fixing and stakeholder feedback before the core platform is released.";

// 3.1 Release 1 schedule.
export const release1 = {
  summary:
    "Fursah is delivered in two-week sprints. At the end of every sprint, employers, job seekers and HRSD review the work and their feedback shapes the next sprint. Release 1 takes about 14 weeks: Sprint 0 for preparation followed by six development sprints.",
  sprints: [
    {
      name: "Sprint 0",
      theme: "Preparation",
      weeks: "Weeks 1–2",
      activities:
        "Prepare the development environment, set up the initial Product Backlog, define the initial requirements and design.",
      deliverable:
        "Development environment and initial Product Backlog in place.",
    },
    {
      name: "Sprint 1",
      theme: "Platform Foundation",
      weeks: "Weeks 3–4",
      activities:
        "User registration, login, role-based access control, job seeker and employer profiles, and certified hosting within Saudi Arabia.",
      deliverable: "Functional user accounts and profiles.",
    },
    {
      name: "Sprint 2",
      theme: "Job Postings & Search",
      weeks: "Weeks 5–6",
      activities:
        "Employers add, edit and delete job postings with their requirements; job seekers search and filter jobs and upload resumes.",
      deliverable: "Functional job postings and job search.",
    },
    {
      name: "Sprint 3",
      theme: "Applications & Hiring",
      weeks: "Weeks 7–8",
      activities:
        "Job seekers submit applications and monitor progress; employers review applications, change status and schedule interviews.",
      deliverable: "Functional job application system.",
    },
    {
      name: "Sprint 4",
      theme: "Resume & Job Analysis",
      weeks: "Weeks 9–10",
      activities:
        "Run the NLP spike, then build features that analyze resumes and job descriptions and assess them to find matches.",
      deliverable: "The platform can initially identify skills and matches.",
    },
    {
      name: "Sprint 5",
      theme: "Recommendations",
      weeks: "Weeks 11–12",
      activities:
        "Display match scores, suggest jobs to job seekers, recommend applicants to employers, and add Arabic and English support.",
      deliverable:
        "Initial Smart Matching Engine and bilingual recommendations for job seekers and employers.",
    },
    {
      name: "Sprint 6",
      theme: "Security, Testing & Final Review",
      weeks: "Weeks 13–14",
      activities:
        "Secure data storage, administrator tools and activity logging; test all Release 1 features together, fix problems and present the release to HRSD.",
      deliverable: "Release 1 is tested and approved by HRSD.",
    },
  ],
  later:
    "Releases 2 and 3 are planned at a high level as Sprints 7–11 and will be detailed as their start dates approach, taking Release 1 feedback into account.",
};

// 3.2 Scrum meetings.
export const meetings = [
  {
    name: "Sprint Planning",
    frequency: "Start of each sprint",
    duration: "Up to 4 hours",
    purpose:
      "Identify the sprint goal and select the user stories the team will work on.",
  },
  {
    name: "Daily Scrum",
    frequency: "Each working day",
    duration: "15 minutes",
    purpose:
      "Update the team on progress, plan the day and identify any problems.",
  },
  {
    name: "Sprint Review",
    frequency: "End of each sprint",
    duration: "Up to 2 hours",
    purpose:
      "Show finished features to employers, job seekers and HRSD and gather their feedback.",
  },
  {
    name: "Sprint Retrospective",
    frequency: "End of each sprint, after the review",
    duration: "Up to 1.5 hours",
    purpose:
      "Evaluate what went well and agree improvements for the next sprint.",
  },
  {
    name: "Backlog Refinement",
    frequency: "Once during each sprint",
    duration: "1–2 hours",
    purpose: "Review, split and estimate user stories for upcoming sprints.",
  },
];

// 3.3 Additional Scrum elements.
export const scrumElements = [
  {
    name: "Sprint 0",
    description: "A preparation sprint before development begins.",
    use: "Prepare tools, establish the initial Product Backlog, and identify initial requirements and design before Sprint 1.",
  },
  {
    name: "Epics",
    description: "Big features divided into smaller user stories.",
    use: "Release 1 epics: Shared Platform Services, Job Seeker Portal, Smart Matching Engine and Employer Portal.",
  },
  {
    name: "Spikes",
    description:
      "Brief, fixed-duration research when the team is unsure how to build something.",
    use: "NLP Smart Matching spike in Sprint 4 (the main technical challenge), plus Career Guidance & Training (Sprint 7) and Government Service Integration (Sprint 10) spikes.",
  },
  {
    name: "Definition of Done",
    description:
      "Conditions every story must meet before it counts as finished.",
    use: "Code reviewed by another developer, all required tests pass, acceptance criteria met, compliant with the Saudi PDPL, and approved by the Product Owner.",
  },
];

// 4. Velocity & estimation.
export const estimation = {
  technique: "Planning Poker",
  scale: "Modified Fibonacci: 1, 2, 3, 5, 8",
  process:
    "During backlog refinement or Sprint Planning, the Product Owner explains the story and its value. Team members pick an estimate independently and reveal together. When estimates differ, members explain their reasoning, discuss complexity and uncertainty, and re-estimate until they agree.",
  meaning:
    "Story points represent relative effort, complexity and uncertainty, not hours or days. Stories with more components, dependencies, technical uncertainty or testing get higher estimates. Stories too large or unclear to estimate are clarified or split first, and timeboxed research is recorded as a spike.",
  references: [
    {
      points: 3,
      id: "US-01",
      title: "Register as a job seeker or employer",
      reason:
        "A small, well-defined registration capability with a limited workflow.",
    },
    {
      points: 5,
      id: "US-03",
      title: "Create and maintain a job seeker profile",
      reason:
        "Needs profile fields and handling of skills, qualifications and experience.",
    },
    {
      points: 8,
      id: "US-19",
      title:
        "Analyze a job seeker's resume, qualifications, skills and experience",
      reason:
        "Technically complex resume and profile analysis with greater uncertainty.",
    },
  ],
  capacity: { low: 20, high: 25 },
  capacityNote:
    "Capacity is the initial planning estimate of 20–25 story points per two-week sprint. No sprint has been completed yet, so it is not measured historical velocity.",
  forecastNote:
    "At the end of each sprint, actual velocity is the sum of points for stories that fully meet the Definition of Done. Incomplete stories do not count and return to the Product Backlog. The forecast is updated with actual results from each sprint.",
};

// 5. Sprint 1.
export const sprint1 = {
  goal: "Establish the secure foundation of the Fursah platform by enabling job seekers and employers to register and access their accounts, create their initial profiles, apply the correct role-based permissions, and ensure platform data and infrastructure are hosted within Saudi Arabia. At the end of the sprint the team should have a working foundation for the job search and recruitment features in later sprints.",
  details: [
    { label: "Duration", value: "2 weeks" },
    { label: "Timeline", value: "Weeks 3–4, after Sprint 0" },
    { label: "Planned workload", value: "22 story points" },
    { label: "Estimated capacity", value: "20–25 story points" },
    {
      label: "Sprint Review",
      value:
        "End of Week 4: demo completed stories and collect stakeholder feedback",
    },
    {
      label: "Sprint Retrospective",
      value:
        "After the Sprint Review: identify improvements for the next sprint",
    },
  ],
  acceptance: {
    "US-01": [
      "A visitor can choose to register as either a job seeker or an employer.",
      "The registration form requests the required account information and validates mandatory fields.",
      "Invalid or incomplete submissions are rejected with clear validation messages.",
      "A successful registration creates an account with the correct user role.",
      "The user receives confirmation that registration succeeded and can proceed to login.",
    ],
    "US-02": [
      "A registered user can log in using valid credentials.",
      "Invalid credentials are rejected with an appropriate error message that does not expose sensitive information.",
      "After login, the user is authenticated and can access only functions permitted for their role.",
      "The user can log out, and the authenticated session is ended.",
      "Protected pages cannot be accessed through an ended or expired session without logging in again.",
    ],
    "US-03": [
      "An authenticated job seeker can create a profile.",
      "The profile allows the job seeker to enter and save skills, qualifications and experience.",
      "Required fields are validated, with clear messages for missing or invalid information.",
      "The job seeker can view and update saved profile information.",
      "Profile information is associated with the correct account and is not accessible to unauthorized roles.",
    ],
    "US-04": [
      "An authenticated employer can create an employer profile.",
      "The profile allows the employer to enter and save the organization information required by the platform.",
      "Required fields are validated, with clear messages for missing or invalid information.",
      "The employer can view and update the saved organization profile.",
      "The profile is associated with the correct employer account and is not editable by unauthorized users.",
    ],
    "US-05": [
      "The system distinguishes job seeker, employer and administrator roles.",
      "Each role can access only pages and actions authorized for that role.",
      "An unauthorized attempt to access a restricted page or action is denied.",
      "Changing a page URL or sending a direct request does not bypass role permissions.",
      "Access control behavior is tested for all three roles.",
    ],
    "US-06": [
      "The hosting arrangement for platform data and infrastructure is documented and verified as located within Saudi Arabia.",
      "The selected hosting environment and service-provider information are recorded for project review.",
      "The team verifies that planned storage and processing arrangements meet the Saudi hosting requirement.",
      "Evidence of the hosting location and configuration is available to authorized project stakeholders.",
    ],
  },
  dod: "Beyond the story-specific criteria, each story must meet the Definition of Done: reviewed by another developer, all required tests pass, acceptance criteria met, and approved by the Product Owner. Stories involving personal information must also follow Saudi data-protection requirements. The Sprint Review demonstrates completed functionality to stakeholders and records their feedback.",
};

// 6. Changes to previous artifacts.
export const changesFromA1 = [
  {
    area: "Scope Definition",
    before:
      "Broad feature lists and high-level acceptance criteria for Job Seeker, Employer and Matching modules.",
    after:
      "Broken down into a 52-item Product Backlog (49 user stories + 3 spikes) totaling 236 story points.",
  },
  {
    area: "Non-Functional Requirements",
    before:
      "High-level assumptions about PDPL data privacy, Saudi hosting and bilingual support.",
    after:
      "Turned into concrete stories in the Shared Platform Services epic (US-05 to US-06, US-26 to US-30).",
  },
  {
    area: "Project Phases & Roadmap",
    before: "Static 3-phase rollout (Core, Expansion, National Rollout).",
    after:
      "Sprint 0 plus 11 two-week sprints across 3 releases: Release 1 (Sprints 1–6), Release 2 (7–9) and Release 3 (10–11).",
  },
  {
    area: "Technical Risks",
    before:
      "High-risk features like NLP parsing and government integrations treated as standard deliverables.",
    after:
      "Timeboxed research spikes (SP-01, SP-02, SP-03) run before development.",
  },
  {
    area: "Work Decomposition",
    before: "Broad deliverables without a breakdown structure.",
    after:
      "A 7-phase Hybrid WBS covering planning, analysis, design, development, testing, integration and scope review.",
  },
  {
    area: "Quality & Review",
    before: "End-of-phase milestone acceptance.",
    after:
      "Sprint 6 given a lighter load (13 SP, below the 20–25 SP capacity) for integration, PDPL security testing and PO review.",
  },
  {
    area: "Bilingual Support",
    before:
      "Listed under the National Rollout phase and as a platform-wide constraint.",
    after:
      "Moved to Release 1 (Sprint 5, US-26), since adding it at national rollout would mean reworking delivered features.",
  },
];

export const changesToA2 = {
  intro:
    "Artifact 2 compared two plan-driven and two agile methodologies and selected Scrum. Artifact 3 keeps that decision and turns it into a detailed implementation and scheduling plan.",
  additions: [
    {
      title: "Product Backlog",
      text: "49 user stories and 3 research spikes grouped into epics and estimated at 236 story points.",
    },
    {
      title: "Sprint Planning",
      text: "Two-week sprints with an estimated capacity of 20–25 story points each.",
    },
    {
      title: "Scrum Activities",
      text: "Duration and purpose defined for Sprint Planning, Daily Scrum, Sprint Review, Retrospective and Backlog Refinement.",
    },
    {
      title: "Other Scrum Artifacts",
      text: "Sprint 0, epics, research spikes and the Definition of Done.",
    },
    {
      title: "Release Planning",
      text: "Release 1 runs from Sprint 0 through Sprint 6 (about 14 weeks); Releases 2 and 3 are sketched and refined as they approach.",
    },
    {
      title: "Sprint 1 Details",
      text: "Six user stories totaling 22 story points, each with acceptance criteria.",
    },
  ],
};
