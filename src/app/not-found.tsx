import Link from "next/link";
import "./globals.css";

/**
 * Root fallback for paths that never reach a locale segment. The middleware
 * prefixes almost everything with a locale, so this is a rare belt-and-braces
 * page; localized 404s live at /[locale]/not-found.
 */
export default function RootNotFound() {
  return (
    <html lang="en">
      <body>
        <section className="flex min-h-screen items-center bg-ink text-cream">
          <div className="wrap text-center">
            <div className="font-serif text-7xl text-goldlight sm:text-8xl">
              404
            </div>
            <h1 className="mt-4 text-2xl text-cream sm:text-3xl">
              This page couldn&rsquo;t be found.
            </h1>
            <Link href="/en" className="btn btn-light mt-8">
              Back to home
            </Link>
          </div>
        </section>
      </body>
    </html>
  );
}
