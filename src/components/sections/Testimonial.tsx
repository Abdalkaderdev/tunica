import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-stone py-28 text-cream sm:py-36">
      <Image
        src="/images/phoenix-aerial.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-ink/70" />

      <div className="wrap relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div
            aria-hidden
            className="font-serif text-7xl leading-none text-goldlight/50"
          >
            &ldquo;
          </div>
          <blockquote className="mt-2 font-serif text-2xl font-light leading-[1.4] text-cream sm:text-3xl lg:text-[2.25rem]">
            Tunica&rsquo;s attention to detail — from the structure of the
            building to the experience inside it — is what sets them apart in
            Erbil&rsquo;s market.
          </blockquote>
          <cite className="mt-8 block text-sm uppercase not-italic tracking-[0.18em] text-goldlight">
            Business Partner · Phoenix Tower
          </cite>
        </Reveal>
      </div>
    </section>
  );
}
