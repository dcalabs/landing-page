import { useState } from 'react';
import { 
  Search, 
  ArrowLeft, 
  ArrowRight, 
  Terminal, 
  SlidersHorizontal, 
  Braces, 
  ExternalLink,
  Cpu,
  Gamepad2,
  TrendingUp,
  Globe2,
  Wallet
} from 'lucide-react';
import { projects } from '../data/projects';
import Header from './Header';
import Footer from './Footer';

const PortfolioList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { id: 'All', label: 'All Projects', icon: Cpu },
    { id: 'DeFi & DEX', label: 'DeFi & DEX', icon: Wallet },
    { id: 'AI & Analytics', label: 'AI & Analytics', icon: TrendingUp },
    { id: 'GameFi & Mini Apps', label: 'GameFi & Mini Apps', icon: Gamepad2 },
    { id: 'Websites & Portals', label: 'Websites & Portals', icon: Globe2 }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeFilter === 'All') return matchesSearch;
    if (activeFilter === 'DeFi & DEX') {
      return matchesSearch && ['dex-trading-terminal', '1tap-finance', 'neurovault', 'lumnia-dex'].includes(project.slug);
    }
    if (activeFilter === 'AI & Analytics') {
      return matchesSearch && ['neurovault', 'wikiagent-ai'].includes(project.slug);
    }
    if (activeFilter === 'GameFi & Mini Apps') {
      return matchesSearch && ['telegram-gamefi-app', 'web3-gaming-hub', 'meowtopia'].includes(project.slug);
    }
    if (activeFilter === 'Websites & Portals') {
      return matchesSearch && ['kulturhotel-kaiserhof'].includes(project.slug);
    }
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050607] text-white">
      <Header />

      <main className="relative pt-32 pb-24">
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.08),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(103,232,249,0.06),transparent_30%)] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Title */}
          <div className="mb-12">
            <a href="/" className="mb-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-slate-400 transition hover:text-cyan-200">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </a>

            <div className="section-kicker mb-4">
              <Terminal className="h-4 w-4" />
              Engineering Catalog
            </div>
            
            <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl">
              Execution Logs. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Deployed DApps & Systems.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
              Explore deep case studies showing core modules, architectural layers, technical stack, deliverables, and production outcomes. No placeholders, only real deployed codebases.
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="mb-12 border border-slate-900 bg-[#070b10]/90 p-6 shadow-xl backdrop-blur-xl flex flex-col gap-6">
            {/* Search input */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search by project name, stack (e.g. Solidity, NestJS, React) or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-slate-800 bg-slate-950/80 py-3.5 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-slate-950"
              />
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap items-center gap-2 border-t border-slate-900/60 pt-4">
              <span className="mr-2 text-slate-500 text-xs font-mono uppercase tracking-[0.18em] flex items-center gap-1.5">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Filter:
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeFilter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveFilter(cat.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.1em] border transition-all duration-200 ${
                        isActive
                          ? 'border-cyan-400 bg-cyan-400/10 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                          : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Project Count Indicator */}
          <div className="mb-6 flex justify-between items-center text-xs font-mono uppercase tracking-[0.18em] text-slate-500">
            <div>Result query status: success</div>
            <div>{filteredProjects.length} Deployed {filteredProjects.length === 1 ? 'dapp' : 'dapps'} found</div>
          </div>

          {/* Grid Layout */}
          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <article
                  key={project.slug}
                  className="group motion-card flex flex-col border border-slate-900 bg-[#080d12]/80 shadow-2xl transition-all duration-300"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* Image with category */}
                  <a href={`/portfolio/${project.slug}`} className="relative block h-52 overflow-hidden bg-black">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-transparent to-transparent" />
                    
                    {/* Category tag */}
                    <div className="absolute left-4 top-4 border border-cyan-400/30 bg-black/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-200 backdrop-blur">
                      {project.category}
                    </div>
                  </a>

                  {/* Contents */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 font-mono text-[10px] text-slate-500">
                      CASE_LOG_0{index + 1}
                    </div>

                    <h2 className="font-display text-2xl font-black text-white leading-tight group-hover:text-cyan-200 transition-colors">
                      <a href={`/portfolio/${project.slug}`}>
                        {project.shortTitle}
                      </a>
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-400 line-clamp-3">
                      {project.cardSummary}
                    </p>

                    {/* Stats details directly on the card */}
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      {project.cardFacts.slice(0, 2).map((fact) => (
                        <div key={fact.label} className="border border-slate-900 bg-slate-950/60 p-2 text-left">
                          <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-slate-500">{fact.label}</div>
                          <div className="mt-1 text-xs font-extrabold text-slate-200 truncate">{fact.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5 min-h-[48px] content-start">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="border border-slate-800 bg-slate-950/50 px-2 py-0.5 font-mono text-[9px] text-slate-400 uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer buttons */}
                    <div className="mt-auto flex items-center justify-between border-t border-slate-900 pt-5">
                      <a 
                        href={`/portfolio/${project.slug}`} 
                        className="inline-flex items-center gap-2 bg-cyan-400 px-3.5 py-2 font-mono text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-white"
                      >
                        Read logs
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </a>
                      
                      {project.links[0] && (
                        <a 
                          href={project.links[0].href} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-slate-500 hover:text-cyan-200 transition"
                          title="Open live website"
                        >
                          <ExternalLink className="h-4.5 w-4.5" />
                        </a>
                      )}
                    </div>

                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="border border-slate-900 bg-[#080d12]/60 p-16 text-center shadow-2xl backdrop-blur-md">
              <Braces className="mx-auto h-12 w-12 text-slate-600 mb-4 animate-pulse" />
              <h3 className="font-display text-xl font-bold text-slate-300">No logs found</h3>
              <p className="mt-2 text-slate-500 max-w-md mx-auto text-sm leading-6">
                Your search query did not match any projects. Try searching for other stack keywords like "Solidity", "NestJS", "Rust", or "funC".
              </p>
              <button
                onClick={() => { setSearchTerm(''); setActiveFilter('All'); }}
                className="mt-6 inline-flex items-center gap-2 border border-slate-700 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-slate-300 hover:border-cyan-400 hover:text-cyan-200 transition"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioList;
