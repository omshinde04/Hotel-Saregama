"use client";

import { MARQUEE_ITEMS } from "@/lib/constants";

export default function MarqueeStrip() {
    const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]; // seamless loop

    return (
        <div className="relative overflow-hidden border-y border-gold/10 bg-brown/30 backdrop-blur-xl py-4 md:py-5">

            {/* Gradient Fade Edges (premium look) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink to-transparent z-10" />

            {/* Track */}
            <div className="flex w-max animate-[marquee_22s_linear_infinite] hover:[animation-play-state:paused]">

                {items.map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-6 px-6 md:px-10 text-[10px] md:text-xs uppercase tracking-[0.25em] text-cream/60 whitespace-nowrap"
                    >
                        <span className="flex items-center gap-2">
                            {item}
                        </span>

                        {/* Separator Dot */}
                        <span className="w-1 h-1 rounded-full bg-gold/40" />
                    </div>
                ))}

            </div>
        </div>
    );
}