/** All Phase 1 report content, typed and separated from presentation. */

export interface Member {
  name: string;
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
  { name: 'Almoayyad Abuljdail', role: 'Team leader · organization, slides, integration' },
  { name: 'Ibrahim Alyami', role: 'Problem, objectives, root-cause analysis' },
  { name: 'Elyas Babour', role: 'Goal, system boundary, scope' },
  { name: 'Mohammed Al Ghalib', role: 'Identification, introduction, proposed system' },
];

export const PROBLEM_PAINS: Pain[] = [
  {
    who: 'Drivers',
    text: 'A driver whose contract just ended has no pipeline. They ask around, wait on word of mouth, and lose weeks to a search with no visibility into salary, route type, or housing before they commit.',
    stress: 'no visibility into salary, route type, or housing',
  },
  {
    who: 'Companies',
    text: 'Transport, delivery and logistics firms hire through personal networks, their own website, or a paid advertisement. That costs time, money and effort, and still does not reach the right candidate.',
    stress: 'time, money and effort',
  },
  {
    who: 'Result',
    text: 'Vacancies stay open, qualified drivers already in the Kingdom stay unemployed, and companies fall back on recruiting from outside Saudi Arabia instead.',
    stress: 'recruiting from outside Saudi Arabia',
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
  { who: 'Drivers', text: 'Truck, bus, parcel-delivery, private and commercial drivers holding a valid Saudi licence. They search, save, apply and track from the mobile app.' },
  { who: 'Recruiters', text: 'Hiring staff and fleet managers at transport, delivery and logistics companies. They post vacancies, filter, and manage candidates on the website.' },
  { who: 'Small firms', text: 'Establishments with no HR department and no recruitment budget, currently limited to their own contacts.' },
];

export const STAKEHOLDERS: Pain[] = [
  { who: 'HRSD', text: 'Ministry of Human Resources and Social Development. Licenses employment mediation platforms, and benefits from local hiring over overseas recruitment.' },
  { who: 'TGA', text: 'Transport General Authority. Sets Saudization rules, unified driver status, and operating licence conditions the platform must respect.' },
  { who: 'Providers', text: 'Nafath and Absher for identity, Wathq for commercial records, SMS gateways, payment gateway, cloud host. Dependencies, not customers.' },
];

export const GOAL =
  'Connect companies that need professional drivers with the drivers already in Saudi Arabia, through one trusted, verified platform.';

export const OBJECTIVES: Objective[] = [
  { id: 'OBJ-1', objective: 'Provide an employment platform specialised for professional drivers.', indicator: '20 verified companies and 200 verified drivers registered within 3 months of launch.' },
  { id: 'OBJ-2', objective: 'Make it faster for a driver to find a suitable job.', indicator: 'Median time from verified account to first submitted application under 10 minutes.' },
  { id: 'OBJ-3', objective: 'Help companies hire drivers already living in the Kingdom instead of recruiting from abroad.', indicator: '70% of closed vacancies filled by a driver already resident in Saudi Arabia.' },
  { id: 'OBJ-4', objective: 'Let companies create detailed, searchable vacancies.', indicator: '100% of published vacancies carry licence class, vehicle category, city, salary range and working hours; the form rejects a posting without them.' },
  { id: 'OBJ-5', objective: 'Cut the time it takes to hire a driver with the right qualifications.', indicator: "Median 7 days or fewer from posting to first shortlist, against each company's own pre-platform baseline recorded at sign-up." },
  { id: 'OBJ-6', objective: 'Let drivers submit and track applications.', indicator: 'Every application shows a timestamped state (Submitted, Viewed, Shortlisted, Rejected, Hired); 90% reach a final state within 30 days.' },
  { id: 'OBJ-7', objective: 'Reduce unsuitable applications by showing requirements before a driver applies.', indicator: 'Under 15% of applications rejected for a requirement that was already stated in the posting.' },
];

export const FEATURES: Feature[] = [
  { id: 'IN-01', title: 'Registration & verification', rationale: 'Driver identity through Nafath and Absher, company commercial record through Wathq. Fake postings and unlicensed drivers never enter the pool.' },
  { id: 'IN-02', title: 'Job management', rationale: 'Companies post the details that actually decide a match: licence class, vehicle category, route, salary, benefits, working hours.' },
  { id: 'IN-03', title: 'Search & matching', rationale: 'Filter by licence type, city, experience and vehicle category, on both sides of the market.' },
  { id: 'IN-04', title: 'Application tracking', rationale: 'Drivers save jobs, get notifications, and see application state. Companies manage candidates in one pipeline.' },
  { id: 'IN-05', title: 'Mutual reviews', rationale: 'Companies rate drivers, drivers rate companies. The information asymmetry works in both directions, so the fix has to as well.' },
  { id: 'IN-06', title: 'Multilingual interface', rationale: 'Arabic and English across web and app, because the driver workforce in the Kingdom is not monolingual.' },
];

export const SCOPE_IN: ScopeItem[] = [
  { id: 'IN-01', label: 'Profiles, ID and document verification' },
  { id: 'IN-02', label: 'Vacancy posting and management' },
  { id: 'IN-03', label: 'Search, filtering and job matching' },
  { id: 'IN-04', label: 'Applications, saved jobs, notifications' },
  { id: 'IN-05', label: 'Mutual review and rating' },
  { id: 'IN-06', label: 'Multilingual web and mobile interfaces' },
];

export const SCOPE_OUT: ScopeItem[] = [
  { id: 'EX-01', label: 'Overseas recruitment', reason: 'Kingdom-resident drivers only, to avoid visa and transfer processes' },
  { id: 'EX-02', label: 'Payroll and HR management', reason: 'No salaries, no shift scheduling after the hire' },
  { id: 'EX-03', label: 'Signing legal contracts', reason: 'Official employment contracts happen outside the platform' },
  { id: 'EX-04', label: 'Live GPS vehicle tracking', reason: 'Fleet management, a different product' },
];

export const CLOSING: Pain[] = [
  { who: 'Known', text: 'Problem, root causes, users, goal, seven measurable objectives, and a scope boundary with four explicit exclusions.' },
  { who: 'Assumed', text: 'Drivers and companies will trust the platform with their credentials, companies will pay to post, and drivers complete their own forms.' },
  { who: 'Constrained', text: 'HRSD and Ministry of Commerce approval to operate an employment mediation platform, plus TGA standards and access to Nafath, Absher and Wathq.' },
];
