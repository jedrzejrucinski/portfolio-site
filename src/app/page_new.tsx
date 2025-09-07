'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin tracking-tight text-black mb-8">
            JOANNA
          </h1>
          <p className="text-lg md:text-xl font-light tracking-widest text-black/80 uppercase">
            Makeup Artist
          </p>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-black/20"></div>
        </motion.div>
      </section>

      {/* Projects Gallery */}
      <section ref={containerRef} className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-light tracking-wide text-center mb-20 text-black"
          >
            Selected Works
          </motion.h2>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

interface ProjectCardProps {
  project: any;
  index: number;
  scrollProgress: any;
}

function ProjectCard({ project, index, scrollProgress }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const y = useTransform(scrollProgress, [0, 1], [0, -50]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="group"
    >
      <Link href={`/projects/${project.id}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
          isEven ? '' : 'lg:direction-rtl'
        }`}>
          {/* Image */}
          <motion.div 
            style={{ y }}
            className={`lg:col-span-8 relative overflow-hidden ${
              isEven ? '' : 'lg:order-2'
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-500"></div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className={`lg:col-span-4 space-y-6 ${
            isEven ? '' : 'lg:order-1'
          }`}>
            <motion.div
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-sm font-light tracking-widest uppercase text-black/60 mb-2 block">
                {project.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-black mb-4">
                {project.title}
              </h3>
              <p className="text-black/70 font-light leading-relaxed text-lg">
                {project.description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <span className="inline-flex items-center text-sm font-light tracking-wide text-black group-hover:translate-x-2 transition-transform duration-300">
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
