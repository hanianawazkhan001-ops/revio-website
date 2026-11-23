import type { Metadata } from "next";
import { getCar } from "@/lib/cars";
import FinanceForm from "@/components/FinanceForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Finance a Car | Revio",
  description:
    "Apply for car finance through Revio. Tell us about yourself and your budget, and our finance team will be in touch.",
};

// Vehicle prices can change, so this must fetch fresh on every request
// rather than being frozen into a static page at build time.
export const dynamic = "force-dynamic";

export default async function FinancePage({
  searchParams,
}: {
  searchParams: Promise<{ vehicle?: string }>;
}) {
  const { vehicle: vehicleSlug } = await searchParams;
  const car = vehicleSlug ? await getCar(vehicleSlug) : undefined;

  const vehicle = car
    ? {
        slug: car.slug,
        label: `${car.year} ${car.make} ${car.model}`,
        price: car.cashPrice,
      }
    : null;

  return (
    <main className="flex-1 bg-revio-paper">
      <section className="border-b border-revio-line bg-gradient-to-b from-white to-[#F7F7F4] py-14 md:py-18">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="text-[11px] font-black uppercase tracking-[.15em] text-revio-yellow-deep">
            Finance a car
          </p>
          <h1 className="mt-2 max-w-2xl text-5xl font-black leading-[0.94] tracking-tight text-revio-black md:text-7xl">
            Apply for car finance.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-revio-muted">
            {vehicle
              ? `Tell us a little about yourself to apply for finance on the ${vehicle.label}.`
              : "Tell us about your budget and yourself, and our finance team will be in touch to talk through your options."}
          </p>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-[1080px] px-6">
          <Reveal as="div">
            <FinanceForm vehicle={vehicle} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
