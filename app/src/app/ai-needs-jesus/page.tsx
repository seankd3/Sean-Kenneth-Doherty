import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  Download,
  FileText,
  MessagesSquare,
  MessageSquare,
  Mic2,
  Newspaper,
  Quote,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { withBasePath } from '@/lib/site-paths';

const title = 'AI Needs Jesus Launch Hub';
const description =
  'Shareable manifesto, scenes, essays, secular op-ed, podcast brief, 30-day distribution calendar, audience landing copy, outreach map, outreach tracker, first-week outreach queue, outreach reply kit, engineer worksheet, church handout, post sequence, objection card, formation guide, talk script, pledge, discussion guide, and technical appendix for AI Needs Jesus.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/ai-needs-jesus',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'article',
    url: 'https://seankennethdoherty.com/ai-needs-jesus',
    title,
    description,
    images: ['/images/writing/ai-needs-jesus-launch-card.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/writing/ai-needs-jesus-launch-card.jpg'],
  },
};

const packetBase = withBasePath('/downloads/ai-needs-jesus/packets');

const packets = [
  {
    title: 'Manifesto',
    eyebrow: 'Broad Public Doorway',
    description:
      'The shortest complete public form of the thesis: AI needs Jesus, not as machine conversion, but as power under Christ.',
    href: `${packetBase}/ai-needs-jesus-manifesto.md`,
    icon: FileText,
  },
  {
    title: 'AI Is Power With A Voice',
    eyebrow: 'Secular Doorway Essay',
    description:
      'A version for readers who do not begin with Christian premises but can recognize that power always serves a highest good.',
    href: `${packetBase}/ai-is-power-with-a-voice.md`,
    icon: ArrowRight,
  },
  {
    title: 'A Model Spec Is A Moral Confession',
    eyebrow: 'Engineer Memo',
    description:
      'A focused memo for builders, safety teams, founders, and product leaders about specs, evals, metrics, and deployment choices.',
    href: `${packetBase}/a-model-spec-is-a-moral-confession.md`,
    icon: ShieldCheck,
  },
  {
    title: 'AI Needs Jesus In Twelve Scenes',
    eyebrow: 'Retellable Scenes',
    description:
      'Twelve short scenes that carry the thesis into labs, classrooms, churches, policy rooms, hospitals, dashboards, and homes.',
    href: `${packetBase}/ai-needs-jesus-in-twelve-scenes.md`,
    icon: FileText,
  },
  {
    title: 'One-Page Objection Card',
    eyebrow: 'Fast Guardrail',
    description:
      'A compact shareable card for keeping the phrase from being reduced to machine souls, theocracy, branding, panic, or safety negligence.',
    href: `${packetBase}/ai-needs-jesus-objection-card.md`,
    icon: ShieldCheck,
  },
  {
    title: 'Engineer Review Worksheet',
    eyebrow: 'Launch Gate',
    description:
      'A seven-question worksheet for model specs, eval plans, memory policies, refusal design, and deployment reviews.',
    href: `${packetBase}/engineer-review-worksheet.md`,
    icon: ShieldCheck,
  },
  {
    title: 'Church Discussion Handout',
    eyebrow: 'One-Hour Church Guide',
    description:
      'A one-hour handout for pastors, elders, small groups, youth leaders, and church classes: five questions and one embodied practice.',
    href: `${packetBase}/church-discussion-handout.md`,
    icon: Users,
  },
  {
    title: 'Post And Thread Sequence',
    eyebrow: 'Public Conversation Spine',
    description:
      'A platform-neutral sequence with hooks, guardrails, scenes, objections, practices, and invitation for carrying the thesis publicly.',
    href: `${packetBase}/post-thread-sequence.md`,
    icon: MessageSquare,
  },
  {
    title: 'Secular/Global Op-Ed',
    eyebrow: 'Publication Draft',
    description:
      'A publication-ready doorway essay for editors, newsletters, civic forums, university groups, and technology readers.',
    href: `${packetBase}/secular-global-op-ed.md`,
    icon: Newspaper,
  },
  {
    title: 'Podcast And Interview Brief',
    eyebrow: 'Conversation Prep',
    description:
      'A brief for podcasts, panels, journalists, and recorded conversations: five hard questions, five short answers, and five stories.',
    href: `${packetBase}/podcast-interview-brief.md`,
    icon: MessagesSquare,
  },
  {
    title: '30-Day Distribution Calendar',
    eyebrow: 'Launch Rhythm',
    description:
      'A month-long public, private, and embodied rhythm that repeats the core meme stack across audiences without inventing a new slogan every day.',
    href: `${packetBase}/thirty-day-distribution-calendar.md`,
    icon: CalendarDays,
  },
  {
    title: 'Audience Landing Copy',
    eyebrow: 'Audience Doors',
    description:
      'Landing-page, email, social, CTA, and objection copy for engineers, churches, parents and teachers, and secular AI-risk readers.',
    href: `${packetBase}/audience-landing-copy.md`,
    icon: Users,
  },
  {
    title: 'Outreach Map',
    eyebrow: 'Contact Rhythm',
    description:
      'Concrete outreach lanes, target categories, pitch subjects, first-message templates, follow-ups, tracker fields, and stop rules.',
    href: `${packetBase}/outreach-map.md`,
    icon: MessageSquare,
  },
  {
    title: 'Outreach Tracker And Weekly Review',
    eyebrow: 'Tracking Sheet',
    description:
      'Printable and spreadsheet-copyable tracker with guardrails, stop rules, objection routing, and Friday review prompts.',
    href: `${packetBase}/outreach-tracker-and-weekly-review.md`,
    icon: ClipboardCheck,
  },
  {
    title: 'First-Week Outreach Queue',
    eyebrow: 'Research Queue',
    description:
      'Twenty-row first-week queue builder with high-fit target categories, exact research fields, fit gates, send order, and message drafts.',
    href: `${packetBase}/first-week-outreach-queue.md`,
    icon: CalendarDays,
  },
  {
    title: 'Outreach Reply Kit',
    eyebrow: 'Second Message',
    description:
      'Reply templates for interested, skeptical, hostile, technical, pastoral, parent/teacher, secular, media, referral, and decline responses.',
    href: `${packetBase}/outreach-reply-kit.md`,
    icon: MessagesSquare,
  },
  {
    title: 'The Opposite Of Doom Is Not Hype',
    eyebrow: 'Anti-Doomer Essay',
    description:
      'A public essay that honors real AI danger without making catastrophe lord or answering fear with shallow techno-optimism.',
    href: `${packetBase}/the-opposite-of-doom-is-not-hype.md`,
    icon: FileText,
  },
  {
    title: 'Generated Fluency Is Not Formation',
    eyebrow: 'Parent And Pastor Guide',
    description:
      'A guide for parents, pastors, teachers, churches, and schools on protecting embodied formation from synthetic replacement.',
    href: `${packetBase}/generated-fluency-is-not-formation.md`,
    icon: Users,
  },
  {
    title: 'Objections And Replies',
    eyebrow: 'Guardrail FAQ',
    description:
      'Concise replies when the thesis is reduced to machine souls, theocracy, anti-AI panic, Christian branding, or safety negligence.',
    href: `${packetBase}/objections-and-replies.md`,
    icon: ShieldCheck,
  },
  {
    title: 'Discussion Guide',
    eyebrow: 'Groups And Families',
    description:
      'Questions for churches, labs, schools, families, reading groups, and teams that want to discuss the book in practice.',
    href: `${packetBase}/discussion-guide.md`,
    icon: Users,
  },
  {
    title: 'Quote-Card Set',
    eyebrow: 'Social Launch Assets',
    description:
      'Twelve shareable lines with guardrails and captions so the idea can travel without becoming a distorted slogan.',
    href: `${packetBase}/quote-card-set.md`,
    icon: Quote,
  },
  {
    title: 'Twenty-Minute Talk Script',
    eyebrow: 'Spoken Version',
    description:
      'A compact talk moving from category shock to power, worship, Christ, engineering practice, and hope.',
    href: `${packetBase}/twenty-minute-talk-script.md`,
    icon: Mic2,
  },
  {
    title: 'Public Pledge',
    eyebrow: 'Commitments',
    description:
      'A short pledge for builders, leaders, churches, families, and users who want AI to remain in the place of service.',
    href: `${packetBase}/public-pledge.md`,
    icon: ShieldCheck,
  },
  {
    title: 'Technical Appendix',
    eyebrow: 'Design Constraints',
    description:
      'Christ-shaped constraints for AI systems without machine personhood, spiritual-authority claims, or safety negligence.',
    href: `${packetBase}/technical-appendix-christ-shaped-constraints.md`,
    icon: FileText,
  },
];

