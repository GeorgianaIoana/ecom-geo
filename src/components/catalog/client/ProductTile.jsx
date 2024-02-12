import Image from 'next/image';
import Link from 'next/link';
import { AddToCart } from '@/components/cart/client';

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id } = product;

  const productUrl = `/products/${id}`;

  return (
    <article className="w-full px-10 flex flex-col justify-between h-full">
      <header className="flex flex-col items-center justify-between gap-4 mb-4">
        <Link href={productUrl} title={title}>
          <Image
            width={200}
            height={200}
            src={imageUrl}
            alt={`Image for product ${title}`}
            style={{ objectFit: 'contain', width: '200px', height: '200px' }}
            className="inline"
          ></Image>
        </Link>

        <h1 className="text-center">
          <Link href={productUrl} title={title}>
            {title}
          </Link>
        </h1>
      </header>

      <section className="text-center">
        <div className="mb-6">${price}</div>
        <AddToCart product={product}></AddToCart>
      </section>
    </article>
  );
};
