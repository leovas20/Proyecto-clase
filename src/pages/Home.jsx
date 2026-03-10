import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative bg-brand-dark text-white overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-6"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            Encuentra el auto <br /> <span className="text-accent-blue">perfecto para ti</span>
                        </h1>
                        <p className="text-lg text-gray-300 max-w-lg">
                            Explora nuestro catálogo premium con las mejores marcas y modelos. Contamos con vehículos nuevos y usados de alta calidad garantizada.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Button onClick={() => window.location.href = '/catalog'} variant="primary" className="shadow-lg shadow-blue-500/30">
                                Ver Catálogo
                            </Button>
                            <Button onClick={() => window.location.href = '/contact'} variant="outline" className="border-white text-white hover:bg-white/10">
                                Contactar Asesor
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        {/* Placeholder for Hero Image */}
                        <div className="w-full h-64 md:h-96 bg-gradient-to-tr from-brand-light to-brand-DEFAULT rounded-2xl shadow-2xl border border-gray-700 flex items-center justify-center">
                            <span className="text-gray-400 font-medium">[Imagen de Vehículo Destacado]</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Search Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
                <div className="bg-white dark:bg-brand-DEFAULT rounded-xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 transition-colors">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">Búsqueda Rápida</h2>
                    <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Marca</label>
                            <select className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 dark:text-white shadow-sm focus:border-accent-blue focus:ring-accent-blue">
                                <option>Todas</option>
                                <option>Toyota</option>
                                <option>Ford</option>
                                <option>BMW</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Modelo</label>
                            <select className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 dark:text-white shadow-sm focus:border-accent-blue focus:ring-accent-blue">
                                <option>Todos</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Precio Máximo</label>
                            <select className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 dark:text-white shadow-sm focus:border-accent-blue focus:ring-accent-blue">
                                <option>Sin Límite</option>
                                <option>$10,000</option>
                                <option>$20,000</option>
                                <option>$50,000</option>
                            </select>
                        </div>
                        <div>
                            <Button fullWidth className="h-[42px] flex items-center justify-center gap-2">
                                <FaSearch />
                                <span>Buscar</span>
                            </Button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Featured Vehicles Preview */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Vehículos Destacados</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">Nuestras mejores ofertas del mes</p>
                    </div>
                    <a href="/catalog" className="hidden md:inline-flex text-accent-blue font-medium hover:underline">
                        Ver todo el inventario &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Placeholder Cards */}
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white dark:bg-brand-DEFAULT rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 transition transform hover:-translate-y-1 hover:shadow-xl group">
                            <div className="h-48 bg-gray-200 dark:bg-slate-800 w-full flex items-center justify-center">
                                <span className="text-gray-400">[Auto {item}]</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-xs font-semibold tracking-wider text-accent-blue uppercase">2023</span>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1 group-hover:text-accent-blue transition">Vehículo de Lujo {item}</h3>
                                    </div>
                                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Nuevo</span>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-xl font-bold text-gray-900 dark:text-white">$35,000</span>
                                    <Button variant="outline" className="text-sm px-4 py-1.5">Detalles</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Home;
