import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import NewsletterSection from './NewsletterSection';
import SEO from './SEO';     

const AboutPage = () => {
    return (
        <>
            <SEO 
                title="About Us - Fixey Platforms | Our Vision & Mission"
                description="Learn about Fixey Platforms' journey in building technology without borders. We create platforms that connect people, empower industries, and inspire change globally."
                keywords="about fixey platforms, company vision, technology company, software development company sri lanka, social technology"
                url="https://fixeyplatforms.com/about"
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
                    {/* Top Content - Split Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20">
                        {/* Left Side - Main Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex items-center"
                        >
                            <h2
                                className="text-5xl md:text-6xl lg:text-6xl font-medium text-gray-800 leading-tight"
                                style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-2px' }}
                            >
                                Our vision is to create platforms that connect people, empower industries, and inspire change.
                            </h2>
                        </motion.div>

                        {/* Right Side - Paragraph */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex items-center"
                        >
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                                    We didn't begin with a physical office or a traditional structure and we don't intend to. Our journey has always been about ideas without borders, building technology that responds to real human needs.
                                </p>
                                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                                    Over time, that vision has taken shape in many ways: a spontaneous real time video chat bringing strangers together across continents, a booking system reshaping how travelers and hoteliers experience hospitality, and digital tools that help agriculture move forward with confidence and care.
                                </p>
                                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                                    What unites all of this is a single principle: creating technology that feels natural, accessible, and lasting. This is why our clients and partners continue to trust us not just to deliver software, but to shape meaningful experiences that grow with them.
                                </p>
                                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                                    Fixey Platforms is more than a company. It's a commitment to building futures one connection, one solution, one story at a time.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <NewsletterSection/>
            <Footer />
        </>
    );
};

export default AboutPage;
