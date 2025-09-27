'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import FullscreenGallery from '@/components/FullscreenGallery';
import { use } from 'react';

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find(p => p.id === id);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);

  if (!project) {
    notFound();
  }

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
    setFullscreenOpen(true);
  };

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
          className="mb-32 lg:mb-48"
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
            <div 
              className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
              onClick={() => openFullscreen(0)}
            >
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            </div>
          </div>
        </motion.div>

        {/* Spacer Section */}
        <div className="py-32 lg:py-48"></div>

        {/* Image Gallery */}
        <motion.div 
          className="mb-20 lg:mb-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onClick={() => openFullscreen(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation to next/previous projects */}
        <motion.div 
          className="mt-16 pt-20 lg:pt-24 border-t border-border bg-gray-50/50"
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

      {/* Fullscreen Gallery */}
      <FullscreenGallery
        images={project.images}
        initialIndex={fullscreenIndex}
        isOpen={fullscreenOpen}
        onClose={() => setFullscreenOpen(false)}
      />
    </div>
  );
}
