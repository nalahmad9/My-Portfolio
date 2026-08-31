import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

function ProjectCard({ name, description, technologies, github, live }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 dark:bg-[#0D0D0D]/80 border border-stone-200/80 dark:border-stone-800/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300"
    >
      <div>
        <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">{name}</h3>
        <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6 whitespace-pre-line">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full transition-colors duration-200 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 dark:hover:text-red-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-stone-200 dark:border-stone-800/80">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
          >
            <svg width="16" height="16" className="fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Code
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
          >
            <ExternalLink width={16} height={16} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
