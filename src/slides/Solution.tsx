import { FEATURES } from '../content';

export default function Solution() {
  return (
    <>
      <h2>Drivers make themselves findable. Companies go looking.</h2>
      <p className="lede">
        A driver publishes one verified profile carrying licence class, vehicle categories and
        experience. Companies search that pool and approach the drivers they want, and post
        vacancies drivers can find and apply to. Web and mobile run on one database, so both
        sides always see the same thing.
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
