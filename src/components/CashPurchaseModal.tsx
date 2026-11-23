"use client";

import { useEffect, useState } from "react";

export default function CashPurchaseModal({
  vehicleLabel,
  dealerName,
}: {
  vehicleLabel: string;
  dealerName: string;
}) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [sent, setSent] = useState(false);

  function close() {
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 200);
  }

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-tactile min-h-[49px] w-full rounded-xl bg-revio-black text-sm font-black text-white hover:shadow-lg"
      >
        Cash Purchase
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 transition-opacity duration-200 ${
            closing ? "opacity-0" : "opacity-100"
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            className={`w-full max-w-[620px] rounded-2xl bg-white p-6 shadow-2xl transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              closing ? "translate-y-2 scale-95 opacity-0" : "translate-y-0 scale-100 opacity-100"
            }`}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-revio-yellow-deep">
                  Cash Purchase
                </p>
                <h2 className="mt-1 text-2xl font-black tracking-tight text-revio-black">
                  Enquire about this {vehicleLabel}.
                </h2>
                <p className="mt-1 max-w-[430px] text-xs leading-relaxed text-revio-muted">
                  Enter your details below. Your enquiry will be sent to{" "}
                  {dealerName} as a new lead from Revio.
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="btn-tactile grid size-9 flex-none place-items-center rounded-full border border-revio-line text-lg hover:bg-revio-paper"
              >
                ×
              </button>
            </div>

            {!sent ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-5 grid gap-2.5 sm:grid-cols-2"
              >
                <div>
                  <label className="mb-1 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                    Full name
                  </label>
                  <input
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-revio-line px-3 py-2.5 text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                    Mobile number
                  </label>
                  <input
                    required
                    placeholder="07..."
                    className="w-full rounded-lg border border-revio-line px-3 py-2.5 text-sm outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@email.com"
                    className="w-full rounded-lg border border-revio-line px-3 py-2.5 text-sm outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-[8px] font-black uppercase tracking-wider text-revio-muted">
                    Message
                  </label>
                  <textarea
                    placeholder={`I'm interested in this ${vehicleLabel}.`}
                    className="min-h-[95px] w-full rounded-lg border border-revio-line px-3 py-2.5 text-sm outline-none"
                  />
                </div>
                <p className="text-[8px] leading-relaxed text-revio-muted sm:col-span-2">
                  Dealer contact details are not displayed publicly. This
                  form will send a real enquiry to {dealerName} once Leg D
                  connects it to a backend.
                </p>
                <button
                  type="submit"
                  className="btn-tactile rounded-xl bg-revio-yellow px-5 py-3.5 text-sm font-black text-revio-black hover:shadow-lg sm:col-span-2"
                >
                  Send Enquiry to {dealerName} →
                </button>
              </form>
            ) : (
              <div className="mt-5 rounded-xl bg-revio-paper p-4 text-sm leading-relaxed text-revio-black">
                Enquiry captured. Once Leg D connects a backend, this will be
                sent to {dealerName} as a real Revio lead.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
