import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Greeting & Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-block px-4 py-1.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 rounded-full text-red-600 dark:text-red-400 text-xs font-semibold tracking-wide uppercase">
            HELLO, I'M
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Nada <span className="text-red-600 dark:text-red-500">Alahmad</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Full-Stack Developer
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-xl">
            Full-stack developer who picks up new tools fast and ships clean, production-ready code.
              I build scalable web apps end-to-end, from React, Next.js, and Angular frontends
              to Node.js, Express, Django, FastAPI, and Fastify backends, all in TypeScript.
              Currently open to new opportunities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-red-600/20 transition-all text-sm"
            >
              Contact Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-gray-100 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium px-6 py-3 rounded-xl transition-all text-sm border border-gray-200 dark:border-gray-700/60"
            >
              View Projects
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 pt-4 text-gray-600 dark:text-gray-400">
            <motion.a 
              whileHover={{ y: -3, color: '#dc2626' }}
              href="https://github.com/nalahmad9" 
              target="_blank" 
              rel="noreferrer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, color: '#dc2626' }}
              href="https://www.linkedin.com/in/nada-alahmad1/" 
              target="_blank" 
              rel="noreferrer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, color: '#dc2626' }}
              href="mailto:nadaalahmad472@gmail.com"
            >
              <Mail className="w-5 h-5 transition-colors" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Code Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

          <motion.div
            animate={{ 
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="relative w-full max-w-md bg-[#0D0D0D] text-gray-200 rounded-2xl p-6 shadow-[0_20px_50px_rgba(220,38,38,0.15)] border border-gray-800/80 transition-all duration-300"
          >
            {/* Controls */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            </div>

            {/* Code Content */}
            <pre className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-gray-300">
              <code>
                <span className="text-red-400">const</span> developer = &#123;<br />
                &nbsp;&nbsp;name: <span className="text-emerald-400">"Nada Alahmad"</span>,<br />
                &nbsp;&nbsp;skills: [<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Next.js"</span>, <span className="text-emerald-400">"Django"</span>],<br />
                &nbsp;&nbsp;status: <span className="text-emerald-400">"Open to opportunities"</span>,<br />
                &nbsp;&nbsp;location: <span className="text-emerald-400">"Lebanon"</span>,<br />
                &#125;;
              </code>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;