import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Send, Check } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        message: '',
      });
    }, 3000);
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
                    name="contact" 
                    method="POST" 
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    {/* Hidden fields for Netlify Forms */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <input name="bot-field" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-[#a0a0a0] text-sm mb-2">
                          First Name <span className="text-[#c9a962]">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:border-[#c9a962] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[#a0a0a0] text-sm mb-2">
                          Last Name <span className="text-[#c9a962]">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:border-[#c9a962] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-[#a0a0a0] text-sm mb-2">
                          Email <span className="text-[#c9a962]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:border-[#c9a962] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[#a0a0a0] text-sm mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:border-[#c9a962] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-[#a0a0a0] text-sm mb-2">
                          Event Type
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:border-[#c9a962] focus:outline-none transition-colors"
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
                        <label className="block text-[#a0a0a0] text-sm mb-2">
                          Event Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:border-[#c9a962] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-[#a0a0a0] text-sm mb-2">
                        Message <span className="text-[#c9a962]">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white px-4 py-3 focus:border-[#c9a962] focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#c9a962] text-[#0a0a0a] py-4 font-medium tracking-wider uppercase text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send size={16} />
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
