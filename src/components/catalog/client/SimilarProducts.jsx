import { Spinner } from '@/components/ui/client';
import { useSimilarProducts } from '@/hooks';
import { ProductTile } from '.';

export const SimilarProducts = ({ category }) => {
  const { products, loading } = useSimilarProducts(category);

  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  if (products.lentgth === 0) {
    return <div>There are no similar products</div>;
  }

  return (
    <ul className="grid grid-cols-4 mb-10">
      {products.slice(0, 4).map((product) => {
        return (
          <li key={product.id}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};
