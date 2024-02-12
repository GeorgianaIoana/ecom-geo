import { uiContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext, useEffect } from 'react';

export const Pagination = () => {
  const { products, loading } = useProducts();
  const { pagination, setPagination } = useContext(uiContext);
  const { total, perPage, page } = pagination;

  useEffect(() => {
    setPagination({
      perPage,
      page,
      total: products.length,
    });
  }, [perPage, page, setPagination, products]);

  if (loading) {
    return <></>;
  }

  const pageCount = Math.ceil(total / perPage);

  return (
    <ul className="flex gap-2 px-10 justify-end">
      {Array(pageCount)
        .fill(' ')
        .map((_, index) => {
          const pageIndex = index + 1;
          return (
            <li key={index}>
              <button
                type="button"
                title={`Page ${pageIndex}`}
                className={`border border-zinc-200 px-2 hover:bg-cyan-500 hover:text-white transition-colors ${
                  pageIndex === page ? 'bg-cyan-600 text-white' : ''
                } rounded-full text-sm`}
                onClick={() => {
                  setPagination({
                    ...pagination,
                    page: pageIndex,
                  });
                }}
              >
                {pageIndex}
              </button>
            </li>
          );
        })}
    </ul>
  );
};
