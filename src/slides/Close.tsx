import Eyebrow from '../components/Eyebrow';
import PainList from '../components/PainList';
import { CLOSING } from '../content';

export default function Close() {
  return (
    <>
      <Eyebrow step="07 / NEXT" rubric="Rubric 6 · Understanding" arabic="شكراً لكم" />
      <h2>Where Phase 1 leaves us.</h2>
      <div className="cols c2">
        <PainList items={CLOSING} />
        <div>
          <div className="quote" style={{ borderColor: 'var(--accent)' }}>
            Next: requirements elicitation and the use-case model for Phase 2.
          </div>
          <p className="lede" style={{ marginTop: 18 }}>Questions.</p>
          <p className="meta" style={{ marginTop: 24 }}>
            Slides and Phase 1 Report submitted on Blackboard.
          </p>
        </div>
      </div>
    </>
  );
}
