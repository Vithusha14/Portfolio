import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  const degree = education[0];

  return (
    <section id="education" className="py-20 md:py-28 relative bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">Academic background</p>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10 hover:scale-[1.01] transition-transform duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 shrink-0 self-start">
                <GraduationCap className="w-8 h-8 text-primary-500" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20">
                    {degree.period}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 border border-accent-500/20">
                    Currently Enrolled
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-2">
                  {degree.degree}
                </h3>
                <p className="text-primary-500 font-medium text-lg mb-4">{degree.institution}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {degree.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {degree.courses.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
