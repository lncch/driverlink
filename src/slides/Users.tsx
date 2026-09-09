import SignPanel from '../components/SignPanel';
import PainList from '../components/PainList';
import { PRIMARY_USERS, STAKEHOLDERS } from '../content';

export default function Users() {
  return (
    <>
      <SignPanel number={4} arabic="من المتأثر؟" english="Who is affected?" />
      <h2>Who uses it, and who else has a stake.</h2>
      <div className="cols c2">
        <div>
          <h3 className="colhead">People who use the platform</h3>
          <PainList items={PRIMARY_USERS} />
        </div>
        <div>
          <h3 className="colhead">People with a stake in it</h3>
          <PainList items={STAKEHOLDERS} />
        </div>
      </div>
    </>
  );
}
