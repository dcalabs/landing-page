import { ArrowRight, Code, Database, Cpu, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-zinc-900/50 border border-zinc-800 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-zinc-400 text-sm font-medium tracking-wide">NEXT-GEN BLOCKCHAIN & AI SOLUTIONS</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
                BUILD
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  THE FUTURE
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light">
                Your trusted partner for blockchain development and AI integration. We deliver world-class smart contracts, DeFi protocols, and AI-powered Web3 solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-white text-black px-8 py-4 rounded-full hover:bg-zinc-100 transition-all duration-300 flex items-center space-x-3 text-lg font-bold cursor-pointer"
              >
                <span>Start Building</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center space-x-3 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 border border-zinc-700 rounded-full flex items-center justify-center group-hover:border-zinc-500 transition-colors">
                  <Play className="h-5 w-5 ml-1" />
                </div>
                <span className="text-lg font-medium">Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-zinc-500 text-sm uppercase tracking-wider">Blockchain Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-zinc-500 text-sm uppercase tracking-wider">AI Integrations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-zinc-500 text-sm uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main card */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">Active Protocols</h3>
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Code className="h-5 w-5 text-emerald-400" />
                        <span className="text-white text-sm">Smart Contracts</span>
                      </div>
                      <span className="text-emerald-400 text-sm font-mono">99.9%</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Database className="h-5 w-5 text-cyan-400" />
                        <span className="text-white text-sm">Infrastructure</span>
                      </div>
                      <span className="text-cyan-400 text-sm font-mono">100%</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-zinc-800/30 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <Cpu className="h-5 w-5 text-blue-400" />
                        <span className="text-white text-sm">AI Models</span>
                      </div>
                      <span className="text-blue-400 text-sm font-mono">98.7%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-400/10 rounded-2xl border border-emerald-400/20 flex items-center justify-center">
                <Code className="h-8 w-8 text-emerald-400" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-400/10 rounded-xl border border-cyan-400/20 flex items-center justify-center">
                <Database className="h-6 w-6 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-zinc-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;