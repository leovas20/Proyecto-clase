import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Recovery = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { resetPassword } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await resetPassword(email);
            toast.success('Correo de recuperación enviado. Revisa tu bandeja de entrada.');
            setEmail('');
        } catch (error) {
            toast.error('Error al enviar el correo. Verifica tu dirección.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="flex items-center justify-center min-h-[80vh] bg-gray-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-md w-full space-y-8 bg-white dark:bg-brand-DEFAULT p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
                >
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                            Recuperar Contraseña
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                            Ingresa tu correo para recibir un enlace de recuperación.
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
                            <input
                                type="email"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-slate-800 focus:outline-none focus:ring-accent-blue focus:border-accent-blue sm:text-sm"
                                placeholder="ejemplo@correo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <Button type="submit" fullWidth disabled={loading}>
                                {loading ? 'Enviando...' : 'Enviar enlace'}
                            </Button>
                        </div>

                        <div className="text-center mt-4">
                            <Link to="/login" className="font-medium text-sm text-accent-blue hover:text-blue-500">
                                Volver a Iniciar Sesión
                            </Link>
                        </div>
                    </form>
                </motion.div>
            </div>
        </Layout>
    );
};

export default Recovery;
