import { Project, Artist } from '@/types';
import { getStaticProjectImages } from '@/utils/imageUtils';

export const artist: Artist = {
  name: "Joanna Mrowczynska",
  title: "Makeup Artist & Creative Director",
  bio: "Passionate makeup artist specializing in editorial, fashion, and special effects makeup. With over 8 years of experience, I transform visions into reality through the art of makeup.",
  email: "hello@joannamrowczynska.com",
  instagram: "@joanna_makeup",
  location: "New York, NY",
  avatar: "/images/artist/avatar.jpg"
};

// Define project metadata (images will be auto-loaded)
const projectsMetadata = [
  {
    id: "ethereal-beauty",
    title: "Ethereal Beauty",
    description: "A dreamy editorial shoot exploring soft, ethereal makeup looks with emphasis on glowing skin and subtle color palettes.",
    category: "Editorial",
    year: 2024,
    client: "Vogue Magazine",
    featured: true,
    imageFiles: ["hero.jpg", "detail-1.jpg", "detail-2.jpg"]
  },
  {
    id: "surrealism",
    title: "Surrealism",
    description: "Bold, experimental makeup pushing creative boundaries with vibrant colors and innovative techniques inspired by surrealist art.",
    category: "Creative",
    year: 2024,
    featured: true,
    imageFiles: ["IMG_7115.JPG", "IMG_7118.JPG", "IMG_7123.JPG"]
  },
  {
    id: "natural-glow",
    title: "Natural Glow",
    description: "Celebrating natural beauty with 'no-makeup makeup' looks that enhance rather than mask.",
    category: "Beauty",
    year: 2024,
    client: "Glossier",
    featured: false,
    imageFiles: ["hero.jpg"]
  },
  {
    id: "fashion-week",
    title: "Fashion Week Backstage",
    description: "Behind-the-scenes looks from New York Fashion Week, creating runway-ready makeup for top designers.",
    category: "Fashion",
    year: 2023,
    featured: false,
    imageFiles: ["hero.jpg"]
  },
  {
    id: "bridal-elegance",
    title: "Bridal Elegance",
    description: "Timeless bridal makeup looks that enhance natural beauty for the most important day.",
    category: "Bridal",
    year: 2023,
    featured: false,
    imageFiles: ["hero.jpg"]
  },
  {
    id: "special-effects",
    title: "Special Effects Magic",
    description: "Transformative special effects makeup for film and television productions.",
    category: "SFX",
    year: 2023,
    featured: true,
    imageFiles: ["hero.jpg"]
  }
];

// Generate full projects with auto-loaded images
export const projects: Project[] = projectsMetadata.map(project => ({
  ...project,
  images: getStaticProjectImages(project.id, project.imageFiles)
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
 * Helper function to add a new project easily
 * Just specify the metadata, images will be auto-detected
 */
export function addProject(projectData: {
  id: string;
  title: string;
  description: string;
  category: string;
  year: number;
  client?: string;
  featured: boolean;
  imageFiles: string[];
}) {
  return {
    ...projectData,
    images: getStaticProjectImages(projectData.id, projectData.imageFiles)
  };
}
