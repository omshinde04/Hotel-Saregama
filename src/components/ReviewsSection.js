"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REVIEWS } from "@/lib/constants";

import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function ReviewsSection() {
    const [active, setActive] = useState(0);

    const prev = () => setActive((a) => (a - 1 + REVIEWS.length) % REVIEWS.length);
    const next = () => setActive((a) => (a + 1) % REVIEWS.length);

    return (
        <section
            id="reviews"
            className="pt-10 pb-20 lg:pt-20 lg:pb-section bg-brown/10 relative overflow-hidden"
        >

            {/* GOLD GLOW */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[500px] h-[300px] bg-gold/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-container mx-auto px-6 md:px-10">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-14"
                >
                    <span className="text-label text-gold tracking-[0.25em] block mb-4">
                        TESTIMONIALS
                    </span>

                    <h2 className="font-display italic text-h2 text-cream">
                        What Travelers Say
                    </h2>

                    <div className="gold-divider mx-auto mt-6" />

                    {/* Rating Badge */}
                    <div className="inline-flex items-center gap-3 mt-8 glass-card px-6 py-3 rounded-full border border-gold/20">
                        <span className="font-display text-2xl text-gold">4.8</span>

                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-gold text-sm" />
                            ))}
                        </div>

                        <span className="text-xs text-muted">
                            Google · 500+ Reviews
                        </span>
                    </div>
                </motion.div>

                {/* DESKTOP GRID */}
                <div className="hidden md:grid grid-cols-3 gap-6">
                    {REVIEWS.slice(0, 3).map((review, i) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <ReviewCard review={review} />
                        </motion.div>
                    ))}
                </div>

                {/* MOBILE CAROUSEL */}
                <div className="md:hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.4 }}
                        >
                            <ReviewCard review={REVIEWS[active]} />
                        </motion.div>
                    </AnimatePresence>

                    {/* CONTROLS */}
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <button
                            onClick={prev}
                            className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition"
                        >
                            <MdChevronLeft />
                        </button>

                        <div className="flex gap-2">
                            {REVIEWS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`h-0.5 transition-all ${i === active ? "w-8 bg-gold" : "w-3 bg-gold/30"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition"
                        >
                            <MdChevronRight />
                        </button>
                    </div>
                </div>

                {/* EXTRA REVIEWS DESKTOP */}
                <div className="hidden md:grid grid-cols-2 gap-6 mt-6">
                    {REVIEWS.slice(3).map((review, i) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.12 }}
                        >
                            <ReviewCard review={review} compact />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

/* 🔥 PREMIUM CARD */
function ReviewCard({ review, compact = false }) {
    return (
        <div className={`group glass-card border border-gold/15 hover:border-gold/30 transition-all duration-500 ${compact ? "p-6" : "p-8"} rounded-md`}>

            {/* QUOTE ICON */}
            <FaQuoteLeft className="text-gold/30 mb-4" size={compact ? 18 : 24} />

            {/* STARS */}
            <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-gold text-xs" />
                ))}
            </div>

            {/* TEXT */}
            <p className={`italic text-cream/80 mb-6 leading-relaxed ${compact ? "text-sm" : "text-base"}`}>
                “{review.text}”
            </p>

            {/* USER */}
            <div className="flex items-center gap-3 border-t border-gold/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-lg">
                    {review.icon}
                </div>

                <div>
                    <p className="text-sm font-semibold text-cream">
                        {review.name}
                    </p>
                    <p className="text-xs text-gold uppercase tracking-widest">
                        {review.role}
                    </p>
                </div>
            </div>

        </div>
    );
}