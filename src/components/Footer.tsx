import { Github, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050607]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center space-x-2">
              <img src="/logo-mark.svg" alt="DCALabs logo" className="h-10 w-10 border border-cyan-300/30 bg-[#050607]" />
              <span className="font-display text-2xl font-black tracking-tight text-white">DCALabs</span>
            </div>
            <p className="max-w-lg text-sm leading-7 text-zinc-400">
              Outsourced product engineering for blockchain, AI, DeFi, wallet, game, and analytics products. Senior delivery without the hiring drag.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://t.me/OxAndreJoe" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center border border-white/10 text-zinc-400 transition hover:border-cyan-300/40 hover:text-white" aria-label="Telegram">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="https://github.com/dcalabs" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center border border-white/10 text-zinc-400 transition hover:border-cyan-300/40 hover:text-white" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">Services</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="/#services" className="transition hover:text-white">Full-stack product build</a></li>
              <li><a href="/#services" className="transition hover:text-white">Blockchain and DeFi</a></li>
              <li><a href="/#services" className="transition hover:text-white">AI integration</a></li>
              <li><a href="/#services" className="transition hover:text-white">Infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">Company</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="/#about" className="transition hover:text-white">Team</a></li>
              <li><a href="/portfolio" className="transition hover:text-white">Case studies</a></li>
              <li><a href="/#contact" className="transition hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 DCALabs. All rights reserved.</p>
          <p>Built for founders who need products shipped cleanly.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
