"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/cars", label: "Find a Car" },
  { href: "/finance", label: "Finance a Car" },
  { href: "/sell", label: "Sell Your Car" },
  { href: "/about", label: "About Revio" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-revio-line shadow-[0_4px_20px_rgba(0,0,0,0.06)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between gap-7 px-6">
        <Link href="/" className="btn-tactile shrink-0">
          <Image
            src="/logo-on-light.png"
            alt="Revio"
            width={1059}
            height={228}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-revio-black transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-revio-yellow-deep after:transition-all after:duration-200 hover:text-revio-yellow-deep hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/finance"
            className="btn-tactile hidden rounded-xl bg-revio-yellow px-5 py-3 text-sm font-extrabold text-revio-black hover:shadow-lg md:inline-flex"
          >
            Check Eligibility
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={open}
            className="btn-tactile grid h-10 w-10 place-items-center rounded-lg border border-revio-line md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-[5px]">
              <span
                className={`h-[2px] w-5 bg-revio-black transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`h-[2px] w-5 bg-revio-black transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`h-[2px] w-5 bg-revio-black transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`accordion-panel md:hidden ${open ? "is-open border-t border-revio-line" : ""}`}
      >
        <div className="flex flex-col gap-1 bg-white px-6 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-revio-black transition-colors duration-150 hover:bg-revio-paper"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/finance"
            onClick={() => setOpen(false)}
            className="btn-tactile mt-2 rounded-xl bg-revio-yellow px-5 py-3 text-center text-sm font-extrabold text-revio-black"
          >
            Check Eligibility
          </Link>
        </div>
      </div>
    </header>
  );
}
