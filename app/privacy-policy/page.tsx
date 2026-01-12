"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Database, Server, Globe, UserCheck, Bell, Activity, AlertTriangle } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-[#020518] text-atrum-silver font-body">
            <Navbar />

            {/* Header */}
            <section className="relative pt-40 pb-12 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-10 md:right-32 w-16 h-16 rounded-full bg-yellow-400/20 blur-xl"
                    ></motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-atrum-blue/10 text-atrum-cyan font-bold text-sm mb-6 border border-atrum-blue/20">
                        <Shield size={16} /> Legal Documentation
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        PRIVACY <span className="text-atrum-blue">POLICY</span>
                    </h1>
                    <p className="text-lg text-gray-400">Last Updated: January 2026</p>
                </motion.div>
            </section>

            {/* Content */}
            <section className="pb-24 px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm relative overflow-hidden">
                    {/* Floating Coins Decor */}
                    <div className="absolute -right-10 top-20 opacity-10 rotate-12 pointer-events-none">
                        <div className="w-32 h-32 rounded-full border-4 border-yellow-400 flex items-center justify-center text-6xl font-bold text-yellow-400">$</div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none space-y-12">

                        {/* Introduction */}
                        <div>
                            <p className="lead text-xl text-white">
                                Atrum Token (“we”, “our”, or “us”) respects and protects the privacy of our users.
                                This Privacy Policy explains how we collect, use, protect, and share information gathered through our platforms,
                                including <span className="text-atrum-cyan">atrumtoken.com</span>, the Atrum downloader interface, and any site or application linking to this policy (collectively, the “Services”).
                            </p>
                            <p>It also describes the rights available to users and how to contact us for clarification or requests. By using our Services, you consent to the data practices described in this policy.</p>
                        </div>

                        {/* 1. Information We Collect */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-atrum-blue/20 text-atrum-blue"><FileText size={24} /></span>
                                1. Personal Information We Collect
                            </h2>
                            <p>We may collect Personal Information about you directly or indirectly. “Personal Information” means any information relating to an identified or identifiable individual.</p>

                            <h3 className="text-xl font-bold text-white mt-6 mb-3">A. Information You Provide</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li><strong>Contact Information:</strong> When you sign up for updates, early access, beta access, or newsletters, you may provide us with your email address or other contact details.</li>
                                <li><strong>Communications:</strong> If you contact us via email or through the Services, we may store your message, attachments, and metadata (date, time, sender details).</li>
                            </ul>
                            <p className="text-sm text-gray-400 mt-2">Where required by law, we will notify you when providing personal data is mandatory, and the consequences of failing to do so.</p>

                            <h3 className="text-xl font-bold text-white mt-6 mb-3">B. Information Collected Automatically</h3>
                            <p>Atrum does not automatically collect personally identifying data unless explicitly provided. We may collect anonymized usage information such as:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li>Page views and navigation paths</li>
                                <li>Browser type, operating system, and device types</li>
                                <li>Pages visited before/after accessing our Services</li>
                                <li>Interaction timestamps</li>
                            </ul>
                            <p className="text-sm text-gray-400 mt-2">This information is aggregated and not tied to identifiable users. Atrum does not currently use cookies for user tracking.</p>

                            <h3 className="text-xl font-bold text-white mt-6 mb-3">C. Information From Third Parties</h3>
                            <p>If you engage with Atrum on public platforms (e.g., Instagram, Telegram, X/Twitter), we may receive public profile metadata such as post timestamps, user handle, and content shared about Atrum.</p>
                        </div>

                        {/* 2. How We Use */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-purple-500/20 text-purple-400"><Database size={24} /></span>
                                2. How We Use Personal Information
                            </h2>
                            <ul className="space-y-4">
                                <li className="bg-white/5 p-4 rounded-xl border border-white/5">
                                    <strong className="text-atrum-blue block mb-1">A. Service Delivery</strong>
                                    <span className="text-gray-300">To deliver, operate, and maintain Atrum’s platforms, provide site features, updates, and verify relevant transactions.</span>
                                </li>
                                <li className="bg-white/5 p-4 rounded-xl border border-white/5">
                                    <strong className="text-atrum-blue block mb-1">B. Communication</strong>
                                    <span className="text-gray-300">We may contact you regarding service changes, updates, maintenance, policy updates, and support responses.</span>
                                </li>
                                <li className="bg-white/5 p-4 rounded-xl border border-white/5">
                                    <strong className="text-atrum-blue block mb-1">C. Marketing</strong>
                                    <span className="text-gray-300">To send promotional content about Atrum products, upgrades, and partner opportunities — with full opt-out ability at any time.</span>
                                </li>
                                <li className="bg-white/5 p-4 rounded-xl border border-white/5">
                                    <strong className="text-atrum-blue block mb-1">D. Service & Platform Improvement</strong>
                                    <span className="text-gray-300">We analyze aggregate usage patterns to improve performance, optimize user experience, and develop new technical products or features.</span>
                                </li>
                                <li className="bg-white/5 p-4 rounded-xl border border-white/5">
                                    <strong className="text-atrum-blue block mb-1">E. Compliance & Risk</strong>
                                    <span className="text-gray-300">We use personal information as needed for lawful compliance, security audits, and fraud monitoring to protect our ecosystem.</span>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-white mt-8 mb-3">F. European Personal Information Use</h3>
                            <p>We process EU data only when:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li>You have explicitly consented.</li>
                                <li>We must operate the Services to fulfill a contract with you.</li>
                                <li>Retention is required by law.</li>
                                <li>We have a legitimate business interest that does not override your rights.</li>
                            </ul>
                            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                                <h4 className="font-bold text-blue-400 mb-1">Note on Cookies</h4>
                                <p className="text-sm text-gray-300">Atrum Services currently do not use cookies or tracking pixels for individual user profiling.</p>
                            </div>
                        </div>

                        {/* 3. Sharing */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-green-500/20 text-green-400"><UserCheck size={24} /></span>
                                3. How We Share Personal Information
                            </h2>
                            <p className="mb-4"><strong>We do not sell user information.</strong> We may share data in the following limited circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li><strong>Trusted Service Providers:</strong> Hosting, cloud storage, and email delivery services acting on our behalf.</li>
                                <li><strong>Legal Requirements:</strong> when compelled by law, subpoena, or valid legal process.</li>
                                <li><strong>System Protection:</strong> To protect Atrum systems, rights, users, and property from fraud or abuse.</li>
                                <li><strong>Aggregated Data:</strong> As anonymous, aggregated statistics for analytics and reporting.</li>
                            </ul>
                        </div>

                        {/* 4. Third Party & 5. Security */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-pink-500"><Globe size={20} /></span> 4. Third-Party Services
                                </h2>
                                <p className="text-gray-300 text-sm">
                                    Our Services may contain links to other sites. Atrum is not responsible for third-party policies, and we advise reading their privacy terms before sharing data.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="text-yellow-400"><Lock size={20} /></span> 5. Security
                                </h2>
                                <p className="text-gray-300 text-sm">
                                    Atrum uses reasonable technical and organizational safeguards. However, no system is impenetrable — users should avoid sharing passwords and private keys.
                                </p>
                            </div>
                        </div>

                        {/* 6. Your Rights */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="p-2 rounded-lg bg-pink-500/20 text-pink-500"><Eye size={24} /></span>
                                6. Your Rights
                            </h2>
                            <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                                <li>Request access to or correction of your stored personal data.</li>
                                <li>Request deletion of your data (subject to legal retention requirements).</li>
                                <li>Opt out of marketing communications at any time.</li>
                            </ul>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="font-bold text-white mb-2">European Economic Area Rights</h3>
                                <p className="text-sm text-gray-300 mb-2">Users in the EEA may additionally:</p>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
                                    <li>Request data portability.</li>
                                    <li>Restrict processing of your data.</li>
                                    <li>File complaints with local data protection authorities.</li>
                                    <li>Withdraw consent at any time.</li>
                                </ul>
                            </div>
                            <p className="mt-4 text-sm text-gray-400">Contact us regarding any privacy rights at <a href="mailto:support@atrumtoken.ac" className="text-atrum-cyan">support@atrumtoken.ac</a>.</p>
                        </div>

                        {/* 7-9 Misc */}
                        <div className="space-y-6 border-t border-white/10 pt-8">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">7. Use By Minors</h3>
                                <p className="text-gray-300 text-sm">Atrum does not knowingly serve users under 13. If we discover a child submitted personal data, we will erase it immediately.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">8. International Visitors</h3>
                                <p className="text-gray-300 text-sm">Atrum operates with infrastructure across multiple regions. By using the Services, you consent to data transfer, processing, and storage in locations outside your jurisdiction.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">9. Retention</h3>
                                <p className="text-gray-300 text-sm">We retain personal information only as long as necessary for business purposes, legal obligations, or security requirements.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">10. Updates</h3>
                                <p className="text-gray-300 text-sm">We may revise this Privacy Policy at any time. Continued use of the Services implies agreement with the updated terms.</p>
                            </div>
                        </div>

                        {/* 11. Contact */}
                        <div className="bg-linear-to-r from-atrum-blue/20 to-purple-900/20 p-8 rounded-2xl border border-atrum-blue/30">
                            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
                            <p className="text-gray-300 mb-4">For any privacy-specific requests or questions, please reach out to our team:</p>
                            <address className="not-italic text-sm text-atrum-silver">
                                <strong className="text-white">Atrum Token</strong><br />
                                Attn: Privacy Office<br />
                                Email: <a href="mailto:support@atrumtoken.ac" className="text-atrum-cyan font-bold">support@atrumtoken.ac</a>
                            </address>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
