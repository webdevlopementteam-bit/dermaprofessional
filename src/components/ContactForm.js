"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "./Icons";

const subjects = ["Product Enquiry", "Bulk / Distributor Order", "Skincare Advice", "Feedback", "Other"];

const field =
  "w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-forest";

// There is no backend yet, so submitting opens the visitor's email app with the message filled in.
export default function ContactForm({ email }) {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget));
    const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone || "-"}\n\n${f.message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const label = (text, required) => (
    <span className="mb-1.5 block text-sm text-ink/80">
      {text} {required && <span className="text-brand">*</span>}
    </span>
  );

  return (
    <form onSubmit={submit} className="mt-6 grid gap-5 sm:grid-cols-2">
      <label>
        {label("Your Name", true)}
        <input name="name" required placeholder="Enter your name" className={field} />
      </label>
      <label>
        {label("Your Email", true)}
        <input name="email" type="email" required placeholder="Enter your email" className={field} />
      </label>
      <label>
        {label("Phone Number")}
        <input name="phone" type="tel" placeholder="Enter your phone number" className={field} />
      </label>
      <label>
        {label("Subject", true)}
        <span className="relative block">
          <select name="subject" required defaultValue="" className={`${field} appearance-none pr-10`}>
            <option value="" disabled>
              Select a subject
            </option>
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
        </span>
      </label>
      <label className="sm:col-span-2">
        {label("Your Message", true)}
        <textarea name="message" required rows={6} placeholder="Type your message here..." className={`${field} resize-y`} />
      </label>
      <div className="flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
        <p className="text-sm text-leaf">{sent ? "Your email app should open with your message ready to send." : ""}</p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-forest-deep"
        >
          Send Message <ArrowRight />
        </button>
      </div>
    </form>
  );
}
