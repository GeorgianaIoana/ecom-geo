import { uiContext } from '@/contexts';
import { useContext } from 'react';
import { MdOutlineSubject } from 'react-icons/md';
import { FaSquare } from 'react-icons/fa';
import { PiSquaresFourFill } from 'react-icons/pi';

const buttonClasses =
  'flex justify-center items-center border-zinc-200 w-8 h-8 transition-colors hover:bg-neutral-900 hover:text-white';

export const GridControls = () => {
  const { itemsPerRow, setItemsPerRow } = useContext(uiContext);

  return (
    <ul className="border border-zinc-200 flex rounded-xl">
      <li>
        <button
          type="button"
          title="One per row"
          className={`text-xl ${buttonClasses} ${
            itemsPerRow === '1' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('1');
          }}
        >
          <MdOutlineSubject></MdOutlineSubject>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Two per row"
          className={`text-xs border-l ${buttonClasses} ${
            itemsPerRow === '2' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('2');
          }}
        >
          <FaSquare></FaSquare> <FaSquare></FaSquare>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Four per row"
          className={`text-2xl border-l ${buttonClasses} ${
            itemsPerRow === '4' ? 'bg-neutral-900 text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4');
          }}
        >
          <PiSquaresFourFill></PiSquaresFourFill>
        </button>
      </li>
    </ul>
  );
};
