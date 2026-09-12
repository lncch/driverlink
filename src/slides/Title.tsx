import { TEAM } from '../content';
import Mark from '../components/Mark';

export default function Title() {
  return (
    <div className="title-wrap">
      <div className="brandrow">
        <Mark />
        <div className="brandname">HireWheel</div>
      </div>

      <h1>Your Next Opportunity.<br />Their Next Driver.</h1>

      <div className="team-row">
        {TEAM.map((m) => (
          <span key={m.name}>{m.name}</span>
        ))}
      </div>

      <div className="credits">
        <span>Software Engineering group project</span>
        <span>Dr. Abdulaziz Attaallah</span>
      </div>
    </div>
  );
}
