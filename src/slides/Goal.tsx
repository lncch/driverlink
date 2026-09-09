import Eyebrow from '../components/Eyebrow';
import { GOAL, OBJECTIVES } from '../content';

export default function Goal() {
  return (
    <>
      <Eyebrow step="04 / GOAL & OBJECTIVES" rubric="Rubric 2 · Goal" arabic="ما الذي نريد تحقيقه؟" />
      <div className="goal">{GOAL}</div>
      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th style={{ width: 70 }}>ID</th>
              <th style={{ width: '38%' }}>Objective</th>
              <th>Success indicator</th>
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
    </>
  );
}
