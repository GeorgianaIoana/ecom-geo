import { useEffect, useState } from 'react';
import { baseUrl } from '..';

export const useSimilarProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${baseUrl}/products/category/${category}`)
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        console.dir(error);
        setLoading(false);
        setError('An error has occured');
      });
  }, [category]);

  return { products, loading, error };
};
