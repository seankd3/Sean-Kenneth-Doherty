import { ArrowUpRight, Github } from 'lucide-react';
import { photoArchiveGithubUrl } from '@/lib/content/photoarchive';
import { ArchitectureSection, StatusSection } from './PhotoArchiveArchitectureStatus';
import { EvolutionSection, OpenSourceSection } from './PhotoArchiveEvolution';
import { FeatureStorySection } from './PhotoArchiveFeatureStory';
import {
  FlowSection,
  HeroVisual,
  PositioningSection,
  StatsSection,
} from './PhotoArchiveOpening';
import { Eyebrow } from './PhotoArchiveVisuals';

function HeroSection() {
  return (
    <section className="px-4 pb-4 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="max-w-5xl">
          <Eyebrow>Software / Self-hosted photo system</Eyebrow>
          <h1 className="font-wedding-display text-5xl leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            The photo system I wanted to exist.
          </h1>
          <p className="mt-7 max-w-4xl text-xl leading-relaxed text-[#d8d8d8] md:text-2xl">
            photoArchive is a local-first library, taste engine, search system, mobile PWA,
            publishing workflow, and Lightroom-class Develop room for a real 47,000+ photo archive.
            It aims for Google Photos ease, Lightroom control, and one thing neither gives you:
            a private archive that learns your taste.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={photoArchiveGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#c9a962] bg-[#c9a962] px-5 py-3 text-sm uppercase tracking-[0.2em] text-black transition-colors hover:bg-transparent hover:text-[#c9a962]"
            >
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="#evolution"
              className="inline-flex items-center gap-2 border border-[#2a2a2a] px-5 py-3 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-[#c9a962] hover:text-[#c9a962]"
            >
              Build story
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PhotoArchiveShowcase() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <HeroSection />
      <HeroVisual />
      <StatsSection />
      <PositioningSection />
      <FlowSection />
      <FeatureStorySection />
      <ArchitectureSection />
      <StatusSection />
      <EvolutionSection />
      <OpenSourceSection />
    </div>
  );
}
