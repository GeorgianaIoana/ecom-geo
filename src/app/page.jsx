import { CartControls } from '@/components/cart/client';
import {
  GridControls,
  Pagination,
  ProductGrid,
} from '@/components/catalog/client';

export default function Home() {
  return (
    <div className="container px-4 mx-auto">
      <header className="flex justify-end mb-10">
        <GridControls></GridControls>
        <CartControls></CartControls>
      </header>

      <section className="mb-20">
        <ProductGrid></ProductGrid>
        <Pagination></Pagination>
      </section>

      <section></section>
    </div>
  );
}
