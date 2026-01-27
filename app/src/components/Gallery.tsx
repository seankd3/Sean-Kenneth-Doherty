/**
 * Gallery Component
 * 
 * Displays images in configurable layouts with optional metadata.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { GalleryConfig, GalleryImage } from '@/lib/gallery-config-auto';

interface GalleryProps {
  gallery?: GalleryConfig;
  galleryId?: string;
  layout?: GalleryConfig['layout'];
  showMetadata?: boolean;
  className?: string;
  columns?: 2 | 3 | 4;
}

export const Gallery = ({
  gallery,
  galleryId,
  layout: layoutOverride,
  showMetadata: metadataOverride,
  className,
  columns = 3,
}: GalleryProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // If galleryId provided, would need to fetch from context/props
  // For now, assume gallery prop is provided
  if (!gallery) {
    return <div className="text-white/50 text-center py-12">Gallery not found</div>;
  }

  const layout = layoutOverride || gallery.layout;
  const showMetadata = metadataOverride ?? gallery.display.metadata;
  const showCaptions = gallery.display.captions;
  const showExif = gallery.display.exif;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(i => (i === null ? null : i === 0 ? gallery.images.length - 1 : i - 1));
  const nextImage = () => setLightboxIndex(i => (i === null ? null : i === gallery.images.length - 1 ? 0 : i + 1));

  // Grid Layout
  if (layout === 'grid') {
    return (
      <>
        <div className={cn(`grid grid-cols-1 md:grid-cols-${columns} gap-4`, className)}>
          {gallery.images.map((image, index) => (
            <GalleryImageCard
              key={image.filename}
              image={image}
              showMetadata={showMetadata}
              showCaption={showCaptions}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
        <Lightbox
          images={gallery.images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          showExif={showExif}
        />
      </>
    );
  }

  // Masonry Layout
  if (layout === 'masonry') {
    return (
      <>
        <div className={cn(`columns-1 md:columns-${columns} gap-4 space-y-4`, className)}>
          {gallery.images.map((image, index) => (
            <div key={image.filename} className="break-inside-avoid">
              <GalleryImageCard
                image={image}
                showMetadata={showMetadata}
                showCaption={showCaptions}
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>
        <Lightbox
          images={gallery.images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          showExif={showExif}
        />
      </>
    );
  }

  // Slideshow Layout
  if (layout === 'slideshow') {
    return (
      <Slideshow
        images={gallery.images}
        showMetadata={showMetadata}
        showExif={showExif}
        className={className}
      />
    );
  }

  // Filmstrip Layout
  if (layout === 'filmstrip') {
    return (
      <>
        <div className={cn("flex gap-4 overflow-x-auto pb-4", className)}>
          {gallery.images.map((image, index) => (
            <div key={image.filename} className="flex-shrink-0 w-auto h-64 md:h-80">
              <img
                src={image.src}
                alt={image.title || ''}
                className="h-full w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>
        <Lightbox
          images={gallery.images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
          showExif={showExif}
        />
      </>
    );
  }

  return null;
};

// Individual Image Card
interface GalleryImageCardProps {
  image: GalleryImage;
  showMetadata: boolean;
  showCaption: boolean;
  onClick: () => void;
}

const GalleryImageCard = ({ image, showMetadata, showCaption, onClick }: GalleryImageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.title || ''}
        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        loading="lazy"
      />
      
      {/* Overlay with metadata */}
      {(showMetadata || showCaption) && (image.title || image.location) && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {image.title && (
            <h3 className="text-white font-medium text-sm">{image.title}</h3>
          )}
          {showMetadata && image.location && (
            <div className="flex items-center gap-1 text-white/70 text-xs mt-1">
              <MapPin size={12} />
              <span>{image.location}</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

// Lightbox Component
interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  showExif: boolean;
}

const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext, showExif }: LightboxProps) => {
  if (currentIndex === null) return null;
  
  const image = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
          onClick={onClose}
        >
          <X size={32} />
        </button>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
            >
              <ChevronLeft size={40} />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); onNext(); }}
            >
              <ChevronRight size={40} />
            </button>
          </>
        )}

        {/* Image container */}
        <div className="max-w-[90vw] max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
          <img
            src={image.src}
            alt={image.title || ''}
            className="max-w-full max-h-[75vh] object-contain"
          />
          
          {/* Image info */}
          <div className="mt-4 text-center text-white">
            {image.title && <h3 className="text-lg font-medium">{image.title}</h3>}
            
            <div className="flex items-center justify-center gap-4 mt-2 text-sm text-white/70">
              {image.location && (
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {image.location}
                </span>
              )}
              {image.date && (
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {new Date(image.date).toLocaleDateString()}
                </span>
              )}
            </div>

            {/* EXIF data */}
            {showExif && image.exif && (image.exif.camera || image.exif.iso) && (
              <div className="flex items-center justify-center gap-3 mt-2 text-xs text-white/50">
                <Camera size={12} />
                {image.exif.model && <span>{image.exif.model}</span>}
                {image.exif.iso && <span>ISO {image.exif.iso}</span>}
                {image.exif.aperture && <span>{image.exif.aperture}</span>}
                {image.exif.shutter && <span>{image.exif.shutter}</span>}
              </div>
            )}

            {/* Image counter */}
            <div className="mt-3 text-xs text-white/40">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Slideshow Component
interface SlideshowProps {
  images: GalleryImage[];
  showMetadata: boolean;
  showExif: boolean;
  className?: string;
}

const Slideshow = ({ images, showMetadata, showExif, className }: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  const next = () => setCurrentIndex(i => (i + 1) % images.length);
  const prev = () => setCurrentIndex(i => (i - 1 + images.length) % images.length);

  return (
    <div className={cn("relative", className)}>
      <div className="relative aspect-video bg-black/50 flex items-center justify-center overflow-hidden">
        <img
          src={currentImage.src}
          alt={currentImage.title || ''}
          className="max-w-full max-h-full object-contain"
        />
        
        {/* Navigation */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 bg-black/30 rounded-full"
          onClick={prev}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 bg-black/30 rounded-full"
          onClick={next}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Info bar */}
      {(showMetadata || showExif) && (
        <div className="bg-[#141414] p-4 text-center">
          {currentImage.title && <h3 className="text-white font-medium">{currentImage.title}</h3>}
          <div className="flex items-center justify-center gap-4 mt-1 text-sm text-[#a0a0a0]">
            {currentImage.location && <span>{currentImage.location}</span>}
            {showExif && currentImage.exif?.model && (
              <span className="text-xs">{currentImage.exif.model}</span>
            )}
          </div>
        </div>
      )}

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto mt-4 pb-2">
        {images.map((img, idx) => (
          <button
            key={img.filename}
            className={cn(
              "flex-shrink-0 w-16 h-16 overflow-hidden border-2 transition-colors",
              idx === currentIndex ? "border-[#c9a962]" : "border-transparent hover:border-white/30"
            )}
            onClick={() => setCurrentIndex(idx)}
          >
            <img src={img.src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