const launchSequence = [
  'Use the manifesto as the broad public doorway.',
  'Use the secular essay for readers skeptical of church-first framing.',
  'Use the twelve-scenes packet when the idea needs to become vivid enough to retell.',
  'Use the one-page objection card when the phrase is being misunderstood quickly.',
  'Use the engineer review worksheet when a team needs a concrete launch-gate review.',
  'Use the church discussion handout for pastors, small groups, elders, youth leaders, and church classes.',
  'Use the post/thread sequence when taking the idea into public conversation without platform-specific tricks.',
  'Use the secular/global op-ed when approaching editors, newsletters, civic forums, university groups, and technology readers.',
  'Use the podcast/interview brief when preparing for skeptical hosts, Christian hosts, technical hosts, panels, or recorded conversations.',
  'Use the 30-day distribution calendar to turn the packet set into a repeatable month of public, private, and embodied actions.',
  'Use the audience landing copy when building audience-specific pages, event sections, email notes, and handouts.',
  'Use the outreach map when choosing who to contact, what to send first, how to follow up, and when to stop.',
  'Use the outreach tracker and weekly review sheet when turning the contact map into actual weekly work.',
  'Use the first-week outreach queue to research the first twenty high-fit rows before sending.',
  'Use the outreach reply kit when people answer, object, refer, decline, or invite a deeper conversation.',
  'Use the anti-doomer essay where AI fear is culturally loud.',
  'Use the parent and pastor guide where formation, children, church life, and education are the concern.',
  'Use the full objections and replies wherever the thesis is being flattened into a caricature.',
  'Use the engineer memo and technical appendix for deeper lab, builder, founder, and product-team work.',
  'Use the quote-card set for social surfaces, always with guardrails attached.',
  'Use the talk script for churches, schools, meetups, podcasts, and recorded talks.',
  'Use the discussion guide and pledge to turn attention into practice.',
];

