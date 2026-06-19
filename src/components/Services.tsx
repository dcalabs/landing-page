import { ArrowRight, Bot, Code2, DatabaseZap, GitBranch, LockKeyhole, PanelsTopLeft, TerminalSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Full-stack product development',
      description: 'Frontend, backend, API, admin, data model, deployment, and product polish for teams that need a complete build partner.',
      features: ['React / TypeScript apps', 'NestJS / GraphQL APIs', 'Dashboards and admin tools'],
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: 'Blockchain and DeFi engineering',
      description: 'Protocol-facing UX, smart contract integrations, transaction flows, indexers, and DeFi product modules.',
      features: ['DEX and liquidity flows', 'Wallet and web3 onboarding', 'Contract integration layer'],
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: 'AI product integration',
      description: 'Model-powered workflows that turn raw product, market, or user data into useful automation and analysis.',
      features: ['AI analytics features', 'Prompt and provider workflows', 'Data-to-insight interfaces'],
    },
    {
      icon: <LockKeyhole className="h-6 w-6" />,
      title: 'Security-minded delivery',
      description: 'We design for fewer mistakes: clear wallet states, safer transaction confirmation, code review, and launch hardening.',
      features: ['Threat-aware UX', 'Audit preparation', 'QA and regression checks'],
    },
    {
      icon: <DatabaseZap className="h-6 w-6" />,
      title: 'Infrastructure and integrations',
      description: 'RPCs, third-party APIs, analytics pipelines, fiat providers, notifications, and production observability.',
      features: ['API aggregation', 'Provider integrations', 'Monitoring handoff'],
    },
    {
      icon: <PanelsTopLeft className="h-6 w-6" />,
      title: 'Product design and technical strategy',
      description: 'Turn ambiguous ideas into screens, architecture, milestones, delivery scope, and investor/client-ready demos.',
      features: ['Discovery workshops', 'MVP scope planning', 'Technical documentation'],
    },
  ];

  return (
    <section id="services" className="tech-section relative overflow-hidden py-28">
      <div className="absolute inset-0 tech-grid opacity-45" />
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="section-kicker mb-5">
              <TerminalSquare className="h-4 w-4" />
              What we build
            </div>
            <h2 className="font-display text-4xl font-black leading-[0.95] text-white sm:text-5xl lg:text-6xl">
              Senior execution across product, Web3, and AI.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Hire DCALabs as a focused outsourcing squad: product thinking, engineering discipline, and launch support in one team. We are strongest when the product is technically complex and needs to move fast.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="motion-card border border-slate-800 bg-[#070b10]/95 p-6" style={{ animationDelay: `${index * 70}ms` }}>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                  {service.icon}
                </div>
                <span className="font-mono text-xs font-black text-slate-600">0{index + 1}</span>
              </div>
              <h3 className="font-display text-xl font-black leading-tight text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{service.description}</p>
              <div className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                    <span className="h-1.5 w-1.5 bg-cyan-200" />
                    {feature}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border border-cyan-300/20 bg-cyan-300/[0.035] p-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-black text-white">Need a squad for an existing product?</h3>
            <p className="mt-2 max-w-3xl text-slate-400">
              We can join midstream, read your codebase, stabilize delivery, and ship scoped milestones without rebuilding everything from scratch.
            </p>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex shrink-0 cursor-pointer items-center gap-2 bg-white px-6 py-3 text-sm font-black text-black transition hover:bg-cyan-200"
          >
            Get a quote
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
