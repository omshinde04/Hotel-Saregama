"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DISHES } from "@/lib/constants";

export default function FoodShowcase() {
    return (
        <section id="menu-showcase" className="py-section bg-ink">
            <div className="max-w-container mx-auto px-6 md:px-10">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-label text-gold tracking-[0.25em] block mb-4">
                        SIGNATURE DISHES
                    </span>

                    <h2 className="font-display italic text-h2 text-cream mb-4">
                        Food Worth Stopping For
                    </h2>

                    <div className="gold-divider mx-auto" />

                    <p className="text-muted mt-6 max-w-lg mx-auto leading-relaxed">
                        Cooked fresh. Served hot. Every single time.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DISHES.map((dish, i) => (
                        <motion.div
                            key={dish.name}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.12,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                        >
                            <DishCard dish={dish} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

/* 🔥 PREMIUM CARD */
function DishCard({ dish }) {
    return (
        <div className="group relative overflow-hidden rounded-md border border-gold/10 hover:border-gold/30 transition-all duration-500 h-[420px] sm:h-[460px] md:h-[500px]">

            {/* IMAGE */}
            <div className="absolute inset-0">
                <Image
                    src={dish.image}
                    alt={dish.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

            {/* HOVER GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gold/10 mix-blend-overlay" />

            {/* TAG */}
            <div className="absolute top-4 left-4">
                <span className="bg-gold text-ink text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {dish.tag}
                </span>
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="glass-card p-5 border-t-2 border-gold">

                    <h3 className="font-serif text-h4 sm:text-h3 text-cream mb-2">
                        {dish.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                        {dish.desc}
                    </p>

                    <div className="flex items-center justify-between">
                        <span className="font-display text-lg sm:text-xl text-gold">
                            {dish.price}
                        </span>

                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-gold text-xs">★</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}