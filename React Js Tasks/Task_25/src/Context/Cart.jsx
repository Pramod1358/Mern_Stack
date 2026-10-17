import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {

    const [items, setItems] = useState([
        {
            id: 1,
            name: "Shoes",
            price: 120,
            image: ""
        },
        {
            id: 2,
            name: "Mobile",
            price: 300,
            image: ""
        }
    ]);

    const [cartItems, setCartItems] = useState([]);

   const addToCart = (id) => {

    const item = items.find((item) => item.id === id);

    if (item) {

        setCartItems((prevCartItems) => {

            const alreadyExists = prevCartItems.some(
                (cartItem) => cartItem.id === id
            );

            if (alreadyExists) {
                console.log("Item already in cart");
                return prevCartItems;
            }

            return [
                ...prevCartItems,
                item
            ];
        });
    }
};

   const deleteFromCart = (id) => {

    setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.id !== id)
    );

};

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                deleteFromCart,
                cartItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
};