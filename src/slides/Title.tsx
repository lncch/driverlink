import { TEAM } from '../content';
import mark from '../assets/logo-mark.png';

export default function Title() {
  return (
    <div className="title-wrap">
      <div className="brandrow">
        <img className="mark" src={mark} alt="" width={512} height={468} />
        <div className="brandname">
          DriverLink
          <span lang="ar" dir="rtl">منصّة توظيف السائقين في السعودية</span>
        </div>
      </div>

      <h1>Hiring a driver shouldn't<br />depend on who you know.</h1>

      <p className="lede">
        A recruitment platform connecting licensed professional drivers already living in
        Saudi Arabia with the companies that need them. Website and mobile application on
        one shared database.
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
