/**
 * AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
 * Run `npm run sync-galleries` to regenerate
 */

export interface GalleryImage {
  filename: string;
  src: string;
  title: string | null;
  location: string | null;
  date: string | null;
  exif: {
    camera: string | null;
    model: string | null;
    iso: number | null;
    aperture: string | null;
    shutter: string | null;
    focalLength: string | null;
  } | null;
}

export interface GalleryConfig {
  id: string;
  path: string;
  title: string;
  description: string;
  layout: 'grid' | 'masonry' | 'slideshow' | 'filmstrip';
  sortBy: 'dateTaken' | 'filename' | 'manual';
  sortDirection: 'asc' | 'desc';
  display: {
    metadata: boolean;
    captions: boolean;
    exif: boolean;
  };
  cover: {
    image?: string;
    title?: string;
    crop?: 'center' | 'top' | 'bottom';
  };
  heroImage?: string;
  images: GalleryImage[];
  subGalleries: GalleryConfig[];
}

export interface GlobalConfig {
  heroes: Record<string, {
    image: string;
    overlay?: 'dark' | 'light';
    align?: 'center' | 'left' | 'right';
    title?: string;
  }>;
  categories: Record<string, {
    gallery?: string;
    useCover?: boolean;
    useHero?: boolean;
  }>;
}

export const galleries: GalleryConfig[] = [
  {
    "id": "landscapes-west",
    "path": "/images/galleries/landscapes-west",
    "title": "American West",
    "description": "Landscapes from Arizona, Utah, and West Texas",
    "layout": "masonry",
    "sortBy": "filename",
    "sortDirection": "asc",
    "display": {
      "metadata": true,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "landscape-1.jpg",
        "src": "/images/galleries/landscapes-west/landscape-1.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "landscape-2.jpg",
        "src": "/images/galleries/landscapes-west/landscape-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "landscape-3.jpg",
        "src": "/images/galleries/landscapes-west/landscape-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "landscape-4.jpg",
        "src": "/images/galleries/landscapes-west/landscape-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "landscapes-hero.jpg",
        "src": "/images/galleries/landscapes-west/landscapes-hero.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {
      "title": "Desert Vista",
      "image": "_cover.jpg"
    },
    "heroImage": "_hero.jpg"
  },
  {
    "id": "starbase-flight-9",
    "path": "/images/galleries/starbase-flight-9",
    "title": "Starbase: Flight 9",
    "description": "SpaceX Starship IFT-9 launch documentation",
    "layout": "grid",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": true,
      "captions": true,
      "exif": true
    },
    "images": [
      {
        "filename": "aerospace-1.jpg",
        "src": "/images/galleries/starbase-flight-9/aerospace-1.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": {
          "camera": null,
          "model": null,
          "iso": null,
          "aperture": null,
          "shutter": null,
          "focalLength": null
        }
      },
      {
        "filename": "aerospace-2.jpg",
        "src": "/images/galleries/starbase-flight-9/aerospace-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": {
          "camera": null,
          "model": null,
          "iso": null,
          "aperture": null,
          "shutter": null,
          "focalLength": null
        }
      },
      {
        "filename": "aerospace-3.jpg",
        "src": "/images/galleries/starbase-flight-9/aerospace-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": {
          "camera": null,
          "model": null,
          "iso": null,
          "aperture": null,
          "shutter": null,
          "focalLength": null
        }
      },
      {
        "filename": "aerospace-4.jpg",
        "src": "/images/galleries/starbase-flight-9/aerospace-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": {
          "camera": null,
          "model": null,
          "iso": null,
          "aperture": null,
          "shutter": null,
          "focalLength": null
        }
      },
      {
        "filename": "aerospace-hero.jpg",
        "src": "/images/galleries/starbase-flight-9/aerospace-hero.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": {
          "camera": null,
          "model": null,
          "iso": null,
          "aperture": null,
          "shutter": null,
          "focalLength": null
        }
      }
    ],
    "subGalleries": [],
    "cover": {
      "title": "Night Launch",
      "image": "_cover.jpg"
    },
    "heroImage": "_hero.jpg"
  },
  {
    "id": "weddings-lauren-2024",
    "path": "/images/galleries/weddings-lauren-2024",
    "title": "Lauren & Mike Wedding",
    "description": "A beautiful winter wedding in Austin, Texas",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": true,
      "captions": true,
      "exif": false
    },
    "images": [
      {
        "filename": "wedding-1.jpg",
        "src": "/images/galleries/weddings-lauren-2024/wedding-1.jpg",
        "title": "First Kiss",
        "location": "Outdoor Garden",
        "date": null,
        "exif": null
      },
      {
        "filename": "wedding-2.jpg",
        "src": "/images/galleries/weddings-lauren-2024/wedding-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "wedding-3.jpg",
        "src": "/images/galleries/weddings-lauren-2024/wedding-3.jpg",
        "title": "The Dress",
        "location": "Bridal Suite",
        "date": null,
        "exif": null
      },
      {
        "filename": "wedding-4.jpg",
        "src": "/images/galleries/weddings-lauren-2024/wedding-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "wedding-hero.jpg",
        "src": "/images/galleries/weddings-lauren-2024/wedding-hero.jpg",
        "title": "The Ceremony",
        "location": "The Vineyards at Chappel Lodge, Austin, TX",
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {
      "title": "Featured Moment",
      "image": "_cover.jpg"
    },
    "heroImage": "_hero.jpg"
  }
];

export const globalConfig: GlobalConfig = {
  "heroes": {
    "home": {
      "image": "/images/galleries/starbase-flight-9/_hero.jpg",
      "overlay": "dark",
      "align": "center"
    },
    "weddings": {
      "image": "/images/galleries/weddings-lauren-2024/_hero.jpg",
      "title": "Wedding Photography"
    },
    "aerospace": {
      "image": "/images/galleries/starbase-flight-9/_hero.jpg"
    },
    "events": {
      "image": "/images/galleries/beach-house-2023/_cover.jpg"
    },
    "landscapes": {
      "image": "/images/galleries/landscapes-west/_hero.jpg"
    }
  },
  "categories": {
    "weddings": {
      "gallery": "weddings-lauren-2024",
      "useCover": true
    },
    "aerospace": {
      "gallery": "starbase-flight-9",
      "useHero": true
    },
    "events": {
      "gallery": "beach-house-2023",
      "useCover": true
    },
    "landscapes": {
      "gallery": "landscapes-west",
      "useHero": false,
      "useCover": true
    }
  }
};

// Helper functions
export function getGalleryById(id: string): GalleryConfig | undefined {
  function findInGalleries(gals: GalleryConfig[]): GalleryConfig | undefined {
    for (const g of gals) {
      if (g.id === id) return g;
      if (g.subGalleries.length > 0) {
        const found = findInGalleries(g.subGalleries);
        if (found) return found;
      }
    }
    return undefined;
  }
  return findInGalleries(galleries);
}

export function getHeroImage(page: string): string | undefined {
  return globalConfig.heroes[page]?.image;
}

export function getAllGalleryIds(): string[] {
  function collectIds(gals: GalleryConfig[]): string[] {
    return gals.flatMap(g => [g.id, ...collectIds(g.subGalleries)]);
  }
  return collectIds(galleries);
}