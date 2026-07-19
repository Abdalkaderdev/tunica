import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Sectors from "@/components/sections/Sectors";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonial from "@/components/sections/Testimonial";
import CTA from "@/components/sections/CTA";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <About locale={locale} dict={dict} />
      <Sectors locale={locale} dict={dict} />
      <PortfolioPreview locale={locale} dict={dict} />
      <Testimonial dict={dict} />
      <CTA locale={locale} dict={dict} />
    </>
  );
}
