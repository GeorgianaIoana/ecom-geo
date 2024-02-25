import { cartContext } from '@/contexts';
import Link from 'next/link';
import { useContext } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { SumOfCart } from '.';

export const CartControls = () => {
  const obj = useContext(cartContext);

  return (
    <ul className="border border-zinc-200 transition-colors hover:bg-cyan-600 hover:text-white rounded-xl group">
      <li>
        <Link
          href="/cart"
          className="w-14 aspect-square flex justify-center items-center"
        >
          <div className="relative">
            <span className="text-3xl">
              <GiShoppingCart></GiShoppingCart>
            </span>

            <span className="absolute w-4 bg-cyan-600 text-white -top-2 -right-2 rounded-full text-xs flex justify-center group-hover:bg-white group-hover:text-black">
              <SumOfCart></SumOfCart>
            </span>
          </div>
        </Link>
      </li>
    </ul>
  );
};
