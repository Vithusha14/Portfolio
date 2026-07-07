import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects } from '../data/portfolioData';

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl border border-gray-200/60 dark:border-gray-700/60 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden shadow-lg shadow-primary-500/5 hover:shadow-xl hover:shadow-primary-500/15 hover:border-primary-500/30 transition-all duration-300"
    >
      <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-primary-500 text-white text-xs sm:text-sm font-semibold opacity-100 sm:opacity-0 sm:group-hover:opacity-100 scale-100 sm:scale-90 sm:group-hover:scale-100 transition-all duration-300 shadow-lg shadow-primary-500/40"
        >
          <Github className="w-4 h-4" />
          View on GitHub
        </a>
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-6">
        <span className="text-sm font-bold text-primary-500 dark:text-primary-400 mb-2">
          {number}
        </span>

        <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white mb-1">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm font-medium text-primary-500 dark:text-primary-400 mb-3">
          {project.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors mt-auto pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-800"
        >
          <Github className="w-4 h-4" />
          GitHub Repository
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-primary-500 dark:text-primary-400 font-medium mb-2 text-sm sm:text-base">What I've built</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto text-sm sm:text-base px-2">
            Real-world and academic projects with verified GitHub repositories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
