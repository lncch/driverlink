import { useCallback, useEffect, useRef, useState } from 'react';
import { SLIDES, TOTAL_SECONDS } from './deck';

/** Slide navigation plus the presentation countdown, driven by the keyboard. */
export function useDeck() {
  const [index, setIndex] = useState(0);
  const [remaining, setRemaining] = useState(TOTAL_SECONDS);
  const [running, setRunning] = useState(false);
  const timer = useRef<number | null>(null);

  const go = useCallback((n: number) => {
    setIndex(Math.max(0, Math.min(SLIDES.length - 1, n)));
    window.scrollTo(0, 0);
  }, []);

  const toggleTimer = useCallback(() => setRunning((r) => !r), []);

  useEffect(() => {
    if (!running) return;
    timer.current = window.setInterval(() => setRemaining((t) => t - 1), 1000);
    return () => {
      if (timer.current !== null) window.clearInterval(timer.current);
    };
  }, [running]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          setIndex((i) => Math.min(SLIDES.length - 1, i + 1));
          window.scrollTo(0, 0);
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          setIndex((i) => Math.max(0, i - 1));
          window.scrollTo(0, 0);
          break;
        case 'Home':
          go(0);
          break;
        case 'End':
          go(SLIDES.length - 1);
          break;
        case 't':
        case 'T':
          toggleTimer();
          break;
        case 'p':
        case 'P':
          window.print();
          break;
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, toggleTimer]);

  return { index, go, remaining, running, toggleTimer };
}
