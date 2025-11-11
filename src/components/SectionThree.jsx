import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="min-h-screen flex flex-col bg-black">

            {/* Hero Content */}
            <div className="flex-1 flex items-start justify-start px-4 py-14">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-[80px] font-medium text-gray-100 mt-18"
                        style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-5.5px' }}
                    >
                        We’ve Given <br /> Everyone Already
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl hidden md:block text-gray-100 mb-10 max-w-2xl mx-auto"
                    >
                        We know it’s our duty to craft amazing experiences through our platforms staying with you from entertainment to destination.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl md:hidden text-gray-100 mb-6 max-w-2xl mx-auto"
                    >
                        We’re with you from fun to destination.
                    </motion.p>

                    {/* CTA Button */}
                    <Link to="/platforms">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700 transition-colors text-md font-medium"
                        >
                            Learn More
                        </motion.button>
                    </Link>
                </div>
            </div>

            {/* Image Cards Section */}
            <div className="w-full pb-0 overflow-hidden relative">
                <div className="w-full md:max-w-7xl md:mx-auto px-0 md:px-4">
                    <div className="flex justify-center items-end gap-1 md:gap-2">

                        {/* Card - Center Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] transform rotate-0 origin-bottom z-10 shadow-2xl relative rounded-t-2xl bg-black"
                        >
                            <img
                                src="https://i.postimg.cc/nr5tV4r5/69f00f33231a5ff5e835a9cb61bd66eb.gif"
                                alt="Design showcase"
                                className="w-full h-auto object-contain rounded-t-2xl"
                            />
                          </motion.div>

                    </div>
                </div>

                {/* Black Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-20"></div>
            </div>
        </section>
    );
};

export default HeroSection;
