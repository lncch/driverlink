import type { Pain } from '../content';

/** Splits a pain's text so its `stress` phrase renders emphasised. */
function Text({ pain }: { pain: Pain }) {
  if (!pain.stress) return <>{pain.text}</>;
  const at = pain.text.indexOf(pain.stress);
  if (at === -1) return <>{pain.text}</>;
  return (
    <>
      {pain.text.slice(0, at)}
      <em>{pain.stress}</em>
      {pain.text.slice(at + pain.stress.length)}
    </>
  );
}

export default function PainList({ items }: { items: Pain[] }) {
  return (
    <div className="stack">
      {items.map((p) => (
        <div className="pain" key={p.who}>
          <div className="who">{p.who}</div>
          <div className="txt"><Text pain={p} /></div>
        </div>
      ))}
    </div>
  );
}
