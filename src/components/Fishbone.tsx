import { CAUSES, EFFECT } from '../content';

const SPINE_Y = 345;
const SPINE_X0 = 90;
const SPINE_X1 = 1215;
/** Where each bone meets the spine. Bones 0-2 sit above it, 3-5 below. */
const ATTACH_X = [430, 750, 1070];
const BONE_RUN = 155;
const TIP_Y_ABOVE = 100;
const TIP_Y_BELOW = 590;
/** Positions of the three factor labels along each bone. */
const FACTOR_T = [0.3, 0.55, 0.8];

export default function Fishbone() {
  return (
    <div className="fish">
      <svg viewBox="0 0 1580 690" role="img" aria-labelledby="fb-title">
        <title id="fb-title">
          Fishbone cause and effect diagram for the DriverLink problem, with six cause
          categories feeding one effect
        </title>

        <line x1={SPINE_X0} y1={SPINE_Y} x2={SPINE_X1} y2={SPINE_Y} stroke="currentColor" strokeWidth={3} />
        <polygon
          points={`${SPINE_X1},${SPINE_Y - 11} ${SPINE_X1 + 26},${SPINE_Y} ${SPINE_X1},${SPINE_Y + 11}`}
          fill="currentColor"
        />

        <rect x={1250} y={255} width={310} height={180} rx={3} fill="var(--amber-fill)" stroke="var(--amber)" strokeWidth={2} />
        <text x={1272} y={288} fontSize={12} fontWeight={700} letterSpacing="1.6" fill="var(--amber)">
          THE EFFECT
        </text>
        {EFFECT.map((line, i) => (
          <text key={line} x={1272} y={322 + i * 26} fontSize={17} fontWeight={600} fill="var(--ink)">
            {line}
          </text>
        ))}

        {CAUSES.map((cause, i) => {
          const above = i < 3;
          const attachX = ATTACH_X[i % 3];
          const tipX = attachX - BONE_RUN;
          const tipY = above ? TIP_Y_ABOVE : TIP_Y_BELOW;
          return (
            <g key={cause.category}>
              <line x1={tipX} y1={tipY} x2={attachX} y2={SPINE_Y} stroke="var(--accent)" strokeWidth={2.5} />
              <text
                x={tipX}
                y={above ? tipY - 14 : tipY + 26}
                fontSize={18}
                fontWeight={800}
                fill="var(--accent-ink)"
                fontFamily="Overpass, sans-serif"
                letterSpacing="0.5"
              >
                {cause.category.toUpperCase()}
              </text>
              {cause.factors.map((factor, j) => {
                const t = FACTOR_T[j];
                const px = tipX + (attachX - tipX) * t;
                const py = tipY + (SPINE_Y - tipY) * t;
                return (
                  <g key={factor}>
                    <line x1={px} y1={py} x2={px + 9} y2={py} stroke="var(--line)" strokeWidth={2} />
                    <text x={px + 15} y={py + 4.5} fontSize={13.5} fill="var(--ink)">
                      {factor}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
