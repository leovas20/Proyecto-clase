import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
                            <Link to="/catalog">
                                <Button variant="primary" className="shadow-lg shadow-blue-500/30">
                                    Ver Catálogo
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                                    Contactar Asesor
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        {/* Hero Image */}
                        <div className="w-full h-64 md:h-96 bg-brand-dark rounded-2xl shadow-[0_0_50px_rgba(59,130,246,0.3)] border border-gray-700 flex items-center justify-center overflow-hidden">
                            <img src="/images/hero_car.png" alt="Auto de Lujo" className="w-full h-full object-cover transform hover:scale-105 transition duration-700" />
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
                                <option>L 245,000</option>
                                <option>L 490,000</option>
                                <option>L 1,225,000</option>
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
                    {/* Featured Vehicles */}
                    {[
                        { id: 1, brand: 'BMW', model: 'X5', year: 2024, price: 1592500, state: 'Nuevo', image: '/images/x5.png' },
                        { id: 2, brand: 'Toyota', model: 'Camry', year: 2023, price: 784000, state: 'Usado', image: '/images/camry.png' },
                        { id: 3, brand: 'Ford', model: 'Mustang', year: 2022, price: 1102500, state: 'Usado', image: '/images/mustang.png' }
                    ].map((vehicle) => (
                        <div key={vehicle.id} className="bg-white dark:bg-brand-DEFAULT rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800 transition transform hover:-translate-y-1 hover:shadow-xl group flex flex-col">
                            <div className="h-48 w-full overflow-hidden relative">
                                <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-xs font-semibold tracking-wider text-accent-blue uppercase">{vehicle.year}</span>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1 group-hover:text-accent-blue transition">{vehicle.brand} {vehicle.model}</h3>
                                    </div>
                                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${vehicle.state === 'Nuevo' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'}`}>
                                        {vehicle.state}
                                    </span>
                                </div>
                                <div className="mt-auto pt-6 flex justify-between items-center">
                                    <span className="text-xl font-bold text-gray-900 dark:text-white">L {vehicle.price.toLocaleString()}</span>
                                    <Link to={`/vehicle/${vehicle.id}`}>
                                        <Button variant="outline" className="text-sm px-4 py-1.5 hover:bg-accent-blue hover:text-white hover:border-accent-blue">Detalles</Button>
                                    </Link>
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
