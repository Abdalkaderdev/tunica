# Tunica Group

Marketing website for **Tunica Group** — a diversified enterprise across real estate, luxury fashion, and hospitality, based in Erbil, Iraq.

Built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, and **Motion**. Deployed on **Vercel**.

## Stack

- **Framework:** Next.js 15 (App Router, React 19, RSC)
- **Styling:** Tailwind CSS 3.4 + custom design tokens
- **Animation:** Motion (`motion/react`) via `LazyMotion` for a slim bundle
- **Fonts:** Fraunces (display serif) + Manrope (body), self-hosted via `next/font`
- **Images:** `next/image` (AVIF/WebP), source photos pre-optimized with sharp

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
src/
  app/
    layout.tsx            # root layout, fonts, metadata, Header/Footer
    page.tsx              # home
    about/                # about page
    sectors/[slug]/       # real-estate | fashion | hospitality (static)
    portfolio/            # filterable project grid
    contact/              # contact page + form
    privacy/ terms/       # legal
    sitemap.ts robots.ts  # SEO
    icon.svg              # favicon (static); OG image at public/og.png
  components/
    Header.tsx Footer.tsx
    sections/             # home page sections
    motion/               # Reveal, Stagger, MotionProvider
  lib/content.ts          # single source of truth (site, sectors, projects)
public/images/            # brand photography
```

## Content

All site content lives in [`src/lib/content.ts`](src/lib/content.ts) — company details, sectors, and projects. Edit there to update the site; no CMS required.

## Contact form

The contact form posts to **Formspree** when `NEXT_PUBLIC_FORMSPREE_ID` is set, and falls back to a `mailto:` link otherwise. To enable live delivery, add the env var in Vercel:

```
NEXT_PUBLIC_FORMSPREE_ID=xxxxxxxx   # the id from your Formspree form URL
```

## Deployment

Push to `main` and import the repo in Vercel — no configuration needed. Vercel auto-detects Next.js.
