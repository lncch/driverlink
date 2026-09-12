import { TEAM } from '../content';
import Mark from '../components/Mark';

export default function Thanks() {
  return (
    <div className="title-wrap closing">
      <Mark />

      <h1>
        Thank you.<br />Questions?
      </h1>
      <p className="closing-ar" lang="ar" dir="rtl">شكراً لحسن استماعكم، ونرحب بأسئلتكم</p>

      <div className="closing-team">
        {TEAM.map((m) => (
          <span key={m.name}>{m.name}</span>
        ))}
      </div>
    </div>
  );
}
