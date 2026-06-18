"use client";

import { useState } from "react";

const PREVIEW_CHARS = 120;

function Stars() {
  return (
    <div className="mb-5 flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-base text-peach-pink">
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialCard({
  quote,
  revealDelay,
}: {
  quote: string;
  revealDelay: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = quote.length > PREVIEW_CHARS;

  return (
    <div
      className="card-white hover-lift reveal flex flex-col"
      data-reveal
      data-reveal-delay={String(revealDelay)}
    >
      <Stars />
      <p
        className={`mb-5 flex-1 text-[14px] leading-[1.7] text-peach-text ${
          isLong && !expanded ? "line-clamp-4" : ""
        }`}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mb-5 text-[13px] text-peach-text/60">— current client</p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          className="btn-brand-berry-full mt-auto"
          aria-expanded={expanded}
        >
          {expanded ? "read less" : "read more"}
        </button>
      )}
    </div>
  );
}
