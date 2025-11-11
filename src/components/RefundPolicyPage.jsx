import { motion } from 'framer-motion';
import Header from './Header';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

const RefundPolicyPage = () => {
    return (
        <>
            <Header />
            <section className="min-h-screen bg-gray-200">
                {/* Blue Ribbon Banner */}
                <div className="w-full bg-blue-600 py-3 md:py-4 overflow-hidden">
                    <div className="flex animate-scroll-seamless whitespace-nowrap">
                        <span className="inline-block text-white text-xl md:text-xl font-medium">
                            {Array(20).fill(`Fixey Platforms ${new Date().getFullYear()}`).join(' • ')} •
                        </span>
                        <span className="inline-block text-white text-xl md:text-xl font-medium">
                            {Array(20).fill(`Fixey Platforms ${new Date().getFullYear()}`).join(' • ')} •
                        </span>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 pt-12 md:pt-16 pb-20">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h1
                            className="text-5xl md:text-6xl font-medium text-gray-800 mb-4"
                            style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-2px' }}
                        >
                            Return & Refund Policy
                        </h1>
                    </motion.div>

                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            Introduction
                        </h2>
                    </motion.div>

                    {/* Section 1: Scope */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            1. Scope
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            This Return & Refund Policy applies to all digital services, subscriptions, and custom software projects offered by Fixey Software Solutions (Pvt) Ltd ("Fixey Platforms," "we," "our," or "us"). Since we provide digital services and software (not physical goods), returns of tangible products do not apply.
                        </p>
                    </motion.div>

                    {/* Section 2: Trial & Evaluation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            2. Trial & Evaluation
                        </h2>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1">
                            <li>If available, free trials or demos allow you to evaluate our services before purchase.</li>
                            <li>Where no trial is provided, we ensure onboarding support to help you understand the service.</li>
                        </ul>
                    </motion.div>

                    {/* Section 3: Refund Eligibility */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            3. Refund Eligibility
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            Refunds may be granted under the following circumstances:
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Service Outage:</h3>
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    If a Fixey-side technical issue causes an uninterrupted outage exceeding [X hours/days], you may receive a pro-rata credit or partial refund for the affected period.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Duplicate or Accidental Charges:</h3>
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    Any duplicate or erroneous payment will be fully refunded (100% refund).
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Misbilling:</h3>
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    Incorrect charges not aligned with your subscription plan will be adjusted or refunded.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Undelivered Services (Custom Projects):</h3>
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    If contracted deliverables are not provided as per the agreed scope, refunds or credits may be issued on a milestone basis.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Section 4: Non-Refundable Items */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            4. Non-Refundable Items
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-3">
                            Refunds will not apply to:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1">
                            <li>Subscription periods already used or in progress, unless covered by Section 3.</li>
                            <li>Custom software deliverables already completed and accepted.</li>
                            <li>Third-party processing fees or taxes, where legally required.</li>
                        </ul>
                    </motion.div>

                    {/* Section 5: Cancellations */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            5. Cancellations
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Subscriptions:</h3>
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    You may cancel at any time. Cancellations take effect from the next billing cycle. No pro-rata refunds are offered for the current cycle unless covered by Section 3.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom Contracts:</h3>
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    Cancellations are subject to the terms in the signed contract or Statement of Work (SOW).
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Section 6: How to Request a Refund */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            6. How to Request a Refund
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            To request a refund, please contact us at <a href="mailto:fixeydevelopers@gmail.com" className="text-blue-600 hover:underline">fixeydevelopers@gmail.com</a> with the following details:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-4">
                            <li>Payment reference or invoice number</li>
                            <li>Account email address</li>
                            <li>Description of the issue, with supporting evidence if available</li>
                        </ul>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            <strong>Processing Time:</strong> Refund requests will be reviewed within 7–14 business days. Approved refunds will be issued within 7–10 business days, depending on your payment provider.
                        </p>
                    </motion.div>

                    {/* Section 7: Chargebacks */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            7. Chargebacks
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            We encourage customers to contact us first to resolve any issue before filing a chargeback. Unauthorized chargebacks may delay or deny resolution.
                        </p>
                    </motion.div>

                    {/* Section 8: Taxes & Fees */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            8. Taxes & Fees
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Refund amounts may be adjusted for third-party transaction fees or taxes that are non-refundable under applicable law.
                        </p>
                    </motion.div>

                    {/* Section 9: Exceptions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            9. Exceptions
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-3">
                            Refunds are not provided for:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1">
                            <li>Service disruptions caused by third-party providers, ISPs, or force majeure events.</li>
                            <li>Issues caused by customer-side configuration or misuse.</li>
                            <li>Accounts found in violation of our Terms of Service.</li>
                        </ul>
                    </motion.div>

                    {/* Section 10: Governing Law */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            10. Governing Law
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            This Policy is governed by the laws of the Democratic Socialist Republic of Sri Lanka. Disputes shall first be addressed through good-faith negotiation. If unresolved, they may proceed to mediation or arbitration, and ultimately the jurisdiction of Sri Lankan courts.
                        </p>
                    </motion.div>

                    {/* Section 11: Changes to This Policy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            11. Changes to This Policy
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            We reserve the right to update this Return & Refund Policy at any time. Changes will be posted on this page with the "Last Updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
                        </p>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.3 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            Contact Information
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            For questions regarding this Return & Refund Policy, please contact:
                        </p>
                        <div className="text-lg text-gray-800 leading-relaxed">
                            <p><strong>Fixey Software Solutions (Pvt) Ltd</strong></p>
                            <p>Kalutara, Sri Lanka</p>
                            <p>Email: <a href="mailto:fixeydevelopers@gmail.com" className="text-blue-600 hover:underline">fixeydevelopers@gmail.com</a></p>
                        </div>
                    </motion.div>
                </div>
            </section>
            <NewsletterSection />
            <Footer />
        </>
    );
};

export default RefundPolicyPage;
