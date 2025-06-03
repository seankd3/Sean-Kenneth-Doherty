# Component and Hook API Documentation

This document provides API details for all major components, custom hooks, and utility functions in the project.

---

## Components

### Album

**File:** `src/components/Album.js`

**Description:**  
Displays a photo album grid for a given folder.

**Props:**
- `folderName` (string): Name of the album/folder.
- `images` (array): List of image objects/paths.
- `onImageClick` (function): Handler for image click events.
- `getGlobalIndex` (function): Maps local image index to global index.
- `isActive` (boolean): Whether the album is currently active.

---

### ErrorBoundary

**File:** `src/components/ErrorBoundary.js`

**Description:**  
Catches JavaScript errors in child components and displays a fallback UI.

**Props:**
- `children` (ReactNode): Components to render within the boundary.

---

### Gallery

**File:** `src/components/Gallery.js`

**Description:**  
Displays a gallery of images, grouped by album.

**Props:**
- `imagesByFolder` (object): Mapping of album names to image arrays.
- `onImageClick` (function): Handler for image click events.
- `activeAlbum` (string): Currently selected album.
- `getGlobalIndex` (function): Maps local image index to global index.

---

### Lightbox

**File:** `src/components/Lightbox.js`

**Description:**  
Displays a modal lightbox for viewing images.

**Props:**
- `images` (array): List of images to display.
- `activeIndex` (number): Index of the currently displayed image.
- `onClose` (function): Handler to close the lightbox.

---

### LoadingSpinner

**File:** `src/components/LoadingSpinner.js`

**Description:**  
Shows a loading spinner with optional message.

**Props:**
- `size` (string, default: 'medium'): Spinner size.
- `message` (string): Optional loading message.

---

### Navigation

**File:** `src/components/Navigation.js`

**Description:**  
Navigation bar for switching between albums.

**Props:**
- `albumNames` (array): List of album names.
- `activeSection` (string): Currently active section.
- `onAlbumClick` (function): Handler for album selection.
- `getAlbumImageCount` (function): Returns image count for an album.

---

### Footer

**File:** `src/Footer.js`

**Description:**  
Site footer with copyright.

**Props:** None

---

### Header

**File:** `src/Header.js`

**Description:**  
Site header with title/logo.

**Props:** None

---

## Custom Hooks

### useGallery

**File:** `src/hooks/useGallery.js`

**Description:**  
Manages loading and organizing images by album.

**Returns:**
- `imagesByFolder` (object): Album-to-images mapping.
- `getGlobalIndex` (function): Maps local to global image index.

---

### useIntersectionObserver

**File:** `src/hooks/useIntersectionObserver.js`

**Description:**  
Tracks visibility of elements in the viewport.

**Parameters:**
- `options` (object): Intersection observer options.

**Returns:**
- `activeElement` (DOM node): Currently visible element.
- `observe` (function): Ref callback to observe elements.

---

### useKeyboardNavigation

**File:** `src/hooks/useKeyboardNavigation.js`

**Description:**  
Handles keyboard navigation for galleries and modals.

**Parameters:**
- `handlers` (object): Key handler functions.

**Returns:**
- Navigation handler functions for gallery and modal.

---

### useLightbox

**File:** `src/hooks/useLightbox.js`

**Description:**  
Manages lightbox state and navigation.

**Parameters:**
- `allImages` (array): All images to display.

**Returns:**
- Lightbox state and navigation functions.

---

## Utility Functions

### reportWebVitals

**File:** `src/reportWebVitals.js`

**Description:**  
Reports web performance metrics (for analytics).

**Parameters:**
- `onPerfEntry` (function): Callback for performance entries.

---

## Usage Examples

See the main application code and test files for usage examples of each component and hook.