import { FEATURES } from '../content';

export default function Solution() {
  return (
    <>
      <h2>One verified platform, on web and mobile.</h2>
      <p className="lede">
        Website and mobile application run on one database and backend, so a vacancy posted by a
        recruiter appears on a driver's phone immediately, and an application submitted from the
        phone appears in the recruiter's pipeline. Same account, same data, whichever you open.
      </p>
      <div className="feat">
        {FEATURES.map((f) => (
          <article key={f.id}>
            <span className="k">{f.id}</span>
            <h3>{f.title}</h3>
            <p>{f.rationale}</p>
          </article>
        ))}
      </div>
    </>
  );
}
