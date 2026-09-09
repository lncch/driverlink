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
  /** Short name, used for the navigation dots' accessible labels. */
  label: string;
  Body: ComponentType;
}

export const SLIDES: SlideMeta[] = [
  { label: 'Title', Body: Title },
  { label: 'The problem', Body: Problem },
  { label: 'Root cause', Body: RootCause },
  { label: 'Who is affected', Body: Users },
  { label: 'Goal and objectives', Body: Goal },
  { label: 'Proposed solution', Body: Solution },
  { label: 'Scope', Body: Scope },
  { label: 'What comes next', Body: Close },
];
