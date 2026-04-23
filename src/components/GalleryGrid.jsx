"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GALLERY_IMAGES } from "@/lib/galleryData";

export default function GalleryGrid() {
    const [active, setActive] = useState(null);

    return (
        <section className="bg-ink py-16 md:py-24 overflow-hidden">

            <div className="max-w-container mx-auto px-4 md:px-10">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <span className="text-gold text-xs tracking-[0.35em] block mb-4">
                        GALLERY
                    </span>

                    <h2 className="font-display italic text-3xl md:text-5xl text-cream">
                        The Experience
                    </h2>

                    <div className="gold-divider mx-auto mt-6" />
                </div>

                {/* 🔥 AESTHETIC MASONRY GRID */}
                <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">

                    {GALLERY_IMAGES.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.04 }}
                            className="relative overflow-hidden rounded-md group cursor-pointer break-inside-avoid"
                            onClick={() => setActive(img)}
                        >

                            {/* IMAGE */}
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={500}
                                height={700}
                                unoptimized
                                className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
                            />

                            {/* DARK OVERLAY */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />

                            {/* GLOW */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gold/10 mix-blend-overlay transition duration-500" />

                            {/* LABEL */}
                            <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-cream/80 opacity-0 group-hover:opacity-100 transition duration-300">
                                View
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 🔥 LIGHTBOX */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setActive(null)}
                    >

                        {/* IMAGE WRAPPER */}
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={active.src}
                                alt={active.alt}
                                width={1200}
                                height={800}
                                unoptimized
                                className="w-full max-h-[85vh] object-contain rounded-md"
                            />

                            {/* CLOSE */}
                            <button
                                onClick={() => setActive(null)}
                                className="absolute top-4 right-4 text-xs text-white bg-black/60 px-3 py-1 rounded hover:bg-black transition"
                            >
                                ✕
                            </button>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}