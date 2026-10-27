# HeartLoop.in landing page

Responsive landing page built with Next.js 15 (App Router), Tailwind CSS 3 and GSAP.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. For a production build, run `npm run build` and `npm start`.

## Structure

- `app/` – layout (fonts, metadata, favicon) and the page that composes the sections
- `components/` – one file per section; all are server components except `Header` (mobile menu, scroll-spy) and `Motion` (GSAP)
- `lib/site.js` – nav items and the sign-up / log-in URLs used by every call-to-action
- `public/images/` – optimised WebP assets cut from the design reference

## Animations

`components/Motion.jsx` drives every animation through data attributes, so sections stay static HTML:

- `data-hero` / `data-hero-note` – staggered entrance on load
- `data-reveal` – fades up when scrolled into view (ScrollTrigger batch)
- `data-float` – gentle float loop on the hero phones
- `data-parallax="<yPercent>"` – scroll-scrubbed parallax for decorative shapes

Motion is skipped for visitors who prefer reduced motion.

## Before launch

Replace the placeholder links: `links.signup` / `links.login` in `lib/site.js`, and the Privacy, Terms, Contact and social links in `components/Footer.jsx`.
