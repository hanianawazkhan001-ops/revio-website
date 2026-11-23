import Image from "next/image";
import Link from "next/link";

type FooterLink = { href: string; label: string };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Cars",
    links: [
      { href: "/cars", label: "Find a Car" },
      { href: "/finance", label: "Finance a Car" },
      { href: "/sell", label: "Sell Your Car" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Revio" },
      { href: "/partner", label: "Partner With Revio" },
      { href: "/faqs", label: "FAQs" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/cookies", label: "Cookie Policy" },
      { href: "/complaints", label: "Complaints" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-revio-line bg-revio-black text-white">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/logo-on-dark.png"
            alt="Revio"
            width={1056}
            height={231}
            className="h-7 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Revio. One place to buy, finance or sell your car.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/50">
              {col.title}
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-revio-yellow">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
