import Link from 'next/link';
import { OffCanvasMenu } from '../client';
import { TiAdjustBrightness } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaWhatsappSquare } from 'react-icons/fa';

export const Header = () => {
  return (
    <div className="bg-neutral-900 text-white flex lg:flex-col justify-between items-center h-full p-4 relative z-20">
      {/* forced example */}
      <Link
        href="/"
        className="relative z-10 lg:hover:text-[var(--aquamarine)]"
      >
        <TiAdjustBrightness size={32}></TiAdjustBrightness>
      </Link>

      <OffCanvasMenu></OffCanvasMenu>

      <ul className="hidden lg:flex z-10 flex-col gap-2">
        <li>
          <Link
            className="lg:hover:text-[var(--aquamarine)]"
            href="https://www.instagram.com/"
            title="Follow us on Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialInstagram size={32}></TiSocialInstagram>
          </Link>
        </li>

        <li>
          <Link
            className="lg:hover:text-[var(--aquamarine)]"
            href="https://www.facebook.com/"
            title="Watch us on Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareFacebook size={32}></FaSquareFacebook>
          </Link>
        </li>

        <li>
          <Link
            className="lg:hover:text-[var(--aquamarine)]"
            href="https://web.whatsapp.com/"
            title="Write to us"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsappSquare size={32}></FaWhatsappSquare>
          </Link>
        </li>
      </ul>
    </div>
  );
};
