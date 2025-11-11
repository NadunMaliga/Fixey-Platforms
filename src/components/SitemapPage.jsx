import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NewsletterSection from './NewsletterSection';     
import SEO from './SEO';

const SitemapPage = () => {
    const sitemapSections = [
        {
            title: 'Main Pages',
            links: [
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' }
            ]
        },
        {
            title: 'Our Offerings',
            links: [
                { name: 'Services', path: '/services' },
                { name: 'Platforms', path: '/platforms' },
                { name: 'Solutions', path: '/solutions' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'Blog', path: '/blog' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms & Conditions', path: '/terms-conditions' },
                { name: 'Cookie Policy', path: '/cookie-policy' },
                { name: 'Refund Policy', path: '/refund-policy' }
            ]
        }
    ];

    return (
        <>
            <SEO
                title="Sitemap - Fixey Platforms | Site Navigation"
                description="Complete sitemap of Fixey Platforms website. Find all pages including services, platforms, solutions, blog, and legal information."
                keywords="sitemap, site navigation, fixey platforms pages, website structure"
                url="https://fixeyplatforms.com/sitemap"
            />
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
                        className="text-center mb-12"
                    >
                        <h1
                            className="text-5xl md:text-6xl font-medium text-gray-800 mb-4"
                            style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-2px' }}
                        >
                            Sitemap
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                            Navigate through all pages of Fixey Platforms
                        </p>
                    </motion.div>

                    {/* Sitemap Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sitemapSections.map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="rounded-xl p-6"
                            >
                                <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200"
                                    style={{ fontFamily: "'Lexend', sans-serif" }}
                                >
                                    {section.title}
                                </h2>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.path}>
                                            <Link
                                                to={link.path}
                                                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center group"
                                            >
                                                <span className="mr-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div> 
                </div>
            </section>
            <NewsletterSection/>
            <Footer />
        </>
    );
};

export default SitemapPage;
