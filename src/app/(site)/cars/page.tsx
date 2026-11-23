import type { Metadata } from "next";
import { getCars } from "@/lib/cars";
import CarsExplorer from "@/components/CarsExplorer";

export const metadata: Metadata = {
  title: "Cars for Sale | Revio",
  description:
    "Browse cars for sale from Revio partner dealerships across the UK. Search by make, model or budget.",
};

// Real inventory changes over time, so this must fetch fresh on every
// request rather than being frozen into a static page at build time.
export const dynamic = "force-dynamic";

export default async function CarsPage() {
  const cars = await getCars();

  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-white to-revio-paper py-10 md:py-14">
        <div className="mx-auto max-w-[1480px] px-6">
          <p className="text-[10px] font-black uppercase tracking-[.15em] text-revio-yellow-deep">
            Find your next car
          </p>
          <h1 className="mt-2 max-w-2xl text-5xl font-black leading-[0.9] tracking-tight text-revio-black md:text-7xl">
            Cars for Sale.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#595C61]">
            Browse cars from Revio partner dealerships across the UK. Search
            by make, model or budget.
          </p>

          <CarsExplorer initialCars={cars} />
        </div>
      </section>
    </main>
  );
}
