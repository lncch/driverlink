import PainList from '../components/PainList';
import { CLOSING } from '../content';

export default function Close() {
  return (
    <>
      <h2>Where this leaves us.</h2>
      <div className="cols c2">
        <PainList items={CLOSING} />
        <div>
          <div className="quote">
            Next comes requirements elicitation and the use-case model.
          </div>
          <p className="lede" style={{ marginTop: 20 }}>Any Questions?</p>
        </div>
      </div>
    </>
  );
}
