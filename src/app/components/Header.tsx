import Link from 'next/link';
import { useState } from 'react';
import { X , TwitterIcon, InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50 transition-all">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        
        {/* Logo */}
        <Link href="/" aria-label="Navigate to home page" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Fire Divine Games Logo" 
            className="h-20 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-5">
          {['Apps', 'About', 'Careers', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="cursor-pointer">
              <button
                type="button"
                className="
                  text-lg font-bold relative
                  after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                  after:w-full after:h-[2px]
                  after:bg-black after:scale-x-0
                  after:origin-left hover:after:scale-x-100
                  after:transition-transform after:duration-300
                "
              >
                {item}
              </button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)} aria-label="Open Menu">
            <p className='text-lg font-bold relative'>Menu</p>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay with jumping animation */}
      <div
        className={`
          fixed inset-0 bg-white z-50 flex flex-col justify-between p-6 
          transform transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          ${menuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        {/* Top Section */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <Image 
              src="/logo.png" 
              alt="Fire Divine Games Logo" 
              className="h-20 w-auto object-contain" 
            />
          </Link>
          <button onClick={() => setMenuOpen(false)} aria-label="Close Menu" className='flex flex-row'>
            <span className="text-lg font-bold mr-2">Close</span>
            <X className='-ml-1' size={25} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-6 text-3xl font-bold text-black">
          {['Apps', 'About', 'Careers', 'Contact', 'Shop'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Social Links */}
    <div className="flex flex-col items-center gap-4 mt-10 text-black text-sm">

  <div className="flex gap-6 text-lg">
    <Link href="#" aria-label="Instagram" className="flex items-center gap-2">
      <InstagramIcon size={25} />
      Instagram
    </Link>
    <Link href="#" aria-label="Facebook" className="flex items-center gap-2">
      <FacebookIcon size={25} />
      Facebook
    </Link>
  </div>

  <div className="flex gap-6 text-lg">
   
    <Link href="#" aria-label="LinkedIn" className="flex items-center gap-2">
      <LinkedinIcon size={25} />
      LinkedIn
    </Link>
     <Link href="#" aria-label="X" className="flex items-center gap-2">
      <TwitterIcon size={25} />
      X
    </Link>
  </div>

  <div className="flex gap-6 text-lg">
    <Link href="#" aria-label="X" className="flex items-center gap-2">
      <TwitterIcon size={25} />
      X
    </Link>
    <Link href="#" aria-label="YouTube" className="flex items-center gap-2">
      <YoutubeIcon size={25} />
      YouTube
    </Link>
  </div>

  {/* Bottom Footer */}
  <div className="mt-6 text-xs flex gap-4">
    <Link href="#">Terms of service</Link>
    <Link href="#">Privacy policy</Link>
  </div>
</div>

      </div>
    </nav>
  );
};

export default Header;
