import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import NewsletterSection from './NewsletterSection';     


const SolutionsPage = () => {
    const projects = [
        {
            id: 1,
            name: 'Hemani Holdings',
            title: 'Supply Chain & E-Commerce Solutions',
            location: 'Sri Lanka & Japan',
            description: 'Hemani Holdings (Pvt) Ltd provides total supply chain solutions including clearing, forwarding, and comprehensive cargo transportation services. We developed their complete digital infrastructure for Air Freight, Sea Freight, customs clearance, and an e-commerce platform for their high-quality spice products under the Hemani brand, serving both local and international customers.',
            services: [
                'Supply Chain Management System',
                'E-Commerce Platform Development',
                'Freight Management (Air & Sea)',
                'Customs Clearance Integration',
                'Inventory & Product Management',
                'Multi-language Support',
                'Payment Gateway Integration',
                'Customer Portal & Tracking'
            ],
            image: 'https://i.postimg.cc/RZrGbhCz/logoheader.webp',
            category: 'E-Commerce',
            status: 'Live'
        },
        {
            id: 2,
            name: 'HemaniJPN',
            title: 'E-Commerce Platform',
            location: 'Japan',
            description: 'HemaniJPN is our grand partner and operates as one of our clients in Japan. We successfully delivered a comprehensive e-commerce platform for Banda Bedaharina, enabling them to reach customers across Sri Lanka with their authentic Japanese products.',
            services: [
                'Custom E-Commerce Development',
                'Payment Gateway Integration',
                'Inventory Management System',
                'Multi-language Support',
                'Mobile Responsive Design',
                'SEO Optimization'
            ],
            image: 'https://i.postimg.cc/6QnD5sSp/Screenshot-2025-01-22-162017-removebg-preview.png',
            category: 'E-Commerce',
            status: 'Live'
        },
        {
            id: 3,
            name: 'FlexCoach',
            title: 'Fitness Mobile App',
            location: 'Sri Lanka',
            description: 'FlexCoach is another of our clients who provide bodybuilding and body-related services. We developed a comprehensive fitness mobile application that enables them to manage their clients online, provide personalized workout plans, and track progress effectively.',
            services: [
                'Mobile App Development (iOS & Android)',
                'Client Management System',
                'Workout Plan Builder',
                'Progress Tracking',
                'Video Streaming Integration',
                'Payment & Subscription Management'
            ],
            image: 'https://i.postimg.cc/wjJWDXkV/IMG-20250630-181917-456.jpg',
            category: 'Fitness & Health',
            status: 'Live'
        },
        {
            id: 4,
            name: 'Hostel First',
            title: 'Tourism Management Platform',
            location: 'Sri Lanka',
            description: 'Hostel First is another client of ours, providing services to the tourism industry. We created a complete booking and management system that streamlines their operations and enhances guest experiences.',
            services: [
                'Booking Management System',
                'Guest Check-in/Check-out',
                'Payment Processing',
                'Room Inventory Management',
                'Customer Reviews & Ratings',
                'Analytics Dashboard'
            ],
            image: 'https://i.postimg.cc/9f04dt3f/304744586-477591167710629-5468303277076482535-n-removebg-preview.png',
            category: 'Tourism & Hospitality',
            status: 'Live'
        },
        {
            id: 5,
            name: 'More Projects',
            title: 'Custom Solutions',
            location: 'Global',
            description: 'We have successfully delivered numerous other projects across various industries including retail, healthcare, education, and logistics. Each solution is tailored to meet specific client needs and business objectives.',
            services: [
                'Web Application Development',
                'Mobile App Development',
                'API Development',
                'Database Design',
                'Cloud Infrastructure',
                'Ongoing Support & Maintenance'
            ],
            image: 'https://i.pinimg.com/1200x/c0/6c/8a/c06c8a75b125eed516381bd12ce4d9c1.jpg',
            category: 'Various Industries',
            status: 'Ongoing'
        }
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
                                className="text-5xl md:text-6xl lg:text-6xl font-medium text-gray-800 leading-tight"
                                style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-2px' }}
                            >
                                Client Solutions & Success Stories
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
                                We've partnered with businesses across the globe to deliver custom software solutions that drive growth and innovation. Here are some of our successful client projects.
                            </p>
                        </motion.div>
                    </div>

                    {/* Projects Grid */}
                    <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex-shrink-0 w-[300px] md:w-[380px] aspect-[4/5] rounded-2xl overflow-hidden relative group"
                            >
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 md:p-5 transform translate-y-0 transition-all duration-300">
                                    {/* Status Badge */}
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-600 text-white">
                                            {project.category}
                                        </span>
                                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white text-black">
                                            {project.status}
                                        </span>
                                    </div>

                                    <h3 className="text-white text-3xl md:text-4xl font-semibold mb-1"
                                        style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-2px' }}
                                    >
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-200 text-sm mb-1">{project.title}</p>
                                    <p className="text-gray-300 text-xs mb-3">{project.location}</p>
                                    <p className="text-gray-200 text-xs md:text-sm mb-3 line-clamp-3">
                                        {project.description}
                                    </p>
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

export default SolutionsPage;
