# DriverLink — Phase 1 Presentation

Presentation 1 (Project Introduction) for the DriverLink group project.
Software engineering group project, Phase 1.

**Live deck:** https://lncch.github.io/swe-project/

## Using it

| Key | Action |
|-----|--------|
| `←` `→` `space` | Previous / next slide |
| `F` | Fullscreen |
| `B` | Blank the screen to black |
| `?` | Keyboard shortcuts |
| `P` | Print all slides stacked (Save as PDF for Blackboard) |
| `Esc` | Close the overlay, or unblank |

Or use the on-screen controls: the `‹` `›` buttons in the bar, the dot for
any slide, or the invisible click strips down the left and right edges of the
screen. Swipe left and right works on a touchscreen. The URL tracks the slide
(`/swe-project/#5`), so a reload keeps your place and a link can point at one
slide. A screen wake lock holds the display on while the deck is open.

Each slide sizes its own content to the window: dense slides shrink so nothing
needs scrolling, sparse ones grow so the frame is not half empty. The body is
laid out at `100 / scale` percent width and then scaled, so text re-wraps at
the scaled measure rather than being stretched. Because the width feeds back
into the height, the fit iterates to a fixed point. See
`src/components/Slide.tsx`.

Clicking anywhere on the fishbone or the objectives table opens it full
screen; `Esc` or a click outside closes it. See
`src/components/Expandable.tsx`.

## Brand

Logo by the team. Colours are sampled from the mark, and each one keeps the
role it plays in the logo: navy is the letterform, green is the road, amber is
the pin.

| Token | Hex | Use |
|-------|-----|-----|
| navy | `#092B4C` | sign panels, headings, ink |
| green | `#069767` | progress lane, active dot, goal panel, IDs, fishbone bones; `#056D4B` for small text, `#057A53` for fills under white text |
| amber | `#D9A33C` | the fishbone effect box, the way a road warning sign is marked |

Green and amber are too light for small text at full strength (3.05:1 and
1.86:1 against the pale ground), so each keeps a darkened ink variant that
clears 4.5:1.

## Typography

Set in [Thmanyah](https://font.thmanyah.com/), released by the Saudi media
company of the same name, free for personal and commercial use. It carries
Latin and Arabic in one family, so the bilingual sign panels are one typeface
rather than two. Thmanyah Serif Display for headlines, Thmanyah Sans for
everything else. The five weights are self-hosted from `src/fonts/`, so the
deck needs no font CDN at presentation time.

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
