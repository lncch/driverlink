import type { ComponentType } from 'react';
import Title from './slides/Title';
import Problem from './slides/Problem';
import RootCause from './slides/RootCause';
import Users from './slides/Users';
import Goal from './slides/Goal';
import Solution from './slides/Solution';
import Scope from './slides/Scope';
import Close from './slides/Close';
import Thanks from './slides/Thanks';

export interface SlideMeta {
  /** Short name, used for the navigation dots' accessible labels. */
  label: string;
  /**
   * The bilingual guide sign. It lives here rather than inside each slide so it
   * renders outside the auto-fit, keeping one size across the whole deck.
   * The title slide has none.
   */
  sign?: { arabic: string; english: string };
  Body: ComponentType;
}

export const SLIDES: SlideMeta[] = [
  { label: 'Title', Body: Title },
  { label: 'The problem', sign: { arabic: 'ما هي المشكلة؟', english: 'What is the problem?' }, Body: Problem },
  { label: 'Root cause', sign: { arabic: 'لماذا تحدث المشكلة؟', english: 'Why does it happen?' }, Body: RootCause },
  { label: 'Who is affected', sign: { arabic: 'من المتأثر؟', english: 'Who is affected?' }, Body: Users },
  { label: 'Goal and objectives', sign: { arabic: 'ما الذي نريد تحقيقه؟', english: 'What do we want to achieve?' }, Body: Goal },
  { label: 'Proposed solution', sign: { arabic: 'ما هو الحل المقترح؟', english: 'What are we proposing?' }, Body: Solution },
  { label: 'Scope', sign: { arabic: 'ما حدود المشروع؟', english: 'Where does it stop?' }, Body: Scope },
  { label: 'What comes next', sign: { arabic: 'ما التالي؟', english: 'What comes next?' }, Body: Close },
  { label: 'Thank you', Body: Thanks },
];
