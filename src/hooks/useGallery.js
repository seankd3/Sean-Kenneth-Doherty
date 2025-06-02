import { useState, useEffect } from 'react';
import imageManifest from '../assets/imageManifest.json';

function useGallery() {
  const [imagesByFolder, setImagesByFolder] = useState({});
  const [allImages, setAllImages] = useState([]);
  const [albumNames, setAlbumNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);

        // Construct imagesByFolder from imageManifest
        const folders = {};
        const allImgs = [];

        for (const [folder, images] of Object.entries(imageManifest)) {
          // Map each image filename to its full path relative to assets/images
          const folderImages = images.map(img => `/assets/images/${folder}/${img}`);
          folders[folder] = folderImages;
          allImgs.push(...folderImages);
        }

        setImagesByFolder(folders);
        setAllImages(allImgs);
        setAlbumNames(Object.keys(folders));
      } catch (err) {
        console.error('Error loading images:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const getAlbumImageCount = (albumName) => {
    return imagesByFolder[albumName]?.length || 0;
  };

  const getGlobalIndex = (folderName, localIndex) => {
    let globalIndex = 0;
    const folderNames = Object.keys(imagesByFolder);

    for (const folder of folderNames) {
      if (folder === folderName) {
        return globalIndex + localIndex;
      }
      globalIndex += imagesByFolder[folder].length;
    }

    return 0;
  };

  return {
    imagesByFolder,
    allImages,
    albumNames,
    totalImageCount: allImages.length,
    loading,
    error,
    getAlbumImageCount,
    getGlobalIndex
  };
}

export default useGallery;