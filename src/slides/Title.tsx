import { TEAM } from '../content';
import Mark from '../components/Mark';

export default function Title() {
  return (
    <div className="title-wrap">
      <div className="brandrow">
        <Mark />
        <div className="brandname">
          HireWheel
          <span lang="ar" dir="rtl">فرصتك القادمة، وسائقهم القادم</span>
        </div>
      </div>

      <h1>Your Next Opportunity.<br />Their Next Driver.</h1>

      <div className="team">
        {TEAM.map((m) => (
          <div key={m.name}>
            <div className="nm">{m.name}</div>
            <div className="rl">{m.role}</div>
          </div>
        ))}
      </div>

      <div className="credits">
        <span>Software Engineering group project</span>
        <span>Dr. Abdulaziz Attaallah</span>
      </div>
    </div>
  );
}
