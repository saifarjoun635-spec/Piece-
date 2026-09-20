import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const StoreContext = createContext(null);

const CART_KEY = "dcpieces_cart_v1";

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          sku: product.sku,
          name: product.name,
          price: product.price,
          image: product.image,
          brand: product.brand,
          qty,
        },
      ];
    });
  };

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id));

  const clearCart = () => setCart([]);

  const count = useMemo(
    () => cart.reduce((sum, i) => sum + i.qty, 0),
    [cart]
  );
  const subtotal = useMemo(
    () => cart.reduce((sum, i) => sum + i.qty * i.price, 0),
    [cart]
  );

  const value = {
    cart,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    count,
    subtotal,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
