import { SCOPE_OUT } from '../content';

export default function Scope() {
  return (
    <>
      <h2>An intermediate between drivers and companies, nothing more.</h2>

      {/* Only the exclusions. Everything in scope is slide 6: its six cards
          carry the same IN-01..IN-06 codes, and section 1.6's five hiring
          activities all map onto them, so either list only repeated it. */}
      <div className="featblock">
        <h3 className="seclabel out">Excluded features</h3>
        <div className="feat out-cards">
          {SCOPE_OUT.map((s) => (
            <article key={s.id}>
              <span className="k">{s.id}</span>
              <h3>{s.label}</h3>
              <p>{s.reason}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
