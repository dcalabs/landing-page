import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050607]/82 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <img src="/logo-mark.svg" alt="DCALabs logo" className="h-10 w-10 border border-cyan-300/30 bg-[#050607]" />
            <span className="font-display text-2xl font-black text-white tracking-tight">DCALabs</span>
          </a>

          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="/#services" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">Services</a>
              <a href="/#about" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">Team</a>
              <a href="/#portfolio" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">Case Studies</a>
              <a href="/#contact" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">Contact</a>
              <button 
                onClick={() => {
                  window.location.href = '/#contact';
                }}
                className="flex cursor-pointer items-center space-x-2 bg-white px-6 py-2.5 text-sm font-bold text-black transition-all duration-200 hover:bg-cyan-200"
              >
                <span>Book a call</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </nav>

          <button
            onClick={toggleMenu}
            className="text-zinc-400 hover:text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-b border-white/10 bg-[#050607]/95 backdrop-blur-xl md:hidden">
          <div className="px-4 py-6 space-y-4">
            <a href="/#services" className="block text-sm font-medium text-zinc-400 transition-colors hover:text-white">Services</a>
            <a href="/#about" className="block text-sm font-medium text-zinc-400 transition-colors hover:text-white">Team</a>
            <a href="/#portfolio" className="block text-sm font-medium text-zinc-400 transition-colors hover:text-white">Case Studies</a>
            <a href="/#contact" className="block text-sm font-medium text-zinc-400 transition-colors hover:text-white">Contact</a>
            <button 
              onClick={() => {
                window.location.href = '/#contact';
                setIsMenuOpen(false); // Close mobile menu after click
              }}
              className="flex w-full cursor-pointer items-center justify-center space-x-2 bg-white px-6 py-2.5 text-sm font-bold text-black transition-all duration-200 hover:bg-cyan-200"
            >
              <span>Book a call</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
