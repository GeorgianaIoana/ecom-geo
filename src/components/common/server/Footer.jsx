import { Separator } from '@/components/ui/server';
import { FooterPrimary, FooterSecondary } from '.';

export const Footer = () => {
  return (
    <>
      <section
        className="container px-4 lg:px-0 pt-24 pb-10"
        style={{ marginLeft: 20 }}
      >
        <FooterPrimary></FooterPrimary>
      </section>

      <Separator></Separator>

      <section className="container mx-auto px-4 lg:px-0 pt-8 pb-10 flex justify-center">
        <FooterSecondary></FooterSecondary>
      </section>
    </>
  );
};
