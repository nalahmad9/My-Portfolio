import React from 'react';

function HireMe() {
  const reasons = [
    { title: 'Fast Learner', description: 'I pick up new tools and frameworks quickly and apply them to real projects.' },
    { title: 'Clean Code', description: 'I write readable, well-structured code that is easy for any team to work with.' },
    { title: 'Responsive Design', description: 'Every interface I build works perfectly on mobile, tablet, and desktop.' },
    { title: 'Team Player', description: 'I communicate clearly, document my work, and collaborate well with others.' },
    { title: 'Passionate', description: 'I genuinely love building for the web and I am always improving my skills.' },
    { title: 'Problem Solver', description: 'I break down complex challenges into simple, effective solutions that get the job done.' },
  ];

  return (
    <section className="px-6 py-12 md:px-15 border-b border-gray-200 dark:border-gray-800/60">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-500 mb-6">Why Hire Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-white dark:bg-[#0D0D0D]/80 border border-gray-200 dark:border-gray-800/80 rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-bold text-red-600 dark:text-red-500 mb-2">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HireMe;