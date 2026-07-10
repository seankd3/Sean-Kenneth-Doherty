import Link from 'next/link';
import { BookOpen, Monitor } from 'lucide-react';
import { photoArchiveRoutes } from '@/lib/content/photoarchive';
import { cn } from '@/lib/utils';

export function PhotoArchiveSubnav({ active }: { active: 'product' | 'devlog' }) {
  const links = [
    {
      key: 'product',
      href: photoArchiveRoutes.product,
      label: 'Product',
      icon: Monitor,
    },
    {
      key: 'devlog',
      href: photoArchiveRoutes.devlog,
      label: 'Development log',
      icon: BookOpen,
    },
  ] as const;

  return (
    <nav
      aria-label="photoArchive sections"
      className="inline-flex max-w-full gap-1 border border-[#2a2a2a] bg-[#101010] p-1"
    >
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = active === link.key;

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'inline-flex items-center gap-2 px-3 py-2 text-xs uppercase tracking-[0.18em] transition-colors sm:px-4',
              isActive
                ? 'bg-[#c9a962] text-black'
                : 'text-[#d8d8d8] hover:bg-[#1a1a1a] hover:text-[#c9a962]',
            )}
          >
            <Icon size={14} aria-hidden="true" />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
