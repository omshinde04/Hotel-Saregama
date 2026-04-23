"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = [
    { src: "/images/gallery/saregama-chef-plating.jpg", span: "col-span-2 row-span-2" },
    { src: "/images/gallery/saregama-cocktail-bar.jpg", span: "" },
    { src: "/images/gallery/saregama-restaurant-ambience.jpg", span: "" },
    { src: "/images/gallery/saregama-highway-night.jpg", span: "row-span-2" },
    { src: "/images/gallery/saregama-family-dining.jpg", span: "" },
    { src: "/images/gallery/saregama-bar-premium.jpg", span: "" },
];

export default function GallerySection() {
    return (
        <section id="gallery" className="pt-10 pb-20 lg:pt-20 lg:pb-section bg-ink">

            {/* HEADER */}
            <div className="max-w-container mx-auto px-6 md:px-10 mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-label text-gold tracking-[0.25em] block mb-4">
                        INSIDE SAREGAMA
                    </span>

                    <h2 className="font-display italic text-h2 text-cream">
                        The Vibe. The Food. The Night.
                    </h2>

                    <div className="gold-divider mx-auto mt-6" />
                </motion.div>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden md:grid grid-cols-4 auto-rows-[180px] gap-3 px-6 md:px-10">

                {IMAGES.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className={`relative overflow-hidden group rounded-md border border-gold/10 hover:border-gold/30 transition-all duration-500 ${img.span}`}
                    >
                        <Image
                            src={img.src}
                            alt="Saregama restaurant gallery"
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-80 group-hover:opacity-50 transition" />

                        {/* Hover Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gold/10 transition duration-500" />
                    </motion.div>
                ))}

            </div>

            {/* MOBILE GRID */}
            <div className="md:hidden grid grid-cols-2 gap-3 px-6">
                {IMAGES.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="relative overflow-hidden rounded-md border border-gold/10 h-44"
                    >
                        <Image
                            src={img.src}
                            alt="Saregama restaurant gallery"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                ))}
            </div>

        </section>
    );
}