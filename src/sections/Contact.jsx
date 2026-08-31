import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = 'Name is required.';
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true, success: false, error: '' });

    emailjs
      .sendForm(
        'service_a5cnhgn', 
        'template_f3og7me', 
        formRef.current,
        'U-8uZyiZmrmj-MiNS'   
      )
      .then(
        () => {
          setStatus({ loading: false, success: true, error: '' });
          setFormData({ user_name: '', user_email: '', subject: '', message: '' });
          setErrors({});
          setTimeout(() => setStatus((prev) => ({ ...prev, success: false })), 5000);
        },
        () => {
          setStatus({
            loading: false,
            success: false,
            error: 'Failed to send message. Please try again later.',
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-600/10 px-3 py-1 rounded-full border border-red-600/20">
          Get In Touch
        </span>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl mt-3">
          Let's Work Together
        </h2>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have a question or want to discuss a potential project? Send a message and I'll get back to you shortly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-600/10 text-red-600 rounded-xl">
                <Mail width={20} height={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</p>
                <a
                  href="mailto:nadaalahmad472@gmail.com"
                  className="text-sm font-medium text-gray-900 dark:text-white hover:text-red-600 transition-colors"
                >
                  nadaalahmad472@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-600/10 text-red-600 rounded-xl">
                <Phone width={20} height={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">+961 81 460 448</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-600/10 text-red-600 rounded-xl">
                <MapPin width={20} height={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Tripoli, Lebanon</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Connect with me</p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/nalahmad9"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                aria-label="GitHub"
              >
                <svg width="18" height="18" className="fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/nada-alahmad1/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" className="fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                href="mailto:nadaalahmad472@gmail.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                aria-label="Email"
              >
                <Mail width={18} height={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-gray-50/70 dark:bg-[#0D0D0D]/80 border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-8 shadow-sm"
        >
          <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className={`w-full px-4 py-3 bg-white dark:bg-stone-900 border rounded-xl text-sm focus:outline-none transition-colors text-gray-900 dark:text-white ${
                    errors.user_name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-800 focus:border-red-600'
                  }`}
                />
                {errors.user_name && <p className="text-red-500 text-xs mt-1.5">{errors.user_name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className={`w-full px-4 py-3 bg-white dark:bg-stone-900 border rounded-xl text-sm focus:outline-none transition-colors text-gray-900 dark:text-white ${
                    errors.user_email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-800 focus:border-red-600'
                  }`}
                />
                {errors.user_email && <p className="text-red-500 text-xs mt-1.5">{errors.user_email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className={`w-full px-4 py-3 bg-white dark:bg-stone-900 border rounded-xl text-sm focus:outline-none transition-colors text-gray-900 dark:text-white ${
                  errors.subject ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-800 focus:border-red-600'
                }`}
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1.5">{errors.subject}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your message here..."
                className={`w-full px-4 py-3 bg-white dark:bg-stone-900 border rounded-xl text-sm focus:outline-none resize-none transition-colors text-gray-900 dark:text-white ${
                  errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-800 focus:border-red-600'
                }`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
            </div>

            {/* Notification Messages */}
            {status.success && (
              <div className="flex items-center gap-2 text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 p-3.5 rounded-xl text-xs font-medium">
                <CheckCircle width={16} height={16} />
                Message sent successfully! I will reply to you soon.
              </div>
            )}

            {status.error && (
              <div className="flex items-center gap-2 text-rose-600 bg-rose-500/10 border border-rose-500/20 p-3.5 rounded-xl text-xs font-medium">
                <AlertCircle width={16} height={16} />
                {status.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold text-sm py-3.5 rounded-xl transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
            >
              {status.loading ? (
                <>
                  <Loader2 width={18} height={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send width={16} height={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;