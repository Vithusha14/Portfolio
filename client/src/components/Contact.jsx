import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Github, label: 'GitHub', value: 'Vithusha14', href: personalInfo.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'vithusha-pathmanathan', href: personalInfo.linkedin },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle mx-auto">
            Interested in building innovative software solutions together? Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="glass-card p-5 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary-500/20 to-accent-500/20">
                  <info.icon className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.label !== 'Email' && info.label !== 'Phone' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="font-medium text-gray-900 dark:text-white hover:text-primary-500 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium text-gray-900 dark:text-white">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="glass-card p-6 mt-6">
              <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-3">
                Open to Opportunities
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Seeking Associate Software Engineer, Full Stack Developer, Backend Developer, and Frontend Developer roles. Ready to contribute to innovative engineering teams.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-primary-500/50 outline-none text-gray-800 dark:text-gray-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-primary-500/50 outline-none text-gray-800 dark:text-gray-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-primary-500/50 outline-none text-gray-800 dark:text-gray-200"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl glass border-0 focus:ring-2 focus:ring-primary-500/50 outline-none text-gray-800 dark:text-gray-200 resize-none"
                placeholder="Tell me about your opportunity..."
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-500 text-sm">
                <CheckCircle className="w-4 h-4" />
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4" />
                Failed to send message. Please try again or email directly.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
