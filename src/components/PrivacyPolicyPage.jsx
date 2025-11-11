import { motion } from 'framer-motion';
import Header from './Header';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

const PrivacyPolicyPage = () => {
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
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-gray-600">
                            <strong>Effective Date:</strong> 2025/8/28<br />
                            <strong>Last Updated:</strong> 2025/8/30
                        </p>
                    </motion.div>

                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Fixey Software Solutions (Pvt) Ltd ("Fixey," "we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platforms and services.
                        </p>
                    </motion.div>

                    {/* Section 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            1. Information We Collect
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Personal Information</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-3">
                            We may collect personal data that you provide, such as:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Payment details</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Usage Data</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-3">
                            We automatically collect information about your device and usage, including:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1">
                            <li>Browser type and version</li>
                            <li>Device information</li>
                            <li>IP address</li>
                            <li>Session logs and activity on the platform</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Cookies & Tracking</h3>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            We use cookies and similar technologies to improve performance, enhance user experience, and analyze usage patterns.
                        </p>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            2. How We Use Information
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-3">
                            We use the information we collect for the following purposes:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1">
                            <li>To provide, maintain, and improve our services</li>
                            <li>To process payments and manage subscriptions</li>
                            <li>To ensure platform security and prevent fraud</li>
                            <li>To communicate important updates, offers, and support</li>
                        </ul>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            3. Sharing & Disclosure
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-3">
                            We do not sell your personal data. However, we may share your information with:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1">
                            <li>Trusted third-party service providers, such as payment processors</li>
                            <li>Legal authorities, when required by law or regulations</li>
                        </ul>
                    </motion.div>

                    {/* Section 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            4. Data Retention
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            We retain personal data only as long as necessary to provide our services. Users may request deletion of their data, subject to legal and regulatory requirements.
                        </p>
                    </motion.div>

                    {/* Section 5 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            5. User Rights
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-3">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-4">
                            <li>Access your personal data</li>
                            <li>Correct inaccurate or incomplete information</li>
                            <li>Request deletion of your personal data</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            To exercise these rights, please contact us at: <a href="mailto:fixeydevelopers@gmail.com" className="text-blue-600 hover:underline">fixeydevelopers@gmail.com</a>
                        </p>
                    </motion.div>

                    {/* Section 6 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            6. Security Measures
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-3">
                            We implement strict security measures, including:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-4">
                            <li>Encryption of sensitive data</li>
                            <li>Secure storage systems</li>
                            <li>Regular monitoring for unauthorized access</li>
                        </ul>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            While we strive to protect your data, no system is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </motion.div>

                    {/* Section 7 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            7. Cookies & Tracking
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">What Are Cookies?</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            Cookies are small files stored on your device to enhance your browsing experience.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Cookies We Use</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-4">
                            <li><strong>Essential Cookies:</strong> For login authentication and security</li>
                            <li><strong>Performance Cookies:</strong> To monitor analytics and platform performance</li>
                            <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Managing Cookies</h3>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            You may disable cookies in your browser, but this may affect platform functionality. By using our services, you consent to our use of cookies as described above.
                        </p>
                    </motion.div>

                    {/* Section 8 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            8. Changes to This Privacy Policy
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            We may update this Privacy Policy from time to time. The updated policy will be posted on this page with the "Last Updated" date. Continued use of our services constitutes acceptance of the updated policy.
                        </p>
                    </motion.div>

                    {/* Section 9 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            9. Contact Information
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            If you have any questions or concerns regarding this Privacy Policy, please contact us:
                        </p>
                        <div className="mt-4 text-lg text-gray-800 leading-relaxed">
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

export default PrivacyPolicyPage;
