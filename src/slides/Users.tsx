import Eyebrow from '../components/Eyebrow';
import PainList from '../components/PainList';
import { PRIMARY_USERS, STAKEHOLDERS } from '../content';

export default function Users() {
  return (
    <>
      <Eyebrow step="03 / WHO IS AFFECTED" rubric="Rubric 3 · Users" arabic="من المتأثر؟" />
      <h2>Who uses it, and who else has a stake.</h2>
      <div className="cols c2">
        <div>
          <h3 className="colhead" style={{ color: 'var(--accent-ink)' }}>Primary users</h3>
          <PainList items={PRIMARY_USERS} />
        </div>
        <div>
          <h3 className="colhead" style={{ color: 'var(--amber)' }}>Other stakeholders</h3>
          <PainList items={STAKEHOLDERS} />
        </div>
      </div>
    </>
  );
}
