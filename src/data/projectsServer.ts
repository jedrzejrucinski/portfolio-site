/**
 * Server-side projects configuration with automatic image scanning
 * This file scans the filesystem for project images on the server
 */

import { Project, Artist } from '@/types';
import { scanProjectImages } from '@/utils/imageScanner';

export const artist: Artist = {
  name: "Joanna Mrowczynska",
  title: "Makeup Artist & Creative Director",
  bio: "Passionate makeup artist specializing in editorial, fashion, and special effects makeup. With over 8 years of experience, I transform visions into reality through the art of makeup.",
  email: "hello@joannamrowczynska.com",
  instagram: "@joanna_makeup",
  location: "New York, NY",
  avatar: "/images/artist/avatar.jpg"
};

// Project metadata - images will be automatically scanned from filesystem
const projectMetadata = [
  {
    id: "ethereal-beauty",
    title: "Ethereal Beauty",
    description: "A dreamy editorial shoot exploring soft, ethereal makeup looks with emphasis on glowing skin and subtle color palettes.",
    category: "Editorial",
    year: 2024,
    client: "Vogue Magazine",
    featured: true
  },
  {
    id: "surrealism",
    title: "Surrealism",
    description: "Bold, experimental makeup pushing creative boundaries with vibrant colors and innovative techniques inspired by surrealist art.",
    category: "Creative",
    year: 2024,
    featured: true
  },
  {
    id: "natural-glow",
    title: "Natural Glow",
    description: "Celebrating natural beauty with 'no-makeup makeup' looks that enhance rather than mask.",
    category: "Beauty",
    year: 2024,
    client: "Glossier",
    featured: false
  },
  {
    id: "fashion-week",
    title: "Fashion Week Backstage",
    description: "Behind-the-scenes looks from New York Fashion Week, creating runway-ready makeup for top designers.",
    category: "Fashion",
    year: 2023,
    featured: false
  },
  {
    id: "bridal-elegance",
    title: "Bridal Elegance",
    description: "Timeless bridal makeup looks that enhance natural beauty for the most important day.",
    category: "Bridal",
    year: 2023,
    featured: false
  },
  {
    id: "special-effects",
    title: "Special Effects Magic",
    description: "Transformative special effects makeup for film and television productions.",
    category: "SFX",
    year: 2023,
    featured: true
  }
];

/**
 * Generate projects with filesystem-scanned images
 * This function runs on the server and scans actual files
 */
export function getProjects(): Project[] {
  return projectMetadata.map(project => ({
    ...project,
    images: scanProjectImages(project.id)
  }));
}

/**
 * Get a single project by ID with scanned images
 */
export function getProjectById(id: string): Project | undefined {
  const metadata = projectMetadata.find(p => p.id === id);
  if (!metadata) return undefined;

  return {
    ...metadata,
    images: scanProjectImages(id)
  };
}

export const categories = [
  "All",
  "Editorial",
  "Creative", 
  "Beauty",
  "Fashion",
  "Bridal",
  "SFX"
];

/**
 * To add a new project:
 * 1. Create a folder: /public/images/projects/[your-project-id]/
 * 2. Add images to that folder (any of: .jpg, .jpeg, .png, .webp, .avif)
 * 3. Add project metadata to the projectMetadata array above
 * 4. The images will be automatically detected and included!
 * 
 * Image naming tips:
 * - Use "hero" in the filename for the main image (e.g., "hero.jpg")
 * - Use "detail" for close-up shots (e.g., "detail-1.jpg")
 * - Use "before" and "after" for transformation shots
 * - Other files will be sorted alphabetically
 */
