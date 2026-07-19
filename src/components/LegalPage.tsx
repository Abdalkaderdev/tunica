import { site } from "@/lib/content";
import type { Dictionary } from "@/i18n/dictionaries";

type LegalDoc = Dictionary["legal"]["privacy"];

export default function LegalPage({
  eyebrow,
  lastUpdated,
  doc,
}: {
  eyebrow: string;
  lastUpdated: string;
  doc: LegalDoc;
}) {
  return (
    <article className="bg-cream pb-24 pt-32 sm:pt-40">
      <div className="wrap max-w-3xl">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="text-4xl font-light leading-tight sm:text-5xl">{doc.title}</h1>
        <p className="mt-4 text-sm text-stone/70">{lastUpdated}</p>

        <div className="mt-12 space-y-10 leading-relaxed text-stone">
          <p>{doc.intro}</p>
          {doc.sections.map((section, i) => {
            const isContact = i === doc.sections.length - 1;
            return (
              <section key={section.h}>
                <h2 className="mb-3 font-serif text-2xl text-ink">{section.h}</h2>
                <p>
                  {section.p}
                  {isContact ? (
                    <>
                      {" "}
                      <a
                        href={`mailto:${site.email}`}
                        className="text-ink underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
                        dir="ltr"
                      >
                        {site.email}
                      </a>
                      .
                    </>
                  ) : null}
                </p>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}
