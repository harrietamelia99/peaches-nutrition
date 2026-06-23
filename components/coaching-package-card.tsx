"use client";

import { useId, useState, type ReactNode } from "react";

type CoachingTier = {
  duration: string;
  price: string;
  subline?: string;
  href: string;
};

type CoachingPackageCardProps = {
  label: string;
  title: string;
  lead: string;
  body: string;
  included: string[];
  tiers: CoachingTier[];
  footnote: string;
  revealDelay?: number;
};

function AccordionRow({
  title,
  open,
  onToggle,
  children,
  panelId,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
  panelId: string;
}) {
  return (
    <div className="coaching-accordion-row">
      <button
        type="button"
        className="coaching-accordion-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="coaching-accordion-chevron" aria-hidden="true">
          {open ? "∧" : "∨"}
        </span>
        <span>{title}</span>
      </button>
      {open ? (
        <div id={panelId} className="coaching-accordion-panel">
          {children}
        </div>
      ) : null}
    </div>
  );
}

export function CoachingPackageCard({
  label,
  title,
  lead,
  body,
  included,
  tiers,
  footnote,
  revealDelay = 0,
}: CoachingPackageCardProps) {
  const baseId = useId();
  const [includedOpen, setIncludedOpen] = useState(false);
  const [investmentOpen, setInvestmentOpen] = useState(true);

  return (
    <article
      className="coaching-package-card reveal"
      data-reveal
      data-reveal-delay={String(revealDelay)}
    >
      <p className="coaching-package-label">{label}</p>
      <h3 className="coaching-package-title">{title}</h3>

      <p className="coaching-package-lead">{lead}</p>
      <p className="coaching-package-body">{body}</p>

      <AccordionRow
        title="what's included"
        open={includedOpen}
        onToggle={() => setIncludedOpen((value) => !value)}
        panelId={`${baseId}-included`}
      >
        <ul className="coaching-included-list">
          {included.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </AccordionRow>

      <AccordionRow
        title="the investment"
        open={investmentOpen}
        onToggle={() => setInvestmentOpen((value) => !value)}
        panelId={`${baseId}-investment`}
      >
        <div className="coaching-pricing-list">
          {tiers.map((tier) => (
            <div key={tier.duration} className="coaching-pricing-tier">
              <p className="coaching-pricing-line">
                <span className="coaching-pricing-duration">{tier.duration}</span>{" "}
                {tier.price}
              </p>
              {tier.subline ? (
                <p className="coaching-pricing-subline">({tier.subline})</p>
              ) : null}
              <a href={tier.href} className="btn-brand-gold coaching-tier-cta">
                get started
              </a>
            </div>
          ))}
        </div>
        <p className="coaching-pricing-footnote">{footnote}</p>
      </AccordionRow>
    </article>
  );
}
