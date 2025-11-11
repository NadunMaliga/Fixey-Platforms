import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsletterSection from './NewsletterSection';


const BlogPage = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    // Sample blog posts data
    const blogPosts = [
        {
            id: 1,
            title: 'Building the Future of Social Technology',
            excerpt: 'Discover how we\'re creating platforms that connect people across continents through innovative real-time communication.',
            content: 'At Fixey Platforms, we believe in the power of connection. Our social technology initiatives are designed to bring people together, regardless of geographical boundaries. Through innovative real-time video chat and communication platforms, we\'re creating spaces where strangers become friends and ideas flow freely across continents.\n\nOur journey began with a simple question: How can we make human connection more accessible and meaningful in the digital age? The answer led us to develop cutting-edge platforms that prioritize user experience, privacy, and genuine interaction.\n\nToday, millions of users worldwide trust our platforms to connect with others, share experiences, and build communities. We\'re not just building software; we\'re building bridges between cultures, ideas, and people.',
            image: 'https://i.pinimg.com/1200x/3f/91/8c/3f918c3561ca0a2c886389fe4c43578f.jpg',
            date: 'March 15, 2025',
            category: 'Technology'
        },
        {
            id: 2,
            title: 'Transforming Hospitality with Smart Booking',
            excerpt: 'Learn how our booking system is reshaping the travel industry and creating seamless experiences for travelers and hoteliers.',
            content: 'The hospitality industry is evolving, and we\'re at the forefront of this transformation. Our smart booking system is revolutionizing how travelers discover, book, and experience accommodations worldwide.\n\nBy combining intuitive design with powerful technology, we\'ve created a platform that benefits both travelers and hoteliers. Travelers enjoy seamless booking experiences, transparent pricing, and personalized recommendations. Hoteliers gain access to advanced management tools, real-time analytics, and a global customer base.\n\nOur commitment to innovation means we\'re constantly improving our platform based on user feedback and emerging technologies. The future of hospitality is here, and it\'s more connected, efficient, and user-friendly than ever before.',
            image: 'https://i.pinimg.com/736x/38/2e/29/382e2904288b8ce81d7cfa5c5e0cd703.jpg',
            date: 'March 10, 2025',
            category: 'Innovation'
        },
        {
            id: 3,
            title: 'Digital Tools for Modern Agriculture',
            excerpt: 'Explore how technology is empowering farmers with confidence and care through our agricultural platforms.',
            content: 'Agriculture is the backbone of our society, and we\'re dedicated to supporting farmers with innovative digital tools. Our agricultural platforms provide farmers with the resources they need to make informed decisions, optimize their operations, and increase productivity.\n\nFrom weather forecasting and crop management to market insights and financial planning, our comprehensive suite of tools addresses the real challenges farmers face daily. We work closely with agricultural communities to understand their needs and develop solutions that truly make a difference.\n\nTechnology and tradition can work hand in hand. By empowering farmers with digital tools, we\'re helping to ensure food security, sustainability, and prosperity for farming communities worldwide.',
            image: 'https://i.pinimg.com/1200x/7d/ef/a7/7defa7b8ab1c43262da4fc4a5f6d56dd.jpg',
            date: 'March 5, 2025',
            category: 'Agriculture'
        },
        {
            id: 4,
            title: 'The Power of Ideas Without Borders',
            excerpt: 'Our journey has always been about building technology that responds to real human needs, no matter where they are.',
            content: 'At Fixey Platforms, we don\'t believe in geographical limitations. Our philosophy has always been simple: great ideas can come from anywhere, and technology should serve everyone, everywhere.\n\nWe didn\'t start with a physical office or traditional corporate structure, and we don\'t intend to. Instead, we built a company around ideas, innovation, and impact. Our distributed team works across time zones and cultures, united by a common mission to create technology that matters.\n\nThis approach has allowed us to stay agile, responsive, and deeply connected to the diverse communities we serve. We\'re not just building for the world; we\'re building with the world.',
            image: 'https://i.pinimg.com/1200x/3f/91/8c/3f918c3561ca0a2c886389fe4c43578f.jpg',
            date: 'February 28, 2025',
            category: 'Company'
        },
        {
            id: 5,
            title: 'Creating Meaningful Digital Experiences',
            excerpt: 'Why our clients and partners continue to trust us to shape experiences that grow with them.',
            content: 'In a world saturated with digital products, we believe in creating experiences that truly matter. Our approach to design and development is rooted in empathy, understanding, and a commitment to excellence.\n\nEvery project we undertake begins with listening. We take the time to understand our clients\' goals, their users\' needs, and the unique challenges they face. This deep understanding informs every decision we make, from initial concept to final implementation.\n\nThe result? Digital experiences that feel natural, accessible, and lasting. Our clients return to us not just because we deliver quality software, but because we become true partners in their success. We grow together, learn together, and celebrate together.',
            image: 'https://i.pinimg.com/736x/38/2e/29/382e2904288b8ce81d7cfa5c5e0cd703.jpg',
            date: 'February 20, 2025',
            category: 'Design'
        },
        {
            id: 6,
            title: 'Innovation in Client Projects',
            excerpt: 'Delivering exceptional solutions tailored to bring your vision to life with cutting-edge technology.',
            content: 'Every client project is an opportunity to innovate, to push boundaries, and to create something extraordinary. We approach each engagement with fresh eyes and a commitment to excellence that never wavers.\n\nOur process is collaborative and transparent. From initial discovery to final delivery, we work hand-in-hand with our clients to ensure their vision becomes reality. We bring technical expertise, creative thinking, and industry best practices to every project.\n\nWhether it\'s a custom web application, a mobile platform, or an enterprise solution, we deliver software that not only meets requirements but exceeds expectations. Our track record speaks for itself: satisfied clients, successful launches, and solutions that stand the test of time.',
            image: 'https://i.pinimg.com/1200x/7d/ef/a7/7defa7b8ab1c43262da4fc4a5f6d56dd.jpg',
            date: 'February 15, 2025',
            category: 'Projects'
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
                    {/* Header Section */}
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
                            Our Blog
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700">
                            Insights, stories, and updates from the Fixey Platforms team
                        </p>
                    </motion.div>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-lg overflow-hidden duration-300 cursor-pointer group"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-black transition-colors"
                                        style={{ fontFamily: "'Lexend', sans-serif" }}
                                    >
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>
                                    <button
                                        onClick={() => setSelectedPost(post)}
                                        className="text-blue-600 font-medium text-sm hover:border-white hover:underline focus:outline-none"
                                    >
                                        Read More →
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div> 
                </div>
            </section>

            {/* Blog Post Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedPost(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-lg shadow-2xl relative overflow-hidden flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Image - Full Width with Close Button Overlay */}
                            <div className="relative h-64 md:h-96 flex-shrink-0">
                                <img
                                    src={selectedPost.image}
                                    alt={selectedPost.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Close Button with Glass Effect */}
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="absolute top-4 right-4 text-white text-3xl font-light focus:outline-none w-10 h-10 flex items-center justify-center backdrop-blur-md bg-black/30 hover:bg-black/50 rounded-full transition-all"
                                >
                                    ×
                                </button>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {selectedPost.category}
                                    </span>
                                </div>
                            </div>

                            {/* Modal Content - Scrollable */}
                            <div className="overflow-y-auto flex-1 p-6 md:p-8">
                                <p className="text-sm text-gray-500 mb-2">{selectedPost.date}</p>
                                <h2
                                    className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6"
                                    style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-1px' }}
                                >
                                    {selectedPost.title}
                                </h2>
                                <div className="text-gray-700 text-base leading-relaxed space-y-4">
                                    {selectedPost.content?.split('\n\n').map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <NewsletterSection />
            <Footer />
        </>
    );
};

export default BlogPage;
