import Link from 'next/link';
import { ArrowRight, Github, LockKeyhole, Search, ShieldCheck, SlidersHorizontal, Sparkles, Workflow } from 'lucide-react';
import {
  photoArchiveChapters,
  photoArchiveFlow,
  photoArchiveGithubUrl,
  photoArchiveImages,
  photoArchiveMetrics,
  photoArchivePillars,
  photoArchiveRoutes,
} from '@/lib/content/photoarchive';
import { PhotoArchiveSubnav } from './PhotoArchiveSubnav';
import { PhotoArchiveEyebrow, ScreenshotFrame, SectionShell } from './PhotoArchiveVisuals';

function HeroComposite() {
  return (
    <div className="relative mx-auto mt-10 max-w-[980px] lg:mt-0">
      <ScreenshotFrame
        image={photoArchiveImages.library}
        label="Library"
        priority
        showCaption={false}
        className="relative z-10"
      />
      <div className="mt-4 grid grid-cols-[1fr_104px] gap-4 sm:grid-cols-[1fr_132px] lg:absolute lg:bottom-[-3.5rem] lg:right-[-2rem] lg:z-20 lg:w-[68%] lg:grid-cols-[1fr_128px]">
        <ScreenshotFrame
          image={photoArchiveImages.develop}
          label="Develop"
          priority
          showCaption={false}
          className="shadow-2xl"
        />
        <ScreenshotFrame
          image={photoArchiveImages.mobile}
          priority
          showCaption={false}
          className="self-end"
        />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <PhotoArchiveEyebrow icon={Sparkles}>Self-hosted photo system</PhotoArchiveEyebrow>
          <h1 className="font-wedding-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            A private photo archive that helps you find, choose, edit, and share the work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d8d8d8] sm:text-xl">
            photoArchive is open-source, local-first software for photographers who want Google Photos-style memory, Lightroom-style control, and a workflow that learns taste without handing originals to a cloud.
          </p>
          <div className="mt-7">
            <PhotoArchiveSubnav active="product" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 border border-[#c9a962] bg-[#c9a962] px-5 py-3 text-sm uppercase tracking-[0.18em] text-black transition-colors hover:bg-transparent hover:text-[#c9a962]"
            >
              Explore the product
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <Link
              href={photoArchiveRoutes.devlog}
              className="inline-flex items-center gap-2 border border-[#2a2a2a] px-5 py-3 text-sm uppercase tracking-[0.18em] text-white transition-colors hover:border-[#c9a962] hover:text-[#c9a962]"
            >
              Development log
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a
              href={photoArchiveGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-3 text-sm text-[#9a9a9a] transition-colors hover:text-white"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
        <HeroComposite />
      </div>
    </section>
  );
}

function PillarsSection() {
  const icons = [ShieldCheck, Search, SlidersHorizontal];

  return (
    <SectionShell className="pt-4">
      <div className="grid gap-px border border-[#2a2a2a] bg-[#2a2a2a] md:grid-cols-3">
        {photoArchivePillars.map((pillar, index) => {
          const Icon = icons[index];

          return (
            <article key={pillar.title} className="bg-[#101010] p-6 lg:p-8">
              <Icon size={22} className="text-[#c9a962]" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-medium leading-snug text-white">{pillar.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#a0a0a0]">{pillar.body}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

function WorkflowSection() {
  return (
    <SectionShell className="py-10 lg:py-14">
      <div className="border-y border-[#2a2a2a] py-10">
        <PhotoArchiveEyebrow icon={Workflow}>Workflow</PhotoArchiveEyebrow>
        <h2 className="max-w-3xl font-wedding-display text-4xl leading-tight text-white md:text-5xl">
          Import to share, without breaking the chain of custody.
        </h2>
        <ol className="mt-8 grid gap-3 lg:grid-cols-5">
          {photoArchiveFlow.map((step, index) => (
            <li key={step.name} className="border border-[#2a2a2a] bg-[#0f0f0f] p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-aerospace-display text-xs text-[#c9a962]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {index < photoArchiveFlow.length - 1 && (
                  <ArrowRight className="hidden text-[#c9a962]/60 lg:block" size={16} aria-hidden="true" />
                )}
              </div>
              <h3 className="text-lg font-medium text-white">{step.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#9a9a9a]">{step.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

function FeatureChapters() {
  return (
    <SectionShell id="features">
      <div className="mb-12 max-w-3xl">
        <PhotoArchiveEyebrow>Feature chapters</PhotoArchiveEyebrow>
        <h2 className="font-wedding-display text-4xl leading-tight text-white md:text-6xl">
          Four working surfaces, one archive.
        </h2>
      </div>
      <div className="space-y-14 lg:space-y-20">
        {photoArchiveChapters.map((chapter, index) => {
          const imageFirst = index % 2 === 1;

          return (
            <article
              key={chapter.id}
              className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-12"
            >
              <div className={imageFirst ? 'lg:order-2' : undefined}>
                <p className="font-aerospace-display text-xs uppercase tracking-[0.24em] text-[#c9a962]">
                  {chapter.eyebrow}
                </p>
                <h3 className="mt-4 font-wedding-display text-4xl leading-tight text-white md:text-5xl">
                  {chapter.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-[#cfcfcf]">{chapter.body}</p>
                <ul className="mt-6 space-y-3">
                  {chapter.points.map((point) => (
                    <li key={point} className="border-l border-[#c9a962] pl-4 text-sm leading-relaxed text-[#a0a0a0]">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <ScreenshotFrame
                image={chapter.image}
                label={chapter.eyebrow}
                className={imageFirst ? 'lg:order-1' : undefined}
                imageClassName={chapter.id === 'decide' ? 'object-contain' : undefined}
              />
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

function TrustAndProofSection() {
  return (
    <SectionShell>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <PhotoArchiveEyebrow icon={LockKeyhole}>Local-first trust</PhotoArchiveEyebrow>
          <h2 className="font-wedding-display text-4xl leading-tight text-white md:text-5xl">
            The boring parts are deliberately boring.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#b8b8b8]">
            Originals remain the source of truth. Indexes, previews, captions, embeddings, and caches are product state that can be rebuilt. That keeps the archive portable, recoverable, and understandable.
          </p>
        </div>
        <div className="grid gap-px border border-[#2a2a2a] bg-[#2a2a2a] sm:grid-cols-2 lg:grid-cols-4">
          {photoArchiveMetrics.map((metric) => (
            <div key={metric.label} className="bg-[#0a0a0a] p-5">
              <p className="font-wedding-display text-4xl leading-none text-[#c9a962] lg:text-5xl">
                {metric.value}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white">{metric.label}</p>
              <p className="mt-3 text-xs leading-relaxed text-[#8f8f8f]">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function AvailabilitySection() {
  return (
    <SectionShell className="pt-8">
      <div className="border border-[#2a2a2a] bg-[#101010] p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-aerospace-display text-xs uppercase tracking-[0.24em] text-[#c9a962]">
              Availability
            </p>
            <h2 className="mt-4 font-wedding-display text-4xl text-white md:text-5xl">
              Open-source, self-hosted, and in active development.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#a0a0a0]">
              photoArchive is software in active use and development. Onboarding, portable storage paths, optional AI packs, the Quick Guide, and recovery UX are shipped. Windows public distribution is still being finished: a real installer exists, but it is not yet public-release-ready.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={photoArchiveGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#c9a962] bg-[#c9a962] px-5 py-3 text-sm uppercase tracking-[0.18em] text-black transition-colors hover:bg-transparent hover:text-[#c9a962]"
            >
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
            <Link
              href={photoArchiveRoutes.devlog}
              className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-sm uppercase tracking-[0.18em] text-white transition-colors hover:border-[#c9a962] hover:text-[#c9a962]"
            >
              Development log
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default function PhotoArchiveProductPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <HeroSection />
      <PillarsSection />
      <WorkflowSection />
      <FeatureChapters />
      <TrustAndProofSection />
      <AvailabilitySection />
    </div>
  );
}
