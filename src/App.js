import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox'; // new import
import useGallery from './hooks/useGallery';
import useLightbox from './hooks/useLightbox';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import Navigation from './components/Navigation';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  // Gallery state and functionality
  const {
    imagesByFolder,
    allImages,
    albumNames,
    totalImageCount,
    loading,
    error,
    getAlbumImageCount,
    getGlobalIndex,
  } = useGallery();

  // Lightbox state and functionality
  const { lightbox, openLightbox, closeLightbox, showPrevImage, showNextImage } =
    useLightbox(allImages);

  // Intersection observer for active section tracking
  const { activeElement, observe } = useIntersectionObserver({
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0,
  });

  // Get active section ID
  const activeSection = activeElement?.id || '';

  // Handle image click
  const handleImageClick = (image, globalIndex) => {
    openLightbox(image, globalIndex);
  };

  // Handle album navigation click
  const handleAlbumClick = (albumName) => {
    // Optional: Add analytics or other side effects
    console.log(`Navigated to album: ${albumName}`);
  };

  // Set up intersection observer for album sections
  React.useEffect(() => {
    if (!loading && albumNames.length > 0) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        albumNames.forEach((folderName) => {
          const sectionId = folderName.replace(/\s+/g, '-');
          const element = document.getElementById(sectionId);
          if (element) {
            observe(element, sectionId);
          }
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [loading, albumNames, observe]);

  return (
    <ErrorBoundary>
      <div className="App">
        <div className="desktop-layout">
          {/* Left Column - Branding */}
          <aside className="left-column" role="banner">
            <div className="brand-container">
              <div className="brand-letter-group">
                <div className="brand-letter">S</div>
                <div className="brand-name">SEAN</div>
              </div>
              <div className="brand-letter-group">
                <div className="brand-letter">K</div>
                <div className="brand-name">KENNETH</div>
              </div>
              <div className="brand-letter-group">
                <div className="brand-letter">D</div>
                <div className="brand-name">DOHERTY</div>
              </div>
            </div>
          </aside>

          {/* Middle Column - Gallery */}
          <main className="middle-column">
            <ErrorBoundary>
              <Gallery
                imagesByFolder={imagesByFolder}
                loading={loading}
                error={error}
                onImageClick={handleImageClick}
                getGlobalIndex={getGlobalIndex}
                activeSection={activeSection}
              />
            </ErrorBoundary>
          </main>

          {/* Right Column - Navigation */}
          <aside className="right-column" role="navigation" aria-label="Album navigation">
            <ErrorBoundary>
              <Navigation
                albumNames={albumNames}
                activeSection={activeSection}
                onAlbumClick={handleAlbumClick}
                getAlbumImageCount={getAlbumImageCount}
              />
            </ErrorBoundary>
          </aside>
        </div>

        {/* Mobile Layout - Simplified gallery for mobile */}
        <div className="mobile-layout">
          <ErrorBoundary>
            <div className="mobile-gallery">
              <h1 className="mobile-title">Sean Doherty Photos</h1>
              <Gallery
                imagesByFolder={imagesByFolder}
                loading={loading}
                error={error}
                onImageClick={handleImageClick}
                getGlobalIndex={getGlobalIndex}
                activeSection={activeSection}
              />
            </div>
          </ErrorBoundary>
        </div>

        {/* Lightbox */}
        <ErrorBoundary>
          <Lightbox
            isOpen={lightbox.isOpen}
            currentImage={lightbox.currentImage}
            currentIndex={lightbox.currentIndex}
            allImages={allImages}
            onClose={closeLightbox}
            onPrevious={showPrevImage}
            onNext={showNextImage}
          />
        </ErrorBoundary>

        {/* Footer */}
        <Footer />

        {/* Loading indicator for development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="dev-info">
            <div>Images loaded: {totalImageCount}</div>
            <div>Albums: {albumNames.length}</div>
            <div>Active section: {activeSection}</div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
