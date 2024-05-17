import { AddToCart, CartControls } from '@/components/cart/client';
import { SimilarProducts } from '@/components/catalog/client';
import { BackToShop, StarsRating } from '@/components/ui/server';
import { baseUrl } from '@/index';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const getProduct = async (productId) => {
  return fetch(`${baseUrl}/products/${productId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Product not found');
      }
      return response.json();
    })
    .catch(() => {
      redirect('/not-found');
    });
};

export default async function ProductPage({ params }) {
  const productId = params.pid;
  const product = await getProduct(productId);
  if (!product) {
    redirect('/not-found');
  }

  const {
    image: imageUrl,
    price,
    description,
    title,
    rating,
    category,
  } = product;
  const { count } = rating;

  return (
    <div className="container px-4 mx-auto mb-32">
      <header className="flex justify-between">
        <BackToShop />
        <CartControls />
      </header>

      <section className="flex items-center mt-16 mb-20 border-b pb-16">
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
          />
        </div>

        <div className="w-2/5 text-neutral-900">
          <header className="ml-1">
            <h1 className="text-2xl uppercase font-semibold">{title}</h1>
            <div className="flex gap-4 items-center">
              <span className="text-amber-400 text-xl">
                <StarsRating rating={rating} />
              </span>
              <span>({count} reviews)</span>
            </div>
          </header>
          <p className="my-12 ml-1">{description}</p>
          <span className="font-semibold text-xl ml-1">${price}</span>
          <footer className="mt-4">
            <AddToCart product={product} />
          </footer>
        </div>
      </section>

      <section className="border-t pt-16">
        <h1 className="pl-16 font-medium text-xl text-cyan-600 mb-8 italic">
          Similar products
        </h1>
        <SimilarProducts category={category} currentProductId={productId} />
      </section>
    </div>
  );
}
