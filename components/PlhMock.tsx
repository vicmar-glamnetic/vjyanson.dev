/**
 * The Peace Love Hormones homepage hero, rebuilt as a two-state mock:
 * a dashed wireframe that fills in with the real design. Every element is
 * positioned in the same place as on the live page (measured from a
 * 960×600 screenshot), and sized in container units so it scales with
 * the browser frame.
 */

const serif = "font-['Georgia',ui-serif,serif]";
const tr = "transition-all duration-700 ease-out";

/** Absolute position from 960×600 screenshot coordinates. */
const at = (l: number, t: number, w: number, h: number): React.CSSProperties => ({
  left: `${(l / 960) * 100}%`,
  top: `${(t / 600) * 100}%`,
  width: `${(w / 960) * 100}%`,
  height: `${(h / 600) * 100}%`,
});

const wireBox = "border border-dashed border-ink-3/50";

/** Wireframe and design versions of the same element, crossfading. */
function Swap({
  on,
  style,
  wire,
  design,
  delay = 0,
}: {
  on: boolean;
  style: React.CSSProperties;
  wire: React.ReactNode;
  design: React.ReactNode;
  delay?: number;
}) {
  const d = { transitionDelay: `${delay}ms` };
  return (
    <div className="absolute" style={style}>
      <div className={`absolute inset-0 ${tr} ${on ? "opacity-0" : "opacity-100"}`} style={d}>
        {wire}
      </div>
      <div className={`absolute inset-0 ${tr} ${on ? "translate-y-0 opacity-100" : "translate-y-[6%] opacity-0"}`} style={d}>
        {design}
      </div>
    </div>
  );
}

