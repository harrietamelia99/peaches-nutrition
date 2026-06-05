import Image from "next/image";
import type { CSSProperties } from "react";
import { ScrollAnimator } from "@/components/scroll-animator";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const programmeOutcomes = [
  "Stop starting over",
  "Improve their relationship with food",
  "Build healthy habits that last",
  "Feel more confident in themselves",
  "Support sustainable fat loss without restriction",
  "Learn how to thrive in real life, not perfect life",
];

const painPoints = [
  "Feel stuck in an all-or-nothing cycle",
  "Know what they should be doing but struggle to stay consistent",
  "Constantly promise themselves they'll start again on Monday",
  "Struggle with emotional eating or food guilt",
  "Want sustainable fat loss without extremes",
  "Feel overwhelmed by conflicting nutrition advice",
  "Want to feel healthier, happier and more confident",
];

const pillars = [
  {
    emoji: "🍽️",
    title: "Nutrition",
    description:
      "Learn how to build balanced meals that support your goals without restriction.",
    items: [
      "Protein & fibre",
      "Gut health",
      "Hunger & fullness",
      "Food freedom",
      "Real-life nutrition",
      "Hormones & the female body",
    ],
  },
  {
    emoji: "🧠",
    title: "Mindset",
    description:
      "Transform the way you think about food, your body and yourself.",
    items: [
      "Emotional eating awareness",
      "Confidence",
      "Self-talk",
      "Limiting beliefs",
      "Self-compassion",
      "Breaking all-or-nothing thinking",
      "Rebuilding self trust",
      "Nutrition and gut health",
    ],
  },
  {
    emoji: "✨",
    title: "Habits",
    description: "Small daily actions that create long-term results.",
    items: [
      "Consistency over perfection",
      "Future self habits",
      "Planning and routines",
      "Sleep",
      "Movement",
      "Sustainable behaviour change",
    ],
  },
  {
    emoji: "🤍",
    title: "Support",
    description:
      "A safe space where women can learn, grow and be supported.",
    taglines: [
      "No judgement.",
      "No comparison.",
      "No perfection.",
      "Just support.",
    ],
  },
];

const weeks = [
  {
    number: 1,
    title: "The Reset Era",
    description:
      "Awareness before change. Balanced meals, protein, fibre, gut health, hunger & fullness and breaking the binge-restrict cycle.",
  },
  {
    number: 2,
    title: "Food, Feelings & Self Trust",
    description:
      "Emotional eating, food guilt, mindfulness and rebuilding trust around food.",
  },
  {
    number: 3,
    title: "The Female Body",
    description:
      "Hormones, periods, perimenopause, stress, energy and understanding your body better.",
  },
  {
    number: 4,
    title: "Becoming Her",
    description:
      "Identity change, habits, confidence and becoming the woman you keep saying you want to be.",
  },
  {
    number: 5,
    title: "Main Character Energy",
    description:
      "Self-worth, confidence, boundaries, movement and showing up for yourself.",
  },
  {
    number: 6,
    title: "Peach State of Mind",
    description:
      "Maintenance mindset, weekends, holidays and making this your new normal.",
  },
];

const includedItems = [
  "6 weeks of nutrition & mindset coaching",
  "Private WhatsApp community",
  "Daily accountability and Peach Checks",
  "Weekly coaching themes",
  "Educational resources",
  "Recipe Vault",
  "Coach Peach Pep Talks",
  "Nutrition, mindset and habit-building tools",
  "Community support from like-minded women",
  "Direct support from me",
];

