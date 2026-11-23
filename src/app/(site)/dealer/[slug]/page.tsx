import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDealer } from "@/lib/dealers";
import { getCarsByDealer } from "@/lib/cars";
import CarCard from "@/components/CarCard";
import Reveal from "@/components/Reveal";

// Dealers and their stock change over time, so this must fetch fresh on
// every request rather than being frozen into a static page at build time.
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dealer = await getDealer(slug);
  if (!dealer) return {};
  return {
    title: `${dealer.name} | Revio`,
    description: `${dealer.name} dealer profile on Revio. Browse cars available now.`,
  };
}

export default async function DealerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dealer = await getDealer(slug);
  if (!dealer) notFound();

  const stock = await getCarsByDealer(slug);

  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-white to-[#F4F4F1] py-12 md:py-16">
        <div className="mx-auto max-w-[1460px] px-6">
          <p className="text-[10px] font-black uppercase tracking-[.15em] text-revio-yellow-deep">
            Revio partner dealer
          </p>
          <h1 className="mt-2 text-6xl font-black leading-[0.92] tracking-tight text-revio-black md:text-7xl">
            {dealer.name}.
          </h1>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-revio-black px-3 py-1.5 text-[9px] font-black text-white">
            <span className="grid size-4 place-items-center rounded-full bg-revio-yellow text-[10px] text-revio-black">
              ✓
            </span>
            Revio Partner
          </span>
          <div>
            <a
              href="#stock"
              className="btn-tactile mt-7 inline-flex rounded-xl bg-revio-black px-5 py-3.5 text-sm font-black text-white hover:shadow-lg"
            >
              View {stock.length} Cars →
            </a>
          </div>
        </div>
      </section>

      <section id="stock" className="py-16 md:py-18">
        <div className="mx-auto max-w-[1460px] px-6">
          <p className="text-[10px] font-black uppercase tracking-[.15em] text-revio-yellow-deep">
            {dealer.name} stock
          </p>
          <h2 className="mt-1.5 max-w-md text-5xl font-black leading-[0.95] tracking-tight text-revio-black">
            {stock.length} cars available now.
          </h2>

          <Reveal
            as="div"
            className="mt-6 grid gap-2.5 rounded-2xl bg-revio-paper p-3.5 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="rounded-lg border border-revio-line bg-white p-2.5 transition-colors duration-150 focus-within:border-revio-black">
              <label className="mb-1 block text-[8px] font-black uppercase tracking-wider text-[#8A8D91]">
                Make
              </label>
              <select className="w-full bg-transparent text-[11px] font-bold outline-none">
                <option>All makes</option>
                <option>BMW</option>
                <option>Mercedes-Benz</option>
                <option>Audi</option>
                <option>Volkswagen</option>
                <option>Land Rover</option>
                <option>Tesla</option>
              </select>
            </div>
            <div className="rounded-lg border border-revio-line bg-white p-2.5 transition-colors duration-150 focus-within:border-revio-black">
              <label className="mb-1 block text-[8px] font-black uppercase tracking-wider text-[#8A8D91]">
                Body type
              </label>
              <select className="w-full bg-transparent text-[11px] font-bold outline-none">
                <option>All body types</option>
                <option>Saloon</option>
                <option>SUV</option>
                <option>Hatchback</option>
              </select>
            </div>
            <div className="rounded-lg border border-revio-line bg-white p-2.5 transition-colors duration-150 focus-within:border-revio-black">
              <label className="mb-1 block text-[8px] font-black uppercase tracking-wider text-[#8A8D91]">
                Budget
              </label>
              <select className="w-full bg-transparent text-[11px] font-bold outline-none">
                <option>Any budget</option>
                <option>Under £25,000</option>
                <option>£25,000–£30,000</option>
                <option>£30,000+</option>
              </select>
            </div>
            <button className="btn-tactile rounded-lg bg-revio-black px-4 py-2.5 text-[11px] font-black text-white hover:shadow-md">
              Filter {stock.length} Cars
            </button>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {stock.map((car, i) => (
              <Reveal key={car.slug} delay={Math.min(i, 8) * 60}>
                <CarCard car={car} showSave={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-revio-paper py-16 md:py-18">
        <div className="mx-auto grid max-w-[1460px] gap-6 px-6 lg:grid-cols-[.65fr_1.35fr]">
          <Reveal as="div" className="flex flex-col justify-center rounded-[20px] border border-revio-line bg-white p-7">
            <p className="text-[10px] font-black uppercase tracking-[.15em] text-revio-yellow-deep">
              Location
            </p>
            <h2 className="mt-1.5 text-4xl font-black leading-[0.97] tracking-tight text-revio-black">
              {dealer.name}.
            </h2>
            <p className="mt-3 max-w-[390px] text-xs leading-relaxed text-[#686B70]">
              {dealer.description ??
                `${dealer.name} is based in ${dealer.location}. Exact dealership contact details are kept within the Revio enquiry journey.`}
            </p>
            <div className="mt-4 inline-flex w-max items-center gap-2 rounded-full bg-revio-black px-3 py-2.5 text-[10px] font-bold text-white">
              <span className="size-2.5 rounded-full bg-revio-yellow" />
              {dealer.location}
            </div>
          </Reveal>

          <Reveal
            as="div"
            delay={100}
            className="relative min-h-[300px] overflow-hidden rounded-[20px] border border-[#D0D2CD]"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,.32) 1px, transparent 1px) 0 0/34px 34px, linear-gradient(rgba(255,255,255,.32) 1px, transparent 1px) 0 0/34px 34px, linear-gradient(135deg,#D8DBD5,#BAC1B7)",
              }}
              aria-label={`Map showing ${dealer.name} location`}
            />
            <div className="absolute left-[55%] top-[42%] size-14 -rotate-45 rounded-[50%_50%_50%_0] bg-revio-yellow shadow-lg transition-transform duration-300 hover:scale-110">
              <div className="absolute left-[19px] top-[19px] size-[18px] rounded-full bg-revio-black" />
            </div>
            <div className="absolute bottom-4 right-4 rounded-xl bg-white p-3.5 text-[10px] shadow-lg">
              <strong className="mb-0.5 block text-sm text-revio-black">{dealer.name}</strong>
              {dealer.location}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
