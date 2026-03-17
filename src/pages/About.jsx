import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Layout>
            <div className="bg-gray-50 dark:bg-slate-900 min-h-[80vh] py-16 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Sobre Nosotros</h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                            Somos AutoMarket, la plataforma líder en venta de vehículos. Nuestro compromiso es brindarte la mejor experiencia, transparencia y seguridad en cada transacción.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Image Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-slate-800 flex items-center justify-center border border-gray-100 dark:border-gray-800"
                        >
                            <img src="https://placehold.co/1200x800/1e293b/ffffff?text=Instalaciones+de+Primer+Nivel" alt="Dealership" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white text-xl font-bold">Instalaciones de Primer Nivel</div>
                        </motion.div>

                        {/* Content Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="space-y-6 text-gray-700 dark:text-gray-300 text-lg"
                        >
                            <p>
                                En <strong>AutoMarket</strong> conectamos a compradores exigentes con vendedores profesionales. Nuestra plataforma asegura un inventario curado y detallado, donde cada auto ha pasado por rigurosas pruebas de calidad.
                            </p>
                            <p>
                                Fundada en 2024, nacimos de la necesidad de modernizar y digitalizar el sector automotriz. Desde autos económicos y eficientes hasta deportivos exclusivos e híbridos ecológicos, ofrecemos un catálogo para todos los gustos y necesidades.
                            </p>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Misión</h3>
                            <p>
                                Facilitar la movilidad de las personas a través de una plataforma tecnológica segura, transparente y centrada en la satisfacción del cliente.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default About;
