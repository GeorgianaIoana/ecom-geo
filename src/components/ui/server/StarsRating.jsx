import { MdOutlineStar } from 'react-icons/md';
import { MdOutlineStarBorder } from 'react-icons/md';

export const StarsRating = ({ rating }) => {
  const starsNumber = 5;
  const fullStars = Math.floor(rating.rate);
  const emptyStars = starsNumber - fullStars;

  return (
    <>
      <div className="flex justify-center">
        {[...Array(fullStars)].map((_, index) => (
          <MdOutlineStar key={index} />
        ))}

        {[...Array(emptyStars)].map((_, index) => (
          <MdOutlineStarBorder key={`empty-star-${index}`} />
        ))}
      </div>
    </>
  );
};
