import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Layout>
            <div className="bg-gray-50 dark:bg-slate-900 min-h-[80vh] py-16 transition-colors">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Contacto</h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400">
                            ¿Tienes dudas o buscas asesoría personalizada? Déjanos un mensaje.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white dark:bg-brand-DEFAULT shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800"
                    >
                        <div className="p-8 md:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre Completo</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 dark:text-white px-4 py-2 focus:ring-accent-blue focus:border-accent-blue"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 dark:text-white px-4 py-2 focus:ring-accent-blue focus:border-accent-blue"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensaje</label>
                                    <textarea
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 dark:text-white px-4 py-2 focus:ring-accent-blue focus:border-accent-blue"
                                    />
                                </div>
                                <Button type="submit" fullWidth className="h-12 text-lg">
                                    Enviar Mensaje
                                </Button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </Layout>
    );
};

export default Contact;
