import type { ComponentType, ReactNode } from 'react';
import { Sparkles } from 'lucide-react';
import type { PhotoArchiveImage } from '@/lib/content/photoarchive';
import { cn } from '@/lib/utils';

export function Eyebrow({
  children,
  icon: Icon = Sparkles,
}: {
  children: ReactNode;
  icon?: ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#c9a962]">
      <Icon size={16} aria-hidden="true" />
      {children}
    </p>
  );
}

export function Figure({
  image,
  priority = false,
  className,
  imgClassName,
}: {
  image: PhotoArchiveImage;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <figure className={cn('overflow-hidden border border-[#2a2a2a] bg-black', className)}>
      <img
        src={image.src}
        alt={image.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={cn('w-full', imgClassName)}
      />
      <figcaption className="border-t border-[#2a2a2a] bg-[#0f0f0f] px-4 py-3 text-xs leading-relaxed text-[#8f8f8f]">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export function WindowFrame({
  image,
  label,
  className,
  priority = false,
}: {
  image: PhotoArchiveImage;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn('overflow-hidden border border-[#2a2a2a] bg-[#101010] shadow-2xl', className)}>
      <div className="flex h-9 items-center justify-between border-b border-[#2a2a2a] px-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#6e302f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8a743f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#486a55]" />
        </div>
        <span className="font-aerospace-display text-[10px] uppercase tracking-[0.2em] text-[#777]">
          {label}
        </span>
      </div>
      <img
        src={image.src}
        alt={image.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="w-full"
      />
      <figcaption className="sr-only">{image.caption}</figcaption>
    </figure>
  );
}
