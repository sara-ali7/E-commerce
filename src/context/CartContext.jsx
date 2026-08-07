import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const getItemKey = (item) => `${item.id}-${item.size || ""}`;

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => getItemKey(item) === getItemKey(product),
      );

      if (existingItem) {
        return prev.map((item) =>
          getItemKey(item) === getItemKey(product)
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const addQuantity = (id, size) => {
    const itemKey = `${id}-${size || ""}`;

    setCartItems((prev) =>
      prev.map((item) =>
        getItemKey(item) === itemKey
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      ),
    );
  };

  const removeFromCart = (id, size) => {
    const itemKey = `${id}-${size || ""}`;

    setCartItems((prev) =>
      prev.flatMap((item) => {
        if (getItemKey(item) !== itemKey) return [item];

        const nextQuantity = (item.quantity || 1) - 1;
        return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : [];
      }),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, addQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
