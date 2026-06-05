import Image from "next/image";
import type { CSSProperties } from "react";
import { ScrollAnimator } from "@/components/scroll-animator";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const programmeOutcomes = [
  "Build a healthier relationship with food — without restriction or guilt",
  "Understand your body, hormones, and what it actually needs",
  "Develop mindset tools that last far beyond the 6 weeks",
  "Create sustainable habits that fit your real life",
  "Feel supported every step of the way by a like-minded community",
];

const painPoints = [
  "You've tried every diet under the sun and nothing sticks",
  "You feel guilty after eating and constantly battle food noise",
  "You know what to do but can't seem to make it happen",
  "You're exhausted from starting again every Monday",
  "You feel disconnected from your body and its signals",
  "You crave community and accountability but don't know where to find it",
];

const pillars = [
  {
    emoji: "🍓",
    title: "Nutrition",
    items: [
      "Whole-food foundations",
      "No restriction or calorie counting",
      "Easy, realistic meal ideas",
      "Understanding what your body needs",
    ],
  },
  {
    emoji: "🧁",
    title: "Mindset",
    items: [
      "Food guilt & emotional eating",
      "Self-trust & body confidence",
      "Limiting belief work",
      "Inner critic awareness",
    ],
  },
  {
    emoji: "🍑",
    title: "Habits",
    items: [
      "Small, sustainable changes",
      "Habit stacking techniques",
      "Weekly accountability",
      "Progress over perfection",
    ],
  },
  {
    emoji: "💬",
    title: "Support",
    items: [
      "Private community access",
      "Weekly group coaching",
      "Live Q&A sessions",
      "Lifetime programme access",
    ],
  },
];

const weeks = [
  {
    number: 1,
    title: "The Reset Era",
    description:
      "Reset your relationship with food & self. Set your intentions & foundations.",
  },
  {
    number: 2,
    title: "Food Feelings & Self Trust",
    description:
      "Understand your triggers. Build self-awareness around food & emotions.",
  },
  {
    number: 3,
    title: "The Female Body",
    description:
      "Work with your body, not against it. Hormones, cycles & nourishment.",
  },
  {
    number: 4,
    title: "Becoming Her",
    description:
      "Identity shifts, Confidence, self-worth & becoming your future self.",
  },
  {
    number: 5,
    title: "Main Character Energy",
    description:
      "Step into your power. Boundaries, energy & aligned choices.",
  },
  {
    number: 6,
    title: "Peach State of Mind",
    description:
      "Celebrate your growth & create a plan to keep the momentum.",
  },
];

const includedColumnOne = [
  "6-week structured programme",
  "Weekly coaching videos & lessons",
  "Easy meal ideas & guides",
  "Mindset tools & worksheets",
  "Private community access",
];

const includedColumnTwo = [
  "Weekly group coaching calls",
  "Accountability & support",
  "Habit trackers & resources",
  "Bonus content & live Q&A",
  "Lifetime access",
];

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
  },
];

const pricingFeatures = [
  "Full 6-week programme access",
  "Weekly coaching & community",
  "Lifetime access to all materials",
];

/* ─── Helpers ──────────────────────────────────────────────────────────── */

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

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="check-icon" aria-hidden="true">
        ✓
      </span>
      <span className="text-[15px] leading-relaxed text-peach-text">
        {children}
      </span>
    </li>
  );
}

function BulletItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3.5">
      <span className="bullet-dot" aria-hidden="true" />
      <span className="text-[15px] leading-[1.6] text-peach-text">
        {children}
      </span>
    </li>
  );
}

function PillarBullet({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="bullet-dot" aria-hidden="true" />
      <span className="text-[13px] leading-relaxed text-peach-text">
        {children}
      </span>
    </li>
  );
}

type EmojiTilt = "left" | "right" | "slight-left" | "slight-right" | "none";

const emojiTiltClass: Record<EmojiTilt, string> = {
  left: "-rotate-[14deg]",
  right: "rotate-[12deg]",
  "slight-left": "-rotate-[8deg]",
  "slight-right": "rotate-[10deg]",
  none: "",
};

