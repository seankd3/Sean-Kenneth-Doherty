import React, { useEffect } from 'react';
import useKeyboardNavigation from '../hooks/useKeyboardNavigation';
import './Lightbox.css';

const Lightbox = ({
  isOpen,
  currentImage,
  currentIndex,
  allImages,
  onClose,
  onPrevious,
  onNext,
}) => {
  // Keyboard navigation setup
  useKeyboardNavigation({
    isActive: isOpen,
    onEscape: onClose,
    onArrowLeft: onPrevious,
    onArrowRight: onNext,
    onHome: () => onNext && onNext(0), // Go to first
    onEnd: () => onNext && onNext(allImages.length - 1), // Go to last
  });

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !currentImage) {
    return null;
  }

  const hasNext = currentIndex < allImages.length - 1;
  const hasPrev = currentIndex > 0;

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      aria-describedby="lightbox-instructions"
    >
      <div className="lightbox-overlay" />

      {/* Screen reader instructions */}
      <div id="lightbox-instructions" className="sr-only">
        Use arrow keys to navigate, Escape to close, Home/End to go to first/last image
      </div>

      {/* Close button */}
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close lightbox"
        type="button"
      >
        &times;
      </button>

      {/* Image counter */}
      <div className="lightbox-counter" aria-live="polite">
        {currentIndex + 1} of {allImages.length}
      </div>

      {/* Main content */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={currentImage.src}
          alt={currentImage.alt || `Image ${currentIndex + 1}`}
          className="lightbox-image"
          loading="eager"
        />

        {/* Navigation buttons */}
        {hasPrev && (
          <button
            className="lightbox-nav lightbox-nav-prev"
            onClick={onPrevious}
            aria-label="Previous image"
            type="button"
          >
            <span aria-hidden="true">&#10094;</span>
          </button>
        )}

        {hasNext && (
          <button
            className="lightbox-nav lightbox-nav-next"
            onClick={onNext}
            aria-label="Next image"
            type="button"
          >
            <span aria-hidden="true">&#10095;</span>
          </button>
        )}
      </div>

      {/* Loading indicator for next/prev images */}
      <div className="lightbox-preload">
        {hasNext && <link rel="preload" as="image" href={allImages[currentIndex + 1]?.src} />}
        {hasPrev && <link rel="preload" as="image" href={allImages[currentIndex - 1]?.src} />}
      </div>
    </div>
  );
};

export default Lightbox;
