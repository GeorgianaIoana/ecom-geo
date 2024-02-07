import Image from 'next/legacy/image';
import Link from 'next/link';

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id } = product;

  const productUrl = `/products/${id}`;

  return (
    <article className="w-full px-10">
      <header className="flex flex-col items-center justify-between gap-4 mb-4">
        <Link href={productUrl} title={title}>
          <Image
            width={200}
            height={200}
            src={imageUrl}
            alt={`Image for product ${title}`}
            objectFit="contain"
            className="inline"
          ></Image>
        </Link>

        <h1 className="text-center">
          <Link href={productUrl} title={title}>
            {title}
          </Link>
        </h1>
      </header>

      <section className="text-center">${price}</section>

      <footer>{/* add to cart homework */}</footer>
    </article>
  );
};
