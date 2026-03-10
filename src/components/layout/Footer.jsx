import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand & Socials */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        AutoMarket
                    </h2>
                    <p className="text-sm">
                        La plataforma líder y profesional para la compra y venta de vehículos. Encuentra el auto de tus sueños con nosotros.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-accent-blue transition"><FaFacebook className="text-xl" /></a>
                        <a href="#" className="hover:text-pink-500 transition"><FaInstagram className="text-xl" /></a>
                        <a href="#" className="hover:text-blue-400 transition"><FaTwitter className="text-xl" /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/catalog" className="hover:text-accent-blue transition">Catálogo de Vehículos</Link></li>
                        <li><Link to="/financing" className="hover:text-accent-blue transition">Opciones de Financiamiento</Link></li>
                        <li><Link to="/about" className="hover:text-accent-blue transition">Sobre Nosotros</Link></li>
                        <li><Link to="/faq" className="hover:text-accent-blue transition">Preguntas Frecuentes</Link></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="mt-1 text-accent-blue" />
                            <span>Av. Principal 1234, Ciudad del Motor<br />Zona Norte, CP 45000</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-accent-blue" />
                            <span>+52 (55) 1234-5678</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-accent-blue" />
                            <span>contacto@automarket.com</span>
                        </li>
                    </ul>
                </div>

                {/* Location Map Placeholder */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Ubicación</h3>
                    <div className="w-full h-32 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 overflow-hidden relative group">
                        {/* Map Integration Placeholder */}
                        <span className="text-sm text-gray-500">[Google Maps Embed]</span>
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <button className="text-sm bg-accent-blue text-white px-3 py-1 rounded">Ver mapa</button>
                        </div>
                    </div>
                    <p className="text-xs mt-3">Lunes a Sábado: 9:00 AM - 6:00 PM</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs">
                <p>&copy; {new Date().getFullYear()} AutoMarket. Todos los derechos reservados.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link to="/privacy" className="hover:text-white transition">Política de Privacidad</Link>
                    <Link to="/terms" className="hover:text-white transition">Términos y Condiciones</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
