import Expandable from '../components/Expandable';
import { GOAL, GOAL_LONG, OBJECTIVES } from '../content';

export default function Goal() {
  return (
    <>
      <div className="goalrow">
        <div className="goal">{GOAL}</div>
        <p className="goal-long">{GOAL_LONG}</p>
      </div>
      <Expandable label="the objectives table">
        <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th style={{ width: 74 }}>ID</th>
              <th style={{ width: '38%' }}>Objective</th>
              <th>How we will know it worked</th>
            </tr>
          </thead>
          <tbody>
            {OBJECTIVES.map((o) => (
              <tr key={o.id}>
                <td className="id">{o.id}</td>
                <td>{o.objective}</td>
                <td className="m">{o.indicator}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </Expandable>
    </>
  );
}
