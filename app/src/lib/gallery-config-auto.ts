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
    "id": "abstract",
    "path": "/images/galleries/abstract",
    "title": "Abstract",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "20220701-r5__1550-pano.jpg",
        "src": "/images/galleries/abstract/20220701-r5__1550-pano.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 19:39:25",
        "exif": null
      },
      {
        "filename": "20220701-r5__1560.jpg",
        "src": "/images/galleries/abstract/20220701-r5__1560.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 19:39:43",
        "exif": null
      },
      {
        "filename": "20220701-r5__1564.jpg",
        "src": "/images/galleries/abstract/20220701-r5__1564.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 19:39:54",
        "exif": null
      },
      {
        "filename": "20220701-r5__1565.jpg",
        "src": "/images/galleries/abstract/20220701-r5__1565.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 19:40:03",
        "exif": null
      },
      {
        "filename": "20220701-r5__1643.jpg",
        "src": "/images/galleries/abstract/20220701-r5__1643.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:40:01",
        "exif": null
      },
      {
        "filename": "20220701-r5__1647.jpg",
        "src": "/images/galleries/abstract/20220701-r5__1647.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:40:10",
        "exif": null
      },
      {
        "filename": "20220701-r5__1648.jpg",
        "src": "/images/galleries/abstract/20220701-r5__1648.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:40:13",
        "exif": null
      },
      {
        "filename": "20220701-r5__1649.jpg",
        "src": "/images/galleries/abstract/20220701-r5__1649.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:40:17",
        "exif": null
      },
      {
        "filename": "20220701-r5__1650.jpg",
        "src": "/images/galleries/abstract/20220701-r5__1650.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:40:22",
        "exif": null
      },
      {
        "filename": "20220701-r5__1668.jpg",
        "src": "/images/galleries/abstract/20220701-r5__1668.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:54:08",
        "exif": null
      },
      {
        "filename": "fleeting_time-1.jpg",
        "src": "/images/galleries/abstract/fleeting_time-1.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 19:39:43",
        "exif": null
      },
      {
        "filename": "fleeting_time-10.jpg",
        "src": "/images/galleries/abstract/fleeting_time-10.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:40:38",
        "exif": null
      },
      {
        "filename": "fleeting_time-11.jpg",
        "src": "/images/galleries/abstract/fleeting_time-11.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:54:08",
        "exif": null
      },
      {
        "filename": "fleeting_time-12.jpg",
        "src": "/images/galleries/abstract/fleeting_time-12.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:11:19",
        "exif": null
      },
      {
        "filename": "fleeting_time-13.jpg",
        "src": "/images/galleries/abstract/fleeting_time-13.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:15:36",
        "exif": null
      },
      {
        "filename": "fleeting_time-14.jpg",
        "src": "/images/galleries/abstract/fleeting_time-14.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:17:38",
        "exif": null
      },
      {
        "filename": "fleeting_time-15.jpg",
        "src": "/images/galleries/abstract/fleeting_time-15.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:17:40",
        "exif": null
      },
      {
        "filename": "fleeting_time-16.jpg",
        "src": "/images/galleries/abstract/fleeting_time-16.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:17:41",
        "exif": null
      },
      {
        "filename": "fleeting_time-17.jpg",
        "src": "/images/galleries/abstract/fleeting_time-17.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:17:58",
        "exif": null
      },
      {
        "filename": "fleeting_time-18.jpg",
        "src": "/images/galleries/abstract/fleeting_time-18.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:18:24",
        "exif": null
      },
      {
        "filename": "fleeting_time-19.jpg",
        "src": "/images/galleries/abstract/fleeting_time-19.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:18:28",
        "exif": null
      },
      {
        "filename": "fleeting_time-2.jpg",
        "src": "/images/galleries/abstract/fleeting_time-2.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 19:40:03",
        "exif": null
      },
      {
        "filename": "fleeting_time-20.jpg",
        "src": "/images/galleries/abstract/fleeting_time-20.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:18:35",
        "exif": null
      },
      {
        "filename": "fleeting_time-21.jpg",
        "src": "/images/galleries/abstract/fleeting_time-21.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:18:52",
        "exif": null
      },
      {
        "filename": "fleeting_time-22.jpg",
        "src": "/images/galleries/abstract/fleeting_time-22.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:19:12",
        "exif": null
      },
      {
        "filename": "fleeting_time-23.jpg",
        "src": "/images/galleries/abstract/fleeting_time-23.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:19:12",
        "exif": null
      },
      {
        "filename": "fleeting_time-24.jpg",
        "src": "/images/galleries/abstract/fleeting_time-24.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:32",
        "exif": null
      },
      {
        "filename": "fleeting_time-25.jpg",
        "src": "/images/galleries/abstract/fleeting_time-25.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:21:43",
        "exif": null
      },
      {
        "filename": "fleeting_time-26.jpg",
        "src": "/images/galleries/abstract/fleeting_time-26.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:23:10",
        "exif": null
      },
      {
        "filename": "fleeting_time-27.jpg",
        "src": "/images/galleries/abstract/fleeting_time-27.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:23:11",
        "exif": null
      },
      {
        "filename": "fleeting_time-28.jpg",
        "src": "/images/galleries/abstract/fleeting_time-28.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:24:09",
        "exif": null
      },
      {
        "filename": "fleeting_time-29.jpg",
        "src": "/images/galleries/abstract/fleeting_time-29.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:26:41",
        "exif": null
      },
      {
        "filename": "fleeting_time-3.jpg",
        "src": "/images/galleries/abstract/fleeting_time-3.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:40:01",
        "exif": null
      },
      {
        "filename": "fleeting_time-30.jpg",
        "src": "/images/galleries/abstract/fleeting_time-30.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:11:42",
        "exif": null
      },
      {
        "filename": "fleeting_time-31.jpg",
        "src": "/images/galleries/abstract/fleeting_time-31.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:11:59",
        "exif": null
      },
      {
        "filename": "fleeting_time-32.jpg",
        "src": "/images/galleries/abstract/fleeting_time-32.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:12:12",
        "exif": null
      },
      {
        "filename": "fleeting_time-33.jpg",
        "src": "/images/galleries/abstract/fleeting_time-33.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:12:34",
        "exif": null
      },
      {
        "filename": "fleeting_time-34.jpg",
        "src": "/images/galleries/abstract/fleeting_time-34.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:12:55",
        "exif": null
      },
      {
        "filename": "fleeting_time-35.jpg",
        "src": "/images/galleries/abstract/fleeting_time-35.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:13:16",
        "exif": null
      },
      {
        "filename": "fleeting_time-36.jpg",
        "src": "/images/galleries/abstract/fleeting_time-36.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:15:21",
        "exif": null
      },
      {
        "filename": "fleeting_time-37.jpg",
        "src": "/images/galleries/abstract/fleeting_time-37.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:16:36",
        "exif": null
      },
      {
        "filename": "fleeting_time-38.jpg",
        "src": "/images/galleries/abstract/fleeting_time-38.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:16:58",
        "exif": null
      },
      {
        "filename": "fleeting_time-39.jpg",
        "src": "/images/galleries/abstract/fleeting_time-39.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:17:04",
        "exif": null
      },
      {
        "filename": "fleeting_time-4.jpg",
        "src": "/images/galleries/abstract/fleeting_time-4.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:40:10",
        "exif": null
      },
      {
        "filename": "fleeting_time-40.jpg",
        "src": "/images/galleries/abstract/fleeting_time-40.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:14:12",
        "exif": null
      },
      {
        "filename": "fleeting_time-41.jpg",
        "src": "/images/galleries/abstract/fleeting_time-41.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:14:53",
        "exif": null
      },
      {
        "filename": "fleeting_time-42.jpg",
        "src": "/images/galleries/abstract/fleeting_time-42.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:15:13",
        "exif": null
      },
      {
        "filename": "fleeting_time-43.jpg",
        "src": "/images/galleries/abstract/fleeting_time-43.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:15:46",
        "exif": null
      },
      {
        "filename": "fleeting_time-44.jpg",
        "src": "/images/galleries/abstract/fleeting_time-44.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:16:14",
        "exif": null
      },
      {
        "filename": "fleeting_time-45.jpg",
        "src": "/images/galleries/abstract/fleeting_time-45.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:18:16",
        "exif": null
      },
      {
        "filename": "fleeting_time-46.jpg",
        "src": "/images/galleries/abstract/fleeting_time-46.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:19:11",
        "exif": null
      },
      {
        "filename": "fleeting_time-47.jpg",
        "src": "/images/galleries/abstract/fleeting_time-47.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:38",
        "exif": null
      },
      {
        "filename": "fleeting_time-48.jpg",
        "src": "/images/galleries/abstract/fleeting_time-48.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:39",
        "exif": null
      },
      {
        "filename": "fleeting_time-49.jpg",
        "src": "/images/galleries/abstract/fleeting_time-49.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:22:43",
        "exif": null
      },
      {
        "filename": "fleeting_time-5.jpg",
        "src": "/images/galleries/abstract/fleeting_time-5.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:40:13",
        "exif": null
      },
      {
        "filename": "fleeting_time-50.jpg",
        "src": "/images/galleries/abstract/fleeting_time-50.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:22:59",
        "exif": null
      },
      {
        "filename": "fleeting_time-51.jpg",
        "src": "/images/galleries/abstract/fleeting_time-51.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:15:54",
        "exif": null
      },
      {
        "filename": "fleeting_time-52.jpg",
        "src": "/images/galleries/abstract/fleeting_time-52.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:18:58",
        "exif": null
      },
      {
        "filename": "fleeting_time-53.jpg",
        "src": "/images/galleries/abstract/fleeting_time-53.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:19:53",
        "exif": null
      },
      {
        "filename": "fleeting_time-54.jpg",
        "src": "/images/galleries/abstract/fleeting_time-54.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:10",
        "exif": null
      },
      {
        "filename": "fleeting_time-55.jpg",
        "src": "/images/galleries/abstract/fleeting_time-55.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:12",
        "exif": null
      },
      {
        "filename": "fleeting_time-56.jpg",
        "src": "/images/galleries/abstract/fleeting_time-56.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:17",
        "exif": null
      },
      {
        "filename": "fleeting_time-57.jpg",
        "src": "/images/galleries/abstract/fleeting_time-57.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:17",
        "exif": null
      },
      {
        "filename": "fleeting_time-58.jpg",
        "src": "/images/galleries/abstract/fleeting_time-58.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:18",
        "exif": null
      },
      {
        "filename": "fleeting_time-59.jpg",
        "src": "/images/galleries/abstract/fleeting_time-59.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:18",
        "exif": null
      },
      {
        "filename": "fleeting_time-6.jpg",
        "src": "/images/galleries/abstract/fleeting_time-6.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:40:17",
        "exif": null
      },
      {
        "filename": "fleeting_time-60.jpg",
        "src": "/images/galleries/abstract/fleeting_time-60.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:19",
        "exif": null
      },
      {
        "filename": "fleeting_time-61.jpg",
        "src": "/images/galleries/abstract/fleeting_time-61.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:19",
        "exif": null
      },
      {
        "filename": "fleeting_time-62.jpg",
        "src": "/images/galleries/abstract/fleeting_time-62.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:22",
        "exif": null
      },
      {
        "filename": "fleeting_time-63.jpg",
        "src": "/images/galleries/abstract/fleeting_time-63.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:28",
        "exif": null
      },
      {
        "filename": "fleeting_time-64.jpg",
        "src": "/images/galleries/abstract/fleeting_time-64.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:29",
        "exif": null
      },
      {
        "filename": "fleeting_time-65.jpg",
        "src": "/images/galleries/abstract/fleeting_time-65.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:20:29",
        "exif": null
      },
      {
        "filename": "fleeting_time-66.jpg",
        "src": "/images/galleries/abstract/fleeting_time-66.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:21:55",
        "exif": null
      },
      {
        "filename": "fleeting_time-67.jpg",
        "src": "/images/galleries/abstract/fleeting_time-67.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:22:18",
        "exif": null
      },
      {
        "filename": "fleeting_time-68.jpg",
        "src": "/images/galleries/abstract/fleeting_time-68.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:22:28",
        "exif": null
      },
      {
        "filename": "fleeting_time-69.jpg",
        "src": "/images/galleries/abstract/fleeting_time-69.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 21:23:14",
        "exif": null
      },
      {
        "filename": "fleeting_time-7.jpg",
        "src": "/images/galleries/abstract/fleeting_time-7.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:40:22",
        "exif": null
      },
      {
        "filename": "fleeting_time-8.jpg",
        "src": "/images/galleries/abstract/fleeting_time-8.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:40:24",
        "exif": null
      },
      {
        "filename": "fleeting_time-9.jpg",
        "src": "/images/galleries/abstract/fleeting_time-9.jpg",
        "title": "Invalid Date",
        "location": null,
        "date": "2022:07:01 20:40:26",
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "abstract-from-above",
    "path": "/images/galleries/abstract-from-above",
    "title": "Abstract From Above",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "20220701-R5__1550-Pano.jpg",
        "src": "/images/galleries/abstract-from-above/20220701-R5__1550-Pano.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220701-R5__1560.jpg",
        "src": "/images/galleries/abstract-from-above/20220701-R5__1560.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220701-R5__1564.jpg",
        "src": "/images/galleries/abstract-from-above/20220701-R5__1564.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220701-R5__1565.jpg",
        "src": "/images/galleries/abstract-from-above/20220701-R5__1565.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220701-R5__1643.jpg",
        "src": "/images/galleries/abstract-from-above/20220701-R5__1643.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220701-R5__1647.jpg",
        "src": "/images/galleries/abstract-from-above/20220701-R5__1647.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220701-R5__1648.jpg",
        "src": "/images/galleries/abstract-from-above/20220701-R5__1648.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220701-R5__1649.jpg",
        "src": "/images/galleries/abstract-from-above/20220701-R5__1649.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220701-R5__1650.jpg",
        "src": "/images/galleries/abstract-from-above/20220701-R5__1650.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220701-R5__1668.jpg",
        "src": "/images/galleries/abstract-from-above/20220701-R5__1668.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-1.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-1.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-10.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-11.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-12.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-13.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-14.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-15.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-16.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-17.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-17.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-18.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-18.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-19.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-2.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-20.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-20.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-21.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-21.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-22.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-22.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-23.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-24.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-24.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-25.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-26.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-26.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-27.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-27.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-28.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-28.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-29.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-29.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-3.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-30.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-30.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-31.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-31.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-32.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-32.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-33.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-33.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-34.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-34.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-35.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-35.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-36.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-36.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-37.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-37.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-38.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-38.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-39.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-39.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-4.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-40.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-40.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-41.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-41.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-42.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-42.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-43.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-43.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-44.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-44.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-45.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-45.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-46.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-46.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-47.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-47.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-48.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-48.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fleeting Time-49.jpg",
        "src": "/images/galleries/abstract-from-above/Fleeting Time-49.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "aerospace",
    "path": "/images/galleries/aerospace",
    "title": "Aerospace",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [],
    "subGalleries": [
      {
        "id": "aerospace/astro",
        "path": "/images/galleries/aerospace/astro",
        "title": "Astro",
        "description": "",
        "layout": "masonry",
        "sortBy": "dateTaken",
        "sortDirection": "asc",
        "display": {
          "metadata": false,
          "captions": false,
          "exif": false
        },
        "images": [
          {
            "filename": "SKD-Andromeda-2025-11-16.jpg",
            "src": "/images/galleries/aerospace/astro/SKD-Andromeda-2025-11-16.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Orion-2025-11-16.jpg",
            "src": "/images/galleries/aerospace/astro/SKD-Orion-2025-11-16.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          }
        ],
        "subGalleries": [],
        "cover": {}
      },
      {
        "id": "aerospace/astronauts",
        "path": "/images/galleries/aerospace/astronauts",
        "title": "Astronauts",
        "description": "",
        "layout": "masonry",
        "sortBy": "dateTaken",
        "sortDirection": "asc",
        "display": {
          "metadata": false,
          "captions": false,
          "exif": false
        },
        "images": [],
        "subGalleries": [],
        "cover": {}
      },
      {
        "id": "aerospace/astronauts-charlie-duke",
        "path": "/images/galleries/aerospace/astronauts-charlie-duke",
        "title": "Astronauts Charlie Duke",
        "description": "",
        "layout": "masonry",
        "sortBy": "dateTaken",
        "sortDirection": "asc",
        "display": {
          "metadata": false,
          "captions": false,
          "exif": false
        },
        "images": [
          {
            "filename": "SKD-Starbase-2025-01-26-2.jpg",
            "src": "/images/galleries/aerospace/astronauts-charlie-duke/SKD-Starbase-2025-01-26-2.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-2025-01-26-3.jpg",
            "src": "/images/galleries/aerospace/astronauts-charlie-duke/SKD-Starbase-2025-01-26-3.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-2025-01-26-4.jpg",
            "src": "/images/galleries/aerospace/astronauts-charlie-duke/SKD-Starbase-2025-01-26-4.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-2025-01-26.jpg",
            "src": "/images/galleries/aerospace/astronauts-charlie-duke/SKD-Starbase-2025-01-26.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          }
        ],
        "subGalleries": [],
        "cover": {}
      },
      {
        "id": "aerospace/astronauts-fred-haise",
        "path": "/images/galleries/aerospace/astronauts-fred-haise",
        "title": "Astronauts Fred Haise",
        "description": "",
        "layout": "masonry",
        "sortBy": "dateTaken",
        "sortDirection": "asc",
        "display": {
          "metadata": false,
          "captions": false,
          "exif": false
        },
        "images": [
          {
            "filename": "Fred Haise-3.jpg",
            "src": "/images/galleries/aerospace/astronauts-fred-haise/Fred Haise-3.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Fred Haise-7.jpg",
            "src": "/images/galleries/aerospace/astronauts-fred-haise/Fred Haise-7.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Fred Haise-8.jpg",
            "src": "/images/galleries/aerospace/astronauts-fred-haise/Fred Haise-8.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          }
        ],
        "subGalleries": [],
        "cover": {}
      },
      {
        "id": "aerospace/lone-star-rallycross",
        "path": "/images/galleries/aerospace/lone-star-rallycross",
        "title": "Lone Star Rallycross",
        "description": "",
        "layout": "masonry",
        "sortBy": "dateTaken",
        "sortDirection": "asc",
        "display": {
          "metadata": false,
          "captions": false,
          "exif": false
        },
        "images": [
          {
            "filename": "SKD-LoneStar-RallyCross-2025-12-13-2.jpg",
            "src": "/images/galleries/aerospace/lone-star-rallycross/SKD-LoneStar-RallyCross-2025-12-13-2.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-LoneStar-RallyCross-2025-12-13-3.jpg",
            "src": "/images/galleries/aerospace/lone-star-rallycross/SKD-LoneStar-RallyCross-2025-12-13-3.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-LoneStar-RallyCross-2025-12-13-4.jpg",
            "src": "/images/galleries/aerospace/lone-star-rallycross/SKD-LoneStar-RallyCross-2025-12-13-4.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-LoneStar-RallyCross-2025-12-13-5.jpg",
            "src": "/images/galleries/aerospace/lone-star-rallycross/SKD-LoneStar-RallyCross-2025-12-13-5.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-LoneStar-RallyCross-2025-12-13-6.jpg",
            "src": "/images/galleries/aerospace/lone-star-rallycross/SKD-LoneStar-RallyCross-2025-12-13-6.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-LoneStar-RallyCross-2025-12-13.jpg",
            "src": "/images/galleries/aerospace/lone-star-rallycross/SKD-LoneStar-RallyCross-2025-12-13.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          }
        ],
        "subGalleries": [],
        "cover": {}
      },
      {
        "id": "aerospace/rallycross",
        "path": "/images/galleries/aerospace/rallycross",
        "title": "Rallycross",
        "description": "",
        "layout": "masonry",
        "sortBy": "dateTaken",
        "sortDirection": "asc",
        "display": {
          "metadata": false,
          "captions": false,
          "exif": false
        },
        "images": [
          {
            "filename": "SKD-LoneStar-RallyCross-2025-12-13-2.jpg",
            "src": "/images/galleries/aerospace/rallycross/SKD-LoneStar-RallyCross-2025-12-13-2.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-LoneStar-RallyCross-2025-12-13-3.jpg",
            "src": "/images/galleries/aerospace/rallycross/SKD-LoneStar-RallyCross-2025-12-13-3.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-LoneStar-RallyCross-2025-12-13-4.jpg",
            "src": "/images/galleries/aerospace/rallycross/SKD-LoneStar-RallyCross-2025-12-13-4.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-LoneStar-RallyCross-2025-12-13-5.jpg",
            "src": "/images/galleries/aerospace/rallycross/SKD-LoneStar-RallyCross-2025-12-13-5.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-LoneStar-RallyCross-2025-12-13-6.jpg",
            "src": "/images/galleries/aerospace/rallycross/SKD-LoneStar-RallyCross-2025-12-13-6.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-LoneStar-RallyCross-2025-12-13.jpg",
            "src": "/images/galleries/aerospace/rallycross/SKD-LoneStar-RallyCross-2025-12-13.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          }
        ],
        "subGalleries": [],
        "cover": {}
      },
      {
        "id": "aerospace/starbase",
        "path": "/images/galleries/aerospace/starbase",
        "title": "Starbase",
        "description": "",
        "layout": "masonry",
        "sortBy": "dateTaken",
        "sortDirection": "asc",
        "display": {
          "metadata": false,
          "captions": false,
          "exif": false
        },
        "images": [
          {
            "filename": "SKD-Starbase-2025-01-16-SKD-Starbase-2.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-2025-01-16-SKD-Starbase-2.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-2025-01-16.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-2025-01-16.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-Flight-9-2025-05-27-2.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-Flight-9-2025-05-27-2.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-Flight-9-2025-05-27-3.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-Flight-9-2025-05-27-3.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-Flight-9-2025-05-27-4.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-Flight-9-2025-05-27-4.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-Flight-9-2025-05-27-5.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-Flight-9-2025-05-27-5.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-Flight-9-2025-05-27-6.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-Flight-9-2025-05-27-6.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-Flight-9-2025-05-27-7.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-Flight-9-2025-05-27-7.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-Flight-9-2025-05-27-8.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-Flight-9-2025-05-27-8.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-Flight-9-2025-05-27-9.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-Flight-9-2025-05-27-9.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-Flight-9-2025-05-27.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-Flight-9-2025-05-27.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-Print-2024-09-23.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-Print-2024-09-23.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-Print-2024-09-24-PRINT-2.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-Print-2024-09-24-PRINT-2.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "SKD-Starbase-Print-2024-10-02.jpg",
            "src": "/images/galleries/aerospace/starbase/SKD-Starbase-Print-2024-10-02.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          }
        ],
        "subGalleries": [],
        "cover": {}
      }
    ],
    "cover": {}
  },
  {
    "id": "aerospace-astro",
    "path": "/images/galleries/aerospace-astro",
    "title": "Aerospace Astro",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "SKD-Andromeda-2025-11-16.jpg",
        "src": "/images/galleries/aerospace-astro/SKD-Andromeda-2025-11-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Orion-2025-11-16.jpg",
        "src": "/images/galleries/aerospace-astro/SKD-Orion-2025-11-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "aerospace-astronauts",
    "path": "/images/galleries/aerospace-astronauts",
    "title": "Aerospace Astronauts",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "Fred Haise-3.jpg",
        "src": "/images/galleries/aerospace-astronauts/Fred Haise-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fred Haise-7.jpg",
        "src": "/images/galleries/aerospace-astronauts/Fred Haise-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fred Haise-8.jpg",
        "src": "/images/galleries/aerospace-astronauts/Fred Haise-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-2025-01-26-2.jpg",
        "src": "/images/galleries/aerospace-astronauts/SKD-Starbase-2025-01-26-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-2025-01-26-3.jpg",
        "src": "/images/galleries/aerospace-astronauts/SKD-Starbase-2025-01-26-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-2025-01-26-4.jpg",
        "src": "/images/galleries/aerospace-astronauts/SKD-Starbase-2025-01-26-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-2025-01-26.jpg",
        "src": "/images/galleries/aerospace-astronauts/SKD-Starbase-2025-01-26.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "aerospace-astronauts-charlie-duke",
    "path": "/images/galleries/aerospace-astronauts-charlie-duke",
    "title": "Aerospace Astronauts Charlie Duke",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "SKD-Starbase-2025-01-26-2.jpg",
        "src": "/images/galleries/aerospace-astronauts-charlie-duke/SKD-Starbase-2025-01-26-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-2025-01-26-3.jpg",
        "src": "/images/galleries/aerospace-astronauts-charlie-duke/SKD-Starbase-2025-01-26-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-2025-01-26-4.jpg",
        "src": "/images/galleries/aerospace-astronauts-charlie-duke/SKD-Starbase-2025-01-26-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-2025-01-26.jpg",
        "src": "/images/galleries/aerospace-astronauts-charlie-duke/SKD-Starbase-2025-01-26.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "aerospace-astronauts-fred-haise",
    "path": "/images/galleries/aerospace-astronauts-fred-haise",
    "title": "Aerospace Astronauts Fred Haise",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "Fred Haise-3.jpg",
        "src": "/images/galleries/aerospace-astronauts-fred-haise/Fred Haise-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fred Haise-7.jpg",
        "src": "/images/galleries/aerospace-astronauts-fred-haise/Fred Haise-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Fred Haise-8.jpg",
        "src": "/images/galleries/aerospace-astronauts-fred-haise/Fred Haise-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "aerospace-lone-star-rallycross",
    "path": "/images/galleries/aerospace-lone-star-rallycross",
    "title": "Aerospace Lone Star Rallycross",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "SKD-LoneStar-RallyCross-2025-12-13-2.jpg",
        "src": "/images/galleries/aerospace-lone-star-rallycross/SKD-LoneStar-RallyCross-2025-12-13-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-LoneStar-RallyCross-2025-12-13-3.jpg",
        "src": "/images/galleries/aerospace-lone-star-rallycross/SKD-LoneStar-RallyCross-2025-12-13-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-LoneStar-RallyCross-2025-12-13-4.jpg",
        "src": "/images/galleries/aerospace-lone-star-rallycross/SKD-LoneStar-RallyCross-2025-12-13-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-LoneStar-RallyCross-2025-12-13-5.jpg",
        "src": "/images/galleries/aerospace-lone-star-rallycross/SKD-LoneStar-RallyCross-2025-12-13-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-LoneStar-RallyCross-2025-12-13-6.jpg",
        "src": "/images/galleries/aerospace-lone-star-rallycross/SKD-LoneStar-RallyCross-2025-12-13-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-LoneStar-RallyCross-2025-12-13.jpg",
        "src": "/images/galleries/aerospace-lone-star-rallycross/SKD-LoneStar-RallyCross-2025-12-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "aerospace-starbase",
    "path": "/images/galleries/aerospace-starbase",
    "title": "Aerospace Starbase",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "SKD-Film-2024-10-02.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-10-02.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-10.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-100.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-100.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-101.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-101.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-102.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-102.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-103.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-103.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-104.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-104.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-105.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-105.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-106.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-106.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-107.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-107.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-108.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-108.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-109.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-109.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-11.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-110.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-110.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-111.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-111.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-112.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-112.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-113.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-113.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-114.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-114.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-115.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-115.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-116.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-116.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-117.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-117.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-118.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-118.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-119.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-119.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-12.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-120.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-120.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-121.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-121.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-122.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-122.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-13.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-14.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-15.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-16.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-18.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-18.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-2.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-20.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-20.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-21.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-21.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-24.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-24.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-25.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-27.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-27.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-3.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-30.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-30.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-31.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-31.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-32.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-32.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-34.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-34.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-35.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-35.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-36.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-36.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-37.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-37.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-38.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-38.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-39.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-39.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-4.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-40.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-40.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-41.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-41.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-42.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-42.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-43.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-43.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-44.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-44.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-45.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-45.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-46.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-46.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-47.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-47.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-48.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-48.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-49.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-49.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-5.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-50.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-50.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-51.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-51.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-52.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-52.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-53.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-53.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-54.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-54.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-55.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-55.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-56.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-56.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-58.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-58.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-59.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-59.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-6.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-60.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-60.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-61.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-61.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-66.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-66.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-67.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-67.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-68.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-68.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-69.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-69.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-7.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-71.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-71.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-72.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-72.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-74.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-74.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-77.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-77.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-78.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-78.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-79.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-79.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-8.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-80.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-80.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-84.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-84.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-88.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-88.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-9.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-94.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-94.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-95.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-95.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-96.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-96.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-97.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-97.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-98.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-98.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-99.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25-99.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-11-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-12-23.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2024-12-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-25.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-05-17-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-27.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-05-17-27.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-28.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-05-17-28.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-29.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-05-17-29.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-30.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-05-17-30.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-31.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-05-17-31.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-32.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-05-17-32.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-33.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-05-17-33.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-106.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-106.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-107.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-107.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-108.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-108.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-109.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-109.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-110.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-110.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-112.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-112.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-113.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-113.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-114.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-114.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-115.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-115.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-116.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-116.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-169.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-169.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-170.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-170.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-171.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-171.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-172.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-172.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-173.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-173.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-174.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-174.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-175.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-175.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-176.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-176.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-177.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-177.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-178.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-178.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-50.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-50.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-51.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-51.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-53.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-53.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-64.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-64.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-65.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-65.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-66.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-66.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-67.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-2025-09-02-67.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-10.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-11.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-12.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-13.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-14.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-15.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-17.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-17.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-18.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-18.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-19.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-2.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-20.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-20.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-21.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-21.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-23.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-3.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-4.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-5.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-6.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-7.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-8.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-9.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Gold200-2024-12-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-10.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-11.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-12.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-13.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-14.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-15.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-16.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-17.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-17.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-18.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-18.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-19.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-22.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-22.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-23.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-27.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-27.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-28.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-28.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-6.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-7.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-8.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-9.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Film-Metropolis-2024-12-23-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-2025-01-16-SKD-Starbase-2.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-2025-01-16-SKD-Starbase-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-2025-01-16.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-2025-01-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Film-Portra-300-2024-11-19.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Film-Portra-300-2024-11-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Film-Portra-400-2024-11-19-2.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Film-Portra-400-2024-11-19-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Film-Portra-400-2024-11-19-3.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Film-Portra-400-2024-11-19-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Film-Portra-400-2024-11-19-4.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Film-Portra-400-2024-11-19-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Film-Portra-400-2024-11-19-5.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Film-Portra-400-2024-11-19-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Film-Portra-400-2024-11-19.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Film-Portra-400-2024-11-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Flight-9-2025-05-27-2.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Flight-9-2025-05-27-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Flight-9-2025-05-27-3.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Flight-9-2025-05-27-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Flight-9-2025-05-27-4.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Flight-9-2025-05-27-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Flight-9-2025-05-27-5.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Flight-9-2025-05-27-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Flight-9-2025-05-27-6.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Flight-9-2025-05-27-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Flight-9-2025-05-27-7.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Flight-9-2025-05-27-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Flight-9-2025-05-27-8.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Flight-9-2025-05-27-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Flight-9-2025-05-27-9.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Flight-9-2025-05-27-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Flight-9-2025-05-27.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Flight-9-2025-05-27.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Print-2024-09-23.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Print-2024-09-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Print-2024-09-24-PRINT-2.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Print-2024-09-24-PRINT-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Print-2024-10-02-2.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Print-2024-10-02-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Print-2024-10-02-PRINT-2.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Print-2024-10-02-PRINT-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Print-2024-10-02-PRINT-3.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Print-2024-10-02-PRINT-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Print-2024-10-02.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Print-2024-10-02.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Print-2024-11-19-PRINT-2.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Print-2024-11-19-PRINT-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Print-2024-11-19-PRINT-3.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-Print-2024-11-19-PRINT-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-WM-2024-10-02-2.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-WM-2024-10-02-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-WM-2024-10-02-3.jpg",
        "src": "/images/galleries/aerospace-starbase/SKD-Starbase-WM-2024-10-02-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "aerospace-starbase-film",
    "path": "/images/galleries/aerospace-starbase-film",
    "title": "Aerospace Starbase Film",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "SKD-Film-2024-10-02.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-10-02.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-10.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-100.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-100.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-101.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-101.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-102.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-102.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-103.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-103.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-104.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-104.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-105.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-105.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-106.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-106.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-107.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-107.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-108.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-108.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-109.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-109.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-11.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-110.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-110.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-111.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-111.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-112.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-112.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-113.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-113.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-114.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-114.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-115.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-115.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-116.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-116.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-117.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-117.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-118.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-118.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-119.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-119.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-12.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-120.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-120.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-121.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-121.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-122.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-122.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-13.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-14.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-15.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-16.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-18.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-18.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-2.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-20.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-20.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-21.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-21.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-24.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-24.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-25.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-27.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-27.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-3.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-30.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-30.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-31.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-31.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-32.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-32.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-34.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-34.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-35.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-35.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-36.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-36.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-37.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-37.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-38.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-38.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-39.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-39.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-4.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-40.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-40.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-41.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-41.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-42.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-42.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-43.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-43.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-44.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-44.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-45.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-45.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-46.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-46.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-47.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-47.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-48.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-48.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-49.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-49.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-5.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-50.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-50.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-51.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-51.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-52.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-52.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-53.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-53.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-54.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-54.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-55.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-55.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-56.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-56.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-58.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-58.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-59.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-59.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-6.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-60.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-60.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-61.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-61.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-66.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-66.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-67.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-67.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-68.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-68.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-69.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-69.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-7.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-71.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-71.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-72.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-72.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-74.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-74.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-77.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-77.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-78.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-78.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-79.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-79.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-8.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-80.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-80.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-84.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-84.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-88.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-88.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-9.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-94.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-94.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-95.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-95.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-96.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-96.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-97.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-97.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-98.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-98.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25-99.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25-99.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-11-25.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-11-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2024-12-23.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2024-12-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-25.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-05-17-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-27.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-05-17-27.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-28.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-05-17-28.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-29.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-05-17-29.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-30.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-05-17-30.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-31.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-05-17-31.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-32.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-05-17-32.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-05-17-33.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-05-17-33.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-106.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-106.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-107.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-107.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-108.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-108.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-109.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-109.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-110.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-110.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-112.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-112.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-113.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-113.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-114.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-114.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-115.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-115.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-116.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-116.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-169.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-169.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-170.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-170.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-171.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-171.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-172.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-172.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-173.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-173.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-174.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-174.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-175.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-175.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-176.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-176.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-177.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-177.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-178.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-178.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-50.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-50.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-51.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-51.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-53.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-53.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-64.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-64.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-65.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-65.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-66.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-66.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-2025-09-02-67.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-2025-09-02-67.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-10.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-11.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-12.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-13.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-14.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-15.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-17.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-17.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-18.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-18.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-19.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-2.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-20.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-20.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-21.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-21.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-23.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-3.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-4.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-5.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-6.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-7.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-8.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23-9.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Gold200-2024-12-23.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Gold200-2024-12-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-10.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-11.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-12.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-13.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-14.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-15.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-16.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-17.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-17.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-18.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-18.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-19.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-22.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-22.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-23.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-27.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-27.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-28.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-28.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-6.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-7.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-8.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Metropolis-2024-12-23-9.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Film-Metropolis-2024-12-23-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Film-Portra-300-2024-11-19.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Starbase-Film-Portra-300-2024-11-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Film-Portra-400-2024-11-19-2.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Starbase-Film-Portra-400-2024-11-19-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Film-Portra-400-2024-11-19-3.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Starbase-Film-Portra-400-2024-11-19-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Film-Portra-400-2024-11-19-4.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Starbase-Film-Portra-400-2024-11-19-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Film-Portra-400-2024-11-19-5.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Starbase-Film-Portra-400-2024-11-19-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Film-Portra-400-2024-11-19.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Starbase-Film-Portra-400-2024-11-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Print-2024-10-02-2.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Starbase-Print-2024-10-02-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Print-2024-10-02-PRINT-2.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Starbase-Print-2024-10-02-PRINT-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Print-2024-10-02-PRINT-3.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Starbase-Print-2024-10-02-PRINT-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Print-2024-11-19-PRINT-2.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Starbase-Print-2024-11-19-PRINT-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-Print-2024-11-19-PRINT-3.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Starbase-Print-2024-11-19-PRINT-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-WM-2024-10-02-2.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Starbase-WM-2024-10-02-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Starbase-WM-2024-10-02-3.jpg",
        "src": "/images/galleries/aerospace-starbase-film/SKD-Starbase-WM-2024-10-02-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "events",
    "path": "/images/galleries/events",
    "title": "Events",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [],
    "subGalleries": [
      {
        "id": "events/beach-house",
        "path": "/images/galleries/events/beach-house",
        "title": "Beach House",
        "description": "",
        "layout": "masonry",
        "sortBy": "dateTaken",
        "sortDirection": "asc",
        "display": {
          "metadata": false,
          "captions": false,
          "exif": false
        },
        "images": [
          {
            "filename": "Beach House Concert B&W-1.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert B&W-1.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-10.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-10.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-11.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-11.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-12.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-12.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-13.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-13.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-14.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-14.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-15.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-15.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-16.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-16.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-17.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-17.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-18.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-18.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-19.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-19.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-20.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-20.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-21.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-21.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-22.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-22.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-23.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-23.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-24.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-24.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-25.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-25.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-26.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-26.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-27.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-27.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-28.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-28.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-29.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-29.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-30.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-30.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-31.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-31.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-32.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-32.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-33.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-33.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-34.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-34.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-35.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-35.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-36.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-36.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-37.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-37.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-38.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-38.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-39.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-39.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-40.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-40.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-41.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-41.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-5.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-5.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-6.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-6.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-7.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-7.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-8.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-8.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-9.jpg",
            "src": "/images/galleries/events/beach-house/Beach House Concert-9.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          }
        ],
        "subGalleries": [],
        "cover": {}
      },
      {
        "id": "events/beach-house-concert",
        "path": "/images/galleries/events/beach-house-concert",
        "title": "Beach House Concert",
        "description": "",
        "layout": "masonry",
        "sortBy": "dateTaken",
        "sortDirection": "asc",
        "display": {
          "metadata": false,
          "captions": false,
          "exif": false
        },
        "images": [
          {
            "filename": "Beach House Concert B&W-1.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert B&W-1.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-10.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-10.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-11.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-11.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-12.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-12.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-13.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-13.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-14.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-14.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-15.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-15.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-16.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-16.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-17.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-17.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-18.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-18.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-19.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-19.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-20.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-20.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-21.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-21.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-22.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-22.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-23.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-23.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-24.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-24.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-25.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-25.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-26.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-26.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-27.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-27.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-28.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-28.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-29.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-29.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-30.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-30.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-31.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-31.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-32.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-32.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-33.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-33.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-34.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-34.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-35.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-35.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-36.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-36.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-37.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-37.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-38.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-38.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-39.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-39.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-40.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-40.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-41.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-41.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-5.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-5.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-6.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-6.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-7.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-7.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-8.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-8.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "Beach House Concert-9.jpg",
            "src": "/images/galleries/events/beach-house-concert/Beach House Concert-9.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          }
        ],
        "subGalleries": [],
        "cover": {}
      },
      {
        "id": "events/fire-dancer",
        "path": "/images/galleries/events/fire-dancer",
        "title": "Fire Dancer",
        "description": "",
        "layout": "masonry",
        "sortBy": "dateTaken",
        "sortDirection": "asc",
        "display": {
          "metadata": false,
          "captions": false,
          "exif": false
        },
        "images": [
          {
            "filename": "20211217-IMG_0645.jpg",
            "src": "/images/galleries/events/fire-dancer/20211217-IMG_0645.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "20211217-IMG_0743.jpg",
            "src": "/images/galleries/events/fire-dancer/20211217-IMG_0743.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "20211217-IMG_0750.jpg",
            "src": "/images/galleries/events/fire-dancer/20211217-IMG_0750.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "20211217-IMG_0758.jpg",
            "src": "/images/galleries/events/fire-dancer/20211217-IMG_0758.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "20211217-IMG_0793.jpg",
            "src": "/images/galleries/events/fire-dancer/20211217-IMG_0793.jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          },
          {
            "filename": "GetInTheMicroBus (22 of 68).jpg",
            "src": "/images/galleries/events/fire-dancer/GetInTheMicroBus (22 of 68).jpg",
            "title": null,
            "location": null,
            "date": null,
            "exif": null
          }
        ],
        "subGalleries": [],
        "cover": {}
      }
    ],
    "cover": {}
  },
  {
    "id": "events-beach-house",
    "path": "/images/galleries/events-beach-house",
    "title": "Events Beach House",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "Beach House Concert B&W-1.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert B&W-1.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-10.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-11.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-12.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-13.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-14.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-15.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-16.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-17.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-17.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-18.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-18.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-19.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-20.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-20.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-21.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-21.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-22.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-22.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-23.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-24.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-24.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-25.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-26.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-26.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-27.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-27.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-28.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-28.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-29.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-29.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-30.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-30.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-31.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-31.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-32.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-32.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-33.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-33.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-34.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-34.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-35.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-35.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-36.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-36.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-37.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-37.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-38.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-38.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-39.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-39.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-40.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-40.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-41.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-41.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-5.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-6.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-7.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-8.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Beach House Concert-9.jpg",
        "src": "/images/galleries/events-beach-house/Beach House Concert-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "events-fire-dancer",
    "path": "/images/galleries/events-fire-dancer",
    "title": "Events Fire Dancer",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "20211217-IMG_0645.jpg",
        "src": "/images/galleries/events-fire-dancer/20211217-IMG_0645.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20211217-IMG_0743.jpg",
        "src": "/images/galleries/events-fire-dancer/20211217-IMG_0743.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20211217-IMG_0750.jpg",
        "src": "/images/galleries/events-fire-dancer/20211217-IMG_0750.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20211217-IMG_0758.jpg",
        "src": "/images/galleries/events-fire-dancer/20211217-IMG_0758.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20211217-IMG_0793.jpg",
        "src": "/images/galleries/events-fire-dancer/20211217-IMG_0793.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "GetInTheMicroBus (22 of 68).jpg",
        "src": "/images/galleries/events-fire-dancer/GetInTheMicroBus (22 of 68).jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "landscapes",
    "path": "/images/galleries/landscapes",
    "title": "Landscapes",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "20220402-IMG_7403.jpg",
        "src": "/images/galleries/landscapes/20220402-IMG_7403.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220424-R5__2666.jpg",
        "src": "/images/galleries/landscapes/20220424-R5__2666.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220906-R5__0135.jpg",
        "src": "/images/galleries/landscapes/20220906-R5__0135.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20221008-R5__1986.jpg",
        "src": "/images/galleries/landscapes/20221008-R5__1986.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20221008-R5__1998.jpg",
        "src": "/images/galleries/landscapes/20221008-R5__1998.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20221008-R5__2005.jpg",
        "src": "/images/galleries/landscapes/20221008-R5__2005.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "landscapes-american-landscapes",
    "path": "/images/galleries/landscapes-american-landscapes",
    "title": "Landscapes American Landscapes",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "SKD-West-2025-12-21-10.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-11.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-12.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-13.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-14.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-15.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-16.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-17.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-17.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-18.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-18.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-19.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-2.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-20.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-20.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-21.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-21.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-22.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-22.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-23.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-24.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-24.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-25.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-26.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-26.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-27.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-27.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-28.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-28.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-29.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-29.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-3.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-4.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-5.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-6.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-7.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-8.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21-9.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-21.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-21.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22-10.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22-11.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22-12.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22-13.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22-14.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22-2.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22-3.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22-4.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22-5.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22-6.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22-7.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22-8.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22-9.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-22.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-22.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-23-2.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-23-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-23-3.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-23-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-23-4.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-23-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-23-5.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-23-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-23-6.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-23-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-23-7.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-23-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-23-8.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-23-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-23-9.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-23-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-23.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-24-2.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-24-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-24-3.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-24-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-24-4.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-24-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-24-5.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-24-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-24-6.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-24-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-24-7.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-24-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-24-8.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-24-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-24-9.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-24-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-24.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-24.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-25-2.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-25-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-West-2025-12-25.jpg",
        "src": "/images/galleries/landscapes-american-landscapes/SKD-West-2025-12-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "landscapes-big-bend-film",
    "path": "/images/galleries/landscapes-big-bend-film",
    "title": "Landscapes Big Bend Film",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-12.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-15.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-16.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-17.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-17.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-25.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-26.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-26.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-29.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-29.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-30.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-30.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-32.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-32.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-34.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-34.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-35.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-35.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-5.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-6.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-8.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23-9.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Aurora800-2024-12-23.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Aurora800-2024-12-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-13.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-14.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-15.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-16.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-17.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-17.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-18.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-18.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-19.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-20.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-20.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-21.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-21.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-22.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-22.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-25.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-26.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-26.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-28.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-28.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-29.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-29.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-3.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-31.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-31.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-32.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-32.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-33.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-33.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-Cinestill50-2024-12-23-9.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-Cinestill50-2024-12-23-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-10.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-11.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-12.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-13.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-14.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-15.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-16.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-17.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-17.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-18.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-18.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-2.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-21.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-21.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-22.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-22.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-23.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-24.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-24.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-25.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-26.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-26.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-27.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-27.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-28.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-28.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-29.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-29.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-30.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-30.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-31.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-31.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-32.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-32.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-33.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-33.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-34.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-34.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-35.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-35.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-36.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-36.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-37.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-37.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-4.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-5.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-6.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-7.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-8.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "SKD-Film-UltraMax-2024-12-23-9.jpg",
        "src": "/images/galleries/landscapes-big-bend-film/SKD-Film-UltraMax-2024-12-23-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "landscapes-costa-rica",
    "path": "/images/galleries/landscapes-costa-rica",
    "title": "Landscapes Costa Rica",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "20220423-R5__1313.jpg",
        "src": "/images/galleries/landscapes-costa-rica/20220423-R5__1313.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220423-R5__1325.jpg",
        "src": "/images/galleries/landscapes-costa-rica/20220423-R5__1325.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220424-R5__1971.jpg",
        "src": "/images/galleries/landscapes-costa-rica/20220424-R5__1971.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220424-R5__2124.jpg",
        "src": "/images/galleries/landscapes-costa-rica/20220424-R5__2124.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220424-R5__2365.jpg",
        "src": "/images/galleries/landscapes-costa-rica/20220424-R5__2365.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220424-R5__2737.jpg",
        "src": "/images/galleries/landscapes-costa-rica/20220424-R5__2737.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220425-R5__2851.jpg",
        "src": "/images/galleries/landscapes-costa-rica/20220425-R5__2851.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220425-R5__2937.jpg",
        "src": "/images/galleries/landscapes-costa-rica/20220425-R5__2937.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220426-R5__3267.jpg",
        "src": "/images/galleries/landscapes-costa-rica/20220426-R5__3267.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220426-R5__3979.jpg",
        "src": "/images/galleries/landscapes-costa-rica/20220426-R5__3979.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220426-R5__4084.jpg",
        "src": "/images/galleries/landscapes-costa-rica/20220426-R5__4084.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "landscapes-new-york-winter",
    "path": "/images/galleries/landscapes-new-york-winter",
    "title": "Landscapes New York Winter",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "20230311-R5__0009.jpg",
        "src": "/images/galleries/landscapes-new-york-winter/20230311-R5__0009.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20230311-R5__0012.jpg",
        "src": "/images/galleries/landscapes-new-york-winter/20230311-R5__0012.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20230311-R5__0023.jpg",
        "src": "/images/galleries/landscapes-new-york-winter/20230311-R5__0023.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20230311-R5__0024.jpg",
        "src": "/images/galleries/landscapes-new-york-winter/20230311-R5__0024.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20230311-R5__0167.jpg",
        "src": "/images/galleries/landscapes-new-york-winter/20230311-R5__0167.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20230311-R5__0175.jpg",
        "src": "/images/galleries/landscapes-new-york-winter/20230311-R5__0175.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20230311-R5__0242.jpg",
        "src": "/images/galleries/landscapes-new-york-winter/20230311-R5__0242.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20230311-R5__0436.jpg",
        "src": "/images/galleries/landscapes-new-york-winter/20230311-R5__0436.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20230311-R5__0466.jpg",
        "src": "/images/galleries/landscapes-new-york-winter/20230311-R5__0466.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20230311-R5__0815.jpg",
        "src": "/images/galleries/landscapes-new-york-winter/20230311-R5__0815.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
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
    "id": "portraits",
    "path": "/images/galleries/portraits",
    "title": "Portraits",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "portraits-blackbeltbbj",
    "path": "/images/galleries/portraits-blackbeltbbj",
    "title": "Portraits Blackbeltbbj",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "20220716-R5__7315-2.jpg",
        "src": "/images/galleries/portraits-blackbeltbbj/20220716-R5__7315-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220716-R5__7315.jpg",
        "src": "/images/galleries/portraits-blackbeltbbj/20220716-R5__7315.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220716-R5__7316.jpg",
        "src": "/images/galleries/portraits-blackbeltbbj/20220716-R5__7316.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220716-R5__7317-2.jpg",
        "src": "/images/galleries/portraits-blackbeltbbj/20220716-R5__7317-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220716-R5__7317.jpg",
        "src": "/images/galleries/portraits-blackbeltbbj/20220716-R5__7317.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220716-R5__7318-2.jpg",
        "src": "/images/galleries/portraits-blackbeltbbj/20220716-R5__7318-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220716-R5__7318.jpg",
        "src": "/images/galleries/portraits-blackbeltbbj/20220716-R5__7318.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220716-R5__7319-2.jpg",
        "src": "/images/galleries/portraits-blackbeltbbj/20220716-R5__7319-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "20220716-R5__7319.jpg",
        "src": "/images/galleries/portraits-blackbeltbbj/20220716-R5__7319.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
  },
  {
    "id": "portraits-hillary-astrid",
    "path": "/images/galleries/portraits-hillary-astrid",
    "title": "Portraits Hillary Astrid",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "Astrid-1.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-1.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-10.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-11.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-12.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-13.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-14.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-15.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-16.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-17.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-17.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-18.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-18.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-19.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-2.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-20.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-20.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-21.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-21.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-22.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-22.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-23.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-24.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-24.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-25.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-26.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-26.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-27.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-27.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-28.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-28.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-29.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-29.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-3.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-30.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-30.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-31.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-31.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-32.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-32.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-33.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-33.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-34.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-34.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-35.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-35.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-36.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-36.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-37.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-37.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-38.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-38.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-39.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-39.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-4.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-40.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-40.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-41.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-41.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-42.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-42.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-43.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-43.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-44.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-44.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-45.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-45.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-5.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-6.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-7.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-8.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Astrid-9.jpg",
        "src": "/images/galleries/portraits-hillary-astrid/Astrid-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
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
    "id": "weddings",
    "path": "/images/galleries/weddings",
    "title": "Weddings",
    "description": "",
    "layout": "masonry",
    "sortBy": "dateTaken",
    "sortDirection": "asc",
    "display": {
      "metadata": false,
      "captions": false,
      "exif": false
    },
    "images": [
      {
        "filename": "Lauren_Elphin--2.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin--2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin--3.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin--3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0003.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0003.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0016.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0016.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0024.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0024.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0025.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0025.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0026.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0026.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0029.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0029.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0051.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0051.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0056.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0056.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0062.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0062.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0063.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0063.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0067.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0067.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0074.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0074.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0080.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0080.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0082.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0082.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0084.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0084.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0089.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0089.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0093.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0093.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0095.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0095.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0098.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0098.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0103.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0103.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0108.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0108.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0109.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0109.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0113.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0113.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0116.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0116.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0117.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0117.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0119.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0119.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0133.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0133.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0140.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0140.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0141.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0141.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0142.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0142.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0145.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0145.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0150.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0150.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0151.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0151.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0155.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0155.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0157.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0157.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0159.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0159.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0168.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0168.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0171.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0171.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0253.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0253.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0260.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0260.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-0564.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-0564.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-1363.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-1363.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-1365.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-1365.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-1376.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-1376.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-1379.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-1379.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-1382.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-1382.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-1385.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-1385.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-9935.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-9935.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-9938.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-9938.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-9940.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-9940.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-9945.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-9945.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-9949.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-9949.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-9951.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-9951.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-9953.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-9953.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-9955.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-9955.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-9974.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-9974.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-9980.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-9980.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-9985.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-9985.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-9986.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-9986.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Lauren_Elphin-9999.jpg",
        "src": "/images/galleries/weddings/Lauren_Elphin-9999.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Nicole_Kawame-.jpg",
        "src": "/images/galleries/weddings/Nicole_Kawame-.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Nicole_Kawame-0191.jpg",
        "src": "/images/galleries/weddings/Nicole_Kawame-0191.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Nicole_Kawame-0428.jpg",
        "src": "/images/galleries/weddings/Nicole_Kawame-0428.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Nicole_Kawame-9058.jpg",
        "src": "/images/galleries/weddings/Nicole_Kawame-9058.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Nicole_Kawame-9085.jpg",
        "src": "/images/galleries/weddings/Nicole_Kawame-9085.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-1.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-1.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-10.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-11.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-12.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-13.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-14.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-15.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-16.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-17.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-17.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-18.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-18.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-19.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-19.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-2.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-20.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-20.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-21.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-21.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-22.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-22.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-23.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-23.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-24.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-24.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-25.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-25.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-26.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-26.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-27.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-27.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-28.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-28.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-29.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-29.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-3.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-30.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-30.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-31.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-31.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-32.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-32.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-33.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-33.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-34.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-34.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-35.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-35.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-36.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-36.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-37.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-37.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-38.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-38.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-39.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-39.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-4.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-5.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-6.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-7.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-8.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Rachel _ Andrew-9.jpg",
        "src": "/images/galleries/weddings/Rachel _ Andrew-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-1.jpg",
        "src": "/images/galleries/weddings/Wedding-1.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-10.jpg",
        "src": "/images/galleries/weddings/Wedding-10.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-11.jpg",
        "src": "/images/galleries/weddings/Wedding-11.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-12.jpg",
        "src": "/images/galleries/weddings/Wedding-12.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-13.jpg",
        "src": "/images/galleries/weddings/Wedding-13.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-14.jpg",
        "src": "/images/galleries/weddings/Wedding-14.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-15.jpg",
        "src": "/images/galleries/weddings/Wedding-15.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-16.jpg",
        "src": "/images/galleries/weddings/Wedding-16.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-17.jpg",
        "src": "/images/galleries/weddings/Wedding-17.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-2.jpg",
        "src": "/images/galleries/weddings/Wedding-2.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-3.jpg",
        "src": "/images/galleries/weddings/Wedding-3.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-4.jpg",
        "src": "/images/galleries/weddings/Wedding-4.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-5.jpg",
        "src": "/images/galleries/weddings/Wedding-5.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-6.jpg",
        "src": "/images/galleries/weddings/Wedding-6.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-7.jpg",
        "src": "/images/galleries/weddings/Wedding-7.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-8.jpg",
        "src": "/images/galleries/weddings/Wedding-8.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      },
      {
        "filename": "Wedding-9.jpg",
        "src": "/images/galleries/weddings/Wedding-9.jpg",
        "title": null,
        "location": null,
        "date": null,
        "exif": null
      }
    ],
    "subGalleries": [],
    "cover": {}
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
      "image": "/images/galleries/aerospace/starbase/SKD-Starbase-2025-01-16.jpg",
      "overlay": "dark",
      "align": "center"
    },
    "weddings": {
      "image": "/images/galleries/weddings/Lauren_Elphin-0003.jpg",
      "title": "Wedding Photography"
    },
    "aerospace": {
      "image": "/images/galleries/aerospace/starbase/SKD-Starbase-2025-01-16.jpg",
      "title": "Aerospace Photography"
    },
    "events": {
      "image": "/images/galleries/events/beach-house/Beach House Concert-10.jpg",
      "title": "Event Photography"
    },
    "landscapes": {
      "image": "/images/galleries/landscapes/20220402-IMG_7403.jpg",
      "title": "Landscape Photography"
    },
    "portraits": {
      "image": "/images/galleries/portraits-hillary-astrid/astrid-10.jpg",
      "title": "Portrait Photography"
    }
  },
  "categories": {
    "weddings": {
      "gallery": "weddings",
      "useCover": true
    },
    "aerospace": {
      "gallery": "aerospace",
      "useHero": true
    },
    "events": {
      "gallery": "events",
      "useCover": true
    },
    "landscapes": {
      "gallery": "landscapes",
      "useHero": false,
      "useCover": true
    },
    "portraits": {
      "gallery": "portraits",
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