import Image from "next/image";

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
    emoji: "🤍",
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
    description: "Lay the foundations and step into a fresh chapter.",
  },
  {
    number: 2,
    title: "Food Feelings & Self Trust",
    description: "Unpack your relationship with food and rebuild trust.",
  },
  {
    number: 3,
    title: "The Female Body",
    description: "Understand hormones, cycles, and what your body needs.",
  },
  {
    number: 4,
    title: "Becoming Her",
    description: "Step into the version of you you've always wanted to be.",
  },
  {
    number: 5,
    title: "Main Character Energy",
    description: "Own your story and show up with confidence.",
  },
  {
    number: 6,
    title: "Peach State of Mind",
    description: "Integrate everything and carry it forward for life.",
  },
];

const includedItems = [
  "6-week structured programme",
  "Weekly group coaching calls",
  "Weekly coaching videos & lessons",
  "Accountability & support",
  "Easy meal ideas & guides",
  "Habit trackers & resources",
  "Mindset tools & worksheets",
  "Bonus content & live Q&A",
  "Private community access",
  "Lifetime access",
];

const testimonials = [
  {
    quote:
      "This programme completely changed how I think about food. I finally feel free from the diet cycle and actually enjoy eating again.",
    name: "Client Name",
  },
  {
    quote:
      "The community support is incredible. I've never felt so understood and held through a health journey before.",
    name: "Client Name",
  },
  {
    quote:
      "I came for the nutrition and stayed for the mindset work. It's the most holistic approach I've ever experienced.",
    name: "Client Name",
  },
];

const pricingFeatures = [
  "Full 6-week programme access",
  "Weekly coaching & community",
  "Lifetime access to all materials",
];

/* ─── Small helpers ────────────────────────────────────────────────────── */

function Stars() {
  return (
    <div className="mb-4 flex gap-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-lg text-peach-berry">
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
      <span className="text-sm leading-relaxed md:text-base">{children}</span>
    </li>
  );
}

function BulletItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="bullet-dot" aria-hidden="true" />
      <span className="text-sm leading-relaxed md:text-base">{children}</span>
    </li>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function PeachClubPage() {
  return (
    <main className="overflow-x-hidden">
      {/* ── Section 1: Hero ───────────────────────────────────────────── */}
      <section className="bg-peach-cream">
        <div className="mx-auto grid max-w-page items-center gap-8 px-6 py-12 md:grid-cols-2 md:gap-12 md:py-16 lg:py-20">
          <div className="order-2 flex flex-col gap-5 md:order-1 md:gap-6 md:py-8 lg:py-12">
            <p className="font-serif text-sm text-peach-berry md:text-base">
              Peach Club Collective 🍑
            </p>
            <h1 className="font-serif text-4xl font-bold leading-[1.05] text-peach-charcoal sm:text-5xl lg:text-display-xl">
              Rewrite
              <br />
              Your Story
            </h1>
            <span className="pill-badge w-fit">
              A women&apos;s nutrition &amp; mindset community
            </span>
            <p className="max-w-md text-base leading-relaxed text-peach-text md:text-lg">
              Nutrition meets mindset. No extremes. No starting again on
              Monday.
            </p>
            <div>
              <a href="#payment" className="btn-primary-lg">
                JOIN REWRITE YOUR STORY
                <span aria-hidden="true">🤍</span>
              </a>
            </div>
          </div>
          <div className="relative order-1 aspect-[4/5] w-full md:order-2 md:aspect-auto md:h-[min(85vh,900px)]">
            <Image
              src="/images/hero-photo.jpg"
              alt="Woman in pink activewear — replace with photoshoot image"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Section 2: Introducing the Programme ────────────────────── */}
      <section className="bg-peach-pink-light">
        <div className="mx-auto grid max-w-page items-center gap-10 px-6 py-section md:grid-cols-2 md:gap-16 md:py-section-lg">
          <div className="flex flex-col gap-5 md:gap-6">
            <p className="section-label">Introducing the Programme</p>
            <h2 className="heading-serif text-display-sm md:text-display-md">
              Rewrite Your Story — A 6-Week Nutrition &amp; Mindset Experience
            </h2>
            <p className="text-sm leading-relaxed md:text-base">
              This is your invitation to finally break free from the diet cycle
              and build a relationship with food, your body, and yourself that
              actually feels good.
            </p>
            <p className="text-sm leading-relaxed md:text-base">
              Over 6 weeks, you&apos;ll be guided through a structured programme
              that blends evidence-based nutrition with powerful mindset work —
              all within a warm, supportive community of women who get it.
            </p>
            <ul className="flex flex-col gap-3">
              {programmeOutcomes.map((item) => (
                <BulletItem key={item}>{item}</BulletItem>
              ))}
            </ul>
            <p className="font-serif text-lg font-semibold text-peach-berry md:text-xl">
              This isn&apos;t another diet.
            </p>
          </div>
          <div className="relative aspect-[5/6] w-full overflow-hidden rounded-card shadow-card">
            <Image
              src="/images/programme-photo.jpg"
              alt="Woman with mug — replace with photoshoot image"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Section 3: Who It's For ─────────────────────────────────── */}
      <section className="relative bg-peach-pink py-section md:py-section-lg">
        <span
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-3xl md:left-8 lg:block"
          aria-hidden="true"
        >
          🍓
        </span>
        <span
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-3xl md:right-8 lg:block"
          aria-hidden="true"
        >
          🤍
        </span>
        <div className="mx-auto max-w-page px-6">
          <div className="mb-10 text-center md:mb-14">
            <p className="section-label mb-3">Is This You?</p>
            <h2 className="heading-serif text-display-sm md:text-display-md">
              You&apos;re not alone. We see you. 💬
            </h2>
          </div>
          <ul className="mx-auto grid max-w-4xl gap-x-12 gap-y-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <BulletItem key={point}>{point}</BulletItem>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 4: The Method ───────────────────────────────────── */}
      <section className="bg-white py-section md:py-section-lg">
        <div className="mx-auto max-w-page px-6">
          <div className="mb-10 text-center md:mb-14">
            <p className="section-label mb-3">The Method</p>
            <h2 className="heading-serif text-display-sm md:text-display-md">
              Four Pillars. One You. ✨
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="card-white flex flex-col">
                <span className="mb-3 text-3xl" aria-hidden="true">
                  {pillar.emoji}
                </span>
                <h3 className="mb-4 font-serif text-xl font-bold text-peach-charcoal">
                  {pillar.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-peach-text"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: The 6-Week Journey ───────────────────────────── */}
      <section className="bg-peach-pink-light py-section md:py-section-lg">
        <div className="mx-auto grid max-w-page items-start gap-10 px-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div className="flex flex-col gap-4 md:sticky md:top-24">
            <p className="section-label">The 6-Week Journey</p>
            <h2 className="heading-serif text-display-sm md:text-display-md">
              Your story starts here. 💬
            </h2>
            <span className="mt-4 text-3xl" aria-hidden="true">
              🧁
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {weeks.map((week) => (
              <div
                key={week.number}
                className="flex items-start gap-4 rounded-card bg-white/70 p-5 shadow-card md:gap-5 md:p-6"
              >
                <span className="shrink-0 rounded-pill bg-peach-berry px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-white">
                  Week {week.number}
                </span>
                <div>
                  <p className="font-serif text-lg font-bold text-peach-charcoal md:text-xl">
                    {week.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-peach-text md:text-base">
                    {week.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: What's Included ──────────────────────────────── */}
      <section className="relative bg-peach-cream py-section md:py-section-lg">
        <span
          className="absolute bottom-8 right-6 hidden text-3xl md:block"
          aria-hidden="true"
        >
          🤍
        </span>
        <div className="mx-auto grid max-w-page items-start gap-10 px-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div className="flex flex-col gap-4">
            <p className="section-label">What&apos;s Included</p>
            <h2 className="heading-serif text-display-sm md:text-display-md">
              Everything you need to succeed. ✨
            </h2>
            <span className="mt-4 text-3xl" aria-hidden="true">
              🍓
            </span>
          </div>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {includedItems.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 7: Testimonials ─────────────────────────────────── */}
      <section className="relative bg-white py-section md:py-section-lg">
        <span
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-3xl md:left-8 lg:block"
          aria-hidden="true"
        >
          🍓
        </span>
        <span
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-3xl md:right-8 lg:block"
          aria-hidden="true"
        >
          🤍
        </span>
        <div className="mx-auto max-w-page px-6">
          <div className="mb-10 text-center md:mb-14">
            <p className="section-label mb-3">Client Testimonials</p>
            <h2 className="heading-serif text-display-sm md:text-display-md">
              Don&apos;t just take our word for it 💬
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.quote} className="card-white flex flex-col">
                <Stars />
                <p className="mb-6 flex-1 text-sm leading-relaxed italic text-peach-text md:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm text-peach-text/70">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: Pricing ──────────────────────────────────────── */}
      <section id="payment" className="bg-peach-berry py-section md:py-section-lg">
        <div className="mx-auto grid max-w-page items-center gap-10 px-6 lg:grid-cols-[1fr_1.6fr_1fr] lg:gap-8">
          <div className="flex flex-col gap-4 text-white">
            <p className="section-label-light">Invest in You</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-white md:text-display-sm">
              A small investment for a lifetime of change. ✨
            </h2>
            <span className="mt-2 text-3xl" aria-hidden="true">
              🧁
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Early Bird */}
            <div className="relative rounded-card bg-white p-6 shadow-card md:p-8">
              <span className="absolute -right-2 -top-3 rounded-full bg-peach-gold-1 px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wide text-peach-charcoal shadow-sm">
                Save £20
              </span>
              <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.15em] text-peach-berry">
                Early Bird
              </p>
              <p className="mb-4 text-sm text-peach-text/70">
                Limited to first 5 spaces
              </p>
              <p className="mb-6 font-serif text-5xl font-bold text-peach-charcoal">
                £147
              </p>
              <ul className="mb-8 flex flex-col gap-3">
                {pricingFeatures.map((f) => (
                  <CheckItem key={f}>{f}</CheckItem>
                ))}
              </ul>
              <a href="#payment" className="btn-join">
                Join Now
              </a>
            </div>

            {/* Standard */}
            <div className="rounded-card bg-white p-6 shadow-card md:p-8">
              <p className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.15em] text-peach-berry">
                Standard
              </p>
              <p className="mb-4 text-sm text-peach-text/70">Regular Price</p>
              <p className="mb-6 font-serif text-5xl font-bold text-peach-charcoal">
                £167
              </p>
              <ul className="mb-8 flex flex-col gap-3">
                {pricingFeatures.map((f) => (
                  <CheckItem key={f}>{f}</CheckItem>
                ))}
              </ul>
              <a href="#payment" className="btn-join">
                Join Now
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <p className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              You can sit with us
            </p>
            <p className="mt-4 text-3xl" aria-hidden="true">
              💖🍑
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 9: Final CTA ──────────────────────────────────────── */}
      <section className="bg-peach-cream py-section md:py-section-lg">
        <div className="mx-auto grid max-w-page items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="heading-serif text-display-sm md:text-display-md">
              Ready to Rewrite Your Story? ✨
            </h2>
            <p className="max-w-md text-sm leading-relaxed md:text-base">
              You deserve to feel good in your body, your mind, and your life.
              Let&apos;s do this together.
            </p>
            <span className="mt-2 text-3xl" aria-hidden="true">
              🧁
            </span>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <a href="#payment" className="btn-primary-lg w-full max-w-sm text-center md:w-auto">
              JOIN NOW <span aria-hidden="true">🤍</span>
            </a>
            <p className="text-sm text-peach-text/70">Your story is waiting.</p>
            <span className="text-3xl md:ml-auto" aria-hidden="true">
              🍓
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
