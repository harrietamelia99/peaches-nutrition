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
          /* Squarespace custom CSS tokens */
          cream: "#ffffff",
          border: "#2b2b2b",
          nav: "#423e3e",
          1: "#f6e9f4",
          2: "#fcfcf9",
          3: "#e4c5df",
          dot: "#a23565",
          lavender: "#e4c5df",
          pale: "#fcfcf9",
          beige: "#fcfcf9",
          white: "#ffffff",
          pink: "#e4c5df",
          "pink-light": "#f6e9f4",
          "pink-soft": "#e4c5df",
          "pink-section": "#e4c5df",
          berry: "#a23565",
          "berry-dark": "#8a2a52",
          text: "#3b3532",
          charcoal: "#423e3e",
          gold: {
            1: "#ead3b3",
            2: "#fff9f0",
            3: "#e1c9a2",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["5rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["2.75rem", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "btn": ["20px", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        card: "20px",
        pill: "9999px",
        nav: "22px",
      },
      boxShadow: {
        card: "0 2px 20px rgba(43, 43, 43, 0.06)",
        "card-md": "0 4px 28px rgba(43, 43, 43, 0.09)",
      },
      spacing: {
        section: "3.25rem",
        "section-lg": "4rem",
      },
      maxWidth: {
        page: "1120px",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(43,43,43,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(43,43,43,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-lines": "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
