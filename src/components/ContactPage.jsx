import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NewsletterSection from './NewsletterSection';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setSubmitSuccess(true);
                setErrors({});
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });

                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 5000);
            } else {
                setErrors({ submit: data.message || 'Failed to send message' });
                setTimeout(() => {
                    setErrors({});
                }, 5000);
            }
        } catch (error) {
            setErrors({ submit: 'Network error. Please try again later.' });
            setTimeout(() => {
                setErrors({});
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

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

                <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        <h1
                            className="text-4xl md:text-5xl font-medium text-gray-800 mb-4"
                            style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-2px' }}
                        >
                            Get in touch with us
                        </h1>
                        <p className="text-lg text-gray-700 mb-8">
                            Have questions or need support? We're here to help. Send us a message and we'll respond as soon as possible.
                        </p>

                        {submitSuccess && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 text-green-700"
                            >
                                <p className="font-medium">✓ Message sent successfully!</p>
                                <p className="text-sm">We'll get back to you as soon as possible.</p>
                            </motion.div>
                        )}

                        {errors.submit && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 text-red-600"
                            >
                                <p> {errors.submit}</p>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="mb-8">
                            <div className="space-y-4">
                                {/* Name Field */}
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-300'} focus:border-gray-400 focus:outline-none text-gray-800 text-base bg-gray-200`}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-300'} focus:border-gray-400 focus:outline-none text-gray-800 text-base bg-gray-200`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>

                                {/* Subject Field */}
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-400' : 'border-gray-300'} focus:border-gray-400 focus:outline-none text-gray-800 text-base bg-gray-200`}
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Message"
                                        rows="6"
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-400' : 'border-gray-300'} focus:border-gray-400 focus:outline-none text-gray-800 text-base bg-gray-200 resize-none`}
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    className={`w-full sm:w-auto text-white px-8 py-3 rounded-full transition-colors text-base font-medium flex items-center justify-center gap-2 ${isSubmitting
                                        ? 'bg-blue-400 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.span
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="inline-block"
                                            >

                                            </motion.span>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </motion.button>
                            </div>
                        </form>

                        {/* Contact Information */}
                        <div className="border-t border-gray-300 pt-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>
                                Contact Information
                            </h2>
                            <div className="space-y-2 text-gray-700">
                                <p><strong>Fixey Software Solutions (Pvt) Ltd</strong></p>
                                <p>Kalutara, Sri Lanka</p>
                                <p>Email: <a href="mailto:fixeydevelopers@gmail.com" className="text-blue-600 hover:underline">fixeydevelopers@gmail.com</a></p>
                            </div>
                        </div>

                        {/* Terms and Privacy */}
                        <div className="text-xs text-gray-600 leading-relaxed space-y-2 mt-8">
                            <p>
                                By submitting this form, you agree to our processing of your information in accordance with our{' '}
                                <Link to="/terms-conditions" className="text-blue-600 hover:underline">Terms & Conditions</Link>
                                {' '}and{' '}
                                <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                            </p>
                            <p>
                                We respect your privacy and will only use your information to respond to your inquiry.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
            <NewsletterSection />
            <Footer />
        </>
    );
};

export default ContactPage;
