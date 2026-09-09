import ControlBar from './components/ControlBar';
import { SLIDES } from './deck';
import { useDeck } from './useDeck';

export default function App() {
  const { index, go } = useDeck();

  return (
    <>
      {/* Every slide stays mounted so Cmd-P prints the whole deck. */}
      <div className="deck">
        {SLIDES.map(({ Body, label }, n) => (
          <section
            key={label}
            className={n === index ? 'slide on' : 'slide'}
            aria-hidden={n !== index}
          >
            <Body />
          </section>
        ))}
      </div>

      <p className="hint">← → to move · P to print</p>

      <ControlBar index={index} go={go} />
    </>
  );
}
