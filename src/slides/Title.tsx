import { TEAM } from '../content';
import Mark from '../components/Mark';

export default function Title() {
  return (
    <div className="title-wrap">
      <div className="brandrow">
        <Mark />
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
        <span>Software Engineering group project, Presentation 1</span>
        <span>Dr. Abdulaziz Attaallah, 13 September 2026</span>
      </div>
    </div>
  );
}
