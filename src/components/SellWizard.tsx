"use client";

import { useState } from "react";
import type { VehicleLookupResult } from "@/lib/vehicleLookup";

const STEP_COPY: Record<number, [string, string]> = {
  1: ["Tell us which car you're selling.", "Enter the registration and current mileage so we can identify the vehicle."],
  2: ["Tell us about its condition.", "A few details help us understand the car properly."],
  3: ["Add some photos.", "Clear photos help show the vehicle's condition."],
  4: ["Your details.", "Tell us how to contact you about your car."],
};

const WARNING_LIGHTS = [
  "Engine management",
  "ABS / brakes",
  "Airbag",
  "Tyre pressure",
  "Battery / charging",
  "AdBlue / emissions",
  "Other",
];

const DAMAGE_TYPES = [
  "Scratches",
  "Dents",
  "Alloy wheel damage",
  "Windscreen damage",
  "Paint damage",
  "Interior damage",
  "Other",
];

const PHOTO_SLOTS = [
  ["Front", "Front exterior"],
  ["Rear", "Rear exterior"],
  ["Driver side", "Full side view"],
  ["Passenger side", "Full side view"],
  ["Interior", "Front cabin"],
  ["Dashboard / mileage", "Mileage visible"],
  ["Damage", "If applicable"],
];

function toggleInSet(set: Set<string>, value: string) {
  const next = new Set(set);
  next.has(value) ? next.delete(value) : next.add(value);
  return next;
}

