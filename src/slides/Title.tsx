import { TEAM } from '../content';

export default function Title() {
  return (
    <div className="title-wrap">
      <div className="plate">
        <b>KSA</b>
        <span>DRIVERLINK</span>
      </div>
      <h1>
        Hiring a driver shouldn't<br />depend on who you know.
      </h1>
      <p className="lede">
        A recruitment platform connecting licensed professional drivers already living in
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
      <div className="credits">
        <span>Software Engineering group project, Phase 1, Presentation 1</span>
        <span>Dr. Abdulaziz Attaallah, 13 September 2026</span>
      </div>
    </div>
  );
}
