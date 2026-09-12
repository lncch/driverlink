import { TEAM } from '../content';
import mark from '../assets/hirewheel-mark.svg';

export default function Title() {
  return (
    <div className="title-wrap">
      <div className="brandrow">
        <img className="mark" src={mark} alt="" width={48} height={48} />
        <div className="brandname">
          HireWheel
          <span lang="ar" dir="rtl">منصّة توظيف السائقين في السعودية</span>
        </div>
      </div>

      <h1>Hiring a driver shouldn't<br />depend on who you know.</h1>

      <p className="lede">
        A recruitment and professional networking platform connecting professional and legal
        drivers with companies looking for drivers. Website and mobile application, sharing one
        database and backend. Saudi Arabia initially.
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
