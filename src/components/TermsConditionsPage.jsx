import { motion } from 'framer-motion';
import Header from './Header';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

const TermsConditionsPage = () => {
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
                            Terms & Conditions
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

                    {/* Section 1: Terms & Conditions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            1. Terms & Conditions
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            These Terms and Conditions ("Terms") govern your use of the platforms, services, and products operated by Fixey Software Solutions (Pvt) Ltd (hereinafter "Fixey Platforms," "we," "our," or "us"). We are incorporated under the Companies Act No. 7 of 2007 of Sri Lanka as a Private Limited Company (Company Number: PV 00319559).
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                            By accessing or using any of our platforms you agree to comply with these Terms. If you do not agree, please discontinue use of our services immediately.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Eligibility & Accounts</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>You must be at least 18 years of age to use our services.</li>
                            <li>You are responsible for maintaining the confidentiality of your account details.</li>
                            <li>You agree not to share your login credentials with others.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Use of Services</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-3">
                            You agree to use our services only for lawful purposes. You may not:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>Use the platform for fraudulent, illegal, or harmful activities.</li>
                            <li>Attempt to gain unauthorized access to systems, accounts, or data.</li>
                            <li>Upload malicious code, viruses, or engage in disruptive behavior.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Payments & Subscriptions</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>All payments for services are received exclusively by Fixey Software Solutions (Pvt) Ltd.</li>
                            <li>Payment details are securely handled, and third-party gateways may be used for transactions.</li>
                            <li>Subscription plans renew automatically unless canceled in advance.</li>
                            <li>Refunds (if applicable) will be processed according to our Refund Policy (see Section 4).</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Intellectual Property</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>All software, platforms, trademarks, and content are the exclusive property of Fixey Software Solutions (Pvt) Ltd.</li>
                            <li>Users retain ownership of content they upload but grant us a limited license to operate, display, and distribute such content within our services.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Termination</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                            We reserve the right to suspend or terminate accounts that violate these Terms or engage in misuse of our services.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Limitation of Liability</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>Fixey Platforms shall not be liable for indirect, incidental, or consequential damages.</li>
                            <li>Services are provided on an "as is" basis, without warranties of uninterrupted availability.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Governing Law</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                            These Terms shall be governed by and construed in accordance with the laws of the Democratic Socialist Republic of Sri Lanka. Any disputes shall be subject to the exclusive jurisdiction of Sri Lankan courts.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Changes to Terms</h3>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            We reserve the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance of the updated Terms.
                        </p>
                    </motion.div>

                    {/* Section 2: Privacy Policy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            2. Privacy Policy
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Information We Collect</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li><strong>Personal Information:</strong> Name, email, phone number, payment details.</li>
                            <li><strong>Usage Data:</strong> Browser type, device, IP address, session logs.</li>
                            <li><strong>Cookies & Tracking:</strong> To improve performance and personalize experiences.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">How We Use Information</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>To provide and improve our services.</li>
                            <li>To process payments and manage subscriptions.</li>
                            <li>To ensure platform security and prevent fraud.</li>
                            <li>To communicate updates, offers, and support.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Sharing & Disclosure</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>We do not sell user data.</li>
                            <li>Data may be shared with trusted third-party service providers (e.g., payment processors).</li>
                            <li>We may disclose information if required by law or regulatory authorities.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Retention</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>We retain personal data only for as long as necessary to provide services.</li>
                            <li>Users may request data deletion subject to legal requirements.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">User Rights</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>Access, correction, or deletion of personal information.</li>
                            <li>Opt-out of marketing communications.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Security Measures</h3>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            We implement encryption, secure storage, and monitoring to protect user data.
                        </p>
                    </motion.div>

                    {/* Section 3: Cookie Policy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            3. Cookie Policy
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">What Are Cookies?</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                            Cookies are small files stored on your device to improve browsing experiences.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">How We Use Cookies</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li><strong>Essential Cookies:</strong> For authentication and secure login.</li>
                            <li><strong>Performance Cookies:</strong> For analytics and performance monitoring.</li>
                            <li><strong>Preference Cookies:</strong> To remember user settings.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Managing Cookies</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                            You can disable cookies in your browser settings, but this may affect platform functionality.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Consent</h3>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            By using our services, you consent to our use of cookies as described.
                        </p>
                    </motion.div>

                    {/* Section 4: Payment Terms */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            4. Payment Terms
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Payment Responsibility</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>All transactions are processed solely by Fixey Software Solutions (Pvt) Ltd.</li>
                            <li>Users must provide accurate billing details.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Refund Policy</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>Refunds are granted only in cases of technical issues or wrongful charges.</li>
                            <li>Subscription-based services are generally non-refundable once a billing cycle starts.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Renewals</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                            Subscriptions automatically renew unless canceled before the renewal date.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Disputes</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>Users should contact support first for resolution.</li>
                            <li>If unresolved, disputes shall be handled under Sri Lankan law.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Taxes & Compliance</h3>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            All payments include applicable local taxes as required by law.
                        </p>
                    </motion.div>

                    {/* Section 5: Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            5. Contact Information
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            For questions regarding Terms, Privacy, Cookies, or Payments, please contact:
                        </p>
                        <div className="text-lg text-gray-800 leading-relaxed">
                            <p><strong>Fixey Software Solutions (Pvt) Ltd</strong></p>
                            <p>Kalutara, Sri Lanka</p>
                            <p>Email: <a href="mailto:fixeydevelopers@gmail.com" className="text-blue-600 hover:underline">fixeydevelopers@gmail.com</a></p>
                        </div>
                    </motion.div>
                </div>
            </section>
            <NewsletterSection/>
            <Footer />
        </>
    );
};

export default TermsConditionsPage;
