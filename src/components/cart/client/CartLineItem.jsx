import { useProduct } from '@/hooks';
import { CiCircleRemove } from 'react-icons/ci';
import { useContext, useState } from 'react';
import { StarsRating } from '@/components/ui/server';
import Link from 'next/link';
import Image from 'next/image';
import { Spinner } from '@/components/ui/client';
import { cartContext } from '@/contexts';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: fullProduct, loading } = useProduct(productId);
  const [isRemoved, setIsRemoved] = useState(false);
  const { removeFromCart } = useContext(cartContext);

  const removeProduct = () => {
    setIsRemoved(true);
    removeFromCart(productId);
  };

  if (isRemoved) {
    return;
  }

  if (loading) {
    // add spinner
    return (
      <tr>
        <td className="text-sm text-cyan-400">
          <Spinner></Spinner>
        </td>
      </tr>
    );
  }

  if (!fullProduct) {
    return (
      <tr>
        <td></td>
      </tr>
    );
  }

  const { title, price, rating, image: imageSrc } = fullProduct;
  const { count } = rating;

  return (
    <tr className="border-b h-12">
      <td className="p-2">
        <button
          type="button"
          title={`Remove ${title} from cart`}
          onClick={removeProduct}
          className="hover:text-cyan-500 text-lg"
        >
          <CiCircleRemove></CiCircleRemove>
        </button>
      </td>

      <td className="p-2">
        <Link href={`/products/${productId}`} title="Back to product page">
          <Image
            className="object-contain h-20 w-20"
            width={20}
            height={20}
            src={imageSrc}
            alt={title}
          ></Image>
        </Link>
      </td>

      <td className="p-2">
        <h1 className="hover:text-cyan-500">
          <Link href="./../../" title="Back to shop">
            {title}
          </Link>
        </h1>

        <div className="flex gap-4 items-center">
          <span className="text-amber-400">
            <StarsRating rating={rating}></StarsRating>
          </span>

          <span>({count} reviews)</span>
        </div>
      </td>
      <td className="p-2 text-center">{price}</td>
      <td className="p-2 text-center">{quantity}</td>
      <td className="p-2 text-center">{price * quantity}</td>
    </tr>
  );
};
