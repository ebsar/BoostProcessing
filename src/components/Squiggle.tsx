const Squiggle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 12" fill="none" className={className} aria-hidden="true">
    <path
      d="M2 8c8-9 16 6 24-1s16 7 24 0 16-7 24 0 16 7 24-1"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default Squiggle;
