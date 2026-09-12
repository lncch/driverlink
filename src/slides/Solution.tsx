import { FEATURES } from '../content';

export default function Solution() {
  return (
    <>
      <h2>One platform, on web and mobile.</h2>
      <p className="lede">
        The website targets drivers and company recruiters. The mobile application gives drivers
        easy access to vacancies, applications, notifications and saved jobs. Both use the same
        database and backend services, so each side sees the same data.
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
