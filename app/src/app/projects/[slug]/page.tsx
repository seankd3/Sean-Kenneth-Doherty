import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CalendarDays, Cpu, Gamepad2, GitBranch } from 'lucide-react';
import { projects, type Project, type ProjectUpdate } from '@/lib/content';

export function generateStaticParams() {
  return projects
    .filter((project) => project.slug !== 'photoarchive')
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? project.title : 'Project',
    description: project?.summary,
    robots: { index: false, follow: false },
  };
}

function updateCommits(update: ProjectUpdate) {
  return update.commits && update.commits.length > 0
    ? update.commits
    : update.commit
      ? [update.commit]
      : [];
}

function CommitLinks({ project, update }: { project: Project; update: ProjectUpdate }) {
  const commits = updateCommits(update);

  if (commits.length === 0) return null;

  return (
    <span className="flex flex-wrap justify-end gap-2">
      {commits.map((commit) => {
        const label = commit.length > 8 ? commit.slice(0, 8) : commit;
        if (!project.sourceUrl) {
          return (
            <span key={commit} className="font-aerospace-display uppercase">
              {label}
            </span>
          );
        }

        return (
          <a
            key={commit}
            href={`${project.sourceUrl}/commit/${commit}`}
            className="font-aerospace-display uppercase transition-colors hover:text-[#c9a962]"
          >
            {label}
          </a>
        );
      })}
    </span>
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#6f6f6f] transition-colors hover:text-[#c9a962]"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>

          <div className="relative overflow-hidden border border-[#2a2a2a] bg-black">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="max-h-[520px] w-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c9a962]">
                {project.eyebrow}
              </p>
              <h1 className="font-wedding-display text-4xl text-white md:text-6xl">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.playUrl && (
              <a
                href={project.playUrl}
                className="inline-flex items-center gap-3 border border-[#c9a962] bg-[#c9a962]/10 px-8 py-4 text-sm uppercase tracking-[0.25em] text-[#c9a962] transition-colors hover:bg-[#c9a962] hover:text-black"
              >
                <Gamepad2 size={18} />
                Play the Game
              </a>
            )}
            <span className="border border-[#2a2a2a] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#a0a0a0]">
              {project.status}
            </span>
            {project.playUrl && (
              <span className="text-xs text-[#6f6f6f]">
                {project.playNote ?? 'Runs in your browser — desktop with a keyboard recommended.'}
              </span>
            )}
          </div>

          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-[#d8d8d8]">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#2a2a2a] px-2.5 py-1 text-xs text-[#a0a0a0]"
              >
                {tag}
              </span>
            ))}
          </div>

          <section className="mt-12">
            <h2 className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white">
              <Cpu size={16} className="text-[#c9a962]" />
              Current Shape
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="border-l border-[#c9a962] pl-4 text-sm leading-relaxed text-[#a0a0a0]"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="mb-6 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white">
              <CalendarDays size={16} className="text-[#c9a962]" />
              Build Log
            </h2>
            <div className="space-y-5">
              {project.updates.map((update) => (
                <div
                  key={`${update.date}-${update.title}`}
                  className="border-t border-[#2a2a2a] pt-5"
                >
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-medium text-white">{update.title}</p>
                    <div className="flex items-center gap-3 text-xs text-[#6f6f6f]">
                      <CommitLinks project={project} update={update} />
                      <time>{update.date}</time>
                    </div>
                  </div>
                  <p className="max-w-3xl text-sm leading-relaxed text-[#a0a0a0]">
                    {update.summary}
                  </p>
                </div>
              ))}
              {project.updates.length === 0 && (
                <p className="text-sm text-[#6f6f6f]">No build log entries yet.</p>
              )}
            </div>
          </section>

          {project.links && project.links.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6f6f6f]">
                <GitBranch size={14} />
                Links
              </span>
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:border-[#c9a962] hover:text-[#c9a962]"
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
