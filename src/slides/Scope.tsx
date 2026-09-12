import { SCOPE_OUT, HIRING_STEPS } from '../content';

export default function Scope() {
  return (
    <>
      <h2>An intermediate between drivers and companies, nothing more.</h2>

      {/* Section 1.6's sentence, with the chips completing it. */}
      <div className="leadin">
        <p className="lede">
          The project will focus exclusively on the hiring process, which involves:
        </p>
        <div className="steps">
          {HIRING_STEPS.map((step, i) => (
            <span className="step" key={step}>
              <b>{i + 1}</b>{step}
            </span>
          ))}
        </div>
      </div>

      {/* Only the exclusions. The included features are slide 6, with the
          same IN-01..IN-06 codes, so listing them again said nothing new. */}
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
