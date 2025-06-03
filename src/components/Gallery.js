import React from 'react';
import LazyLoad from 'react-lazyload';
import Album from './Album';
import LoadingSpinner from './LoadingSpinner';
import './Gallery.css';

const Gallery = ({
  imagesByFolder,
  loading,
  error,
  onImageClick,
  getGlobalIndex,
  activeSection,
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
        <button onClick={() => window.location.reload()} className="error-retry-button">
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
          />
        </LazyLoad>
      ))}
    </div>
  );
};

export default Gallery;
