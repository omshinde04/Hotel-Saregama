"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import {
    HiOutlinePhone,
    HiX,
    HiMenuAlt3,
    HiOutlineHome,
    HiOutlinePhotograph,
    HiOutlinePhoneOutgoing,
} from "react-icons/hi";

import { FaWhatsapp, FaUtensils } from "react-icons/fa";

import { NAV_LINKS, PHONE_HREF, WHATSAPP_HREF } from "@/lib/constants";

const ICON_MAP = {
    "/": <HiOutlineHome />,
    "/menu": <FaUtensils />,
    "/gallery": <HiOutlinePhotograph />,
    "/contact": <HiOutlinePhoneOutgoing />,
};

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock scroll
    useEffect(() => {
        document.body.classList.toggle("mobile-menu-open", menuOpen);
        return () => document.body.classList.remove("mobile-menu-open");
    }, [menuOpen]);

    return (
        <>
            {/* HEADER */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-ink/80 backdrop-blur-2xl border-b border-gold/10 shadow-[0_8px_40px_rgba(0,0,0,0.6)] py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-container mx-auto px-6 md:px-10 flex items-center justify-between">

                    <Link href="/" className="flex items-center gap-3 group">

                        {/* LOGO IMAGE */}
                        <div className="relative w-12 h-12 md:w-14 md:h-14 transition duration-300 group-hover:scale-105">

                            <Image
                                src="/logo.png"
                                alt="Saregama Restaurant Logo"
                                fill
                                priority
                                className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                            />

                        </div>

                        {/* TEXT */}
                        <div className="flex flex-col leading-tight">
                            <span className="font-display italic text-xl md:text-2xl text-gold tracking-wide">
                                Saregama
                            </span>
                            <span className="text-[10px] md:text-xs text-muted tracking-widest uppercase">
                                Restaurant • Rooms • Bar
                            </span>
                        </div>

                    </Link>
                    {/* DESKTOP NAV */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-2 nav-link group ${pathname === link.href ? "active" : ""
                                    }`}
                            >
                                <span className="text-sm text-gold/70 group-hover:text-gold transition">
                                    {ICON_MAP[link.href]}
                                </span>
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href={WHATSAPP_HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline-gold flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest"
                        >
                            <FaWhatsapp />
                            WhatsApp
                        </a>

                        <a
                            href={PHONE_HREF}
                            className="btn-gold flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest"
                        >
                            <HiOutlinePhone />
                            Call Now
                        </a>
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-cream hover:text-gold transition p-2"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
                    </button>
                </div>
            </header>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.35 }}
                        className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-2xl flex flex-col items-center justify-center"
                    >
                        {/* LINKS */}
                        <nav className="flex flex-col items-center gap-8 mb-12">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="flex items-center gap-3 font-display italic text-3xl text-cream/70 hover:text-gold transition"
                                    >
                                        <span className="text-gold text-lg">
                                            {ICON_MAP[link.href]}
                                        </span>
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col gap-4 w-64"
                        >
                            <a
                                href={PHONE_HREF}
                                className="btn-gold flex items-center justify-center gap-3 py-4 rounded-full uppercase text-sm font-semibold"
                            >
                                <HiOutlinePhone />
                                Call Now
                            </a>

                            <a
                                href={WHATSAPP_HREF}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline-gold flex items-center justify-center gap-3 py-4 rounded-full uppercase text-sm font-semibold"
                            >
                                <FaWhatsapp />
                                WhatsApp
                            </a>
                        </motion.div>

                        {/* DECOR */}
                        <div className="absolute top-20 left-10 w-20 h-px bg-gold/20" />
                        <div className="absolute bottom-20 right-10 w-20 h-px bg-gold/20" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}