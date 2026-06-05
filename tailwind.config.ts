import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          cream: "#fbfbf7",
          white: "#f6f1f4",
          pink: "#e3c7dd",
          "pink-light": "#f3e6ef",
          "pink-soft": "#f0dce8",
          berry: "#9e3467",
          "berry-dark": "#7a2850",
          dot: "#a33a66",
          text: "#3f3c3c",
          charcoal: "#423e3e",
          gold: {
            1: "#e9c9a5",
            2: "#f4dfc7",
            3: "#d9b389",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        card: "16px",
        pill: "9999px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(62, 60, 60, 0.08)",
        "card-hover": "0 8px 32px rgba(62, 60, 60, 0.12)",
      },
      spacing: {
        section: "5rem",
        "section-lg": "6.5rem",
      },
      maxWidth: {
        page: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
