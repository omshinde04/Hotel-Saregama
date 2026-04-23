"use client";

import { motion } from "framer-motion";

export default function MenuHero() {
    return (
        <section className="pt-28 pb-16 text-center bg-ink px-6">

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-h1 font-display text-gold mb-4"
            >
                Our Full Menu
            </motion.h1>

            <p className="text-muted max-w-xl mx-auto">
                Real flavors. Real highway experience. Carefully crafted dishes for every traveler.
            </p>

        </section>
    );
}