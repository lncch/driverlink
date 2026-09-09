interface Props {
  step: string;
  rubric: string;
  arabic: string;
}

/** Slide header: section marker, the rubric row it answers, and the Arabic prompt. */
export default function Eyebrow({ step, rubric, arabic }: Props) {
  return (
    <div className="eyebrow">
      <span className="step">{step}</span>
      <span className="rubric">{rubric}</span>
      <span className="ar" lang="ar">{arabic}</span>
    </div>
  );
}
