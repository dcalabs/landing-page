import React from 'react';
import { Hexagon, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg">
                <Hexagon className="h-6 w-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">DCALabs</span>
            </div>
            
            <p className="text-zinc-400 mb-8 max-w-md font-light leading-relaxed">
              Professional blockchain development and AI integration services. We help businesses worldwide 
              build, deploy, and maintain cutting-edge blockchain solutions enhanced with artificial intelligence.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://twitter.com/dcalabs" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/dcalabs" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/dcalabs" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Smart Contract Development</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">DApp Development</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">DeFi Protocol Development</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Web3 Integration</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">AI Integration</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Blockchain Infrastructure</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Security Auditing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-zinc-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#portfolio" className="text-zinc-400 hover:text-white transition-colors text-sm">Portfolio</a></li>
              <li><a href="#contact" className="text-zinc-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-zinc-400 text-sm">
              © 2025 DCALabs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;