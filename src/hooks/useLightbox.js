import { useState, useEffect, useCallback } from 'react';

const useLightbox = (allImages = []) => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: null,
    currentIndex: 0,
  });

  // Open lightbox with specific image
  const openLightbox = useCallback((image, index) => {
    setLightbox({
      isOpen: true,
      currentImage: image,
      currentIndex: index,
    });
  }, []);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightbox({
      isOpen: false,
      currentImage: null,
      currentIndex: 0,
    });
  }, []);

  // Navigate to previous image
  const showPrevImage = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (allImages.length === 0) return;

      const newIndex = (lightbox.currentIndex - 1 + allImages.length) % allImages.length;
      const newImage = allImages[newIndex];

      setLightbox((prev) => ({
        ...prev,
        currentImage: newImage,
        currentIndex: newIndex,
      }));
    },
    [lightbox.currentIndex, allImages]
  );

  // Navigate to next image
  const showNextImage = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      if (allImages.length === 0) return;

      const newIndex = (lightbox.currentIndex + 1) % allImages.length;
      const newImage = allImages[newIndex];

      setLightbox((prev) => ({
        ...prev,
        currentImage: newImage,
        currentIndex: newIndex,
      }));
    },
    [lightbox.currentIndex, allImages]
  );

  // Navigate to specific image by index
  const goToImage = useCallback(
    (index) => {
      if (index < 0 || index >= allImages.length) return;

      const image = allImages[index];
      setLightbox((prev) => ({
        ...prev,
        currentImage: image,
        currentIndex: index,
      }));
    },
    [allImages]
  );

  // Handle body scroll lock when lightbox is open
  useEffect(() => {
    if (lightbox.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightbox.isOpen]);

  // Handle wheel scroll navigation
  useEffect(() => {
    const handleScroll = (e) => {
      if (!lightbox.isOpen) return;

      e.preventDefault();
      if (e.deltaY < 0) {
        showPrevImage(e);
      } else if (e.deltaY > 0) {
        showNextImage(e);
      }
    };

    if (lightbox.isOpen) {
      window.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [lightbox.isOpen, showPrevImage, showNextImage]);

  return {
    lightbox,
    openLightbox,
    closeLightbox,
    showPrevImage,
    showNextImage,
    goToImage,
    hasNext: lightbox.currentIndex < allImages.length - 1,
    hasPrev: lightbox.currentIndex > 0,
    totalImages: allImages.length,
  };
};

export default useLightbox;
