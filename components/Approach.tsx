import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PRINCIPLES = [
  {
    title: "I read the code before I change it",
    body: "Most stores and sites I inherit have three years of other people's decisions in them. Some of those decisions are load-bearing. I spend the first day reading rather than refactoring.",
  },
  {
    title: "Sections and settings over hardcoded markup",
    body: "If a merchandiser has to message a developer to swap a banner, the build has failed. Anything that will change quarterly gets a schema setting.",
  },
  {
    title: "Version control, not the theme editor",
    body: "Work happens on a branch and goes out through a preview theme. Editing live code in the admin is how stores go down on a Friday afternoon.",
  },
  {
    title: "Apps and plugins are a cost",
    body: "Every Shopify app or WordPress plugin adds scripts to your site. Sometimes that trade is worth it. Often, fifteen lines of Liquid or PHP does the same job without the render-blocking bundle.",
  },
  {
    title: "I'd rather tell you it's a bad idea",
    body: "If a request will slow the store down or break at scale, you'll hear that from me before I build it — and then I'll build whichever version you decide on.",
  },
];

export default function Approach() {
  return (
    <section className="border-b border-line bg-canvas px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How I work"
          title="A few things worth knowing"
        />

        <ol className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {PRINCIPLES.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={(i % 2) * 70}
              className="border-t border-line pt-5"
            >
              <p className="font-display text-[15px] font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-[18px] font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.7] text-ink-2">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
