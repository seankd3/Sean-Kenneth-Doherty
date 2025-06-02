import React from 'react';
import LazyLoad from 'react-lazyload';
<<<<<<< HEAD
import Album from './Album';
import LoadingSpinner from './LoadingSpinner';
import './Gallery.css';

const Gallery = ({ 
  imagesByFolder, 
  loading, 
  error, 
  onImageClick, 
  getGlobalIndex,
  activeSection 
}) => {
  if (loading) {
    return (
      <div className="gallery-loading">
        <LoadingSpinner />
        <p>Loading gallery...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gallery-error">
        <h3>Error Loading Gallery</h3>
        <p>We encountered an issue loading the images. Please try refreshing the page.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="error-retry-button"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!imagesByFolder || Object.keys(imagesByFolder).length === 0) {
    return (
      <div className="gallery-empty">
        <h3>No Images Found</h3>
        <p>No images are currently available in the gallery.</p>
      </div>
    );
  }

  return (
    <div className="gallery-container" role="main" aria-label="Photo gallery">
      {Object.entries(imagesByFolder).map(([folderName, images]) => (
        <LazyLoad 
          key={folderName} 
          height={400} 
          offset={200} 
          once
          placeholder={
            <div className="album-placeholder">
              <div className="album-placeholder-title">{folderName}</div>
              <div className="album-placeholder-content">Loading album...</div>
            </div>
          }
        >
          <Album
            key={folderName}
            folderName={folderName}
            images={images}
            onImageClick={onImageClick}
            getGlobalIndex={getGlobalIndex}
            isActive={activeSection === folderName.replace(/\s+/g, '-')}
=======

function Gallery({ images, onImageClick }) {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <LazyLoad key={index} height={200} offset={100} once>
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            onClick={() => onImageClick(image, index, images)}
>>>>>>> 661df0b9b40413ded4980197e2216c537f322dd2
          />
        </LazyLoad>
      ))}
    </div>
  );
<<<<<<< HEAD
};

export default Gallery;
=======
}

export default Gallery;
>>>>>>> 661df0b9b40413ded4980197e2216c537f322dd2
