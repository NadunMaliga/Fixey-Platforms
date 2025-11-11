import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 


const ServicesPage = () => {
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
        {
            id: 3,
            title: 'AI & Robotics',
            subtitle: 'Intelligent Solutions',
            description: 'Cutting-edge artificial intelligence and robotics solutions transforming industries and automating processes.',
            features: [
                'Machine learning models',
                'Natural language processing',
                'Computer vision systems',
                'Robotic process automation',
                'Predictive analytics',
                'AI-powered chatbots'
            ],
            color: 'from-blue-500 to-blue-600',
            image: 'https://i.pinimg.com/1200x/7d/ef/a7/7defa7b8ab1c43262da4fc4a5f6d56dd.jpg'
        },
        {
            id: 4,
            title: 'Custom Software Development',
            subtitle: 'Tailored Solutions',
            description: 'Comprehensive software development services meeting all your technical requirements and business objectives.',
            features: [
                'Web application development',
                'Mobile app development',
                'Enterprise software solutions',
                'API development and integration',
                'Cloud infrastructure setup',
                'Maintenance and support'
            ],
            color: 'from-blue-500 to-blue-600',
            image: 'https://i.pinimg.com/736x/d8/08/87/d8088707973a0e023e1faa44d223de98.jpg'
        },

    ];

    return (
        <>
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
                                Our Services
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
                                We build our own platforms and provide comprehensive software solutions for clients across all industries.
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
                {/* CTA Button */}
                <div className='flex justify-center items-center mb-12'>
                    <Link to="/services">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-base font-medium focus:outline-none"
                        >
                            View All Services
                        </motion.button>
                    </Link>
                </div>
            </section>
 
        </>
    );
};

export default ServicesPage;
