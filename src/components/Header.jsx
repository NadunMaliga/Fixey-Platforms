import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-black relative"
        >
            <nav className="w-full px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20 w-full">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            src="https://i.postimg.cc/m2Cqmwtj/Untitled-design-7-enhanced.png"
                            alt="Fixey Logo"
                            className="h-9 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
                        <Link to="/home" className="text-gray-100 text-sm hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-100 text-sm hover:text-white transition-colors">
                            About
                        </Link>
                        <Link to="/blog" className="text-gray-100 text-sm hover:text-white transition-colors">
                            Blog
                        </Link>
                        <Link to="/contact" className="text-gray-100 text-sm hover:text-white transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Fixey Us Button - Desktop */}
                    <div className="hidden md:block">
                        <Link to="/contact"> 
                        <button className="bg-white text-black text-sm px-5 py-2 rounded-2xl border-none transition-colors hover:bg-gray-100">
                            Fixey Us
                        </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex flex-col space-y-1.5"
                    >
                        <span className="block w-6 h-0.5 bg-gray-100"></span>
                        <span className="block w-6 h-0.5 bg-gray-100"></span>
                        <span className="block w-6 h-0.5 bg-gray-100"></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu - Full Screen with Animation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="md:hidden fixed inset-0 bg-white z-50 flex flex-col"
                    >
                        {/* Header with Logo and Close Button */}
                        <div className="flex justify-between items-center px-4 h-20">
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>
                                <img
                                    src="https://i.postimg.cc/bv0m0NTv/Untitled-design-8-removebg-preview.png"
                                    alt="Fixey Logo"
                                    className="h-12 w-auto"
                                />
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-800 text-2xl"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Menu Items - Left Aligned */}
                        <div className="flex-1 flex flex-col justify-start pt-8 px-8 space-y-6">
                            <Link
                                to="/home"
                                className="text-xl text-gray-800 hover:text-blue-600 transition-colors text-left"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="text-xl text-gray-800 hover:text-blue-600 transition-colors text-left"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/blog"
                                className="text-xl text-gray-800 hover:text-blue-600 transition-colors text-left"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                to="/contact"
                                className="text-xl text-gray-800 hover:text-blue-600 transition-colors text-left"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>

                        {/* Contact Us Button at Bottom */}
                        <div className="p-8">
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                                <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
 
        </motion.header>
    );
};

export default Header;
