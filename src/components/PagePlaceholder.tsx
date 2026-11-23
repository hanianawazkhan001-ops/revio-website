type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PagePlaceholder({
  eyebrow,
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-3 bg-revio-paper px-6 py-24 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-revio-yellow-deep">
        {eyebrow}
      </p>
      <h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-revio-black">
        {title}
      </h1>
      <p className="max-w-md text-sm text-revio-muted">{description}</p>
    </main>
  );
}
