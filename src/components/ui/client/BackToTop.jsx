import { PiArrowCircleUpBold } from 'react-icons/pi';
import { useEffect } from 'react';
export const BackToTopButton = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      document.documentElement.scrollTop;
    });
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button
      type="button"
      title="Back to top"
      onClick={backToTop}
      className="hover:text-[var(--aquamarine)]"
    >
      <PiArrowCircleUpBold></PiArrowCircleUpBold>
    </button>
  );
};
