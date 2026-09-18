import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Projects', href: '#projects', isRoute: false },
    { name: 'Skills', href: '#skills', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false },
  ];

  const handleHashClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.replace('#', '');
    if (location.pathname !== '/') {
      navigate(`/${href}`);
      // wait for navigation then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      // update URL hash without reload
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f8fafc]/80 dark:bg-[#0D0D0D]/80 border-b border-stone-200/80 dark:border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-lg font-bold text-stone-900 dark:text-white tracking-tight">
          Nada<span className="text-red-600">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className="text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-red-600 dark:hover:text-red-500 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            )
          )}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-stone-200/60 dark:bg-stone-900 text-stone-700 dark:text-stone-200 hover:bg-stone-300/60 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun width={18} height={18} /> : <Moon width={18} height={18} />}
          </button>

          {/* Desktop Animated Resume Link - opens in new tab for preview */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Nada_Alahmad_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-md shadow-red-600/20 transition-colors cursor-pointer"
          >
            <Download width={14} height={14} /> Resume
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-700 dark:text-stone-200"
          >
            {isOpen ? <X width={20} height={20} /> : <Menu width={20} height={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-stone-200 dark:border-stone-800 bg-[#f8fafc] dark:bg-[#0D0D0D]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-red-600"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleHashClick(e, link.href)}
                    className="text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-red-600 cursor-pointer"
                  >
                    {link.name}
                  </a>
                )
              )}
              
              {/* Mobile Animated Resume Link - opens in new tab for preview */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/Nada_Alahmad_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl cursor-pointer"
              >
                <Download width={14} height={14} /> Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
