import React from "react";
import { useCart } from "../Context/Cart";

function Cart1() {

    const { cartItems, deleteFromCart } = useCart();

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price,
        0
    );

    return (
        <div>

            <h1>Cart</h1>

            {cartItems.map((item) => (
                <div key={item.id}>

                    <h2>{item.name}</h2>

                    <p>Price: ₹{item.price}</p>

                    <button onClick={() => deleteFromCart(item.id)}>
                        Delete
                    </button>

                </div>
            ))}

            <h2>Total Price: ₹{totalPrice}</h2>

        </div>
    );
}

export default Cart1;