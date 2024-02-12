import Link from 'next/link';
import { OffCanvasMenu } from '../client';
import { GiElvenCastle } from 'react-icons/gi';
import { PiFacebookLogoThin } from 'react-icons/pi';
import { PiInstagramLogoDuotone } from 'react-icons/pi';
import { PiWhatsappLogoThin } from 'react-icons/pi';

export const Header = () => {
  return (
    <div className="bg-cyan-800 text-white flex lg:flex-col justify-between items-center h-full p-4 relative z-20">
      {/* forced example */}
      <Link href="/" className="relative z-10 lg:hover:text-amber-400">
        <GiElvenCastle size={32}></GiElvenCastle>
      </Link>

      <OffCanvasMenu></OffCanvasMenu>

      <ul className="hidden lg:flex z-10 flex-col gap-2">
        <li>
          <Link
            className="lg:hover:text-amber-400"
            href="https://www.instagram.com/"
            title="Follow us on Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiInstagramLogoDuotone size={32}></PiInstagramLogoDuotone>
          </Link>
        </li>

        <li>
          <Link
            className="lg:hover:text-amber-400"
            href="https://www.facebook.com/"
            title="Watch us on Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiFacebookLogoThin size={32}></PiFacebookLogoThin>
          </Link>
        </li>

        <li>
          <Link
            className="lg:hover:text-amber-400"
            href="https://web.whatsapp.com/"
            title="Write to us"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiWhatsappLogoThin size={32}></PiWhatsappLogoThin>
          </Link>
        </li>
      </ul>
    </div>
  );
};
