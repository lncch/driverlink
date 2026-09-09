import SignPanel from '../components/SignPanel';
import Expandable from '../components/Expandable';
import { GOAL, OBJECTIVES } from '../content';

export default function Goal() {
  return (
    <>
      <SignPanel number={5} arabic="ما الذي نريد تحقيقه؟" english="What do we want to achieve?" />
      <div className="goal">{GOAL}</div>
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
