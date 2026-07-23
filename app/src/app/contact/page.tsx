'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Copy, Check, AlertCircle, Package } from 'lucide-react';
import { contactPage, siteConfig } from '@/lib/content';
import {
  buildInquiryBody,
  type ContactInquiry,
} from '@/lib/contact-inquiry';
import { submitInquiry } from '@/lib/submit-inquiry';
import {
  weddingPackages,
  weddingAddOns,
  pricingConfig,
  formatPrice,
} from '@/lib/content/wedding-pricing';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

type HandoffStatus =
  | { type: 'sent'; message: string }
  | { type: 'draft'; message: string }
  | { type: 'copied'; message: string }
  | { type: 'error'; message: string }
  | null;

type PricingSelection = {
  pkg: (typeof weddingPackages)[number];
  addons: Array<(typeof weddingAddOns)[number] & { qty: number }>;
  payInFull: boolean;
  total: number;
  discount: number;
};

const requiredFieldOrder: (keyof FormErrors)[] = ['firstName', 'lastName', 'email', 'message'];

function parsePricingFromSearch(search: string): PricingSelection | null {
  const params = new URLSearchParams(search);
  const packageId = params.get('package');
  if (!packageId) return null;

  const pkg = weddingPackages.find((p) => p.id === packageId);
  if (!pkg) return null;

  const addonIds = (params.get('addons') || '').split(',').filter(Boolean);
  const addons = addonIds
    .map((id) => {
      const addon = weddingAddOns.find((a) => a.id === id);
      if (!addon) return null;
      const qtyParam = params.get(`qty_${id}`);
      const qty = qtyParam ? Math.min(parseInt(qtyParam, 10) || 1, addon.maxQuantity || 4) : 1;
      return { ...addon, qty };
    })
    .filter((a): a is NonNullable<typeof a> => a !== null);

  const payInFull = params.get('payInFull') === '1';
  const addOnsTotal = addons.reduce((sum, a) => sum + a.price * a.qty, 0);
  const subtotal = pkg.price + addOnsTotal;
  const discount = payInFull ? pricingConfig.payInFullDiscount : 0;
  const total = subtotal - discount;

  return { pkg, addons, payInFull, total, discount };
}

function buildPrefillMessage(selection: PricingSelection): string {
  const { pkg, addons, payInFull, total } = selection;
  const lines = [`Hi! I'm interested in the ${pkg.name} package (${formatPrice(pkg.price)}).`];
  if (addons.length > 0) {
    lines.push('');
    lines.push('Add-ons:');
    for (const a of addons) {
      const qtyStr = a.qty > 1 ? ` x${a.qty}` : '';
      lines.push(`- ${a.name}${qtyStr} (${formatPrice(a.price * a.qty)})`);
    }
  }
  if (payInFull) {
    lines.push('');
    lines.push("I'd like to pay in full for the $200 discount.");
  }
  lines.push('');
  lines.push(`Estimated total: ${formatPrice(total)}`);
  lines.push('');
  lines.push('Could you let me know about availability for my date?');
  return lines.join('\n');
}

