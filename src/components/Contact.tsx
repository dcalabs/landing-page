import { useState } from 'react';
import type { ChangeEvent, FormEvent, ReactNode } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Send, ShieldCheck, Sparkles } from 'lucide-react';

const TELEGRAM_HANDLE = 'OxAndreJoe';
const TELEGRAM_URL = `https://t.me/${TELEGRAM_HANDLE}`;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = `
New project inquiry from DCALabs website

Contact
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}

Project
Type: ${formData.project}
Budget: ${formData.budget || 'Not specified'}
Message: ${formData.message}

Submitted: ${new Date().toLocaleString()}
    `;

    window.open(`${TELEGRAM_URL}?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', project: '', budget: '', message: '' });
    window.setTimeout(() => setSubmitted(false), 3500);
  };

  const contactMethods = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: 'Telegram',
      description: 'Fastest for project briefs and quick questions',
      contact: `@${TELEGRAM_HANDLE}`,
      link: TELEGRAM_URL,
    },
    {
      icon: <Send className="h-5 w-5" />,
      title: 'WhatsApp',
      description: 'Good for direct founder-to-founder discussion',
      contact: '+84 369 439 969',
      link: 'https://wa.me/84369439969',
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-[#08090b] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(45,212,191,0.13),transparent_30%),radial-gradient(circle_at_20%_85%,rgba(251,191,36,0.08),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-4 py-2">
            <Sparkles className="h-4 w-4 text-cyan-200" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">Start the build</span>
          </div>
          <h2 className="text-4xl font-black leading-none tracking-tight text-white sm:text-6xl">
            Tell us what you want to ship.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Share the product goal, current stage, timeline, and constraints. We will reply with a practical next step: discovery, estimate, technical review, or a focused delivery plan.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="space-y-5">
            {contactMethods.map((method) => (
              <button
                key={method.title}
                onClick={() => window.open(method.link, '_blank')}
                className="depth-card w-full cursor-pointer border border-white/10 bg-zinc-950/65 p-6 text-left backdrop-blur-md transition hover:border-cyan-300/35"
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-white">{method.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{method.description}</p>
                    <p className="mt-3 text-sm font-bold text-cyan-200">{method.contact}</p>
                  </div>
                </div>
              </button>
            ))}

            <div className="border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
              <div className="mb-5 flex items-center gap-2 text-cyan-200">
                <ShieldCheck className="h-5 w-5" />
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-400">Before we estimate</h3>
              </div>
              <div className="space-y-4">
                {['What problem the product solves', 'What is already designed or built', 'Required integrations and target chains', 'Deadline, budget range, and decision process'].map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="border border-white/10 bg-zinc-950/70 p-5 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-8">
            {submitted && (
              <div className="mb-6 border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-teal-100">
                Form submitted. Telegram is opening with your project brief.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full name" id="name" required>
                  <input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="form-field" />
                </Field>
                <Field label="Email" id="email" required>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" className="form-field" />
                </Field>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Company" id="company">
                  <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Company or project name" className="form-field" />
                </Field>
                <Field label="Budget" id="budget">
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="form-field">
                    <option value="">Select range</option>
                    <option value="$10K - $50K">$10K - $50K</option>
                    <option value="$50K - $100K">$50K - $100K</option>
                    <option value="$100K - $500K">$100K - $500K</option>
                    <option value="$500K+">$500K+</option>
                  </select>
                </Field>
              </div>

              <Field label="Project type" id="project" required>
                <select id="project" name="project" value={formData.project} onChange={handleChange} required className="form-field">
                  <option value="">Select project type</option>
                  <option value="Full-stack product build">Full-stack product build</option>
                  <option value="Web3 / DeFi product">Web3 / DeFi product</option>
                  <option value="AI product integration">AI product integration</option>
                  <option value="Wallet or fintech app">Wallet or fintech app</option>
                  <option value="GameFi / mini app">GameFi / mini app</option>
                  <option value="Technical audit or rescue">Technical audit or rescue</option>
                </select>
              </Field>

              <Field label="Project details" id="message" required>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  placeholder="Tell us the goal, current stage, target users, required integrations, and timeline."
                  className="form-field resize-none"
                />
              </Field>

              <button
                type="submit"
                className="group flex w-full cursor-pointer items-center justify-center gap-3 bg-white px-8 py-4 text-base font-black text-black transition hover:bg-cyan-200"
              >
                Send project brief
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  id,
  required = false,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  children: ReactNode;
}) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-bold text-zinc-300">
      {label}
      {required && <span className="text-cyan-200"> *</span>}
    </label>
    {children}
  </div>
);

export default Contact;
