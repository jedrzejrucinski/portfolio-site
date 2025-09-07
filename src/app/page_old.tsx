'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects, artist } from '@/data/projects';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #ffffff, #f8f6f3)' }}>
        <motion.div 
          className="max-w-4xl mx-auto px-6 lg:px-8 text-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={artist.avatar}
              alt={artist.name}
              width={120}
              height={120}
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white shadow-lg"
              style={{ display: 'block' }}
            />
          </motion.div>

          <motion.h1 
            className="font-serif text-4xl lg:text-6xl xl:text-7xl font-light mb-6 text-center"
            style={{ color: '#2a2a2a', lineHeight: '1.1' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {artist.name}
          </motion.h1>

          <motion.p 
            className="text-lg lg:text-xl font-light max-w-2xl mx-auto mb-8 text-center"
            style={{ color: '#6b7280' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {artist.title}
          </motion.p>

          <motion.p 
            className="text-base lg:text-lg font-light max-w-3xl mx-auto mb-12 text-center"
            style={{ color: '#9ca3af', lineHeight: '1.6' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {artist.bio}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              href="/projects"
              className="px-8 py-3 text-white font-light tracking-wide transition-all duration-300 hover-scale-105 text-center"
              style={{ backgroundColor: '#8b7355' }}
            >
              View My Work
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3 border font-light tracking-wide transition-all duration-300 hover-scale-105 text-center"
              style={{ borderColor: '#8b7355', color: '#8b7355' }}
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-50"
          style={{ transform: 'translateX(-50%)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#8b7355' }}>
            <motion.div 
              className="w-1 h-3 rounded-full mt-2"
              style={{ backgroundColor: '#8b7355' }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light mb-4 text-center" style={{ color: '#2a2a2a' }}>
              Featured Work
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto text-center" style={{ color: '#6b7280' }}>
              A curated selection of my most impactful makeup artistry projects
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="relative overflow-hidden mb-6" style={{ aspectRatio: '3/4' }}>
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover-scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-all duration-300" />
                  </div>
                  <div className="space-y-2 text-center lg:text-left">
                    <h3 className="font-serif text-xl lg:text-2xl font-light" style={{ color: '#2a2a2a' }}>
                      {project.title}
                    </h3>
                    <p className="text-sm uppercase tracking-wider" style={{ color: '#9ca3af' }}>
                      {project.category} • {project.year}
                    </p>
                    <p className="font-light" style={{ color: '#6b7280', lineHeight: '1.5' }}>
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              href="/projects"
              className="inline-flex items-center px-8 py-3 border font-light tracking-wide transition-all duration-300 hover-scale-105"
              style={{ borderColor: '#8b7355', color: '#8b7355' }}
            >
              View All Projects
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