export default function ContactPage() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [pricingSelection, setPricingSelection] = useState<PricingSelection | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    referralSource: '',
    message: '',
    companyWebsite: '', // honeypot — leave empty
  });

  // Client-only URL parse — avoids Next useSearchParams CSR bailout (empty form without JS)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get('type') || '';
    const selection = parsePricingFromSearch(window.location.search);
    if (selection) {
      setPricingSelection(selection);
      const prefill = buildPrefillMessage(selection);
      setFormData((prev) => ({
        ...prev,
        eventType: prev.eventType || 'Wedding',
        message: prev.message || prefill,
      }));
      return;
    }
    if (typeParam) {
      // Match contact form eventTypes options (Wedding, Aerospace/Commercial, etc.)
      setFormData((prev) => ({
        ...prev,
        eventType: prev.eventType || typeParam,
        message:
          prev.message ||
          (typeParam.toLowerCase().includes('aerospace')
            ? "Hi Sean — I'm interested in aerospace / launch documentation. Here are the details:\n\n"
            : typeParam.toLowerCase().includes('wedding')
              ? "Hi Sean — I'm planning a wedding and would love to check your availability.\n\n"
              : ''),
      }));
    }
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [handoffStatus, setHandoffStatus] = useState<HandoffStatus>(null);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const focusFirstInvalidField = (newErrors: FormErrors) => {
    const firstErrorField = requiredFieldOrder.find((field) => newErrors[field]);
    if (!firstErrorField || !formRef.current) return;

    requestAnimationFrame(() => {
      const field = formRef.current?.querySelector<HTMLElement>(`[name="${firstErrorField}"]`);
      field?.focus();
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
    setHandoffStatus(null);
  };

  const copyInquiry = async () => {
    const body = buildInquiryBody(formData);

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(body);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = body;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (!copied) {
          throw new Error('Copy command failed');
        }
      }

      setHandoffStatus({
        type: 'copied',
        message: 'Inquiry copied. Paste it into your email app when you are ready to send.',
      });
    } catch {
      setHandoffStatus({
        type: 'error',
        message: `Copy did not work in this browser. Your message is still in the form, and you can email ${siteConfig.email} directly.`,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHandoffStatus(null);

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      focusFirstInvalidField(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const inquiry: ContactInquiry = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      eventType: formData.eventType,
      date: formData.date,
      referralSource: formData.referralSource,
      message: formData.message,
    };

    try {
      const result = await submitInquiry(inquiry, {
        honeypot: formData.companyWebsite,
      });

      if (result.ok) {
        if (result.needsActivation) {
          setHandoffStatus({
            type: 'sent',
            message: result.message,
          });
        } else {
          const q = formData.eventType
            ? `?type=${encodeURIComponent(formData.eventType)}`
            : '';
          router.push(`/contact/thanks${q}`);
          return;
        }
      } else {
        setHandoffStatus({
          type: 'error',
          message: `${result.message} You can also use Copy inquiry below.`,
        });
      }
    } catch {
      setHandoffStatus({
        type: 'error',
        message: `Could not send. Email me at ${siteConfig.email} or use Copy inquiry.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.phone,
      href: siteConfig.phoneHref,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: siteConfig.location,
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'X' },
  ];

  const eventTypes = contactPage.form.eventTypes;

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">{contactPage.hero.subtitle}</p>
            <h1 className="font-wedding-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              {contactPage.hero.title}<br />
              <span className="text-[#c9a962]">{contactPage.hero.titleAccent}</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg">
              {contactPage.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="font-wedding-display text-2xl text-white mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 border border-[#2a2a2a] flex items-center justify-center group-hover:border-[#c9a962] transition-colors">
                      <item.icon size={20} className="text-[#c9a962]" />
                    </div>
                    <div>
                      <p className="text-[#a0a0a0] text-sm">{item.label}</p>
                      <p className="text-white group-hover:text-[#c9a962] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mb-10">
                <h3 className="text-white font-medium mb-4">Availability</h3>
                <p className="text-[#a0a0a0] text-sm mb-2">
                  Weekdays: 4pm - 11pm
                </p>
                <p className="text-[#a0a0a0] text-sm">
                  Weekends: Anytime
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-[#2a2a2a] flex items-center justify-center hover:border-[#c9a962] hover:text-[#c9a962] transition-colors text-white"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-[#141414] p-8 md:p-12">
                {/* Pricing selection summary from wedding page */}
                {pricingSelection && (
                  <div className="mb-8 p-4 border border-[#c9a962]/30 bg-[#c9a962]/5">
                    <div className="flex items-center gap-2 mb-3">
                      <Package size={16} className="text-[#c9a962]" />
                      <h4 className="text-white font-medium text-sm">Your Selection</h4>
                    </div>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#a0a0a0]">{pricingSelection.pkg.name}</span>
                        <span className="text-white">{formatPrice(pricingSelection.pkg.price)}</span>
                      </div>
                      {pricingSelection.addons.map((a) => (
                        <div key={a.id} className="flex justify-between">
                          <span className="text-[#a0a0a0]">
                            {a.name}{a.qty > 1 ? ` x${a.qty}` : ''}
                          </span>
                          <span className="text-white">{formatPrice(a.price * a.qty)}</span>
                        </div>
                      ))}
                      {pricingSelection.discount > 0 && (
                        <div className="flex justify-between">
                          <span className="text-[#c9a962]">Pay-in-full discount</span>
                          <span className="text-[#c9a962]">-{formatPrice(pricingSelection.discount)}</span>
                        </div>
                      )}
                      <div className="flex justify-between pt-2 border-t border-[#c9a962]/20 mt-2">
                        <span className="text-white font-medium">Total</span>
                        <span className="text-white font-bold">{formatPrice(pricingSelection.total)}</span>
                      </div>
                    </div>
                  </div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  className="relative"
                >
                  {handoffStatus && (
                    <div
                      className={`mb-6 p-4 border flex items-start space-x-3 ${
                        handoffStatus.type === 'error'
                          ? 'bg-red-900/30 border-red-500/50'
                          : 'bg-[#c9a962]/10 border-[#c9a962]/40'
                      }`}
                      role={handoffStatus.type === 'error' ? 'alert' : 'status'}
                      aria-live="polite"
                    >
                      {handoffStatus.type === 'error' ? (
                        <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
                      ) : (
                        <Check className="text-[#c9a962] flex-shrink-0 mt-0.5" size={20} />
                      )}
                      <div className="space-y-2">
                        <p className={handoffStatus.type === 'error' ? 'text-red-300 text-sm' : 'text-[#d8d8d8] text-sm'}>
                          {handoffStatus.message}
                        </p>
                        {handoffStatus.type !== 'sent' && handoffStatus.type !== 'error' && (
                          <p className="text-[#a0a0a0] text-xs">
                            Prefer email? Write directly to {siteConfig.email}.
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-[#a0a0a0] text-sm mb-2">
                          First Name <span className="text-[#c9a962]" aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={!!errors.firstName}
                          aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                          autoComplete="given-name"
                          className={`w-full bg-[#0a0a0a] border text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a962] transition-colors ${
                            errors.firstName ? 'border-red-500' : 'border-[#2a2a2a] focus:border-[#c9a962]'
                          }`}
                        />
                        {errors.firstName && (
                          <p id="firstName-error" className="mt-1 text-red-400 text-xs flex items-center" role="alert">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-[#a0a0a0] text-sm mb-2">
                          Last Name <span className="text-[#c9a962]" aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={!!errors.lastName}
                          aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                          autoComplete="family-name"
                          className={`w-full bg-[#0a0a0a] border text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a962] transition-colors ${
                            errors.lastName ? 'border-red-500' : 'border-[#2a2a2a] focus:border-[#c9a962]'
                          }`}
                        />
                        {errors.lastName && (
                          <p id="lastName-error" className="mt-1 text-red-400 text-xs flex items-center" role="alert">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-[#a0a0a0] text-sm mb-2">
                          Email <span className="text-[#c9a962]" aria-hidden="true">*</span>
                          <span className="sr-only">(required)</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          autoComplete="email"
                          className={`w-full bg-[#0a0a0a] border text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a962] transition-colors ${
                            errors.email ? 'border-red-500' : 'border-[#2a2a2a] focus:border-[#c9a962]'
                          }`}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-red-400 text-xs flex items-center" role="alert">
                            <AlertCircle size={12} className="mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-[#a0a0a0] text-sm mb-2">
                          Phone <span className="text-[#666] text-xs">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:border-[#c9a962] focus:outline-none focus:ring-2 focus:ring-[#c9a962] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="eventType" className="block text-[#a0a0a0] text-sm mb-2">
                          Event Type <span className="text-[#666] text-xs">(optional)</span>
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:border-[#c9a962] focus:outline-none focus:ring-2 focus:ring-[#c9a962] transition-colors"
                        >
                          <option value="">Select an option</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="date" className="block text-[#a0a0a0] text-sm mb-2">
                          Event Date <span className="text-[#666] text-xs">(optional)</span>
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:border-[#c9a962] focus:outline-none focus:ring-2 focus:ring-[#c9a962] transition-colors [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="referralSource" className="block text-[#a0a0a0] text-sm mb-2">
                        How did you hear about me? <span className="text-[#666] text-xs">(optional)</span>
                      </label>
                      <select
                        id="referralSource"
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={handleChange}
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:border-[#c9a962] focus:outline-none focus:ring-2 focus:ring-[#c9a962] transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Word of Mouth">Word of Mouth</option>
                        <option value="Wedding Vendor Referral">Wedding Vendor Referral</option>
                        <option value="Past Client">Past Client</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="mb-8">
                      <label htmlFor="message" className="block text-[#a0a0a0] text-sm mb-2">
                        Message <span className="text-[#c9a962]" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                        rows={6}
                        className={`w-full bg-[#0a0a0a] border text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a962] transition-colors resize-none ${
                          errors.message ? 'border-red-500' : 'border-[#2a2a2a] focus:border-[#c9a962]'
                        }`}
                        placeholder="Tell me about your project..."
                      />
                      {errors.message ? (
                        <p id="message-error" className="mt-1 text-red-400 text-xs flex items-center" role="alert">
                          <AlertCircle size={12} className="mr-1" />
                          {errors.message}
                        </p>
                      ) : (
                        <p id="message-hint" className="mt-1 text-[#666] text-xs">
                          Include details about your event, timeline, and any questions you have.
                        </p>
                      )}
                    </div>

                    {/* Honeypot — hidden from humans */}
                    <div className="absolute -left-[9999px] opacity-0 h-0 overflow-hidden" aria-hidden="true">
                      <label htmlFor="companyWebsite">Company website</label>
                      <input
                        id="companyWebsite"
                        name="companyWebsite"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.companyWebsite}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#c9a962] text-[#0a0a0a] py-4 px-6 font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#c9a962] focus:ring-offset-2 focus:ring-offset-[#141414]"
                      >
                        {isSubmitting ? (
                          <>
                            <span>Sending...</span>
                            <div className="w-4 h-4 border-2 border-[#0a0a0a] border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                            <span className="sr-only">Sending your inquiry</span>
                          </>
                        ) : (
                          <>
                            <span>Send Inquiry</span>
                            <Mail size={16} aria-hidden="true" />
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={copyInquiry}
                        className="w-full sm:w-auto border border-[#c9a962] px-6 py-4 text-[#c9a962] font-medium tracking-wider uppercase text-sm hover:bg-[#c9a962] hover:text-[#0a0a0a] transition-colors duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#c9a962] focus:ring-offset-2 focus:ring-offset-[#141414]"
                      >
                        <span>Copy Inquiry</span>
                        <Copy size={16} aria-hidden="true" />
                      </button>
                    </div>
                  </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">FAQ</p>
            <h2 className="font-wedding-display text-4xl md:text-5xl text-white">
              Common Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-0">
              {contactPage.faq.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-b border-[#2a2a2a]">
                  <AccordionTrigger className="text-white hover:text-[#c9a962] text-left py-5 text-sm font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#a0a0a0] text-sm leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Map or Additional Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Location</p>
            <h2 className="font-wedding-display text-4xl md:text-5xl text-white mb-6">
              Based in <span className="text-[#c9a962]">{siteConfig.location}</span>
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto mb-8">
              Available for travel worldwide. From local Austin weddings to destination events
              and aerospace documentation at launch sites across the country.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 border border-[#2a2a2a] text-[#a0a0a0] text-sm">
                Available for Travel
              </span>
              <span className="px-4 py-2 border border-[#2a2a2a] text-[#a0a0a0] text-sm">
                Destination Weddings
              </span>
              <span className="px-4 py-2 border border-[#2a2a2a] text-[#a0a0a0] text-sm">
                Launch Coverage
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
