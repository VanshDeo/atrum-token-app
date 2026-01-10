"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Vision() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

    const text = "Atrum aims to become a globally trusted digital utility that rewards participation, respects privacy and expands into creator monetization, governance, analytics dashboards, and decentralized integrations.";
    const words = text.split(" ");

    return (
        <section ref={ref} className="py-32 px-6 relative flex items-center justify-center overflow-hidden min-h-[80vh]">
            {/* Parallax Background */}
            <motion.div style={{ y }} className="absolute inset-0 bg-[url('/bg-stars.svg')] opacity-30 z-0 bg-repeat bg-center"></motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-0"></div>

            <div className="absolute inset-0 bg-linear-to-r from-atrum-dark-start/80 via-atrum-blue/10 to-atrum-dark-end/80 z-0 text-center"></div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-5xl mx-auto text-center"
            >
                <div className="inline-block py-1 px-3 rounded-full border border-white/20 bg-white/5 text-xs tracking-widest uppercase mb-12">Future Vision</div>

                <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl leading-tight text-white drop-shadow-[0_0_20px_rgba(130,233,255,0.3)] max-w-4xl mx-auto">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0.1, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="inline-block mr-2"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h2>

                <motion.div
                    style={{ scaleX: opacity }}
                    className="mt-12 w-32 h-1 bg-gradient-to-r from-transparent via-atrum-blue to-transparent mx-auto rounded-full"
                />
            </motion.div>
        </section>
    );
}
