import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const codeLines = [
  'const app = express();',
  'app.use("/api", routes);',
  'await mongoose.connect(uri);',
  'export default function App() {',
  '  return <Portfolio />;',
  '}',
  'const data = await fetch(url);',
  'interface User { id: string; }',
  'docker build -t api .',
  'gemini.generateContent(prompt);',
];

export default function CodingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.07] dark:opacity-[0.05]">
      <div className="absolute inset-0 font-mono text-xs sm:text-sm leading-6 text-primary-600 dark:text-primary-400">
        {Array.from({ length: 12 }).map((_, col) => (
          <motion.div
            key={col}
            className="absolute whitespace-nowrap"
            style={{ left: `${col * 8.5}%`, top: 0 }}
            animate={{ y: ['0%', '-50%'] }}
            transition={{
              duration: 20 + col * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {Array.from({ length: 20 }).map((_, row) => (
              <div key={row} className="py-1">
                {codeLines[(col + row) % codeLines.length]}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function FloatingTechIcons() {
  const techs = personalInfo.floatingTech;

  return (
    <>
      {techs.map((tech, i) => {
        const positions = [
          { top: '15%', left: '8%' },
          { top: '25%', right: '12%' },
          { top: '55%', left: '5%' },
          { top: '70%', right: '8%' },
          { top: '40%', left: '15%' },
          { top: '80%', left: '20%' },
          { top: '20%', right: '25%' },
          { top: '65%', right: '18%' },
        ];
        const pos = positions[i % positions.length];

        return (
          <motion.div
            key={tech}
            className="absolute hidden md:flex px-3 py-1.5 rounded-lg glass text-xs font-medium text-gray-600 dark:text-gray-300"
            style={pos}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          >
            {tech}
          </motion.div>
        );
      })}
    </>
  );
}
