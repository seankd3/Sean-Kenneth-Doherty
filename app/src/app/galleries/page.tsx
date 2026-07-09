import type { Metadata } from 'next';
import { ArrowRight, Images } from 'lucide-react';
import { galleriesPage } from '@/lib/content';
import galleryManifest from '../../../public/g/manifest.json';

interface PublishedGallery {
  slug: string;
  title: string;
  photo_count: number;
  date_range: string;
  cover: string;
  published_at: number;
}

interface PublishedGalleryManifest {
  galleries: PublishedGallery[];
}

export const metadata: Metadata = {
  title: 'Published Galleries',
  description:
    'Browse published photo collections from Sean Kenneth Doherty Photography.',
  alternates: {
    canonical: '/galleries',
  },
};

const publishedGalleries = (galleryManifest as PublishedGalleryManifest).galleries
  .slice()
  .sort((a, b) => b.published_at - a.published_at);

const photoCountFormatter = new Intl.NumberFormat('en-US');

const formatPhotoCount = (count: number) =>
  `${photoCountFormatter.format(count)} ${count === 1 ? 'photo' : 'photos'}`;

export default function GalleriesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,169,98,0.14),transparent_36rem)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Images size={18} className="text-[#c9a962]" />
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase">
                {galleriesPage.hero.subtitle}
              </p>
            </div>

            <h1 className="font-wedding-display text-5xl md:text-7xl text-white mb-6">
              {galleriesPage.hero.title}{' '}
              <span className="text-[#c9a962]">{galleriesPage.hero.titleAccent}</span>
            </h1>

            <p className="text-[#a0a0a0] text-lg md:text-xl leading-relaxed">
              {galleriesPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-14 md:py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          {publishedGalleries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {publishedGalleries.map((gallery) => (
                <a
                  key={gallery.slug}
                  href={`/g/${gallery.slug}/`}
                  className="group block border border-[#2a2a2a] bg-[#141414] transition-colors duration-300 hover:border-[#c9a962]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a962] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                    <img
                      src={gallery.cover}
                      alt={`${gallery.title} gallery cover`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-6">
                    <h2 className="font-wedding-display text-3xl text-white mb-3 transition-colors duration-300 group-hover:text-[#c9a962]">
                      {gallery.title}
                    </h2>
                    <p className="text-[#a0a0a0] text-sm leading-relaxed">
                      {formatPhotoCount(gallery.photo_count)} &middot; {gallery.date_range}
                    </p>
                    <div className="mt-6 inline-flex items-center text-white text-xs tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-[#c9a962]">
                      <span>Open Gallery</span>
                      <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="border border-[#2a2a2a] bg-[#141414] px-6 py-16 text-center">
              <p className="font-wedding-display text-3xl text-white">
                {galleriesPage.emptyState}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
