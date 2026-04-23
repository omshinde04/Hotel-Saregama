"use client";

import Link from "next/link";
import {
    FaWhatsapp,
    FaInstagram,
    FaMapMarkerAlt,
    FaDirections,
} from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";

import {
    PHONE,
    PHONE_HREF,
    WHATSAPP_HREF,
    NAV_LINKS,
} from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-ink border-t border-gold/10 pt-16 pb-28 md:pb-16 relative overflow-hidden">

            {/* Glow */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[500px] h-[250px] bg-gold/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-container mx-auto px-6 md:px-10 relative z-10">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

                    {/* BRAND */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 border border-gold/40 flex items-center justify-center">
                                <span className="text-gold font-display text-sm font-bold">
                                    S
                                </span>
                            </div>

                            <span className="font-display italic text-2xl text-gold">
                                Saregama
                            </span>
                        </div>

                        <p className="text-muted text-sm leading-relaxed mb-6 max-w-sm">
                            Premium highway restaurant on the Mumbai–Nashik Expressway.
                            Enjoy delicious food, full bar, and a relaxing stop for
                            families, bikers, and travelers.
                        </p>

                        {/* SOCIAL */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/hotelsaregama_nsk?igsh=aWhqNjhhbDNoYzl3"
                                target="_blank"
                                className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href={WHATSAPP_HREF}
                                target="_blank"
                                className="w-10 h-10 border border-gold/20 flex items-center justify-center text-green-500 hover:border-green-500 transition"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="text-label text-gold mb-5 tracking-widest">
                            Quick Links
                        </h4>

                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted hover:text-gold transition"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-label text-gold mb-5 tracking-widest">
                            Contact
                        </h4>

                        <div className="space-y-4">

                            {/* ADDRESS */}
                            <a
                                href="https://www.google.com/maps/dir//Saregama+Family+Restaurant+and+Bar+and+lodding,+Mumbai+-+Nashik+Expy,+Dahalewadi,+Maharashtra+422402/@18.6312193,73.8301434,15z"
                                target="_blank"
                                className="flex items-start gap-3 text-sm text-muted hover:text-gold transition"
                            >
                                <FaMapMarkerAlt className="text-gold mt-1" />
                                Mumbai–Nashik Expressway, Ghoti,
                                <br />
                                Nashik – 422402
                            </a>

                            {/* CALL */}
                            <a
                                href={PHONE_HREF}
                                className="flex items-center gap-3 text-sm text-muted hover:text-gold transition"
                            >
                                <HiOutlinePhone className="text-gold" />
                                {PHONE}
                            </a>

                            {/* WHATSAPP */}
                            <a
                                href={WHATSAPP_HREF}
                                target="_blank"
                                className="flex items-center gap-3 text-sm text-muted hover:text-green-500 transition"
                            >
                                <FaWhatsapp className="text-green-500" />
                                WhatsApp Us
                            </a>

                            {/* DIRECTIONS */}
                            <a
                                href="https://www.google.com/maps/dir//Saregama+Family+Restaurant+and+Bar+and+lodding,+Mumbai+-+Nashik+Expy,+Dahalewadi,+Maharashtra+422402/@18.6312193,73.8301434,15z"
                                target="_blank"
                                className="flex items-center gap-3 text-sm text-muted hover:text-gold transition"
                            >
                                <FaDirections className="text-gold" />
                                Get Directions
                            </a>

                        </div>
                    </div>
                </div>

                {/* SEO TEXT */}
                <div className="border-t border-gold/10 pt-8 mb-6">
                    <p className="text-muted/50 text-xs text-center max-w-4xl mx-auto leading-relaxed">
                        Saregama Family Restaurant & Bar is a top-rated restaurant in Ghoti, Nashik,
                        strategically located on the Mumbai–Nashik Expressway near Igatpuri. Known as
                        one of the best highway restaurants in Maharashtra, we offer premium Indian
                        cuisine, including butter chicken, dum biryani, tandoori starters, and a full
                        bar experience. Whether you're traveling with family, riding with friends, or
                        taking a break on a long drive, Saregama provides comfortable seating, ample
                        parking, and a relaxing dining atmosphere. If you're searching for a family
                        restaurant near Igatpuri, a bar near Ghoti Nashik, or the best food stop on the
                        Mumbai–Nashik highway, Saregama is the perfect destination.
                    </p>
                </div>
                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gold/10 pt-6">

                    <p className="text-muted/50 text-xs">
                        © {new Date().getFullYear()} Saregama Family Restaurant & Bar
                    </p>

                    <div className="flex gap-6">
                        <Link
                            href="/privacy-policy"
                            className="text-xs text-muted/50 hover:text-gold transition"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms-conditions"
                            className="text-xs text-muted/50 hover:text-gold transition"
                        >
                            Terms & Conditions
                        </Link>
                    </div>

                </div>

            </div>
        </footer>
    );
}