function DecorEmoji({
  emoji,
  size = "md",
  tilt = "none",
  className = "",
}: {
  emoji: string;
  size?: "sm" | "md" | "lg";
  tilt?: EmojiTilt;
  className?: string;
}) {
  const sizeClass = {
    sm: "text-xl",
    md: "text-[2rem]",
    lg: "text-[2.5rem]",
  }[size];

  return (
    <span
      className={`emoji-decor inline-block select-none leading-none ${sizeClass} ${emojiTiltClass[tilt]} ${className}`}
      aria-hidden="true"
    >
      {emoji}
    </span>
  );
}

function GoldHeart({
  size = 32,
  className = "",
  tilt = "none",
}: {
  size?: number;
  className?: string;
  tilt?: EmojiTilt;
}) {
  return (
    <Image
      src="/images/gold-heart.png"
      alt=""
      width={size}
      height={size}
      className={`gold-heart-decor inline-block shrink-0 object-contain ${emojiTiltClass[tilt]} ${className}`}
      aria-hidden
    />
  );
}

/** Visible placeholder — swap for Next/Image + .jpg when photoshoot images are ready */
function PlaceholderImage({
  fileName,
  sectionLabel,
  className = "",
  aspectClass = "aspect-[4/5]",
  heroDelay,
  scrollReveal,
}: {
  fileName: string;
  sectionLabel: string;
  className?: string;
  aspectClass?: string;
  heroDelay?: string;
  scrollReveal?: "up" | "left" | "right";
}) {
  const style = heroDelay
    ? ({ "--hero-delay": heroDelay } as CSSProperties)
    : undefined;

  const revealClass =
    scrollReveal === "left"
      ? "reveal reveal-left"
      : scrollReveal === "right"
        ? "reveal reveal-right"
        : scrollReveal === "up"
          ? "reveal"
          : "";

  return (
    <div
      className={`image-placeholder relative flex w-full items-center justify-center ${aspectClass} ${revealClass} ${className}`}
      style={style}
      {...(scrollReveal ? { "data-reveal": true } : {})}
      role="img"
      aria-label={`Placeholder for ${fileName}`}
    >
      <div className="image-placeholder-inner" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center gap-1.5 px-6 text-center">
        <p className="font-serif text-[clamp(1rem,2vw,1.5rem)] font-medium text-peach-dot">
          {fileName}
        </p>
        <p className="font-sans text-[15px] text-peach-charcoal">{sectionLabel}</p>
        <p className="font-sans text-[13px] text-peach-charcoal">
          Replace with photoshoot image
        </p>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function PeachClubPage() {
  return (
    <main className="overflow-x-hidden">
      <ScrollAnimator />
      {/* ── 1. Hero ───────────────────────────────────────────────────── */}
      <section className="section-band min-h-screen lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="hero-panel bg-peach-1 flex min-h-screen flex-col justify-center gap-5 px-6 py-10 sm:px-10 lg:min-h-0 lg:px-12 lg:py-12">
          <p
            className="hero-brand hero-reveal flex items-center gap-2"
            style={{ "--hero-delay": "80ms" } as CSSProperties}
          >
            Peach Club Collective
            <DecorEmoji emoji="🍓" size="sm" tilt="slight-right" />
          </p>
          <h1
            className="hero-headline hero-reveal"
            style={{ "--hero-delay": "180ms" } as CSSProperties}
          >
            Rewrite
            <br />
            Your Story
          </h1>
          <span
            className="hero-highlight hero-reveal"
            style={{ "--hero-delay": "300ms" } as CSSProperties}
          >
            A women&apos;s nutrition &amp; mindset community
          </span>
          <p
            className="hero-body hero-reveal"
            style={{ "--hero-delay": "420ms" } as CSSProperties}
          >
            Nutrition meets mindset.
            <br />
            No extremes. No starting again on Monday.
          </p>
          <div
            className="hero-reveal pt-1"
            style={{ "--hero-delay": "540ms" } as CSSProperties}
          >
            <a href="#payment" className="btn-brand-berry-hero btn-with-heart gap-3">
              Join rewrite your story
              <GoldHeart size={32} tilt="right" />
            </a>
          </div>
        </div>
        <PlaceholderImage
          fileName="hero-photo.jpg"
          sectionLabel="Section 1 — Hero image"
          aspectClass="hero-reveal-right aspect-[4/5] w-full min-h-[50vh] lg:aspect-auto lg:h-full lg:min-h-0"
          className="lg:rounded-none lg:border-l lg:border-t-0 lg:border-r-0 lg:border-b-0"
          heroDelay="260ms"
        />
      </section>

      {/* ── 2. Introducing the Programme ────────────────────────────── */}
      <section className="section-band programme-section section-faded-grid">
        <div className="section-pad mx-auto grid max-w-page items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="reveal max-w-xl" data-reveal>
            <p className="section-label mb-4">Introducing the Programme</p>
            <div className="mb-7">
              <h2 className="programme-headline">
                Rewrite Your Story
              </h2>
              <p className="programme-subhead">
                A 6-Week Nutrition &amp; Mindset Experience
              </p>
            </div>
            <p className="programme-body mb-5">
              This is your invitation to finally break free from the diet cycle
              and build a relationship with food, your body, and yourself that
              actually feels good.
            </p>
            <p className="programme-body mb-8">
              Over 6 weeks, you&apos;ll be guided through a structured programme
              that blends evidence-based nutrition with powerful mindset work —
              all within a warm, supportive community of women who get it.
            </p>
            <ul className="mb-8 flex flex-col gap-3">
              {programmeOutcomes.map((item) => (
                <BulletItem key={item}>{item}</BulletItem>
              ))}
            </ul>
            <p className="programme-accent">
              This isn&apos;t another diet.
            </p>
          </div>
          <PlaceholderImage
            fileName="programme-photo.jpg"
            sectionLabel="Section 2 — Programme image"
            scrollReveal="right"
          />
        </div>
      </section>

      {/* ── 3. Is This You? ─────────────────────────────────────────── */}
      <section className="section-band bg-peach-3">
        <div className="section-pad mx-auto max-w-page">
          <div className="reveal section-head text-center" data-reveal>
            <p className="section-label mb-4">Is This You?</p>
            <h2 className="heading-display flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[clamp(1.75rem,3.5vw,2.5rem)]">
              <span>you&apos;re not alone. we see you.</span>
              <DecorEmoji emoji="💬" size="md" tilt="slight-right" />
            </h2>
          </div>
          <div
            className="reveal mx-auto grid max-w-3xl gap-8 sm:grid-cols-2 sm:gap-x-14"
            data-reveal
            data-reveal-delay="120"
          >
            <ul className="flex flex-col gap-2">
              {painPoints.slice(0, 3).map((point) => (
                <BulletItem key={point}>{point}</BulletItem>
              ))}
            </ul>
            <ul className="flex flex-col gap-2">
              {painPoints.slice(3).map((point) => (
                <BulletItem key={point}>{point}</BulletItem>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 4. The Method ───────────────────────────────────────────── */}
      <section className="section-band section-berry-band">
        <div className="section-pad mx-auto max-w-page">
          <div className="reveal section-head text-center" data-reveal>
            <p className="section-label mb-4">The Method</p>
            <h2 className="heading-display flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[clamp(1.75rem,3.5vw,2.5rem)] text-white">
              <span>four pillars. one you.</span>
              <DecorEmoji emoji="✨" size="md" tilt="right" />
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="card-hover card-white hover-lift reveal"
                data-reveal
                data-reveal-delay={String(i * 100)}
              >
                <div className="mb-5 flex justify-center">
                  <DecorEmoji
                    emoji={pillar.emoji}
                    size="lg"
                    tilt={i % 2 === 0 ? "left" : "right"}
                  />
                </div>
                <h3 className="mb-5 text-center font-serif text-[1.25rem] font-medium text-peach-charcoal">
                  {pillar.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {pillar.items.map((item) => (
                    <PillarBullet key={item}>{item}</PillarBullet>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. The 6-Week Journey ───────────────────────────────────── */}
      <section className="section-band journey-section section-faded-grid">
        <div className="section-pad mx-auto grid max-w-page items-start gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,2.05fr)] md:gap-x-12 lg:gap-x-14">
          <div className="reveal flex flex-col gap-4 md:pt-1" data-reveal>
            <p className="section-label">The 6-Week Journey</p>
            <h2 className="heading-display text-[clamp(2rem,4vw,3.1rem)] leading-[1.12]">
              <span className="block">Your story</span>
              <span className="mt-0.5 flex flex-wrap items-center gap-x-2">
                <span>starts here.</span>
                <DecorEmoji emoji="💬" size="md" tilt="slight-right" />
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {weeks.map((week, i) => (
              <div
                key={week.number}
                className="week-row reveal"
                data-reveal
                data-reveal-delay={String(i * 80)}
              >
                <span className="week-badge">Week {week.number}</span>
                <div className="min-w-0">
                  <p className="font-serif text-[1.1rem] font-semibold leading-tight text-peach-charcoal md:text-[1.15rem]">
                    {week.title}
                  </p>
                  <p className="mt-1 font-sans text-[14px] font-normal leading-relaxed text-peach-text">
                    {week.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. What's Included ──────────────────────────────────────── */}
      <section className="section-band relative bg-peach-2">
        <GoldHeart
          size={64}
          tilt="right"
          className="pointer-events-none absolute bottom-8 right-8 hidden md:block"
        />
        <div className="section-pad mx-auto max-w-page">
          <div
            className="reveal grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-[1.15fr_1fr_1fr] md:gap-x-10 md:gap-y-4 lg:gap-x-14"
            data-reveal
          >
            <p className="section-label sm:col-span-2 md:col-span-1 md:col-start-1 md:row-start-1">
              What&apos;s Included
            </p>

            <div className="flex flex-col gap-3 sm:col-span-2 md:col-span-1 md:col-start-1 md:row-start-2">
              <h2 className="heading-display text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15]">
                <span className="block">Everything you</span>
                <span className="mt-0.5 flex flex-wrap items-center gap-x-2">
                  <span>need to succeed.</span>
                  <span className="inline-flex items-center gap-1">
                    <DecorEmoji emoji="✨" size="sm" tilt="right" />
                    <DecorEmoji emoji="✨" size="sm" tilt="slight-right" />
                  </span>
                </span>
              </h2>
              <DecorEmoji emoji="🍓" size="md" tilt="slight-left" />
            </div>

            <ul className="flex flex-col gap-3 md:col-start-2 md:row-start-2">
              {includedColumnOne.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>

            <ul className="flex flex-col gap-3 md:col-start-3 md:row-start-2">
              {includedColumnTwo.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 7. Testimonials ─────────────────────────────────────────── */}
      <section className="section-band relative bg-peach-3">
        <DecorEmoji
          emoji="🍓"
          size="md"
          tilt="left"
          className="pointer-events-none absolute bottom-6 left-8 hidden md:block"
        />
        <GoldHeart
          size={56}
          tilt="right"
          className="pointer-events-none absolute bottom-6 right-8 hidden md:block"
        />
        <div className="section-pad mx-auto max-w-page">
          <div className="reveal section-head text-center" data-reveal>
            <p className="section-label mb-4">Client Testimonials</p>
            <h2 className="heading-display flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[clamp(1.75rem,3.5vw,2.5rem)]">
              <span>don&apos;t just take our word for it</span>
              <DecorEmoji emoji="💬" size="md" tilt="slight-right" />
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={t.quote}
                className="card-white hover-lift reveal flex flex-col"
                data-reveal
                data-reveal-delay={String(i * 120)}
              >
                <Stars />
                <p className="mb-5 flex-1 text-[14px] leading-[1.7] text-peach-text">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-[13px] text-peach-text/60">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Pricing ──────────────────────────────────────────────── */}
      <section
        id="payment"
        className="section-band section-berry-band"
      >
        <div className="section-pad mx-auto max-w-page">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch lg:gap-x-10 xl:gap-x-12">
            <div
              className="reveal flex flex-col gap-4 sm:col-span-2 lg:col-span-1 lg:max-w-[17rem] lg:self-center"
              data-reveal
            >
              <p className="section-label-gold">Invest in You</p>
              <h2 className="berry-heading font-serif text-[clamp(1.5rem,2.4vw,2.15rem)] font-medium leading-[1.22]">
                a small investment for a lifetime of change.
              </h2>
              <div className="flex flex-col gap-2">
                <DecorEmoji emoji="✨" size="md" tilt="right" />
                <DecorEmoji emoji="🧁" size="md" tilt="left" />
              </div>
            </div>

            <div className="pricing-card reveal" data-reveal data-reveal-delay="100">
              <span className="gold-gradient absolute -right-2 -top-3 z-10 flex h-[5rem] w-[5rem] items-center justify-center rounded-full border border-peach-border text-center font-sans text-[14px] font-semibold uppercase leading-[1.1] tracking-wide text-peach-charcoal">
                Save
                <br />
                £20
              </span>
              <p className="mb-1 font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-peach-dot">
                Early Bird
              </p>
              <p className="mb-4 text-[13px] text-peach-text/60">
                Limited to first 5 spaces
              </p>
              <p className="price-display mb-5">£147</p>
              <ul className="mb-6 flex flex-col gap-2.5">
                {pricingFeatures.map((f) => (
                  <CheckItem key={`early-${f}`}>{f}</CheckItem>
                ))}
              </ul>
              <a href="#payment" className="btn-brand-berry-full mt-auto">
                join now
              </a>
            </div>

            <div className="pricing-card reveal" data-reveal data-reveal-delay="200">
              <p className="mb-1 font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-peach-dot">
                Standard
              </p>
              <p className="mb-4 text-[13px] text-peach-text/60">
                Regular Price
              </p>
              <p className="price-display mb-5">£167</p>
              <ul className="mb-6 flex flex-col gap-2.5">
                {pricingFeatures.map((f) => (
                  <CheckItem key={`std-${f}`}>{f}</CheckItem>
                ))}
              </ul>
              <a href="#payment" className="btn-brand-berry-full mt-auto">
                join now
              </a>
            </div>

            <div
              className="reveal flex flex-col gap-5 sm:col-span-2 lg:col-span-1 lg:max-w-[15rem] lg:self-center"
              data-reveal
              data-reveal-delay="300"
            >
              <p className="berry-body font-serif text-[clamp(1.85rem,3vw,2.85rem)] font-medium leading-[1.12]">
                you can sit with us
              </p>
              <div className="flex items-center gap-3">
                <DecorEmoji emoji="💖" size="md" tilt="slight-left" />
                <DecorEmoji emoji="🍑" size="md" tilt="right" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Final CTA ────────────────────────────────────────────── */}
      <section className="section-band relative bg-peach-1">
        <DecorEmoji
          emoji="🧁"
          size="sm"
          tilt="left"
          className="pointer-events-none absolute bottom-6 left-8 hidden md:block"
        />
        <DecorEmoji
          emoji="🍓"
          size="sm"
          tilt="right"
          className="pointer-events-none absolute bottom-6 right-8 hidden md:block"
        />
        <div className="section-pad mx-auto grid max-w-page items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="reveal flex flex-col gap-4" data-reveal>
            <h2 className="heading-display flex flex-wrap items-center gap-x-2 gap-y-1 text-[clamp(1.75rem,3.5vw,2.5rem)]">
              <span>ready to rewrite your story?</span>
              <DecorEmoji emoji="✨" size="md" tilt="right" />
            </h2>
            <p className="max-w-md text-[15px] leading-[1.7]">
              You deserve to feel good in your body, your mind, and your life.
              Let&apos;s do this together.
            </p>
          </div>
          <div
            className="reveal flex flex-col items-center gap-4 md:items-end"
            data-reveal
            data-reveal-delay="150"
          >
            <a
              href="#payment"
              className="btn-brand-berry-lg btn-with-heart inline-flex w-full max-w-[320px] items-center justify-center gap-2 md:w-auto"
            >
              join now
              <GoldHeart size={40} tilt="right" />
            </a>
            <p className="flex items-center gap-2 font-serif text-[15px] text-peach-text/70">
              Your story is waiting.
              <DecorEmoji emoji="💬" size="sm" tilt="slight-right" />
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
