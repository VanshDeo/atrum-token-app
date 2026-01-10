"use client";

import { motion } from "framer-motion";
import { Download, Wallet, Shield, Zap, Gift, Coins, Lock, Rocket } from "lucide-react";

const items = [
    { icon: <Coins size={18} />, text: "Earn Tokens" },
    { icon: <Download size={18} />, text: "Download Media" },
    { icon: <Wallet size={18} />, text: "Built-in Wallet" },
    { icon: <Gift size={18} />, text: "Daily Rewards" },
    { icon: <Shield size={18} />, text: "Privacy First" },
    { icon: <Zap size={18} />, text: "Instant Credit" },
    { icon: <Lock size={18} />, text: "Non-Custodial" },
    { icon: <Rocket size={18} />, text: "Future Ready" },
];

export default function Marquee() {
    return (
        <section className="py-12 bg-black overflow-hidden relative z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20 pointer-events-none"></div>

            {/* Row 1: Left to Right */}
            <div className="flex mb-8">
                <motion.div
                    className="flex gap-8 flex-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {[...items, ...items, ...items].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-nowrap hover:bg-atrum-blue/20 hover:border-atrum-blue/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        >
                            <span className="text-atrum-cyan">{item.icon}</span>
                            <span className="font-bold text-white uppercase tracking-wider text-sm">{item.text}</span>
                        </div>
                    ))}
                </motion.div>
                <div className="flex gap-8 flex-nowrap"> {/* Filler div for seamless loop if needed, but array x3 usually covers it on desktop */} </div>
            </div>

            {/* Row 2: Right to Left */}
            <div className="flex">
                <motion.div
                    className="flex gap-8 flex-nowrap"
                    animate={{ x: [-1000, 0] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {[...items, ...items, ...items].reverse().map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-nowrap hover:bg-atrum-pink/20 hover:border-atrum-pink/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        >
                            <span className="text-atrum-pink">{item.icon}</span>
                            <span className="font-bold text-white uppercase tracking-wider text-sm">{item.text}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
