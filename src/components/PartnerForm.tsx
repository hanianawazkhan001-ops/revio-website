"use client";

import Link from "next/link";
import { useState } from "react";

export default function PartnerForm() {
  const [dealershipName, setDealershipName] = useState("");
  const [contactName, setContactName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [stockCount, setStockCount] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting || submitted) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dealershipName,
          contactName,
          mobile,
          email,
          postcode,
          stockCount,
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
      <div className="fade-in-up rounded-[22px] bg-white p-9 text-center text-revio-black">
        <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-revio-yellow text-2xl font-black">
          ✓
        </div>
        <h3 className="text-2xl font-black tracking-tight">
          Thanks. We have received your details.
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-revio-muted">
          A member of the Revio team will contact you about becoming a
          partner dealership.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[22px] bg-white p-7 text-revio-black">
      <h3 className="text-2xl font-black tracking-tight">Dealership details</h3>
      <p className="mb-5 text-xs text-revio-muted">
        Complete the form below and a Revio representative will be in touch.
      </p>

      <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[9px] font-black uppercase tracking-wider text-revio-muted">
            Dealership name
          </label>
          <input
            required
            value={dealershipName}
            onChange={(e) => setDealershipName(e.target.value)}
            placeholder="Dealership name"
            className="w-full rounded-xl border border-revio-line px-3.5 py-3.5 text-sm outline-none transition-colors duration-150 focus:border-revio-black"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[9px] font-black uppercase tracking-wider text-revio-muted">
            Contact name
          </label>
          <input
            required
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-revio-line px-3.5 py-3.5 text-sm outline-none transition-colors duration-150 focus:border-revio-black"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[9px] font-black uppercase tracking-wider text-revio-muted">
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
          <label className="mb-1.5 block text-[9px] font-black uppercase tracking-wider text-revio-muted">
            Email address
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@dealership.co.uk"
            className="w-full rounded-xl border border-revio-line px-3.5 py-3.5 text-sm outline-none transition-colors duration-150 focus:border-revio-black"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[9px] font-black uppercase tracking-wider text-revio-muted">
            Dealership postcode
          </label>
          <input
            required
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="Postcode"
            className="w-full rounded-xl border border-revio-line px-3.5 py-3.5 text-sm outline-none transition-colors duration-150 focus:border-revio-black"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[9px] font-black uppercase tracking-wider text-revio-muted">
            Vehicles in stock
          </label>
          <select
            required
            value={stockCount}
            onChange={(e) => setStockCount(e.target.value)}
            className="w-full rounded-xl border border-revio-line px-3.5 py-3.5 text-sm outline-none transition-colors duration-150 focus:border-revio-black"
          >
            <option value="" disabled>
              Select
            </option>
            <option>1 to 10</option>
            <option>11 to 25</option>
            <option>26 to 50</option>
            <option>51 to 100</option>
            <option>100 plus</option>
          </select>
        </div>

        {submitError && (
          <p className="rounded-lg bg-[#FBEFEC] px-3.5 py-2.5 text-xs text-[#8A3B23] sm:col-span-2">
            {submitError}
          </p>
        )}

        <div className="mt-1 sm:col-span-2">
          <button
            type="submit"
            disabled={submitting}
            className="btn-tactile min-h-[50px] w-full rounded-xl bg-revio-yellow text-sm font-black text-revio-black hover:shadow-lg disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Become a Revio Partner"}
          </button>
        </div>

        <p className="text-[8px] leading-relaxed text-revio-muted sm:col-span-2">
          By submitting this form, you agree that Revio may contact you
          regarding a dealership partnership. Please see our{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>{" "}
          for information about how we use your details.
        </p>
      </form>
    </div>
  );
}
