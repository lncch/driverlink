import { useEffect, useState, type ReactNode } from 'react';

interface Props {
  /** Named in the expand control and read out to screen readers. */
  label: string;
  children: ReactNode;
}

/**
 * Shows a diagram or table inline, and again full-screen on click. The deck's
 * key handler checks `body[data-overlay]` so the arrow keys move within the
 * expanded view's page rather than changing slide underneath it.
 */
export default function Expandable({ label, children }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.dataset.overlay = 'expanded';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      delete document.body.dataset.overlay;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <div className="expandable">
        {children}
        <button type="button" className="expand" onClick={() => setOpen(true)}>
          Expand {label}
        </button>
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
