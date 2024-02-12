import { AddToCart, CartControls } from '@/components/cart/client';
import { baseUrl } from '@/index';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const getProduct = async (productId) => {
  return fetch(`${baseUrl}/products/${productId}`)
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      redirect('/not-found');
    });
};

export default async function ProductPage({ params }) {
  const productId = params.pid;
  const product = await getProduct(productId);
  const { image: imageUrl, price, description, title, rating } = product;
  const { rate, count } = rating;

  return (
    <div className="container px-4 mx-auto">
      <header className="flex justify-end">
        <CartControls></CartControls>
      </header>

      <section className="flex items-center mt-16 mb-32">
        <div className="w-3/5">
          <Image
            width={200}
            height={200}
            src={imageUrl}
            alt={`Image for product ${title}`}
            style={{
              objectFit: 'contain',
              width: '500px',
              height: '500px',
              minWidth: '100%',
              maxWidth: '100%',
              minHeight: '100%',
              maxHeight: '100%',
            }}
            className="inline"
          ></Image>
        </div>

        <div className="w-2/5 text-neutral-900">
          <header className="ml-1">
            <h1 className="text-2xl uppercase font-semibold">{title}</h1>
            <div>
              <span>{rate} stars</span>
              <span>({count} reviews)</span>
            </div>
          </header>
          <p className="my-12 ml-1">{description}</p>
          <span className="font-semibold text-xl ml-1">${price}</span>
          <footer className="mt-4">
            <AddToCart product={product}></AddToCart>
          </footer>
        </div>
      </section>

      <section></section>
    </div>
  );
}
