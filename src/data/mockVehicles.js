export const MOCK_VEHICLES = [
    {
        id: '1', brand: 'Toyota', model: 'Camry', year: 2023, price: 784000, mileage: 15000, transmission: 'Automática', fuel: 'Híbrido', status: 'Usado',
        image: '/images/camry.png',
        images: ['/images/camry.png', 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'],
        description: 'Excelente estado, único dueño. Mantenimientos al día en agencia.',
        seller: { name: 'Auto Ventas Premium', phone: '+504 9999-9999', email: 'ventas@autopremium.hn' },
        specs: { engine: '2.5L 4 Cilindros', horsepower: '208 hp', color: 'Blanco', doors: 4, interior: 'Piel Negra' }
    },
    {
        id: '2', brand: 'BMW', model: 'X5', year: 2024, price: 1592500, mileage: 0, transmission: 'Automática', fuel: 'Gasolina', status: 'Nuevo',
        image: '/images/x5.png',
        images: ['/images/x5.png', 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'],
        description: 'Vehículo premium de demostración.',
        seller: { name: 'Auto Ventas Premium', phone: '+504 9999-9999', email: 'ventas@autopremium.hn' },
        specs: { engine: '3.0L 6 Cilindros', horsepower: '335 hp', color: 'Negro', doors: 4, interior: 'Piel Café' }
    },
    {
        id: '3', brand: 'Ford', model: 'Mustang', year: 2022, price: 1102500, mileage: 22000, transmission: 'Manual', fuel: 'Gasolina', status: 'Usado',
        image: '/images/mustang.png',
        images: ['/images/mustang.png', 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'],
        description: 'Deportivo clásico moderno en perfectas condiciones.',
        seller: { name: 'Auto Ventas Premium', phone: '+504 9999-9999', email: 'ventas@autopremium.hn' },
        specs: { engine: '5.0L V8', horsepower: '450 hp', color: 'Rojo', doors: 2, interior: 'Piel Negra' }
    },
    {
        id: '4', brand: 'Tesla', model: 'Model 3', year: 2023, price: 1176000, mileage: 5000, transmission: 'Automática', fuel: 'Eléctrico', status: 'Usado',
        image: '/images/model3.png',
        images: ['/images/model3.png', 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'],
        description: 'Autonomía extendida y AutoPilot incluido.',
        seller: { name: 'Auto Ventas Premium', phone: '+504 9999-9999', email: 'ventas@autopremium.hn' },
        specs: { engine: 'Eléctrico Dual Motor', horsepower: '346 hp', color: 'Blanco', doors: 4, interior: 'Piel Blanca' }
    },
    {
        id: '5', brand: 'Honda', model: 'Civic', year: 2024, price: 686000, mileage: 0, transmission: 'Automática', fuel: 'Gasolina', status: 'Nuevo',
        image: '/images/civic.png',
        images: ['/images/civic.png', 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'],
        description: 'Eficiente y confiable para la ciudad.',
        seller: { name: 'Auto Ventas Premium', phone: '+504 9999-9999', email: 'ventas@autopremium.hn' },
        specs: { engine: '2.0L 4 Cilindros', horsepower: '158 hp', color: 'Plata', doors: 4, interior: 'Tela Negra' }
    },
    {
        id: '6', brand: 'Audi', model: 'A4', year: 2021, price: 857500, mileage: 35000, transmission: 'Automática', fuel: 'Gasolina', status: 'Usado',
        image: '/images/a4.png',
        images: ['/images/a4.png', 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'],
        description: 'Lujo y confort con estilo alemán.',
        seller: { name: 'Auto Ventas Premium', phone: '+504 9999-9999', email: 'ventas@autopremium.hn' },
        specs: { engine: '2.0L Turbo', horsepower: '201 hp', color: 'Gris', doors: 4, interior: 'Piel Negra' }
    },
    { 
        id: '7', brand: 'Nissan', model: 'Sentra', year: 2020, price: 490000, mileage: 45000, transmission: 'Automática', fuel: 'Gasolina', status: 'Usado', 
        image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800',
        images: ['https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'],
        description: 'Ideal para la familia.',
        seller: { name: 'Auto Ventas Premium', phone: '+504 9999-9999', email: 'ventas@autopremium.hn' },
        specs: { engine: '2.0L', horsepower: '149 hp', color: 'Gris', doors: 4, interior: 'Tela' }
    },
    { 
        id: '8', brand: 'Porsche', model: 'Macan', year: 2024, price: 2205000, mileage: 0, transmission: 'Automática', fuel: 'Gasolina', status: 'Nuevo', 
        image: 'https://images.unsplash.com/photo-1503375806022-830206b02660?auto=format&fit=crop&q=80&w=800',
        images: ['https://images.unsplash.com/photo-1503375806022-830206b02660?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'],
        description: 'El deportivo en formato SUV.',
        seller: { name: 'Auto Ventas Premium', phone: '+504 9999-9999', email: 'ventas@autopremium.hn' },
        specs: { engine: '2.0L Turbo', horsepower: '261 hp', color: 'Azul', doors: 4, interior: 'Piel Premium' }
    },
    { 
        id: '9', brand: 'Chevrolet', model: 'Spark', year: 2019, price: 367500, mileage: 60000, transmission: 'Manual', fuel: 'Gasolina', status: 'Usado', 
        image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=800',
        images: ['https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'],
        description: 'Compacto y económico.',
        seller: { name: 'Auto Ventas Premium', phone: '+504 9999-9999', email: 'ventas@autopremium.hn' },
        specs: { engine: '1.4L', horsepower: '98 hp', color: 'Rojo', doors: 4, interior: 'Tela' }
    },
    { 
        id: '10', brand: 'Jeep', model: 'Wrangler', year: 2022, price: 1347500, mileage: 18000, transmission: 'Automática', fuel: 'Gasolina', status: 'Usado', 
        image: 'https://images.unsplash.com/photo-1533558701576-23c65e0272fb?auto=format&fit=crop&q=80&w=800',
        images: ['https://images.unsplash.com/photo-1533558701576-23c65e0272fb?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800'],
        description: 'Listo para la aventura 4x4.',
        seller: { name: 'Auto Ventas Premium', phone: '+504 9999-9999', email: 'ventas@autopremium.hn' },
        specs: { engine: '3.6L V6', horsepower: '285 hp', color: 'Gris Oscuro', doors: 4, interior: 'Tela/Impermeable' }
    }
];
