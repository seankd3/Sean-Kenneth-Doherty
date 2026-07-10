import { ArrowRight, Workflow } from 'lucide-react';
import {
  photoArchiveChapters,
  photoArchiveFlow,
  photoArchivePositioning,
  photoArchiveStats,
} from '@/lib/content/photoarchive';
import { Eyebrow, WindowFrame } from './PhotoArchiveVisuals';

export function HeroVisual() {
  const library = photoArchiveChapters[0].image;
  const develop = photoArchiveChapters[3].image;
  const mobile = photoArchiveChapters[5].image;

  return (
    <div className="relative mx-auto mt-12 max-w-[1600px] px-4 sm:px-6 lg:px-8">
      <div className="relative min-h-[500px] lg:min-h-[760px]">
        <WindowFrame image={library} label="Library" priority className="relative z-10 max-w-[1120px]" />
        <WindowFrame
          image={develop}
          label="Develop"
          priority
          className="relative z-20 mt-5 max-w-[980px] lg:absolute lg:right-0 lg:top-44 lg:mt-0 lg:w-[58%]"
        />
        <figure className="relative z-30 mx-auto -mt-12 w-[220px] overflow-hidden rounded-[2rem] border border-[#3a3a3a] bg-[#090909] p-2 shadow-2xl sm:w-[260px] lg:absolute lg:bottom-0 lg:left-12 lg:mx-0 lg:-mt-0">
          <div className="overflow-hidden rounded-[1.45rem] border border-[#202020] bg-black">
            <img src={mobile.src} alt={mobile.alt} loading="eager" decoding="async" className="w-full" />
          </div>
          <figcaption className="sr-only">{mobile.caption}</figcaption>
        </figure>

        <div className="pointer-events-none absolute left-[18%] top-[38%] hidden h-px w-[18%] bg-[#c9a962]/70 lg:block" />
        <div className="pointer-events-none absolute right-[24%] top-[29%] hidden h-24 w-px bg-[#c9a962]/70 lg:block" />
        <div className="absolute left-[34%] top-[34%] hidden border border-[#c9a962]/50 bg-[#0a0a0a]/90 px-3 py-2 font-aerospace-display text-[10px] uppercase tracking-[0.2em] text-[#c9a962] lg:block">
          Same archive, three working surfaces
        </div>
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section aria-labelledby="photoarchive-evidence" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1600px]">
        <h2 id="photoarchive-evidence" className="sr-only">Photo Archive evidence</h2>
        <div className="grid gap-px border border-[#2a2a2a] bg-[#2a2a2a] sm:grid-cols-2 lg:grid-cols-4">
          {photoArchiveStats.map((stat) => (
            <div key={stat.label} className="bg-[#0a0a0a] p-6 lg:p-8">
              <p className="font-wedding-display text-5xl leading-none text-[#c9a962] lg:text-6xl">{stat.value}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white">{stat.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#8f8f8f]">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PositioningSection() {
  return (
    <section aria-labelledby="photoarchive-positioning" className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <Eyebrow icon={Workflow}>Positioning</Eyebrow>
          <h2 id="photoarchive-positioning" className="font-wedding-display text-4xl leading-tight text-white md:text-6xl">
            Familiar where it should be. Strange where it matters.
          </h2>
        </div>
        <div className="grid gap-px border border-[#2a2a2a] bg-[#2a2a2a] md:grid-cols-3">
          {photoArchivePositioning.map((item) => (
            <article key={item.source} className="bg-[#101010] p-6 lg:p-8">
              <p className="font-aerospace-display text-[11px] uppercase tracking-[0.22em] text-[#c9a962]">{item.source}</p>
              <h3 className="mt-5 text-xl font-medium leading-snug text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#a0a0a0]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FlowSection() {
  return (
    <section aria-labelledby="photoarchive-flow" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px] border-y border-[#2a2a2a] py-10">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow icon={ArrowRight}>Product flow</Eyebrow>
            <h2 id="photoarchive-flow" className="font-wedding-display text-4xl text-white md:text-5xl">
              Import to publish, without leaving the private archive.
            </h2>
          </div>
        </div>
        <ol className="grid gap-4 lg:grid-cols-5">
          {photoArchiveFlow.map((step, index) => (
            <li key={step.name} className="relative border border-[#2a2a2a] bg-[#0f0f0f] p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-aerospace-display text-xs text-[#c9a962]">{String(index + 1).padStart(2, '0')}</span>
                {index < photoArchiveFlow.length - 1 && <ArrowRight className="hidden text-[#c9a962]/60 lg:block" size={16} aria-hidden="true" />}
              </div>
              <h3 className="text-lg font-medium text-white">{step.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">{step.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
