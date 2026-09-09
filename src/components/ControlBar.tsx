import { SLIDES } from '../deck';

interface Props {
  index: number;
  go: (n: number) => void;
}

export default function ControlBar({ index, go }: Props) {
  return (
    <div className="bar">
      <div className="lane" style={{ width: `${((index + 1) / SLIDES.length) * 100}%` }} />
      <div className="dots" role="tablist" aria-label="Slides">
        {SLIDES.map((s, n) => (
          <button
            key={s.label}
            type="button"
            role="tab"
            aria-label={`Slide ${n + 1}: ${s.label}`}
            aria-current={n === index}
            onClick={() => go(n)}
          />
        ))}
      </div>
      <span className="where">{SLIDES[index].label}</span>
      <span className="count">
        {index + 1}<i>/</i>{SLIDES.length}
      </span>
    </div>
  );
}
