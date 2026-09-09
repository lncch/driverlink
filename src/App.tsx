import ControlBar from './components/ControlBar';
import HelpOverlay from './components/HelpOverlay';
import { SLIDES } from './deck';
import { useDeck } from './useDeck';

export default function App() {
  const { index, go, blanked, unblank, helpOpen, toggleHelp, fullscreen, toggleFullscreen } = useDeck();

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

      <ControlBar
        index={index}
        go={go}
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
