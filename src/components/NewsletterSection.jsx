import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({ type: '', text: '' });

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
                setMessage({ type: 'success', text: data.message });
                setEmail('');
            } else {
                setMessage({ type: 'error', text: data.message });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Network error. Please try again later.' });
        } finally {
            setIsSubmitting(false);
            
            // Clear message after 5 seconds
            setTimeout(() => {
                setMessage({ type: '', text: '' });
            }, 5000);
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

                    <form onSubmit={handleSubmit} className="mb-6">
                        {message.text && (
                            <div className={`mb-4 p-3 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {message.text}
                            </div>
                        )}
                        <div className="flex flex-col sm:flex-row gap-3 mb-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                                disabled={isSubmitting}
                                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-400 focus:outline-none text-gray-800 text-base bg-gray-200 disabled:opacity-50"
                            />
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className="text-white px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-base font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Subscribing...' : 'Sign up'}
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
