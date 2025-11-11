import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from './Header';

const HeroSection = () => {
    return (
        <section className="min-h-screen flex flex-col bg-black">
            <Header />

            {/* Hero Content */}
            <div className="flex-1 flex items-start justify-start px-4 py-14">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-[80px] font-medium text-gray-100 mb-6"
                        style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-5.5px' }}
                    >
                        Create Meet<br />Reality
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl hidden md:block text-gray-100 mb-10 max-w-2xl mx-auto"
                    >
                        Oh, We'Re Bored In This World Now, Aren't We, <br />But That's Why We Exist ?
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl md:hidden text-gray-100 mb-6 max-w-2xl mx-auto"
                    >
                        Click. Create. Chaos. Look amazing.
                    </motion.p>

                    {/* CTA Button */}
                    <Link to="/about">
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
                        {/* Card 1 - Green */}
                        <div className="w-16 h-[280px] hidden md:block md:w-48 md:h-60 lg:w-56 lg:h-72 bg-gradient-to-br from-green-300 to-green-500 rounded-t-lg shadow-lg transform -rotate-12 origin-bottom">
                            <img
                                src="https://i.pinimg.com/736x/1e/4c/e4/1e4ce4a692e6cac1f9fb991d8a88eecd.jpg"
                                alt="Design 1"
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                        </div>

                        {/* Card 2 - Pink/Purple */}
                        <div className="w-[170px] h-[300px] md:w-52 md:h-64 lg:w-60 lg:h-80 bg-gradient-to-br from-pink-400 via-purple-400 to-orange-400 rounded-t-lg shadow-lg transform md:-rotate-3  origin-bottom z-[5]">
                            <img
                                src="https://i.pinimg.com/1200x/3d/f6/8a/3df68a7e43510d55de6486a8be7fa9dc.jpg"
                                alt="Design 2"
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                        </div>

                        {/* Card 3 - Blue (Center/Largest) */}
                        <div className="w-[250px] h-[350px] md:w-56 md:h-72 lg:w-64 lg:h-96 bg-gradient-to-br from-blue-500 to-blue-700 rounded-t-lg shadow-xl transform rotate-0 origin-bottom z-10">
                            <img
                                src="https://i.pinimg.com/736x/32/f8/04/32f8040523b59101a00ecca4f6f7b01f.jpg"
                                alt="Design 3"
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                        </div>

                        {/* Card 4 - Red/Coral */}
                        <div className="w-[170px] h-[300px] md:w-52 md:h-64 lg:w-60 lg:h-80 bg-gradient-to-br from-red-400 to-pink-500 rounded-t-lg shadow-lg transform md:rotate-3 origin-bottom z-[5]">
                            <img
                                src="https://i.pinimg.com/1200x/2b/75/77/2b7577c947cd69eb30e38be05946b7e8.jpg"
                                alt="Design 4"
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                        </div>

                        {/* Card 5 - Purple */}
                        <div className="w-16 h-[280px] hidden md:block md:w-48 md:h-60 lg:w-56 lg:h-72 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-t-lg shadow-lg transform rotate-12 origin-bottom">
                            <img
                                src="https://i.pinimg.com/736x/78/0e/49/780e49aafa98c6a523f507a3c3ca5f45.jpg"
                                alt="Design 5"
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Black Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-20"></div>
            </div>
        </section>
    );
};

export default HeroSection;