const verifiedSurfaces = [
  {
    label: 'Read the book',
    href: withBasePath('/the-first-prompt'),
  },
  {
    label: 'Writing index',
    href: withBasePath('/writing'),
  },
  {
    label: 'Public Gist',
    href: 'https://gist.github.com/Sean-Kenneth-Doherty/260ce85278912004ed93fa428401abc0',
  },
  {
    label: 'Rentry mirror',
    href: 'https://rentry.co/ai-needs-jesus-5993cf73',
  },
  {
    label: 'Telegraph mirror',
    href: 'https://telegra.ph/AI-Needs-Jesus-05-20',
  },
  {
    label: 'JotSpot mirror',
    href: 'https://jotspot.io/j/hw7b6bcs',
  },
];

export default function AiNeedsJesusLaunchHub() {
  return (
    <div className="min-h-screen bg-[#080706] text-white">
      <section className="relative min-h-[74vh] overflow-hidden px-4 pt-32 sm:px-6 lg:px-8">
        <img
          src={withBasePath('/images/writing/ai-needs-jesus-launch-card.jpg')}
          alt="AI Needs Jesus launch card"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[#080706]/70" />
        <div className="relative mx-auto flex min-h-[calc(74vh-8rem)] max-w-6xl flex-col justify-center pb-16">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c9a962]">
            Launch Hub
          </p>
          <h1 className="max-w-4xl font-wedding-display text-5xl leading-none text-white md:text-7xl">
            AI Needs Jesus
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-[#f4efe3] md:text-2xl">
            Shareable public assets for the case that artificial intelligence must remain power under Christ, not power under an idol.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#d8d2c3]">
            Not machine conversion. Not coercive theocracy. Not a substitute for technical safety work. The claim is that every consequential system serves a highest good, and every lesser god becomes dangerous when scaled.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/the-first-prompt"
              className="inline-flex items-center justify-center gap-2 border border-[#c9a962] bg-[#c9a962] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#080706] transition-colors hover:bg-white"
            >
              <FileText size={16} />
              Read The Book
            </Link>
            <a
              href={withBasePath('/downloads/ai-needs-jesus/AI%20Needs%20Jesus.pdf')}
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#c9a962] hover:text-[#c9a962]"
            >
              <Download size={16} />
              Download PDF
            </a>
            <a
              href="#packets"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#c9a962] hover:text-[#c9a962]"
            >
              <ArrowRight size={16} />
              Use The Packets
            </a>
          </div>
        </div>
      </section>

      <section id="packets" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a962]">
            Packet Set
          </p>
          <h2 className="font-wedding-display text-4xl leading-tight text-white md:text-5xl">
            Doorways for different rooms
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#d8d2c3]">
            The book can enter a lab meeting, a church class, a parent conversation, a policy memo, or a social feed without losing its center. Each packet carries the thesis with its guardrails attached.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {packets.map((packet) => {
              const Icon = packet.icon;
              return (
                <a
                  key={packet.href}
                  href={packet.href}
                  className="group border border-[#2a2a2a] bg-[#0f0d0b] p-5 transition-colors hover:border-[#c9a962]"
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#c9a962]">
                        {packet.eyebrow}
                      </p>
                      <h3 className="mt-2 font-wedding-display text-2xl text-white">
                        {packet.title}
                      </h3>
                    </div>
                    <Icon className="shrink-0 text-[#c9a962]" size={24} />
                  </div>
                  <p className="text-sm leading-6 text-[#d8d2c3]">{packet.description}</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c9a962] group-hover:text-white">
                    Open Markdown
                    <ArrowRight size={14} />
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#2a2a2a] bg-[#0f0d0b] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a962]">
              Core Guardrail
            </p>
            <h2 className="font-wedding-display text-4xl leading-tight text-white">
              The sentence travels with its fence.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#f4efe3]">
            AI needs Jesus does not mean machines have souls, receive salvation, become spiritual authorities, or replace technical safety work. It means that human governance, design, evaluation, deployment, and use of AI must be ordered toward the revealed character of Christ rather than toward any lesser idol.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a962]">
              Launch Sequence
            </p>
            <h2 className="font-wedding-display text-4xl leading-tight text-white">
              From attention to practice
            </h2>
            <ol className="mt-8 space-y-4">
              {launchSequence.map((item, index) => (
                <li key={item} className="flex gap-4 text-[#d8d2c3]">
                  <span className="font-mono text-sm text-[#c9a962]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c9a962]">
              Verified Surfaces
            </p>
            <h2 className="font-wedding-display text-4xl leading-tight text-white">
              Current public routes
            </h2>
            <div className="mt-8 grid gap-3">
              {verifiedSurfaces.map((surface) => (
                <a
                  key={surface.href}
                  href={surface.href}
                  className="flex items-center justify-between gap-4 border border-[#2a2a2a] bg-[#0f0d0b] px-4 py-3 text-sm text-[#d8d2c3] transition-colors hover:border-[#c9a962] hover:text-white"
                >
                  <span>{surface.label}</span>
                  <ArrowRight size={14} className="shrink-0 text-[#c9a962]" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-[#a0a0a0]">
              Audio and video from the earlier essay release remain intentionally deferred for the expanded manuscript. Use the current text edition and packet downloads here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
