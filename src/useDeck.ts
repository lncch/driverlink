import { useCallback, useEffect, useRef, useState } from 'react';
import { SLIDES } from './deck';

/** Reads the slide index out of the URL hash, e.g. #4 for the fourth slide. */
function slideFromHash(): number {
  const n = Number.parseInt(window.location.hash.slice(1), 10);
  return Number.isFinite(n) ? Math.min(SLIDES.length, Math.max(1, n)) - 1 : 0;
}

/** Horizontal travel, in pixels, that counts as a swipe rather than a tap. */
const SWIPE_THRESHOLD = 55;

export function useDeck() {
  const [index, setIndex] = useState(slideFromHash);
  const [blanked, setBlanked] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const go = useCallback((n: number) => {
    setIndex(Math.max(0, Math.min(SLIDES.length - 1, n)));
    window.scrollTo(0, 0);
  }, []);

  const step = useCallback((delta: number) => {
    setIndex((i) => Math.max(0, Math.min(SLIDES.length - 1, i + delta)));
    window.scrollTo(0, 0);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void document.documentElement.requestFullscreen().catch(() => undefined);
  }, []);

  /* Keep the hash in step so a reload, or a shared link, lands on this slide. */
  useEffect(() => {
    const want = `#${index + 1}`;
    if (window.location.hash !== want) {
      window.history.replaceState(null, '', want);
    }
  }, [index]);

  useEffect(() => {
    const onHash = () => setIndex(slideFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  /* Stop the screen dimming mid-presentation. Unsupported browsers just skip it. */
  useEffect(() => {
    let lock: WakeLockSentinel | null = null;
    const acquire = async () => {
      try {
        lock = await navigator.wakeLock?.request('screen');
      } catch {
        /* denied or unsupported; nothing to do */
      }
    };
    void acquire();
    const onVisible = () => {
      if (document.visibilityState === 'visible') void acquire();
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      document.removeEventListener('visibilitychange', onVisible);
      void lock?.release();
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          step(1);
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          step(-1);
          break;
        case 'Home':
          go(0);
          break;
        case 'End':
          go(SLIDES.length - 1);
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        case 'b':
        case 'B':
          setBlanked((v) => !v);
          break;
        case '?':
          setHelpOpen((v) => !v);
          break;
        case 'Escape':
          setBlanked(false);
          setHelpOpen(false);
          break;
        case 'p':
        case 'P':
          window.print();
          break;
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, step, toggleFullscreen]);

  /* Swipe, for presenting from a phone or tablet. */
  const touchStart = useRef<number | null>(null);
  useEffect(() => {
    const onStart = (e: TouchEvent) => {
      touchStart.current = e.changedTouches[0]?.clientX ?? null;
    };
    const onEnd = (e: TouchEvent) => {
      const from = touchStart.current;
      const to = e.changedTouches[0]?.clientX;
      touchStart.current = null;
      if (from === null || to === undefined) return;
      const travel = to - from;
      if (Math.abs(travel) < SWIPE_THRESHOLD) return;
      step(travel < 0 ? 1 : -1);
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
    };
  }, [step]);

  return {
    index,
    go,
    step,
    blanked,
    unblank: () => setBlanked(false),
    helpOpen,
    toggleHelp: () => setHelpOpen((v) => !v),
    fullscreen,
    toggleFullscreen,
  };
}
