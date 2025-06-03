import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Gallery from './Gallery';

describe('Gallery', () => {
  const mockOnImageClick = jest.fn();
  const mockGetGlobalIndex = jest.fn();
  const imagesByFolder = {
    'Test Album': [
      '/assets/images/Test Album/image1.jpg',
      '/assets/images/Test Album/image2.jpg',
    ],
  };

  it('renders loading state', () => {
    render(
      <Gallery
        imagesByFolder={{}}
        loading={true}
        error={null}
        onImageClick={mockOnImageClick}
        getGlobalIndex={mockGetGlobalIndex}
        activeSection=""
      />
    );
    expect(screen.getByText(/Loading gallery/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    render(
      <Gallery
        imagesByFolder={{}}
        loading={false}
        error="Some error"
        onImageClick={mockOnImageClick}
        getGlobalIndex={mockGetGlobalIndex}
        activeSection=""
      />
    );
    expect(screen.getByText(/Error Loading Gallery/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Retry/i));
  });

  it('renders empty state', () => {
    render(
      <Gallery
        imagesByFolder={{}}
        loading={false}
        error={null}
        onImageClick={mockOnImageClick}
        getGlobalIndex={mockGetGlobalIndex}
        activeSection=""
      />
    );
    expect(screen.getByText(/No Images Found/i)).toBeInTheDocument();
  });

  it('renders albums and passes props', () => {
    render(
      <Gallery
        imagesByFolder={imagesByFolder}
        loading={false}
        error={null}
        onImageClick={mockOnImageClick}
        getGlobalIndex={mockGetGlobalIndex}
        activeSection="Test-Album"
      />
    );
    expect(screen.getByLabelText(/Photo gallery/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Album/i)).toBeInTheDocument();
  });
});