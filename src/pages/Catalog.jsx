import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { FaSearch, FaFilter, FaGasPump, FaCogs, FaTachometerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Mock Data for Catalog (to be replaced with Firestore data)
const MOCK_VEHICLES = [
    { id: '1', brand: 'Toyota', model: 'Camry', year: 2023, price: 32000, mileage: 15000, transmission: 'Automática', fuel: 'Híbrido', status: 'Usado', image: '/images/camry.png' },
    { id: '2', brand: 'BMW', model: 'X5', year: 2024, price: 65000, mileage: 0, transmission: 'Automática', fuel: 'Gasolina', status: 'Nuevo', image: '/images/x5.png' },
    { id: '3', brand: 'Ford', model: 'Mustang', year: 2022, price: 45000, mileage: 22000, transmission: 'Manual', fuel: 'Gasolina', status: 'Usado', image: '/images/mustang.png' },
    { id: '4', brand: 'Tesla', model: 'Model 3', year: 2023, price: 48000, mileage: 5000, transmission: 'Automática', fuel: 'Eléctrico', status: 'Usado', image: '/images/model3.png' },
    { id: '5', brand: 'Honda', model: 'Civic', year: 2024, price: 28000, mileage: 0, transmission: 'Automática', fuel: 'Gasolina', status: 'Nuevo', image: '/images/civic.png' },
    { id: '6', brand: 'Audi', model: 'A4', year: 2021, price: 35000, mileage: 35000, transmission: 'Automática', fuel: 'Gasolina', status: 'Usado', image: '/images/a4.png' },
];

const Catalog = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    // Filters State
    const [searchTerm, setSearchTerm] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    useEffect(() => {
        // Simulate fetching data from Firestore
        setTimeout(() => {
            setVehicles(MOCK_VEHICLES);
            setLoading(false);
        }, 800);
    }, []);

    const filteredVehicles = vehicles.filter(v => {
        return (
            v.model.toLowerCase().includes(searchTerm.toLowerCase()) || v.brand.toLowerCase().includes(searchTerm.toLowerCase())
        ) && (
                brandFilter ? v.brand === brandFilter : true
            ) && (
                statusFilter ? v.status === statusFilter : true
            );
    });

    return (
        <Layout>
            <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-10 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header & Main Search */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Catálogo de Vehículos</h1>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">Encuentra el auto perfecto entre {filteredVehicles.length} resultados.</p>
                        </div>
                        <div className="w-full md:w-auto flex gap-2">
                            <div className="relative w-full md:w-72">
                                <input
                                    type="text"
                                    placeholder="Buscar por marca o modelo..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-accent-blue focus:border-accent-blue"
                                />
                                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Filters */}
                        <aside className="w-full lg:w-64 flex-shrink-0">
                            <div className="bg-white dark:bg-brand-DEFAULT rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 sticky top-24">
                                <div className="flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-200 pb-4 border-b border-gray-200 dark:border-gray-700 mb-4">
                                    <FaFilter />
                                    <span>Filtros</span>
                                </div>

                                {/* Brand Filter */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Marca</h3>
                                    <select
                                        value={brandFilter}
                                        onChange={(e) => setBrandFilter(e.target.value)}
                                        className="w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-800 dark:text-white sm:text-sm focus:ring-accent-blue focus:border-accent-blue"
                                    >
                                        <option value="">Todas las marcas</option>
                                        <option value="Toyota">Toyota</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Ford">Ford</option>
                                        <option value="Tesla">Tesla</option>
                                        <option value="Honda">Honda</option>
                                        <option value="Audi">Audi</option>
                                    </select>
                                </div>

                                {/* Status Filter */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Condición</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input type="radio" name="status" value="" checked={statusFilter === ''} onChange={(e) => setStatusFilter(e.target.value)} className="text-accent-blue focus:ring-accent-blue border-gray-300" />
                                            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Todos</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="status" value="Nuevo" checked={statusFilter === 'Nuevo'} onChange={(e) => setStatusFilter(e.target.value)} className="text-accent-blue focus:ring-accent-blue border-gray-300" />
                                            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Nuevos</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="status" value="Usado" checked={statusFilter === 'Usado'} onChange={(e) => setStatusFilter(e.target.value)} className="text-accent-blue focus:ring-accent-blue border-gray-300" />
                                            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Usados</span>
                                        </label>
                                    </div>
                                </div>

                                <Button
                                    fullWidth
                                    variant="outline"
                                    onClick={() => { setBrandFilter(''); setStatusFilter(''); setSearchTerm(''); }}
                                >
                                    Limpiar Filtros
                                </Button>
                            </div>
                        </aside>

                        {/* Catalog Grid */}
                        <div className="flex-1">
                            {loading ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <div key={i} className="animate-pulse bg-white dark:bg-brand-DEFAULT rounded-xl h-[400px] border border-gray-200 dark:border-gray-800">
                                            <div className="h-48 bg-gray-300 dark:bg-slate-700 rounded-t-xl"></div>
                                            <div className="p-5 space-y-4">
                                                <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-1/4"></div>
                                                <div className="h-6 bg-gray-300 dark:bg-slate-700 rounded w-3/4"></div>
                                                <div className="h-4 bg-gray-300 dark:bg-slate-700 rounded w-full"></div>
                                                <div className="h-10 bg-gray-300 dark:bg-slate-700 rounded w-full mt-4"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : filteredVehicles.length === 0 ? (
                                <div className="bg-white dark:bg-brand-DEFAULT rounded-xl p-12 text-center border border-gray-200 dark:border-gray-800">
                                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No se encontraron vehículos</h3>
                                    <p className="text-gray-500 dark:text-gray-400">Intenta ajustando los filtros de búsqueda.</p>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                                >
                                    {filteredVehicles.map(vehicle => (
                                        <div key={vehicle.id} className="bg-white dark:bg-brand-DEFAULT rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 overflow-hidden group flex flex-col">
                                            <div className="relative h-48 overflow-hidden">
                                                <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                <div className="absolute top-3 left-3 flex gap-2">
                                                    <span className={`px-2 py-1 text-xs font-bold rounded shadow-sm ${vehicle.status === 'Nuevo' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
                                                        {vehicle.status}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-5 flex-grow flex flex-col">
                                                <div className="text-sm font-semibold text-accent-blue mb-1">{vehicle.year}</div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-1">{vehicle.brand} {vehicle.model}</h3>

                                                <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                                                    <div className="flex items-center gap-2"><FaTachometerAlt className="text-gray-400" /> {vehicle.mileage.toLocaleString()} km</div>
                                                    <div className="flex items-center gap-2"><FaCogs className="text-gray-400" /> {vehicle.transmission}</div>
                                                    <div className="flex items-center gap-2"><FaGasPump className="text-gray-400" /> {vehicle.fuel}</div>
                                                </div>

                                                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">${vehicle.price.toLocaleString()}</div>
                                                    <Link to={`/vehicle/${vehicle.id}`}>
                                                        <Button variant="primary" className="py-2 px-4 text-sm">Ver Detalles</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Catalog;
