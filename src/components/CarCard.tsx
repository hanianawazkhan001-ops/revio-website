"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Car } from "@/lib/cars";

const TONES = [
  "from-[#ECEEEA] to-[#C7CBC5]",
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

export default function CarCard({ car, showSave = true }: { car: Car; showSave?: boolean }) {
  const [saved, setSaved] = useState(false);
  const tone = TONES[(car.tone - 1) % TONES.length];

  return (
    <article className="group overflow-hidden rounded-2xl border border-revio-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-revio-line hover:shadow-xl">
      <Link
        href={`/cars/${car.slug}`}
        aria-label={`View ${car.make} ${car.model}`}
        className={`relative block h-[220px] overflow-hidden ${
          car.images[0] ? "bg-revio-paper" : `bg-gradient-to-br ${tone}`
        }`}
      >
        <span
          className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1.5 text-[9px] font-black tracking-wide ${
            car.badge.kind === "yellow"
              ? "bg-revio-yellow text-revio-black"
              : "bg-[#707379] text-white"
          }`}
        >
          {car.badge.label}
        </span>
        {showSave && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setSaved((v) => !v);
            }}
            aria-label="Save car"
            aria-pressed={saved}
            className="btn-tactile absolute right-3 top-3 z-10 grid size-8 place-items-center rounded-full border border-white/70 bg-white/90 text-base hover:bg-white"
          >
            {saved ? "♥" : "♡"}
          </button>
        )}
        {car.images[0] ? (
          <Image
            src={car.images[0]}
            alt={`${car.make} ${car.model}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.06]">
            <div
              className="absolute left-[14%] top-[38%] h-[40%] w-[73%] rounded-[50%_42%_19%_22%] bg-gradient-to-b from-[#414549] to-[#090A0B] shadow-lg"
              style={{ transform: "skewX(-7deg)" }}
            />
            <div className="absolute bottom-[39px] left-[24%] size-[52px] rounded-full border-8 border-[#34373A] bg-[#111]" />
            <div className="absolute bottom-[39px] right-[20%] size-[52px] rounded-full border-8 border-[#34373A] bg-[#111]" />
          </div>
        )}
      </Link>

      <div className="p-4">
        <div className="text-[9px] font-bold text-revio-muted">
          {car.year} <span className="mx-1 text-revio-line">·</span>
          {car.mileage.toLocaleString()} miles <span className="mx-1 text-revio-line">·</span>
          {car.gearbox}
        </div>
        <h3 className="mb-1 mt-2 text-[15px] font-bold leading-tight text-revio-black">
          {car.make} {car.model}
        </h3>
        <div className="text-[9px] text-revio-muted">{car.fuel}</div>

        <div className="mt-3.5">
          <strong className="block text-xl tracking-tight text-revio-black">
            £{car.cashPrice.toLocaleString()}
          </strong>
          <strong className="mt-1 block text-xs font-black text-revio-black">
            Est. £{car.monthlyPrice} / month
          </strong>
        </div>

        <div className="mt-3.5 border-t border-revio-line pt-3">
          <span className="block text-[7px] font-black uppercase tracking-wider text-revio-yellow-deep">
            Revio Partner Dealer
          </span>
          <strong className="mt-1 block text-[10px] text-revio-black">{car.dealerName}</strong>
          <small className="mt-0.5 block text-[8px] text-revio-muted">{car.dealerLocation}</small>
        </div>

        <Link
          href={`/cars/${car.slug}`}
          className="btn-tactile group/btn mt-3.5 flex items-center justify-between rounded-lg bg-revio-black px-3 py-2.5 text-[9px] font-black text-white hover:shadow-md"
        >
          View Car{" "}
          <span className="text-sm transition-transform duration-200 group-hover/btn:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
