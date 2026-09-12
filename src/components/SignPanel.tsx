interface Props {
  /** Slide number, shown the way a route number sits on a guide sign. */
  number: number;
  english: string;
}

/**
 * A green guide-sign panel. Slides 2 to 8 each open with one, and the seven
 * together spell out the question sequence the presentation has to answer.
 */
export default function SignPanel({ number, english }: Props) {
  return (
    <div className="sign">
      <span className="sign-no" aria-hidden="true">{number}</span>
      <span className="sign-en">{english}</span>
    </div>
  );
}
