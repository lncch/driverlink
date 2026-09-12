import { SCOPE_IN, SCOPE_OUT, HIRING_STEPS } from '../content';

export default function Scope() {
  return (
    <>
      <h2>An intermediate between drivers and companies, nothing more.</h2>
      <div className="steps">
        {HIRING_STEPS.map((step, i) => (
          <span className="step" key={step}>
            <b>{i + 1}</b>{step}
          </span>
        ))}
      </div>

      <div className="scope">
        <div className="in">
          <h3>Inside the boundary</h3>
          {SCOPE_IN.map((s) => (
            <div className="item" key={s.id}>
              <span className="k">{s.id}</span>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <div className="out">
          <h3>Outside the boundary</h3>
          {/* Same card treatment as the features on slide 6: the four
              exclusions already carry an id, a title and a reason. */}
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
      </div>
    </>
  );
}
