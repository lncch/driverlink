import Eyebrow from '../components/Eyebrow';
import { FEATURES } from '../content';

export default function Solution() {
  return (
    <>
      <Eyebrow step="05 / PROPOSED SOLUTION" rubric="Rubric 4 · Solution" arabic="ما هو الحل المقترح؟" />
      <h2>One verified platform. Website for both sides, app for drivers.</h2>
      <p className="lede">
        Website and mobile application run on a shared database and backend, so a vacancy posted
        by a recruiter on the web appears in a driver's app immediately, and an application
        submitted on the app appears in the recruiter's pipeline.
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
