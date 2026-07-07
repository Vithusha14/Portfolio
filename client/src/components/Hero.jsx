import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  Download, Github, Linkedin, Mail, ChevronDown,
  Code2,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ParticleNetwork from './ParticleNetwork';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gray-950 dark:bg-gray-950" />
      <div className="absolute inset-0 hero-gradient-mesh" />
      <ParticleNetwork />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/15 rounded-full blur-[120px] animate-float pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Geometric accents */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-32 right-[15%] w-20 h-20 border border-primary-500/10 rounded-xl pointer-events-none hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-40 left-[10%] w-14 h-14 border border-accent-500/10 rounded-full pointer-events-none hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.p variants={item} className="text-gray-400 font-medium mb-3 text-lg">
              <span className="inline-block animate-wave origin-[70%_70%]">👋</span> Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-3 tracking-tight"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p variants={item} className="text-lg sm:text-xl text-gray-400 font-medium mb-4">
              Software Engineer <span className="text-gray-600">|</span> SLIIT
            </motion.p>

            <motion.div variants={item} className="text-base sm:text-lg text-gray-400 mb-6 h-8">
              I&apos;m a{' '}
              <TypeAnimation
                sequence={personalInfo.roles.flatMap((role) => [role, 2200])}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-accent-400"
              />
            </motion.div>

            <motion.p
              variants={item}
              className="text-gray-500 text-sm sm:text-base mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6"
            >
              <motion.button
                onClick={() => scrollTo('projects')}
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500 text-white font-semibold text-sm shadow-lg shadow-primary-500/25"
              >
                <Code2 className="w-4 h-4" />
                View Projects
              </motion.button>

              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.04, borderColor: 'rgba(139, 92, 246, 0.6)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-500/40 text-gray-300 font-semibold text-sm hover:bg-primary-500/10 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>

              <motion.button
                onClick={() => scrollTo('contact')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 text-gray-400 font-semibold text-sm hover:border-gray-500 hover:text-gray-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={item}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full border border-gray-700/80 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Outer glow rings */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary-500/30 via-purple-500/20 to-accent-500/30 blur-2xl"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full border-2 border-dashed border-primary-500/20"
              />

              {/* Image frame */}
              <div className="relative hero-image-ring rounded-full p-1">
                <div className="rounded-full p-1 bg-gray-950">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => scrollTo('about')}
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-primary-400 transition-colors"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
