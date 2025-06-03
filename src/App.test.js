import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

// Mock imageManifest for useGallery
jest.mock('./assets/imageManifest.json', () => ({
  'Test Album': ['image1.jpg', 'image2.jpg'],
}));

describe('App Integration', () => {
  it('renders the gallery and displays albums', async () => {
    render(<App />);
    // Wait for gallery to load
    await waitFor(() => expect(screen.getByLabelText(/Photo gallery/i)).toBeInTheDocument());
    expect(screen.getByText(/Test Album/i)).toBeInTheDocument();
  });

  it('shows loading state initially', () => {
    render(<App />);
    expect(screen.getByText(/Loading gallery/i)).toBeInTheDocument();
  });

  it('handles empty gallery gracefully', async () => {
    // Override the mock to return empty
    jest.doMock('./assets/imageManifest.json', () => ({}), { virtual: true });
    const { unmount } = render(<App />);
    await waitFor(() => expect(screen.getByText(/No Images Found/i)).toBeInTheDocument());
    unmount();
    jest.resetModules();
  });

  // Example: simulate clicking an image (if the UI supports it)
  // it('handles image click', async () => {
  //   render(<App />);
  //   await waitFor(() => expect(screen.getByLabelText(/Photo gallery/i)).toBeInTheDocument());
  //   const image = screen.getAllByRole('img')[0];
  //   fireEvent.click(image);
  //   // Add assertions for lightbox/modal/etc.
  // });
});
