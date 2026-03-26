import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { FaLock, FaCheckCircle, FaTrashAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Checkout = () => {
    const { cart, cartTotal, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate Payment Processing
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            clearCart();
            toast.success('¡Compra realizada con éxito! Revisa tu correo electrónico.');
        }, 2000);
    };

    if (cart.length === 0 && !success) {
        return (
            <Layout>
                <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-900 transition-colors">
                    <div className="text-center p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tu carrito está vacío</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-8">Agrega vehículos a tu carrito para proceder al pago.</p>
                        <Button onClick={() => navigate('/catalog')}>Explorar Catálogo</Button>
                    </div>
                </div>
            </Layout>
        );
    }

    if (success) {
        return (
            <Layout>
                <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-900 transition-colors">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center bg-white dark:bg-brand-DEFAULT p-10 rounded-2xl shadow-xl max-w-md w-full border border-gray-100 dark:border-gray-800"
                    >
                        <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">¡Pago Exitoso!</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Tu orden ha sido procesada correctamente. Te hemos enviado un correo con el comprobante y los detalles de entrega.
                        </p>
                        <Button fullWidth onClick={() => navigate('/catalog')}>Volver al Inicio</Button>
                    </motion.div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-10 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Finalizar Compra</h1>

                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Form Section */}
                        <div className="flex-1 space-y-6">
                            <div className="bg-white dark:bg-brand-DEFAULT rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                                    Información de Contacto
                                </h3>
                                <form onSubmit={handleSubmit} id="checkout-form" className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                                            <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:ring-accent-blue focus:border-accent-blue dark:text-white px-4 py-2" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Apellidos</label>
                                            <input required name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:ring-accent-blue focus:border-accent-blue dark:text-white px-4 py-2" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
                                            <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:ring-accent-blue focus:border-accent-blue dark:text-white px-4 py-2" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Teléfono</label>
                                            <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:ring-accent-blue focus:border-accent-blue dark:text-white px-4 py-2" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-4 mt-10">
                                        <span className="flex items-center gap-2">Detalles de Pago <FaLock className="text-sm text-gray-400" /></span>
                                    </h3>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Número de Tarjeta</label>
                                        <input required name="cardNumber" value={formData.cardNumber} onChange={handleChange} type="text" placeholder="0000 0000 0000 0000" className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:ring-accent-blue focus:border-accent-blue dark:text-white px-4 py-2" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Fecha de Expiración</label>
                                            <input required name="expiryDate" value={formData.expiryDate} onChange={handleChange} type="text" placeholder="MM/YY" className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:ring-accent-blue focus:border-accent-blue dark:text-white px-4 py-2" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CVV</label>
                                            <input required name="cvv" value={formData.cvv} onChange={handleChange} type="text" placeholder="123" className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 focus:ring-accent-blue focus:border-accent-blue dark:text-white px-4 py-2" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Order Summary Sidebar */}
                        <div className="w-full lg:w-96 flex-shrink-0">
                            <div className="bg-white dark:bg-brand-DEFAULT rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Resumen del Pedido</h3>

                                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex gap-4">
                                            <img src={item.images ? item.images[0] : item.image} alt={item.model} className="w-16 h-16 object-cover rounded-md" />
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1">{item.brand} {item.model}</h4>
                                                <p className="text-accent-blue font-bold mt-1">L {item.price.toLocaleString()}</p>
                                            </div>
                                            <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition self-start p-1">
                                                <FaTrashAlt size={12} />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3 mb-6">
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Subtotal</span>
                                        <span>L {cartTotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Cargos e Impuestos</span>
                                        <span>Calculado al final</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                                        <span>Total a Pagar</span>
                                        <span className="text-accent-blue">L {cartTotal.toLocaleString()}</span>
                                    </div>
                                </div>

                                <Button type="submit" form="checkout-form" fullWidth variant="primary" className="h-14 text-lg shadow-lg" disabled={loading}>
                                    {loading ? 'Procesando Pago...' : 'Confirmar y Pagar'}
                                </Button>

                                <p className="text-xs text-gray-500 text-center mt-4">
                                    Al hacer clic en "Confirmar y Pagar", aceptas nuestros Términos de Servicio y Políticas de Privacidad.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
