'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { use } from 'react';

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/projects"
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-light"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light mb-6">
                {project.title}
              </h1>
              <div className="space-y-4 mb-8">
                <p className="text-lg text-gray-600 font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                  <div>
                    <span className="font-medium text-gray-900">Category:</span> {project.category}
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Year:</span> {project.year}
                  </div>
                  {project.client && (
                    <div>
                      <span className="font-medium text-gray-900">Client:</span> {project.client}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Image Gallery */}
        {project.images.length > 1 && (
          <motion.div 
            className="space-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-serif text-2xl lg:text-3xl font-light text-center">
              Project Gallery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {project.images.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-[4/5] overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover-scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Navigation to next/previous projects */}
        <motion.div 
          className="mt-24 pt-16 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center">
            <div className="text-center">
              <h3 className="font-serif text-xl font-light mb-4">
                Explore More Work
              </h3>
              <Link 
                href="/projects"
                className="inline-flex items-center px-8 py-3 border border-accent text-accent font-light tracking-wide hover:bg-accent hover:text-white transition-all duration-300 hover-scale-105"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
