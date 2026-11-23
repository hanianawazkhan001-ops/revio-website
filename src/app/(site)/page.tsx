import Link from "next/link";
import { getCars } from "@/lib/cars";
import CarCard from "@/components/CarCard";
import VehicleSearchForm from "@/components/VehicleSearchForm";
import HowItWorksTabs from "@/components/HowItWorksTabs";
import Reveal from "@/components/Reveal";

// Real inventory changes over time, so this must fetch fresh on every
// request rather than being frozen into a static page at build time.
export const dynamic = "force-dynamic";

const WHY_REVIO = [
  {
    title: "Quality dealerships",
    desc: "Browse quality cars from established dealer partners.",
  },
  {
    title: "Finance options",
    desc: "Check your eligibility and explore finance options through Revio.",
  },
  {
    title: "Nationwide choice",
    desc: "Find cars available from dealerships across the UK.",
  },
  {
    title: "Sell your car",
    desc: "Put your car in front of the Revio dealer network.",
  },
];

export default async function Home() {
  const cars = await getCars();
  const justAdded = cars.slice(0, 4);

  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="bg-gradient-to-b from-white to-[#F7F7F4] py-12 md:py-16">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[.16em] text-revio-yellow-deep">
                The automotive platform
              </p>
              <h1 className="mt-2 text-6xl font-black leading-[0.85] tracking-tight text-revio-black md:text-8xl">
                BUY.
                <br />
                FINANCE.
                <br />
                SELL.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#35373B]">
                <strong className="text-revio-black">Revio.</strong> One
                place to buy, finance or sell your car.
              </p>
              <div className="mt-4 h-1 w-14 bg-revio-yellow" />

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <Link
                  href="/cars"
                  className="btn-tactile group flex min-h-[130px] flex-col justify-between rounded-2xl border border-revio-line bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-lg hover:border-revio-yellow-deep/40"
                >
                  <small className="text-[10px] font-black tracking-wide text-revio-muted">01</small>
                  <div>
                    <strong className="flex items-center justify-between text-base text-revio-black">
                      Find a Car{" "}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </strong>
                    <p className="mt-1.5 text-xs text-revio-muted">
                      Search quality cars from dealerships across the UK.
                    </p>
                  </div>
                </Link>
                <Link
                  href="/finance"
                  className="btn-tactile group flex min-h-[130px] flex-col justify-between rounded-2xl border border-revio-line bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-lg hover:border-revio-yellow-deep/40"
                >
                  <small className="text-[10px] font-black tracking-wide text-revio-muted">02</small>
                  <div>
                    <strong className="flex items-center justify-between text-base text-revio-black">
                      Finance a Car{" "}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </strong>
                    <p className="mt-1.5 text-xs text-revio-muted">
                      Check your finance options with a soft search.
                    </p>
                  </div>
                </Link>
                <Link
                  href="/sell"
                  className="btn-tactile group flex min-h-[130px] flex-col justify-between rounded-2xl border border-revio-yellow-deep bg-revio-yellow p-5 transition-shadow duration-200 hover:shadow-lg"
                >
                  <small className="text-[10px] font-black tracking-wide text-[#725B00]">03</small>
                  <div>
                    <strong className="flex items-center justify-between text-base text-revio-black">
                      Sell Your Car{" "}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </strong>
                    <p className="mt-1.5 text-xs text-[#4C3D0A]">
                      Get your car in front of our dealer network.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#ECEDEA] via-[#D9DBD6] to-[#C1C4BF] shadow-2xl md:min-h-[560px]">
              <div
                className="absolute left-[12%] top-[46%] h-[36%] w-[72%] rounded-[55%_45%_22%_26%/56%_52%_34%_32%] bg-gradient-to-b from-[#282B2E] to-[#090A0B] shadow-2xl"
                style={{ transform: "skewX(-8deg)" }}
              />
              <div className="absolute right-6 top-6 w-[240px] rounded-2xl border border-revio-line bg-white/95 p-4 shadow-lg">
                <span className="inline-block rounded-full bg-revio-yellow px-2 py-1 text-[8px] font-black uppercase tracking-wide">
                  Available now
                </span>
                <h3 className="mt-3 text-base font-bold text-revio-black">
                  Premium Executive Saloon
                </h3>
                <div className="mt-1.5 text-[10px] text-revio-muted">
                  2022 · 18,420 miles · Automatic
                </div>
                <div className="mt-2.5 text-2xl font-black tracking-tight text-revio-black">
                  £42,995
                  <small className="ml-1 block text-[9px] font-medium text-revio-muted">
                    Cash price
                  </small>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 w-[300px] rounded-2xl bg-white/95 p-4">
                <small className="text-[9px] font-black uppercase tracking-wide text-revio-muted">
                  Featured on Revio
                </small>
                <h3 className="mt-1.5 text-lg font-bold text-revio-black">
                  Luxury Performance Coupe
                </h3>
                <p className="mt-1 text-[11px] text-revio-muted">
                  Automatic · Petrol · Nationwide delivery available
                </p>
              </div>
            </div>
          </div>

          {/* SEARCH */}
          <div className="mt-8 rounded-2xl bg-gradient-to-b from-[#25272A] to-[#121315] p-6 shadow-xl">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-white">Find your car</h2>
              <p className="text-xs text-[#A6A8AC]">
                Know your budget but not the car? Search by budget alone.
              </p>
            </div>
            <VehicleSearchForm />
            <div className="mt-2.5 text-[9px] text-[#A0A2A6]">
              Monthly budget is estimated. Actual finance terms depend on the
              vehicle, lender and your circumstances.
            </div>
          </div>
        </div>
      </section>

      {/* JUST ADDED */}
      <section className="bg-revio-paper py-16 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6">
          <Reveal className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[.16em] text-revio-yellow-deep">
                Latest stock
              </p>
              <h2 className="mt-1 text-4xl font-black tracking-tight text-revio-black">
                Just Added
              </h2>
            </div>
            <p className="max-w-sm text-sm text-revio-muted">
              Browse a selection of quality cars from Revio partner
              dealerships.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {justAdded.map((car, i) => (
              <Reveal key={car.slug} delay={i * 80}>
                <CarCard car={car} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCE */}
      <section className="bg-revio-black py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-6 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[.16em] text-revio-yellow">
              Finance a car
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">
              Finance your next car with Revio.
            </h2>
            <p className="mt-4 max-w-md text-sm text-[#A7AAAE]">
              Whether you&rsquo;ve already found your car or you&rsquo;re
              still looking, check your options with Revio.
            </p>
            <Link
              href="/finance"
              className="btn-tactile mt-6 inline-flex rounded-xl bg-revio-yellow px-5 py-3.5 text-sm font-black text-revio-black hover:shadow-lg hover:shadow-revio-yellow/20"
            >
              Check Eligibility
            </Link>
          </Reveal>
          <div className="grid gap-3">
            {[
              ["Soft search only", "Check your eligibility without a hard credit search at this stage."],
              ["All credit scores welcome", "We'll look at the options available for your circumstances."],
              ["Haven't found a car yet?", "Start with your finance options, then choose the right car for you."],
            ].map(([title, desc], i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="group flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors duration-200 hover:border-revio-yellow/30 hover:bg-white/[0.08]">
                  <div className="grid size-8 flex-none place-items-center rounded-full bg-revio-yellow text-sm font-black text-revio-black transition-transform duration-200 group-hover:scale-110">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{title}</h3>
                    <p className="mt-1 text-xs text-[#A7AAAE]">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELL */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-6 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[.16em] text-[#6C5600]">
              Sell your car
            </p>
            <h2 className="mt-2 text-5xl font-black leading-[0.95] tracking-tight text-revio-black">
              READY TO
              <br />
              SELL?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-revio-muted">
              Tell Revio what you&rsquo;re selling. We&rsquo;ll put your car
              in front of our dealer network so you can receive an offer and
              decide if it works for you.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="rounded-2xl border border-revio-line bg-revio-paper p-6 transition-shadow duration-300 hover:shadow-xl"
          >
            <label className="mb-2 block text-xs font-bold text-revio-black">
              Enter your registration
            </label>
            <div className="flex overflow-hidden rounded-xl border-2 border-revio-black transition-shadow duration-200 focus-within:shadow-[0_0_0_3px_rgba(239,195,25,0.4)]">
              <div className="flex flex-col items-center justify-center bg-[#0052CC] px-2.5 text-white">
                <span className="text-xs">✦</span>
                <strong className="text-xs">GB</strong>
              </div>
              <input
                placeholder="AB12 CDE"
                maxLength={8}
                aria-label="UK vehicle registration"
                className="w-full bg-revio-yellow px-4 py-3 text-center text-xl font-black uppercase tracking-widest text-revio-black outline-none placeholder:text-revio-black/40"
              />
            </div>
            <p className="mt-2 text-xs text-revio-muted">
              Enter your number plate exactly as it appears on your car.
            </p>
            <Link
              href="/sell"
              className="btn-tactile mt-4 inline-flex rounded-xl bg-revio-black px-5 py-3.5 text-sm font-black text-white hover:shadow-lg"
            >
              Get Started →
            </Link>
            <p className="mt-2.5 text-xs text-revio-muted">No obligation to accept an offer.</p>
          </Reveal>
        </div>
      </section>

      {/* WHY REVIO */}
      <section className="bg-revio-paper py-16 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[.16em] text-revio-yellow-deep">
                Why Revio
              </p>
              <h2 className="mt-1 text-4xl font-black tracking-tight text-revio-black">
                Everything for your next car.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-revio-muted">
              Buying, financing and selling, all connected through Revio.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_REVIO.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-revio-line bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-revio-yellow-deep/40 hover:shadow-lg">
                  <h3 className="text-base font-bold text-revio-black">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-revio-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[.16em] text-revio-yellow-deep">
              How it works
            </p>
            <h2 className="mt-1 max-w-xl text-4xl font-black tracking-tight text-revio-black">
              Simple whichever way you use Revio.
            </h2>
            <p className="mt-2 max-w-md text-sm text-revio-muted">
              Choose Buying, Financing or Selling. The three steps below
              update instantly.
            </p>
          </Reveal>
          <HowItWorksTabs />
        </div>
      </section>

      {/* PARTNER */}
      <section className="bg-revio-paper py-16 md:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-8 px-6 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[.16em] text-revio-yellow-deep">
              For dealerships
            </p>
            <h2 className="mt-1 text-4xl font-black tracking-tight text-revio-black">
              Partner with Revio.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-revio-muted">
              Put your stock in front of more buyers, receive cash
              enquiries, send finance customers to Revio and become part of
              the dealer network behind the platform.
            </p>
            <Link
              href="/partner"
              className="btn-tactile mt-5 inline-flex rounded-xl bg-revio-black px-5 py-3.5 text-sm font-black text-white hover:shadow-lg"
            >
              Become a Revio Partner →
            </Link>
          </Reveal>
          <Reveal
            delay={120}
            className="relative min-h-[280px] overflow-clip rounded-[28px] bg-revio-black p-8 text-white transition-transform duration-300 hover:scale-[1.015]"
          >
            <div className="pointer-events-none absolute -left-[140px] -top-[190px] size-[440px] rounded-full border-[90px] border-revio-yellow" />
            <div className="pointer-events-none absolute -right-[70px] -bottom-[85px] size-[240px] rounded-full border border-white/10" />
            <div className="relative z-10 flex h-full flex-col justify-end">
              <span className="mb-3 text-[10px] font-black uppercase tracking-[.14em] text-revio-yellow">
                Revio dealer partners
              </span>
              <strong className="text-3xl font-black leading-tight">
                MORE CARS.
                <br />
                MORE BUYERS.
                <br />
                MORE OPPORTUNITY.
              </strong>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
