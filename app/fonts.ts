import localFont from "next/font/local";

/**
 * "Berlin" (BerlinTypeOffice) — the self-hosted brand typeface used across the
 * live site. Extracted from style.css @font-face rules (Regular 400 + Bold 700).
 * Exposed as the CSS variable `--font-berlin`, consumed by `--family-primary`.
 */
export const berlin = localFont({
  src: [
    {
      path: "../public/fonts/BerlinTypeOffice-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BerlinTypeOffice-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BerlinTypeOffice-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/BerlinTypeOffice-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-berlin",
});
