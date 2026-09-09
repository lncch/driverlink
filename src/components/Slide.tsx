import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';

/** Below this, shrinking hurts more than scrolling would. */
const MIN_SCALE = 0.52;

interface Props {
  active: boolean;
  children: ReactNode;
}

/**
 * Scales a slide's content down until it fits the window, so nothing needs
 * scrolling during a talk. Transforms do not affect layout, so scrollHeight
 * still reports the natural, unscaled size while a scale is applied.
 */
export default function Slide({ active, children }: Props) {
  const frame = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const f = frame.current;
    const b = body.current;
    if (!f || !b) return;

    const fit = () => {
      const h = b.scrollHeight;
      const w = b.scrollWidth;
      const availH = f.clientHeight;
      const availW = f.clientWidth;
      if (!h || !w || !availH) return;
      // A hair under the exact ratio, so sub-pixel rounding cannot clip a last row.
      const next = Math.max(MIN_SCALE, Math.min(1, (availH / h) * 0.985, availW / w));
      setScale((prev) => (Math.abs(prev - next) < 0.003 ? prev : next));
    };

    fit();
    // Layout settles over a frame or two; measure again once it has.
    const raf = requestAnimationFrame(() => requestAnimationFrame(fit));
    const ro = new ResizeObserver(fit);
    ro.observe(f);
    ro.observe(b);
    // Web fonts change the measurement, so re-fit once they have loaded.
    document.fonts?.ready.then(fit).catch(() => undefined);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [active]);

  return (
    <section className={active ? 'slide on' : 'slide'} aria-hidden={!active}>
      <div className="frame" ref={frame}>
        <div className="body" ref={body} style={{ transform: `scale(${scale})` }}>
          {children}
        </div>
      </div>
    </section>
  );
}
