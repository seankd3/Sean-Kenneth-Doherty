import type { ComponentType, ReactNode } from 'react';
import { Sparkles } from 'lucide-react';
import type { PhotoArchiveImage } from '@/lib/content/photoarchive';
import { cn } from '@/lib/utils';

export function PhotoArchiveEyebrow({
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

export function ScreenshotFrame({
  image,
  label,
  priority = false,
  className,
  imageClassName,
  showCaption = true,
}: {
  image: PhotoArchiveImage;
  label?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  showCaption?: boolean;
}) {
  const isMobile = image.frame === 'mobile';
  const hasIntrinsicFrame = Boolean(image.width && image.height);

  return (
    <figure
      className={cn(
        'overflow-hidden border border-[#2a2a2a] bg-[#0e0e0e] shadow-2xl',
        isMobile && 'rounded-[1.75rem] p-2',
        className,
      )}
    >
      {label && !isMobile && (
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
      )}
      <div
        className={cn(
          'bg-black',
          isMobile
            ? 'overflow-hidden rounded-[1.25rem]'
            : hasIntrinsicFrame
              ? 'overflow-hidden'
              : 'aspect-[16/10]',
        )}
        style={hasIntrinsicFrame ? { aspectRatio: `${image.width} / ${image.height}` } : undefined}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={cn(
            'h-full w-full object-contain',
            isMobile && 'h-auto',
            imageClassName,
          )}
        />
      </div>
      <figcaption
        className={cn(
          'border-t border-[#2a2a2a] bg-[#101010] px-4 py-3 text-xs leading-relaxed text-[#8f8f8f]',
          !showCaption && 'sr-only',
          isMobile && 'border-t-0 px-2 pb-1 pt-3 text-center',
        )}
      >
        {image.caption}
      </figcaption>
    </figure>
  );
}

export function SectionShell({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn('px-4 py-14 sm:px-6 lg:px-8 lg:py-20', className)}>
      <div className="mx-auto max-w-[1440px]">{children}</div>
    </section>
  );
}
