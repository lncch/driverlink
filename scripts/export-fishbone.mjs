// Emits standalone fishbone SVGs from the same content the slide uses, so an
// exported file cannot drift from the deck. Run: node scripts/export-fishbone.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const src = readFileSync(new URL('../src/content.ts', import.meta.url), 'utf8');

function block(name) {
  const i = src.indexOf(`export const ${name}`);
  return src.slice(i, src.indexOf('];', i));
}

const CAUSES = [...block('CAUSES').matchAll(/category:\s*'([^']+)',\s*factors:\s*\[([^\]]+)\]/g)]
  .map(([, category, list]) => ({
    category,
    factors: [...list.matchAll(/'([^']*)'/g)].map(([, f]) => f),
  }));
const EFFECT = [...block('EFFECT').matchAll(/'([^']*)'/g)].map(([, l]) => l);

if (CAUSES.length !== 6 || EFFECT.length === 0) {
  throw new Error(`parsed ${CAUSES.length} causes and ${EFFECT.length} effect lines; expected 6 and >0`);
}

// Geometry mirrors src/components/Fishbone.tsx
const Y0 = 60;  // the drawing starts here; everything shifts up so the viewBox is 0 0
const SPINE_Y = 345 - Y0, SPINE_X0 = 90, SPINE_X1 = 1290;
const ATTACH_X = [430, 750, 1070], BONE_RUN = 155;
const TIP_ABOVE = 100 - Y0, TIP_BELOW = 590 - Y0, FACTOR_T = [0.3, 0.55, 0.8];
const FONT = "'Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif";

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function render({ bg, spine, bone, tick, text, boxFill, boxStroke, boxText }) {
  const out = [];
  out.push(`<rect x="0" y="0" width="1660" height="570" fill="${bg}"/>`);
  out.push(`<line x1="${SPINE_X0}" y1="${SPINE_Y}" x2="${SPINE_X1}" y2="${SPINE_Y}" stroke="${spine}" stroke-width="3"/>`);
  out.push(`<polygon points="${SPINE_X1},${SPINE_Y - 12} ${SPINE_X1 + 28},${SPINE_Y} ${SPINE_X1},${SPINE_Y + 12}" fill="${spine}"/>`);
  out.push(`<rect x="1330" y="${252 - Y0}" width="320" height="186" rx="7" fill="${boxFill}" stroke="${boxStroke}" stroke-width="2"/>`);
  EFFECT.forEach((line, i) => {
    out.push(`<text x="1356" y="${298 - Y0 + i * 32}" font-size="21" font-weight="600" fill="${boxText}" font-family="${FONT}">${esc(line)}</text>`);
  });
  CAUSES.forEach((cause, i) => {
    const above = i < 3;
    const attachX = ATTACH_X[i % 3];
    const tipX = attachX - BONE_RUN;
    const tipY = above ? TIP_ABOVE : TIP_BELOW;
    out.push(`<line x1="${tipX}" y1="${tipY}" x2="${attachX}" y2="${SPINE_Y}" stroke="${bone}" stroke-width="2.5"/>`);
    out.push(`<text x="${tipX}" y="${above ? tipY - 17 : tipY + 30}" font-size="22" font-weight="700" fill="${bone}" font-family="${FONT}">${esc(cause.category)}</text>`);
    cause.factors.forEach((factor, j) => {
      const t = FACTOR_T[j];
      const px = tipX + (attachX - tipX) * t;
      const py = tipY + (SPINE_Y - tipY) * t;
      out.push(`<line x1="${px.toFixed(1)}" y1="${py.toFixed(1)}" x2="${(px + 11).toFixed(1)}" y2="${py.toFixed(1)}" stroke="${tick}" stroke-width="2"/>`);
      out.push(`<text x="${(px + 18).toFixed(1)}" y="${(py + 5.5).toFixed(1)}" font-size="16.5" fill="${text}" font-family="${FONT}">${esc(factor)}</text>`);
    });
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1660" height="570" viewBox="0 0 1660 570">
<title>Fishbone cause and effect diagram for the HireWheel problem: six cause categories feeding one effect</title>
${out.join('\n')}
</svg>
`;
}

const variants = {
  // matches the deck
  'fishbone-dark.svg': { bg: '#101413', spine: '#E8EFEA', bone: '#2E9E72', tick: '#3A4A43',
                         text: '#E8EFEA', boxFill: '#8E3A2C', boxStroke: '#5E241A', boxText: '#FBFAF7' },
  // for the Phase 1 report and anything printed
  'fishbone-light.svg': { bg: '#FFFFFF', spine: '#121514', bone: '#0A4E37', tick: '#BFC8C3',
                          text: '#121514', boxFill: '#8E3A2C', boxStroke: '#5E241A', boxText: '#FFFFFF' },
};

mkdirSync(new URL('../exports/', import.meta.url), { recursive: true });
for (const [name, v] of Object.entries(variants)) {
  const svg = render(v);
  writeFileSync(new URL(`../exports/${name}`, import.meta.url), svg);
  console.log(`${name}  ${svg.length} bytes`);
}
console.log(`from ${CAUSES.length} causes, ${CAUSES.reduce((n, c) => n + c.factors.length, 0)} factors, ${EFFECT.length} effect lines`);
