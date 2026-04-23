"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_HREF } from "@/lib/constants";

export default function WhatsAppFloat() {
    return (
        <motion.a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="fixed bottom-5 right-5 z-[999] group"
        >
            {/* 🔥 PULSE RING */}
            <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />

            {/* 🔥 BUTTON */}
            <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30 hover:scale-110 transition duration-300">
                <FaWhatsapp className="text-white text-2xl" />
            </div>

            {/* 🔥 TOOLTIP */}
            <div className="absolute right-16 bottom-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap shadow-lg">
                    Chat with us
                </div>
            </div>
        </motion.a>
    );
}