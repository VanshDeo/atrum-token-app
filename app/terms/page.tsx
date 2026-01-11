"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ScrollText, CheckCircle, Scale, AlertCircle, Ban, Globe, Shield, Gavel, XOctagon } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#020518] text-atrum-silver font-body">
            <Navbar />

            {/* Header */}
            <section className="relative pt-40 pb-12 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-24 left-10 md:left-32 w-12 h-12 rounded-full bg-pink-500/20 blur-lg"
                    ></motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-atrum-blue/10 text-atrum-cyan font-bold text-sm mb-6 border border-atrum-blue/20">
                        <Scale size={16} /> Legal Documentation
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        TERMS & <span className="text-atrum-pink">CONDITIONS</span>
                    </h1>
                    <p className="text-lg text-gray-400">Last Updated: January 2026</p>
                </motion.div>
            </section>

            {/* Content */}
            <section className="pb-24 px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm relative overflow-hidden">
                    {/* Floating Coins Decor */}
                    <div className="absolute -left-10 bottom-20 opacity-10 -rotate-12 pointer-events-none">
                        <div className="w-24 h-24 rounded-full border-4 border-atrum-cyan flex items-center justify-center text-4xl font-bold text-atrum-cyan">#</div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none space-y-12">

                        {/* Header Agreement */}
                        <div className="p-6 bg-pink-900/10 border border-pink-500/20 rounded-2xl">
                            <p className="text-white">
                                The website located at <span className="text-atrum-cyan">atrumtoken.com</span> (“Site”) is operated by <strong>Atrum Technologies Pvt Ltd</strong> (“Atrum”, “we”, “our”, or “us”).
                                Additional terms may apply to specific features and are incorporated by reference.
                            </p>
                            <div className="mt-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-atrum-pink mb-2">Legal Agreement</h3>
                                <p className="text-sm text-gray-300">
                                    By accessing or using this Site, you agree to these Terms, you confirm you are 18+, and you represent you have authority to accept these Terms.
                                    If you disagree with any part, do not use the Site.
                                </p>
                            </div>
                        </div>

                        {/* 1. License Grant */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-atrum-blue/20 text-atrum-blue"><CheckCircle size={24} /></span>
                                1. License Grant
                            </h2>
                            <p>Atrum grants you a non-exclusive, revocable, limited license to access and use the Site for personal, non-commercial use.</p>
                            <h3 className="text-lg font-bold text-white mt-4 mb-2">Proprietary Rights & Restrictions</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li>You may not copy, rent, lease, or commercially exploit the Site content.</li>
                                <li>You may not modify, reverse engineer, or derive source code from any part of the Site.</li>
                                <li>You may not build competitive services using proprietary Site elements.</li>
                                <li>You may not copy UI, branding, or unique token logic logic without express permission.</li>
                            </ul>
                            <p className="text-sm text-gray-400 mt-2">Atrum owns all intellectual property displayed on the Site unless otherwise noted.</p>
                        </div>

                        {/* 2. Indemnification */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-purple-500/20 text-purple-400"><Shield size={24} /></span>
                                2. Indemnification
                            </h2>
                            <p>You agree to defend, indemnify, and hold Atrum Technologies Pvt Ltd harmless from third-party claims arising out of:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li>Your usage of the Site or Services.</li>
                                <li>Your violation of these Terms or any Policy.</li>
                                <li>Illegal activity conducted through your account or wallet connection.</li>
                            </ul>
                        </div>

                        {/* 3. Third-Party Links */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-yellow-400/20 text-yellow-400"><Globe size={24} /></span>
                                3. Third-Party Links & Interactions
                            </h2>
                            <p>The Site may contain links to external exchanges, wallet providers, or social media platforms.</p>
                            <p className="text-gray-300 mt-2">
                                Atrum is not responsible for their terms, safety, availability, or privacy practices. Use these third-party services at your own risk.
                            </p>
                        </div>

                        {/* 4. Disclaimers */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-red-500/20 text-red-500"><AlertCircle size={24} /></span>
                                4. Disclaimers
                            </h2>
                            <p className="font-bold text-white mb-2">The Site is provided "AS IS" and "AS AVAILABLE" without guarantees.</p>
                            <p>Atrum does not warrant:</p>
                            <ul className="list-custom pl-6 space-y-2 text-gray-300">
                                <li>Continuous, uninterrupted uptime.</li>
                                <li>Virus-free content or error-free execution of code.</li>
                                <li>Accuracy or completeness of third-party material.</li>
                            </ul>
                            <div className="mt-4 p-4 border border-white/10 bg-black/20 rounded-xl">
                                <p className="text-sm text-gray-400 font-bold">
                                    Atrum does not provide financial, investment, or legal advice. Token values can be volatile.
                                </p>
                            </div>
                        </div>

                        {/* 5. Liability */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-gray-700/50 text-gray-300"><Scale size={24} /></span>
                                5. Liability Limitation
                            </h2>
                            <p>To the fullest extent permitted by applicable law:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-2">
                                <li>Atrum is not liable for indirect, incidental, special, or consequential damages.</li>
                                <li>Our maximum total liability to you for any claim is limited to $50 USD.</li>
                            </ul>
                        </div>

                        {/* 6. Termination */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-red-900/20 text-red-400"><XOctagon size={24} /></span>
                                6. Termination
                            </h2>
                            <p>Atrum may suspend or terminate your access for any reason, including but not limited to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li>Violations of these Terms.</li>
                                <li>Abusive behavior or harassment.</li>
                                <li>Fraud investigations or suspicious wallet activity.</li>
                            </ul>
                            <p className="text-sm text-gray-400 mt-2">Sections covering liability, ownership, indemnification, and arbitration survive termination.</p>
                        </div>

                        {/* 7-10 Misc */}
                        <div className="space-y-8 border-t border-white/10 pt-8 mt-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">7. Terms Changes</h3>
                                <p className="text-gray-300">We may update these Terms at any time. Your continued use of the Site after any changes implies your consent to the new Terms.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">8. Dispute Resolution</h3>
                                <p className="text-gray-300">Most issues can be resolved by contacting support first. Any unresolved disputes will be handled via arbitration on an individual basis (no class actions) under applicable Indian jurisdiction.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">9. International Users</h3>
                                <p className="text-gray-300">Users accessing Atrum outside of India do so voluntarily and are responsible for compliance with their local laws regarding digital assets.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">10. Export & Compliance</h3>
                                <p className="text-gray-300">Users may not use Atrum Services in violation of any sanction laws, export restrictions, or regulatory controls imposed by relevant authorities.</p>
                            </div>
                        </div>

                        {/* 11. Contact */}
                        <div className="bg-linear-to-r from-pink-900/20 to-purple-900/20 p-8 rounded-2xl border border-pink-500/20 mt-8">
                            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                            <p className="text-gray-300 mb-4">For any legal inquiries regarding these terms, please contact us:</p>
                            <address className="not-italic text-sm text-atrum-silver">
                                <strong className="text-white">Atrum Technologies Pvt Ltd</strong><br />
                                Support Email: <a href="mailto:support@atrumtoken.com" className="text-atrum-pink font-bold">support@atrumtoken.com</a>
                            </address>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
