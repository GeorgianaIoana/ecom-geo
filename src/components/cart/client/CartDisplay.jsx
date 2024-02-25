import { cartContext } from '@/contexts';
import { useContext } from 'react';
import { CartLineItem } from '.';
import { Spinner } from '@/components/ui/client';
import { BackToShop } from '@/components/ui/server';
export const CartDisplay = () => {
  const { cartProducts, loading } = useContext(cartContext);
  // insert loader style as homework
  if (loading) {
    //  please add spinner
    return (
      <div className="flex justify-center items-center">
        <Spinner></Spinner>;
      </div>
    );
  }

  if (cartProducts.length === 0) {
    return (
      <div className="h-full grid grid-rows-2 text-2xl text-cyan-600 items-end justify-center">
        <div>There is no product here.</div>
        <div className="flex gap-2 items-center self-start pt-2">
          <span>Please, go back to shop</span>
          <BackToShop></BackToShop>
        </div>
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