export default function SellWizard() {
  const [step, setStep] = useState(1);
  const [reg, setReg] = useState("");
  const [mileage, setMileage] = useState("");
  const [vehicle, setVehicle] = useState<VehicleLookupResult | null>(null);
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState<string | null>(null);

  const [service, setService] = useState("");
  const [keys, setKeys] = useState("");
  const [outstandingFinance, setOutstandingFinance] = useState("");
  const [condition, setCondition] = useState("");
  const [warning, setWarning] = useState("");
  const [warningLights, setWarningLights] = useState<Set<string>>(new Set());
  const [damage, setDamage] = useState("");
  const [damageTypes, setDamageTypes] = useState<Set<string>>(new Set());
  const [notes, setNotes] = useState("");

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [title, desc] = STEP_COPY[step];

  const progress = (
    <div className="mx-auto mb-6 grid max-w-[900px] grid-cols-4 overflow-hidden rounded-xl border border-revio-line bg-white">
      {["1 · Your Car", "2 · Condition", "3 · Photos", "4 · Your Details"].map((label, i) => (
        <div
          key={label}
          className={`border-b-[3px] px-3 py-4 text-center text-[9px] font-black uppercase tracking-wider transition-colors duration-300 ${
            i + 1 === step
              ? "border-revio-yellow text-revio-black"
              : i + 1 < step
                ? "border-transparent text-revio-black"
                : "border-transparent text-[#9a9ca0]"
          }`}
        >
          {label}
        </div>
      ))}
    </div>
  );

  async function findCar() {
    if (!reg.trim() || lookupLoading) return;
    setLookupLoading(true);
    setLookupError(null);
    setVehicle(null);
    try {
      const res = await fetch("/api/vehicle-lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registration: reg }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setLookupError(body.error ?? "Something went wrong looking up that registration.");
        return;
      }
      setVehicle(body.vehicle);
    } catch {
      setLookupError("Something went wrong looking up that registration.");
    } finally {
      setLookupLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting || submitted) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/sell", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          registration: reg.toUpperCase() || "Not entered",
          mileage,
          serviceHistory: service,
          keys,
          outstandingFinance,
          condition,
          warningLights: warning === "yes" ? Array.from(warningLights) : [],
          damage: damage === "yes" ? Array.from(damageTypes) : [],
          notes,
          dvlaMake: vehicle?.make || null,
          dvlaColour: vehicle?.colour || null,
          dvlaFuelType: vehicle?.fuelType || null,
          dvlaYear: vehicle?.yearOfManufacture ?? null,
          fullName,
          mobile,
          email,
          postcode,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong sending your details. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="fade-in-up mx-auto max-w-[900px] rounded-[22px] border border-revio-line bg-white p-10 text-center shadow-xl">
        <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-revio-yellow text-2xl font-black">
          ✓
        </div>
        <h2 className="text-3xl font-black tracking-tight text-revio-black">
          Thanks — we've got your car.
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-revio-muted">
          Revio will gather interest and offers for your{" "}
          {vehicle ? `${vehicle.make} (${reg.toUpperCase()})` : "car"} and get
          back to you, usually within 2 to 4 working days.
        </p>
      </div>
    );
  }

  return (
    <>
      {progress}
      <div className="mx-auto max-w-[900px] overflow-hidden rounded-[22px] border border-revio-line bg-white shadow-xl">
      <div className="border-b border-revio-line px-7 pb-5 pt-7">
        <p className="text-[9px] font-black uppercase tracking-[.1em] text-revio-yellow-deep">
          Step {step} of 4
        </p>
        <h2 className="mt-1 text-4xl font-black tracking-tight text-revio-black">{title}</h2>
        <p className="mt-1.5 max-w-[650px] text-xs leading-relaxed text-revio-muted">{desc}</p>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <section key={1} className="fade-in-up px-7 pb-8 pt-6">
            <div className="grid gap-3.5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                  Vehicle registration
                </label>
                <div className="flex max-w-[390px] overflow-hidden rounded-xl border-2 border-revio-black">
                  <div className="flex w-12 flex-col items-center justify-center bg-[#1747A6] text-[8px] font-black text-white">
                    <span>🇬🇧</span>
                    <strong className="text-xs">GB</strong>
                  </div>
                  <input
                    value={reg}
                    onChange={(e) => setReg(e.target.value)}
                    maxLength={8}
                    placeholder="AB12 CDE"
                    className="w-full bg-[#F9D64A] px-4 py-3.5 text-2xl font-black uppercase tracking-wider text-revio-black outline-none placeholder:text-revio-black/40"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                  Current mileage
                </label>
                <input
                  required
                  type="number"
                  min={0}
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                  placeholder="31,200"
                  className="w-full rounded-xl border border-revio-line px-3.5 py-3.5 text-sm outline-none transition-colors duration-150 focus:border-revio-black"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={findCar}
              disabled={!reg.trim() || lookupLoading}
              className="btn-tactile mt-4 rounded-xl bg-revio-black px-5 py-3.5 text-sm font-black text-white hover:shadow-lg disabled:opacity-60"
            >
              {lookupLoading ? "Looking up…" : "Find My Car"}
            </button>

            {lookupError && (
              <p className="fade-in-up mt-4 rounded-xl border border-[#F0C9BC] bg-[#FBEFEC] px-4 py-3 text-xs text-[#8A3B23]">
                {lookupError} You can still continue to the next step and describe your car manually.
              </p>
            )}

            {vehicle && (
              <div className="fade-in-up mt-4 grid grid-cols-1 items-center gap-4 rounded-2xl border border-revio-line bg-revio-paper p-4 sm:grid-cols-[1fr_auto]">
                <div>
                  <span className="mb-1.5 inline-block rounded-full bg-revio-yellow px-2 py-1 text-[8px] font-black uppercase tracking-wide">
                    Vehicle found
                  </span>
                  <strong className="block text-base text-revio-black">
                    {vehicle.make || "Unknown make"}
                  </strong>
                  <span className="text-[10px] text-revio-muted">
                    {[vehicle.yearOfManufacture, vehicle.fuelType, vehicle.colour]
                      .filter(Boolean)
                      .join(" · ") || "Details confirmed with the DVLA"}
                  </span>
                </div>
                <b className="text-sm font-black text-revio-black">{vehicle.registration}</b>
              </div>
            )}

            <div className="mt-6 flex justify-end border-t border-revio-line pt-5">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-tactile min-w-[140px] rounded-xl bg-revio-yellow px-5 py-3.5 text-sm font-black text-revio-black hover:shadow-lg"
              >
                Continue →
              </button>
            </div>
          </section>
        )}

        {step === 2 && (
          <section key={2} className="fade-in-up px-7 pb-8 pt-6">
            <ChoiceQuestion
              label="Service history"
              options={["Full", "Part", "None"]}
              value={service}
              onChange={setService}
            />
            <ChoiceQuestion
              label="Number of keys"
              options={["1 key", "2+ keys"]}
              value={keys}
              onChange={setKeys}
            />
            <ChoiceQuestion
              label="Outstanding finance?"
              options={["No", "Yes"]}
              value={outstandingFinance}
              onChange={setOutstandingFinance}
            />

            <div className="border-b border-[#ECEDE9] py-4.5">
              <span className="mb-2 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                General condition
              </span>
              <div className="grid gap-2 sm:grid-cols-4">
                {[
                  ["Excellent", "Very clean, minimal marks."],
                  ["Good", "Normal age-related wear."],
                  ["Fair", "Noticeable scratches, dents or wear."],
                  ["Poor", "Significant cosmetic or mechanical issues."],
                ].map(([label, desc]) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setCondition(label)}
                    className={`rounded-xl border p-3 text-left transition-colors duration-150 ${
                      condition === label
                        ? "border-2 border-revio-black bg-revio-paper"
                        : "border-revio-line bg-white hover:border-revio-black/40"
                    }`}
                  >
                    <strong className="mb-1 block text-xs text-revio-black">{label}</strong>
                    <span className="text-[8px] leading-snug text-revio-muted">{desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-b border-[#ECEDE9] py-4.5">
              <ChoiceQuestion
                label="Any warning lights showing?"
                options={["No", "Yes"]}
                value={warning === "yes" ? "Yes" : warning === "no" ? "No" : ""}
                onChange={(v) => setWarning(v === "Yes" ? "yes" : "no")}
                noBorder
              />
              {warning === "yes" && (
                <div className="fade-in-up mt-3 rounded-xl border border-revio-line bg-revio-paper p-4">
                  <span className="mb-2 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                    Which warning light(s)?
                  </span>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {WARNING_LIGHTS.map((w) => (
                      <button
                        key={w}
                        type="button"
                        onClick={() => setWarningLights((s) => toggleInSet(s, w))}
                        className={`rounded-lg border px-2.5 py-2.5 text-[9px] font-bold transition-colors duration-150 ${
                          warningLights.has(w)
                            ? "border-revio-black bg-revio-black text-white"
                            : "border-revio-line bg-white text-revio-black hover:border-revio-black/40"
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-[#ECEDE9] py-4.5">
              <ChoiceQuestion
                label="Any damage?"
                options={["No", "Yes"]}
                value={damage === "yes" ? "Yes" : damage === "no" ? "No" : ""}
                onChange={(v) => setDamage(v === "Yes" ? "yes" : "no")}
                noBorder
              />
              {damage === "yes" && (
                <div className="fade-in-up mt-3 rounded-xl border border-revio-line bg-revio-paper p-4">
                  <span className="mb-2 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                    Tell us what applies
                  </span>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {DAMAGE_TYPES.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDamageTypes((s) => toggleInSet(s, d))}
                        className={`rounded-lg border px-2.5 py-2.5 text-[9px] font-bold transition-colors duration-150 ${
                          damageTypes.has(d)
                            ? "border-revio-black bg-revio-black text-white"
                            : "border-revio-line bg-white text-revio-black hover:border-revio-black/40"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4.5">
              <label className="mb-1.5 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                Anything else we should know?{" "}
                <span className="normal-case tracking-normal text-[#9a9ca0]">Optional</span>
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add any extra information about the car here."
                className="min-h-[105px] w-full rounded-xl border border-revio-line px-3.5 py-3.5 text-sm outline-none transition-colors duration-150 focus:border-revio-black"
              />
            </div>

            <div className="mt-6 flex justify-between gap-2.5 border-t border-revio-line pt-5">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-tactile min-w-[140px] rounded-xl border border-revio-line bg-white px-5 py-3.5 text-sm font-black text-revio-black hover:bg-revio-paper"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="btn-tactile min-w-[140px] rounded-xl bg-revio-yellow px-5 py-3.5 text-sm font-black text-revio-black hover:shadow-lg"
              >
                Continue →
              </button>
            </div>
          </section>
        )}

        {step === 3 && (
          <section key={3} className="fade-in-up px-7 pb-8 pt-6">
            <div className="grid gap-2.5 sm:grid-cols-3">
              {PHOTO_SLOTS.map(([label, hint]) => (
                <label
                  key={label}
                  className="flex min-h-[126px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#BFC1BD] bg-revio-paper p-4 text-center transition-colors duration-150 hover:border-revio-black/40 hover:bg-white"
                >
                  <strong className="mb-1 text-[10px] text-revio-black">{label}</strong>
                  <span className="mb-2 text-[8px] text-revio-muted">{hint}</span>
                  <input type="file" accept="image/*" className="max-w-full text-[8px]" />
                </label>
              ))}
            </div>
            <p className="mt-3 text-[8px] leading-relaxed text-revio-muted">
              Clear photos help us understand the condition of your car
              accurately. Photo uploads aren&rsquo;t wired to storage yet —
              that&rsquo;s a later step once a backend is connected.
            </p>

            <div className="mt-6 flex justify-between gap-2.5 border-t border-revio-line pt-5">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-tactile min-w-[140px] rounded-xl border border-revio-line bg-white px-5 py-3.5 text-sm font-black text-revio-black hover:bg-revio-paper"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="btn-tactile min-w-[140px] rounded-xl bg-revio-yellow px-5 py-3.5 text-sm font-black text-revio-black hover:shadow-lg"
              >
                Continue →
              </button>
            </div>
          </section>
        )}

        {step === 4 && (
          <section key={4} className="fade-in-up px-7 pb-8 pt-6">
            <div className="grid gap-3.5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                  Full name
                </label>
                <input
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-revio-line px-3.5 py-3.5 text-sm outline-none transition-colors duration-150 focus:border-revio-black"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                  Mobile number
                </label>
                <input
                  required
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="07..."
                  className="w-full rounded-xl border border-revio-line px-3.5 py-3.5 text-sm outline-none transition-colors duration-150 focus:border-revio-black"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-revio-line px-3.5 py-3.5 text-sm outline-none transition-colors duration-150 focus:border-revio-black"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                  Postcode
                </label>
                <input
                  required
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="e.g. HA9 0AA"
                  className="w-full rounded-xl border border-revio-line px-3.5 py-3.5 text-sm outline-none transition-colors duration-150 focus:border-revio-black"
                />
              </div>
            </div>

            <p className="mt-4 text-[8px] leading-relaxed text-revio-muted">
              By submitting your vehicle, you acknowledge that Revio will
              process the information you provide, including sharing
              relevant vehicle details with selected dealers in our network,
              in accordance with our Privacy Policy.
            </p>

            {submitError && (
              <p className="mt-4 rounded-lg bg-[#FBEFEC] px-3.5 py-2.5 text-xs text-[#8A3B23]">
                {submitError}
              </p>
            )}

            <div className="mt-6 flex justify-between gap-2.5 border-t border-revio-line pt-5">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="btn-tactile min-w-[140px] rounded-xl border border-revio-line bg-white px-5 py-3.5 text-sm font-black text-revio-black hover:bg-revio-paper"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="btn-tactile min-w-[140px] rounded-xl bg-revio-yellow px-5 py-3.5 text-sm font-black text-revio-black hover:shadow-lg disabled:opacity-60"
              >
                {submitting ? "Submitting…" : "Submit Your Car →"}
              </button>
            </div>
          </section>
        )}
      </form>
      </div>
    </>
  );
}

function ChoiceQuestion({
  label,
  options,
  value,
  onChange,
  noBorder = false,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  noBorder?: boolean;
}) {
  return (
    <div className={noBorder ? "" : "border-b border-[#ECEDE9] py-4.5 first:pt-0"}>
      <span className="mb-2 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`rounded-lg border px-3.5 py-2.5 text-[10px] font-bold transition-colors duration-150 ${
              value === opt
                ? "border-revio-black bg-revio-black text-white"
                : "border-revio-line bg-white text-revio-black hover:border-revio-black/40"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
