# Tunica Group

Marketing website for **Tunica Group** — a diversified enterprise across real estate, luxury fashion, and hospitality, based in Erbil, Iraq.

Built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, and **Motion**. Trilingual (English / Arabic / Kurdish) with full RTL. Deployed on **Vercel**.

## Stack

- **Framework:** Next.js 15 (App Router, React 19, RSC)
- **Styling:** Tailwind CSS 3.4 + custom design tokens
- **Animation:** Motion (`motion/react`) via `LazyMotion` for a slim bundle
- **i18n:** Locale-routed (`/en`, `/ar`, `/ku`) with RTL, a custom middleware, and typed dictionaries — no external i18n library
- **Fonts:** Fraunces + Manrope (Latin); Noto Kufi Arabic + Noto Sans Arabic (RTL) — self-hosted via `next/font`
- **Images:** `next/image` (AVIF/WebP), source photos pre-optimized with sharp

## Local development

```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /en)
npm run build    # production build
npm start        # serve the production build
```

## Internationalisation

Three locales: **English** (`en`, default), **Arabic** (`ar`, RTL), **Kurdish/Sorani** (`ku`, RTL).

- Every route is prefixed with a locale, e.g. `/en/about`, `/ar/portfolio`.
- `src/middleware.ts` negotiates the visitor's language (`Accept-Language`) and redirects `/` accordingly.
- All copy lives in typed dictionaries: [`src/i18n/dictionaries/{en,ar,ku}.ts`](src/i18n/dictionaries). `en.ts` is the source of truth; the others mirror its shape exactly (TypeScript enforces this).
- `<html lang dir>` is set per-locale; RTL locales switch to Arabic-script fonts automatically.

> The Arabic and Kurdish translations were produced for launch and should be reviewed by a native speaker before going live.

## Project structure

```
src/
  app/
    layout.tsx              # pass-through root layout
    [locale]/
      layout.tsx            # <html lang/dir>, fonts, metadata, Header/Footer
      page.tsx              # home
      about/ portfolio/ contact/ privacy/ terms/
      sectors/[slug]/       # real-estate | fashion | hospitality (static per locale)
    sitemap.ts robots.ts    # SEO (all locales + hreflang)
    icon.svg                # favicon; OG image at public/og.png
  components/
    Header/Footer/Logo/LanguageSwitcher
    sections/               # home page sections
    motion/                 # Reveal, Stagger, MotionProvider
  i18n/                     # config + dictionaries
  lib/content.ts            # locale-independent structure + localized view-models
public/images/              # brand photography
```

## Content

- **Structure** (image paths, slugs, contact details) lives in [`src/lib/content.ts`](src/lib/content.ts).
- **Copy** lives in the dictionaries under [`src/i18n/dictionaries`](src/i18n/dictionaries).

No CMS — edit those files to update the site.

## Contact form

The contact form posts to **Formspree** when `NEXT_PUBLIC_FORMSPREE_ID` is set, and falls back to a `mailto:` link otherwise. To enable live delivery, add the env var in Vercel:

```
NEXT_PUBLIC_FORMSPREE_ID=xxxxxxxx   # the id from your Formspree form URL
```

## Deployment

Push to `main` and import the repo in Vercel — no configuration needed. Vercel auto-detects Next.js.
