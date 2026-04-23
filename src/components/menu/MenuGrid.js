"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function MenuGrid({ category }) {
    const [open, setOpen] = useState(true);
    const Icon = category.icon;

    return (
        <div className="mb-10">

            {/* 🔥 CATEGORY HEADER */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between mb-3 group"
            >
                <div className="flex items-center gap-3">

                    <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gold/20 bg-gold/10">
                        {Icon && <Icon className="text-gold" size={16} />}
                    </div>

                    <h2 className="text-gold text-sm sm:text-lg font-semibold uppercase tracking-widest">
                        {category.category}
                    </h2>
                </div>

                {/* 🔥 RIGHT SIDE (TEXT + ICON) */}
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted group-hover:text-gold transition">

                    <span>
                        {open ? "Hide Menu" : "View Menu"}
                    </span>

                    <FaChevronDown
                        className={`transition duration-300 ${open ? "rotate-180" : ""
                            }`}
                        size={10}
                    />
                </div>
            </button>

            {/* 🔥 ITEMS */}
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="divide-y divide-gold/10"
                >
                    {category.items.map((item, i) => (
                        <div
                            key={i}
                            className="flex justify-between items-center py-3"
                        >
                            {/* LEFT */}
                            <div className="flex items-center gap-2">

                                <span
                                    className={`w-2.5 h-2.5 rounded-full ${item.type === "veg"
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                        }`}
                                />

                                <span className="text-cream text-sm">
                                    {item.name}
                                </span>
                            </div>

                            {/* PRICE */}
                            <span className="text-gold text-sm font-semibold">
                                {item.price}
                            </span>
                        </div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}