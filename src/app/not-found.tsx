import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink text-cream">
      <div className="wrap text-center">
        <div className="font-serif text-7xl text-goldlight sm:text-8xl">404</div>
        <h1 className="mt-4 text-2xl text-cream sm:text-3xl">
          This page couldn&rsquo;t be found.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-cream/60">
          The page you&rsquo;re looking for may have moved, or never existed.
        </p>
        <Link href="/" className="btn btn-light mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}
