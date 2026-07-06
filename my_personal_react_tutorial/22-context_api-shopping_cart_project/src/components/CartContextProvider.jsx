import { useState } from "react";

import CartContext from "./CartContext";

export default function CartContextProvider({ children }) {
  const [carts, setCarts] = useState({});

  const addToCart = (username, cID) => {
    setCarts((curCarts) => {
      const selectedCart = curCarts[username];
      selectedCart.push(cID);
      return { ...curCarts, [username]: selectedCart };
    });
  };
  const removeFromCart = (username, cID) => {
    setCarts((curCarts) => {
      const selectedCart = curCarts[username];
      const courseFoundAt = selectedCart.indexOf(cID);
      if (courseFoundAt === -1) {
        console.error("***no such course was found!");
        return false;
      }
      selectedCart.splice(courseFoundAt, 1);
      return { ...curCarts, [username]: selectedCart };
    });
  };
  const clearCart = (username) => {
    setCarts((curCarts) => {
      return { ...curCarts, [username]: [] };
    });
  };

  return (
    <CartContext.Provider
      value={{ carts, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
