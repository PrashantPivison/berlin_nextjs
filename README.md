# Why Berlin — Next.js clone

A pixel-perfect static rebuild of
[berlinoffice-usa.com/why-berlin](https://www.berlinoffice-usa.com/why-berlin/)
using **Next.js (App Router) + TypeScript + Tailwind CSS**.

All design values below were extracted directly from the live site's
stylesheets (`style.css`, `colors.css`, `typography.css`, `buttons.css`,
`standards.css`, `custom.css`) and JavaScript (`main.js`, `sliders.js`) — not
guessed.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000  (/ redirects to /why-berlin)
npm run build && npm start
```

## Pages

All four nav destinations are built and pixel-matched to the live site:

| Route | Live page |
| ----- | --------- |
| `/why-berlin` | hero · 5 feature cards · testimonial slider · US-companies logo grid |
| `/key-industries` | hero · two titled sections of industry-cluster cards (3-up / 2-up grid) |
| `/news-events` | hero · "Latest news" slider · "Newsletters" slider · "Upcoming events" slider |
| `/meet-us` | hero · team cards (photo, role, LinkedIn + email) |

`/` redirects to `/why-berlin`.

## Project structure

```
app/
  layout.tsx              # loads the Berlin font + favicons/metadata
  fonts.ts                # next/font/local — "Berlin" (BerlinTypeOffice)
  globals.css             # design tokens (CSS vars) + ported component styles
  page.tsx                # / → redirects to /why-berlin
  why-berlin/page.tsx     # routes (one per nav item)
  key-industries/page.tsx
  news-events/page.tsx
  meet-us/page.tsx
  api/subscribe/route.ts  # placeholder newsletter endpoint (TODO: real ESP)
components/
  Header.tsx              # fixed transparent nav → white on scroll + mobile slideout
                          # active link derived from the current route (usePathname)
  Hero.tsx                # reusable darkened-skyline hero (title/image per page)
  FeatureCards.tsx        # 5 reason cards, 2-column grid (Why Berlin)
  TestimonialSlider.tsx   # Swiper carousel (2-per-view ≥1024px, loop, arrows, dots)
  CompanyLogos.tsx        # "US Companies…" heading + logo grid image
  KeyIndustriesPage.tsx   # Key Industries page
  MeetUsPage.tsx          # Meet Us page
  NewsEventsPage.tsx      # News & Events page (3 sliders)
  CardSwiper.tsx          # generic Swiper used by News & Events
  pagesData.ts            # content extracted from the live HTML (typed)
  NewsletterForm.tsx      # client form with validation (First/Last/Email)
  Footer.tsx              # logo, address, social, newsletter, Senate logo, bottom bar
  ScrollToTop.tsx         # angle-top scroll-to-top control
  WhyBerlinPage.tsx       # Why Berlin page composition
public/
  fonts/                  # BerlinTypeOffice woff2/woff (Regular + Bold)
  images/                 # Why-Berlin assets + fonts/icons/patterns (self-contained)
```

### A note on images

The original `/why-berlin` assets are downloaded into `/public` (fully
self-contained). The **Key Industries / News & Events / Meet Us** card and photo
images reference the original hosted URLs via `next/image`
(`next.config.mjs` whitelists `www.berlinoffice-usa.com`); their decorative
pattern SVGs and icons are local. The team emails on Meet Us were decoded from
the live site's Cloudflare email-protection obfuscation.

## Fonts (exact)

| Family | Weights | Source |
| ------ | ------- | ------ |
| **Berlin** (`BerlinTypeOffice`) | 400 (Regular), 700 (Bold) | self-hosted `woff2` + `woff`, loaded via `next/font/local` |

```
--family-primary: "Berlin", sans-serif;
--family-secondary: Arial, sans-serif;
```

There are **no Google Fonts** on the original — the entire site uses the custom
"Berlin" typeface only.

## Colors (exact — from `colors.css`)

| Token | Hex |
| ----- | --- |
| `--primary` | `#685f5f` |
| `--secondary` | `#ffce00` |
| `--white` | `#ffffff` |
| `--black` | `#000000` |
| `--red` / `--accent` | `#e40422` |
| `--gray` | `#eee` |
| `--green-1` | `#9bcfaf` |
| `--green-2` | `#00aa84` |
| `--green-3` | `#007256` |
| `--green-4` | `#004534` |
| `--yellow` | `#ffe70e` |
| `--orange` | `#f39300` |
| `--blue-1` | `#aac9e7` |
| `--blue-2` | `#4f90cd` |
| `--blue-3` | `#004f9f` |
| `--blue-4` | `#002856` |
| `--pink` | `#f5b4cb` |
| `--violet` | `#9185be` |
| `--schwarz-80` | `#333` |
| `--schwarz-60` | `#666` |
| `--schwarz-40` | `#999` |
| `--schwarz-20` | `#ccc` |
| `--schwarz-10` | `#e6e6e6` (footer background) |
| `--schwarz-05` | `#f2f2f2` |
| pagination dot (idle / active) | `#d9d9d9` / `#6d6969` |

**Where they're used**

- Feature cards: `bg-green-2-feature` = `#00aa84` bg / white heading, inner text
  block `#9bcfaf` (green-1) on black; `bg-blue-2-feature` = `#4f90cd` bg / white
  heading, inner text block `#aac9e7` (blue-1) on black.
- Testimonial slides alternate `bg-blue-1` (`#aac9e7`) and `bg-green-1`
  (`#9bcfaf`).
- Buttons / submit: `#e40422` (red), invert to white-bg + red text on hover.
- Footer background: `#e6e6e6`.

## Type scale (exact — from `style.css` `:root`, responsive)

| Token | ≥1200px | ≤991px | ≤767px | ≤570px |
| ----- | ------- | ------ | ------ | ------ |
| `--xxl` | 90px | 60px | 50px | 40px |
| `--xl` | 70px | 56px | 56px | 40px |
| `--x` | 60px | 60px | 60px | 60px |
| `--lg` | 45px | 32px | 32px | — |
| `--lg2` | 30px | 26px | 26px | — |
| `--md0` | 26px | 26px | 26px | — |
| `--md` | 24px | 20px | 18px | — |
| `--md2` | 18px | 16px | 16px | — |
| `--sm` (base/body) | 16px | 15px | 15px | — |
| `--xs` | 14px | 14px | 14px | — |

Key roles: H1 hero = `--x` (60px), bold, `line-height: 0.97`, uppercase, white
with text-shadow. Section H2 = `--lg2` (30px) bold. Feature/quote headings =
`--md2` bold uppercase. Body `p` = `--sm`, `line-height: 1.5`. Links =
`--sm`, weight 600.

## Layout / spacing (exact)

- Container `max-width`: **1140px** → 940 (≤1199) → 720 (≤991) → 520 (≤767) →
  100% (≤570); horizontal padding **12px**; grid gutter **24px**.
- Header: `position: fixed`, `padding: 25px 0`, transparent over hero, becomes
  solid white (`box-shadow: 1px 1px 1px #ededed`) once scrolled. Nav gap 20px.
  Collapses to a hamburger + 256px left slideout (bg `#685f5f`) at ≤991px.
- Hero: `min-height: 600px`, background image darkened with
  `filter: brightness(70%)`.
- Feature card: `min-height: 433px`, `padding: 30px`, image column `250px`,
  inner text block `padding: 20px 10px`; stacks to a single column ≤1199px and
  to one card per row ≤767px. Decorative "Muster" pattern svg offset
  `top/left: -30px`, `width: 140px`.
- Sections: `padding: 35px 0 50px`; first content row `padding-top: 150px` to
  clear the fixed header; `20px 0` at ≤991px.
- Buttons / inputs: `border-radius: 0` (square), submit button `width: 150px`.

## Slider behaviour (exact — from `main.js`)

`Swiper` config for `.why-swiper`: `slidesPerView: 1`, `slidesPerGroup: 1`,
`spaceBetween: 10`, `loop: true`; at the `1024` breakpoint `slidesPerView: 2`.
Custom left/right arrow SVGs + clickable pagination bullets (8px; idle
`#d9d9d9`, active `#6d6969`). The role line preserves its line break
(`white-space: pre-line`).

## Notes

- All images, SVGs, fonts and favicons are downloaded into `/public` so the
  clone is fully self-contained (no external requests). `next.config.mjs` also
  whitelists `www.berlinoffice-usa.com` as a fallback if you prefer remote URLs.
- The newsletter form is a functional client component with validation; its
  submit posts to `/api/subscribe`, which is a clearly-marked TODO placeholder
  (the original uses WPForms).
- `/privacy-policy` and the deep links inside cards/news (which point to
  external sites or sub-pages like `/news-events/past-news/`) are left pointing
  at their original destinations and are not rebuilt.
```
