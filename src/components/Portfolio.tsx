import React from 'react';
import { ExternalLink, Github, ArrowUpRight, Zap, Shield, Layers } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Lumnia DEX Platform",
      description: "Next-generation DeFi platform built on Somnia blockchain featuring advanced v2/v3 AMMs, gamified NFT collections, lottery system, and LX Points rewards. Transforms DeFi with user-focused design and creative incentive systems.",
      tech: ["Solidity", "Somnia", "React", "Web3"],
      category: "DeFi",
      metrics: { amms: "v2/v3", users: "10K+", blockchain: "Somnia" },
      image: "/images/projects/lumnia-dex.jpg",
      featured: true
    },
    {
      title: "WikiAgent AI Analytics",
      description: "Ultimate AI-powered crypto analytics platform with GPT-4o, Grok 3, and DeepSeek integration. Comprehensive token analysis across 100+ blockchains with real-time data aggregation and intelligent narratives.",
      tech: ["AI/ML", "GPT-4o", "Grok 3", "DeepSeek"],
      category: "AI/Analytics",
      metrics: { blockchains: "10+", models: "4+", tokens: "Unlimited" },
      image: "/images/projects/wikiagent-ai.jpg"
    },
    {
      title: "Meowtopia Game",
      description: "First Mini Dapp game on LINE platform featuring cat rescue gameplay, house building mechanics, and zodiac merge elements. Combines blockchain technology with engaging mobile gaming experience.",
      tech: ["Blockchain", "LINE", "GameFi", "NFT"],
      category: "GameFi",
      metrics: { players: "10K+", features: "5+", platform: "Telegram" },
      image: "/images/projects/meowtopia.jpg"
    },
    {
      title: "EZ Wallet",
      description: "The easiest and most convenient crypto wallet designed for Web2 users. Features learn-and-earn, send with confirmation, limit-order DeFi, unified identity, and fiat integration through MoonPay/Transak.",
      tech: ["Web3", "DeFi", "NestJS", "GraphQL", "Solidity", "web3.js"],
      category: "Wallet",
      metrics: { features: "8+", chains: "Multi", users: "5K+" },
      image: "/images/projects/ezwallet.jpg"
    }
  ];

  const getCategoryIcon = (category: string) => {
    const icons = {
      "AI/DeFi": <Zap className="h-4 w-4" />,
      "AI/NFT": <Layers className="h-4 w-4" />,
      "AI/Security": <Shield className="h-4 w-4" />,
      "AI/Analytics": <Zap className="h-4 w-4" />,
      "DeFi": <Zap className="h-4 w-4" />,
      "GameFi": <Layers className="h-4 w-4" />,
      "Wallet": <Shield className="h-4 w-4" />,
      Blockchain: <Layers className="h-4 w-4" />
    };
    return icons[category as keyof typeof icons] || <Layers className="h-4 w-4" />;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/DeFi": "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "AI/NFT": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "AI/Security": "bg-red-500/20 text-red-400 border-red-500/30",
      "AI/Analytics": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      "DeFi": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "GameFi": "bg-pink-500/20 text-pink-400 border-pink-500/30",
      "Wallet": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      Blockchain: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
    };
    return colors[category as keyof typeof colors] || "bg-zinc-500/20 text-zinc-400 border-zinc-500/30";
  };

  return (
    <section id="portfolio" className="py-32 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2 mb-8">
            <span className="text-zinc-400 text-sm font-medium tracking-wide">OUR WORK</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            SUCCESSFUL
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            Explore our portfolio of successful blockchain and AI projects. From AI-powered DeFi protocols to intelligent NFT marketplaces, we deliver cutting-edge solutions that exceed expectations.
          </p>
        </div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project, index) => (
          <div key={index} className="mb-20">
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-zinc-700/50 transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-semibold ${getCategoryColor(project.category)}`}>
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex}>
                        <div className="text-2xl font-bold text-white mb-1">{value}</div>
                        <div className="text-zinc-500 text-xs uppercase tracking-wider">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-zinc-800/50 text-zinc-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <button 
                      onClick={() => window.open('https://www.lumnia.tech/', '_blank')}
                      className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold cursor-pointer"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                      <span>View Project</span>
                    </button>
                    
                    <button 
                      onClick={() => window.open('https://docs.lumnia.tech/', '_blank')}
                      className="flex items-center space-x-2 text-zinc-400 hover:text-zinc-300 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Documentation</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-zinc-700/50 transition-all duration-500 group hover:transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-semibold ${getCategoryColor(project.category)}`}>
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-bold text-white mb-1">{value}</div>
                      <div className="text-zinc-500 text-xs uppercase tracking-wider">{key}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-zinc-800/50 text-zinc-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="bg-zinc-800/50 text-zinc-400 px-2 py-1 rounded text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => {
                      if (project.title === "WikiAgent AI Analytics") {
                        window.open('https://www.wikiagent.ai/', '_blank');
                      } else if (project.title === "Meowtopia Game") {
                        window.open('https://meowtopia.fun/', '_blank');
                      } else if (project.title === "EZ Wallet") {
                        window.open('https://ezwallet.xyz/', '_blank');
                      } else {
                        // Default action for other projects
                      }
                    }}
                    className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium cursor-pointer"
                  >
                    <ArrowUpRight className="h-3 w-3" />
                    <span>Details</span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      if (project.title === "WikiAgent AI Analytics") {
                        window.open('https://www.wikiagent.ai/docs', '_blank');
                      } else if (project.title === "Meowtopia Game") {
                        window.open('https://meowtopia.fun/', '_blank');
                      } else if (project.title === "EZ Wallet") {
                        window.open('https://ezwallet.xyz/', '_blank');
                      } else {
                        // Default action for other projects
                      }
                    }}
                    className="flex items-center space-x-1 text-zinc-400 hover:text-zinc-300 transition-colors text-sm cursor-pointer"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>Visit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Your Blockchain & AI Solution?</h3>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Join our satisfied clients and let us help you build your next blockchain and AI solution. Get a free consultation today.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 rounded-full hover:bg-zinc-100 transition-all duration-300 text-lg font-bold cursor-pointer"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;