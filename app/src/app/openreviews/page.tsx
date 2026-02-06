'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Star, Check, X, Github, Heart, Zap, Shield, Code, Server, Quote, ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

// Animated star rating component
function AnimatedStars({ rating, size = 20, delay = 0 }: { rating: number; size?: number; delay?: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: delay + star * 0.1,
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
        >
          <Star
            size={size}
            className={star <= rating
              ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]"
              : "text-gray-600"
            }
          />
        </motion.div>
      ))}
    </div>
  );
}

// Animated counter for stats
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, value, rounded]);

  return <span>{displayValue.toLocaleString()}{suffix}</span>;
}

// Floating particles background
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Widget preview mockup
function WidgetPreview() {
  const reviews = [
    { name: "Sarah M.", rating: 5, text: "Finally free from Trustpilot's pricing! Setup took 5 minutes.", avatar: "SM" },
    { name: "David K.", rating: 5, text: "Our reviews, our data. Should've switched sooner.", avatar: "DK" },
    { name: "Emma R.", rating: 5, text: "The widget looks better than paid alternatives.", avatar: "ER" },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Glow effect behind widget */}
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60" />

      {/* Widget container with glassmorphism */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-emerald-500/10">
        {/* Widget header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
              <Star className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-semibold text-white">OpenReviews</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-amber-400 font-bold">4.9</span>
            <AnimatedStars rating={5} size={14} />
          </div>
        </div>

        {/* Rotating review */}
        <motion.div
          key={currentReview}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-white/5 rounded-xl p-4 border border-white/5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full flex items-center justify-center text-emerald-400 font-semibold text-sm border border-emerald-500/20">
              {reviews[currentReview].avatar}
            </div>
            <div>
              <p className="font-medium text-white text-sm">{reviews[currentReview].name}</p>
              <AnimatedStars rating={reviews[currentReview].rating} size={12} delay={0.2} />
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">&ldquo;{reviews[currentReview].text}&rdquo;</p>
        </motion.div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-4">
          {reviews.map((_, i) => (
            <motion.div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentReview ? 'w-6 bg-emerald-400' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* Write review button */}
        <motion.button
          className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium py-2.5 rounded-lg text-sm flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Sparkles className="w-4 h-4" />
          Write a Review
        </motion.button>
      </div>

      {/* Floating badge */}
      <motion.div
        className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        LIVE DEMO
      </motion.div>
    </motion.div>
  );
}

// Glowing button component
function GlowButton({
  children,
  href,
  variant = 'primary',
  className = ''
}: {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'white';
  className?: string;
}) {
  const variants = {
    primary: {
      base: 'bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 text-white',
      glow: 'group-hover:shadow-[0_0_40px_8px_rgba(16,185,129,0.4)]',
      ring: 'ring-emerald-400/50',
    },
    secondary: {
      base: 'bg-white/10 backdrop-blur-sm text-white border border-white/20',
      glow: 'group-hover:shadow-[0_0_30px_6px_rgba(255,255,255,0.1)]',
      ring: 'ring-white/30',
    },
    white: {
      base: 'bg-white text-black',
      glow: 'group-hover:shadow-[0_0_40px_8px_rgba(255,255,255,0.3)]',
      ring: 'ring-white/50',
    },
  };

  const v = variants[variant];

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`group relative inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-300 ${v.base} ${v.glow} hover:ring-2 ${v.ring} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

// Testimonial card
function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  delay = 0
}: {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      {/* Glow on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:border-emerald-500/30 transition-all duration-300">
        <Quote className="w-8 h-8 text-emerald-400/40 mb-4" />
        <p className="text-gray-300 mb-6 leading-relaxed">{quote}</p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full flex items-center justify-center text-emerald-400 font-semibold border border-emerald-500/20">
            {avatar}
          </div>
          <div>
            <p className="font-medium text-white">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Staggered list animation variants
const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 }
  },
};

export default function OpenReviewsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-teal-900/20" />
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px]"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <FloatingParticles />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full px-4 py-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 text-sm font-medium">Open Source • MIT License</span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Own your reviews.
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    No monthly extortion.
                  </span>
                  <motion.span
                    className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 blur-2xl -z-10"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-400 mb-10 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                The open-source Trustpilot alternative. Self-hosted, free forever.
                <span className="text-white font-semibold"> Your data. Your rules.</span>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <GlowButton href="https://github.com/Sean-Kenneth-Doherty/openreviews" variant="primary">
                  <Github className="w-5 h-5" />
                  Star on GitHub
                </GlowButton>
                <GlowButton href="#pricing" variant="secondary">
                  <Heart className="w-5 h-5" />
                  Pay What You Want
                </GlowButton>
              </motion.div>

              {/* Deploy command */}
              <motion.div
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}
              >
                <p className="text-gray-400 text-sm mb-3">Deploy in seconds:</p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm md:text-base flex items-center justify-between gap-4 group">
                  <code className="text-emerald-400 overflow-x-auto">docker compose up -d</code>
                  <motion.button
                    onClick={() => navigator.clipboard.writeText('docker compose up -d')}
                    className="text-gray-500 hover:text-emerald-400 transition flex-shrink-0"
                    aria-label="Copy command"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Code className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Right column - Widget preview */}
            <div className="lg:pl-8">
              <WidgetPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 13188, suffix: '+', label: 'Saved per year', prefix: '$' },
                { value: 100, suffix: '%', label: 'Open source' },
                { value: 5, suffix: ' min', label: 'Setup time' },
                { value: 0, suffix: '', label: 'Vendor lock-in', prefix: '$' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    {stat.prefix}<AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Review Platform Racket</h2>
            <p className="text-xl text-gray-400">Stop paying rent on reviews your customers wrote</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Trustpilot */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-red-500/5 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 10 }}
                  >
                    <X className="w-6 h-6 text-red-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-red-400">Trustpilot</h3>
                </div>
                <motion.ul
                  className="space-y-4 text-gray-300"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[
                    { bold: '$299/mo', text: 'just to respond to reviews' },
                    { bold: '$1,099/mo', text: 'for basic widgets' },
                    { bold: 'They own', text: 'your review data' },
                    { bold: 'Stop paying?', text: 'Lose everything' },
                  ].map((item, i) => (
                    <motion.li key={i} className="flex items-start gap-3" variants={staggerItem}>
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">{item.bold}</strong> {item.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="mt-6 pt-6 border-t border-red-500/20">
                  <p className="text-3xl font-bold text-red-400">$13,188+/year</p>
                  <p className="text-gray-500">For reviews YOUR customers wrote</p>
                </div>
              </div>
            </motion.div>

            {/* OpenReviews */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-cyan-500/30 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-emerald-500/5 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: -10 }}
                  >
                    <Check className="w-6 h-6 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-emerald-400">OpenReviews</h3>
                </div>
                <motion.ul
                  className="space-y-4 text-gray-300"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {[
                    { bold: 'Free forever', text: '— self-hosted, open source' },
                    { bold: 'Your data', text: '— export anytime' },
                    { bold: 'Full features', text: '— widgets, admin, API' },
                    { bold: 'No lock-in', text: '— ever' },
                  ].map((item, i) => (
                    <motion.li key={i} className="flex items-start gap-3" variants={staggerItem}>
                      <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">{item.bold}</strong> {item.text}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="mt-6 pt-6 border-t border-emerald-500/20">
                  <p className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">$0/year</p>
                  <p className="text-gray-500">Your reviews. Your rules.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-400">All the features. None of the fees.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Star, title: 'Review Collection', desc: 'Beautiful widget for your site. Collect authentic customer feedback.', color: 'amber' },
              { icon: Code, title: 'Embeddable Widget', desc: 'Vanilla JS, Shadow DOM. Works anywhere, no conflicts.', color: 'emerald' },
              { icon: Shield, title: 'Spam Detection', desc: 'Built-in filtering for duplicates, links, and suspicious patterns.', color: 'blue' },
              { icon: Server, title: 'Admin Dashboard', desc: 'Approve, reject, manage. Full control over your reviews.', color: 'purple' },
              { icon: Zap, title: 'REST API', desc: 'Full API access. Integrate with anything.', color: 'orange' },
              { icon: Github, title: 'Open Source', desc: 'MIT licensed. Fork it, modify it, own it.', color: 'teal' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <motion.div
                  className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:border-emerald-500/40 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-xl flex items-center justify-center mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <feature.icon className="w-6 h-6 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Loved by Developers</h2>
            <p className="text-xl text-gray-400">Join hundreds who&apos;ve escaped the review platform racket</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Deployed OpenReviews in 5 minutes. Our customers love the clean widget, and I love not paying $1,099/month for basic features."
              author="Marcus Chen"
              role="CTO, TechStartup"
              avatar="MC"
              delay={0}
            />
            <TestimonialCard
              quote="Finally, reviews we actually own. The API is clean, the widget is beautiful, and the setup was trivially simple. This is how software should be."
              author="Sarah Williams"
              role="Founder, E-commerce Brand"
              avatar="SW"
              delay={0.1}
            />
            <TestimonialCard
              quote="Trustpilot wanted $300/month just to respond to reviews. OpenReviews does everything we need for free. The ROI is literally infinite."
              author="David Park"
              role="Agency Owner"
              avatar="DP"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Pay What You Want */}
      <section id="pricing" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Background glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl blur-2xl" />

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Heart className="w-16 h-16 text-emerald-400 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]" />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4">Pay What You Want</h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                OpenReviews is free and open source. If it saves you $299/month,
                consider throwing something my way. No pressure.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {[
                  { amount: '$0', label: 'Free forever', desc: 'Self-host it', popular: false },
                  { amount: '$20', label: 'Coffee money', desc: 'If it helped', popular: false },
                  { amount: '$99', label: 'Supporter', desc: "You're awesome", popular: true },
                ].map((tier, i) => (
                  <motion.div
                    key={i}
                    className={`relative group ${tier.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-teal-400 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                        POPULAR
                      </div>
                    )}
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <motion.div
                      className={`relative bg-white/5 border rounded-xl p-6 h-full ${
                        tier.popular ? 'border-emerald-500/50' : 'border-white/10'
                      } hover:border-emerald-500/50 transition-all`}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <p className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                        {tier.amount}
                      </p>
                      <p className="font-semibold text-white">{tier.label}</p>
                      <p className="text-sm text-gray-500">{tier.desc}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <GlowButton href="https://github.com/sponsors/Sean-Kenneth-Doherty" variant="primary">
                <Heart className="w-5 h-5" />
                Support on GitHub
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-8"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundImage: 'linear-gradient(90deg, #fff, #34d399, #2dd4bf, #fff)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ready to own your reviews?
          </motion.h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <GlowButton href="https://github.com/Sean-Kenneth-Doherty/openreviews" variant="white">
              <Github className="w-5 h-5" />
              View on GitHub
            </GlowButton>
            <GlowButton href="https://github.com/Sean-Kenneth-Doherty/openreviews#quick-start" variant="primary">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </GlowButton>
          </div>

          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            MIT License • Your customers wrote those reviews. You should own them.
          </motion.p>
        </motion.div>
      </section>

      {/* Footer gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
    </div>
  );
}
