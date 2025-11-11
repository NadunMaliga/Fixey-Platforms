 
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import NewsletterSection from './NewsletterSection';     


const PlatformsPage = () => {
    const services = [
        {
            id: 1,
            title: 'Social Media Platforms',
            subtitle: 'AlgoChat',
            comingSoon: true,
            description: 'Our flagship social platform connecting people across the globe through innovative video chat technology.',
            features: [
                'Unlimited free video chat',
                'Gender-based matching',
                'Country preference selection',
                'Real-time translation support',
                'Safe and moderated environment',
                'Mobile and desktop compatible'
            ],
            color: 'from-blue-500 to-blue-600',
            image: 'https://i.pinimg.com/1200x/3f/91/8c/3f918c3561ca0a2c886389fe4c43578f.jpg'
        },
        {
            id: 2,
            title: 'Booking Engine',
            subtitle: 'BookFlex',
            comingSoon: true,
            description: 'Advanced booking management system designed for hotels, travel agencies, and hospitality businesses.',
            features: [
                'Real-time availability management',
                'Multi-property support',
                'Payment gateway integration',
                'Customer relationship management',
                'Analytics and reporting',
                'Channel manager integration'
            ],
            color: 'from-blue-500 to-blue-600',
            image: 'https://i.pinimg.com/736x/38/2e/29/382e2904288b8ce81d7cfa5c5e0cd703.jpg'
        },
      ];

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

                     {/* Top Content - Split Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20">
                    {/* Left Side - Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                    >
                        <h2
                            className="text-5xl md:text-6xl lg:text-6xl font-medium text-gray-800 leading-12"
                            style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-2px' }}
                        >
                            Our Platforms
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
                        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                            We build innovative platforms that connect people and transform industries. Discover our flagship products designed to make a difference.
                        </p>
                    </motion.div>
                </div>

                     {/* Services List */}
                    <div className="space-y-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`bg-white rounded-2xl overflow-hidden ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } flex flex-col md:flex`}
                            >
                                {/* Image */}
                                <div className="md:w-2/5 h-64 md:h-auto relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="md:w-3/5 p-6 md:p-8">
                                    <div className="mb-2 flex items-center gap-2 flex-wrap">
                                        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white`}>
                                            {service.subtitle}
                                        </span>
                                        {service.comingSoon && (
                                            <span className="inline-block text-xs font-semibold px-3 py-1 text-gray-500">
                                                Coming Soon
                                            </span>
                                        )}
                                    </div>
                                    <h2
                                        className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
                                        style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-1px' }}
                                    >
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <span className="text-blue-600 mr-2">✓</span>
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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

export default PlatformsPage;
