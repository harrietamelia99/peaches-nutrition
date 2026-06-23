import Image from "next/image";
import type { CSSProperties } from "react";
import { CoachingPackageCard } from "@/components/coaching-package-card";
import { ScrollAnimator } from "@/components/scroll-animator";
import { TestimonialCard } from "@/components/testimonial-card";
import { paymentLinks } from "@/lib/payment-links";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const siteHomeUrl = "https://www.peachesnutrition.co.uk/";
const paymentSectionUrl = "#payment";

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
    items: [
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
    title: "The Reset Era ✨",
    description:
      "Awareness before change. Balanced meals, protein, fibre, hunger & fullness and breaking the binge-restrict cycle.",
  },
  {
    number: 2,
    title: "Food, Feelings & Self Trust 💕",
    description:
      "Emotional eating, food guilt, mindfulness and rebuilding trust around food.",
  },
  {
    number: 3,
    title: "The Female Body 🌸",
    description:
      "Hormones, periods, perimenopause, stress, energy and understanding your body better.",
  },
  {
    number: 4,
    title: "Becoming Her 🦋",
    description:
      "Identity change, habits, confidence, self-worth and becoming the woman you keep saying you want to be.",
  },
  {
    number: 5,
    title: "Gut Health & Levelling Up Nutrition 🥗",
    description:
      "Gut health foundations, levelling up your nutrition, building on everything so far and making sustainable choices in real life.",
  },
  {
    number: 6,
    title: "Peach State of Mind 🍑",
    description:
      "Main character energy, maintenance mindset, boundaries, movement, weekends, holidays and making this your new normal.",
  },
];

const includedColumnOne = [
  "6 weeks of nutrition & mindset coaching 🧠",
  "Private WhatsApp community 💬",
  "Weekly coaching themes ✨",
  "Educational resources 📚",
];

const includedColumnTwo = [
  "Recipe Vault 🍽️",
  "Nutrition, mindset and habit-building tools 🛠️",
  "Community support from like-minded women 🤍",
  "Direct support from me 💖",
];

const coachingPackages = [
  {
    label: "01",
    title: "the promise plan",
    lead:
      "For women who want structure, accountability and real results, without overwhelm.",
    body:
      "This is your foundation package. We focus on consistency, habit change and building momentum that actually lasts",
    included: [
      "Daily WhatsApp support",
      "Personalised nutrition targets",
      "Bespoke habit-based plan",
      "1 x 45 minute deep dive coaching call per month",
      "Weekly check-in form with personalised feedback",
      "Adjustments to calories, habits or strategy as needed",
      "Recipe ideas and simple meal structure guidance",
      "Progress tracking and reflection prompts",
      "Mindset support around all-or-nothing thinking",
    ],
    tiers: [
      {
        duration: "1 month",
        price: "£179",
        href: paymentLinks.coaching.promise.oneMonth,
      },
      {
        duration: "2 months",
        price: "– £329 total",
        subline: "£165 per month",
        href: paymentLinks.coaching.promise.twoMonths,
      },
      {
        duration: "3 months",
        price: "– £449 total",
        subline: "£150 per month",
        href: paymentLinks.coaching.promise.threeMonths,
      },
    ],
    footnote: "3 months recommended for full results.",
  },
  {
    label: "02",
    title: "the 'become her' method",
    lead:
      "For women who want greater accountability and deeper, more personalised support.",
    body:
      "This is for you if you want a more hands-on, high-touch level of support with closer guidance and deeper accountability each week.",
    included: [
      "Includes everything in The Promise Plan, plus:",
      "Weekly 30 minute coaching calls",
      "Deeper mindset and identity work",
      "Real-time strategy adjustments",
      "More hands-on accountability",
      "Ongoing habit refinement",
      "Extra support navigating social events, stress or emotional eating",
    ],
    tiers: [
      {
        duration: "1 month",
        price: "£199",
        href: paymentLinks.coaching.becomeHer.oneMonth,
      },
      {
        duration: "2 months",
        price: "– £369 total",
        subline: "£184.50 per month",
        href: paymentLinks.coaching.becomeHer.twoMonths,
      },
      {
        duration: "3 months",
        price: "– £500 total",
        subline: "£167 per month",
        href: paymentLinks.coaching.becomeHer.threeMonths,
      },
    ],
    footnote:
      "Perfect for women who feel ready for more consistent support and closer guidance.",
  },
];

