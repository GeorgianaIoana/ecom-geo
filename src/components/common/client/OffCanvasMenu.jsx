import Link from 'next/link';
import { useState } from 'react';
import { VscMenu } from 'react-icons/vsc';

export const OffCanvasMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        title="Menu"
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
        className="relative z-10 lg:hover:text-amber-400"
      >
        <VscMenu size={32}></VscMenu>
      </button>

      <nav
        className={`${
          open ? 'translate-y-full' : ''
        } bg-cyan-800 transition-transform transform-gpu text-white w-dvw h-dvh fixed left-0 -top-full z-0 lg:w-1/3 lg:pl-36`}
      >
        <ul className="flex flex-col justify-center items-center text-2xl font-medium h-full lg:items-start uppercase gap-8">
          <li>
            <Link href="/" title="Home" className="lg:hover:text-amber-400">
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              title="Contact"
              className="lg:hover:text-amber-400"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              title="About"
              className="lg:hover:text-amber-400"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
