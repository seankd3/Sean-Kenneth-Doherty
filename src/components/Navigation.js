import React from 'react';
import './Navigation.css';

const Navigation = ({ albumNames, activeSection, onAlbumClick, getAlbumImageCount }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAlbumClick = (folderName, e) => {
    e.preventDefault();
    const sectionId = folderName.replace(/\s+/g, '-');
    scrollToSection(sectionId);
    onAlbumClick?.(folderName);
  };

  const handleKeyDown = (folderName, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleAlbumClick(folderName, e);
    }
  };

  if (!albumNames || albumNames.length === 0) {
    return (
      <nav className="album-navigation" aria-label="Album navigation">
        <h3 className="nav-title">Albums</h3>
        <p className="nav-empty">No albums available</p>
      </nav>
    );
  }

  return (
    <nav className="album-navigation" aria-label="Album navigation">
      <h3 className="nav-title">Albums</h3>
      <ul className="album-list">
        {albumNames.map((folderName) => {
          const sectionId = folderName.replace(/\s+/g, '-');
          const isActive = activeSection === sectionId;
          const imageCount = getAlbumImageCount(folderName);

          return (
            <li key={folderName}>
              <a
                href={`#${sectionId}`}
                onClick={(e) => handleAlbumClick(folderName, e)}
                onKeyDown={(e) => handleKeyDown(folderName, e)}
                className={`album-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                aria-describedby={`${sectionId}-count`}
                role="button"
                tabIndex={0}
              >
                <span className="album-link-text">{folderName}</span>
                <span
                  id={`${sectionId}-count`}
                  className="album-link-count"
                  aria-label={`${imageCount} images`}
                >
                  {imageCount}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Quick stats */}
      <div className="nav-stats" aria-label="Gallery statistics">
        <div className="nav-stat">
          <span className="nav-stat-label">Total Albums:</span>
          <span className="nav-stat-value">{albumNames.length}</span>
        </div>
        <div className="nav-stat">
          <span className="nav-stat-label">Total Images:</span>
          <span className="nav-stat-value">
            {albumNames.reduce((total, album) => total + getAlbumImageCount(album), 0)}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
