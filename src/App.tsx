import ControlBar from './components/ControlBar';
import HelpOverlay from './components/HelpOverlay';
import Slide from './components/Slide';
import { SLIDES } from './deck';
import { useDeck } from './useDeck';

export default function App() {
  const {
    index, go, step,
    blanked, unblank,
    helpOpen, toggleHelp,
    fullscreen, toggleFullscreen,
  } = useDeck();

  return (
    <>
      {/* Every slide stays mounted so Cmd-P prints the whole deck. */}
      <div className="deck">
        {SLIDES.map(({ Body, label }, n) => (
          <Slide key={label} active={n === index}>
            <Body />
          </Slide>
        ))}
      </div>

      {/* Click the edge of the screen to move, the way a remote's two buttons work. */}
      <button
        type="button"
        className="edge edge-prev"
        onClick={() => step(-1)}
        disabled={index === 0}
        aria-label="Previous slide"
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        type="button"
        className="edge edge-next"
        onClick={() => step(1)}
        disabled={index === SLIDES.length - 1}
        aria-label="Next slide"
      >
        <span aria-hidden="true">›</span>
      </button>

      <ControlBar
        index={index}
        go={go}
        step={step}
        fullscreen={fullscreen}
        toggleFullscreen={toggleFullscreen}
        toggleHelp={toggleHelp}
      />

      {helpOpen && <HelpOverlay onClose={toggleHelp} />}

      {blanked && (
        <button type="button" className="blank" onClick={unblank} aria-label="Screen blanked. Click to resume." />
      )}
    </>
  );
}
