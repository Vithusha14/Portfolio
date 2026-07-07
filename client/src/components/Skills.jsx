import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const categories = [
  { key: 'frontend', label: 'Frontend Development', color: 'from-blue-500 to-cyan-500' },
  { key: 'backend', label: 'Backend Development', color: 'from-purple-500 to-pink-500' },
  { key: 'databases', label: 'Databases', color: 'from-green-500 to-emerald-500' },
  { key: 'ai', label: 'AI & Machine Learning', color: 'from-orange-500 to-red-500' },
  { key: 'cloud', label: 'Cloud & DevOps', color: 'from-indigo-500 to-blue-500' },
  { key: 'tools', label: 'Tools', color: 'from-pink-500 to-rose-500' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">What I work with</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            A full-stack toolkit built through real-world projects and hands-on development
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 cursor-default group"
            >
              <h3 className={`text-base font-display font-semibold mb-5 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[category.key].map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.05 + skillIndex * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 group-hover:bg-primary-500/10 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
