import React, { useState } from 'react';
import './App.css';
<<<<<<< HEAD
import ErrorBoundary from './components/ErrorBoundary';
import Gallery from './components/Gallery';
import Navigation from './components/Navigation';
import Lightbox from './components/Lightbox';
import Footer from './Footer';
import useGallery from './hooks/useGallery';
import useLightbox from './hooks/useLightbox';
import useIntersectionObserver from './hooks/useIntersectionObserver';

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
    getGlobalIndex
  } = useGallery();
=======
import Header from './Header';
import Footer from './Footer';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox'; // new import

function importAll(r) {
  return r.keys().map(r);
}

const bigBendImages = importAll(require.context('./images/Big Bend', false, /\.(webp)$/));
const Starbase = importAll(require.context('./images/Starbase', false, /\.(webp)$/));
const StarbaseV = importAll(require.context('./images/StarbaseV', false, /\.(webp)$/));

function App() {
  // Include gallery images inside lightbox state
  const [lightbox, setLightbox] = useState({ isOpen: false, imgSrc: '', currentIndex: 0, images: [] });
>>>>>>> 661df0b9b40413ded4980197e2216c537f322dd2

  // Lightbox state and functionality
  const {
    lightbox,
    openLightbox,
    closeLightbox,
    showPrevImage,
    showNextImage
  } = useLightbox(allImages);

  // Intersection observer for active section tracking
  const { activeElement, observe } = useIntersectionObserver({
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
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
        albumNames.forEach(folderName => {
          const sectionId = folderName.replace(/\s+/g, '-');
          const element = document.getElementById(sectionId);
          if (element) {
            observe(element, sectionId);
          }
        });
      }, 100);

      return () => clearTimeout(timer);
    }
<<<<<<< HEAD
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
=======

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [lightbox.isOpen]);

  const openLightbox = (imgSrc, index, galleryImages) => {
    setLightbox({ isOpen: true, imgSrc, currentIndex: index, images: galleryImages });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, imgSrc: '', currentIndex: 0, images: [] });
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    const galleryImages = lightbox.images;
    const newIndex = (lightbox.currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightbox({ ...lightbox, imgSrc: galleryImages[newIndex], currentIndex: newIndex });
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    const galleryImages = lightbox.images;
    const newIndex = (lightbox.currentIndex + 1) % galleryImages.length;
    setLightbox({ ...lightbox, imgSrc: galleryImages[newIndex], currentIndex: newIndex });
  };

  return (
    <div className="App">
      <Header/>
      <h2>STARBASE</h2>
      <Gallery images={StarbaseV} onImageClick={(imgSrc, index) => openLightbox(imgSrc, index, StarbaseV)} />
      <Gallery images={Starbase} onImageClick={(imgSrc, index) => openLightbox(imgSrc, index, Starbase)} />

      {/* Embedded video section */}
      <h2>2024 STARBASE REEL</h2>
      <div className="video-container">
        <iframe 
          width="800"
          height="450"
          src="https://www.youtube.com/embed/6leWkoZmYps" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      <h2>BIG BEND NATIONAL PARK</h2>
      <Gallery images={bigBendImages} onImageClick={(imgSrc, index) => openLightbox(imgSrc, index, bigBendImages)} />
      <section className="about-me" style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>About Me</h1>
        <p>I'm Sean Doherty, a photographer obsessed with the intersection of art and technologly. My work celebrates the space industry and contrasts that with the beauty of our natual world. I often shoot on a film, on a mission to pay homage to the great photographers who captured our most inconic images durring the 1960s space race.</p>
      </section>

      <Lightbox
        lightbox={lightbox}
        closeLightbox={closeLightbox}
        showPrevImage={showPrevImage}
        showNextImage={showNextImage}
      />
      <Footer />
    </div>
>>>>>>> 661df0b9b40413ded4980197e2216c537f322dd2
  );
}

export default App;