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
  },
  {
    name: 'Cedar Construction',
    description: `Construction Project Management & Accounting System — full-stack web application developed with my team as part of The Digital Hub, UNRWA program.

Centralizes project management & budgeting, clients/contractors/suppliers/employees, expenses/invoices/payments, purchasing & inventory, and accounting & financial reporting with role-based access. Features an AI Project Risk & Forecast Advisor (Groq / GPT-OSS 20B) that analyzes deterministic Django-computed financial metrics to provide structured recommendations — AI complements, not replaces, business logic. 665 automated tests, Dockerized and production-ready.`,
    technologies: ['Python', 'Django 5.2', 'Django REST Framework', 'PostgreSQL', 'Supabase', 'JavaScript', 'Docker', 'Gunicorn', 'Groq API'],
    github: 'https://github.com/MahmoudAbdulGhani/Construction-Project-Management-Accounting-System',
    live: 'https://construction-project-management-sa22.onrender.com/'
  }
];

export default projects;
