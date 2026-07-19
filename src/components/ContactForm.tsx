"use client";

import { useState } from "react";
import { m } from "motion/react";
import { site } from "@/lib/content";
import type { Dictionary } from "@/i18n/dictionaries";

type Status = "idle" | "submitting" | "success" | "error";

const ease = [0.22, 1, 0.36, 1] as const;

const inputClass =
  "bg-transparent border-b border-ink/20 focus:border-gold outline-none py-3 w-full transition-colors";
const labelClass = "text-xs uppercase tracking-wide text-stone";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const t = dict.contactPage.form;
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: if filled, silently treat as success without sending.
    if ((data.get("_gotcha") as string)?.length) {
      setStatus("success");
      return;
    }

    const name = (data.get("name") as string) ?? "";
    const email = (data.get("email") as string) ?? "";
    const company = (data.get("company") as string) ?? "";
    const subject = (data.get("subject") as string) ?? "";
    const message = (data.get("message") as string) ?? "";

    // Fallback: no Formspree configured — open the user's mail client.
    if (!formspreeId) {
      const mailSubject = `Tunica Group — ${subject}`;
      const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : "",
        `Subject: ${subject}`,
        "",
        message,
      ].filter(Boolean);
      const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
        mailSubject,
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
      window.location.href = mailto;
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, company, subject, message }),
      });
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(t.errorGeneric);
      }
    } catch {
      setStatus("error");
      setErrorMessage(t.errorNetwork);
    }
  }

  if (status === "success") {
    return (
      <m.div
        aria-live="polite"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="flex h-full flex-col justify-center"
      >
        <p className="eyebrow">{t.successKicker}</p>
        <h2 className="mt-4 font-serif text-3xl text-ink">{t.successTitle}</h2>
        <p className="mt-4 max-w-md text-stone">
          {t.successBody}{" "}
          <a href={`mailto:${site.email}`} className="link-underline text-ink" dir="ltr">
            {site.email}
          </a>
          .
        </p>
      </m.div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      {/* Honeypot — hidden from users, visible to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input type="text" id="_gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelClass}>
          {t.name} <span className="text-gold">*</span>
        </label>
        <input type="text" id="name" name="name" required autoComplete="name" className={inputClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClass}>
          {t.email} <span className="text-gold">*</span>
        </label>
        <input type="email" id="email" name="email" required autoComplete="email" className={inputClass} dir="ltr" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className={labelClass}>
          {t.company}
        </label>
        <input type="text" id="company" name="company" autoComplete="organization" className={inputClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className={labelClass}>
          {t.subject} <span className="text-gold">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue={t.subjects[0]}
          className={`${inputClass} cursor-pointer`}
        >
          {t.subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          {t.message} <span className="text-gold">*</span>
        </label>
        <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-y`} />
      </div>

      <div aria-live="polite" className="min-h-[1.25rem]">
        {status === "error" ? (
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease }}
            className="text-sm text-stone"
            role="alert"
          >
            {errorMessage}
          </m.p>
        ) : null}
      </div>

      <div>
        <button
          type="submit"
          disabled={submitting}
          className="btn btn-solid disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? t.sending : t.send}
        </button>
      </div>
    </form>
  );
}
