import { PRIMARY_USERS, STAKEHOLDERS } from '../content';

export default function Users() {
  return (
    <>
      <h2>Users and stakeholders</h2>
      <div className="audience-map">
        <div className="audience-primary">
          <h3 className="colhead">Primary users</h3>
          <div className="audience-stack">
            {PRIMARY_USERS.map((user) => (
              <section className="audience-block" key={user.who}>
                <div className="audience-who">{user.who}</div>
                <p>{user.text}</p>
              </section>
            ))}
          </div>
        </div>

        <div className="audience-stakeholders">
          <h3 className="colhead">Supporting stakeholders</h3>
          <div className="stakeholder-list">
            {STAKEHOLDERS.map((stakeholder) => (
              <section className="stakeholder-row" key={stakeholder.who}>
                <div className="stakeholder-who">{stakeholder.who}</div>
                <p>{stakeholder.text}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
