import React from "react";
import { useCart } from "../Context/Cart";

function Items() {

  const { items , addToCart } = useCart();

  return (
    <div>
      {items.map((item) => (
        <div  className="border-4 w-50 h-auto" key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: ₹{item.price}</p>
          <button onClick={() => addToCart(item.id)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Items;