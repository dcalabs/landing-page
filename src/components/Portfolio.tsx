import React from 'react';
import { ExternalLink, Github, ArrowUpRight, Zap, Shield, Layers } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "AI-Powered DeFi Trading",
      description: "Advanced DeFi protocol with AI-driven trading algorithms, automated yield optimization, and intelligent risk management for a fintech startup.",
      tech: ["Solidity", "Python", "TensorFlow", "React"],
      category: "AI/DeFi",
      metrics: { tvl: "$50M+", accuracy: "94%", apy: "18%" },
      image: "https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      title: "Smart Contract Development",
      description: "Complete smart contract suite for a DeFi lending platform with automated liquidations and multi-collateral support.",
      tech: ["Solidity", "React", "Node.js", "Chainlink"],
      category: "Blockchain",
      metrics: { contracts: "15+", tvl: "$30M+", users: "8K+" },
      image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "AI NFT Generator",
      description: "Blockchain-based NFT marketplace with AI-powered content generation and automated royalty distribution.",
      tech: ["Solidity", "Python", "OpenAI", "IPFS"],
      category: "AI/NFT",
      metrics: { nfts: "50K+", volume: "$3M+", users: "15K+" },
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "DEX with AI Routing",
      description: "Decentralized exchange with AI-optimized routing, MEV protection, and intelligent liquidity management.",
      tech: ["Solidity", "Python", "ML", "Web3"],
      category: "AI/DeFi",
      metrics: { volume: "$80M+", savings: "20%", dexes: "15+" },
      image: "https://images.pexels.com/photos/7567517/pexels-photo-7567517.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Blockchain Supply Chain",
      description: "Enterprise blockchain solution with IoT integration and real-time tracking for supply chain management.",
      tech: ["Solidity", "React", "IoT", "Node.js"],
      category: "Blockchain",
      metrics: { shipments: "500K+", accuracy: "99.5%", savings: "25%" },
      image: "https://images.pexels.com/photos/7567525/pexels-photo-7567525.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "AI Security Audit",
      description: "AI-enhanced smart contract auditing system with automated vulnerability detection and risk assessment.",
      tech: ["Python", "ML", "Solidity", "Security"],
      category: "AI/Security",
      metrics: { audits: "80+", bugs: "300+", saved: "$5M+" },
      image: "https://images.pexels.com/photos/7567564/pexels-photo-7567564.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const getCategoryIcon = (category: string) => {
    const icons = {
      "AI/DeFi": <Zap className="h-4 w-4" />,
      "AI/NFT": <Layers className="h-4 w-4" />,
      "AI/Security": <Shield className="h-4 w-4" />,
      Blockchain: <Layers className="h-4 w-4" />
    };
    return icons[category as keyof typeof icons] || <Layers className="h-4 w-4" />;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/DeFi": "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "AI/NFT": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "AI/Security": "bg-red-500/20 text-red-400 border-red-500/30",
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
                    <button className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>View Project</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 text-zinc-400 hover:text-zinc-300 transition-colors">
                      <Github className="h-4 w-4" />
                      <span>Technical Details</span>
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
                  <button className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium">
                    <ArrowUpRight className="h-3 w-3" />
                    <span>Details</span>
                  </button>
                  
                  <button className="flex items-center space-x-1 text-zinc-400 hover:text-zinc-300 transition-colors text-sm">
                    <Github className="h-3 w-3" />
                    <span>Code</span>
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