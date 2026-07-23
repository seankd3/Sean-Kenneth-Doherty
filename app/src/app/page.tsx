'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, Camera, Rocket, Music, Mountain, User, Sparkles } from 'lucide-react';
import { homeCategoryCards, homeHeroImage, homeAboutImage, getFirstImage } from '@/lib/gallery-config';
import { homePage, aerospacePage } from '@/lib/content';
import { featuredTestimonials } from '@/lib/testimonials';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const iconMap: Record<string, React.ElementType> = {
    Camera,
    Rocket,
    Music,
    Mountain,
    User,
    Sparkles,
  };

  const categoryCards = homeCategoryCards.map((card) => ({
    ...card,
    icon: iconMap[card.icon],
  }));

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay },
        };

  const containerVariants = {
    hidden: { opacity: reduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={homeHeroImage}
            alt="Bride and groom by the water — wedding photography by Sean Kenneth Doherty"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.p {...fadeUp(0.15)} className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-6">
            {homePage.hero.subtitle}
          </motion.p>

          <motion.h1
            {...fadeUp(0.25)}
            className="font-wedding-display text-5xl md:text-7xl lg:text-8xl text-white mb-6"
          >
            SEAN <span className="text-[#c9a962]">KENNETH</span>
            <br />
            DOHERTY
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="text-[#a0a0a0] text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            {homePage.hero.description}
          </motion.p>

          <motion.div
            {...fadeUp(0.45)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/hire"
              className="group flex items-center space-x-2 bg-[#c9a962] text-[#0a0a0a] px-8 py-4 rounded-none font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <span>{homePage.hero.cta}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/galleries"
              className="group flex items-center space-x-2 border border-white/30 text-white px-8 py-4 rounded-none font-medium tracking-wider uppercase text-sm hover:border-[#c9a962] hover:text-[#c9a962] transition-colors duration-300"
            >
              <span>{homePage.hero.ctaSecondary}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {!reduceMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white/50"
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Three hire paths — visual, conversion-first */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {[
            {
              ...homePage.hirePaths.weddings,
              img: homeHeroImage,
              kicker: '01',
            },
            {
              ...homePage.hirePaths.events,
              img:
                getFirstImage('events/beach-house-concert') ||
                getFirstImage('events/fire-dancer') ||
                homeHeroImage,
              kicker: '02',
            },
            {
              ...homePage.hirePaths.aerospace,
              img: getFirstImage('aerospace/starbase') || homeHeroImage,
              kicker: '03',
            },
          ].map((card) => (
            <div
              key={card.label}
              className="group relative overflow-hidden border border-[#2a2a2a] bg-[#141414] min-h-[220px] flex flex-col"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={card.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[#c9a962] text-[10px] tracking-[0.25em] uppercase mb-1">{card.kicker}</p>
                <h2 className="font-wedding-display text-2xl text-white mb-2">{card.label}</h2>
                <p className="text-[#a0a0a0] text-sm mb-4 flex-1">{card.description}</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Link
                    href={card.href}
                    className="inline-flex items-center text-xs tracking-wider uppercase bg-[#c9a962] text-[#0a0a0a] px-4 py-2 font-medium hover:bg-white transition-colors"
                  >
                    Inquire
                    <ArrowRight size={12} className="ml-1.5" />
                  </Link>
                  <Link
                    href={card.explore}
                    className="text-xs tracking-wider uppercase text-white/70 hover:text-[#c9a962] transition-colors"
                  >
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-5">
          <Link href="/hire" className="text-xs tracking-[0.2em] uppercase text-[#666] hover:text-[#c9a962] transition-colors">
            Full hire guide →
          </Link>
        </p>
      </section>

      {/* Portfolio Categories */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
            <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
              Explore My Work
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Every category is a full gallery — not a teaser. Pick the work that matches what you need.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {categoryCards.map((card, index) => (
              <motion.div key={card.title} variants={itemVariants}>
                <Link href={card.link} className="group block relative overflow-hidden border border-[#1a1a1a]">
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#111]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/35 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                    <div className="flex items-center space-x-3 mb-3">
                      {card.icon ? <card.icon size={18} className="text-[#c9a962]" /> : null}
                      <span className="text-[#c9a962] text-xs tracking-[0.2em] uppercase">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-wedding-display text-2xl md:text-3xl text-white mb-2 group-hover:text-[#c9a962] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[#a0a0a0] text-sm mb-4">{card.description}</p>
                    <div className="flex items-center text-white text-sm tracking-wider uppercase">
                      <span>View Gallery</span>
                      <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">About</p>
              <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
                {homePage.about.title}
              </h2>
              {homePage.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-[#a0a0a0] ${index < homePage.about.paragraphs.length - 1 ? 'mb-6' : 'mb-8'} leading-relaxed`}
                >
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap gap-6 mb-8">
                {homePage.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[#c9a962] font-wedding-display text-3xl">{stat.value}</p>
                    <p className="text-[#a0a0a0] text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-[#c9a962] hover:text-white transition-colors duration-300"
                >
                  <span className="tracking-wider uppercase text-sm">Get In Touch</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center space-x-2 text-white/70 hover:text-[#c9a962] transition-colors duration-300"
                >
                  <span className="tracking-wider uppercase text-sm">Wedding pricing</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden aspect-[4/5] bg-[#0a0a0a]">
                <img
                  src={homeAboutImage}
                  alt="Portrait work by Sean Kenneth Doherty, photographer based in Austin, Texas"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#c9a962] text-[#0a0a0a] p-4 sm:p-6 max-w-[calc(100%-1rem)]">
                <p className="font-wedding-display text-xl sm:text-2xl">Austin, TX</p>
                <p className="text-xs sm:text-sm">Available for travel worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Conversion — wedding packages callout */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-[#141414]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="border border-[#2a2a2a] p-6 md:p-8 bg-[#0a0a0a]/40">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Weddings</p>
            <h2 className="font-wedding-display text-2xl md:text-3xl text-white mb-4">
              Collections from $1,400
            </h2>
            <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">
              Transparent packages you can build yourself — then inquire with pricing already filled in.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="inline-flex items-center bg-[#c9a962] text-[#0a0a0a] px-5 py-2.5 text-xs tracking-wider uppercase font-medium hover:bg-white transition-colors"
              >
                Build a package
              </Link>
              <Link
                href="/austin-wedding-photographer"
                className="inline-flex items-center text-[#c9a962] text-xs tracking-wider uppercase hover:text-white transition-colors"
              >
                Austin weddings →
              </Link>
            </div>
          </div>
          <div className="border border-[#2a2a2a] p-6 md:p-8">
            <p className="text-[#c9a962] text-xs tracking-[0.25em] uppercase mb-4">Events & concerts</p>
            <h3 className="font-wedding-display text-2xl md:text-3xl text-white mb-3">
              Live music & night energy
            </h3>
            <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">
              Concerts, festivals, private parties, and brand nights — stage light, crowd heat, and the frames that travel on social.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=Concert%2FFestival"
                className="inline-flex items-center bg-[#c9a962] text-[#0a0a0a] px-5 py-2.5 text-xs tracking-wider uppercase font-medium hover:bg-white transition-colors"
              >
                Book a show
              </Link>
              <Link
                href="/austin-event-concert-photographer"
                className="inline-flex items-center text-[#c9a962] text-xs tracking-wider uppercase hover:text-white transition-colors"
              >
                Events marketing →
              </Link>
            </div>
          </div>
          <div className="border border-[#2a2a2a] p-6 md:p-8">
            <p className="text-[#c9a962] text-xs tracking-[0.25em] uppercase mb-4">Aerospace & press</p>
            <h3 className="font-wedding-display text-2xl md:text-3xl text-white mb-3">
              Launch documentation
            </h3>
            <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">
              Former SpaceX avionics tech. Starbase coverage, remote cameras, and technical storytelling for teams that need it right.
            </p>
            <Link
              href="/contact?type=Aerospace%2FCommercial"
              className="inline-flex items-center text-[#c9a962] text-xs tracking-wider uppercase hover:text-white transition-colors"
            >
              Request coverage →
            </Link>
          </div>
        </div>
      </section>


      {/* Trust logos — already proven on aerospace; surface for wedding + commercial visitors */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-8">
            Worked with
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center opacity-80">
            {aerospacePage.experience.companies.map((c) => (
              <div key={c.name} className="flex items-center justify-center h-12 w-full px-2" title={c.name}>
                <img
                  src={c.logo}
                  alt={c.name}
                  className={`max-h-10 max-w-[110px] object-contain ${c.invert ? 'invert' : ''}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs tracking-wider uppercase">
            <Link href="/austin-wedding-photographer" className="text-[#a0a0a0] hover:text-[#c9a962] transition-colors">
              Austin wedding photographer
            </Link>
            <span className="text-[#333]">·</span>
            <Link href="/starbase-aerospace-photographer" className="text-[#a0a0a0] hover:text-[#c9a962] transition-colors">
              Starbase aerospace photographer
            </Link>
            <span className="text-[#333]">·</span>
            <Link href="/austin-event-concert-photographer" className="text-[#a0a0a0] hover:text-[#c9a962] transition-colors">
              Event & concert photographer
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip before final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 border-y border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a962] text-xs tracking-[0.3em] uppercase mb-6">
            {homePage.trustStrip.title}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {homePage.trustStrip.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#c9a962] text-sm tracking-wider uppercase transition-colors inline-flex items-center"
              >
                {item.label}
                <ArrowRight size={14} className="ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials testimonials={featuredTestimonials} />

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-wedding-display text-4xl md:text-6xl text-white mb-6">
            Let&apos;s Create Something
            <br />
            <span className="text-[#c9a962]">Extraordinary</span>
          </h2>
          <p className="text-[#a0a0a0] mb-10 max-w-xl mx-auto">
            Whether you&apos;re planning your dream wedding or need aerospace documentation,
            I&apos;d love to hear about your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hire"
              className="inline-flex items-center space-x-3 bg-[#c9a962] text-[#0a0a0a] px-10 py-5 rounded-none font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300"
            >
              <span>See how to hire me</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact?type=Aerospace%2FCommercial"
              className="inline-flex items-center space-x-3 border border-white/25 text-white px-10 py-5 text-sm tracking-wider uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
            >
              <span>Aerospace inquiry</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
