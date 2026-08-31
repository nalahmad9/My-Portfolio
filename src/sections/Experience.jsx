import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Intern',
    company: 'The Digital Hub | UNRWA',
    period: '2026',
    location: 'Tripoli, Lebanon',
    description: [
      'Built full-stack web applications using React.js, Next.js, TypeScript, Node.js, Express.js, and MongoDB as part of an intensive full-stack and AI development internship.',
      'Built scalable RESTful APIs with Node.js, Express.js, FastAPI, and Django REST Framework, including JWT authentication, RBAC, and relational/NoSQL database design.',
      'Applied SOLID principles, clean architecture, and Agile/Scrum practices using Git, GitHub, and Jira.',
      'Integrated AI-powered features using LLMs and Cognitive APIs, and deployed production-ready apps via Vercel and Render.',
    ],
    skills: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI', 'Django REST', 'AI / LLMs', 'Vercel', 'Render'],
  },
  {
    role: 'Django Developer Intern',
    company: 'Lebanese Association for Scientific Research | LASeR',
    period: '2023',
    location: 'Tripoli, Lebanon',
    description: [
      'Developed backend web applications using Python and Django within a collaborative team environment.',
      'Integrated APIs and Machine Learning components, using Git, GitHub, Odoo, and Trello for version control and project tracking.',
    ],
    skills: ['Python', 'Django', 'Machine Learning', 'Git', 'GitHub', 'Odoo', 'Trello'],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-600/10 px-3 py-1 rounded-full border border-red-600/20">
          Career Journey
        </span>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl mt-3">
          Work Experience
        </h2>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Hands-on engineering experience in fast-paced collaborative environments.
        </p>
      </motion.div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-gray-50/70 dark:bg-[#0D0D0D]/80 border border-gray-200/80 dark:border-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Briefcase className="text-red-600" width={20} height={20} />
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-red-600 dark:text-red-500 mt-1">
                  {exp.company}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar width={14} height={14} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin width={14} height={14} />
                  {exp.location}
                </span>
              </div>
            </div>

            <ul className="space-y-2.5 mb-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {exp.description.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-red-600 font-bold mt-1">&bull;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200/80 dark:border-gray-800/80">
              {exp.skills.map((skill) => (
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

export default Experience;