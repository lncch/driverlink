import { SCOPE_OUT, HIRING_STEPS } from '../content';

export default function Scope() {
  return (
    <>
      <h2>An intermediate between drivers and companies, nothing more.</h2>
      <p className="lede">
        The project focuses exclusively on the hiring process. HireWheel helps drivers and
        companies find each other, and does not provide other services to its clients or
        employees.
      </p>

      <div className="featblock">
        <h3 className="seclabel in">The hiring process, in five activities</h3>
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
