import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal>
      <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-2.5 text-[1.75rem] font-semibold tracking-[-0.02em] sm:text-[2rem]">
        {title}
      </h2>
      {lead && (
        <p className="mt-3 max-w-2xl text-[15.5px] leading-[1.65] text-ink-2">
          {lead}
        </p>
      )}
    </Reveal>
  );
}
