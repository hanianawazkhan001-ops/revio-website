"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: React.ReactNode };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-2.5">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-revio-line"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-6 bg-white px-5 py-4 text-left text-sm font-bold text-revio-black transition-colors duration-150 hover:bg-revio-paper"
            >
              <span>{item.question}</span>
              <span
                className={`grid size-7 flex-none place-items-center rounded-full bg-revio-yellow text-base font-black text-revio-black transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div className={`accordion-panel ${open ? "is-open" : ""}`}>
              <div className="max-w-[820px] px-5 pb-5 text-xs leading-relaxed text-revio-muted [&_strong]:text-revio-black">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
