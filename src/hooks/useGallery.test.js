import { renderHook, act } from '@testing-library/react';
import useGallery from './useGallery';

// Mock imageManifest.json
jest.mock('../assets/imageManifest.json', () => ({
  'Test Album': ['image1.jpg', 'image2.jpg'],
  'Another Album': ['image3.jpg'],
}));

describe('useGallery', () => {
  it('initializes with loading state', () => {
    const { result } = renderHook(() => useGallery());
    // Immediately after render, loading should be true
    expect(result.current.loading).toBe(true);
  });

  it('loads images and organizes by folder', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGallery());
    await waitForNextUpdate(); // Wait for useEffect to finish

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.imagesByFolder['Test Album']).toEqual([
      '/assets/images/Test Album/image1.jpg',
      '/assets/images/Test Album/image2.jpg',
    ]);
    expect(result.current.albumNames).toContain('Test Album');
    expect(result.current.totalImageCount).toBe(3);
  });

  it('getAlbumImageCount returns correct count', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGallery());
    await waitForNextUpdate();
    expect(result.current.getAlbumImageCount('Test Album')).toBe(2);
    expect(result.current.getAlbumImageCount('Nonexistent')).toBe(0);
  });

  it('getGlobalIndex returns correct index', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGallery());
    await waitForNextUpdate();
    // Test Album has 2 images, Another Album has 1
    expect(result.current.getGlobalIndex('Test Album', 1)).toBe(1);
    expect(result.current.getGlobalIndex('Another Album', 0)).toBe(2);
  });
});