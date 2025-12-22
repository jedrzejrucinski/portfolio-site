import { Project, Artist } from '@/types';
import { projectImages } from '@/utils/imageHelpers';

export const artist: Artist = {
  name: "Joanna Mrowczynska",
  title: "Makeup Artist & Creative Director",
  bio: "Passionate makeup artist specializing in editorial, fashion, and special effects makeup. With over 8 years of experience, I transform visions into reality through the art of makeup.",
  email: "hello@joannamrowczynska.com",
  instagram: "@joanna_makeup",
  location: "New York, NY",
  avatar: "/images/artist/avatar.jpg"
};

export const projects: Project[] = [
  {
    id: "surrealism",
    title: "Surrealism",
    description: "Bold, experimental makeup pushing creative boundaries with vibrant colors and innovative techniques inspired by surrealist art.",
    category: "Creative",
    year: 2024,
    featured: true,
    images: projectImages['surrealism']
  },
  {
    id: "zapach-twoich-lez",
    title: "Zapach Twoich Łez",
    description: "An emotional and artistic makeup collection exploring the beauty of vulnerability and raw emotion through bold, expressive looks.",
    category: "Creative",
    year: 2024,
    featured: true,
    images: projectImages['zapach-twoich-lez']
  },
  {
    id: "pomarancza",
    title: "Pomarańcza",
    description: "A vibrant exploration of warm orange tones and sun-kissed beauty, celebrating the energy and warmth of citrus-inspired makeup artistry.",
    category: "Creative",
    year: 2024,
    featured: true,
    images: projectImages['pomarancza']
  },
  {
    id: "zarost",
    title: "Zarost",
    description: "Detailed facial hair characterization showcasing precision in creating realistic beard and mustache applications for film and theater.",
    category: "SFX",
    year: 2024,
    featured: true,
    images: projectImages['zarost']
  },
  {
    id: "kryza",
    title: "Kryza",
    description: "Handcrafted period ruff collar showcasing historical costume and makeup artistry with meticulous attention to Renaissance detail.",
    category: "Creative",
    year: 2024,
    featured: true,
    images: projectImages['kryza']
  }
];

export const categories = [
  "All",
  "Editorial",
  "Creative", 
  "Beauty",
  "Fashion",
  "Bridal",
  "SFX"
];

// Example of how to easily add a new project with multiple images:
// When you add new images to a project folder, just use this pattern:
/*
export const newProject: Project = {
  id: "new-project",
  title: "New Project",
  description: "Description here",
  category: "Editorial",
  year: 2024,
  featured: true,
  images: addProjectImages(
    'new-project',
    ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    ['Alt text 1', 'Alt text 2', 'Alt text 3'],
    ['Caption 1', 'Caption 2', 'Caption 3']
  )
};
*/
