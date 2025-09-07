'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ 
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="font-serif text-xl lg:text-2xl font-light tracking-wide" style={{ color: '#2a2a2a' }}>
            <span style={{ color: '#8b7355' }}>A</span>lexandra <span style={{ color: '#8b7355' }}>M</span>itchell
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-light tracking-wide transition-colors duration-200 hover:opacity-80"
                style={{ color: '#2a2a2a' }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-6 h-6 focus:outline-none"
            aria-label="Toggle menu"
            style={{ color: '#2a2a2a' }}
          >
            <span
              className="absolute top-0 left-0 w-full h-0.5 transition-all duration-300"
              style={{ 
                backgroundColor: '#2a2a2a',
                transform: isOpen ? 'rotate(45deg) translateY(10px)' : 'none'
              }}
            />
            <span
              className="absolute top-2.5 left-0 w-full h-0.5 transition-all duration-300"
              style={{ 
                backgroundColor: '#2a2a2a',
                opacity: isOpen ? 0 : 1
              }}
            />
            <span
              className="absolute top-5 left-0 w-full h-0.5 transition-all duration-300"
              style={{ 
                backgroundColor: '#2a2a2a',
                transform: isOpen ? 'rotate(-45deg) translateY(-10px)' : 'none'
              }}
            />
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
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-border"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-light tracking-wide hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
