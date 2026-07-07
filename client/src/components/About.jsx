import { motion } from 'framer-motion';
import { Download, Briefcase, ArrowRight } from 'lucide-react';
import { about, personalInfo } from '../data/portfolioData';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function AvailabilityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8 sm:mb-10"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/5 to-primary-500/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5" />

        <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 p-5 sm:p-6 border border-green-500/20 dark:border-green-500/25 rounded-2xl glass-card !bg-white/60 dark:!bg-gray-900/60">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="relative shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30 flex items-center justify-center">
              <span className="absolute w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-60" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.7)]" />
            </div>

            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.2em] text-green-600 dark:text-green-400 font-bold mb-1.5">
                Open to Opportunities
              </p>
              <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 dark:text-white leading-snug">
                Associate Software Engineer / Software Engineer
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 shrink-0" />
                Full Stack · Backend · Frontend · AI Applications
              </p>
            </div>
          </div>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-shadow shrink-0 self-start sm:self-center"
          >
            Let&apos;s Connect
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">Get to know me</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Software engineer focused on scalable solutions, clean architecture, and AI-powered applications
          </p>
        </motion.div>

        <AvailabilityCard />

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8"
          >
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              {about.summary}
            </p>
            <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-4">Key Strengths</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {about.strengths.map((strength) => (
                <span
                  key={strength}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500/10 to-accent-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20"
                >
                  {strength}
                </span>
              ))}
            </div>
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            {about.highlights.map((stat) => (
              <motion.div
                key={stat.label}
                variants={item}
                className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold gradient-text mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
