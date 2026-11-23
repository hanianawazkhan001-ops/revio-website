import type { ReactNode } from "react";

export type PolicySection = {
  id: string;
  number: string;
  title: string;
  body: ReactNode;
};

type PolicyLayoutProps = {
  kicker: string;
  title: string;
  description: string;
  updated?: string;
  navLinks: { href: string; label: string }[];
  sections: PolicySection[];
};

export default function PolicyLayout({
  kicker,
  title,
  description,
  updated,
  navLinks,
  sections,
}: PolicyLayoutProps) {
  return (
    <main className="flex-1">
      <section className="border-b border-revio-line bg-revio-paper py-14 md:py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="text-[11px] font-black uppercase tracking-[.15em] text-revio-yellow-deep">
            {kicker}
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-black leading-tight tracking-tight text-revio-black md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-revio-muted">
            {description}
          </p>
          {updated && (
            <p className="mt-4 inline-block rounded-full border border-revio-line bg-white px-3 py-1 text-[11px] font-semibold text-revio-muted">
              {updated}
            </p>
          )}
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-6 md:grid-cols-[220px_1fr] md:gap-16">
          <aside className="hidden md:block">
            <nav className="sticky top-28 flex flex-col gap-1 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-2 py-1.5 text-revio-muted transition-colors hover:bg-revio-paper hover:text-revio-black"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>

          <div>
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 border-b border-revio-line py-8 first:pt-0 last:border-b-0"
              >
                <div className="mb-2 text-xs font-black text-revio-yellow-deep">
                  {section.number}
                </div>
                <h2 className="mb-3 text-xl font-bold text-revio-black md:text-2xl">
                  {section.title}
                </h2>
                {section.body}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-sm leading-relaxed text-revio-muted last:mb-0">
      {children}
    </p>
  );
}

export function Ul({ children }: { children: ReactNode }) {
  return (
    <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-revio-muted last:mb-0">
      {children}
    </ul>
  );
}

export function ContactBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 rounded-2xl border border-revio-line bg-revio-paper p-5 text-sm text-revio-black [&_p]:mb-1.5 [&_p:last-child]:mb-0">
      {children}
    </div>
  );
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 rounded-xl border border-revio-line bg-revio-paper p-4 text-xs leading-relaxed text-revio-muted">
      {children}
    </div>
  );
}
