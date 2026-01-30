import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Send, Check, AlertCircle } from 'lucide-react';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
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
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    if (!validateForm()) {
      // Focus first field with error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField && formRef.current) {
        const field = formRef.current.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
        field?.focus();
      }
      return;
    }
    
    setIsSubmitting(true);

    // Encode form data for Netlify
    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append('form-name', 'contact');
    formDataEncoded.append('bot-field', '');
    Object.entries(formData).forEach(([key, value]) => {
      formDataEncoded.append(key, value);
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataEncoded.toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          eventType: '',
          date: '',
          message: '',
        });
      } else {
        setSubmitError('There was an error submitting the form. Please try again or email me directly.');
      }
    } catch (error) {
      setSubmitError('Unable to submit form. Please check your connection or email me directly at SeanDohertyPhotos@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'SeanDohertyPhotos@gmail.com',
      href: 'mailto:SeanDohertyPhotos@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(856) 803-6982',
      href: 'tel:+18568036982',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Austin, TX',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/Seankd_photos', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/SeanKD_Photos', label: 'X' },
  ];

  const eventTypes = [
    'Wedding',
    'Engagement',
    'Corporate Event',
    'Concert/Live Event',
    'Portrait Session',
    'Commercial Project',
    'Aerospace',
    'Other',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#0a0a0a] min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
            <h1 className="font-wedding-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Let's Create Something<br />
              <span className="text-[#c9a962]">Amazing</span>
            </h1>
            <p className="text-[#a0a0a0] text-lg">
              Tell me about your project and I'll get back to you within 24 hours.
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
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 bg-[#c9a962] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check size={32} className="text-[#0a0a0a]" />
                    </div>
                    <h3 className="font-wedding-display text-3xl text-white mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-[#a0a0a0]">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form 
                    ref={formRef}
                    name="contact" 
                    method="POST" 
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact form"
                  >
                    {/* Hidden fields for Netlify Forms */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <input name="bot-field" />
                    </div>

                    {/* Submit Error Alert */}
                    {submitError && (
                      <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 flex items-start space-x-3" role="alert">
                        <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-red-300 text-sm">{submitError}</p>
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

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#c9a962] text-[#0a0a0a] py-4 font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#c9a962] focus:ring-offset-2 focus:ring-offset-[#141414]"
                    >
                      {isSubmitting ? (
                        <>
                          <span>Sending...</span>
                          <div className="w-4 h-4 border-2 border-[#0a0a0a] border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                          <span className="sr-only">Please wait while your message is being sent</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
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
              Based in <span className="text-[#c9a962]">Austin, TX</span>
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
    </motion.div>
  );
};

export default Contact;
