"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import {
    FaDrumstickBite,
    FaWineGlassAlt,
} from "react-icons/fa";
import { GiMeal, GiBowlOfRice } from "react-icons/gi";

import { MENU_CATEGORIES } from "@/lib/constants";

const ICON_MAP = {
    starters: <FaDrumstickBite />,
    mains: <GiMeal />,
    biryani: <GiBowlOfRice />,
    drinks: <FaWineGlassAlt />,
};

export default function MenuSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section
            id="menu"
            className="pt-10 pb-20 lg:pt-20 lg:pb-section bg-surface/30"
        >
            <div className="max-w-container mx-auto px-6 md:px-10">

                {/* 🔥 HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between gap-6 mb-12"
                >
                    <div>
                        <span className="text-label text-gold tracking-[0.25em] block mb-3">
                            OUR MENU
                        </span>

                        <h2 className="font-display italic text-h2 text-cream">
                            Curated Flavors
                        </h2>
                    </div>

                    <p className="text-muted text-sm max-w-xs">
                        From highway bites to full meals — crafted fresh every time.
                    </p>
                </motion.div>

                {/* 🔥 TABS */}
                <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scroll-container">
                    {MENU_CATEGORIES.map((cat, i) => (
                        <button
                            key={cat.label}
                            onClick={() => setActiveTab(i)}
                            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap
                ${activeTab === i
                                    ? "bg-gold text-ink"
                                    : "bg-transparent text-muted border border-gold/10 hover:text-cream"
                                }`}
                        >
                            <span className="text-sm">
                                {ICON_MAP[cat.icon]}
                            </span>
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* 🔥 ITEMS */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {MENU_CATEGORIES[activeTab].items.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="group glass-card p-5 border border-gold/10 hover:border-gold/30 transition-all duration-500 rounded-md"
                            >
                                {/* NAME + PRICE */}
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-serif text-h4 text-cream group-hover:text-gold transition">
                                        {item.name}
                                    </h4>

                                    <span className="font-display text-lg text-gold">
                                        {item.price}
                                    </span>
                                </div>

                                {/* DESC */}
                                {item.desc && (
                                    <p className="text-xs text-muted italic leading-relaxed">
                                        {item.desc}
                                    </p>
                                )}

                                {/* LINE */}
                                <div className="mt-4 h-px bg-gold/10 group-hover:bg-gold/30 transition" />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* 🔥 CTA (FIXED) */}
                <div className="text-center mt-14">
                    <Link
                        href="/menu"
                        className="btn-outline-gold inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm uppercase tracking-widest"
                    >
                        View Full Menu
                    </Link>
                </div>

            </div>
        </section>
    );
}