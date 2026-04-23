"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MdCheckCircleOutline } from "react-icons/md";
import { FEATURES } from "@/lib/constants";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="pt-8 pb-16 sm:pt-10 lg:pt-20 relative overflow-hidden bg-ink"
        >
            {/* Glow Background */}
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-30 blur-[120px] bg-brown/60" />

            <div className="max-w-container mx-auto px-6 md:px-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

                    {/* IMAGE SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="relative"
                    >
                        {/* Frame */}
                        <div className="absolute -top-4 -left-4 right-6 bottom-6 border border-gold/20 hidden sm:block" />

                        <div className="relative overflow-hidden group">
                            <Image
                                src="/images/about/saregama-restaurant-interior-ghoti-nashik.jpg"
                                alt="Saregama restaurant interior Ghoti Nashik"
                                width={600}
                                height={700}
                                className="w-full h-[420px] sm:h-[500px] md:h-[600px] object-cover grayscale group-hover:grayscale-0 transition duration-1000"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent group-hover:from-ink/40 transition duration-700" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-5 -right-5 glass-card border border-gold/40 p-5 hidden md:block"
                        >
                            <p className="font-display text-3xl text-gold">15+</p>
                            <p className="text-xs text-cream tracking-widest uppercase mt-1">
                                Years Experience
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* TEXT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                    >
                        <span className="text-label text-gold tracking-[0.25em] block mb-4">
                            THE EXPERIENCE
                        </span>

                        <h2 className="font-display italic text-h2 text-cream mb-6 leading-tight">
                            More Than Food —{" "}
                            <span className="text-gold-gradient">It’s an Experience</span>
                        </h2>

                        <div className="gold-divider mb-8" />

                        <p className="text-muted leading-relaxed mb-6 text-sm sm:text-base md:text-lg">
                            Located on the Mumbai–Nashik Expressway, Saregama offers the perfect
                            break for travelers — combining comfort, taste, and hospitality.
                        </p>

                        <p className="text-muted leading-relaxed mb-10 text-sm sm:text-base md:text-lg">
                            Whether you're traveling with family or riding solo, we make every
                            stop memorable with delicious food and a relaxing environment.
                        </p>

                        {/* FEATURES */}
                        <ul className="space-y-4 mb-10">
                            {FEATURES.map((feat) => (
                                <li key={feat} className="flex items-start gap-3">
                                    <MdCheckCircleOutline className="text-gold mt-1" size={18} />
                                    <span className="text-cream/80 text-sm leading-relaxed">
                                        {feat}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* STATS */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-gold/10">
                            {[
                                { val: "4.8★", label: "Rating" },
                                { val: "500+", label: "Guests" },
                                { val: "Open Late", label: "Daily" },
                            ].map((item) => (
                                <div key={item.label}>
                                    <p className="font-display text-xl sm:text-2xl text-gold">
                                        {item.val}
                                    </p>
                                    <p className="text-[10px] sm:text-xs text-muted uppercase tracking-widest mt-1">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}