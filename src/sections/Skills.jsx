import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Zustand', 'TanStack Query'],
  },
  {
    title: 'Backend Engineering',
    skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'Django', 'RESTful APIs'],
  },
  {
    title: 'Databases & ORM',
    skills: ['MySQL', 'MongoDB', 'Mongoose', 'SQL', 'NoSQL'],
  },
  {
    title: 'Auth & Security',
    skills: ['JWT', 'Authentication & Authorization', 'RBAC', 'Secure Cookies'],
  },
  {
    title: 'AI Development',
    skills: ['LLMs', 'Prompt Engineering', 'AI API Integration', 'LangChain / Frameworks'],
  },
  {
    title: 'Testing & Quality',
    skills: ['Jest', 'Vitest', 'Unit Testing', 'Integration Testing'],
  },
  {
    title: 'DevOps & Version Control',
    skills: ['Git', 'GitHub', 'Branching & PRs', 'Code Reviews', 'GitHub Actions', 'CI/CD', 'Cloud Deployment'],
  },
  {
    title: 'Architecture & Design',
    skills: ['REST API Architecture', 'Clean Architecture', 'SOLID Principles', 'Design Patterns', 'Scalable System Design'],
  },
  {
    title: 'Web Performance & SEO',
    skills: ['SSR', 'CSR', 'SSG', 'Core Web Vitals', 'SEO Optimization'],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-600/10 px-3 py-1 rounded-full border border-red-600/20">
          Expertise
        </span>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl mt-3">
          Technical Skills
        </h2>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Comprehensive set of technologies, architectures, and development practices I utilize.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-gray-50/70 dark:bg-[#0D0D0D]/80 border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-6 shadow-sm hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200/80 dark:border-gray-800/80 pb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full transition-colors duration-200 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 dark:hover:text-red-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;