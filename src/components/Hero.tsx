import { ArrowRight, Braces, Cpu, GitBranch, Play, RadioTower, TerminalSquare } from 'lucide-react';
import HeroScene from './HeroScene';

const Hero = () => {
  const pipeline = [
    ['01', 'Scope', 'requirements, risks, architecture'],
    ['02', 'Build', 'frontend, backend, contracts, AI'],
    ['03', 'Verify', 'QA, security passes, launch'],
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050607] pt-20">
      <HeroScene />
      <div className="absolute inset-0 tech-grid opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050607_0%,rgba(5,6,7,0.98)_42%,rgba(5,6,7,0.8)_72%,rgba(5,6,7,0.64)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="reveal-soft lg:col-span-6">
          <div className="section-kicker mb-6">
            <TerminalSquare className="h-4 w-4" />
            DCALabs / outsourced engineering systems
          </div>

          <h1 className="font-display max-w-4xl text-5xl font-black leading-[0.94] text-white sm:text-6xl lg:text-7xl">
            Technical product squad for Web3 and AI systems.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            We join as a focused freelancer-style team for architecture, UI engineering, APIs, smart contract integration, AI workflows, QA, deployment, and handoff.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex cursor-pointer items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-black text-black transition hover:bg-cyan-200"
            >
              Start technical brief
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex cursor-pointer items-center justify-center gap-3 border border-slate-700 bg-slate-950/80 px-6 py-4 text-sm font-bold text-slate-200 transition hover:border-cyan-200 hover:text-cyan-200"
            >
              <Play className="h-4 w-4 fill-current" />
              View systems shipped
            </button>
          </div>

          <div className="mt-9 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ['10+', 'products shipped'],
              ['5+', 'AI integrations'],
              ['<2h', 'response time'],
            ].map(([value, label]) => (
              <div key={label} className="motion-card border border-slate-800 bg-slate-950/80 p-4">
                <div className="font-display text-2xl font-black text-white">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="motion-card border border-cyan-300/20 bg-[#070b10]/95 p-5 shadow-2xl shadow-cyan-950/20">
            <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="font-mono text-xs uppercase text-cyan-200">build pipeline</div>
                <h2 className="mt-1 font-display text-2xl font-black text-white">Execution console</h2>
              </div>
              <Cpu className="h-6 w-6 text-cyan-200" />
            </div>

            <div className="space-y-3">
              {pipeline.map(([step, title, body]) => (
                <div key={step} className="grid grid-cols-[56px_1fr] border border-slate-800 bg-slate-950/70">
                  <div className="flex items-center justify-center border-r border-slate-800 font-mono text-xs font-black text-cyan-200">{step}</div>
                  <div className="p-4">
                    <div className="font-display text-base font-black text-white">{title}</div>
                    <div className="mt-1 text-sm text-slate-500">{body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                [<Braces className="h-4 w-4" />, 'typed APIs'],
                [<GitBranch className="h-4 w-4" />, 'clean handoff'],
                [<RadioTower className="h-4 w-4" />, 'live integrations'],
                [<Cpu className="h-4 w-4" />, 'AI workflows'],
              ].map(([icon, label]) => (
                <div key={String(label)} className="flex items-center gap-2 border border-slate-800 bg-slate-950/80 p-3 text-sm font-semibold text-slate-300">
                  <span className="text-cyan-200">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
