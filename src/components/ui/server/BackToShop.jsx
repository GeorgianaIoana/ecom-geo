import Link from 'next/link';
import { IoReturnUpBack } from 'react-icons/io5';

export const BackToShop = () => {
  return (
    <div className="border border-zinc-200 transition-colors hover:bg-cyan-600 hover:text-white rounded-xl">
      <Link
        href="/products"
        title="Back to shop"
        className="w-14 aspect-square flex justify-center items-center text-2xl"
      >
        <IoReturnUpBack></IoReturnUpBack>
      </Link>
    </div>
  );
};
