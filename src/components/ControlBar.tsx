import { SLIDES, CUES, mmss } from '../deck';

interface Props {
  index: number;
  go: (n: number) => void;
  remaining: number;
  running: boolean;
  toggleTimer: () => void;
}

export default function ControlBar({ index, go, remaining, running, toggleTimer }: Props) {
  const slide = SLIDES[index];
  return (
    <div className="bar">
      <div className="lane" style={{ width: `${((index + 1) / SLIDES.length) * 100}%` }} />
      <div className="dots" role="tablist" aria-label="Slides">
        {SLIDES.map((s, n) => (
          <button
            key={s.role + n}
            type="button"
            role="tab"
            aria-label={`Slide ${n + 1}: ${s.role}`}
            aria-current={n === index}
            onClick={() => go(n)}
          />
        ))}
      </div>
      <div className="speaker">
        {slide.speaker}
        <small>{slide.role}</small>
      </div>
      <span className="cue">
        slide {index + 1}/{SLIDES.length} · {slide.budget}s · finish by {mmss(CUES[index])}
      </span>
      <button type="button" className="btn" onClick={toggleTimer}>
        {running ? 'Pause' : remaining === CUES[CUES.length - 1] ? 'Start 7:00' : 'Resume'}
      </button>
      <span className={remaining <= 30 ? 'clock over' : 'clock'}>
        {remaining < 0 ? '-' : ''}
        {mmss(remaining)}
      </span>
    </div>
  );
}
