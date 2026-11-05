import Image from "next/image";
import { SITES, shotSrc, type Site } from "@/lib/sites";

const shots = SITES.filter((s): s is Site & { shot: string } => Boolean(s.shot));

// Deal the screenshots into four columns so neighbours differ.
const COLS = [0, 1, 2, 3].map((c) => shots.filter((_, i) => i % 4 === c));
const SPEED = [70, 55, 80, 62];

/**
 * An angled wall of real client homepages. Columns loop vertically in
 * alternating directions at different speeds; hover pauses it.
 */
export default function HeroWall() {
  return (
    <div className="wall pointer-events-auto absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute left-1/2 top-1/2 flex w-[150%] -translate-x-1/2 -translate-y-1/2 -rotate-[10deg] justify-center gap-4 sm:w-[125%] lg:w-[115%] lg:gap-5">
        {COLS.map((col, c) => (
          <div
            key={c}
            className="window-in w-[46%] shrink-0 sm:w-[30%] lg:w-[24%]"
            style={{ "--d": `${0.25 + c * 0.12}s` } as React.CSSProperties}
          >
            <div
              className="wall-col flex flex-col gap-4 lg:gap-5"
              data-down={c % 2 ? "" : undefined}
              style={{ "--speed": `${SPEED[c]}s` } as React.CSSProperties}
            >
              {[...col, ...col].map((site, i) => (
                <div
                  key={`${site.shot}-${i}`}
                  className="overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)]"
                >
                  <div className="flex items-center gap-1 border-b border-white/10 bg-[#222] px-2 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  </div>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={shotSrc(site.shot)}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 260px, 45vw"
                      className="object-cover object-top"
                      preload={i < 2}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
