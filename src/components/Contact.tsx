import React, { useState } from 'react';
import { Mail, MessageSquare, Send, ArrowRight, Calendar, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format data for Telegram
    const message = `
🚀 *New Project Inquiry from DCALabs Website*

👤 *Contact Information:*
• Name: ${formData.name}
• Email: ${formData.email}
• Company: ${formData.company || 'Not provided'}

📋 *Project Details:*
• Project Type: ${formData.project}
• Budget: ${formData.budget || 'Not specified'}
• Message: ${formData.message}

⏰ *Submitted:* ${new Date().toLocaleString()}
    `;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open Telegram with pre-filled message
    const telegramUrl = `https://t.me/dcalabs?text=${encodedMessage}`;
    window.open(telegramUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      project: '',
      budget: '',
      message: ''
    });
    
    // Show success message with better UX
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981, #06b6d4);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        z-index: 10000;
        font-family: system-ui, -apple-system, sans-serif;
        font-weight: 600;
        animation: slideIn 0.3s ease-out;
      ">
        ✅ Form submitted! Opening Telegram...
      </div>
      <style>
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      </style>
    `;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Telegram",
      description: "Get a free project quote",
      contact: "@dcalabs",
      action: "Start Chat",
      link: "https://t.me/dcalabs"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Quick project inquiries",
      contact: "+84 369439969",
      action: "Start Chat",
      link: "https://wa.me/84369439969"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-zinc-950/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2 mb-8">
            <Zap className="h-4 w-4 text-emerald-400" />
            <span className="text-zinc-400 text-sm font-medium tracking-wide">LET'S BUILD TOGETHER</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            BUILD YOUR
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              BLOCKCHAIN & AI SOLUTION
            </span>
          </h2>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to build your blockchain and AI solution? Get a free consultation and quote from our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Choose the best way to reach us. We're here to help you build your blockchain and AI development needs.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  onClick={() => window.open(method.link, '_blank')}
                  className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-700/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-emerald-400 group-hover:text-cyan-400 transition-colors">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1 group-hover:text-emerald-400 transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-zinc-400 text-sm mb-2">{method.description}</p>
                      <p className="text-zinc-300 text-sm font-medium mb-3">{method.contact}</p>
                      <span className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors">
                        {method.action} →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-4">Why Choose DCALabs?</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-sm">Response Time</span>
                  <span className="text-emerald-400 text-sm font-semibold">{"< 2 hours"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-sm">On-Time Delivery</span>
                  <span className="text-emerald-400 text-sm font-semibold">99.9%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-sm">Client Satisfaction</span>
                  <span className="text-emerald-400 text-sm font-semibold">4.9/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-sm">Cost Savings</span>
                  <span className="text-emerald-400 text-sm font-semibold">40-60%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Get Your Free Project Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-zinc-300 text-sm font-semibold mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-zinc-800/50 border border-zinc-700 text-white rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors placeholder-zinc-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-zinc-300 text-sm font-semibold mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-zinc-800/50 border border-zinc-700 text-white rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors placeholder-zinc-500"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-zinc-300 text-sm font-semibold mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-zinc-800/50 border border-zinc-700 text-white rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors placeholder-zinc-500"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-zinc-300 text-sm font-semibold mb-3">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-zinc-800/50 border border-zinc-700 text-white rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="10k-50k">$10K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-500k">$100K - $500K</option>
                      <option value="500k+">$500K+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-zinc-300 text-sm font-semibold mb-3">
                    Project Type *
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full bg-zinc-800/50 border border-zinc-700 text-white rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="smart-contract">Smart Contract Development</option>
                    <option value="ai-defi">AI-Powered DeFi</option>
                    <option value="ai-nft">AI NFT Platform</option>
                    <option value="blockchain">Blockchain Infrastructure</option>
                    <option value="ai-integration">AI Integration</option>
                    <option value="consulting">Blockchain & AI Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-zinc-300 text-sm font-semibold mb-3">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-zinc-800/50 border border-zinc-700 text-white rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500 transition-colors resize-none placeholder-zinc-500"
                    placeholder="Tell us about your project goals, technical requirements, timeline, and any specific challenges you're facing..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black px-8 py-5 rounded-2xl hover:bg-zinc-100 transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-bold group cursor-pointer"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Your Blockchain & AI Solution?</h3>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Join 50+ satisfied clients who have successfully built their blockchain and AI solutions with DCALabs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => window.open('https://t.me/dcalabs', '_blank')}
                className="bg-white text-black px-8 py-4 rounded-full hover:bg-zinc-100 transition-all duration-300 text-lg font-bold cursor-pointer"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-emerald-400 hover:text-emerald-300 transition-colors text-lg font-semibold cursor-pointer"
              >
                View Our Work →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;