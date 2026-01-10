"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // 2 seconds total

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    // Shard variants: start dispersed, converge to center
    const shardVariants = {
        hidden: (reset: { x: number; y: number; rotate: number }) => ({
            x: reset.x,
            y: reset.y,
            opacity: 0,
            scale: 0.5,
            rotate: reset.rotate,
        }),
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 2.0, ease: "easeInOut" as const },
        },
        exit: {
            opacity: 0,
            scale: 2,
            transition: { duration: 1.5 }
        }
    };

    // Generate random shard positions
    const shards = [...Array(12)].map((_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 800,
        rotate: Math.random() * 360,
        color: i % 2 === 0 ? "bg-atrum-blue" : "bg-atrum-pink",
        clipPath: [
            'polygon(50% 0%, 0% 100%, 100% 100%)', // Triangle
            'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)', // Trapezoid
            'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond
        ][i % 3]
    }));

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-atrum-dark-start via-[#081248] to-atrum-dark-end overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Background Dust/Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-atrum-blue/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-atrum-pink/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
            </div>

            {/* Animation Container */}
            <div className="relative z-10 w-64 h-64 flex items-center justify-center mb-12">

                {/* Converging Shards */}
                {shards.map((shard) => (
                    <motion.div
                        key={shard.id}
                        custom={{ x: shard.x, y: shard.y, rotate: shard.rotate }}
                        variants={shardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`absolute w-12 h-12 ${shard.color}/60 backdrop-blur-md`}
                        style={{ clipPath: shard.clipPath }}
                    />
                ))}

                {/* Center Logo Reveal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ delay: 0.8, duration: 1.0 }}
                    className="relative z-20 w-32 h-32 rounded-full overflow-hidden border border-atrum-blue/50 shadow-[0_0_50px_rgba(26,159,255,0.5)] bg-black/50 backdrop-blur-xl flex items-center justify-center"
                >
                    <Image src="/images/logo.jpg" alt="Logo" width={100} height={100} className="object-cover" />

                    {/* Shine Effect */}
                    <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, repeatDelay: 3, duration: 1.5, ease: "linear", delay: 2 }}
                        className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                    />
                </motion.div>
            </div>

            {/* Text & Progress */}
            <div className="relative z-10 text-center w-full max-w-sm px-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-atrum-silver text-sm uppercase tracking-widest mb-4 font-display"
                >
                    Assembling the future of decentralized trading...
                </motion.p>

                <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden mb-2">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-linear-to-r from-atrum-blue to-atrum-pink box-shadow-[0_0_10px_rgba(26,159,255,0.5)]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                    />
                </div>

                <div className="flex justify-between text-xs text-atrum-cyan font-mono">
                    <span>Loading Assets</span>
                    <span>{progress}%</span>
                </div>
            </div>

        </motion.div>
    );
}
