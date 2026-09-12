/** All report content, typed and separated from presentation. */

export interface Member {
  name: string;
  /** Section 1.5. Kept for the report; the slides show names only. */
  role: string;
}

export interface Pain {
  who: string;
  text: string;
  /** Words to emphasise, matched verbatim inside `text`. */
  stress?: string;
}

export interface Objective {
  id: `OBJ-${number}`;
  objective: string;
  indicator: string;
}

export interface Feature {
  id: `IN-0${number}`;
  title: string;
  rationale: string;
}

export interface ScopeItem {
  id: string;
  label: string;
  reason?: string;
}

export interface Cause {
  category: string;
  factors: [string, string, string];
}

export const TEAM: Member[] = [
  { name: 'Almoayyad Abuljdail', role: 'Team leader · organization, slides, integration, submission' },
  { name: 'Elyas Babour', role: 'Goals, system boundary, included and excluded features' },
  { name: 'Ibrahim Alyami', role: 'Problem, objectives, root causes, assumptions, constraints' },
  { name: 'Mohammed Al Ghalib', role: 'Identification, introduction, proposed system' },
];

export const PROBLEM_PAINS: Pain[] = [
  {
    who: 'Drivers',
    text: 'Finding a suitable job after a contract ends is difficult, and disorganized job postings mean a driver spends longer looking. Vacancies rarely say enough about needs, experience, location or salary to judge.',
    stress: 'disorganized job postings',
  },
  {
    who: 'Companies',
    text: 'Hiring runs on relationship networks, a company website, or an advertisement medium. That requires more time, money and effort, and may lead to inappropriate hiring.',
    stress: 'more time, money and effort',
  },
  {
    who: 'Both sides',
    text: 'Existing platforms provide little to no detail about the drivers, and drivers have little to no information about the company. Neither side can judge the other.',
    stress: 'little to no detail about the drivers',
  },
];

/** Six bones of the fishbone, in draw order: three above the spine, three below. */
export const CAUSES: Cause[] = [
  { category: 'Drivers', factors: ['Rely on word of mouth', 'No pipeline after a contract', 'Cannot compare employers'] },
  { category: 'Companies', factors: ['Hiring by personal networks', 'Ads reach the wrong people', 'Manual CV screening'] },
  { category: 'Information', factors: ['Licence class never captured', 'Salary and route left vague', 'Experience is free text'] },
  { category: 'Technology', factors: ['Job boards ignore licences', 'No filter by vehicle category', 'Nothing mobile-first'] },
  { category: 'Trust', factors: ['No identity verification', 'No commercial-record check', 'No history on either side'] },
  { category: 'Market', factors: ['Overseas hiring is default', 'Saudization targets unmet', 'Visa and transfer overhead'] },
];

export const EFFECT: string[] = [
  'Qualified drivers in Saudi',
  'Arabia and the companies',
  'that need them do not',
  'reliably find each other.',
];

export const PRIMARY_USERS: Pain[] = [
  { who: 'Drivers', text: 'Professional and legal drivers across several professions: truck, parcel-delivery, bus, private and commercial. The mobile application gives them vacancies, applications, notifications and saved jobs.' },
  { who: 'Recruiters', text: 'Company recruiters, who the website targets alongside drivers. They publish job characteristics, compensation and benefits, and manage the candidates.' },
  { who: 'Establishments', text: 'Companies and establishments that hire today through relationship networks, their own website, or a recruitment announcement.' },
];

export const STAKEHOLDERS: Pain[] = [
  { who: 'HRSD', text: 'Ministry of Human Resources and Social Development. Its approval is required to operate an employment portal or mediation platform, and the portal must abide by its conditions and policies.' },
  { who: 'Commerce', text: 'Ministry of Commerce. Its approval is also required, and its Wathq API supplies the verified commercial records that prevent fake companies from signing up.' },
  { who: 'TGA', text: 'Transport General Authority. Sets the Saudization rules, unified driver status and operating licence standards the platform must adhere to.' },
  { who: 'Providers', text: 'Nafath and Absher for credentials, telecom and SMS gateways, a payment gateway, local cloud hosting, and security certificates. External dependencies, not customers.' },
];

