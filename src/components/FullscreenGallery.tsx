'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ProjectImage } from '@/types';

interface FullscreenGalleryProps {
  images: ProjectImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function FullscreenGallery({ 
  images, 
  initialIndex, 
  isOpen, 
  onClose 
}: FullscreenGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageScrollPosition, setImageScrollPosition] = useState(0);
  const [imageCanScroll, setImageCanScroll] = useState(false);
  const [bounceDirection, setBounceDirection] = useState<'up' | 'down' | null>(null);
  
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Reset everything when gallery opens/closes or image changes
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setIsTransitioning(false);
      setImageScrollPosition(0);
    }
  }, [isOpen, initialIndex]);

  // Reset scroll position when image changes
  useEffect(() => {
    setImageScrollPosition(0);
    setImageCanScroll(false);
    setBounceDirection(null);
  }, [currentIndex]);

  // Always enable scrolling since we'll zoom images to make them scrollable
  useEffect(() => {
    setImageCanScroll(true);
  }, [currentIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isTransitioning, onClose]);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Handle mouse wheel for image scrolling and navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isTransitioning) return;

      const scrollDelta = e.deltaY;
      const scrollSensitivity = 0.08; // Slightly faster for smoother feel
      
      // Calculate new scroll position
      const maxScroll = 100; // 100% represents fully scrolled
      const newScrollPosition = Math.max(0, Math.min(maxScroll, 
        imageScrollPosition + (scrollDelta * scrollSensitivity)
      ));

      setImageScrollPosition(newScrollPosition);

      // Bigger buffer zones for smoother experience
      if (scrollDelta > 0 && newScrollPosition >= 85) {
        // Approaching bottom - show warning in last 15%
        setBounceDirection('down');
        
        if (newScrollPosition >= 98) {
          // Only transition when very close to edge
          setTimeout(() => goToNext(), 500);
        }
      } else if (scrollDelta < 0 && newScrollPosition <= 15) {
        // Approaching top - show warning in first 15%
        setBounceDirection('up');
        
        if (newScrollPosition <= 2) {
          // Only transition when very close to edge
          setTimeout(() => goToPrevious(), 500);
        }
      } else {
        setBounceDirection(null);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isOpen, isTransitioning, imageScrollPosition, imageCanScroll]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image container */}
        <div 
          ref={imageContainerRef}
          className="absolute inset-0 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                ref={imageRef}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover transition-all duration-300 ease-out"
                priority
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: `center ${imageScrollPosition}%`,
                  transform: `scale(0.85)`,
                  filter: bounceDirection ? 'brightness(1.05)' : 'none',
                  opacity: bounceDirection ? 0.95 : 1
                }}
                onLoad={() => {
                  setImageCanScroll(true);
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll progress indicator */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <div className={`w-1 h-32 bg-white/20 rounded-full overflow-hidden transition-all duration-500 ${
            bounceDirection ? 'w-1.5 bg-white/30' : ''
          }`}>
            <div
              className={`w-full rounded-full transition-all duration-500 ${
                bounceDirection ? 'bg-white' : 'bg-white'
              }`}
              style={{ height: `${(imageScrollPosition / 100) * 100}%` }}
            />
          </div>
        </div>

        {/* Subtle boundary indicators */}
        {bounceDirection && (
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {bounceDirection === 'down' && (
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/20 to-transparent" />
            )}
            {bounceDirection === 'up' && (
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/20 to-transparent" />
            )}
          </motion.div>
        )}


      </motion.div>
    </AnimatePresence>
  );
}
