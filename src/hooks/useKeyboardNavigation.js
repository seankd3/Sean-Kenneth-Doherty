import { useEffect, useCallback } from 'react';

const useKeyboardNavigation = ({
  isActive = true,
  onEscape,
  onArrowLeft,
  onArrowRight,
  onArrowUp,
  onArrowDown,
  onSpace,
  onEnter,
  onHome,
  onEnd,
  preventDefault = true,
}) => {
  const handleKeyDown = useCallback(
    (event) => {
      if (!isActive) return;

      const { key, code } = event;

      // Prevent default behavior if specified
      if (preventDefault) {
        const handledKeys = [
          'Escape',
          'ArrowLeft',
          'ArrowRight',
          'ArrowUp',
          'ArrowDown',
          'Space',
          'Enter',
          'Home',
          'End',
        ];

        if (handledKeys.includes(key) || handledKeys.includes(code)) {
          event.preventDefault();
        }
      }

      switch (key) {
        case 'Escape':
          onEscape?.(event);
          break;
        case 'ArrowLeft':
          onArrowLeft?.(event);
          break;
        case 'ArrowRight':
          onArrowRight?.(event);
          break;
        case 'ArrowUp':
          onArrowUp?.(event);
          break;
        case 'ArrowDown':
          onArrowDown?.(event);
          break;
        case ' ':
        case 'Space':
          onSpace?.(event);
          break;
        case 'Enter':
          onEnter?.(event);
          break;
        case 'Home':
          onHome?.(event);
          break;
        case 'End':
          onEnd?.(event);
          break;
        default:
          break;
      }
    },
    [
      isActive,
      onEscape,
      onArrowLeft,
      onArrowRight,
      onArrowUp,
      onArrowDown,
      onSpace,
      onEnter,
      onHome,
      onEnd,
      preventDefault,
    ]
  );

  useEffect(() => {
    if (isActive) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, handleKeyDown]);

  // Return helper functions for common navigation patterns
  return {
    // Helper for lightbox navigation
    setupLightboxNavigation: (
      closeLightbox,
      showPrevImage,
      showNextImage,
      goToFirst,
      goToLast
    ) => ({
      onEscape: closeLightbox,
      onArrowLeft: showPrevImage,
      onArrowRight: showNextImage,
      onHome: goToFirst,
      onEnd: goToLast,
    }),

    // Helper for gallery navigation
    setupGalleryNavigation: (scrollToNext, scrollToPrev, scrollToTop, scrollToBottom) => ({
      onArrowDown: scrollToNext,
      onArrowUp: scrollToPrev,
      onHome: scrollToTop,
      onEnd: scrollToBottom,
    }),

    // Helper for modal navigation
    setupModalNavigation: (closeModal, confirmAction) => ({
      onEscape: closeModal,
      onEnter: confirmAction,
    }),
  };
};

export default useKeyboardNavigation;