export const GOAL =
  'Connect companies that need professional drivers with those already in Saudi Arabia, through a trusted platform.';

/** The report's long-term half of the goal, section 1.6. */
export const GOAL_LONG =
  'In the long term, HireWheel aims to raise the driving and transport professions in Saudi Arabia to a world-class level. A clear and fast hiring system should naturally increase driver wages, help improve industry rules, and build a work environment matching the professional standards of the UK, US and EU.';

export const OBJECTIVES: Objective[] = [
  { id: 'OBJ-1', objective: 'To provide a specialized employment platform for professional drivers.', indicator: 'Increase in the total number of active driver profiles and establishments registering on the platform.' },
  { id: 'OBJ-2', objective: 'To facilitate the process of finding a new driving job for drivers.', indicator: 'Higher percentage of driver profiles who have submitted at least one job application after doing a search session.' },
  { id: 'OBJ-3', objective: 'To assist companies and establishments to look for new drivers living in Saudi Arabia rather than recruiting from outside the Kingdom.', indicator: 'Increase in the number of filled positions given to drivers already in the Kingdom, out of total portal hiring placements.' },
  { id: 'OBJ-4', objective: 'To enable companies to create detailed and searchable driver vacancies.', indicator: 'Rising rate of published job listings that fully abide by all required structured data fields.' },
  { id: 'OBJ-5', objective: 'To reduce the time for companies and establishments to hire drivers with the desired qualifications.', indicator: 'Reducing the time to hire by at least 30% of the time elapsed in traditional hiring methods.' },
  { id: 'OBJ-6', objective: 'To allow drivers to submit and track job applications.', indicator: 'All submitted applications can be observed in real-time status updates on the platform.' },
  { id: 'OBJ-7', objective: 'To reduce unsuitable applications by presenting requirements clearly before a driver applies.', indicator: 'Reducing the rate of job application criteria that get misunderstood by drivers while applying via the platform.' },
];

export const FEATURES: Feature[] = [
  { id: 'IN-01', title: 'Registration & verification', rationale: "Checking drivers' IDs and company data to ensure the safety and trustworthiness of the platform." },
  { id: 'IN-02', title: 'Job management', rationale: 'Enabling companies to publish information on job characteristics, compensation and benefits.' },
  { id: 'IN-03', title: 'Search & job matching', rationale: 'Filtering jobs according to licence type, location, experience and vehicle category.' },
  { id: 'IN-04', title: 'Application tracking', rationale: 'Drivers save jobs, track the jobs applied for, and receive notifications, while companies manage the candidates.' },
  { id: 'IN-05', title: 'Mutual review system', rationale: 'Rating and reviewing the companies and the drivers.' },
  { id: 'IN-06', title: 'Multilingual interfaces', rationale: 'Providing the website and application in multiple languages.' },
];


export const SCOPE_OUT: ScopeItem[] = [
  { id: 'EX-01', label: 'Overseas recruitment', reason: 'Only drivers already residing in Saudi Arabia, to avoid complicated processes' },
  { id: 'EX-02', label: 'Payroll and HR management', reason: 'No salary payment, no employee management during shifts' },
  { id: 'EX-03', label: 'Signing legal contracts', reason: 'Official government contracts are signed outside the app, after a company decides to hire' },
  { id: 'EX-04', label: 'Live GPS vehicle tracking', reason: 'A fleet management feature, outside the recruitment scope' },
];


export const CLOSING: Pain[] = [
  { who: 'Assumed', text: 'Drivers, companies and establishments will entrust their credentials to the portal; companies will pay for access to job postings; drivers are literate and fill out the forms themselves.' },
  { who: 'Constrained', text: 'Approval from the Ministry of Human Resources and Social Development and the Ministry of Commerce to operate an employing or mediation portal, adherence to HRSD conditions and policies, access to the Absher and Nafath APIs, and strict adherence to Transport General Authority standards.' },
  { who: 'Dependent on', text: 'Nafath and Absher, telecom and SMS gateways (STC, Mobily, Zain), the Wathq API, local cloud hosting, a payment gateway, and SSL and other security certificates.' },
];
