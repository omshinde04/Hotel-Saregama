"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >

            {/* 🔥 BACKGROUND GLOW */}
            <div className="absolute w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[150px]" />

            {/* 🔥 SMOKE EFFECT (layered soft motion) */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 0.4, y: -40 }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]"
            />

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 0.3, y: -20 }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute w-[250px] h-[250px] bg-yellow-500/5 rounded-full blur-[100px]"
            />

            {/* 🔥 MAIN CONTENT */}
            <div className="relative flex flex-col items-center gap-10">

                {/* 🍽 PLATE */}
                <motion.div
                    initial={{ y: 80, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative flex items-center justify-center"
                >

                    {/* Plate base */}
                    <div className="absolute w-[140px] h-[140px] rounded-full border border-yellow-500/20 bg-gradient-to-br from-[#111] to-black shadow-[0_0_30px_rgba(255,200,0,0.15)]" />

                    {/* Plate inner glow */}
                    <div className="absolute w-[100px] h-[100px] rounded-full bg-yellow-500/5 blur-md" />

                    {/* 🔥 LOGO on plate */}
                    <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="relative z-10"
                    >
                        <Image
                            src="/logo.png"
                            alt="Saregama"
                            width={80}
                            height={80}
                            className="drop-shadow-[0_0_20px_rgba(255,200,0,0.4)]"
                        />
                    </motion.div>

                </motion.div>

                {/* 🔥 CHEF SMOKE RISE ABOVE LOGO */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -top-6"
                >
                    <motion.div
                        animate={{ y: [-10, -30, -60], opacity: [0.4, 0.2, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                        }}
                        className="w-10 h-16 bg-white/10 rounded-full blur-xl"
                    />
                </motion.div>

                {/* 🔥 SHIMMER LINE */}
                <div className="relative w-40 h-[2px] bg-yellow-500/10 overflow-hidden rounded-full">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.2,
                            ease: "linear",
                        }}
                        className="absolute w-1/2 h-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
                    />
                </div>

                {/* 🔥 TEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-yellow-500 text-[10px] tracking-[0.4em] uppercase"
                >
                    Crafted With Taste
                </motion.p>

            </div>
        </motion.div>
    );
}