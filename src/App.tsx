import ControlBar from './components/ControlBar';
import { SLIDES } from './deck';
import { useDeck } from './useDeck';

export default function App() {
  const { index, go, remaining, running, toggleTimer } = useDeck();

  return (
    <>
      {/* Every slide stays mounted so Cmd-P prints the whole deck. */}
      <div className="deck">
        {SLIDES.map(({ Body, role }, n) => (
          <section
            key={role + n}
            className={n === index ? 'slide on' : 'slide'}
            aria-hidden={n !== index}
          >
            <Body />
          </section>
        ))}
      </div>

      <p className="hint">
        ← → navigate · <kbd>T</kbd> timer · <kbd>P</kbd> print
      </p>

      <ControlBar
        index={index}
        go={go}
        remaining={remaining}
        running={running}
        toggleTimer={toggleTimer}
      />
    </>
  );
}
