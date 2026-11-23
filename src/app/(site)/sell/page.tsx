import type { Metadata } from "next";
import SellWizard from "@/components/SellWizard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sell Your Car | Revio",
  description: "Tell Revio about your car and submit your vehicle details.",
};

export default function SellPage() {
  return (
    <main className="flex-1 bg-revio-paper">
      <section className="bg-revio-yellow py-11 md:py-14">
        <div className="mx-auto max-w-[1080px] px-6">
          <p className="text-[9px] font-black uppercase tracking-[.15em] text-[#5B4B00]">
            Sell your car
          </p>
          <h1 className="mt-2 text-5xl font-black leading-[0.92] tracking-tight text-revio-black md:text-7xl">
            READY TO SELL?
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#4F450D]">
            Tell us about your car in a few simple steps.
          </p>
        </div>
      </section>

      <section className="py-9 md:py-14">
        <Reveal as="div" className="mx-auto max-w-[1080px] px-6">
          <SellWizard />
        </Reveal>
      </section>
    </main>
  );
}
