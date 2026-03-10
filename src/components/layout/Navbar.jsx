import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaUserCircle, FaMoon, FaSun, FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import CartSidebar from '../ui/CartSidebar';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { user } = useAuth();
    const { cart, toggleCart } = useCart();

    return (
        <>
            <nav className="bg-white dark:bg-brand-DEFAULT shadow-md sticky top-0 z-50 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        {/* Logo Section */}
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-accent-blue dark:text-blue-400">
                                <FaCar className="text-3xl" />
                                <span>AutoMarket</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-6">
                            <Link to="/catalog" className="text-gray-700 dark:text-gray-200 hover:text-accent-blue font-medium transition-colors">
                                Catálogo
                            </Link>
                            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-accent-blue font-medium transition-colors">
                                Nosotros
                            </Link>
                            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-accent-blue font-medium transition-colors">
                                Contacto
                            </Link>

                            <div className="flex items-center pl-4 border-l border-gray-200 dark:border-gray-700 space-x-4">
                                {/* Theme Toggle */}
                                <button
                                    onClick={toggleDarkMode}
                                    className="p-2 rounded-full bg-gray-100 dark:bg-brand-light text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                                    aria-label="Toggle Dark Mode"
                                >
                                    {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                                </button>

                                {/* Cart Toggle */}
                                <button
                                    onClick={toggleCart}
                                    className="relative p-2 rounded-full bg-gray-100 dark:bg-brand-light text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition focus:outline-none"
                                    aria-label="Open Cart"
                                >
                                    <FaShoppingCart />
                                    {cart.length > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                                            {cart.length}
                                        </span>
                                    )}
                                </button>

                                {/* Auth / Profile */}
                                {user ? (
                                    <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-brand-light text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 transition">
                                        <FaUserCircle className="text-xl" />
                                        <span className="text-sm font-semibold">Mi Perfil</span>
                                    </Link>
                                ) : (
                                    <Link to="/login" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue text-white hover:bg-blue-700 transition shadow-md shadow-blue-500/20">
                                        <FaUserCircle className="text-xl" />
                                        <span className="text-sm font-semibold">Ingresar</span>
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Mobile Menu Button & Cart */}
                        <div className="flex items-center md:hidden gap-3">
                            <button
                                onClick={toggleCart}
                                className="relative p-2 rounded-full text-gray-700 dark:text-gray-200 focus:outline-none"
                            >
                                <FaShoppingCart className="text-xl" />
                                {cart.length > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                                        {cart.length}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-700 dark:text-gray-200 hover:text-accent-blue focus:outline-none"
                            >
                                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Content */}
                {isOpen && (
                    <div className="md:hidden bg-white dark:bg-brand-DEFAULT shadow-lg absolute w-full left-0 z-40 transition-colors duration-300">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/catalog" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-accent-blue hover:bg-gray-50 dark:hover:bg-brand-light">
                                Catálogo
                            </Link>
                            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-accent-blue hover:bg-gray-50 dark:hover:bg-brand-light">
                                Nosotros
                            </Link>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-accent-blue hover:bg-gray-50 dark:hover:bg-brand-light">
                                Contacto
                            </Link>
                            <div className="flex items-center justify-between px-3 py-2">
                                <span className="text-gray-700 dark:text-gray-200 font-medium">Modo Oscuro</span>
                                <button
                                    onClick={toggleDarkMode}
                                    className="p-2 rounded-full bg-gray-100 dark:bg-brand-light text-gray-700 dark:text-gray-200"
                                >
                                    {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                                </button>
                            </div>
                            {user ? (
                                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block w-full text-center px-3 py-2 mt-4 rounded-md text-base font-medium bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-white">
                                    Mi Perfil
                                </Link>
                            ) : (
                                <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center px-3 py-2 mt-4 rounded-md text-base font-medium bg-accent-blue text-white hover:bg-blue-700">
                                    Ingresar
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </nav>
            {/* Attach Cart Sidebar to layout universally via Navbar or Layout */}
            <CartSidebar />
        </>
    );
};

export default Navbar;
