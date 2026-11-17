"use client";

import { useState } from "react";
import { whatsappHref } from "@/lib/data";
import { Whatsapp, Close } from "./Icons";

// Floating WhatsApp button, bottom-right on every page; opens a small chat card.
export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div className="w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3.5 text-white">
            <span className="grid size-10 place-items-center rounded-full bg-[#25D366]">
              <Whatsapp className="size-6" />
            </span>
            <div className="flex-1">
              <p className="font-medium leading-tight">Dermaplex Professional</p>
              <p className="text-xs text-white/80">Typically replies within minutes</p>
            </div>
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)} className="rounded-full p-1 text-white/85 hover:bg-white/10">
              <Close className="size-5" />
            </button>
          </div>
          <div className="bg-[#efe7dd] p-4">
            <p className="w-fit max-w-[90%] rounded-xl rounded-tl-none bg-white px-3.5 py-2.5 text-sm leading-relaxed text-ink shadow-sm">
              Hi there 👋
              <br />
              How can we help you? Ask us about products, prices or bulk orders.
            </p>
          </div>
          <div className="p-4 pt-3">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-medium text-white transition-colors hover:bg-[#1ebe5b]"
            >
              <Whatsapp className="size-5" /> Start Chat
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-8px_rgba(37,211,102,0.8)] transition-transform hover:scale-105 sm:size-16"
      >
        {!open && <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />}
        {open ? <Close className="size-7" /> : <Whatsapp className="relative size-8" />}
      </button>
    </div>
  );
}
