import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
    const [formData, setFormData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'buyer'
    });
    const [loading, setLoading] = useState(false);
    const { signup, loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            return toast.error('Las contraseñas no coinciden');
        }

        setLoading(true);
        try {
            await signup(formData.email, formData.password, formData.displayName, formData.role);
            toast.success('Cuenta creada exitosamente');
            navigate('/');
        } catch (error) {
            toast.error('Error al registrar usuario. Verifica los datos.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
        setLoading(true);
        try {
            await loginWithGoogle();
            toast.success('Cuenta registrada exitosamente');
            navigate('/');
        } catch (error) {
            console.error("Firebase Google Signup Error:", error);
            toast.error(`Error Google: ${error.message || 'Error desconocido'}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="flex items-center justify-center min-h-[80vh] bg-gray-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-md w-full space-y-8 bg-white dark:bg-brand-DEFAULT p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
                >
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                            Crear Cuenta
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                            ¿Ya tienes cuenta?{' '}
                            <Link to="/login" className="font-medium text-accent-blue hover:text-blue-500">
                                Inicia sesión aquí
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre Completo</label>
                            <input
                                name="displayName"
                                type="text"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-slate-800 focus:outline-none focus:ring-accent-blue focus:border-accent-blue sm:text-sm"
                                placeholder="Juan Pérez"
                                value={formData.displayName}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-slate-800 focus:outline-none focus:ring-accent-blue focus:border-accent-blue sm:text-sm"
                                placeholder="ejemplo@correo.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contraseña</label>
                            <input
                                name="password"
                                type="password"
                                required
                                minLength="6"
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-slate-800 focus:outline-none focus:ring-accent-blue focus:border-accent-blue sm:text-sm"
                                placeholder="Mínimo 6 caracteres"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirmar Contraseña</label>
                            <input
                                name="confirmPassword"
                                type="password"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-slate-800 focus:outline-none focus:ring-accent-blue focus:border-accent-blue sm:text-sm"
                                placeholder="Repetir contraseña"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo de Cuenta</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white dark:bg-slate-800 focus:outline-none focus:ring-accent-blue focus:border-accent-blue sm:text-sm"
                            >
                                <option value="buyer">Comprador</option>
                                <option value="seller">Vendedor</option>
                            </select>
                        </div>

                        <div>
                            <Button type="submit" fullWidth disabled={loading}>
                                {loading ? 'Registrando...' : 'Crear Cuenta'}
                            </Button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white dark:bg-brand-DEFAULT text-gray-500">O registrarse con</span>
                            </div>
                        </div>

                        <div>
                            <Button 
                                type="button" 
                                fullWidth 
                                variant="outline" 
                                onClick={handleGoogleSignup} 
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

export default Register;
