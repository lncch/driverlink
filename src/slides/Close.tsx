import SignPanel from '../components/SignPanel';
import PainList from '../components/PainList';
import { CLOSING } from '../content';

export default function Close() {
  return (
    <>
      <SignPanel number={8} arabic="ما التالي؟" english="What comes next?" />
      <h2>Where Phase 1 leaves us.</h2>
      <div className="cols c2">
        <PainList items={CLOSING} />
        <div>
          <div className="quote">
            Phase 2 takes this into requirements elicitation and the use-case model.
          </div>
          <p className="lede" style={{ marginTop: 20 }}>Any Questions?</p>
        </div>
      </div>
    </>
  );
}
