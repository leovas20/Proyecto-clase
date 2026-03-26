import React from 'react';
import { useCart } from '../../context/CartContext';
import { FaTimes, FaTrashAlt, FaShoppingCart } from 'react-icons/fa';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CartSidebar = () => {
    const { cart, removeFromCart, isCartOpen, toggleCart, cartTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        toggleCart();
        navigate('/checkout');
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                        onClick={toggleCart}
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white dark:bg-brand-DEFAULT shadow-2xl z-[70] flex flex-col border-l border-gray-200 dark:border-gray-800"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                            <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                                <FaShoppingCart />
                                Tu Carrito ({cart.length})
                            </h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition"
                            >
                                <FaTimes className="text-xl" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400">
                                    <FaShoppingCart className="text-6xl mb-4 text-gray-300 dark:text-gray-700" />
                                    <p>Tu carrito está vacío</p>
                                    <Button variant="outline" className="mt-6" onClick={toggleCart}>Continuar Explorando</Button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 bg-gray-50 dark:bg-slate-800 p-3 rounded-xl relative group border border-gray-100 dark:border-gray-700">
                                        <img src={item.images ? item.images[0] : item.image} alt={item.model} className="w-20 h-20 object-cover rounded-lg" />
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 dark:text-white line-clamp-1">{item.brand} {item.model}</h4>
                                            <p className="text-sm text-gray-500">{item.year} • {item.status}</p>
                                            <p className="font-bold text-accent-blue mt-1">L {item.price.toLocaleString()}</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="absolute top-3 right-3 p-2 bg-red-100 text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition shadow hover:bg-red-200"
                                            aria-label="Remove item"
                                        >
                                            <FaTrashAlt size={14} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer / Total */}
                        {cart.length > 0 && (
                            <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-900 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-600 dark:text-gray-300 font-medium">Subtotal</span>
                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">L {cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="space-y-3">
                                    <Button fullWidth variant="primary" onClick={handleCheckout} className="h-12 shadow-lg shadow-blue-500/20">
                                        Proceder al Pago
                                    </Button>
                                    <Button fullWidth variant="ghost" onClick={toggleCart} className="h-12">
                                        Seguir Viendo Vehículos
                                    </Button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
