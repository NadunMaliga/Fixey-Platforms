import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (error) {
            setError('');
        }
    };

    const validateEmail = () => {
        if (!email.trim()) {
            setError('Email is required');
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail()) {
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/newsletter.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (data.success) {
                setSubmitSuccess(true);
                setError('');
                setEmail('');
                
                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 5000);
            } else {
                setError(data.message || 'Failed to subscribe');
                setTimeout(() => {
                    setError('');
                }, 5000);
            }
        } catch (error) {
            setError('Network error. Please try again later.');
            setTimeout(() => {
                setError('');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-gray-200 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-left"
                >
                    <h2
                        className="text-2xl md:text-2xl font-medium text-gray-800 mb-8"
                        style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-1px' }}
                    >
                        Get news and updates from Fixey
                    </h2>

                    {submitSuccess && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                        >
                            <p className="font-medium">✓ Successfully subscribed to newsletter!</p>
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="mb-6">
                        <div className="flex flex-col sm:flex-row gap-3 sm:items-start mb-4">
                            <div className="flex-1">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Email"
                                    disabled={isSubmitting}
                                    className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-400' : 'border-gray-300'} focus:border-gray-400 focus:outline-none text-gray-800 text-base bg-gray-200 disabled:opacity-50`}
                                />
                                {error && (
                                    <p className="mt-1 text-sm text-red-600">{error}</p>
                                )}
                            </div>
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className="text-white px-8 py-3 rounded-full border-bg-blue-600 bg-blue-600 hover:bg-blue-700 transition-colors text-base font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 h-12 sm:flex-shrink-0"
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.span
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="inline-block"
                                        >
                                         </motion.span>
                                        Subscribing...
                                    </>
                                ) : (
                                    'Sign up'
                                )}
                            </motion.button>
                        </div>
                    </form>

                    <div className="text-xs text-gray-600 leading-relaxed space-y-2">
                        <p>
                            By signing up you agree to receive updates and marketing messages (e.g. email, social, etc.) from Fixey about Fixey's existing and future products and services.
                        </p>
                        <p>
                            You may withdraw your consent and unsubscribe at any time by clicking the unsubscribe link included in our messages.
                        </p>
                        <p>
                            Your subscription is subject to the{' '}
                            <Link to="/terms-conditions" className="text-blue-600 hover:underline">Terms</Link>
                            {' '}and{' '}
                            <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NewsletterSection;
