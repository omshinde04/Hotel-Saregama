"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";

const CARDS = [
    {
        title: "Call Us",
        desc: "+91 9403444438",
        icon: HiOutlinePhone,
        href: "tel:+919403444438",
        color: "text-gold",
        border: "hover:border-gold/40",
    },
    {
        title: "WhatsApp",
        desc: "Instant chat support",
        icon: FaWhatsapp,
        href: "https://wa.me/919403444438",
        color: "text-green-500",
        border: "hover:border-green-500",
    },
    {
        title: "Instagram",
        desc: "@hotelsaregama_nsk",
        icon: FaInstagram,
        href: "https://www.instagram.com/hotelsaregama_nsk",
        color: "text-gold",
        border: "hover:border-gold/40",
    },
];

export default function ContactCards() {
    return (
        <section className="relative px-6 md:px-10 py-14 overflow-hidden">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[500px] h-[250px] bg-gold/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-container mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-label text-gold tracking-[0.25em] block mb-4">
                        QUICK CONTACT
                    </span>

                    <h2 className="font-display italic text-h3 text-cream">
                        Reach Us Instantly
                    </h2>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {CARDS.map((card, i) => {
                        const Icon = card.icon;

                        return (
                            <motion.a
                                key={card.title}
                                href={card.href}
                                target="_blank"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className={`group relative glass-card p-7 rounded-md border border-gold/10 ${card.border} transition-all duration-500 overflow-hidden`}
                            >

                                {/* HOVER GLOW */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gold/10" />

                                {/* ICON */}
                                <div className={`w-12 h-12 flex items-center justify-center border border-gold/20 mb-5 ${card.color}`}>
                                    <Icon size={22} />
                                </div>

                                {/* TEXT */}
                                <h4 className="text-cream font-semibold text-lg mb-1 group-hover:text-gold transition">
                                    {card.title}
                                </h4>

                                <p className="text-muted text-sm mb-6">
                                    {card.desc}
                                </p>

                                {/* ACTION */}
                                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted group-hover:text-gold transition">
                                    <span>Connect</span>
                                    <MdArrowOutward className="group-hover:translate-x-1 transition" />
                                </div>

                            </motion.a>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}