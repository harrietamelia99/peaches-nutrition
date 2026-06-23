const contactUrl = "https://www.peachesnutrition.co.uk/contact";

function paymentUrl(envValue: string | undefined): string {
  return envValue?.trim() || contactUrl;
}

export const paymentLinks = {
  programme: {
    earlyBird: paymentUrl(process.env.NEXT_PUBLIC_STRIPE_EARLY_BIRD_URL),
    standard: paymentUrl(process.env.NEXT_PUBLIC_STRIPE_STANDARD_URL),
  },
  coaching: {
    promise: {
      oneMonth: paymentUrl(process.env.NEXT_PUBLIC_STRIPE_PROMISE_1M_URL),
      twoMonths: paymentUrl(process.env.NEXT_PUBLIC_STRIPE_PROMISE_2M_URL),
      threeMonths: paymentUrl(process.env.NEXT_PUBLIC_STRIPE_PROMISE_3M_URL),
    },
    becomeHer: {
      oneMonth: paymentUrl(process.env.NEXT_PUBLIC_STRIPE_BECOME_HER_1M_URL),
      twoMonths: paymentUrl(process.env.NEXT_PUBLIC_STRIPE_BECOME_HER_2M_URL),
      threeMonths: paymentUrl(process.env.NEXT_PUBLIC_STRIPE_BECOME_HER_3M_URL),
    },
  },
} as const;
