# DriverLink — Phase 1 Presentation

Presentation 1 (Project Introduction) for the DriverLink group project.
Software engineering group project, Phase 1.

**Live deck:** https://lncch.github.io/driverlink/

## Using it

| Key | Action |
|-----|--------|
| `←` `→` `space` | Previous / next slide |
| `P` | Print all slides stacked (Save as PDF for Blackboard) |

Eight slides for a 7-minute slot. Each opens with a bilingual sign panel, and
the eight panels together walk the question sequence the presentation has to
answer: what is the problem, why does it happen, who is affected, what do we
want to achieve, what are we proposing.

## Rubric coverage

| Slide | Rubric criterion | Marks |
|-------|------------------|-------|
| 2, 3 | Project idea and problem, with fishbone root-cause analysis | 2 |
| 5 | Goal and objectives | 2 |
| 4 | Target users and stakeholders | 1 |
| 6, 7 | Proposed solution and scope | 2 |
| all | Presentation quality and time management | 1 |
| all | Team participation and understanding | 2 |

## Local development

```
npm install
npm run dev        # http://localhost:5173/driverlink/
npm run build      # typecheck, then bundle into dist/
npm run preview    # serve the production build
```

Pushing to `main` builds and publishes through
`.github/workflows/deploy.yml`. Content lives in `src/content.ts`; edit copy
there rather than in the slide components.

## Contents

1. Title and team
2. Problem statement
3. Fishbone root-cause analysis
4. Target users and stakeholders
5. Goal and seven measurable objectives
6. Proposed solution and main features
7. Scope: included and excluded
8. Assumptions, constraints, next phase

## Team

- Almoayyad Abuljdail — team leader, organization, slides, integration
- Ibrahim Alyami — problem, objectives, root-cause analysis
- Elyas Babour — goal, system boundary, scope
- Mohammed Al Ghalib — identification, introduction, proposed system
