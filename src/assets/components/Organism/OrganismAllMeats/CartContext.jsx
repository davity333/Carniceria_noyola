
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addProduct = (product) => {
    const existingProduct = selectedProducts.find(p => p.producto === product.producto);
    if (existingProduct) {
      setSelectedProducts(selectedProducts.map(p => 
        p.producto === product.producto ? { ...p, quantity: p.quantity + 1 } : p
      ));
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (product, quantity) => {
    if (quantity === 0) {
      setSelectedProducts(selectedProducts.filter(p => p.producto !== product.producto));
    } else {
      setSelectedProducts(selectedProducts.map(p => 
        p.producto === product.producto ? { ...p, quantity } : p
      ));
    }
  };

  return (
    <CartContext.Provider value={{ selectedProducts, addProduct, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
