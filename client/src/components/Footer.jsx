import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
            © {year} {personalInfo.name}. Built with
            <Heart className="w-4 h-4 text-accent-500 fill-accent-500" />
            using MERN Stack
          </p>

          <div className="flex gap-4">
            {[
              { icon: Github, href: personalInfo.github },
              { icon: Linkedin, href: personalInfo.linkedin },
              { icon: Mail, href: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:scale-110 transition-transform duration-300"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
