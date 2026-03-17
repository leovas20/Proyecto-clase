import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login, loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(email, password);
            toast.success('¡Bienvenido a AutoMarket!');
            navigate('/');
        } catch (error) {
            toast.error('Error al iniciar sesión. Verifica tus credenciales.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            await loginWithGoogle();
            toast.success('¡Bienvenido a AutoMarket!');
            navigate('/');
        } catch (error) {
            console.error("Firebase Google Login Error:", error);
            toast.error(`Error Google: ${error.message || 'Error desconocido'}`);
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
                            Iniciar Sesión
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                            ¿No tienes una cuenta?{' '}
                            <Link to="/register" className="font-medium text-accent-blue hover:text-blue-500">
                                Regístrate aquí
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
                                <input
                                    type="email"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-slate-800 focus:outline-none focus:ring-accent-blue focus:border-accent-blue focus:z-10 sm:text-sm"
                                    placeholder="ejemplo@correo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contraseña</label>
                                <input
                                    type="password"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-slate-800 focus:outline-none focus:ring-accent-blue focus:border-accent-blue focus:z-10 sm:text-sm"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-accent-blue focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                    Recuérdame
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link to="/recovery" className="font-medium text-accent-blue hover:text-blue-500">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <Button type="submit" fullWidth disabled={loading}>
                                {loading ? 'Iniciando...' : 'Ingresar'}
                            </Button>
                        </div>
                        
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white dark:bg-brand-DEFAULT text-gray-500">O continuar con</span>
                            </div>
                        </div>

                        <div>
                            <Button 
                                type="button" 
                                fullWidth 
                                variant="outline" 
                                onClick={handleGoogleLogin} 
                                disabled={loading}
                                className="flex justify-center items-center gap-2"
                            >
                                <FaGoogle className="text-red-500" />
                                {loading ? 'Conectando...' : 'Google'}
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </Layout>
    );
};

export default Login;
