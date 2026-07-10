import { Clock3, Github } from 'lucide-react';
import { photoArchiveGithubUrl } from '@/lib/content/photoarchive';
import {
  photoArchiveEvolution,
  type PhotoArchiveMilestone,
} from '@/lib/content/photoarchive-history';
import { cn } from '@/lib/utils';
import { Eyebrow, Figure } from './PhotoArchiveVisuals';

function CommitLinks({ milestone }: { milestone: PhotoArchiveMilestone }) {
  if (!milestone.commits || milestone.commits.length === 0) {
    return (
      <span className="border border-[#6d5130] px-2 py-1 font-aerospace-display text-[10px] uppercase tracking-[0.18em] text-[#c9a962]">
        No commit yet
      </span>
    );
  }

  return (
    <span className="flex flex-wrap gap-2">
      {milestone.commits.map((commit) => (
        <a
          key={commit}
          href={`${photoArchiveGithubUrl}/commit/${commit}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#2a2a2a] px-2 py-1 font-aerospace-display text-[10px] uppercase tracking-[0.18em] text-[#a0a0a0] transition-colors hover:border-[#c9a962] hover:text-[#c9a962]"
        >
          {commit}
        </a>
      ))}
    </span>
  );
}

export function EvolutionSection() {
  return (
    <section id="evolution" aria-labelledby="photoarchive-evolution" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow icon={Clock3}>Build story</Eyebrow>
            <h2 id="photoarchive-evolution" className="font-wedding-display text-4xl leading-tight text-white md:text-6xl">
              From two-image ranker to private photo operating system.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-[#a0a0a0]">
            The build history matters because the product did not start as a cloud clone.
            It started as taste capture, then grew outward: library, search, phone, publishing,
            Develop, integrity, and the next generation of editing tools.
          </p>
        </div>

        <div className="space-y-8">
          {photoArchiveEvolution.map((milestone, index) => (
            <article
              key={`${milestone.date}-${milestone.title}`}
              className="grid gap-6 border-t border-[#2a2a2a] pt-8 lg:grid-cols-[240px_1fr]"
            >
              <div>
                <time className="font-aerospace-display text-xs uppercase tracking-[0.22em] text-[#c9a962]">
                  {milestone.date}
                </time>
                <div className="mt-4"><CommitLinks milestone={milestone} /></div>
              </div>
              <div className={cn('grid gap-6', milestone.image && 'xl:grid-cols-[0.9fr_1.1fr]')}>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-medium text-white">{milestone.title}</h3>
                    {milestone.status === 'in-progress' && (
                      <span className="border border-[#c9a962]/60 px-2 py-1 font-aerospace-display text-[10px] uppercase tracking-[0.18em] text-[#c9a962]">
                        In progress
                      </span>
                    )}
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#a0a0a0]">{milestone.summary}</p>
                </div>
                {(milestone.image || milestone.secondaryImage) && (
                  <div className="grid gap-4">
                    {milestone.image && (
                      <Figure
                        image={milestone.image}
                        imgClassName={cn('aspect-[16/9] object-cover object-top', index < 3 && 'object-center')}
                      />
                    )}
                    {milestone.secondaryImage && (
                      <Figure image={milestone.secondaryImage} imgClassName="aspect-[16/9] object-cover object-top" />
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OpenSourceSection() {
  return (
    <section data-photoarchive-last-section className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px] border border-[#2a2a2a] bg-[#101010] p-8 text-center md:p-14">
        <Eyebrow icon={Github}>Open source</Eyebrow>
        <h2 className="mx-auto max-w-3xl font-wedding-display text-4xl leading-tight text-white md:text-6xl">
          A private photo archive should be inspectable, ownable, and beautiful.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#a0a0a0]">
          The source is open. The archive stays local. The product story keeps moving in public,
          with shipped features labeled separately from the active Dev7 chapter.
        </p>
        <a
          href={photoArchiveGithubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 border border-[#c9a962] bg-[#c9a962] px-6 py-3 text-sm uppercase tracking-[0.2em] text-black transition-colors hover:bg-transparent hover:text-[#c9a962]"
        >
          <Github size={17} aria-hidden="true" />
          View the repo
        </a>
      </div>
    </section>
  );
}
