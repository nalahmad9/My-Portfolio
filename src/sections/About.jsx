import React from 'react';
import { motion } from 'framer-motion';
import { FileText, GraduationCap, Briefcase, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

function About() {
  const skillsTags = ['React', 'Next.js', 'Node.js', 'Full Stack', 'Tailwind CSS'];

  return (
    <section id="about" className="py-12 px-6 max-w-7xl mx-auto">
      {/* Centered Badge Header */}
      <div className="text-center mb-10">
        <span className="inline-block px-3 py-1 bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
          About Me
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
          Bio & Background
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto">
          An overview of my education, experience, and development stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bio, Education, Experience */}
        <div className="lg:col-span-8 space-y-8">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-red-600" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bio</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
              I'm a Computer Science graduate and full-stack developer based in Lebanon, currently completing an intensive full-stack and AI development internship at The Digital Hub | UNRWA.
              I enjoy working across the whole stack, from designing the backend architecture to building a polished, user-friendly interface, and making sure both sides work well together.
            </p>
          </motion.div>

          {/* Cards Grid: Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-[#0D0D0D]/80 border border-gray-200 dark:border-gray-800/80 rounded-2xl p-6 shadow-sm hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-base">
                    BSc in Computer Science
                  </h4>
                  <a
                    href="https://www.linkedin.com/school/lebanese.university/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-red-600 dark:text-red-500 font-medium hover:underline block mt-0.5"
                  >
                    Lebanese University
                  </a>       
                  <p className="text-xs text-gray-400 mt-1">June 2025</p>
                </div>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-[#0D0D0D]/80 border border-gray-200 dark:border-gray-800/80 rounded-2xl p-6 shadow-sm hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-red-600" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Experience</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-base">
                    Full Stack Developer Intern
                  </h4>
                  <a
                    href="https://www.linkedin.com/company/the-digital-hub-unrwa/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-red-600 dark:text-red-500 font-medium hover:underline block mt-0.5"
                  >
                    The Digital Hub | UNRWA
                  </a>
                  <p className="text-xs text-gray-400 mt-1">June - Present</p>
                </div>
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    Django Developer Intern
                  </h4>
                  <a 
                    className="text-xs text-red-600 dark:text-red-500 font-medium hover:underline block mt-0.5"
                    href="https://www.linkedin.com/company/lebanese-association-for-scientific-research-laser/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    The Lebanese Association for Scientific Research | LASeR
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Nov 2022 - June 2023</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-4 flex flex-col items-center text-center bg-white dark:bg-[#0D0D0D]/80 border border-gray-200 dark:border-gray-800/80 rounded-2xl p-8 shadow-sm"
        >
          {/* Avatar Container with Updated Spacing */}
          <div className="relative mb-8 group cursor-pointer">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full ring-8 ring-red-500/20 dark:ring-red-500/25 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
              <img
                src={profileImg}
                alt="Nada Al Ahmad"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge */}
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md whitespace-nowrap border-2 border-white dark:border-[#0D0D0D]">
              Full Stack Dev
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Nada Al Ahmad
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4">
            Full-Stack Web Developer
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {skillsTags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full transition-colors duration-200 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 dark:hover:text-red-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Resume Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Nada_Alahmad_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-600/20"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;