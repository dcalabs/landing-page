import { useState } from 'react';
import { Menu, X, Hexagon, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg">
              <Hexagon className="h-6 w-6 text-black" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">DCALabs</span>
          </div>

          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#services" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Services</a>
              <a href="#about" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">About</a>
              <a href="#portfolio" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Portfolio</a>
              <a href="#contact" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Contact</a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-zinc-100 transition-all duration-200 flex items-center space-x-2 text-sm font-semibold cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-zinc-400 hover:text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-zinc-800/50">
          <div className="px-4 py-6 space-y-4">
            <a href="#services" className="block text-zinc-400 hover:text-white transition-colors text-sm font-medium">Services</a>
            <a href="#about" className="block text-zinc-400 hover:text-white transition-colors text-sm font-medium">About</a>
            <a href="#portfolio" className="block text-zinc-400 hover:text-white transition-colors text-sm font-medium">Portfolio</a>
            <a href="#contact" className="block text-zinc-400 hover:text-white transition-colors text-sm font-medium">Contact</a>
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false); // Close mobile menu after click
              }}
              className="w-full bg-white text-black px-6 py-2.5 rounded-full hover:bg-zinc-100 transition-all duration-200 flex items-center justify-center space-x-2 text-sm font-semibold cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;