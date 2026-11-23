"use client";

import { useMemo, useState } from "react";
import { MAKE_MODELS, BODY_TYPES, FUEL_TYPES, type BodyType, type Car } from "@/lib/cars";
import CarCard from "@/components/CarCard";

const MONTHLY_OPTIONS: [string, number | null][] = [
  ["Any budget", null],
  ["Up to £200 / month", 200],
  ["Up to £250 / month", 250],
  ["Up to £300 / month", 300],
  ["Up to £350 / month", 350],
  ["Up to £400 / month", 400],
  ["Up to £500 / month", 500],
];

const CASH_OPTIONS: [string, number | null][] = [
  ["Any budget", null],
  ["Up to £10,000", 10000],
  ["Up to £15,000", 15000],
  ["Up to £20,000", 20000],
  ["Up to £25,000", 25000],
  ["Up to £30,000", 30000],
  ["Up to £40,000", 40000],
  ["Up to £50,000", 50000],
  ["Up to £60,000", 60000],
];

const MILEAGE_OPTIONS: [string, number | null][] = [
  ["Any mileage", null],
  ["Up to 10,000 miles", 10000],
  ["Up to 20,000 miles", 20000],
  ["Up to 30,000 miles", 30000],
  ["Up to 50,000 miles", 50000],
  ["Up to 75,000 miles", 75000],
];

const FUELS = FUEL_TYPES;
const GEARBOXES = ["Automatic", "Manual"] as const;
const SORTS = [
  "Recommended",
  "Newest first",
  "Price: low to high",
  "Price: high to low",
  "Lowest mileage",
] as const;

function toggle<T>(set: Set<T>, value: T) {
  const next = new Set(set);
  next.has(value) ? next.delete(value) : next.add(value);
  return next;
}

