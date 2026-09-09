import { TEAM } from '../content';

export default function Title() {
  return (
    <div className="title-wrap">
      <div className="plate">
        <b>KSA</b>
        <span>DRIVERLINK</span>
      </div>
      <h1>
        Hiring a driver<br />shouldn't depend<br />on who you know.
      </h1>
      <p className="lede">
        A recruitment platform that connects licensed professional drivers already living in
        Saudi Arabia with the companies that need them. Website for companies and drivers,
        mobile app for drivers.
      </p>
      <div className="team">
        {TEAM.map((m) => (
          <div key={m.name}>
            <div className="nm">{m.name}</div>
            <div className="rl">{m.role}</div>
          </div>
        ))}
      </div>
      <p className="meta">
        SWE Group Project · Phase 1 · Presentation 1 · Dr. Abdulaziz Attaallah · 13 Sep 2026
      </p>
    </div>
  );
}
