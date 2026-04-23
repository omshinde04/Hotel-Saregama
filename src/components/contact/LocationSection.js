"use client";

import { motion } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaWhatsapp,
    FaClock,
} from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineDirections } from "react-icons/md";

export default function LocationSection() {
    return (
        <section className="relative py-16 lg:py-section bg-ink overflow-hidden">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[600px] h-[300px] bg-gold/10 blur-[140px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-container mx-auto px-6 md:px-10">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-label text-gold tracking-[0.25em] block mb-4">
                        LOCATION
                    </span>

                    <h2 className="font-display italic text-h2 text-cream mb-4">
                        Right On Your Route
                    </h2>

                    <p className="text-muted max-w-xl mx-auto text-sm leading-relaxed">
                        Located directly on the Mumbai–Nashik Expressway, Saregama is the
                        perfect stop for travelers, families, and bikers looking for great
                        food, drinks, and comfort.
                    </p>

                    <div className="gold-divider mx-auto mt-6" />
                </motion.div>

                {/* MAIN GRID */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* MAP */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[420px] rounded-md overflow-hidden border border-gold/20 group"
                    >
                        <iframe
                            src="https://www.google.com/maps?q=19.7278837,73.6320107&z=15&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                        />

                        {/* MAP OVERLAY HOVER */}
                        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                        {/* DIRECTIONS BUTTON */}
                        <a
                            href="https://www.google.com/maps/dir//Saregama+Family+Restaurant"
                            target="_blank"
                            className="absolute bottom-4 right-4 flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-ink text-xs font-bold uppercase tracking-widest shadow-lg hover:scale-105 transition"
                        >
                            <MdOutlineDirections />
                            Directions
                        </a>
                    </motion.div>

                    {/* INFO SIDE */}
                    <div className="space-y-6">

                        {/* ADDRESS */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card p-6 border border-gold/10 hover:border-gold/30 transition"
                        >
                            <div className="flex items-start gap-4">
                                <FaMapMarkerAlt className="text-gold mt-1" />
                                <div>
                                    <h4 className="text-cream font-semibold mb-1">
                                        Our Location
                                    </h4>
                                    <p className="text-muted text-sm leading-relaxed">
                                        Mumbai–Nashik Expressway, Ghoti, Nashik – 422402
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* TIMINGS */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-card p-6 border border-gold/10 hover:border-gold/30 transition"
                        >
                            <div className="flex items-start gap-4">
                                <FaClock className="text-gold mt-1" />
                                <div>
                                    <h4 className="text-cream font-semibold mb-1">
                                        Opening Hours
                                    </h4>
                                    <p className="text-muted text-sm">
                                        11:00 AM – 1:30 AM (Open Daily)
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA BUTTONS */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
                        >
                            <a
                                href="tel:+919403444438"
                                className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-gold text-ink font-bold text-sm uppercase tracking-widest hover:scale-[1.03] transition"
                            >
                                <HiOutlinePhone />
                                Call Now
                            </a>

                            <a
                                href="https://wa.me/919403444438"
                                target="_blank"
                                className="flex items-center justify-center gap-3 px-6 py-4 rounded-full border border-gold text-gold font-bold text-sm uppercase tracking-widest hover:bg-gold/10 transition"
                            >
                                <FaWhatsapp />
                                WhatsApp
                            </a>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}