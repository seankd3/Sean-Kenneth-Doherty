import type { PhotoArchiveDevlogImages } from '@/lib/content/photoarchive-devlog';
import { ScreenshotFrame } from './PhotoArchiveVisuals';

export function PhotoArchiveDevlogMedia({
  images,
  label,
}: {
  images: PhotoArchiveDevlogImages;
  label: string;
}) {
  if (images.length === 0) return null;

  if (images.length === 1) {
    return <ScreenshotFrame image={images[0]} label={label} />;
  }

  return (
    <div className="grid items-start gap-5 md:grid-cols-[minmax(0,1.8fr)_minmax(220px,0.8fr)] lg:gap-6">
      {images.map((image) => (
        <ScreenshotFrame key={image.src} image={image} label={label} />
      ))}
    </div>
  );
}
