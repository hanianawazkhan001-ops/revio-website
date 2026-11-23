"use client";

import { useState } from "react";

const JOURNEYS = {
  buying: [
    ["01", "Find your car", "Search by make, model or budget."],
    ["02", "Choose how to buy", "Pay cash or apply for finance with Revio."],
    ["03", "Get your car", "Arrange collection or nationwide delivery with the dealership."],
  ],
  financing: [
    ["01", "Apply for Finance", "Complete a quick application with a soft credit search only."],
    [
      "02",
      "Find your options",
      "If you haven't already chosen a car, we'll help you find one that suits you and your budget.",
    ],
    [
      "03",
      "Get on the road",
      "Check the car out and once you're happy, we'll pay the dealer and you can drive away.",
    ],
  ],
  selling: [
    ["01", "Tell us about your car", "Enter your registration and a few simple details about your vehicle."],
    ["02", "Receive your offer", "We'll put your car in front of our dealer network and get you an offer."],
    ["03", "Sell when you're happy", "Happy with the offer? Accept it and arrange payment and collection."],
  ],
} as const;

type Tab = keyof typeof JOURNEYS;

export default function HowItWorksTabs() {
  const [tab, setTab] = useState<Tab>("buying");

  return (
    <>
      <div className="mt-6 flex gap-2">
        {(Object.keys(JOURNEYS) as Tab[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`btn-tactile rounded-full px-4 py-2.5 text-xs font-black capitalize transition-colors duration-200 ${
              tab === t
                ? "bg-revio-black text-white"
                : "border border-revio-line bg-white text-revio-black hover:border-revio-yellow-deep/50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div key={tab} className="mt-8 grid gap-3 sm:grid-cols-3">
        {JOURNEYS[tab].map(([num, title, desc], i) => (
          <div
            key={num}
            className="fade-in-up rounded-2xl border border-revio-line bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-revio-yellow-deep/40 hover:shadow-lg"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="mb-3 text-2xl font-black text-revio-yellow-deep">{num}</div>
            <h3 className="mb-1.5 text-base font-bold text-revio-black">{title}</h3>
            <p className="text-xs leading-relaxed text-revio-muted">{desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
