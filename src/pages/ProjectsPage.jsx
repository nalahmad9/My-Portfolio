import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto min-h-[70vh]">
      {/* Badge Header - same style as Projects section */}
      <div className="text-center mb-10">
        <span className="inline-block px-3 py-1 bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
          My Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          All Projects
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto">
          Complete list of full-stack web applications and interactive software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:text-red-600 dark:hover:text-red-500 hover:border-red-600/50 text-sm font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <ArrowLeft width={16} height={16} /> Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsPage;
