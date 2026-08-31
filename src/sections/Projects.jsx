import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      name: 'DriveReserve',
      description: `A car rental and reservation platform built with my team as part of The Digital Hub, UNRWA program.

Features real-time availability updates via Supabase, fleet management, reservation approvals, PostgreSQL exclusion constraints for double-booking prevention, and Row-Level Security.`,
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'TanStack Query', 'Zod'],
      github: 'https://github.com/nalahmad9/drive-reserve',
      live: 'https://drive-reserve.vercel.app/'
    },
    {
      name: 'UniHub',
      description: `Full-stack University Management System simplifying university operations. Dedicated portals for Students (course enrollment, grades), Professors (course & exam management), and Admins (user management).`,
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Git'],
      github: 'https://github.com/AbdulazizAlSayyed/university-management-system',
      live: 'https://university-management-system-three-fawn.vercel.app/'
    },
    {
      name: 'CineTrack',
      description: `Full-stack movie and TV tracking application integrated with TMDb API. Built REST APIs, handled authentication, watchlists, ratings, and custom movie recommendations.`,
      technologies: ['Angular', 'Fastify', 'TypeScript', 'MongoDB', 'TMDb API'],
      github: 'https://github.com/nalahmad9/CineTrack',
      live: 'https://cine-track-pi-snowy.vercel.app/'
    },
    {
      name: 'AI Interviewer Agent',
      description: `Conversational technical interviewer leveraging Large Language Models (LLMs) to dynamically ask role-specific questions, react in real-time to candidate answers, and output evaluation reports.`,
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Cloudflare Workers', 'LLMs'],
      github: 'https://github.com/nalahmad9/Ai-Interviewer-Agent',
      live: 'https://ai-interviewer-agent-brown.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="px-6 py-20 border-b border-stone-200/80 dark:border-stone-800/60 max-w-7xl mx-auto">
      {/* Centered Badge Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
          My Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          Project Experience
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto">
          A selection of full-stack web applications and interactive software built recently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;