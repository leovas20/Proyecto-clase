import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaPhone, FaShareAlt, FaHeart, FaChevronLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { MOCK_VEHICLES } from '../data/mockVehicles';

const VehicleDetail = () => {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(0);
    const { addToCart } = useCart();

    useEffect(() => {
        // Simulate API Fetch
        setTimeout(() => {
            const foundVehicle = MOCK_VEHICLES.find(v => v.id === id);
            setVehicle(foundVehicle || null);
            setLoading(false);
        }, 600);
    }, [id]);

    if (loading) {
        return (
            <Layout>
                <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 px-4 transition-colors">
                    <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[50vh]">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-blue"></div>
                    </div>
                </div>
            </Layout>
        );
    }

    if (!vehicle) return <Layout><div className="text-center py-20">Vehículo no encontrado.</div></Layout>;

    return (
        <Layout>
            <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-10 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <Link to="/catalog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-accent-blue mb-6 transition">
                        <FaChevronLeft className="mr-2" /> Volver al catálogo
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Left Column - Gallery & Specs */}
                        <div className="flex-1 space-y-8">
                            {/* Image Gallery */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
                                <div className="relative h-64 md:h-96 w-full">
                                    <img src={vehicle.images[activeImage]} alt={vehicle.model} className="w-full h-full object-cover" />
                                    <div className="absolute top-4 right-4 flex gap-3">
                                        <button className="p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur rounded-full text-gray-700 dark:text-gray-200 hover:text-red-500 hover:bg-white transition shadow-lg">
                                            <FaHeart />
                                        </button>
                                        <button className="p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur rounded-full text-gray-700 dark:text-gray-200 hover:text-accent-blue hover:bg-white transition shadow-lg">
                                            <FaShareAlt />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex p-4 gap-4 overflow-x-auto">
                                    {vehicle.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImage(idx)}
                                            className={`h-20 w-32 flex-shrink-0 rounded-lg overflow-hidden border-2 ${activeImage === idx ? 'border-accent-blue' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                        >
                                            <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Specifications */}
                            <div className="bg-white dark:bg-brand-DEFAULT rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Especificaciones Técnicas</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    <div>
                                        <span className="block text-sm text-gray-500 dark:text-gray-400">Motor</span>
                                        <span className="block font-medium text-gray-900 dark:text-white">{vehicle.specs.engine}</span>
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500 dark:text-gray-400">Potencia</span>
                                        <span className="block font-medium text-gray-900 dark:text-white">{vehicle.specs.horsepower}</span>
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500 dark:text-gray-400">Color Exterior</span>
                                        <span className="block font-medium text-gray-900 dark:text-white">{vehicle.specs.color}</span>
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500 dark:text-gray-400">Color Interior</span>
                                        <span className="block font-medium text-gray-900 dark:text-white">{vehicle.specs.interior}</span>
                                    </div>
                                    <div>
                                        <span className="block text-sm text-gray-500 dark:text-gray-400">Puertas</span>
                                        <span className="block font-medium text-gray-900 dark:text-white">{vehicle.specs.doors}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-10 mb-4">Descripción General</h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                    {vehicle.description}
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Price, CTA, Map */}
                        <div className="w-full lg:w-96 flex-shrink-0 space-y-6">

                            {/* Summary Card */}
                            <div className="bg-white dark:bg-brand-DEFAULT rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 sticky top-24">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                            {vehicle.brand} {vehicle.model}
                                        </h1>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">{vehicle.year} • {vehicle.status}</p>
                                    </div>
                                </div>

                                <div className="text-4xl font-extrabold text-accent-blue mb-8">
                                    L {vehicle.price.toLocaleString()}
                                </div>

                                <div className="space-y-4 mb-8">
                                    <Button fullWidth variant="primary" className="h-12 text-lg shadow-lg shadow-blue-500/30" onClick={() => window.location.href = '/checkout'}>
                                        Comprar Ahora
                                    </Button>
                                    <Button fullWidth variant="outline" className="h-12 text-lg" onClick={() => addToCart(vehicle)}>
                                        Agregar al Carrito
                                    </Button>
                                    <Button fullWidth className="h-12 text-lg bg-green-500 hover:bg-green-600 text-white border-green-500 focus:ring-green-500 flex items-center justify-center gap-2">
                                        <FaWhatsapp className="text-xl" /> Contactar por WhatsApp
                                    </Button>
                                </div>

                                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Información del Vendedor</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                            <div className="h-10 w-10 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center font-bold text-gray-500">
                                                AV
                                            </div>
                                            <span className="font-medium">{vehicle.seller.name}</span>
                                        </div>
                                        <a href={`tel:${vehicle.seller.phone}`} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-accent-blue transition">
                                            <FaPhone /> <span>{vehicle.seller.phone}</span>
                                        </a>
                                        <a href={`mailto:${vehicle.seller.email}`} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-accent-blue transition">
                                            <FaEnvelope /> <span>{vehicle.seller.email}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-white dark:bg-brand-DEFAULT rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
                                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
                                    <FaMapMarkerAlt className="text-accent-blue" /> Ubicación
                                </h4>
                                <div className="w-full h-48 bg-gray-200 dark:bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center relative border border-gray-300 dark:border-gray-700 group">
                                    <span className="text-gray-500 dark:text-gray-400 font-medium z-10">[Google Maps Embed]</span>
                                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center group-hover:bg-black/20 transition-all cursor-pointer">
                                        <span className="opacity-0 group-hover:opacity-100 bg-white dark:bg-brand-DEFAULT text-sm font-medium px-4 py-2 rounded-lg shadow-lg">Abrir Mapa</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">Ciudad de México, CDMX</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default VehicleDetail;
