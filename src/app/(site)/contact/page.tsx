import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us | Revio",
  description: "Contact Revio by phone, email or visit us at our London address.",
};

const HOURS = [
  ["Saturday", "10 am to 7 pm"],
  ["Sunday", "10 am to 5 pm"],
  ["Monday", "9 am to 7 pm"],
  ["Tuesday", "9 am to 7 pm"],
  ["Wednesday", "9 am to 7 pm"],
  ["Thursday", "9 am to 7 pm"],
  ["Friday", "9 am to 7 pm"],
];

const SOCIALS = ["Instagram", "TikTok", "Facebook"];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-revio-line bg-revio-paper py-14 md:py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="text-[11px] font-black uppercase tracking-[.15em] text-revio-yellow-deep">
            Contact Us
          </p>
          <h1 className="mt-2 text-5xl font-black tracking-tight text-revio-black">
            Get in touch.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-revio-muted">
            Contact Revio by phone, email or visit us at our London
            address.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="mx-auto grid max-w-[1120px] gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
          <Reveal as="div" className="grid gap-8">
            <div>
              <h2 className="mb-1 text-xs font-black uppercase tracking-wider text-revio-muted">
                Phone
              </h2>
              <a
                href="tel:0207777777777"
                className="text-2xl font-bold text-revio-black transition-colors duration-150 hover:text-revio-yellow-deep"
              >
                020 7777 7777
              </a>
            </div>

            <div>
              <h2 className="mb-1 text-xs font-black uppercase tracking-wider text-revio-muted">
                Email
              </h2>
              <a
                href="mailto:Contact@revio.co.uk"
                className="text-2xl font-bold text-revio-black transition-colors duration-150 hover:text-revio-yellow-deep"
              >
                Contact@revio.co.uk
              </a>
            </div>

            <div>
              <h2 className="mb-1 text-xs font-black uppercase tracking-wider text-revio-muted">
                Address
              </h2>
              <p className="text-lg font-semibold leading-snug text-revio-black">
                45 Circus Road
                <br />
                St John Wood
                <br />
                London
                <br />
                NW8 9JH
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xs font-black uppercase tracking-wider text-revio-muted">
                Follow Revio
              </h2>
              <div className="flex flex-wrap gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="btn-tactile rounded-full border border-revio-line px-4 py-2 text-xs font-bold text-revio-black transition-colors duration-150 hover:bg-revio-paper"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal as="div" delay={100} className="rounded-2xl border border-revio-line p-6">
            <h2 className="mb-4 text-lg font-bold text-revio-black">
              Opening Hours
            </h2>
            <div className="grid">
              {HOURS.map(([day, hours]) => (
                <div
                  key={day}
                  className="flex justify-between border-b border-revio-line py-3 text-sm transition-colors duration-150 last:border-b-0 hover:bg-revio-paper/60"
                >
                  <strong className="text-revio-black">{day}</strong>
                  <span className="text-revio-muted">{hours}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
