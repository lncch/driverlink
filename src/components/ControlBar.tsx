import { SLIDES } from '../deck';

interface Props {
  index: number;
  go: (n: number) => void;
  step: (delta: number) => void;
  fullscreen: boolean;
  toggleFullscreen: () => void;
  toggleHelp: () => void;
}

export default function ControlBar({ index, go, step, fullscreen, toggleFullscreen, toggleHelp }: Props) {
  const last = SLIDES.length - 1;
  return (
    <div className="bar">
      <div className="lane" style={{ width: `${((index + 1) / SLIDES.length) * 100}%` }} />

      <button type="button" className="icon" onClick={() => step(-1)} disabled={index === 0} aria-label="Previous slide">‹</button>
      <button type="button" className="icon" onClick={() => step(1)} disabled={index === last} aria-label="Next slide">›</button>

      <div className="dots" role="tablist" aria-label="Slides">
        {SLIDES.map((s, n) => (
          <button
            key={s.label}
            type="button"
            role="tab"
            title={s.label}
            aria-label={`Slide ${n + 1}: ${s.label}`}
            aria-current={n === index}
            onClick={() => go(n)}
          />
        ))}
      </div>

      <span className="where">{SLIDES[index].label}</span>

      <span className="count">{index + 1}<i>/</i>{SLIDES.length}</span>
      <button type="button" className="icon" onClick={toggleHelp} aria-label="Keyboard shortcuts">?</button>
      <button
        type="button"
        className="icon"
        onClick={toggleFullscreen}
        aria-label={fullscreen ? 'Leave fullscreen' : 'Enter fullscreen'}
      >
        {fullscreen ? '✕' : '⛶'}
      </button>
    </div>
  );
}