function Cross() {
  return (
    <svg className="absolute inset-0 h-full w-full text-ink-3/40" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden>
      <path d="M0 0L100 100M100 0L0 100" stroke="currentColor" strokeWidth="0.6" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

const Bar = ({ w = "100%", h = "100%" }: { w?: string; h?: string }) => (
  <div className="rounded-[0.3cqw] bg-ink-3/20" style={{ width: w, height: h }} />
);

const NAV = [
  { x: 75, w: 55, label: "TINCTURES" },
  { x: 148, w: 69, label: "STACK & SAVE" },
  { x: 236, w: 42, label: "SCIENCE" },
  { x: 296, w: 56, label: "OUR STORY" },
  { x: 370, w: 40, label: "MORE ⌄" },
];

const CHIPS = ["Lavender", "Chamomile", "Passionflower", "Valerian"];

export default function PlhMock({ designed }: { designed: boolean }) {
  const on = designed;

  return (
    <div className="@container absolute inset-0 overflow-hidden" aria-hidden>
      {/* page background */}
      <div
        className={`absolute inset-0 ${tr}`}
        style={{ background: on ? "linear-gradient(180deg,#f6f1e7 0%,#f4eedf 60%,#f3e3bd 100%)" : "#ffffff" }}
      />

      {/* announcement bar */}
      <Swap
        on={on}
        style={at(0, 0, 960, 24)}
        wire={<div className="h-full w-full bg-ink-3/12" />}
        design={
          <div className="grid h-full w-full place-items-center bg-[#111] text-[0.9cqw] font-semibold tracking-[0.08em] text-white">
            FREE SHIPPING ON EVERY ORDER · 30-DAY MONEY-BACK PROMISE
          </div>
        }
      />

      {/* nav links */}
      {NAV.map((n, i) => (
        <Swap
          key={n.label}
          on={on}
          delay={i * 40}
          style={at(n.x, 50, n.w + 6, 10)}
          wire={<Bar h="70%" />}
          design={<span className="block whitespace-nowrap text-[0.95cqw] font-semibold tracking-[0.06em] text-[#2b2b2b]">{n.label}</span>}
        />
      ))}

      {/* logo */}
      <Swap
        on={on}
        style={at(436, 29, 88, 52)}
        wire={<div className={`relative h-full w-full ${wireBox}`}><Cross /></div>}
        design={
          <div className={`flex h-full flex-col items-center justify-center leading-[0.85] text-[#1c1c1c] ${serif}`}>
            <span className="text-[2.1cqw] leading-none">☮♡♀</span>
            <span className="text-[1.45cqw] tracking-[-0.02em]">Peace Love</span>
            <span className="text-[1.45cqw] tracking-[-0.02em]">Hormones</span>
          </div>
        }
      />

      {/* quiz pill, search, cart */}
      <Swap
        on={on}
        delay={80}
        style={at(625, 43, 155, 25)}
        wire={<div className={`h-full w-full rounded-full ${wireBox}`} />}
        design={
          <div className="grid h-full w-full place-items-center rounded-full bg-[#f5d5c7] text-[0.9cqw] font-semibold tracking-[0.06em] text-[#2b2b2b]">
            ✦ TAKE THE QUIZ (30 SEC)
          </div>
        }
      />
      <Swap
        on={on}
        delay={120}
        style={at(792, 47, 16, 16)}
        wire={<div className={`h-full w-full rounded-full ${wireBox}`} />}
        design={<div className="h-full w-full rounded-full border-[0.18cqw] border-[#2b2b2b]" />}
      />
      <Swap
        on={on}
        delay={140}
        style={at(820, 42, 66, 27)}
        wire={<div className={`h-full w-full rounded-full ${wireBox}`} />}
        design={
          <div className="grid h-full w-full place-items-center rounded-full border border-[#2b2b2b] text-[0.9cqw] font-semibold tracking-[0.06em] text-[#2b2b2b]">
            CART
          </div>
        }
      />
      <div className={`absolute inset-x-0 h-px ${tr} ${on ? "bg-[#d6cdbb]" : "bg-ink-3/20"}`} style={{ top: `${(88 / 600) * 100}%` }} />

      {/* headline */}
      <Swap
        on={on}
        delay={150}
        style={at(75, 196, 400, 132)}
        wire={
          <div className="flex h-full flex-col justify-center gap-[9%]">
            <Bar w="58%" h="17%" />
            <Bar w="96%" h="17%" />
            <Bar w="52%" h="17%" />
          </div>
        }
        design={
          <h4 className={`text-[4.25cqw] font-bold leading-none tracking-tight text-[#151515] ${serif}`}>
            This is What
            <br />
            Real Herbal Medicine
            <br />
            Looks Like.
          </h4>
        }
      />

      {/* subheading with left rule */}
      <Swap
        on={on}
        delay={220}
        style={at(75, 334, 375, 44)}
        wire={
          <div className="flex h-full flex-col justify-center gap-[18%] border-l-2 border-dashed border-ink-3/40 pl-[4%]">
            <Bar w="92%" h="18%" />
            <Bar w="60%" h="18%" />
          </div>
        }
        design={
          <p className="h-full border-l-2 border-[#e2c98f] pl-[4%] text-[1.42cqw] leading-[1.45] text-[#3b3b3b]">
            Clinical-grade herbal medicine formulated exclusively for women, by women.{" "}
            <b className="text-[#151515]">All results, no junk.</b>
          </p>
        }
      />

      {/* rating */}
      <Swap
        on={on}
        delay={280}
        style={at(75, 396, 328, 32)}
        wire={<div className={`h-full w-full rounded-full ${wireBox}`} />}
        design={
          <div className="flex h-full w-full items-center gap-[3%] rounded-full border-[0.2cqw] border-[#151515] bg-white px-[5%] shadow-[0.3cqw_0.3cqw_0_#151515]">
            <span className="text-[1.15cqw] tracking-wider text-[#b8862b]">★★★★★</span>
            <b className="text-[1.15cqw] text-[#151515]">4.9</b>
            <span className={`truncate text-[0.95cqw] italic text-[#7a3b3b] ${serif}`}>Join the women who chose real herbal medicine</span>
          </div>
        }
      />

      {/* CTA */}
      <Swap
        on={on}
        delay={340}
        style={at(75, 452, 280, 46)}
        wire={<div className={`relative h-full w-full rounded-xl ${wireBox}`} />}
        design={
          <div className="grid h-full w-full place-items-center rounded-[1.2cqw] bg-[#151515] text-[1.5cqw] font-bold tracking-[0.07em] text-white shadow-[0.45cqw_0.45cqw_0_#f0d36c]">
            BUILD YOUR SUBSCRIPTION →
          </div>
        }
      />
      <Swap
        on={on}
        delay={380}
        style={at(75, 511, 220, 12)}
        wire={<Bar h="60%" w="85%" />}
        design={<span className="block whitespace-nowrap text-[0.95cqw] text-[#3b3b3b] underline">Take our short quiz for a custom recommendation →</span>}
      />

      {/* product card */}
      <div
        className={`absolute overflow-hidden rounded-[1.8cqw] ${tr} ${
          on ? "border-[0.25cqw] border-[#151515] bg-[#fbf7ef] shadow-[0.6cqw_0.6cqw_0_#151515]" : `${wireBox} bg-transparent`
        }`}
        style={{ ...at(497, 127, 388, 443), transitionDelay: "200ms" }}
      >
        {/* image half */}
        <div className="absolute inset-y-0 left-0 w-[51%]">
          <div className={`absolute inset-0 ${tr} ${on ? "opacity-0" : "opacity-100"}`}><Cross /></div>
          <div
            className={`absolute inset-0 ${tr} ${on ? "opacity-100" : "opacity-0"}`}
            style={{
              transitionDelay: "300ms",
              background:
                "radial-gradient(ellipse at 30% 20%, #b9a6d9 0%, transparent 45%), radial-gradient(ellipse at 80% 35%, #a691cf 0%, transparent 40%), linear-gradient(180deg,#8fa97a 0%,#6f8a5c 55%,#b8a98d 100%)",
            }}
          >
            {/* bottle */}
            <div className="absolute left-1/2 top-[18%] h-[14%] w-[12%] -translate-x-1/2 rounded-t-[40%] bg-[#1a1a1a]" />
            <div className="absolute left-1/2 top-[31%] h-[6%] w-[16%] -translate-x-1/2 bg-[#1a1a1a]" />
            <div className="absolute left-1/2 top-[36%] h-[54%] w-[44%] -translate-x-1/2 rounded-[1.2cqw] bg-[#4a2a14] shadow-[inset_0.6cqw_0_0_rgba(255,255,255,0.12)]">
              <div className="absolute inset-x-[6%] top-[14%] h-[66%] rounded-[0.4cqw] bg-[#c9b8ec] px-[6%] pt-[8%] text-center text-[#2d2346]">
                <div className={`text-[0.85cqw] leading-[1.05] ${serif}`}>peace love hormones</div>
                <div className={`mt-[14%] text-[2.2cqw] font-bold ${serif}`}>Sleepy</div>
              </div>
            </div>
            <div className="absolute left-[4%] top-[3%] rounded-full border-[0.15cqw] border-[#151515] bg-[#7d1f2c] px-[5%] py-[1.5%] text-[0.8cqw] font-semibold tracking-[0.06em] text-white">
              FOR NIGHTLY REST
            </div>
          </div>
        </div>

        {/* info half */}
        <div className="absolute inset-y-0 right-0 w-[49%] border-l border-dashed border-ink-3/30 p-[4.5%]">
          <Swap
            on={on}
            delay={360}
            style={{ left: "8%", right: "8%", top: "4%", height: "4%" }}
            wire={<Bar w="70%" h="70%" />}
            design={<span className="block whitespace-nowrap text-[0.85cqw] font-semibold tracking-[0.06em] text-[#7d1f2c]">○ DEEP SLEEP · SLEEPY</span>}
          />
          <Swap
            on={on}
            delay={400}
            style={{ left: "8%", right: "8%", top: "10%", height: "17%" }}
            wire={<div className="flex h-full flex-col justify-center gap-[12%]"><Bar w="80%" h="26%" /><Bar w="70%" h="26%" /></div>}
            design={<p className={`text-[2.45cqw] font-bold leading-[1.02] text-[#151515] ${serif}`}>Helps you wind down.</p>}
          />
          <Swap
            on={on}
            delay={430}
            style={{ left: "8%", right: "8%", top: "28%", height: "8%" }}
            wire={<div className="flex h-full flex-col justify-center gap-[15%]"><Bar w="90%" h="25%" /><Bar w="55%" h="25%" /></div>}
            design={<p className="text-[0.95cqw] leading-[1.35] text-[#3b3b3b]">Supports deep, restful sleep — without synthetic melatonin.</p>}
          />
          <Swap
            on={on}
            delay={460}
            style={{ left: "8%", right: "8%", top: "40%", height: "3%" }}
            wire={<Bar w="45%" h="80%" />}
            design={<span className="block text-[0.85cqw] font-semibold tracking-[0.08em] text-[#7d1f2c]">WHAT&apos;S INSIDE</span>}
          />
          {CHIPS.map((c, i) => (
            <Swap
              key={c}
              on={on}
              delay={500 + i * 60}
              style={{ left: "8%", top: `${46 + i * 7.6}%`, width: `${44 + c.length * 2.4}%`, height: "5.6%" }}
              wire={<div className={`h-full w-full rounded-full ${wireBox}`} />}
              design={
                <div className="flex h-full w-full items-center gap-[6%] rounded-full border border-[#151515] bg-white/60 px-[6%] text-[0.85cqw] font-semibold tracking-[0.06em] text-[#2b2b2b]">
                  <span className="text-[#6f8a5c]">❀</span>
                  {c.toUpperCase()}
                </div>
              }
            />
          ))}
          <Swap
            on={on}
            delay={760}
            style={{ left: "8%", right: "8%", top: "80%", height: "10%" }}
            wire={<div className={`h-[70%] w-[85%] rounded-full ${wireBox}`} />}
            design={
              <div className="flex h-[70%] w-[85%] items-center rounded-full border border-[#151515] bg-white/60 px-[6%] text-[0.8cqw] font-semibold tracking-wider text-[#2b2b2b]">
                SUPPORTS A CALM NERVOUS SYSTEM
              </div>
            }
          />
        </div>
      </div>

      {/* bundle bar */}
      <Swap
        on={on}
        delay={600}
        style={at(225, 535, 510, 52)}
        wire={<div className={`h-full w-full rounded-xl bg-paper ${wireBox}`} />}
        design={
          <div className="flex h-full w-full items-center justify-between rounded-[1.3cqw] border-[0.2cqw] border-[#151515] bg-[#fbf7ef] px-[3%] shadow-[0.35cqw_0.35cqw_0_#151515]">
            <div>
              <div className="text-[0.8cqw] font-semibold tracking-[0.08em] text-[#7d1f2c]">SAVE UP TO 40%</div>
              <div className={`text-[1.35cqw] font-bold text-[#151515] ${serif}`}>Pick the tinctures your body is asking for</div>
            </div>
            <div className="rounded-[0.9cqw] border-[0.2cqw] border-[#151515] bg-[#f0d36c] px-[3%] py-[1.2%] text-[0.85cqw] font-bold tracking-wider text-[#151515]">
              BUILD YOUR BUNDLE →
            </div>
          </div>
        }
      />
      <Swap
        on={on}
        delay={680}
        style={at(768, 563, 104, 25)}
        wire={<div className={`h-full w-full rounded-full ${wireBox}`} />}
        design={
          <div className="grid h-full w-full place-items-center rounded-full bg-[#f0d36c] text-[0.85cqw] font-bold tracking-wider text-[#151515]">
            SHOP SLEEPY →
          </div>
        }
      />
    </div>
  );
}
