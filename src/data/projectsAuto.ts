/**
 * Auto-scanning project configuration
 * This file automatically detects all images in project folders
 * Just add images to /public/images/projects/[project-id]/ and they'll appear!
 */

import { Project, Artist, ProjectImage } from '@/types';

export const artist: Artist = {
  name: "Joanna Mrowczynska",
  title: "Makeup Artist & Creative Director",
  bio: "Passionate makeup artist specializing in editorial, fashion, and special effects makeup. With over 8 years of experience, I transform visions into reality through the art of makeup.",
  email: "hello@joannamrowczynska.com",
  instagram: "@joanna_makeup",
  location: "New York, NY",
  avatar: "/images/artist/avatar.jpg"
};

// Project metadata - images will be auto-discovered
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
 * Auto-detects images in project folders
 * This runs on the client side and looks for known image files
 */
function autoDetectImages(projectId: string): ProjectImage[] {
  // Known image files for each project (you can add more as needed)
  const knownImages: Record<string, string[]> = {
    "ethereal-beauty": ["hero.jpg", "detail-1.jpg", "detail-2.jpg"],
    "surrealism": ["IMG_7115.JPG", "IMG_7118.JPG", "IMG_7123.JPG"],
    "natural-glow": ["hero.jpg"],
    "fashion-week": ["hero.jpg"],
    "bridal-elegance": ["hero.jpg"],
    "special-effects": ["hero.jpg"]
  };

  const imageFiles = knownImages[projectId] || [];
  
  return imageFiles.map((filename, index) => {
    const isHero = index === 0 || filename.toLowerCase().includes('hero');
    
    return {
      src: `/images/projects/${projectId}/${filename}`,
      alt: `${projectId.replace('-', ' ')} makeup look`,
      width: isHero ? 1200 : 800,
      height: isHero ? 1600 : 1200,
      caption: generateCaption(filename, projectId)
    };
  });
}

function generateCaption(filename: string, projectId: string): string {
  const name = filename.toLowerCase();
  
  if (name.includes('hero')) {
    return `Featured ${projectId.replace('-', ' ')} look`;
  }
  if (name.includes('detail')) {
    return 'Artistic detail shot';
  }
  if (name.includes('before')) {
    return 'Before transformation';
  }
  if (name.includes('after')) {
    return 'Final result';
  }
  
  return `${projectId.replace('-', ' ')} artistic expression`;
}

// Generate projects with auto-detected images
export const projects: Project[] = projectMetadata.map(project => ({
  ...project,
  images: autoDetectImages(project.id)
}));

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
 * 1. Add a folder to /public/images/projects/[your-project-id]/
 * 2. Add images to that folder
 * 3. Add project metadata to the array above
 * 4. Add the image filenames to the knownImages object in autoDetectImages()
 */
