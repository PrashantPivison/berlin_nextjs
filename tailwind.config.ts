import type { Config } from "tailwindcss";

/**
 * Design tokens extracted verbatim from the live site:
 *   https://www.berlinoffice-usa.com/wp-content/themes/wbtheme/assets/css/colors.css
 *   https://www.berlinoffice-usa.com/wp-content/themes/wbtheme/assets/css/style.css
 *
 * The type-scale values (xxl…xs) and the container max-width are responsive on
 * the original site — they are redefined inside media queries. To keep that
 * behaviour pixel-perfect we expose them here as CSS custom properties (defined
 * in app/globals.css) rather than as fixed pixel values, so the breakpoint
 * overrides flow through automatically.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette (colors.css :root)
        primary: "var(--primary)", // #685f5f
        secondary: "var(--secondary)", // #ffce00
        red: "var(--red)", // #e40422
        accent: "var(--accent)", // = red
        gray: "var(--gray)", // #eee
        // Accent color families
        "green-1": "var(--green-1)", // #9bcfaf
        "green-2": "var(--green-2)", // #00aa84
        "green-3": "var(--green-3)", // #007256
        "green-4": "var(--green-4)", // #004534
        yellow: "var(--yellow)", // #ffe70e
        orange: "var(--orange)", // #f39300
        "blue-1": "var(--blue-1)", // #aac9e7
        "blue-2": "var(--blue-2)", // #4f90cd
        "blue-3": "var(--blue-3)", // #004f9f
        "blue-4": "var(--blue-4)", // #002856
        pink: "var(--pink)", // #f5b4cb
        violet: "var(--violet)", // #9185be
        // Neutral scale
        "schwarz-80": "var(--schwarz-80)", // #333
        "schwarz-60": "var(--schwarz-60)", // #666
        "schwarz-40": "var(--schwarz-40)", // #999
        "schwarz-20": "var(--schwarz-20)", // #ccc
        "schwarz-10": "var(--schwarz-10)", // #e6e6e6
        "schwarz-05": "var(--schwarz-05)", // #f2f2f2
      },
      fontFamily: {
        // Self-hosted "Berlin" (BerlinTypeOffice) — loaded via next/font/local
        primary: ["var(--font-berlin)", "sans-serif"],
        secondary: ["Arial", "sans-serif"],
      },
      fontSize: {
        // Responsive type scale (style.css :root + media queries)
        xxl: "var(--xxl)",
        xl: "var(--xl)",
        x: "var(--x)",
        lg: "var(--lg)",
        lg2: "var(--lg2)",
        md0: "var(--md0)",
        md: "var(--md)",
        md2: "var(--md2)",
        sm: "var(--sm)",
        xs: "var(--xs)",
      },
      maxWidth: {
        container: "var(--container-max-width)", // 1140px (responsive)
      },
      boxShadow: {
        light: "0px 1px 3px #eeeeee",
        normal: "0 2px 4px rgba(0, 0, 0, 0.1)",
        heavy: "0 4px 8px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        small: "4px",
        normal: "8px",
        large: "12px",
        round: "50px",
      },
      transitionTimingFunction: {
        theme: "ease",
      },
    },
  },
  plugins: [],
};

export default config;
