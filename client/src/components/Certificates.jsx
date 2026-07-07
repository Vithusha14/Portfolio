import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../data/portfolioData';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 md:py-28 relative bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 group hover:scale-105 transition-all duration-300 block"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 p-2 rounded-lg bg-white/90 dark:bg-gray-800/90 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-primary-500" />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-500/20 shrink-0">
                  <Award className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-primary-500 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                  <p className="text-xs text-accent-500 mt-1">{cert.date}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
