import { motion } from 'framer-motion';

const SectionTwo = () => {
    return (
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
                            Design faster.<br />
                            Stress less.<br />
                            Look amazing
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
                            Everything you need to design stunning experiences from our platforms to client projects all in one place.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom - Three Image Boxes */}
                <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible scrollbar-hide scroll-smooth pb-4">
                    {/* Box 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0 w-80 md:w-auto aspect-[4/5] rounded-lg overflow-hidden shadow-xl relative group"
                    >
                        <img
                            src="https://i.pinimg.com/1200x/3f/91/8c/3f918c3561ca0a2c886389fe4c43578f.jpg"
                            alt="Design showcase 1"
                            className="w-full h-full object-cover transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 md:p-5 transform translate-y-0 transition-all duration-300">
                            <h3 className="text-white text-3xl md:text-4xl font-semibold mb-1"
                                style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-2px' }}
                            >Social Technology</h3>
                            <p className="text-gray-200 text-xs md:text-sm mb-3">We are a social technology company connecting people and ideas globally</p>

                        </div>
                    </motion.div>

                    {/* Box 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0 w-80 md:w-auto aspect-[4/5] rounded-lg overflow-hidden shadow-xl relative group"
                    >
                        <img
                            src="https://i.pinimg.com/736x/38/2e/29/382e2904288b8ce81d7cfa5c5e0cd703.jpg"
                            alt="Design showcase 2"
                            className="w-full h-full object-cover transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 md:p-5 transform translate-y-0 transition-all duration-300">
                            <h3 className="text-white text-3xl md:text-4xl mb-1 font-semibold"
                                style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-2px' }}
                            >Client Projects</h3>
                            <p className="text-gray-200 text-xs md:text-sm mb-3">Delivering exceptional solutions tailored to bring your vision to life</p>

                        </div>
                    </motion.div>

                    {/* Box 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0 w-80 md:w-auto aspect-[4/5] rounded-lg overflow-hidden shadow-xl relative group"
                    >
                        <img
                            src="https://i.pinimg.com/1200x/7d/ef/a7/7defa7b8ab1c43262da4fc4a5f6d56dd.jpg"
                            alt="Design showcase 3"
                            className="w-full h-full object-cover transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md p-4 md:p-5 transform translate-y-0 transition-all duration-300">
                            <h3 className="text-white text-3xl md:text-4xl font-semibold mb-1"
                                style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-2px' }}
                            >Our Platforms</h3>
                            <p className="text-gray-200 text-xs md:text-sm mb-3">Building innovative platforms to showcase and share with the world</p>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SectionTwo;
