interface Props {
  /** Slide number, shown the way a route number sits on a guide sign. */
  number: number;
  arabic: string;
  english: string;
}

/**
 * A green guide-sign panel: English leads, Arabic follows beneath it. Slides 2
 * to 8 each open with one, and the seven together spell out the question
 * sequence the presentation has to answer.
 */
export default function SignPanel({ number, arabic, english }: Props) {
  return (
    <div className="sign">
      <span className="sign-no" aria-hidden="true">{number}</span>
      <div className="sign-text">
        <span className="sign-en">{english}</span>
        <span className="sign-ar" lang="ar" dir="rtl">{arabic}</span>
      </div>
    </div>
  );
}
