import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Revio | Revio",
  description: "About Revio. One place to buy, finance or sell your car.",
};

const JOURNEYS = [
  {
    no: "01",
    title: "Find a Car",
    desc: "Browse cars from Revio partner dealerships and enquire directly through the vehicle page.",
    href: "/cars",
    cta: "Browse Cars",
  },
  {
    no: "02",
    title: "Finance a Car",
    desc: "Complete your finance application and check the options available to you through Revio.",
    href: "/finance",
    cta: "Check Eligibility",
  },
  {
    no: "03",
    title: "Sell Your Car",
    desc: "Tell us about your car, receive an estimated valuation and let Revio work on your best offer.",
    href: "/sell",
    cta: "Sell Your Car",
  },
];

const POINTS = [
  {
    no: "01",
    title: "Cars from partner dealerships",
    desc: "Browse vehicles listed through dealerships partnered with Revio.",
  },
  {
    no: "02",
    title: "Finance through Revio",
    desc: "Apply for finance without needing to leave the Revio journey.",
  },
  {
    no: "03",
    title: "Sell your current car",
    desc: "Submit your vehicle details, receive an estimated valuation and let Revio gather interest for your car.",
  },
  {
    no: "04",
    title: "One connected experience",
    desc: "One brand and one place to handle the main stages of changing your car.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="border-b border-revio-line bg-revio-paper py-16 md:py-20">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-6 md:grid-cols-[1.25fr_.75fr] md:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[.15em] text-[#8D7100]">
              About Revio
            </p>
            <h1 className="mt-2 max-w-2xl text-5xl font-black leading-[0.95] tracking-tight text-revio-black md:text-[78px] md:leading-[0.91] md:tracking-[-0.065em]">
              One place to buy, finance or sell your car.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-[1.7] text-[#55595E]">
              Revio brings the main parts of the car journey together in one
              place, from finding your next car, to arranging finance, to
              selling the one you already own.
            </p>
          </div>

          <div className="relative min-h-[210px] overflow-clip rounded-[22px] bg-[#111] p-7 text-white md:min-h-[260px]">
            <div className="pointer-events-none absolute -right-16 -top-20 size-[190px] rounded-full border-[38px] border-revio-yellow" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 size-[110px] rounded-full border border-white/10" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="text-4xl font-black leading-[0.95] tracking-tight md:text-[44px]">
                BUY.
                <br />
                FINANCE.
                <br />
                SELL.
              </div>
              <p className="mt-6 text-[11px] leading-[1.65] text-[#AFB2B6]">
                Built for the way people buy, finance and sell cars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-13 md:py-18">
        <Reveal
          as="div"
          className="mx-auto grid max-w-[1120px] gap-7 px-6 py-13 md:grid-cols-[.8fr_1.2fr] md:gap-[70px] md:py-18"
        >
          <div>
            <p className="text-[11px] font-black uppercase tracking-[.15em] text-[#8D7100]">
              What is Revio?
            </p>
            <h2 className="mt-1 text-[35px] leading-none tracking-tight text-revio-black md:text-[42px] md:tracking-[-0.05em]">
              The car journey, all in one place.
            </h2>
          </div>

          <div className="grid gap-4">
            <p className="text-sm leading-[1.75] text-[#5D6166]">
              Revio is an automotive marketplace and car finance platform
              that connects customers with vehicles from partner
              dealerships across the UK.
            </p>
            <p className="text-sm leading-[1.75] text-[#5D6166]">
              Customers can search for a car, make a cash enquiry, apply for
              finance, or submit their current vehicle to sell, all through
              Revio.
            </p>
            <p className="text-sm leading-[1.75] text-[#5D6166]">
              Rather than sending customers between different websites and
              services, Revio keeps the journey connected from start to
              finish.
            </p>
          </div>
        </Reveal>
      </section>

      {/* JOURNEYS */}
      <section className="bg-[#111] py-13 text-white md:py-18">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[.15em] text-[#8D7100]">
                Revio
              </p>
              <h2 className="mt-1 text-[39px] leading-none tracking-tight md:text-[48px] md:tracking-[-0.05em]">
                Three simple journeys.
              </h2>
            </div>
            <p className="max-w-[430px] text-[11px] leading-[1.65] text-[#A8ABB0]">
              Whether you&rsquo;re buying, financing or selling, Revio gives
              you a clear place to start.
            </p>
          </div>

          <div className="grid gap-3.5 md:grid-cols-3">
            {JOURNEYS.map((j, i) => (
              <Reveal key={j.no} delay={i * 90}>
                <article className="group flex min-h-[220px] flex-col justify-between rounded-[18px] border border-[#2B2C2F] bg-[#18191B] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-revio-yellow/30 hover:bg-[#1D1E20] md:min-h-[260px]">
                  <div className="text-3xl font-black tracking-tight text-revio-yellow">
                    {j.no}
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl tracking-tight">{j.title}</h3>
                    <p className="text-[11px] leading-[1.65] text-[#A8ABB0]">
                      {j.desc}
                    </p>
                    <Link
                      href={j.href}
                      className="mt-6 flex items-center gap-1 text-[10px] font-black text-revio-yellow"
                    >
                      {j.cta}{" "}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENT */}
      <section className="bg-white py-13 md:py-19">
        <div className="mx-auto grid max-w-[1120px] gap-6 px-6 md:grid-cols-2 md:gap-[50px]">
          <Reveal className="flex min-h-[330px] flex-col justify-between rounded-[22px] bg-revio-yellow p-7 transition-shadow duration-300 hover:shadow-xl md:min-h-[430px] md:p-8">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[.15em] text-[#725B00]">
                Why Revio?
              </p>
              <h2 className="mt-2 text-[39px] leading-[0.95] tracking-tight text-revio-black md:text-[48px] md:tracking-[-0.055em]">
                Everything in one place.
              </h2>
            </div>
            <p className="max-w-[480px] text-xs leading-[1.65] text-[#51470F]">
              Revio is designed around the way customers actually move
              between buying, financing and selling cars.
            </p>
          </Reveal>

          <Reveal delay={90} className="grid border-t border-revio-line">
            {POINTS.map((p) => (
              <div
                key={p.no}
                className="grid grid-cols-[42px_1fr] gap-3.5 border-b border-revio-line py-5 transition-colors duration-200 hover:bg-revio-paper/60 md:grid-cols-[54px_1fr]"
              >
                <span className="text-xl font-black tracking-tight text-revio-black">
                  {p.no}
                </span>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-revio-black">
                    {p.title}
                  </h3>
                  <p className="text-[10px] leading-[1.65] text-revio-muted">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-revio-line bg-revio-paper py-13 md:py-17">
        <Reveal
          as="div"
          className="mx-auto grid max-w-[1120px] items-center gap-6 px-6 md:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="text-[11px] font-black uppercase tracking-[.15em] text-[#8D7100]">
              Start with Revio
            </p>
            <h2 className="mt-1 text-[37px] leading-none tracking-tight text-revio-black md:text-[44px] md:tracking-[-0.05em]">
              What are you looking to do?
            </h2>
          </div>

          <div className="grid gap-2 sm:flex sm:flex-wrap">
            <Link
              href="/cars"
              className="btn-tactile rounded-xl bg-revio-black px-5 py-3.5 text-center text-xs font-black text-white hover:shadow-lg"
            >
              Find a Car
            </Link>
            <Link
              href="/finance"
              className="btn-tactile rounded-xl bg-revio-yellow px-5 py-3.5 text-center text-xs font-black text-revio-black hover:shadow-lg"
            >
              Finance a Car
            </Link>
            <Link
              href="/sell"
              className="btn-tactile rounded-xl border border-revio-line bg-white px-5 py-3.5 text-center text-xs font-black text-revio-black hover:shadow-lg"
            >
              Sell Your Car
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
