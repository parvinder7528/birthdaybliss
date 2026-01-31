import React, { createContext, useContext, useState, useCallback } from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  storeName: string;
  image: string;
  retailPrice: number;
  retailOriginalPrice: number;
  wholesalePrice: number;
  wholesaleMinUnits: number;
  inStock: boolean;
  bulkSavings: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  mode: 'retail' | 'wholesale';
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, mode: 'retail' | 'wholesale') => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updateMode: (productId: string, mode: 'retail' | 'wholesale') => void;
  getItemQuantity: (productId: string) => number;
  getItemMode: (productId: string) => 'retail' | 'wholesale' | undefined;
  isInCart: (productId: string) => boolean;
  totalItems: number;
  totalPrice: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product, mode: 'retail' | 'wholesale') => {
    setItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1, mode }
            : item
        );
      }
      const minQuantity = mode === 'wholesale' ? product.wholesaleMinUnits : 1;
      return [...prev, { product, quantity: minQuantity, mode }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const updateMode = useCallback((productId: string, mode: 'retail' | 'wholesale') => {
    setItems(prev =>
      prev.map(item => {
        if (item.product.id === productId) {
          const minQuantity = mode === 'wholesale' ? item.product.wholesaleMinUnits : 1;
          return { 
            ...item, 
            mode,
            quantity: mode === 'wholesale' ? Math.max(item.quantity, minQuantity) : item.quantity
          };
        }
        return item;
      })
    );
  }, []);

  const getItemQuantity = useCallback((productId: string) => {
    const item = items.find(item => item.product.id === productId);
    return item?.quantity ?? 0;
  }, [items]);

  const getItemMode = useCallback((productId: string) => {
    const item = items.find(item => item.product.id === productId);
    return item?.mode;
  }, [items]);

  const isInCart = useCallback((productId: string) => {
    return items.some(item => item.product.id === productId);
  }, [items]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce((sum, item) => {
    const price = item.mode === 'wholesale' 
      ? item.product.wholesalePrice 
      : item.product.retailPrice;
    return sum + price * item.quantity;
  }, 0);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateMode,
        getItemQuantity,
        getItemMode,
        isInCart,
        totalItems,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