export default function CarsExplorer({ initialCars }: { initialCars: Car[] }) {
  const allCars = initialCars;
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [budgetMode, setBudgetMode] = useState<"monthly" | "cash">("monthly");
  const [budgetMax, setBudgetMax] = useState<number | null>(null);
  const [bodyTypes, setBodyTypes] = useState<Set<BodyType>>(new Set());
  const [fuels, setFuels] = useState<Set<Car["fuel"]>>(new Set());
  const [gearboxes, setGearboxes] = useState<Set<Car["gearbox"]>>(new Set());
  const [mileageMax, setMileageMax] = useState<number | null>(null);
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Recommended");
  const [mobileOpen, setMobileOpen] = useState(false);

  const models = make ? MAKE_MODELS[make] ?? [] : [];

  function clearAll() {
    setMake("");
    setModel("");
    setBudgetMax(null);
    setBodyTypes(new Set());
    setFuels(new Set());
    setGearboxes(new Set());
    setMileageMax(null);
  }

  const results = useMemo(() => {
    let list = allCars.filter((car) => {
      if (make && car.make !== make) return false;
      if (model && !car.model.startsWith(model)) return false;
      if (budgetMax != null) {
        const price = budgetMode === "monthly" ? car.monthlyPrice : car.cashPrice;
        if (price > budgetMax) return false;
      }
      if (bodyTypes.size && !bodyTypes.has(car.bodyType)) return false;
      if (fuels.size && !fuels.has(car.fuel)) return false;
      if (gearboxes.size && !gearboxes.has(car.gearbox)) return false;
      if (mileageMax != null && car.mileage > mileageMax) return false;
      return true;
    });

    list = [...list];
    switch (sort) {
      case "Newest first":
        list.sort((a, b) => b.year - a.year);
        break;
      case "Price: low to high":
        list.sort((a, b) => a.cashPrice - b.cashPrice);
        break;
      case "Price: high to low":
        list.sort((a, b) => b.cashPrice - a.cashPrice);
        break;
      case "Lowest mileage":
        list.sort((a, b) => a.mileage - b.mileage);
        break;
    }
    return list;
  }, [allCars, make, model, budgetMode, budgetMax, bodyTypes, fuels, gearboxes, mileageMax, sort]);

  const budgetOptions = budgetMode === "monthly" ? MONTHLY_OPTIONS : CASH_OPTIONS;

  const filterFields = (
    <>
      <div className="flex items-center justify-between border-b border-revio-line p-4">
        <strong className="text-sm text-revio-black">Filter cars</strong>
        <button
          type="button"
          onClick={clearAll}
          className="text-[9px] font-black text-revio-yellow-deep"
        >
          Clear all
        </button>
      </div>

      <div className="border-b border-revio-line p-4">
        <label className="mb-2 block text-[9px] font-black uppercase tracking-wider text-revio-black">
          Make
        </label>
        <select
          value={make}
          onChange={(e) => {
            setMake(e.target.value);
            setModel("");
          }}
          className="w-full rounded-lg border border-revio-line px-2.5 py-2 text-[10px] font-semibold"
        >
          <option value="">All makes</option>
          {Object.keys(MAKE_MODELS).map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="border-b border-revio-line p-4">
        <label className="mb-2 block text-[9px] font-black uppercase tracking-wider text-revio-black">
          Model
        </label>
        <select
          value={model}
          disabled={!make}
          onChange={(e) => setModel(e.target.value)}
          className="w-full rounded-lg border border-revio-line px-2.5 py-2 text-[10px] font-semibold disabled:text-[#B0B2B6]"
        >
          <option value="">All models</option>
          {models.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="border-b border-revio-line p-4">
        <label className="mb-2 block text-[9px] font-black uppercase tracking-wider text-revio-black">
          Body type
        </label>
        <div className="grid gap-2">
          {BODY_TYPES.map((b) => (
            <label key={b} className="flex items-center gap-2 text-[10px] text-[#55585D]">
              <input
                type="checkbox"
                checked={bodyTypes.has(b)}
                onChange={() => setBodyTypes((s) => toggle(s, b))}
                className="accent-revio-black"
              />
              {b}
            </label>
          ))}
        </div>
      </div>

      <div className="border-b border-revio-line p-4">
        <label className="mb-2 block text-[9px] font-black uppercase tracking-wider text-revio-black">
          Fuel
        </label>
        <div className="grid gap-2">
          {FUELS.map((f) => (
            <label key={f} className="flex items-center gap-2 text-[10px] text-[#55585D]">
              <input
                type="checkbox"
                checked={fuels.has(f)}
                onChange={() => setFuels((s) => toggle(s, f))}
                className="accent-revio-black"
              />
              {f}
            </label>
          ))}
        </div>
      </div>

      <div className="border-b border-revio-line p-4">
        <label className="mb-2 block text-[9px] font-black uppercase tracking-wider text-revio-black">
          Gearbox
        </label>
        <div className="grid gap-2">
          {GEARBOXES.map((g) => (
            <label key={g} className="flex items-center gap-2 text-[10px] text-[#55585D]">
              <input
                type="checkbox"
                checked={gearboxes.has(g)}
                onChange={() => setGearboxes((s) => toggle(s, g))}
                className="accent-revio-black"
              />
              {g}
            </label>
          ))}
        </div>
      </div>

      <div className="p-4">
        <label className="mb-2 block text-[9px] font-black uppercase tracking-wider text-revio-black">
          Mileage
        </label>
        <select
          value={mileageMax ?? ""}
          onChange={(e) => setMileageMax(e.target.value ? Number(e.target.value) : null)}
          className="w-full rounded-lg border border-revio-line px-2.5 py-2 text-[10px] font-semibold"
        >
          {MILEAGE_OPTIONS.map(([label, value]) => (
            <option key={label} value={value ?? ""}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );

  return (
    <>
      <div className="mt-8 rounded-2xl bg-[#111214] p-5 shadow-xl">
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.3fr]">
          <div className="rounded-xl bg-white p-3 text-revio-black">
            <label className="mb-1.5 block text-[8px] font-black uppercase tracking-wider text-[#8A8D91]">
              Make
            </label>
            <select
              value={make}
              onChange={(e) => {
                setMake(e.target.value);
                setModel("");
              }}
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
              value={model}
              disabled={!make}
              onChange={(e) => setModel(e.target.value)}
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
                    onClick={() => {
                      setBudgetMode(m);
                      setBudgetMax(null);
                    }}
                    className={`rounded-md px-2.5 py-1.5 text-[8px] font-black capitalize ${
                      budgetMode === m ? "bg-white text-revio-black" : "text-[#C8CACD]"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
              <select
                value={budgetMax ?? ""}
                onChange={(e) => setBudgetMax(e.target.value ? Number(e.target.value) : null)}
                className="w-full bg-transparent text-[11px] font-bold outline-none"
              >
                {budgetOptions.map(([label, value]) => (
                  <option key={label} value={value ?? ""}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mt-2.5 text-[9px] text-[#9FA2A6]">
          Monthly figures are estimated. Actual finance terms depend on the
          vehicle, lender and your circumstances.
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[270px_1fr]">
        <aside className="hidden overflow-hidden rounded-2xl border border-revio-line bg-white lg:sticky lg:top-24 lg:block lg:h-fit">
          {filterFields}
        </aside>

        <div className="min-w-0">
          <div className="mb-4 flex items-center justify-between gap-5">
            <div>
              <strong className="text-2xl tracking-tight text-revio-black">
                {results.length} {results.length === 1 ? "car" : "cars"} available
              </strong>
              <span className="mt-0.5 block text-[9px] text-revio-muted">
                Showing cars from Revio partner dealerships
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="rounded-lg border border-revio-line bg-white px-3 py-2.5 text-[10px] font-black text-revio-black lg:hidden"
              >
                Filters
              </button>
              <label className="hidden text-[9px] font-bold text-revio-muted sm:inline">
                Sort by
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
                className="rounded-lg border border-revio-line px-2.5 py-2 text-[10px] font-bold"
              >
                {SORTS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {results.length > 0 ? (
            <div
              key={`${make}-${model}-${budgetMode}-${budgetMax}-${[...bodyTypes].join(",")}-${[...fuels].join(",")}-${[...gearboxes].join(",")}-${mileageMax}-${sort}`}
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {results.map((car, i) => (
                <div key={car.slug} className="fade-in-up" style={{ animationDelay: `${Math.min(i, 8) * 45}ms` }}>
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          ) : (
            <div className="fade-in-up rounded-2xl border border-revio-line bg-revio-paper p-10 text-center">
              <strong className="text-lg text-revio-black">No cars match those filters.</strong>
              <p className="mt-2 text-sm text-revio-muted">
                Try widening your search, or{" "}
                <button
                  type="button"
                  onClick={clearAll}
                  className="btn-tactile font-bold text-revio-yellow-deep"
                >
                  clear all filters
                </button>
                .
              </p>
            </div>
          )}
        </div>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[min(390px,92vw)] overflow-auto bg-white transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-revio-line bg-white p-4">
          <strong className="text-base text-revio-black">Filter cars</strong>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close filters"
            className="grid size-9 place-items-center rounded-full border border-revio-line text-lg"
          >
            ×
          </button>
        </div>
        {filterFields}
      </div>
    </>
  );
}
