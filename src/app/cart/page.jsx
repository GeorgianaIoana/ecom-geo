import {
  CartControls,
  CartDisplay,
  CartTotals,
} from '@/components/cart/client';
import { BackToShop } from '@/components/ui/server';

export default function CartPage() {
  return (
    <div className="container px-4 mx-auto mb-28">
      <header className="flex justify-between">
        <BackToShop></BackToShop>
        <CartControls></CartControls>
      </header>

      <section className="mt-16 grid grid-cols-12 gap-6 text-">
        <div className="col-span-8">
          <CartDisplay></CartDisplay>
        </div>

        <aside className="col-span-4">
          <CartTotals></CartTotals>

          <div className="mt-12">
            <button
              type="button"
              title="Proceed to Checkout"
              className=" bg-gray-300  font-m text-sm px-6 hover:bg-cyan-600 transition-colors rounded-full text-white uppercase text-center font-semibold w-full py-4"
            >
              Proceed to Checkout
            </button>
          </div>

          <form className="flex mt-12 gap-2">
            <input
              type="text"
              name="cupon code"
              id="cupon-code"
              placeholder="Coupon code"
              className="border-2 py-2 px-3 focus:outline-cyan-600 focus:border-cyan-600 rounded-full w-full text-center"
            />
            <button
              type="submit"
              title="Apply Coupon"
              className="ml-6 rounded-full w-full border-2 transition-colors hover:bg-cyan-600 hover:border-cyan-600 hover:text-white py-2 px-2 lg:px-8"
            >
              Apply Coupon
            </button>
          </form>
        </aside>
      </section>
    </div>
  );
}
