"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MENU_DATA } from "@/lib/menuData";
import MenuGrid from "./MenuGrid";

export default function MenuTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const [filter, setFilter] = useState("all");

    const currentCategory = MENU_DATA[activeTab];

    let displayData = [];

    if (filter === "all") {
        displayData = [currentCategory];
    } else {
        displayData = MENU_DATA.map((cat) => {
            const filteredItems = cat.items.filter(
                (item) => item.type === filter
            );

            // 🔥 GROUP BY SUBCATEGORY
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
                    <div className="sticky top-20 z-30 bg-ink/80 backdrop-blur border-b border-gold/10 mb-10">
                        <div className="flex overflow-x-auto no-scrollbar">
                            {MENU_DATA.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`relative px-6 py-4 text-xs uppercase tracking-widest ${activeTab === i
                                        ? "text-gold"
                                        : "text-muted hover:text-cream"
                                        }`}
                                >
                                    {cat.icon && (
                                        <cat.icon className="inline mr-2 text-gold" size={14} />
                                    )}
                                    {cat.category}

                                    {activeTab === i && (
                                        <motion.div
                                            layoutId="tabIndicator"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                                        />
                                    )}
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

                                {/* CATEGORY TITLE */}
                                <h2 className="text-gold text-lg tracking-widest mb-6 uppercase">
                                    {cat.category}
                                </h2>

                                {/* SUBCATEGORY GROUPS */}
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