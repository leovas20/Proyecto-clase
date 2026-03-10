import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: '¿Qué garantía tienen los vehículos usados?',
        answer: 'Todos nuestros vehículos usados pasan por una rigurosa inspección de 150 puntos. Ofrecemos una garantía estándar de 6 meses o 10,000 km en motor y transmisión, con opción a extenderla hasta 2 años.'
    },
    {
        question: '¿Cuentan con opciones de financiamiento?',
        answer: 'Sí, trabajamos con los principales bancos y financieras del país para ofrecerte tasas competitivas desde el 9.99% anual, con enganches desde el 20% y plazos de hasta 72 meses.'
    },
    {
        question: '¿Puedo dejar mi auto a cuenta?',
        answer: 'Por supuesto. Realizamos un avalúo profesional gratuito de tu vehículo actual y te ofrecemos un precio justo que puedes usar como enganche para tu nueva compra.'
    },
    {
        question: '¿Cuáles son los requisitos para apartar un vehículo?',
        answer: 'Puedes apartar cualquier unidad de nuestro catálogo con $5,000 MXN. Este apartado es 100% reembolsable por 72 horas mientras completas el trámite de compra o visitas nuestras instalaciones.'
    },
    {
        question: '¿Hacen envíos a otros estados?',
        answer: 'Sí, contamos con red logística segura para enviar tu nuevo vehículo a cualquier parte de la República Mexicana. El costo varía según el destino.'
    }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <Layout>
            <div className="bg-gray-50 dark:bg-slate-900 min-h-[80vh] py-16 transition-colors">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Preguntas Frecuentes</h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400">
                            Resolvemos tus dudas principales para brindarte confianza en cada paso.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="bg-white dark:bg-brand-DEFAULT rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden"
                            >
                                <button
                                    className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-brand-DEFAULT focus:outline-none"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span className="text-lg font-medium text-gray-900 dark:text-white text-left">{faq.question}</span>
                                    <span className="text-accent-blue flex-shrink-0 ml-4">
                                        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-6 pb-4"
                                        >
                                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Faq;