const testimonials = [
  {
    quote:
      "You've literally described ME!! I feel so seen and understood xxxx",
  },
  {
    quote:
      "Thank you, Jem, for all your support, encouragement, and guidance throughout this journey. Your kindness, and expertise have made such a positive difference, and I'm truly grateful for everything you've done to help and motivate me. I really appreciate your constant encouragement and the care you put into supporting everybody 🥰 your just so cute and your go far 🥰🥰 👏👏👏👏 👌👌👌👌 now get this food book out 🥳🥳 👏👏👏👏",
  },
  {
    quote:
      "And that is why you are so amazing and literally change people's lives, in the few short weeks that we've been communicating you have helped me more than anyone I've ever spoken to and I am forever grateful to you, because I know this is, and will continue to change my life and I'm so certain I can be binge free one day ❤️ from the bottom of my heart, thank you xxxxx",
  },
  {
    quote:
      "Honestly Jem I can't begin to thank you enough! Today's win already, I put on my shorts and felt really self conscious of my loose skin and wobbly bits, but thought what's the worst than can happen, kept them on and went to the shops and to my surprise no one gasped in horror at my legs!! Is this a little bit of confidence peeking in I wonder.... The reality of losing a huge amount of weight is people thinking that's the hard part done, so very wrong in my case that was the easy part, the hard part is actually accepting the body im left with. But I'm learning to love and respect it ❤️",
  },
  {
    quote: "Learnt - accountability works",
  },
  {
    quote: "Future Me - will be happy I went with the yog bowl!",
  },
  {
    quote:
      "the motivation but the biggest thing I've taken from this is I'm not alone. I suffer terribly with anxiety and feel that sometimes I miss out on so much. I think I just need to live for today and enjoy every moment ❤️",
  },
  {
    quote:
      "Thanks so much Jem! I've loved being part of this group. It's really shifted my mindset and made me think more about the food I'm consuming.",
  },
  {
    quote:
      "I've loved this group, I feel it's really helped navigate a really tricky time for me, it's felt a safe space, it's nice to have others support and celebrate the wins in life no matter how big or small, I've learned that I am brave, and strong and I can do hard things!! I genuinely feel if I didn't have this support my binge eating would have completely taken over this week! Yes I had a little wobble last week, but this one I've remained strong and In control and I feel so much better for it! Jem, I can't thank you enough, every message, voice note and notion of support has been so valuable and appreciated, you are a wonderful human! Xxx",
  },
  {
    quote:
      "Steak didn't happen as got home late with the dog, literally no steps today, BUT...... I STAYED BINGE FREEEEEEEE 😍😍😍😍😍",
  },
];

const pricingFeatures = [
  "Full 6-week programme access",
  "Weekly coaching & community",
  "Lifetime access to all materials",
];

