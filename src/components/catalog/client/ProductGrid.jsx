import { useProducts } from '@/hooks';
import { ProductTile } from '.';
import { css } from '@emotion/css';
import { useContext, useEffect, useState } from 'react';
import { uiContext } from '@/contexts';

export const ProductGrid = () => {
  const { itemsPerRow, pagination } = useContext(uiContext);
  const { perPage, page } = pagination;
  const { products, loading, error } = useProducts();
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  useEffect(() => {
    const newPaginatedProducts = products
      .slice()
      .splice(perPage * (page - 1), perPage);

    setPaginatedProducts(newPaginatedProducts);
  }, [products, perPage, page]);

  const gridCssClass = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
    }
  `;

  if (loading) {
    return <div className="container mx-auto px-4">...loading</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 flex justify-center">
        <span>Sorry, we have an error</span>
      </div>
    );
  }

  return (
    <ul className={gridCssClass}>
      {paginatedProducts.map((product) => {
        const { id } = product;

        return (
          <li key={id}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};
