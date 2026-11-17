"use client";

import { useState } from "react";
import { ArrowRight } from "./Icons";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  if (done) {
    return <p className="mt-4 text-sm text-white/80">Thank you! You&apos;re on the list.</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="mt-4 flex max-w-md overflow-hidden rounded-full bg-white p-1"
    >
      <label htmlFor="nl-email" className="sr-only">Email address</label>
      <input
        id="nl-email"
        type="email"
        required
        placeholder="Enter your email address"
        className="min-w-0 flex-1 bg-transparent px-4 text-sm text-ink outline-none placeholder:text-muted"
      />
      <button
        type="submit"
        className="flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand"
      >
        Subscribe <ArrowRight />
      </button>
    </form>
  );
}
