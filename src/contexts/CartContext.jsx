import { useCart } from '@/hooks/cart';
import { createContext } from 'react';

export const cartContext = createContext();

// hardcoded
const cartId = 2;

export const CartContext = ({ children }) => {
  const { cartProducts, loading, error, setCartProducts } = useCart(cartId);

  const removeFromCart = (productId) => {
    const updatedCartProducts = cartProducts.filter((product) => {
      return product.productId !== productId;
    });
    setCartProducts(updatedCartProducts);
  };

  return (
    <cartContext.Provider
      value={{
        cartProducts,
        loading,
        error,
        setCartProducts,
        removeFromCart,
        cartId,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
