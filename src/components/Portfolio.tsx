import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, CircuitBoard, ExternalLink, Pause, Play, ShieldCheck } from 'lucide-react';
import { projects } from '../data/projects';

const Portfolio = () => {
  const carouselProjects = [...projects, ...projects];
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLElement[]>([]);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  const pauseCarousel = () => {
    pausedRef.current = true;
    setIsPaused(true);
  };

  const resumeCarousel = () => {
    pausedRef.current = false;
    setIsPaused(false);
  };

  const updateCardFocus = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const carouselRect = carousel.getBoundingClientRect();
    const center = carouselRect.left + carouselRect.width / 2;
    const influence = carouselRect.width * 0.34;

    cardRefs.current.forEach((card) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(cardCenter - center);
      const focus = Math.max(0, 1 - distance / influence);
      const eased = focus * focus * (3 - 2 * focus);

      card.style.setProperty('--scale', String(0.86 + eased * 0.18));
      card.style.setProperty('--lift', `${28 - eased * 42}px`);
      card.style.setProperty('--fade', String(0.48 + eased * 0.52));
      card.style.zIndex = String(Math.round(eased * 100));
    });
  };

  const moveCarousel = (direction: -1 | 1) => {
    const track = trackRef.current;
    const firstCard = cardRefs.current[0];
    if (!track || !firstCard) return;

    pauseCarousel();

    const trackStyle = window.getComputedStyle(track);
    const gap = Number.parseFloat(trackStyle.columnGap || trackStyle.gap || '20') || 20;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const cycleWidth = track.scrollWidth / 2;
    offsetRef.current = cycleWidth > 0 ? (offsetRef.current + direction * (cardWidth + gap) + cycleWidth) % cycleWidth : 0;
    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    updateCardFocus();
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track) return;

    let animationFrame = 0;
    let lastTime = performance.now();
    const speed = 18;

    const animate = (time: number) => {
      const delta = Math.min(time - lastTime, 48) / 1000;
      lastTime = time;
      const cycleWidth = track.scrollWidth / 2;
      if (!pausedRef.current) {
        offsetRef.current = cycleWidth > 0 ? (offsetRef.current + speed * delta) % cycleWidth : 0;
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      updateCardFocus();

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="portfolio" className="tech-section relative overflow-hidden py-32">
      <div className="absolute inset-0 tech-grid opacity-70" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-300/[0.08] to-transparent" />
      <div className="absolute left-1/2 top-[48%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.045] blur-3xl" />
      <div className="absolute left-0 top-20 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <div className="section-kicker mb-5">
              <CircuitBoard className="h-4 w-4" />
              Proof of execution
            </div>
            <h2 className="font-display text-5xl font-black leading-[0.9] tracking-tight text-white sm:text-7xl">
              Portfolio clients can inspect.
              <span className="block text-cyan-200">Not just pretty cards.</span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-8 text-slate-300">
            Every project opens into a technical case study with client context, scope, modules, architecture, stack, deliverables, and outcomes.
          </p>
        </div>

        <div className="relative">
        <div className="absolute right-0 top-2 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            className="flex h-10 w-10 items-center justify-center border border-slate-700 bg-black/75 text-slate-200 transition hover:border-cyan-200 hover:text-cyan-200"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={isPaused ? resumeCarousel : pauseCarousel}
            className="flex h-10 w-10 items-center justify-center border border-slate-700 bg-black/75 text-slate-200 transition hover:border-cyan-200 hover:text-cyan-200"
            aria-label={isPaused ? 'Resume portfolio carousel' : 'Pause portfolio carousel'}
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => moveCarousel(1)}
            className="flex h-10 w-10 items-center justify-center border border-slate-700 bg-black/75 text-slate-200 transition hover:border-cyan-200 hover:text-cyan-200"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div
          ref={carouselRef}
          className="portfolio-carousel -mx-4 overflow-hidden px-4 py-20 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          onPointerEnter={pauseCarousel}
          onPointerLeave={resumeCarousel}
          onFocus={pauseCarousel}
          onBlur={resumeCarousel}
        >
          <div ref={trackRef} className="portfolio-track flex w-max gap-5">
          {carouselProjects.map((project, index) => (
            <article
              key={`${project.slug}-${index}`}
              ref={(element) => {
                if (element) cardRefs.current[index] = element;
              }}
              className="group portfolio-card flex h-[650px] w-[292px] shrink-0 flex-col overflow-hidden border border-slate-800/90 bg-[#080d12]/90 sm:w-[320px]"
            >
              <a href={`/portfolio/${project.slug}`} className="relative block h-56 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-110 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-sm border border-cyan-300/25 bg-black/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-200 backdrop-blur">
                  {project.category}
                </div>
              </a>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 font-mono text-xs text-slate-500">CASE_{String((index % projects.length) + 1).padStart(2, '0')}</div>
                <h3 className="flex h-8 items-start font-display text-2xl font-black leading-none text-white">{project.shortTitle}</h3>
                <p className="mt-4 h-[72px] text-sm leading-6 text-slate-400">{project.cardSummary}</p>

                <div className="mt-5 grid h-[84px] grid-cols-1 gap-2">
                  {project.cardFacts.map((fact) => (
                    <div key={fact.label} className="grid grid-cols-[84px_1fr] border border-slate-800 bg-slate-950/70">
                      <div className="border-r border-slate-800 px-3 py-2 font-mono text-[10px] text-slate-500">{fact.label}</div>
                      <div className="px-3 py-2 text-sm font-bold text-slate-100">{fact.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex min-h-[58px] content-start flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="border border-slate-800 bg-slate-950 px-2 py-1 font-mono text-[10px] text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-slate-800 pt-5">
                  <a href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 bg-cyan-200 px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-white">
                    Open details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  {project.links[0] && (
                    <a href={project.links[0].href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`} className="text-slate-500 transition hover:text-cyan-200">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>
        </div>

        <div className="mt-8 border border-cyan-300/25 bg-cyan-300/[0.055] p-6 shadow-[0_0_80px_rgba(34,211,238,0.08)]">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
                <ShieldCheck className="h-4 w-4" />
                Need deeper proof?
              </div>
              <p className="mt-2 text-slate-300">Open any case study to inspect scope, modules, architecture, stack, deliverables, outcomes, and live links.</p>
            </div>
            <a href="/portfolio/lumnia-dex" className="inline-flex items-center gap-2 self-start bg-white px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-cyan-200 md:self-auto">
              Start with Lumnia
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
