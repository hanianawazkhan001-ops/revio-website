import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCar } from "@/lib/cars";
import CashPurchaseModal from "@/components/CashPurchaseModal";
import Reveal from "@/components/Reveal";

// Real inventory changes over time, so this must fetch fresh on every
// request rather than being frozen into a static page at build time.
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = await getCar(slug);
  if (!car) return {};
  return {
    title: `${car.make} ${car.model} | Revio`,
    description: `${car.year} ${car.make} ${car.model} available from ${car.dealerName} on Revio.`,
  };
}

const TONES = [
  "from-[#ECEEEA] to-[#C4C9C3]",
  "from-[#ECE9E5] to-[#C9C4BF]",
  "from-[#EBEEEC] to-[#C3CAC6]",
  "from-[#EDECE9] to-[#CCC8C1]",
  "from-[#E7E9E4] to-[#C3C8BE]",
  "from-[#EAEBED] to-[#C3C6CB]",
  "from-[#ECEAE7] to-[#C8C4BF]",
  "from-[#E8EAE7] to-[#BEC5C1]",
  "from-[#EEEAE7] to-[#C9C1BA]",
  "from-[#E9EBEA] to-[#C1C8C5]",
  "from-[#EBECF0] to-[#C2C5CD]",
  "from-[#ECEBE8] to-[#C9C6C0]",
];

