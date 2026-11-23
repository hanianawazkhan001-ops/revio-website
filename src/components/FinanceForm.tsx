"use client";

import { useState } from "react";
import Link from "next/link";

type SelectedVehicle = {
  slug: string;
  label: string;
  price: number;
} | null;

const TERM_OPTIONS = ["24", "36", "48", "60"];

const EMPLOYMENT_OPTIONS = [
  "Employed full-time",
  "Employed part-time",
  "Self-employed",
  "Retired",
  "Student",
  "Unemployed",
  "Other",
];

const RESIDENTIAL_OPTIONS = ["Homeowner", "Renting", "Living with family", "Other"];

const inputClass =
  "w-full rounded-xl border border-revio-line px-3.5 py-3.5 text-sm outline-none transition-colors duration-150 focus:border-revio-black";
const labelClass =
  "mb-1.5 block text-[8px] font-black uppercase tracking-wider text-revio-muted";

export default function FinanceForm({ vehicle }: { vehicle: SelectedVehicle }) {
  const [desiredBudget, setDesiredBudget] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [termMonths, setTermMonths] = useState("48");

  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  const [employmentStatus, setEmploymentStatus] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [residentialStatus, setResidentialStatus] = useState("");

  const [marketingConsent, setMarketingConsent] = useState(false);
  const [dataConsent, setDataConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting || submitted) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/finance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vehicleSlug: vehicle?.slug ?? null,
          vehicleLabel: vehicle?.label ?? null,
          vehiclePrice: vehicle?.price ?? null,
          desiredBudget: vehicle ? null : desiredBudget ? Number(desiredBudget) : null,
          depositAmount: depositAmount ? Number(depositAmount) : null,
          termMonths,
          fullName,
          dateOfBirth,
          email,
          mobile,
          addressLine,
          city,
          postcode,
          employmentStatus,
          annualIncome: annualIncome ? Number(annualIncome) : null,
          residentialStatus,
          marketingConsent,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong sending your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="fade-in-up mx-auto max-w-[720px] rounded-[22px] border border-revio-line bg-white p-10 text-center shadow-xl">
        <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-revio-yellow text-2xl font-black">
          ✓
        </div>
        <h2 className="text-3xl font-black tracking-tight text-revio-black">
          Thanks — we&rsquo;ve received your application.
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-revio-muted">
          A member of the Revio finance team will be in touch to discuss your
          options.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[720px] rounded-[22px] border border-revio-line bg-white p-7 shadow-xl sm:p-8">
      {vehicle && (
        <div className="mb-6 flex items-center justify-between gap-4 rounded-xl border border-revio-line bg-revio-paper p-4">
          <div>
            <span className="mb-1 inline-block rounded-full bg-revio-yellow px-2 py-1 text-[8px] font-black uppercase tracking-wide">
              Applying for
            </span>
            <strong className="block text-sm text-revio-black">{vehicle.label}</strong>
          </div>
          <strong className="text-lg font-black text-revio-black">
            £{vehicle.price.toLocaleString()}
          </strong>
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid gap-7">
        <section>
          <h2 className="mb-3 text-lg font-bold text-revio-black">
            {vehicle ? "Your finance" : "Vehicle & budget"}
          </h2>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {!vehicle && (
              <div className="sm:col-span-2">
                <label className={labelClass}>Approximate vehicle price you&rsquo;re considering</label>
                <input
                  type="number"
                  min={0}
                  value={desiredBudget}
                  onChange={(e) => setDesiredBudget(e.target.value)}
                  placeholder="e.g. 20,000"
                  className={inputClass}
                />
              </div>
            )}
            <div>
              <label className={labelClass}>Deposit amount (optional)</label>
              <input
                type="number"
                min={0}
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                placeholder="e.g. 2,000"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Preferred term</label>
              <select
                value={termMonths}
                onChange={(e) => setTermMonths(e.target.value)}
                className={inputClass}
              >
                {TERM_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t} months
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="border-t border-revio-line pt-6">
          <h2 className="mb-3 text-lg font-bold text-revio-black">Your details</h2>
          <div className="grid gap-3.5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Full name</label>
              <input
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Date of birth</label>
              <input
                required
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Email address</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Mobile number</label>
              <input
                required
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="07..."
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Address</label>
              <input
                required
                value={addressLine}
                onChange={(e) => setAddressLine(e.target.value)}
                placeholder="Address line"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Town / City</label>
              <input
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Town or city"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Postcode</label>
              <input
                required
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="e.g. HA9 0AA"
                className={inputClass}
              />
            </div>
          </div>
        </section>

        <section className="border-t border-revio-line pt-6">
          <h2 className="mb-3 text-lg font-bold text-revio-black">Employment & income</h2>
          <div className="grid gap-3.5 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Employment status</label>
              <select
                required
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                className={inputClass}
              >
                <option value="" disabled>
                  Select
                </option>
                {EMPLOYMENT_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Approximate annual income</label>
              <input
                required
                type="number"
                min={0}
                value={annualIncome}
                onChange={(e) => setAnnualIncome(e.target.value)}
                placeholder="e.g. 32,000"
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Residential status</label>
              <select
                required
                value={residentialStatus}
                onChange={(e) => setResidentialStatus(e.target.value)}
                className={inputClass}
              >
                <option value="" disabled>
                  Select
                </option>
                {RESIDENTIAL_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="border-t border-revio-line pt-6">
          <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-revio-muted">
            <input
              required
              type="checkbox"
              checked={dataConsent}
              onChange={(e) => setDataConsent(e.target.checked)}
              className="mt-0.5"
            />
            I agree to Revio&rsquo;s{" "}
            <Link href="/privacy" className="font-bold text-revio-black underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="font-bold text-revio-black underline">
              Terms &amp; Conditions
            </Link>
            , and I&rsquo;m happy for Revio to share these details with our
            finance partner(s) to process my application.
          </label>
          <label className="mt-3 flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-revio-muted">
            <input
              type="checkbox"
              checked={marketingConsent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
              className="mt-0.5"
            />
            Keep me updated about Revio by email.
          </label>

          {submitError && (
            <p className="mt-4 rounded-lg bg-[#FBEFEC] px-3.5 py-2.5 text-xs text-[#8A3B23]">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting || !dataConsent}
            className="btn-tactile mt-5 w-full rounded-xl bg-revio-yellow px-5 py-3.5 text-sm font-black text-revio-black hover:shadow-lg disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Submit Application →"}
          </button>
          <p className="mt-3 text-[8px] leading-relaxed text-revio-muted">
            Submitting this form does not guarantee finance approval. A
            member of the Revio finance team will be in touch to discuss
            your options.
          </p>
        </section>
      </form>
    </div>
  );
}
