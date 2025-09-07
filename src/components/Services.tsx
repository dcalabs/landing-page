import React from 'react';
import { 
  Code2, 
  Database, 
  Shield, 
  Layers, 
  Cpu, 
  Network,
  ArrowUpRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Smart Contract Development",
      description: "Expert smart contract development services for DeFi, NFT, and enterprise blockchain solutions.",
      features: ["Solidity Development", "Contract Auditing", "Gas Optimization"],
      color: "emerald"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Auditing",
      description: "Comprehensive security audits and penetration testing for blockchain applications.",
      features: ["Code Review", "Vulnerability Assessment", "Security Reports"],
      color: "cyan"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "DeFi Protocol Development",
      description: "Custom DeFi protocols including DEX, lending platforms, and yield farming solutions.",
      features: ["DEX Development", "Lending Protocols", "Yield Strategies"],
      color: "blue"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Blockchain Infrastructure",
      description: "Full-stack blockchain infrastructure setup and maintenance services.",
      features: ["Node Setup", "Network Monitoring", "Infrastructure Management"],
      color: "purple"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "AI Integration",
      description: "Seamless AI integration with blockchain applications for enhanced functionality.",
      features: ["ML Models", "Predictive Analytics", "Automated Systems"],
      color: "pink"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Consulting & Strategy",
      description: "Strategic blockchain and AI consulting to help you navigate the Web3 landscape.",
      features: ["Technical Consulting", "Project Planning", "Team Training"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 text-emerald-400",
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400",
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400",
      pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30 text-pink-400",
      orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2 mb-8">
            <span className="text-zinc-400 text-sm font-medium tracking-wide">OUR EXPERTISE</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            TECHNICAL
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              CAPABILITIES
            </span>
          </h2>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            Professional blockchain development and AI integration services. We help you build, deploy, and maintain cutting-edge Web3 solutions powered by artificial intelligence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(service.color).split(' ')[0]} ${getColorClasses(service.color).split(' ')[1]} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700/50 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${getColorClasses(service.color)}`}>
                    {service.icon}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-zinc-600 group-hover:text-white group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zinc-400 mb-6 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-zinc-500 text-sm group-hover:text-zinc-400 transition-colors">
                      <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full mr-3 group-hover:bg-zinc-400 transition-colors"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Your Blockchain & AI Solution?</h3>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and how our expert team can deliver your blockchain and AI solution on time and within budget.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 rounded-full hover:bg-zinc-100 transition-all duration-300 text-lg font-bold cursor-pointer"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;