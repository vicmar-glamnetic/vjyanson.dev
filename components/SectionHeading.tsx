import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <p className={`text-[14px] font-medium ${dark ? "text-lime" : "text-brand"}`}>
        {eyebrow}
      </p>
      <h2 className="mt-2.5 max-w-3xl font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[2.9rem]">
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 max-w-2xl text-[15.5px] leading-[1.65] ${dark ? "text-white/65" : "text-ink-2"}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
