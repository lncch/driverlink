import { useLayoutEffect, useRef, type ReactNode } from 'react';
import SignPanel from './SignPanel';

/** Below this, shrinking hurts more than scrolling would. */
const MIN_SCALE = 0.52;
/** Above this, a sparse slide starts to look like a poster. */
const MAX_SCALE = 1.34;

interface Props {
  active: boolean;
  /** 1-based slide number, shown on the sign. */
  number: number;
  sign?: { arabic: string; english: string };
  children: ReactNode;
}

/**
 * Sizes a slide's content to the window: dense slides shrink so nothing needs
 * scrolling, sparse ones grow so the frame is not half empty.
 *
 * The body is laid out at `100 / scale` percent width and then scaled, so it
 * still spans the frame exactly afterwards. Text therefore re-wraps at the
 * scaled measure rather than being stretched, which is why the height is
 * measured a second time once the width has changed.
 */
export default function Slide({ active, number, sign, children }: Props) {
  const frame = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const f = frame.current;
    const b = body.current;
    if (!f || !b) return;

    const clamp = (s: number) => Math.max(MIN_SCALE, Math.min(MAX_SCALE, s));

    const fit = () => {
      const availH = f.clientHeight;
      if (!availH) return;

      b.style.transform = 'none';

      // Changing the width re-wraps text and re-proportions the fishbone, which
      // changes the height, which changes the scale. Iterate to the fixed point.
      let s = 1;
      for (let pass = 0; pass < 5; pass += 1) {
        b.style.width = `${100 / s}%`;
        const h = b.scrollHeight;
        if (!h) return;
        const next = clamp((availH / h) * 0.985);
        if (Math.abs(next - s) < 0.004) {
          s = next;
          break;
        }
        s = next;
      }

      b.style.width = `${100 / s}%`;
      b.style.transform = `scale(${s})`;
    };

    fit();
    const raf = requestAnimationFrame(fit);
    // Only the frame is observed: the body's size is what this effect changes,
    // so watching it would loop.
    const ro = new ResizeObserver(fit);
    ro.observe(f);
    document.fonts?.ready.then(fit).catch(() => undefined);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [active]);

  return (
    <section className={active ? 'slide on' : 'slide'} aria-hidden={!active}>
      <div className="frame">
        {/* Outside the fit box, so the sign is the same size on every slide. */}
        {sign && <SignPanel number={number} arabic={sign.arabic} english={sign.english} />}
        <div className="fitbox" ref={frame}>
          <div className="body" ref={body}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
