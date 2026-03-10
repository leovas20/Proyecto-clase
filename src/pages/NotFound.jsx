import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const NotFound = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
                <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-teal">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mt-6">
                    Página no encontrada
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-md">
                    Lo sentimos, no pudimos encontrar la página que estás buscando. Puede que haya sido eliminada o que la URL sea incorrecta.
                </p>
                <div className="mt-8 flex gap-4">
                    <Link to="/">
                        <Button variant="primary">Volver al Inicio</Button>
                    </Link>
                    <button onClick={() => window.history.back()}>
                        <Button variant="outline">Ir Atrás</Button>
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default NotFound;
