import { PiArrowCircleUpBold } from 'react-icons/pi';
import { useEffect } from 'react';
import { GiLaurelCrown } from 'react-icons/gi';

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
      className="hover:text-amber-400"
    >
      <GiLaurelCrown></GiLaurelCrown>
    </button>
  );
};
