import { useEffect, useState } from 'react';
import { baseUrl } from '..';

export const useSimilarProducts = (category, currentProductId) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/products/category/${category}`,
        );
        const products = await response.json();

        console.log('All products:', products);
        console.log(
          'Current product id:',
          currentProductId,
          'type: ',
          typeof currentProductId,
        );

        products.forEach((product) => {
          console.log('product id:', product.id, 'type:', typeof product.id);
        });

        const filteredProducts = products.filter(
          (product) => product.id.toString() !== currentProductId.toString(),
        );
        console.log('Filtered products:', filteredProducts);
        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('An error has occurred');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, currentProductId]);

  return { products, loading, error };
};
