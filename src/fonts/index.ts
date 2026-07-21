import localFont from "next/font/local";

/**
 * Fonts are vendored as woff2 rather than fetched from Google at build time.
 * `next/font/google` downloads from fonts.gstatic.com during `next build`, so a
 * CDN hiccup in the build sandbox silently degrades RTL pages to system fonts.
 * These are the same variable files Google serves, pinned to the subsets we use.
 *
 * The unicode-range values mirror Google's subset definitions so browsers only
 * fetch the Arabic faces for Arabic-script text. They are repeated inline
 * because next/font rejects anything but explicit literals in loader options.
 */

export const fraunces = localFont({
  src: "./fraunces-latin.woff2",
  weight: "300 600",
  style: "normal",
  variable: "--font-fraunces",
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: "Times New Roman",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});

export const manrope = localFont({
  src: "./manrope-latin.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-manrope",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});

export const notoKufi = localFont({
  src: "./noto-kufi-arabic.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-noto-kufi",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+102E0-102FB, U+10E60-10E7E, U+10EC2-10EC4, U+10EFC-10EFF",
    },
  ],
});

export const notoSansArabic = localFont({
  src: "./noto-sans-arabic.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-noto-arabic",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: "Arial",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+102E0-102FB, U+10E60-10E7E, U+10EC2-10EC4, U+10EFC-10EFF",
    },
  ],
});
