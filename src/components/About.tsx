import { Award, CheckCircle2, Clock3, Globe2, Layers3, MessageSquareText, Sparkles, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Layers3 className="h-5 w-5" />, value: '10+', label: 'Web3 products shipped' },
    { icon: <Sparkles className="h-5 w-5" />, value: '5+', label: 'AI integrations delivered' },
    { icon: <Globe2 className="h-5 w-5" />, value: '5+', label: 'Client countries' },
    { icon: <Clock3 className="h-5 w-5" />, value: '< 2h', label: 'Typical response time' },
  ];

  const operatingModel = [
    'We start with a product brief, architecture map, and delivery risks before estimating.',
    'You get a small senior squad instead of a large anonymous bench.',
    'Every sprint produces visible product progress, not just task updates.',
    'We document decisions so your internal team can own the product after handoff.',
  ];

  const roles = [
    { icon: <Users className="h-6 w-6" />, title: 'Product engineers', body: 'Full-stack developers who can move across UI, API, data, and integration work.' },
    { icon: <Award className="h-6 w-6" />, title: 'Web3 specialists', body: 'Smart contract, wallet, transaction, DeFi, and protocol integration experience.' },
    { icon: <MessageSquareText className="h-6 w-6" />, title: 'Technical partners', body: 'Clear communication, scope discipline, documentation, and launch support.' },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#050607] py-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
              How we work
            </div>
            <h2 className="text-4xl font-black leading-none tracking-tight text-white sm:text-6xl">
              A compact team for technically ambitious clients.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              DCALabs is built for founders, agencies, and product teams that need senior execution without months of hiring. We combine product judgment, engineering depth, and practical delivery habits.
            </p>

            <div className="mt-8 space-y-4">
              {operatingModel.map((item) => (
                <div key={item} className="flex gap-3 border border-white/10 bg-white/[0.035] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                  <p className="text-sm leading-6 text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="depth-card border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-md">
                <div className="mb-5 flex h-11 w-11 items-center justify-center border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white">{stat.value}</div>
                <div className="mt-2 text-sm leading-6 text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {roles.map((role) => (
            <article key={role.title} className="depth-card border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-cyan-200 text-black">
                {role.icon}
              </div>
              <h3 className="text-xl font-black text-white">{role.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{role.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
