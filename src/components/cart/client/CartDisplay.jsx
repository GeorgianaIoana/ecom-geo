import { cartContext } from '@/contexts';
import { useContext } from 'react';
import { CartLineItem } from '.';
import { Spinner } from '@/components/ui/client';
export const CartDisplay = () => {
  const { cartProducts, loading } = useContext(cartContext);
  // insert loader style as homework
  if (loading) {
    //  please add spinner
    return (
      <div className="h-full flex justify-center items-center">
        <Spinner></Spinner>;
      </div>
    );
  }

  return (
    <table>
      <thead className="border-b h-12">
        <tr className="uppercase text-gray-400">
          <th></th>
          <th></th>
          <th className=" px-2 font-normal">Product</th>
          <th className=" px-2 font-normal">Price</th>
          <th className=" px-2 font-normal">Quantity</th>
          <th className=" px-2 font-normal">Total</th>
        </tr>
      </thead>
      <tbody>
        {cartProducts.map((cartProduct) => {
          return (
            <CartLineItem
              key={cartProduct.productId}
              product={cartProduct}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};
