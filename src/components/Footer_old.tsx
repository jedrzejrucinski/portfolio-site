'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 opacity-60"></div>
      
      {/* Main footer content */}
      <div className="relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="font-serif text-3xl lg:text-4xl font-light tracking-wide mb-4 text-gray-800">
              <span className="text-accent">J</span>oanna <span className="text-accent">M</span>rowczynska
            </h3>
            <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
              Creating artistry through makeup, one vision at a time
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16"
          >
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-8">
              <Link 
                href="/projects" 
                className="text-gray-700 hover:text-accent transition-all duration-300 font-light tracking-wide text-sm uppercase hover:scale-105"
              >
                Projects
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-accent transition-all duration-300 font-light tracking-wide text-sm uppercase hover:scale-105"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-accent transition-all duration-300 font-light tracking-wide text-sm uppercase hover:scale-105"
              >
                Contact
              </Link>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <a 
                href="mailto:hello@joannamrowczynska.com" 
                className="text-gray-600 hover:text-accent transition-all duration-300 font-light text-sm hover:scale-105"
              >
                hello@joannamrowczynska.com
              </a>
              <a 
                href="https://instagram.com/joanna_makeup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-all duration-300 font-light text-sm hover:scale-105"
              >
                @joanna_makeup
              </a>
            </div>
          </motion.div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-200 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500 font-light">
                © {currentYear} Joanna Mrowczynska. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <p className="text-xs text-gray-500 font-light">
                  New York, NY
                </p>
                <p className="text-xs text-gray-500 font-light">
                  Designed with passion
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
