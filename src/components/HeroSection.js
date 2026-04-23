"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/constants";

const SLIDES = [
    "/images/hero/saregama-restaurant-highway.jpg",
    "/images/hero/saregama-bar-drinks.jpg",
    "/images/hero/saregama-restaurant-ambience.jpg",
    "/images/hero/saregama-premium-rooms.jpg", // 🏨 NEW
];

export default function HeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % SLIDES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden flex items-start md:items-center justify-center pt-28 md:pt-0">

            {/* BACKGROUND */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.4 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${SLIDES[index]})`,
                        }}
                    />
                </AnimatePresence>
            </div>

            {/* OVERLAYS (IMPROVED VISIBILITY) */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-ink/40" />

            {/* CONTENT */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 md:px-10 text-center">

                {/* LOCATION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6 flex items-center justify-center gap-3"
                >
                    <div className="h-px w-10 bg-gold/50" />
                    <span className="text-label text-gold tracking-[0.25em]">
                        MUMBAI–NASHIK HIGHWAY · GHOTI · NASHIK
                    </span>
                    <div className="h-px w-10 bg-gold/50" />
                </motion.div>

                {/* HEADING */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-hero text-cream mb-5"
                >
                    Food. Drinks. Stay.
                    <br />
                    <span className="text-gold-gradient">
                        All in One Stop
                    </span>
                </motion.h1>

                {/* SUBTEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-sm sm:text-base md:text-lg text-cream/80 mb-10 max-w-xl mx-auto"
                >
                    Enjoy premium dining, a full bar experience, and comfortable stays —
                    the perfect highway destination at Saregama.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href={PHONE_HREF}
                        className="btn-gold flex items-center gap-3 px-8 py-4 rounded-full uppercase text-sm font-bold tracking-widest"
                    >
                        <HiOutlinePhone />
                        Call Now
                    </a>

                    <a
                        href={WHATSAPP_HREF}
                        target="_blank"
                        className="btn-outline-gold flex items-center gap-3 px-8 py-4 rounded-full uppercase text-sm font-bold tracking-widest"
                    >
                        <FaWhatsapp />
                        WhatsApp
                    </a>
                </motion.div>

                {/* TRUST */}
                <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-cream/60 uppercase tracking-widest">
                    <span>🍽️ Food</span>
                    <span>🍺 Bar</span>
                    <span>🏨 Rooms</span>
                    <span>🛣️ Highway Stop</span>
                </div>

            </div>

            {/* SCROLL */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold">
                <MdKeyboardArrowDown className="animate-scroll-hint" size={24} />
            </div>

        </section>
    );
}