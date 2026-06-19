import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  Braces,
  CheckCircle2,
  CircuitBoard,
  Database,
  ExternalLink,
  GitBranch,
  Layers3,
  RadioTower,
  ShieldCheck,
  Target,
  Terminal,
  Workflow,
} from 'lucide-react';
import type { ReactNode } from 'react';
import type { Project } from '../data/projects';
import Header from './Header';
import Footer from './Footer';

const ProjectDetail = ({ project }: { project: Project }) => {
  return (
    <div className="min-h-screen bg-[#050607] text-white">
      <Header />
      <main>
        <section className="relative overflow-hidden pb-20 pt-32">
          <div className="absolute inset-0 tech-grid opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_16%,rgba(34,211,238,0.16),transparent_30%),linear-gradient(180deg,rgba(5,6,7,0.1),#050607_86%)]" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <a href="/#portfolio" className="mb-10 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-slate-400 transition hover:text-cyan-200">
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </a>

            <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-end">
              <div>
                <div className="section-kicker mb-5">
                  <Terminal className="h-4 w-4" />
                  Case study / {project.slug}
                </div>
                <h1 className="font-display text-5xl font-black leading-[0.9] tracking-tight text-white sm:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{project.summary}</p>
              </div>

              <div className="motion-card border border-slate-800 bg-[#080d12]/85 p-4">
                <div className="relative overflow-hidden border border-slate-800 bg-black">
                  <img src={project.image} alt={project.title} className="h-[360px] w-full object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />
                  <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="border border-cyan-300/20 bg-black/65 p-3 backdrop-blur">
                        <div className="font-display text-2xl font-black text-white">{metric.value}</div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-200">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-y border-slate-900 bg-[#070b10] py-10">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
            <Spec label="Client" value={project.client} />
            <Spec label="Industry" value={project.industry} />
            <Spec label="Engagement" value={project.engagement} />
            <Spec label="Timeline" value={project.timeline} />
          </div>
        </section>

        <section className="tech-section py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <Narrative icon={<Target className="h-5 w-5" />} title="Client problem" body={project.problem} />
              <Narrative icon={<Workflow className="h-5 w-5" />} title="Our solution" body={project.solution} />
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <Panel title="DCALabs role" icon={<ShieldCheck className="h-5 w-5" />}>
                <ul className="space-y-4">
                  {project.role.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Panel>

              <Panel title="Core modules" icon={<Boxes className="h-5 w-5" />}>
                <div className="grid gap-3 md:grid-cols-2">
                  {project.modules.map((module, index) => (
                    <div key={module.name} className="border border-slate-800 bg-slate-950/55 p-4">
                      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200">MOD_{String(index + 1).padStart(2, '0')}</div>
                      <h3 className="font-display text-lg font-black text-white">{module.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{module.detail}</p>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#050607] py-24">
          <div className="absolute inset-0 tech-grid opacity-50" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <div className="section-kicker mb-4">
                  <CircuitBoard className="h-4 w-4" />
                  Architecture
                </div>
                <h2 className="font-display text-4xl font-black leading-none text-white sm:text-5xl">System breakdown</h2>
              </div>
              <div className="hidden font-mono text-xs uppercase tracking-[0.22em] text-slate-600 md:block">Readable for founders. Useful for engineers.</div>
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              {project.architecture.map((layer, index) => (
                <div key={layer.layer} className="motion-card relative border border-slate-800 bg-[#080d12]/90 p-5" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute -right-6 top-10 hidden h-px w-12 bg-cyan-300/30 lg:block" />
                  <div className="mb-5 flex h-11 w-11 items-center justify-center border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                    {[<Layers3 className="h-5 w-5" />, <Database className="h-5 w-5" />, <GitBranch className="h-5 w-5" />, <RadioTower className="h-5 w-5" />][index] ?? <Braces className="h-5 w-5" />}
                  </div>
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Layer {index + 1}</div>
                  <h3 className="font-display text-xl font-black text-white">{layer.layer}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{layer.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tech-section py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <Panel title="Deliverables" icon={<CheckCircle2 className="h-5 w-5" />}>
              <BulletList items={project.deliverables} />
            </Panel>
            <Panel title="Technical stack" icon={<Braces className="h-5 w-5" />}>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="border border-slate-800 bg-slate-950 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </Panel>
            <Panel title="Outcomes" icon={<Target className="h-5 w-5" />}>
              <BulletList items={project.outcomes} />
            </Panel>
          </div>
        </section>

        <section className="border-t border-slate-900 bg-[#070b10] py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-200">External links</div>
              <h2 className="mt-2 font-display text-3xl font-black text-white">Inspect the live product.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-cyan-200">
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
              <a href="/#contact" className="inline-flex items-center gap-2 border border-slate-700 px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-slate-200 transition hover:border-cyan-200 hover:text-cyan-200">
                Build similar
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const Spec = ({ label, value }: { label: string; value: string }) => (
  <div className="border border-slate-800 bg-slate-950/70 p-4">
    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">{label}</div>
    <div className="mt-2 text-sm font-semibold leading-6 text-slate-200">{value}</div>
  </div>
);

const Narrative = ({ icon, title, body }: { icon: ReactNode; title: string; body: string }) => (
  <div className="motion-card border border-slate-800 bg-[#080d12]/85 p-6">
    <div className="mb-4 flex items-center gap-3 text-cyan-200">
      {icon}
      <h2 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-slate-400">{title}</h2>
    </div>
    <p className="text-base leading-8 text-slate-300">{body}</p>
  </div>
);

const Panel = ({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) => (
  <div className="motion-card border border-slate-800 bg-[#080d12]/85 p-6">
    <div className="mb-5 flex items-center gap-3 text-cyan-200">
      {icon}
      <h2 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-slate-400">{title}</h2>
    </div>
    {children}
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4">
    {items.map((item) => (
      <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cyan-200" />
        {item}
      </li>
    ))}
  </ul>
);

export default ProjectDetail;
