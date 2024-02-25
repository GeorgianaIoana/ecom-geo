import { Spinner } from '@/components/ui/client';
import { cartContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext } from 'react';

export const CartTotals = () => {
  const { cartProducts } = useContext(cartContext);
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner></Spinner>;
      </div>
    );
  }

  const total = cartProducts.reduce((total, { quantity, productId }) => {
    const product = products.find((product) => {
      return productId === product.id;
    });
    const { price } = product;
    total += quantity * price;

    return total;
  }, 0);

  return (
    <>
      <h1 className="bg-gray-300 h-12 text-white justify-center text-sm font-semibold flex items-center px-2 uppercase rounded-full">
        Cart Totals
      </h1>

      <div>
        <div className="border-b py-3">Subtotal:</div>

        <div className="flex gap-5 border-b py-3">
          <span>Shipping:</span>
          <section>
            <div>
              <input type="radio" name="shipping" id="standard-shipping" />
              <label htmlFor="standard-shipping" className="ml-2">
                Standard (Free)
              </label>
            </div>

            <div>
              <input type="radio" name="shipping" id="express-shipping" />
              <label htmlFor="express-shipping" className="ml-2">
                Express ($49.00)
              </label>
            </div>
          </section>
        </div>

        <div className="border-b py-3">
          Total:
          {total}
        </div>
      </div>
    </>
  );
};
