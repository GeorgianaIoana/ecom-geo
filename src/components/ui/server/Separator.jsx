import { BackToTopButton } from '../client';

export const Separator = () => {
  const spanClass = 'border-t border-t-neutral-400 block w-full';

  return (
    <div className="flex items-center gap-2 text-3xl">
      <span className={spanClass}></span>

      <BackToTopButton></BackToTopButton>
      <span className={spanClass}></span>
    </div>
  );
};