const testimonials = [
  {
    name: "Sara",
    quote:
      "More than a coach, Jem has become a friend for life. If you're stuck in extremes, convinced nothing will work for you, or afraid to be honest about your relationship with food, I couldn't recommend her more.",
    decor: "strawberry" as const,
  },
  {
    name: "Lianne",
    quote:
      "Instead of just giving me another plan, Jem helped me understand what was actually driving my behaviours. We went to the root cause of my triggers in a way I'd never experienced before.",
  },
  {
    name: "Emma",
    quote:
      "I never once felt judged. I could be fully myself and completely honest with her, there was never a moment where I felt like I had to hold something back.",
    decor: "gold-heart" as const,
  },
  {
    name: "Jade",
    quote:
      "I was honestly so skeptical going into this. I thought a lot of this stuff was bullsh*t. But Jem completely changed my perspective. She's warm, kind, and feels like sunshine in a cup.",
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
            <DecorEmoji emoji="🍑" size="sm" tilt="slight-right" />
          </p>
          <h1
            className="hero-headline hero-reveal text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1]"
            style={{ "--hero-delay": "180ms" } as CSSProperties}
          >
            A women&apos;s nutrition &amp; mindset community.
          </h1>
          <p
            className="hero-body hero-reveal max-w-md"
            style={{ "--hero-delay": "280ms" } as CSSProperties}
          >
            Helping women stop starting over with food, rebuild self trust and
            create healthy habits that actually last.
          </p>
          <p
            className="hero-body hero-reveal font-serif text-[17px] font-medium"
            style={{ "--hero-delay": "360ms" } as CSSProperties}
          >
            Nutrition meets mindset.
          </p>
          <p
            className="hero-body hero-reveal"
            style={{ "--hero-delay": "420ms" } as CSSProperties}
          >
            No extremes.
            <br />
            No perfection.
            <br />
            No starting again every Monday.
          </p>
          <p
            className="hero-body hero-reveal max-w-md"
            style={{ "--hero-delay": "480ms" } as CSSProperties}
          >
            Just sustainable change, real-life support and a community of women
            who get it.
          </p>
          <div
            className="hero-reveal pt-1"
            style={{ "--hero-delay": "560ms" } as CSSProperties}
          >
            <a href="#payment" className="btn-brand-white-lg">
              <span className="btn-dot" aria-hidden="true" />
              join rewrite your story
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
            <p className="section-label mb-4">
              Introducing Rewrite Your Story{" "}
              <DecorEmoji emoji="✨" size="sm" tilt="right" className="emoji-inline" />
            </p>
            <p className="programme-body mb-5">
              The signature 6-week experience inside Peach Club Collective.
            </p>
            <p className="programme-body mb-5">
              Rewrite Your Story is a guided nutrition and mindset journey for
              women who are ready to:
            </p>
            <ul className="mb-8 flex flex-col gap-3">
              {programmeOutcomes.map((item) => (
                <BulletItem key={item}>{item}</BulletItem>
              ))}
            </ul>
            <p className="programme-accent mb-3">
              This isn&apos;t another diet.
            </p>
            <p className="programme-body mb-3">
              It&apos;s a completely different approach.
            </p>
            <p className="programme-body mb-3">
              Because lasting transformation isn&apos;t just about what you eat.
            </p>
            <p className="programme-body">
              It&apos;s about how you think, what you believe about yourself
              and the habits you practise every day.
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
            <p className="section-label mb-4">Who It&apos;s For</p>
            <h2 className="heading-display mx-auto max-w-2xl text-center text-[clamp(1.75rem,3.5vw,2.5rem)]">
              Rewrite Your Story is designed for women who:
            </h2>
          </div>
          <div
            className="reveal mx-auto grid max-w-3xl gap-8 sm:grid-cols-2 sm:gap-x-14"
            data-reveal
            data-reveal-delay="120"
          >
            <ul className="flex flex-col gap-2">
              {painPoints.slice(0, 4).map((point) => (
                <BulletItem key={point}>{point}</BulletItem>
              ))}
            </ul>
            <ul className="flex flex-col gap-2">
              {painPoints.slice(4).map((point) => (
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
            <p className="section-label mb-4">The Peach Club Collective Method</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="card-hover card-white hover-lift reveal flex flex-col"
                data-reveal
                data-reveal-delay={String(i * 100)}
              >
                <div className="mb-4 flex justify-center">
                  <DecorEmoji
                    emoji={pillar.emoji}
                    size="lg"
                    tilt={i % 2 === 0 ? "left" : "right"}
                  />
                </div>
                <h3 className="mb-3 text-center font-serif text-[1.25rem] font-medium text-peach-charcoal">
                  {pillar.title}
                </h3>
                <p className="mb-4 text-center text-[13px] leading-relaxed text-peach-text">
                  {pillar.description}
                </p>
                {"items" in pillar && pillar.items ? (
                  <>
                    <p className="mb-2 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-peach-text/60">
                      Topics include:
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {pillar.items.map((item) => (
                        <PillarBullet key={item}>{item}</PillarBullet>
                      ))}
                    </ul>
                  </>
                ) : (
                  <ul className="mt-auto flex flex-col gap-1.5 text-center">
                    {pillar.taglines?.map((line) => (
                      <li
                        key={line}
                        className="font-serif text-[14px] font-medium leading-snug text-peach-charcoal"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. The 6-Week Journey ───────────────────────────────────── */}
      <section className="section-band journey-section section-faded-grid">
        <div className="section-pad mx-auto grid max-w-page items-start gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,2.05fr)] md:gap-x-12 lg:gap-x-14">
          <div className="reveal flex flex-col gap-4 md:pt-1" data-reveal>
            <h2 className="heading-display text-[clamp(2rem,4vw,3.1rem)] leading-[1.12]">
              Your 6-Week Journey
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
          <div className="reveal mx-auto max-w-3xl" data-reveal>
            <p className="section-label mb-4 text-center md:text-left">
              What&apos;s Included?
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-10">
              {includedItems.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
            <div className="mt-10 flex flex-col items-center gap-3 text-center md:items-start md:text-left">
              <p className="font-serif text-[clamp(1.5rem,2.8vw,2.25rem)] font-medium leading-[1.15] text-peach-charcoal">
                you can sit with us
              </p>
              <div className="flex items-center gap-2">
                <DecorEmoji emoji="💖" size="sm" tilt="slight-left" />
                <DecorEmoji emoji="🍑" size="sm" tilt="right" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Testimonials ─────────────────────────────────────────── */}
      <section className="section-band bg-peach-3">
        <div className="section-pad mx-auto max-w-page">
          <div className="reveal section-head text-center" data-reveal>
            <p className="section-label mb-4">Client Testimonials</p>
            <h2 className="heading-display text-center text-[clamp(1.75rem,3.5vw,2.5rem)]">
              don&apos;t just take our word for it{" "}
              <DecorEmoji
                emoji="💬"
                size="sm"
                tilt="slight-right"
                className="emoji-inline"
              />
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="card-white hover-lift reveal relative flex flex-col"
                data-reveal
                data-reveal-delay={String(i * 120)}
              >
                <Stars />
                <p className="mb-3 font-serif text-[1.1rem] font-semibold text-peach-charcoal">
                  {t.name}
                </p>
                <p className="mb-5 flex-1 text-[14px] leading-[1.7] text-peach-text">
                  {t.quote}
                </p>
                <span className="btn-brand-berry-full mt-auto">read more</span>
                {t.decor === "strawberry" && (
                  <DecorEmoji
                    emoji="🍓"
                    size="sm"
                    tilt="right"
                    className="pointer-events-none absolute bottom-16 right-4"
                  />
                )}
                {t.decor === "gold-heart" && (
                  <GoldHeart
                    size={28}
                    tilt="right"
                    className="pointer-events-none absolute bottom-14 right-4"
                  />
                )}
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
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-10">
            <div className="reveal text-center" data-reveal>
              <p className="section-label-gold mb-3">Invest in You</p>
              <h2 className="berry-heading font-serif text-[clamp(1.4rem,2vw,1.85rem)] font-medium leading-[1.2]">
                a small investment for a lifetime of change.{" "}
                <DecorEmoji emoji="✨" size="sm" tilt="right" className="emoji-inline" />
              </h2>
            </div>

            <div className="grid w-full max-w-[32rem] shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="pricing-card reveal" data-reveal data-reveal-delay="100">
                <span className="save-badge">
                  Save
                  <br />
                  £20
                </span>
                <div className="pr-14">
                  <p className="mb-1 font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-peach-dot">
                    Early Bird
                  </p>
                  <p className="mb-4 text-[13px] text-peach-text/60">
                    Limited to first 5 spaces
                  </p>
                </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Final CTA ────────────────────────────────────────────── */}
      <section className="section-band bg-peach-1">
        <div className="section-pad mx-auto max-w-page">
          <div
            className="reveal mx-auto flex max-w-2xl flex-col items-center px-2 text-center"
            data-reveal
          >
            <h2 className="heading-display text-center text-[clamp(1.85rem,3.8vw,2.85rem)] leading-[1.12]">
              Ready to Rewrite Your Story?
            </h2>
            <p className="mt-5 max-w-lg font-serif text-[clamp(1.1rem,2vw,1.35rem)] font-medium leading-[1.5] text-peach-text">
              Stop starting over.
            </p>
            <p className="mt-3 max-w-lg text-[15px] leading-[1.75] text-peach-text">
              Start building a healthier, happier and more confident version of
              yourself.
            </p>
            <p className="mt-3 max-w-lg text-[15px] leading-[1.75] text-peach-text">
              Join Rewrite Your Story inside Peach Club Collective today.
            </p>
            <div className="mt-8 flex w-full flex-col items-center gap-4">
              <a href="#payment" className="btn-brand-white-lg">
                <span className="btn-dot" aria-hidden="true" />
                join now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
