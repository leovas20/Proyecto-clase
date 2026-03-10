import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (vehicle) => {
        // Check if already in cart
        const exists = cart.find(item => item.id === vehicle.id);
        if (exists) {
            toast.error('Este vehículo ya está en tu carrito');
            return;
        }

        setCart([...cart, vehicle]);
        toast.success('Vehículo agregado al carrito');
        setIsCartOpen(true);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
        toast.success('Vehículo removido del carrito');
    };

    const clearCart = () => {
        setCart([]);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const cartTotal = cart.reduce((total, item) => total + item.price, 0);

    const value = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        toggleCart,
        cartTotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
