import { cartContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext } from 'react';

export const SumOfCart = () => {
  const { cartProducts } = useContext(cartContext);
  const { products } = useProducts();

  const total = cartProducts.reduce((total, { quantity, productId }) => {
    products.find((product) => {
      return productId === product.id;
    });
    total += quantity;

    return total;
  }, 0);

  return <>{total}</>;
};

// [produs1 quantity=10, produs2 q=8, produs3 q=5]

// products:{
// {
//   id:produs1
// }

// {
//   id: produs2
// }

// {
//   id:produs3
// }
// }
