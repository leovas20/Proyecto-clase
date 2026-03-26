import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { FaCar, FaUsers, FaChartLine, FaPlus, FaEdit, FaTrash, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

// Mock Admin Data
const STATS = {
    totalVehicles: 156,
    totalSales: 45,
    totalUsers: 890,
    revenue: 'L 30,625,000'
};

const MOCK_INVENTORY = [
    { id: '1', brand: 'Toyota', model: 'Camry', year: 2023, price: 784000, status: 'Activo' },
    { id: '2', brand: 'BMW', model: 'X5', year: 2024, price: 1592500, status: 'Vendido' },
    { id: '3', brand: 'Ford', model: 'Mustang', year: 2022, price: 1102500, status: 'Activo' },
];

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <Layout>
            <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-10 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Panel de Administración</h1>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">Gestiona el inventario, usuarios y visualiza métricas.</p>
                        </div>
                        <div className="mt-4 md:mt-0 flex gap-2">
                            <Button onClick={() => setActiveTab('dashboard')} variant={activeTab === 'dashboard' ? 'primary' : 'ghost'}>Dashboard</Button>
                            <Button onClick={() => setActiveTab('inventory')} variant={activeTab === 'inventory' ? 'primary' : 'ghost'}>Inventario</Button>
                        </div>
                    </div>

                    {activeTab === 'dashboard' ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-white dark:bg-brand-DEFAULT rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-accent-blue rounded-lg"><FaCar className="text-2xl" /></div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Vehículos</p>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{STATS.totalVehicles}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-brand-DEFAULT rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg"><FaChartLine className="text-2xl" /></div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Ventas Completadas</p>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{STATS.totalSales}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-brand-DEFAULT rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg"><FaUsers className="text-2xl" /></div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Usuarios Registrados</p>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{STATS.totalUsers}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-brand-DEFAULT rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg"><FaChartLine className="text-2xl" /></div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Ingresos Proyectados</p>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{STATS.revenue}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity Placeholder */}
                            <div className="bg-white dark:bg-brand-DEFAULT rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Actividad Reciente</h3>
                                <div className="space-y-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-800 last:border-0 pb-0">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-gray-500"><FaUserCircle /></div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Nuevo usuario registrado</p>
                                                    <p className="text-xs text-gray-500">Hace {i * 2} horas</p>
                                                </div>
                                            </div>
                                            <Button variant="outline" className="text-xs py-1 px-3">Ver Detalle</Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-brand-DEFAULT rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden"
                        >
                            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Listado de Vehículos</h3>
                                <Button className="flex items-center gap-2"><FaPlus /> Añadir Vehículo</Button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 dark:bg-slate-800/50 text-gray-600 dark:text-gray-300 text-sm">
                                            <th className="p-4 font-medium border-b border-gray-100 dark:border-gray-700">ID</th>
                                            <th className="p-4 font-medium border-b border-gray-100 dark:border-gray-700">Vehículo</th>
                                            <th className="p-4 font-medium border-b border-gray-100 dark:border-gray-700">Año</th>
                                            <th className="p-4 font-medium border-b border-gray-100 dark:border-gray-700">Precio</th>
                                            <th className="p-4 font-medium border-b border-gray-100 dark:border-gray-700">Estado</th>
                                            <th className="p-4 font-medium border-b border-gray-100 dark:border-gray-700 text-right">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-700 dark:text-gray-300">
                                        {MOCK_INVENTORY.map((item) => (
                                            <tr key={item.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition">
                                                <td className="p-4">#{item.id}</td>
                                                <td className="p-4 font-medium text-gray-900 dark:text-white">{item.brand} {item.model}</td>
                                                <td className="p-4">{item.year}</td>
                                                <td className="p-4">L {item.price.toLocaleString()}</td>
                                                <td className="p-4">
                                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'Activo' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                                                        {item.status === 'Activo' ? <FaCheckCircle /> : <FaTimesCircle />}
                                                        {item.status}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-right space-x-2">
                                                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition" aria-label="Edit"><FaEdit /></button>
                                                    <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition" aria-label="Delete"><FaTrash /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}

                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
