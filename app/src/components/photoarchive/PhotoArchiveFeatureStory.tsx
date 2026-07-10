import {
  CheckCircle2,
  FolderOpen,
  Layers3,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Workflow,
} from 'lucide-react';
import {
  photoArchiveChapters,
  type PhotoArchiveChapter,
  type PhotoArchiveImage,
} from '@/lib/content/photoarchive';
import { cn } from '@/lib/utils';
import { Eyebrow, Figure } from './PhotoArchiveVisuals';

const chapterIcons = {
  library: FolderOpen,
  taste: Star,
  search: Search,
  develop: SlidersHorizontal,
  organize: Layers3,
  mobile: MonitorSmartphone,
  sharing: Workflow,
  integrity: ShieldCheck,
};

const developEvidence: PhotoArchiveImage[] = [
  {
    src: '/images/photoarchive/evolution/integrated-develop.png',
    alt: 'Integrated Develop workspace evidence in photoArchive.',
    caption: 'Develop moved from separate experiments into the working photo archive surface.',
  },
  {
    src: '/images/photoarchive/evolution/mask-ui.png',
    alt: 'Mask UI evidence in photoArchive Develop.',
    caption: 'Masks and AI masks moved selection work into the Develop room.',
  },
  {
    src: '/images/photoarchive/evolution/color-wheels.png',
    alt: 'Color wheels in the photoArchive Develop workspace.',
    caption: 'Color wheels and grading controls broadened the edit stack.',
  },
  {
    src: '/images/photoarchive/evolution/heal-tool.png',
    alt: 'Healing controls in the photoArchive Develop workspace.',
    caption: 'Heal joined the smaller craft tools expected from a serious editor.',
  },
  {
    src: '/images/photoarchive/evolution/transform-upright.png',
    alt: 'Transform and Upright controls in photoArchive Develop.',
    caption: 'Transform/Upright closed the Dev6 shipped baseline.',
  },
];

function DevelopEvidenceStrip() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {developEvidence.map((image) => (
        <Figure key={image.src} image={image} imgClassName="aspect-[16/10] object-cover object-top" />
      ))}
    </div>
  );
}

function ChapterArticle({ chapter, index }: { chapter: PhotoArchiveChapter; index: number }) {
  const Icon = chapterIcons[chapter.id as keyof typeof chapterIcons] ?? Sparkles;
  const isWide = chapter.layout === 'wide';

  return (
    <article
      id={chapter.id}
      className={cn(
        'grid items-center gap-8 scroll-mt-24 lg:gap-12',
        isWide ? 'lg:grid-cols-1' : 'lg:grid-cols-2',
      )}
    >
      <div className={cn(!isWide && index % 2 === 1 && 'lg:order-2')}>
        <Figure image={chapter.image} imgClassName={cn(chapter.id === 'mobile' && 'mx-auto max-h-[720px] object-contain')} />
      </div>
      <div className={cn(isWide && 'grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start')}>
        <div>
          <Eyebrow icon={Icon}>{chapter.eyebrow}</Eyebrow>
          <h2 className="font-wedding-display text-4xl leading-tight text-white md:text-6xl">{chapter.title}</h2>
          {chapter.status && (
            <p className="mt-4 inline-flex border border-[#c9a962]/60 px-3 py-1 font-aerospace-display text-[11px] uppercase tracking-[0.2em] text-[#c9a962]">
              {chapter.status}
            </p>
          )}
        </div>
        <div>
          <p className="text-lg leading-relaxed text-[#cfcfcf]">{chapter.body}</p>
          <ul className="mt-7 space-y-3">
            {chapter.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-[#a0a0a0]">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#c9a962]" size={17} aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {chapter.id === 'develop' && <DevelopEvidenceStrip />}
    </article>
  );
}

export function FeatureStorySection() {
  return (
    <section aria-labelledby="photoarchive-chapters" className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 max-w-4xl">
          <Eyebrow icon={Layers3}>Feature chapters</Eyebrow>
          <h2 id="photoarchive-chapters" className="font-wedding-display text-4xl leading-tight text-white md:text-6xl">
            The complete product story, shown through the actual work.
          </h2>
        </div>
        <div className="space-y-20 lg:space-y-28">
          {photoArchiveChapters.map((chapter, index) => (
            <ChapterArticle key={chapter.id} chapter={chapter} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