export default async function CarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = await getCar(slug);
  if (!car) notFound();

  const tone = TONES[(car.tone - 1) % TONES.length];
  const d = car.details;

  const facts: [string, string][] = d
    ? [
        ["Make", car.make],
        ["Model", car.model.replace(` ${d.derivative}`, "")],
        ["Derivative", d.derivative],
        ["Year", String(car.year)],
        ["Mileage", `${car.mileage.toLocaleString()} miles`],
        ["Transmission", car.gearbox],
        ["Fuel type", car.fuel],
        ["Body type", d.bodyType],
        ["Engine size", d.engineSize],
        ["Colour", d.colour],
        ["Doors", String(d.doors)],
        ["Registration", d.registration],
        ["Power", d.power],
        ["CO₂", d.co2],
        ["Drive type", d.driveType],
        ["Seats", String(d.seats)],
      ]
    : [
        ["Make", car.make],
        ["Model", car.model],
        ["Year", String(car.year)],
        ["Mileage", `${car.mileage.toLocaleString()} miles`],
        ["Transmission", car.gearbox],
        ["Fuel type", car.fuel],
      ];

  return (
    <main className="flex-1">
      <div className="border-b border-[#EFEFEB] bg-[#FAFAF8] py-4">
        <div className="mx-auto max-w-[1460px] px-6 text-[10px] text-revio-muted">
          <Link href="/cars" className="font-bold text-[#55585D]">
            Cars
          </Link>
          <span className="mx-1.5 text-[#B6B8BB]">›</span>
          <Link href={`/dealer/${car.dealerSlug}`} className="font-bold text-[#55585D]">
            {car.dealerName}
          </Link>
          <span className="mx-1.5 text-[#B6B8BB]">›</span>
          {car.make} {car.model}
        </div>
      </div>

      <section className="bg-gradient-to-b from-white to-[#F6F6F3] py-8 md:py-12">
        <div className="mx-auto grid max-w-[1460px] gap-7 px-6 lg:grid-cols-[1.25fr_.75fr] lg:items-start">
          <div className="grid gap-2.5 sm:grid-cols-[2fr_1fr]">
            <div
              className={`relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[560px] ${
                car.images[0] ? "bg-revio-paper" : `bg-gradient-to-br ${tone}`
              }`}
            >
              {car.images[0] ? (
                <Image
                  src={car.images[0]}
                  alt={`${car.make} ${car.model}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <>
                  <div
                    className="absolute left-[13%] top-[38%] h-[40%] w-[75%] rounded-[50%_42%_19%_22%] bg-gradient-to-b from-[#414549] to-[#090A0B] shadow-2xl"
                    style={{ transform: "skewX(-7deg)" }}
                  />
                  <div className="absolute bottom-[104px] left-[25%] size-[74px] rounded-full border-[12px] border-[#34373A] bg-[#111]" />
                  <div className="absolute bottom-[104px] right-[19%] size-[74px] rounded-full border-[12px] border-[#34373A] bg-[#111]" />
                </>
              )}
              {car.images.length > 1 && (
                <div className="absolute bottom-3.5 right-3.5 rounded-full bg-black/80 px-3 py-2 text-[9px] font-black text-white">
                  View all {car.images.length} photos
                </div>
              )}
            </div>
            <div className="hidden gap-2.5 sm:grid">
              {car.images.length > 1
                ? car.images.slice(1, 4).map((src, i) => (
                    <div
                      key={src}
                      className="relative min-h-[180px] overflow-hidden rounded-2xl bg-revio-paper"
                    >
                      <Image
                        src={src}
                        alt={`${car.make} ${car.model} photo ${i + 2}`}
                        fill
                        sizes="20vw"
                        className="object-cover"
                      />
                    </div>
                  ))
                : !car.images[0] &&
                  [0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`relative min-h-[180px] overflow-hidden rounded-2xl bg-gradient-to-br ${tone}`}
                    >
                      <div
                        className="absolute left-[9%] top-[42%] h-[36%] w-[82%] rounded-[50%_42%_19%_22%] bg-gradient-to-b from-[#414549] to-[#090A0B]"
                        style={{ transform: "skewX(-7deg)" }}
                      />
                    </div>
                  ))}
            </div>
          </div>

          <aside className="rounded-[22px] border border-revio-line bg-white p-6 shadow-lg lg:sticky lg:top-24">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="rounded-full bg-revio-yellow px-2.5 py-1.5 text-[8px] font-black uppercase tracking-wide">
                Available now
              </span>
              <button className="btn-tactile rounded-full border border-revio-line px-3 py-1.5 text-[9px] font-bold hover:bg-revio-paper">
                ♡ Save Car
              </button>
            </div>

            <p className="text-[10px] font-black uppercase tracking-wider text-revio-yellow-deep">
              {car.year} {car.make}
            </p>
            <h1 className="mt-1 text-3xl font-black leading-tight tracking-tight text-revio-black">
              {d ? d.derivative : car.model}.
            </h1>
            {d && <div className="mt-2 text-[10px] text-revio-muted">Registration: {d.registration}</div>}

            <div className="my-5 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-revio-line p-2.5">
                <span className="block text-[8px] font-black uppercase tracking-wider text-[#8A8D91]">
                  Mileage
                </span>
                <strong className="mt-1 block text-xs text-revio-black">
                  {car.mileage.toLocaleString()} miles
                </strong>
              </div>
              <div className="rounded-lg border border-revio-line p-2.5">
                <span className="block text-[8px] font-black uppercase tracking-wider text-[#8A8D91]">
                  Gearbox
                </span>
                <strong className="mt-1 block text-xs text-revio-black">{car.gearbox}</strong>
              </div>
              <div className="rounded-lg border border-revio-line p-2.5">
                <span className="block text-[8px] font-black uppercase tracking-wider text-[#8A8D91]">
                  Fuel
                </span>
                <strong className="mt-1 block text-xs text-revio-black">{car.fuel}</strong>
              </div>
              <div className="rounded-lg border border-revio-line p-2.5">
                <span className="block text-[8px] font-black uppercase tracking-wider text-[#8A8D91]">
                  Body
                </span>
                <strong className="mt-1 block text-xs text-revio-black">{d?.bodyType ?? "—"}</strong>
              </div>
            </div>

            <div className="my-2 border-y border-revio-line py-4">
              <div className="text-3xl font-black tracking-tight text-revio-black">
                £{car.cashPrice.toLocaleString()}{" "}
                <small className="text-[9px] font-bold text-revio-muted">cash price</small>
              </div>
              <div className="mt-1.5 text-base font-black text-[#17191B]">
                Est. £{car.monthlyPrice} / month{" "}
                <span className="text-[9px] font-medium text-[#777A80]">illustrative</span>
              </div>
            </div>

            <div className="grid gap-2.5">
              <CashPurchaseModal
                vehicleLabel={`${car.make} ${car.model}`}
                dealerName={car.dealerName}
              />
              <Link
                href={`/finance?vehicle=${car.slug}`}
                className="btn-tactile min-h-[49px] rounded-xl bg-revio-yellow text-center text-sm font-black leading-[49px] text-revio-black hover:shadow-lg"
              >
                Apply for Finance
              </Link>
            </div>

            <p className="mt-3 text-[8px] leading-relaxed text-revio-muted">
              Estimated monthly figures are illustrative only. Actual
              finance terms depend on the vehicle, lender and your
              circumstances.
            </p>
          </aside>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-[1460px] gap-5 px-6">
          <Reveal as="section" className="rounded-[20px] border border-revio-line bg-white p-7">
            <p className="text-[10px] font-black uppercase tracking-wider text-revio-yellow-deep">
              Vehicle details
            </p>
            <h2 className="mt-1.5 text-3xl font-black tracking-tight text-revio-black">
              Vehicle details.
            </h2>
            <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-4">
              {facts.map(([label, value]) => (
                <div key={label} className="border-b border-revio-line py-3">
                  <span className="mb-1 block text-[9px] text-[#7B7E83]">{label}</span>
                  <strong className="block text-xs text-revio-black">{value}</strong>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal as="section" delay={80} className="rounded-[20px] border border-revio-line bg-white p-7">
            <p className="text-[10px] font-black uppercase tracking-wider text-revio-yellow-deep">
              About this car
            </p>
            <h2 className="mt-1.5 text-3xl font-black tracking-tight text-revio-black">
              {car.make} {d ? d.derivative : car.model}.
            </h2>
            <p className="max-w-[1120px] text-[13px] leading-[1.82] text-[#5F6267]">
              {d
                ? d.description
                : `${car.dealerName} will add their own written description for this ${car.make} ${car.model} here. Full vehicle features and specification will be added once confirmed by the Revio stock team.`}
            </p>

            {d && (
              <>
                <div className="mt-7 border-t border-revio-line pt-6">
                  <p className="text-[10px] font-black uppercase tracking-wider text-revio-yellow-deep">
                    Features & specification
                  </p>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-revio-black">
                    Key equipment.
                  </h3>
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                  {d.features.map((f) => (
                    <div
                      key={f}
                      className="flex min-h-[48px] items-center gap-2.5 rounded-lg border border-revio-line px-3 py-2.5 text-[10px] font-bold text-revio-black transition-colors duration-150 hover:border-revio-yellow/50"
                    >
                      <span className="grid size-6 flex-none place-items-center rounded-md bg-[#F7EDBB] text-[10px] font-black">
                        ✓
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
              </>
            )}
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-[1460px] px-6">
          <Reveal as="div" className="relative overflow-clip rounded-[22px] bg-[#0A0A0A] p-7 text-white">
            <div className="pointer-events-none absolute -right-24 -top-36 size-[280px] rounded-full border-[52px] border-revio-yellow" />
            <div className="pointer-events-none absolute -left-16 -bottom-20 size-[200px] rounded-full border border-white/10" />
            <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-wider text-revio-yellow">
                  Revio partner dealer
                </p>
                <h2 className="mt-1.5 text-3xl font-black tracking-tight">{car.dealerName}.</h2>
                <p className="mt-1 text-[11px] text-[#A6A8AC]">{car.dealerLocation}</p>
                <span className="mt-3 inline-flex rounded-full border border-[#34363A] bg-[#1B1C1F] px-2.5 py-1.5 text-[8px] font-black">
                  ✓ Revio Partner
                </span>
              </div>
              <Link
                href={`/dealer/${car.dealerSlug}`}
                className="btn-tactile inline-flex min-w-[170px] justify-center rounded-xl bg-revio-yellow px-5 py-3.5 text-sm font-black text-revio-black hover:shadow-lg"
              >
                View Dealer Stock →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
