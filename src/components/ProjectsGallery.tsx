'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { useRef } from 'react';

interface ProjectsGalleryProps {
  projects: Project[];
}

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <section ref={containerRef} className="relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
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
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  scrollProgress: MotionValue<number>;
}

function ProjectCard({ project, index, scrollProgress }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const mainImage = project.images[0];
  
  const y = useTransform(scrollProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.7]);

  if (!mainImage) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ y, opacity }}
      className="group"
    >
      <Link href={`/projects/${project.id}`} className="block">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          isEven ? '' : 'lg:flex-row-reverse'
        }`}>
          {/* Image */}
          <motion.div 
            className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 2}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              <h2 className="text-3xl lg:text-4xl font-light tracking-wide text-black group-hover:text-gray-700 transition-colors duration-300">
                {project.title}
              </h2>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-600">
                {project.category} • {project.year}
              </p>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
              {project.description}
            </p>

            {project.client && (
              <p className="text-sm text-gray-500">
                Client: {project.client}
              </p>
            )}

            <motion.div 
              className="pt-4"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="inline-flex items-center text-black font-medium group-hover:text-gray-700 transition-colors duration-300">
                View Project
                <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
