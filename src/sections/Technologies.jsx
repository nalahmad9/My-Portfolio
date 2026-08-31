import React from 'react';

function Technologies() {
  const techs = [
    { name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'React' },
    { name: 'Tailwind' }, { name: 'Bootstrap' }, { name: 'Git' }, { name: 'GitHub' },
  ];

  return (
    <section className="px-6 py-12 md:px-15 border-b border-gray-200 dark:border-gray-800/60">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-500 mb-6">Technologies & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {techs.map((tech) => (
            <span 
              key={tech.name} 
              className="bg-white dark:bg-[#0D0D0D]/80 border border-gray-200 dark:border-gray-800 rounded-lg p-4 text-center text-gray-900 dark:text-white font-semibold shadow-sm hover:border-red-600 transition-colors"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;