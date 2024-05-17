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

  const incrementQuantity = (productId) => {
    const updatedCartProducts = cartProducts.map((product) =>
      product.productId === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    );
    setCartProducts(updatedCartProducts);
  };

  const decrementQuantity = (productId) => {
    const updatedCartProducts = cartProducts.map((product) =>
      product.productId === productId
        ? {
            ...product,
            quantity: product.quantity > 1 ? product.quantity - 1 : 1,
          }
        : product,
    );
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
        decrementQuantity,
        incrementQuantity,
        cartId,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
