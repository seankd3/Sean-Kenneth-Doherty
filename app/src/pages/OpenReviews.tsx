import { motion } from 'framer-motion';
import { Star, Check, X, Github, Heart, Zap, Shield, Code, Server } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function OpenReviews() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-sm font-medium">Open Source • MIT License</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Own your reviews.
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              No monthly extortion.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
            The open-source Trustpilot alternative. Self-hosted, free forever.
            <span className="text-white font-semibold"> Your data. Your rules.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="https://github.com/Sean-Kenneth-Doherty/openreviews" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl transition transform hover:scale-105 shadow-lg shadow-emerald-500/25"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
            </a>
            <a 
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition backdrop-blur-sm"
            >
              <Heart className="w-5 h-5" />
              Pay What You Want
            </a>
          </div>

          {/* Deploy command */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-xl mx-auto backdrop-blur-sm">
            <p className="text-gray-400 text-sm mb-3">Deploy in seconds:</p>
            <div className="bg-black/50 rounded-lg p-4 font-mono text-sm md:text-base flex items-center justify-between gap-4">
              <code className="text-emerald-400 overflow-x-auto">docker compose up -d</code>
              <button 
                onClick={() => navigator.clipboard.writeText('docker compose up -d')}
                className="text-gray-500 hover:text-white transition flex-shrink-0"
                aria-label="Copy command"
              >
                <Code className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Review Platform Racket</h2>
            <p className="text-xl text-gray-400">Stop paying rent on reviews your customers wrote</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Trustpilot */}
            <motion.div 
              className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-red-400">Trustpilot</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                {[
                  { bold: '$299/mo', text: 'just to respond to reviews' },
                  { bold: '$1,099/mo', text: 'for basic widgets' },
                  { bold: 'They own', text: 'your review data' },
                  { bold: 'Stop paying?', text: 'Lose everything' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">{item.bold}</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-red-500/20">
                <p className="text-2xl font-bold text-red-400">$13,188+/year</p>
                <p className="text-gray-500">For reviews YOUR customers wrote</p>
              </div>
            </motion.div>

            {/* OpenReviews */}
            <motion.div 
              className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 shadow-lg shadow-emerald-500/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-emerald-400">OpenReviews</h3>
              </div>
              <ul className="space-y-4 text-gray-300">
                {[
                  { bold: 'Free forever', text: '— self-hosted, open source' },
                  { bold: 'Your data', text: '— export anytime' },
                  { bold: 'Full features', text: '— widgets, admin, API' },
                  { bold: 'No lock-in', text: '— ever' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">{item.bold}</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-emerald-500/20">
                <p className="text-2xl font-bold text-emerald-400">$0/year</p>
                <p className="text-gray-500">Your reviews. Your rules.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-400">All the features. None of the fees.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Star, title: 'Review Collection', desc: 'Beautiful widget for your site. Collect authentic customer feedback.' },
              { icon: Code, title: 'Embeddable Widget', desc: 'Vanilla JS, Shadow DOM. Works anywhere, no conflicts.' },
              { icon: Shield, title: 'Spam Detection', desc: 'Built-in filtering for duplicates, links, and suspicious patterns.' },
              { icon: Server, title: 'Admin Dashboard', desc: 'Approve, reject, manage. Full control over your reviews.' },
              { icon: Zap, title: 'REST API', desc: 'Full API access. Integrate with anything.' },
              { icon: Github, title: 'Open Source', desc: 'MIT licensed. Fork it, modify it, own it.' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pay What You Want */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-b from-transparent to-emerald-500/5">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <Heart className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pay What You Want</h2>
            <p className="text-xl text-gray-400 mb-8">
              OpenReviews is free and open source. If it saves you $299/month, 
              consider throwing something my way. No pressure.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { amount: '$0', label: 'Free forever', desc: 'Self-host it' },
                { amount: '$20', label: 'Coffee money', desc: 'If it helped' },
                { amount: '$99', label: 'Supporter', desc: 'You\'re awesome' },
              ].map((tier, i) => (
                <div 
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition"
                >
                  <p className="text-2xl font-bold text-emerald-400">{tier.amount}</p>
                  <p className="font-medium">{tier.label}</p>
                  <p className="text-sm text-gray-500">{tier.desc}</p>
                </div>
              ))}
            </div>

            <a 
              href="https://github.com/sponsors/Sean-Kenneth-Doherty" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              <Heart className="w-5 h-5" />
              Support on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          {...fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to own your reviews?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/Sean-Kenneth-Doherty/openreviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-xl transition hover:bg-gray-200"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
            <a 
              href="https://github.com/Sean-Kenneth-Doherty/openreviews#quick-start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              Get Started →
            </a>
          </div>
          <p className="text-gray-500 mt-8 text-sm">
            MIT License • Your customers wrote those reviews. You should own them.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
