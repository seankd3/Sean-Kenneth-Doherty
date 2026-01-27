/**
 * NativeAspectImage Component
 * 
 * Displays images in their native aspect ratio without cropping.
 * Use this instead of regular <img> tags to ensure photos are never cropped.
 */

import { cn } from '@/lib/utils';

interface NativeAspectImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  maxWidth?: string;
  maxHeight?: string;
}

export const NativeAspectImage = ({
  src,
  alt,
  className,
  containerClassName,
  maxWidth,
  maxHeight,
}: NativeAspectImageProps) => {
  return (
    <div 
      className={cn(
        "overflow-hidden",
        containerClassName
      )}
      style={{
        maxWidth: maxWidth || '100%',
        maxHeight: maxHeight,
      }}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-auto max-w-full",
          "object-contain", // Shows full image without cropping
          className
        )}
        loading="lazy"
      />
    </div>
  );
};

/**
 * GalleryImage Component
 * 
 * For gallery grids - maintains native aspect ratio within grid cells.
 */
interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export const GalleryImage = ({
  src,
  alt,
  className,
  onClick,
}: GalleryImageProps) => {
  return (
    <div 
      className={cn(
        "overflow-hidden cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
        loading="lazy"
      />
    </div>
  );
};

/**
 * HeroImage Component
 * 
 * For hero sections - maintains native aspect ratio with optional max height.
 */
interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  maxHeight?: string;
}

export const HeroImage = ({
  src,
  alt,
  className,
  overlay = true,
  maxHeight = "100vh",
}: HeroImageProps) => {
  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden",
        className
      )}
      style={{ maxHeight }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain"
        style={{ maxHeight }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]" />
      )}
    </div>
  );
};

export default NativeAspectImage;
