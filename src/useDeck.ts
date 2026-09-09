import { useCallback, useEffect, useState } from 'react';
import { SLIDES } from './deck';

/** Slide navigation, driven by the keyboard and the dot controls. */
export function useDeck() {
  const [index, setIndex] = useState(0);

  const go = useCallback((n: number) => {
    setIndex(Math.max(0, Math.min(SLIDES.length - 1, n)));
    window.scrollTo(0, 0);
  }, []);

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
        case 'p':
        case 'P':
          window.print();
          break;
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  return { index, go };
}