/* ─── Helpers ──────────────────────────────────────────────────────────── */

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
      <section className="section-band bg-peach-1 lg:flex lg:min-h-screen lg:items-center">
        <div className="section-pad mx-auto grid w-full max-w-page items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col justify-start gap-5 lg:justify-center">
          <p
            className="hero-brand hero-reveal flex items-center gap-2"
            style={{ "--hero-delay": "80ms" } as CSSProperties}
          >
            Peach Club Collective
            <DecorEmoji emoji="🍑" size="sm" tilt="slight-right" />
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
            className="hero-body hero-reveal max-w-md"
            style={{ "--hero-delay": "420ms" } as CSSProperties}
          >
            Helping women stop starting over with food, rebuild self trust and
            create healthy habits that actually last.
            <br />
            <br />
            Nutrition meets mindset.
            <br />
            No extremes.
            <br />
            No perfection.
            <br />
            No starting again every Monday.
            <br />
            <br />
            Just sustainable change, real-life support and a community of women
            who get it.
          </p>
          <div
            className="hero-reveal pt-1"
            style={{ "--hero-delay": "540ms" } as CSSProperties}
          >
            <a href={paymentSectionUrl} className="btn-brand-white-lg">
              <span className="btn-dot" aria-hidden="true" />
              join rewrite your story ✨
            </a>
          </div>
          </div>
          <div
            className="hero-reveal-right flex w-full items-center justify-center"
            style={{ "--hero-delay": "260ms" } as CSSProperties}
          >
            <div className="photo-frame relative aspect-[4/5] w-full max-w-[24rem] sm:max-w-[26rem] lg:max-w-none">
              <Image
                src="/images/hero-photo.jpg"
                alt="Woman in activewear smiling in a cosy living space"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 1b. Community Intro ─────────────────────────────────────── */}
      <section className="section-band bg-peach-2">
        <div className="section-pad mx-auto max-w-page">
          <div
            className="reveal mx-auto flex max-w-3xl flex-col items-center text-center"
            data-reveal
          >
            <p className="section-label mb-4">
              Peach Club Collective{" "}
              <DecorEmoji emoji="🍑" size="sm" tilt="right" className="emoji-inline" />
              <DecorEmoji emoji="💕" size="sm" tilt="slight-left" className="emoji-inline" />
            </p>
            <h2 className="heading-display text-center text-[clamp(1.75rem,3.5vw,2.5rem)]">
              a warm community for women who are done starting over{" "}
              <DecorEmoji emoji="🤍" size="sm" tilt="right" className="emoji-inline" />
            </h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-peach-text">
              Peach Club Collective is a supportive women&apos;s nutrition and
              mindset community — a safe space to learn, grow and feel held
              alongside like-minded women who get it. No judgement, no
              comparison, no perfection. Just real-life support, encouragement
              and women rewriting their stories together.{" "}
              <DecorEmoji emoji="✨" size="sm" tilt="slight-right" className="emoji-inline" />
            </p>
            <p className="mt-4 font-serif text-[1.05rem] font-medium text-peach-dot">
              Rewrite Your Story is the signature 6-week experience inside it. 🩷
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Introducing the Programme ────────────────────────────── */}
      <section className="section-band programme-section section-faded-grid">
        <div className="section-pad mx-auto grid max-w-page items-center gap-8 md:grid-cols-2 md:gap-10">
          <div
            className="photo-frame reveal reveal-left relative aspect-[4/5] w-full"
            data-reveal
          >
            <Image
              src="/images/programme-photo.jpg"
              alt="Woman preparing fresh fruit in the kitchen"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="reveal max-w-xl" data-reveal data-reveal-delay="120">
            <p className="section-label mb-4">
              Introducing the Programme ✨
            </p>
            <div className="mb-7">
              <h2 className="programme-headline">Rewrite Your Story</h2>
              <p className="programme-subhead">
                The signature 6-week experience inside Peach Club Collective.
              </p>
            </div>
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
        </div>
      </section>

      {/* ── 3. Is This You? ─────────────────────────────────────────── */}
      <section className="section-band bg-peach-3">
        <div className="section-pad mx-auto max-w-page">
          <div className="reveal section-head text-center" data-reveal>
            <p className="section-label mb-4">Who It&apos;s For 💕</p>
            <h2 className="heading-display text-center text-[clamp(1.75rem,3.5vw,2.5rem)]">
              rewrite your story is designed for women who:
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
            <p className="section-label mb-4">The Method 🧠</p>
            <h2 className="heading-display text-center text-[clamp(1.75rem,3.5vw,2.5rem)] text-white">
              four pillars. one you.{" "}
              <DecorEmoji emoji="✨" size="sm" tilt="right" className="emoji-inline" />
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
            <p className="section-label">The 6-Week Journey 🗓️</p>
            <h2 className="heading-display text-[clamp(2rem,4vw,3.1rem)] leading-[1.12]">
              <span className="block">Your story</span>
              <span className="mt-0.5 block">
                starts here.{" "}
                <DecorEmoji
                  emoji="💬"
                  size="sm"
                  tilt="slight-right"
                  className="emoji-inline"
                />
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
              What&apos;s Included 🎁
            </p>

            <div className="sm:col-span-2 md:col-span-1 md:col-start-1 md:row-start-2">
              <h2 className="heading-display text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15]">
                <span className="block">Everything you</span>
                <span className="mt-0.5 block">
                  need to succeed.{" "}
                  <DecorEmoji emoji="✨" size="sm" tilt="right" className="emoji-inline" />
                </span>
              </h2>
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
      <section className="section-band bg-peach-3">
        <div className="section-pad mx-auto max-w-page">
          <div className="reveal section-head text-center" data-reveal>
            <p className="section-label mb-4">Client Testimonials 💬</p>
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
              <TestimonialCard
                key={i}
                quote={t.quote}
                revealDelay={i * 120}
                readMoreHref={siteHomeUrl}
              />
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
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-10 xl:gap-14">
            <div className="pricing-aside reveal" data-reveal>
              <p className="section-label-gold">Invest in You 🩷</p>
              <h2 className="berry-heading font-serif text-[clamp(1.4rem,2vw,1.85rem)] font-medium leading-[1.2]">
                <span className="block">a small investment</span>
                <span className="mt-1 block">
                  for a lifetime of change.{" "}
                  <DecorEmoji emoji="✨" size="sm" tilt="right" className="emoji-inline" />
                </span>
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
                <a
                  href={paymentLinks.programme.earlyBird}
                  className="btn-brand-berry-full mt-auto"
                >
                  join now ✨
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
                <a
                  href={paymentLinks.programme.standard}
                  className="btn-brand-berry-full mt-auto"
                >
                  join now ✨
                </a>
              </div>
            </div>

            <div className="pricing-aside reveal" data-reveal data-reveal-delay="300">
              <p className="berry-body font-serif text-[clamp(1.5rem,2.4vw,2.35rem)] font-medium leading-[1.15]">
                <span className="block">you can</span>
                <span className="mt-1 block">sit with us</span>
              </p>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <DecorEmoji emoji="💖" size="sm" tilt="slight-left" />
                <DecorEmoji emoji="🍑" size="sm" tilt="right" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. 1:1 Coaching ─────────────────────────────────────────── */}
      <section id="coaching" className="section-band bg-peach-3">
        <div className="section-pad mx-auto max-w-page">
          <div className="reveal section-head text-center" data-reveal>
            <p className="section-label mb-4">1:1 Coaching 🤍</p>
            <h2 className="heading-display text-center text-[clamp(1.75rem,3.5vw,2.5rem)]">
              want to go deeper with me?{" "}
              <DecorEmoji emoji="✨" size="sm" tilt="right" className="emoji-inline" />
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.75] text-peach-text">
              Loved the community vibe but ready for personalised support?
              Choose the 1:1 package that fits you — fully tailored nutrition,
              daily accountability and coaching built around your life. 🩷
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {coachingPackages.map((pkg, i) => (
              <CoachingPackageCard
                key={pkg.title}
                label={pkg.label}
                title={pkg.title}
                lead={pkg.lead}
                body={pkg.body}
                included={pkg.included}
                tiers={pkg.tiers}
                footnote={pkg.footnote}
                revealDelay={i * 120}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Final CTA ───────────────────────────────────────────── */}
      <section className="section-band bg-peach-1">
        <div className="section-pad mx-auto max-w-page">
          <div
            className="reveal mx-auto flex max-w-2xl flex-col items-center px-2 text-center"
            data-reveal
          >
            <h2 className="heading-display text-center text-[clamp(1.85rem,3.8vw,2.85rem)] leading-[1.12]">
              ready to rewrite your story?{" "}
              <DecorEmoji emoji="✨" size="sm" tilt="right" className="emoji-inline" />
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.75] text-peach-text">
              Stop starting over. Start building a healthier, happier and more
              confident version of yourself. Join Rewrite Your Story inside Peach
              Club Collective today.
            </p>
            <div className="mt-8 flex w-full flex-col items-center gap-4">
              <a href={paymentSectionUrl} className="btn-brand-white-lg">
                <span className="btn-dot" aria-hidden="true" />
                join now ✨
              </a>
              <p className="text-center font-serif text-[15px] text-peach-text/70">
                Your story is waiting.{" "}
                <DecorEmoji
                  emoji="💬"
                  size="sm"
                  tilt="slight-right"
                  className="emoji-inline"
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
