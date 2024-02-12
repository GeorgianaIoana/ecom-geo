import { uiContext } from '@/contexts';
import { useContext } from 'react';
import { MdOutlineSubject } from 'react-icons/md';
import { FaSquare } from 'react-icons/fa';
import { PiSquaresFourFill } from 'react-icons/pi';

const buttonClasses =
  'flex justify-center items-center border-zinc-200 w-14 h-14 transition-colors hover:bg-cyan-600 hover:text-white';

export const GridControls = () => {
  const { itemsPerRow, setItemsPerRow } = useContext(uiContext);

  return (
    <ul className="border border-zinc-200 hidden lg:flex rounded-xl">
      <li>
        <button
          type="button"
          title="One per row"
          className={`text-xl rounded-s-xl ${buttonClasses} ${
            itemsPerRow === '1' ? 'bg-cyan-600 text-white' : ''
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
            itemsPerRow === '2' ? 'bg-cyan-600 text-white' : ''
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
          className={`text-2xl rounded-e-xl border-l ${buttonClasses} ${
            itemsPerRow === '4' ? 'bg-cyan-600 text-white' : ''
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
