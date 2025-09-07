'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light mb-6">
            Portfolio
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Explore my diverse collection of makeup artistry work across editorial, fashion, beauty, and creative projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          layout
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover-scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  
                  {/* Project overlay info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="font-serif text-xl font-light mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm opacity-90">
                        {project.category} • {project.year}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-xl lg:text-2xl font-light">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    {project.category} • {project.year}
                    {project.client && ` • ${project.client}`}
                  </p>
                  <p className="text-gray-600 font-light line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* No projects message */}
        {projects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-500 font-light">
              No projects found.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
