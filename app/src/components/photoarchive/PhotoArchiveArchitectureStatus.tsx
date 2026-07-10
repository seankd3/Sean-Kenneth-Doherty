import {
  Clock3,
  Database,
  HardDrive,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { photoArchiveStatus } from '@/lib/content/photoarchive';
import { Eyebrow } from './PhotoArchiveVisuals';

const architectureNodes = [
  { icon: HardDrive, title: 'Original folders', body: 'Photos stay on the drives and folders you already trust.' },
  { icon: Database, title: 'Local catalog', body: 'SQLite, metadata, rankings, people, maps, stacks, and history.' },
  { icon: Layers3, title: 'Preview cache', body: 'Byte-budgeted tiers, hot memory cache, rebuildable derivatives.' },
  { icon: Search, title: 'Local intelligence', body: 'Metadata search, embeddings, captions, masks, and quality signals.' },
  { icon: MonitorSmartphone, title: 'Desktop + PWA', body: 'One archive surface for workstation review and phone access.' },
  { icon: LockKeyhole, title: 'Private publishing', body: 'Selected galleries and site publishing without exposing originals.' },
];

export function ArchitectureSection() {
  return (
    <section aria-labelledby="photoarchive-architecture" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <Eyebrow icon={ShieldCheck}>Local-first architecture</Eyebrow>
            <h2 id="photoarchive-architecture" className="font-wedding-display text-4xl leading-tight text-white md:text-6xl">
              Trust comes from boring boundaries.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#a0a0a0]">
              The source files are not a cache and not a cloud import. Everything derived from them
              can be rebuilt, inspected, or backed up independently: previews, search indexes, ranks,
              masks, versions, and publishing state.
            </p>
          </div>
          <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {architectureNodes.map((node, index) => {
              const NodeIcon = node.icon;
              return (
                <article key={node.title} className="relative border border-[#2a2a2a] bg-[#101010] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <NodeIcon className="text-[#c9a962]" size={20} aria-hidden="true" />
                    <span className="font-aerospace-display text-[10px] uppercase tracking-[0.2em] text-[#6f6f6f]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-white">{node.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#929292]">{node.body}</p>
                  {index < architectureNodes.length - 1 && (
                    <span className="pointer-events-none absolute -right-4 top-1/2 hidden h-px w-4 bg-[#c9a962]/60 xl:block" />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatusSection() {
  return (
    <section aria-labelledby="photoarchive-status" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 max-w-3xl">
          <Eyebrow icon={Clock3}>Status boundary</Eyebrow>
          <h2 id="photoarchive-status" className="font-wedding-display text-4xl text-white md:text-6xl">
            Shipped now, active development, and the next chapter.
          </h2>
        </div>
        <div className="grid gap-px border border-[#2a2a2a] bg-[#2a2a2a] lg:grid-cols-3">
          {photoArchiveStatus.map((column) => (
            <article key={column.title} className="bg-[#101010] p-6 lg:p-8">
              <p className="font-aerospace-display text-[11px] uppercase tracking-[0.22em] text-[#c9a962]">{column.label}</p>
              <h3 className="mt-4 text-2xl font-medium text-white">{column.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#a0a0a0]">{column.body}</p>
              <ul className="mt-6 space-y-3">
                {column.items.map((item) => (
                  <li key={item} className="border-l border-[#c9a962]/70 pl-4 text-sm leading-relaxed text-[#b8b8b8]">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
