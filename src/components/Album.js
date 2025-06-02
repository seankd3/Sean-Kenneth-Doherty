import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import './Album.css';

const Album = ({ 
  folderName, 
  images, 
  onImageClick, 
  getGlobalIndex, 
  isActive 
}) => {
  const [imageLoadErrors, setImageLoadErrors] = useState(new Set());

  const handleImageError = (imageIndex) => {
    setImageLoadErrors(prev => new Set([...prev, imageIndex]));
  };

  const handleImageLoad = (imageIndex) => {
    setImageLoadErrors(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageIndex);
      return newSet;
    });
  };

  const sectionId = folderName.replace(/\s+/g, '-');

  return (
    <section 
      id={sectionId} 
      className={`album-section ${isActive ? 'active' : ''}`}
      aria-labelledby={`${sectionId}-title`}
    >
      <h2 
        id={`${sectionId}-title`} 
        className="album-title"
      >
        {folderName}
        <span className="album-count" aria-label={`${images.length} images`}>
          ({images.length})
        </span>
      </h2>
      
      <div 
        className="album-gallery" 
        role="grid" 
        aria-label={`${folderName} photo grid`}
      >
        {images.map((image, index) => {
console.log('Image URL used for src:', image);
          console.log('Rendering image:', image, 'Type:', typeof image);
          const globalIndex = getGlobalIndex(image);
          const hasError = imageLoadErrors.has(index);
          
          return (
            <div
              key={`${folderName}-${index}`}
              className="album-image-container"
              role="gridcell"
            >
              <LazyLoad
                offset={100}
                once
                placeholder={
                  <div className="image-placeholder">
                    <div className="image-placeholder-content">
                      <div className="image-placeholder-icon">📷</div>
                      <div className="image-placeholder-text">Loading...</div>
                    </div>
                  </div>
                }
              >
                {hasError ? (
                  <div className="image-error">
                    <div className="image-error-content">
                      <div className="image-error-icon">⚠️</div>
                      <div className="image-error-text">Failed to load</div>
                      <button
                        className="image-retry-button"
                        onClick={() => handleImageLoad(index)}
                        aria-label={`Retry loading image ${index + 1}`}
                      >
                        Retry
                      </button>
                    </div>
                  </div>
                ) : (
                  <img
                    src={image}
                    alt={image.alt || `${folderName} - Image ${index + 1}`}
                    className="album-image"
                    onClick={() => onImageClick(image, globalIndex)}
                    onError={() => handleImageError(index)}
                    onLoad={() => handleImageLoad(index)}
                    loading="lazy"
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${folderName} image ${index + 1} in lightbox`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onImageClick(image, globalIndex);
                      }
                    }}
                  />
                )}
              </LazyLoad>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Album;