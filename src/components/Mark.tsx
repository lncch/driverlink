/** The HireWheel mark. The ring takes its colour from CSS so print can darken it. */
export default function Mark({ size = 48 }: { size?: number }) {
  return (
    <svg className="mark" width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle
        cx="24"
        cy="24"
        r="19"
        stroke="var(--mark-ring)"
        strokeWidth="4"
        strokeDasharray="23.6 6.2"
        transform="rotate(-45 24 24)"
      />
      <circle cx="24" cy="24" r="6" fill="var(--mark-hub)" />
    </svg>
  );
}
