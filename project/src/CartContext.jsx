import React, { createContext, useState } from "react";

// Create CartContext
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};
