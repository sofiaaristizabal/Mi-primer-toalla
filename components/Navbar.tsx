
import React from 'react';
import { NavLink } from '../types';

interface NavbarProps {
  links: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-300 to-purple-300 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-['Fredoka_One']">
              Guía Amiga 🌸
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-400 focus:ring-white transition duration-150 ease-in-out"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-pink-100 hover:text-white hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)} 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-700 focus:ring-white transition duration-150 ease-in-out"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
