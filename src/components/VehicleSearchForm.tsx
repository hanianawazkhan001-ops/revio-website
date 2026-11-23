"use client";

import { useState } from "react";
import { MAKE_MODELS } from "@/lib/cars";

const MONTHLY_OPTIONS = [
  "Any budget",
  "Up to £200 / month",
  "Up to £250 / month",
  "Up to £300 / month",
  "Up to £350 / month",
  "Up to £400 / month",
  "Up to £500 / month",
  "£500+ / month",
];

const CASH_OPTIONS = [
  "Any budget",
  "Up to £10,000",
  "Up to £15,000",
  "Up to £20,000",
  "Up to £25,000",
  "Up to £30,000",
  "Up to £40,000",
  "Up to £50,000",
  "Up to £60,000",
];

export default function VehicleSearchForm({
  submitLabel = "Search Cars",
}: {
  submitLabel?: string;
}) {
  const [make, setMake] = useState("");
  const [mode, setMode] = useState<"monthly" | "cash">("monthly");

  const models = make ? MAKE_MODELS[make] ?? [] : [];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Prototype search only — this will filter real listings once Leg D connects live data.");
      }}
      className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.3fr_auto]"
    >
      <div className="rounded-xl bg-white p-3 text-revio-black">
        <label className="mb-1.5 block text-[8px] font-black uppercase tracking-wider text-[#8A8D91]">
          Make
        </label>
        <select
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className="w-full bg-transparent text-[11px] font-bold outline-none"
        >
          <option value="">Any make</option>
          {Object.keys(MAKE_MODELS).map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="rounded-xl bg-white p-3 text-revio-black">
        <label className="mb-1.5 block text-[8px] font-black uppercase tracking-wider text-[#8A8D91]">
          Model
        </label>
        <select
          disabled={!make}
          className="w-full bg-transparent text-[11px] font-bold outline-none disabled:text-[#B0B2B6]"
        >
          {make ? (
            <>
              <option value="">Any model</option>
              {models.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </>
          ) : (
            <option>Choose a make first</option>
          )}
        </select>
      </div>

      <div className="rounded-xl bg-white p-3 text-revio-black">
        <label className="mb-1.5 block text-[8px] font-black uppercase tracking-wider text-[#8A8D91]">
          Budget
        </label>
        <div className="flex items-center gap-2">
          <div className="flex flex-none rounded-lg bg-[#383A3E] p-1">
            {(["monthly", "cash"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`rounded-md px-2.5 py-1.5 text-[8px] font-black capitalize ${
                  mode === m ? "bg-white text-revio-black" : "text-[#C8CACD]"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <select className="w-full bg-transparent text-[11px] font-bold outline-none">
            {(mode === "monthly" ? MONTHLY_OPTIONS : CASH_OPTIONS).map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="rounded-xl bg-revio-yellow px-6 py-3 text-[11px] font-black text-revio-black"
      >
        {submitLabel}
      </button>
    </form>
  );
}
