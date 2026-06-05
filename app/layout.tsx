import type { Metadata } from "next";
import { Fraunces, Roboto } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Rewrite Your Story | Peach Club Collective",
  description:
    "A 6-week nutrition & mindset experience from Peach Club Collective. Nutrition meets mindset. No extremes. No starting again on Monday.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${fraunces.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
