import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const add = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((el) => el.name === item.name);
            if (existingItem) {
                return prevCart.map((el) =>
                    el.name === item.name
                        ? { ...el, quantity: el.quantity + 1 }
                        : el
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, add }}>
            {children}
        </CartContext.Provider>
    );
};