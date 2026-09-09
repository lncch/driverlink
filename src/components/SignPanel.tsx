interface Props {
  /** Slide number, shown the way a route number sits on a guide sign. */
  number: number;
  arabic: string;
  english: string;
}

/**
 * Saudi guide signs carry Arabic above English on a green panel. Each slide
 * opens with one, and the eight together spell out the question sequence the
 * presentation has to answer.
 */
export default function SignPanel({ number, arabic, english }: Props) {
  return (
    <div className="sign">
      <span className="sign-no" aria-hidden="true">{number}</span>
      <div className="sign-text">
        <span className="sign-ar" lang="ar" dir="rtl">{arabic}</span>
        <span className="sign-en">{english}</span>
      </div>
    </div>
  );
}
