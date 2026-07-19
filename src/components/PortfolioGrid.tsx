"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import type { Project } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const filters = useMemo(() => {
    const set = Array.from(new Set(projects.map((p) => p.sector)));
    return ["All", ...set];
  }, [projects]);

  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.sector === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
              active === f
                ? "border-ink bg-ink text-cream"
                : "border-ink/20 text-stone hover:border-gold hover:text-gold"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <m.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <m.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease }}
              className="group overflow-hidden rounded-sm bg-white/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
                  {project.status}
                </span>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.16em] text-gold">
                  {project.sector}
                </div>
                <h3 className="mt-2 font-serif text-xl text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone/80">
                  {project.blurb}
                </p>
                <div className="mt-4 text-xs text-stone/60">
                  {project.location}
                </div>
              </div>
            </m.article>
          ))}
        </AnimatePresence>
      </m.div>
    </div>
  );
}
