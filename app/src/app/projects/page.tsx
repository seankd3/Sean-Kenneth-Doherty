import type { Metadata } from 'next';
import { ArrowUpRight, CalendarDays, Code2, Cpu, GitBranch, RadioTower } from 'lucide-react';
import { projects, projectsPage } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description: projectsPage.description,
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#c9a962]">
              <RadioTower size={16} />
              {projectsPage.subtitle}
            </p>
            <h1 className="font-wedding-display text-5xl text-white md:text-7xl">
              {projectsPage.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#a0a0a0]">
              {projectsPage.description}
            </p>
          </div>

          <div className="space-y-10">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="grid overflow-hidden border border-[#2a2a2a] bg-[#111] lg:grid-cols-[1.1fr_0.9fr]"
              >
                <div className="relative min-h-[280px] bg-black lg:min-h-[520px]">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c9a962]">
                      {project.eyebrow}
                    </p>
                    <h2 className="font-wedding-display text-4xl text-white md:text-5xl">
                      {project.title}
                    </h2>
                  </div>
                </div>

                <div className="flex flex-col p-6 md:p-8">
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <span className="border border-[#c9a962] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#c9a962]">
                      {project.status}
                    </span>
                    <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6f6f6f]">
                      <GitBranch size={14} />
                      Active Build
                    </span>
                  </div>

                  <p className="mb-8 text-base leading-relaxed text-[#d8d8d8]">
                    {project.summary}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#2a2a2a] px-2.5 py-1 text-xs text-[#a0a0a0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <section className="mb-8">
                    <h3 className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white">
                      <Cpu size={16} className="text-[#c9a962]" />
                      Current Shape
                    </h3>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="border-l border-[#c9a962] pl-4 text-sm leading-relaxed text-[#a0a0a0]">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="mt-auto">
                    <h3 className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white">
                      <CalendarDays size={16} className="text-[#c9a962]" />
                      Build Log
                    </h3>
                    <div className="space-y-4">
                      {project.updates.map((update) => (
                        <div key={`${project.slug}-${update.date}-${update.title}`} className="border-t border-[#2a2a2a] pt-4">
                          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                            <p className="text-sm font-medium text-white">{update.title}</p>
                            <div className="flex items-center gap-3 text-xs text-[#6f6f6f]">
                              {update.commit && project.sourceUrl && (
                                <a
                                  href={`${project.sourceUrl}/commit/${update.commit}`}
                                  className="font-aerospace-display uppercase transition-colors hover:text-[#c9a962]"
                                >
                                  {update.commit}
                                </a>
                              )}
                              {update.commit && !project.sourceUrl && (
                                <span className="font-aerospace-display uppercase">
                                  {update.commit}
                                </span>
                              )}
                              <time>{update.date}</time>
                            </div>
                          </div>
                          <p className="text-sm leading-relaxed text-[#a0a0a0]">{update.summary}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {project.links && project.links.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-3">
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
              </article>
            ))}
          </div>

          <div className="mt-10 border border-[#2a2a2a] bg-[#111] p-6 text-sm leading-relaxed text-[#a0a0a0]">
            <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c9a962]">
              <Code2 size={15} />
              Update Path
            </p>
            <p>
              Project entries live in <code className="text-white">app/src/lib/content/projects.ts</code>,
              while the Orbital Mechanics build log lives in <code className="text-white">app/src/lib/content/project-updates/orbital-mechanics.json</code>.
              Run <code className="text-white">npm run sync-projects</code> from the app directory to refresh it from the game repo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
