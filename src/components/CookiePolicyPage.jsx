import { motion } from 'framer-motion';
import Header from './Header';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

const CookiePolicyPage = () => {
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
                            Cookie Policy
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
                            This Cookie Policy explains how Fixey Software Solutions (Pvt) Ltd ("Fixey Platforms," "we," "our," or "us") uses cookies and similar tracking technologies on our platforms and services. By using our services, you consent to the use of cookies as described in this policy.
                        </p>
                    </motion.div>

                    {/* Section 1: What Are Cookies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            1. What Are Cookies?
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit a website. They help websites remember your preferences, improve your browsing experience, and provide analytics to website operators.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Cookies can be "session cookies" (which expire when you close your browser) or "persistent cookies" (which remain on your device until they expire or you delete them).
                        </p>
                    </motion.div>

                    {/* Section 2: Types of Cookies We Use */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            2. Types of Cookies We Use
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Essential Cookies</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            These cookies are necessary for the proper functioning of our platforms. They enable core features such as:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>User authentication and login</li>
                            <li>Security and fraud prevention</li>
                            <li>Session management</li>
                            <li>Load balancing</li>
                        </ul>
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                            Without these cookies, our services may not function properly, and you may not be able to access certain features.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Cookies</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            These cookies help us understand how visitors interact with our platforms by collecting anonymous information. They allow us to:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>Monitor website traffic and usage patterns</li>
                            <li>Identify and fix technical issues</li>
                            <li>Improve platform performance and speed</li>
                            <li>Analyze which pages are most popular</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Functionality Cookies</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            These cookies enable enhanced functionality and personalization. They help us:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>Remember your preferences and settings</li>
                            <li>Provide personalized content and recommendations</li>
                            <li>Remember your language and region preferences</li>
                            <li>Save your login information for convenience</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Targeting/Advertising Cookies</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            These cookies may be used to deliver relevant advertisements and track advertising campaign effectiveness. They help us:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1">
                            <li>Show you relevant ads based on your interests</li>
                            <li>Limit the number of times you see an advertisement</li>
                            <li>Measure the effectiveness of advertising campaigns</li>
                            <li>Understand your browsing behavior across different websites</li>
                        </ul>
                    </motion.div>

                    {/* Section 3: Third-Party Cookies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            3. Third-Party Cookies
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            We may allow trusted third-party service providers to place cookies on your device. These may include:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-4">
                            <li>Analytics providers (e.g., Google Analytics)</li>
                            <li>Payment processors</li>
                            <li>Social media platforms</li>
                            <li>Advertising networks</li>
                        </ul>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            These third parties have their own privacy policies, and we encourage you to review them.
                        </p>
                    </motion.div>

                    {/* Section 4: How to Manage Cookies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            4. How to Manage Cookies
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Browser Settings</h3>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            Most web browsers allow you to control cookies through their settings. You can:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li>Block all cookies</li>
                            <li>Accept only first-party cookies</li>
                            <li>Delete cookies after each browsing session</li>
                            <li>Receive notifications when cookies are being set</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Browser-Specific Instructions</h3>
                        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed ml-4 space-y-1 mb-6">
                            <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                            <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                            <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                            <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Important Note</h3>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Please note that disabling cookies may affect the functionality of our platforms. Some features may not work properly, and you may not be able to access certain services.
                        </p>
                    </motion.div>

                    {/* Section 5: Do Not Track Signals */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            5. Do Not Track Signals
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Some browsers have a "Do Not Track" feature that lets you tell websites you do not want to have your online activities tracked. Currently, there is no industry standard for how to respond to Do Not Track signals, and we do not respond to such signals at this time.
                        </p>
                    </motion.div>

                    {/* Section 6: Your Consent */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            6. Your Consent
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            By using our platforms and services, you consent to the use of cookies as described in this Cookie Policy. If you do not agree with our use of cookies, you should adjust your browser settings accordingly or discontinue use of our services.
                        </p>
                    </motion.div>

                    {/* Section 7: Changes to This Policy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            7. Changes to This Cookie Policy
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. The updated policy will be posted on this page with the "Last Updated" date. We encourage you to review this policy periodically.
                        </p>
                    </motion.div>

                    {/* Section 8: Contact Us */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                            8. Contact Us
                        </h2>
                        <p className="text-lg text-gray-800 leading-relaxed mb-4">
                            If you have any questions or concerns about our use of cookies, please contact us:
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

export default CookiePolicyPage;
