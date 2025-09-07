import React from 'react';
import { Users, Award, Clock, Globe, TrendingUp, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      number: "10+",
      label: "Blockchain Projects",
      description: "Smart contracts, DeFi, and Web3 solutions"
    },
    {
      icon: <Users className="h-6 w-6" />,
      number: "5+",
      label: "AI Integrations",
      description: "AI-powered blockchain applications"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      number: "99.9%",
      label: "On-Time Delivery",
      description: "Project completion rate"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      number: "5+",
      label: "Countries",
      description: "Global client presence"
    }
  ];

  const values = [
    {
      title: "Blockchain Excellence",
      description: "We deliver high-quality blockchain solutions that meet international standards and best practices."
    },
    {
      title: "AI Innovation",
      description: "Cutting-edge AI integration to enhance blockchain applications with intelligent automation and analytics."
    },
    {
      title: "Timely Delivery",
      description: "We understand deadlines matter. Our agile development process ensures on-time project delivery."
    }
  ];

  return (
    <section id="about" className="py-32 bg-zinc-950/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2 mb-8">
                <span className="text-zinc-400 text-sm font-medium tracking-wide">ABOUT DCALABS</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
                BLOCKCHAIN
                <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  & AI EXPERTS
                </span>
              </h2>
              
              <p className="text-xl text-zinc-400 leading-relaxed font-light mb-8">
                DCALabs is a leading blockchain and AI development company. We help businesses worldwide build, deploy, and maintain cutting-edge blockchain solutions enhanced with artificial intelligence.
              </p>
            </div>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 group-hover:bg-cyan-400 transition-colors"></div>
                  <div>
                    <h3 className="text-white font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 rounded-full hover:bg-zinc-100 transition-all duration-300 text-lg font-bold cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700/50 transition-all duration-500 hover:transform hover:-translate-y-2 group"
                >
                  <div className="text-emerald-400 mb-4 group-hover:text-cyan-400 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-zinc-300 font-semibold mb-1 text-sm">
                    {stat.label}
                  </div>
                  <div className="text-zinc-500 text-xs leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
            Our <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Expert Team</span>
          </h3>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-12 font-light">
            Our experienced team of blockchain developers, AI engineers, and Web3 specialists 
            are ready to bring your vision to life with cutting-edge blockchain and AI technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-white font-bold mb-2">Blockchain Developers</h4>
              <p className="text-zinc-400 text-sm">Expert Solidity developers and DeFi protocol specialists</p>
            </div>
            
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-white font-bold mb-2">AI Engineers</h4>
              <p className="text-zinc-400 text-sm">Machine learning specialists and AI integration experts</p>
            </div>
            
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-700/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-white font-bold mb-2">Web3 Specialists</h4>
              <p className="text-zinc-400 text-sm">Full-stack developers specializing in Web3 and DApp development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;