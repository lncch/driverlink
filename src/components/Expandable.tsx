import { useEffect, useState, type KeyboardEvent, type ReactNode } from 'react';

interface Props {
  /** Announced to screen readers and used as the dialog's name. */
  label: string;
  children: ReactNode;
}

/**
 * Shows a diagram or table inline, and again full screen when the box is
 * clicked anywhere. A button element cannot wrap a table, so this is the
 * role/tabIndex pattern instead.
 *
 * The deck's key handler checks `body[data-overlay]`, so the arrow keys do not
 * change slide behind an open view.
 */
export default function Expandable({ label, children }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.dataset.overlay = 'expanded';
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      delete document.body.dataset.overlay;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    // Space also advances the deck, so keep it from reaching the window handler.
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  }

  return (
    <>
      <div
        className="expandable"
        role="button"
        tabIndex={0}
        aria-label={`Expand ${label}`}
        onClick={() => setOpen(true)}
        onKeyDown={onKeyDown}
      >
        {children}
        <span className="hint-expand" aria-hidden="true">Click to expand</span>
      </div>

      {open && (
        <div className="scrim expanded" onClick={() => setOpen(false)} role="presentation">
          <div className="expanded-inner" role="dialog" aria-label={label} onClick={(e) => e.stopPropagation()}>
            {children}
            <button type="button" className="btn close" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
