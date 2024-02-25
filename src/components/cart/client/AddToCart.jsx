import { Spinner } from '@/components/ui/client';
import { cartContext } from '@/contexts';
import { useCartActions } from '@/hooks/cart';
import { useContext } from 'react';

export const AddToCart = ({ product }) => {
  const { title, id } = product;
  const { addToCart, adding, removeFromCart, removing } = useCartActions();
  const { cartProducts } = useContext(cartContext);
  let cartQuantity = 0;

  const cartProduct = cartProducts.find(({ productId }) => {
    return id === productId;
  });

  if (cartProduct) {
    cartQuantity = cartProduct.quantity;
  }

  const isProductInCart = !!cartProduct;

  const onClick = () => {
    isProductInCart ? removeFromCart(id, cartQuantity) : addToCart(id);
  };

  const busy = adding || removing;

  return (
    <button
      type="button"
      className="bg-cyan-600 text-white uppercase font-medium text-sm py-3 px-6 hover:bg-cyan-500 transition-colors rounded-full"
      disabled={busy}
      title={
        isProductInCart ? `Remove ${title} from cart` : `Add ${title} to cart`
      }
      onClick={onClick}
    >
      {busy ? (
        <Spinner></Spinner>
      ) : isProductInCart ? (
        'Remove from Cart'
      ) : (
        'Add to Cart'
      )}
    </button>
  );
};
