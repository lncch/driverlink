import { CAUSES, EFFECT } from '../content';

const SPINE_Y = 345;
const SPINE_X0 = 90;
const SPINE_X1 = 1290;
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
      <svg viewBox="0 60 1660 570" role="img" aria-labelledby="fb-title">
        <title id="fb-title">
          Fishbone cause and effect diagram for the HireWheel problem, with six cause
          categories feeding one effect
        </title>

        <line x1={SPINE_X0} y1={SPINE_Y} x2={SPINE_X1} y2={SPINE_Y} stroke="currentColor" strokeWidth={3} />
        <polygon
          points={`${SPINE_X1},${SPINE_Y - 12} ${SPINE_X1 + 28},${SPINE_Y} ${SPINE_X1},${SPINE_Y + 12}`}
          fill="currentColor"
        />

        <rect x={1330} y={252} width={320} height={186} rx={7} fill="#8E3A2C" stroke="#5E241A" strokeWidth={2} />
        {EFFECT.map((line, i) => (
          <text
            key={line}
            x={1356}
            y={298 + i * 32}
            fontSize={21}
            fontWeight={600}
            fill="#FBFAF7"
          >
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
              <line x1={tipX} y1={tipY} x2={attachX} y2={SPINE_Y} stroke="var(--accent-line)" strokeWidth={2.5} />
              <text
                x={tipX}
                y={above ? tipY - 17 : tipY + 30}
                fontSize={22}
                fontWeight={700}
                fill="var(--accent-line)"
                fontFamily="Archivo, Arial, sans-serif"
                fontStretch="112%"
              >
                {cause.category}
              </text>
              {cause.factors.map((factor, j) => {
                const t = FACTOR_T[j];
                const px = tipX + (attachX - tipX) * t;
                const py = tipY + (SPINE_Y - tipY) * t;
                return (
                  <g key={factor}>
                    <line x1={px} y1={py} x2={px + 11} y2={py} stroke="var(--line)" strokeWidth={2} />
                    <text x={px + 18} y={py + 5.5} fontSize={16.5} fill="var(--ink)">
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
