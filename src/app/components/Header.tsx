// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50 transition-all">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        
        {/* Logo */}
        <Link href="/" aria-label="Navigate to home page" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Fire Divine Games Logo" 
            className="h-25 w-auto object-contain" 
          />
        </Link>

        {/* Nav Links */}
        <div className="flex gap-5">

            <Link href="/apps" title="Apps" className="cursor-pointer">
              <button
                type="button"
                className="
                  box-border
                  border-0 border-solid border-[#101014]
                  text-[calc(18rem/16)] font-bold
                  inline-flex items-center justify-start gap-2
                  whitespace-nowrap
                  bg-transparent p-0
                  rounded-full
                  transition-[padding] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  font-[var(--font-geist-sans)] relative
                "
              >
                <div
                  className="
                    relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px]
                    after:w-full after:h-[1px]
                    after:bg-black after:scale-x-0
                    after:origin-left
                    after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    hover:after:scale-x-100
                  "
                >
                  Apps
                </div>
              </button>
            </Link>

            <Link href="/about" title="Apps" className="cursor-pointer">
              <button
                type="button"
                className="
                  box-border
                  border-0 border-solid border-[#101014]
                  text-[calc(18rem/16)] font-bold
                  inline-flex items-center justify-start gap-2
                  whitespace-nowrap
                  bg-transparent p-0
                  rounded-full
                  transition-[padding] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  font-[var(--font-geist-sans)] relative
                "
              >
                <div
                  className="
                    relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px]
                    after:w-full after:h-[1px]
                    after:bg-black after:scale-x-0
                    after:origin-left
                    after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    hover:after:scale-x-100
                  "
                >
                  About
                </div>
              </button>
            </Link>



            <Link href="/careers" title="Apps" className="cursor-pointer">
              <button
                type="button"
                className="
                  box-border
                  border-0 border-solid border-[#101014]
                  text-[calc(18rem/16)] font-bold
                  inline-flex items-center justify-start gap-2
                  whitespace-nowrap
                  bg-transparent p-0
                  rounded-full
                  transition-[padding] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  font-[var(--font-geist-sans)] relative
                "
              >
                <div
                  className="
                    relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px]
                    after:w-full after:h-[1px]
                    after:bg-black after:scale-x-0
                    after:origin-left
                    after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    hover:after:scale-x-100
                  "
                >
                  Careers
                </div>
              </button>
            </Link>


            <Link href="/contacts" title="Apps" className="cursor-pointer">
              <button
                type="button"
                className="
                  box-border
                  border-0 border-solid border-[#101014]
                  text-[calc(18rem/16)] font-bold
                  inline-flex items-center justify-start gap-2
                  whitespace-nowrap
                  bg-transparent p-0
                  rounded-full
                  transition-[padding] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  font-[var(--font-geist-sans)] relative
                "
              >
                <div
                  className="
                    relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px]
                    after:w-full after:h-[1px]
                    after:bg-black after:scale-x-0
                    after:origin-left
                    after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    hover:after:scale-x-100
                  "
                >
                  Contact
                </div>
              </button>
            </Link>

        </div>
      </div>
    </nav>
  );
};

export default Header;
