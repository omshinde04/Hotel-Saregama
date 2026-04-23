"use client";

import { motion } from "framer-motion";
import { HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/constants";

export default function ContactHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 md:pt-36 lg:pt-40">

            {/* BACKGROUND */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('/images/contact/saregama-location-highway.jpg')",
                }}
            />

            {/* OVERLAYS */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/60 to-ink" />

            {/* CONTENT */}
            <div className="relative z-10 text-center px-6 md:px-10 max-w-3xl mx-auto">

                {/* LABEL */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-label text-gold tracking-[0.25em] block mb-4"
                >
                    GET IN TOUCH
                </motion.span>

                {/* HEADING */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-display italic text-[2.2rem] sm:text-[2.8rem] md:text-h1 text-cream mb-4"
                >
                    Find Us Easily,
                    <br />
                    <span className="text-gold">Reach Us Anytime</span>
                </motion.h1>

                {/* SUBTEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm sm:text-base text-cream/80 mb-8"
                >
                    Located right on the Mumbai–Nashik Expressway,
                    Saregama is the perfect stop — quick access, easy parking, and instant service.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href={PHONE_HREF}
                        className="btn-gold flex items-center justify-center gap-3 px-7 py-3 rounded-full text-sm font-bold uppercase tracking-widest"
                    >
                        <HiOutlinePhone />
                        Call Now
                    </a>

                    <a
                        href={WHATSAPP_HREF}
                        target="_blank"
                        className="btn-outline-gold flex items-center justify-center gap-3 px-7 py-3 rounded-full text-sm font-bold uppercase tracking-widest"
                    >
                        <FaWhatsapp />
                        WhatsApp
                    </a>
                </motion.div>

                {/* QUICK INFO */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-cream/60 uppercase tracking-widest"
                >
                    <span>📍 Ghoti, Nashik</span>
                    <span>🛣️ Highway Access</span>
                    <span>🚗 Parking Available</span>
                    <span>🕐 11AM – 1:30AM</span>
                </motion.div>

            </div>
        </section>
    );
}