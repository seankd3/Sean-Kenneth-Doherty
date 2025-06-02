import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', message = '' }) => {
  const sizeClass = `spinner-${size}`;
  
  return (
    <div className={`loading-spinner ${sizeClass}`} role="status" aria-label="Loading">
      <div className="spinner-circle">
        <div className="spinner-inner"></div>
      </div>
      {message && (
        <div className="spinner-message" aria-live="polite">
          {message}
        </div>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;