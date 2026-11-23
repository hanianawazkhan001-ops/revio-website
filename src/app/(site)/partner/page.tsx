import type { Metadata } from "next";
import PartnerForm from "@/components/PartnerForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Partner With Revio | Revio",
  description:
    "Partner with Revio and create more opportunities for your dealership through vehicle exposure, finance customers, cash enquiries, social media and customer vehicle buying opportunities.",
};

const BENEFITS = [
  {
    title: "Vehicle exposure",
    desc: "We showcase partner stock across Revio and our social media channels to put vehicles in front of more potential buyers.",
    path: "M3 10h18M5 10V6.5L7 4h10l2 2.5V10M5 10v9h14v-9M8 19v-5h8v5M7 7h10",
  },
  {
    title: "Finance customers",
    desc: "Revio can handle finance customers from application through the finance process, giving your dealership another route to completed sales.",
    path: "M14.5 8.2c-.7-.7-1.6-1.1-2.7-1.1-1.7 0-2.9.9-2.9 2.2 0 1.4 1.1 2 3.1 2.5 2 .5 3.1 1.1 3.1 2.6 0 1.4-1.3 2.5-3.2 2.5-1.4 0-2.6-.5-3.5-1.4M12 5.7v12.6",
    circle: true,
  },
  {
    title: "Cash buyer enquiries",
    desc: "Customers interested in buying a vehicle outright can enquire through Revio and the enquiry is passed to the supplying dealership.",
    path: "M4 6.5h16v11H4zM7 10h10M7 13h7 M17 4l3 2.5L17 9",
  },
  {
    title: "Social media advertising",
    desc: "Selected dealership stock can be featured across Revio social media through vehicle posts, featured deals and other automotive content.",
    path: "M8 15.5 11 12l2.2 2.2L16.5 10 20 13.5",
    rect: true,
  },
  {
    title: "Access to customer vehicles",
    desc: "Partner dealerships can receive opportunities to buy vehicles submitted by customers through Revio Sell Your Car.",
    path: "M3.5 15.5 5 11l2-4h10l2 4 1.5 4.5M5 11h14M6 15h.01M18 15h.01M5 18.5h14M7 18.5v1.5M17 18.5v1.5 M16 4.5h4m-2-2v4",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Join Revio",
    desc: "Tell us about your dealership, your stock and the best person for our team to speak with.",
  },
  {
    num: "02",
    title: "We advertise your vehicles",
    desc: "Your stock can be showcased through Revio and our social media channels.",
  },
  {
    num: "03",
    title: "Receive opportunities",
    desc: "Receive cash buyer enquiries, finance customers and opportunities to purchase customer vehicles through Revio.",
  },
];

export default function PartnerPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-revio-line bg-gradient-to-b from-white to-[#F7F7F4] py-14 md:py-18">
        <div className="mx-auto max-w-[1180px] px-6">
          <p className="text-[11px] font-black uppercase tracking-[.16em] text-revio-yellow-deep">
            Partner with Revio
          </p>
          <h1 className="mt-2 max-w-3xl text-5xl font-black leading-[0.92] tracking-tight text-revio-black md:text-7xl">
            More exposure. More enquiries. More opportunity.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#5E6166]">
            Revio helps dealerships reach more customers through vehicle
            advertising, social media, finance and new opportunities to buy
            customer vehicles.
          </p>
          <a
            href="#partner-form"
            className="btn-tactile mt-6 inline-flex rounded-xl bg-revio-yellow px-5 py-3.5 text-sm font-black text-revio-black hover:shadow-lg"
          >
            Become a Revio Partner
          </a>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1180px] px-6">
          <Reveal as="div" className="mb-7 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[.16em] text-revio-yellow-deep">
                What Revio offers
              </p>
              <h2 className="mt-1 max-w-md text-4xl font-black leading-[0.96] tracking-tight text-revio-black md:text-5xl">
                Built to create more opportunities for dealerships.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#6A6D72]">
              Partner with Revio and connect your dealership with customers
              across buying, finance and selling.
            </p>
          </Reveal>

          <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-6">
            {BENEFITS.map((b, i) => (
              <Reveal
                key={b.title}
                delay={(i % 3) * 90}
                className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
              >
                <article className="min-h-[190px] rounded-2xl border border-revio-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-revio-yellow/40 hover:shadow-lg">
                  <div className="mb-7 grid size-10 place-items-center rounded-[11px] bg-[#F7EDBB]">
                    <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-revio-black stroke-[1.7]">
                      {b.circle && <circle cx="12" cy="12" r="8.5" />}
                      {b.rect && <rect x="4" y="4" width="16" height="16" rx="4" />}
                      {b.title === "Social media advertising" && <circle cx="9" cy="9" r="1.2" />}
                      <path d={b.path} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mb-1.5 text-base font-bold text-revio-black">{b.title}</h3>
                  <p className="text-xs leading-relaxed text-[#73767A]">{b.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-revio-paper py-16 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-9 px-6 lg:grid-cols-[300px_1fr]">
          <Reveal as="div">
            <p className="text-[11px] font-black uppercase tracking-[.16em] text-revio-yellow-deep">
              How it works
            </p>
            <h2 className="mt-1.5 text-4xl font-black leading-[0.96] tracking-tight text-revio-black">
              Partner with Revio.
            </h2>
            <p className="mt-2.5 text-xs leading-relaxed text-[#6F7277]">
              Tell us about your dealership and we will take it from there.
            </p>
          </Reveal>
          <div className="grid gap-3.5 sm:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} delay={i * 90}>
                <article className="min-h-[220px] rounded-2xl border border-revio-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-revio-yellow/40 hover:shadow-lg">
                  <div className="mb-12 text-[11px] font-black text-revio-yellow-deep">{s.num}</div>
                  <h3 className="mb-1.5 text-lg font-bold text-revio-black">{s.title}</h3>
                  <p className="text-xs leading-relaxed text-[#707379]">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="partner-form" className="bg-revio-black py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-12 px-6 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
          <Reveal as="div">
            <p className="text-[11px] font-black uppercase tracking-[.16em] text-revio-yellow">
              Become a Revio partner
            </p>
            <h2 className="mt-2 text-5xl font-black leading-[0.94] tracking-tight">
              Want to partner with Revio?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#AEB1B5]">
              Tell us a little about your dealership and a member of the
              Revio team will contact you.
            </p>
          </Reveal>
          <Reveal as="div" delay={90}>
            <PartnerForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1180px] px-6">
          <Reveal
            as="div"
            className="relative min-h-[320px] overflow-clip rounded-[28px] bg-revio-black p-8 text-white md:min-h-[420px] md:p-10"
          >
            <div className="pointer-events-none absolute -left-[170px] -top-[230px] size-[560px] rounded-full border-[112px] border-revio-yellow" />
            <div className="pointer-events-none absolute -right-[85px] -bottom-[105px] size-[310px] rounded-full border border-white/10" />
            <div className="relative z-10 flex h-full flex-col justify-end">
              <span className="mb-3 text-[10px] font-black uppercase tracking-[.14em] text-revio-yellow">
                Revio dealer partners
              </span>
              <strong className="max-w-[760px] text-4xl font-black leading-[0.9] tracking-tight md:text-6xl">
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
