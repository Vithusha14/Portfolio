import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import { experience } from '../data/portfolioData';

const projectAccents = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-amber-500',
  'from-emerald-500 to-teal-500',
  'from-rose-500 to-red-500',
  'from-indigo-500 to-violet-500',
  'from-sky-500 to-blue-500',
];

function ProjectCard({ project, index }) {
  const accent = projectAccents[index % projectAccents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200/60 dark:border-gray-700/60 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg shadow-primary-500/5 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 h-full flex flex-col"
    >
      <div className={`h-1 w-full bg-gradient-to-r ${accent}`} />

      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <div className="flex items-start gap-3 mb-4">
          <span className={`shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-md`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0 flex-1">
            <h4 className="font-display font-bold text-gray-900 dark:text-white text-base sm:text-lg leading-tight">
              {project.name}
            </h4>
            <p className="text-xs sm:text-sm text-primary-500 dark:text-primary-400 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>
        </div>

        <ul className="space-y-2 mb-4 flex-1">
          {project.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-500 shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold mb-2">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-500 hover:text-accent-500 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ exp, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className="glass-card overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500" />

        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200/60 dark:border-gray-700/60">
            <div className="flex items-start gap-3 sm:gap-5">
              <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25">
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20">
                    {exp.type}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 shrink-0" />
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white leading-tight">
                  {exp.title}
                </h3>
                <p className="text-primary-500 font-semibold text-base sm:text-lg flex items-center gap-2 mt-1">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span className="truncate">{exp.company}</span>
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8">
            {exp.description}
          </p>

          {exp.projects && exp.projects.length > 0 && (
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Intern Projects
                </h4>
                <div className="flex-1 min-w-[40px] h-px bg-gradient-to-r from-gray-200 dark:from-gray-700 to-transparent" />
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                  {exp.projects.length} projects
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {exp.projects.map((project, i) => (
                  <ProjectCard key={project.name} project={project} index={i} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200/60 dark:border-gray-700/60">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-semibold mb-3">
              Core Technologies
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/15 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 relative bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-primary-500 dark:text-primary-400 font-medium mb-2 text-sm sm:text-base">Professional journey</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle mx-auto text-sm sm:text-base px-2">
            Real-world industry experience building production-grade software
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-10">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.title + exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
