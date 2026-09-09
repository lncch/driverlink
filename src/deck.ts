import type { ComponentType } from 'react';
import Title from './slides/Title';
import Problem from './slides/Problem';
import RootCause from './slides/RootCause';
import Users from './slides/Users';
import Goal from './slides/Goal';
import Solution from './slides/Solution';
import Scope from './slides/Scope';
import Close from './slides/Close';

export interface SlideMeta {
  speaker: string;
  role: string;
  /** Seconds allotted. The eight budgets sum to the 7-minute limit. */
  budget: number;
  Body: ComponentType;
}

export const SLIDES: SlideMeta[] = [
  { speaker: 'Almoayyad Abuljdail', role: 'Team leader · opening', budget: 30, Body: Title },
  { speaker: 'Ibrahim Alyami', role: 'Problem statement', budget: 55, Body: Problem },
  { speaker: 'Ibrahim Alyami', role: 'Root cause analysis', budget: 85, Body: RootCause },
  { speaker: 'Mohammed Al Ghalib', role: 'Users and stakeholders', budget: 45, Body: Users },
  { speaker: 'Elyas Babour', role: 'Goal and objectives', budget: 70, Body: Goal },
  { speaker: 'Mohammed Al Ghalib', role: 'Proposed solution', budget: 70, Body: Solution },
  { speaker: 'Elyas Babour', role: 'Scope', budget: 40, Body: Scope },
  { speaker: 'Almoayyad Abuljdail', role: 'Close', budget: 25, Body: Close },
];

/** Cumulative finish time for each slide, in seconds from the start. */
export const CUES: number[] = SLIDES.reduce<number[]>((acc, s) => {
  acc.push((acc[acc.length - 1] ?? 0) + s.budget);
  return acc;
}, []);

export const TOTAL_SECONDS = CUES[CUES.length - 1];

export function mmss(seconds: number): string {
  const s = Math.max(0, Math.round(Math.abs(seconds)));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}
