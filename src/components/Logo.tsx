/**
 * Tunica Group logo lockup: a diamond monogram (echoing the Phoenix Tower
 * mark) enclosing a serif "T", beside the wordmark. The mark's "T" uses
 * currentColor so it adapts to dark/light placements; the diamond is gold.
 */
export default function Logo({
  markOnly = false,
  className = "",
}: {
  markOnly?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 44 44"
        className="h-8 w-8 shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M22 3 L41 22 L22 41 L3 22 Z"
          stroke="#A9824E"
          strokeWidth="1.5"
        />
        <path
          d="M22 9 L35 22 L22 35 L9 22 Z"
          stroke="#A9824E"
          strokeWidth="0.75"
          opacity="0.5"
        />
        {/* Serif T */}
        <path
          d="M15 17.5 h14 v2.6 h-5.6 v9.4 h-2.8 v-9.4 H15 Z"
          fill="currentColor"
        />
      </svg>
      {!markOnly && (
        <span className="font-serif text-xl tracking-tightish">
          Tunica<span className="text-gold"> Group</span>
        </span>
      )}
    </span>
  );
}
