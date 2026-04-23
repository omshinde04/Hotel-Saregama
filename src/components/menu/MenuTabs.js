"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MENU_DATA } from "@/lib/menuData";
import MenuGrid from "./MenuGrid";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MenuTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const [filter, setFilter] = useState("all");

    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: dir === "left" ? -150 : 150,
            behavior: "smooth",
        });
    };

    const currentCategory = MENU_DATA[activeTab];

    let displayData = [];

    if (filter === "all") {
        displayData = [currentCategory];
    } else {
        displayData = MENU_DATA.map((cat) => {
            const filteredItems = cat.items.filter(
                (item) => item.type === filter
            );

            const grouped = {};

            filteredItems.forEach((item) => {
                if (!grouped[item.sub]) grouped[item.sub] = [];
                grouped[item.sub].push(item);
            });

            return {
                ...cat,
                groupedItems: grouped,
            };
        }).filter((cat) => Object.keys(cat.groupedItems).length > 0);
    }

    return (
        <section className="px-6 md:px-10 pb-20">
            <div className="max-w-container mx-auto">

                {/* 🔥 FILTER */}
                <div className="flex justify-center mb-8 gap-3 flex-wrap">
                    {["all", "veg", "non-veg"].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest border transition ${filter === type
                                ? "bg-gold text-ink border-gold"
                                : "border-gold/20 text-muted hover:text-cream"
                                }`}
                        >
                            {type === "all"
                                ? "All"
                                : type === "veg"
                                    ? "Veg 🌱"
                                    : "Non-Veg 🍗"}
                        </button>
                    ))}
                </div>

                {/* 🔥 CATEGORY TABS */}
                {filter === "all" && (
                    <div className="relative mb-10">

                        {/* LEFT ARROW */}
                        <button
                            onClick={() => scroll("left")}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-ink/80 backdrop-blur p-2 border border-gold/20 rounded-full"
                        >
                            <FaChevronLeft size={12} className="text-gold" />
                        </button>

                        {/* RIGHT ARROW */}
                        <button
                            onClick={() => scroll("right")}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-ink/80 backdrop-blur p-2 border border-gold/20 rounded-full"
                        >
                            <FaChevronRight size={12} className="text-gold" />
                        </button>

                        {/* SCROLL CONTAINER */}
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto no-scrollbar gap-2 px-10"
                        >
                            {MENU_DATA.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`relative px-5 py-3 whitespace-nowrap text-xs uppercase tracking-widest border rounded-full transition ${activeTab === i
                                        ? "bg-gold text-ink border-gold"
                                        : "border-gold/20 text-muted hover:text-cream"
                                        }`}
                                >
                                    {cat.icon && (
                                        <cat.icon className="inline mr-2 text-gold" size={14} />
                                    )}
                                    {cat.category}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* 🔥 OUTPUT */}
                <div className="space-y-16">

                    {filter === "all" ? (
                        <MenuGrid category={currentCategory} />
                    ) : (
                        displayData.map((cat, i) => (
                            <div key={i}>

                                <div className="flex items-center gap-3 mb-6">

                                    {/* ICON */}
                                    {cat.icon && (
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 border border-gold/20">
                                            <cat.icon className="text-gold" size={14} />
                                        </span>
                                    )}

                                    {/* TITLE */}
                                    <h2 className="text-gold text-lg tracking-widest uppercase">
                                        {cat.category}
                                    </h2>

                                    {/* LINE */}
                                    <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent ml-3" />

                                </div>

                                {/* SUBCATEGORY */}
                                {Object.entries(cat.groupedItems).map(
                                    ([sub, items], index) => (
                                        <div key={index} className="mb-10">

                                            <h3 className="text-cream/80 text-sm uppercase tracking-widest mb-4 border-l-2 border-gold pl-3">
                                                {sub}
                                            </h3>

                                            <MenuGrid
                                                category={{
                                                    category: "",
                                                    items,
                                                }}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        ))
                    )}

                </div>

            </div>
        </section>
    );
}