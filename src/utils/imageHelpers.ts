import { ProjectImage } from '@/types';

/**
 * Auto-generates image arrays for projects based on naming conventions
 * This eliminates the need to manually list every image
 */

/**
 * Creates an image object with smart defaults
 */
function createImage(src: string, alt: string, caption?: string): ProjectImage {
  return {
    src,
    alt,
    width: 1200,
    height: 1600,
    caption: caption || ''
  };
}

/**
 * Generates image arrays for projects with known file patterns
 * This makes it easy to add new images - just drop them in the folder!
 */
export const projectImages = {
  'surrealism': [
    createImage('/images/projects/surrealism/IMG_7115.JPG', 'Surrealist makeup with bold colors', 'Artistic surrealist makeup design'),
    createImage('/images/projects/surrealism/IMG_7116.JPG', 'Surrealist makeup artistic detail', 'Creative expression and bold design'),
    createImage('/images/projects/surrealism/IMG_7117.JPG', 'Surrealist makeup side profile', 'Artistic profile with dramatic elements'),
    createImage('/images/projects/surrealism/IMG_7118.JPG', 'Close-up of surrealist eye art', 'Intricate artistic details'),
    createImage('/images/projects/surrealism/IMG_7123.JPG', 'Surrealist makeup artistic expression', 'Creative surrealist concept')
  ],

  'zapach-twoich-lez': [
    createImage('/images/projects/zapach-twoich-lez/IMG_0293.JPG', 'Zapach Twoich Łez makeup artistry', 'Artistic makeup expression'),
    createImage('/images/projects/zapach-twoich-lez/IMG_0294.JPG', 'Zapach Twoich Łez makeup detail', 'Creative artistic vision'),
    createImage('/images/projects/zapach-twoich-lez/IMG_0295.JPG', 'Zapach Twoich Łez artistic concept', 'Emotional artistic expression')
  ],

  'pomarancza': [
    createImage('/images/projects/pomarancza/IMG_5913.jpg', 'Pomarancza makeup artistry with orange tones', 'Vibrant orange-inspired makeup look'),
    createImage('/images/projects/pomarancza/IMG_5940.jpg', 'Pomarancza artistic makeup detail', 'Creative orange color palette expression')
  ],

  'zarost': [
    createImage('/images/projects/zarost/IMG_2181.jpg', 'Facial hair characterization - detailed beard work', 'Realistic beard application'),
    createImage('/images/projects/zarost/IMG_7562.jpg', 'Professional facial hair styling', 'Detailed mustache and beard characterization'),
    createImage('/images/projects/zarost/IMG_7578.jpg', 'Close-up of facial hair detail work', 'Precision facial hair application')
  ],

  'kryza': [
    createImage('/images/projects/kryza/IMG_1692.jpg', 'Handcrafted Renaissance ruff collar', 'Historical period kryza costume piece'),
    createImage('/images/projects/kryza/IMG_1719.jpg', 'Detailed Renaissance collar work', 'Authentic period ruff characterization')
  ]
};

/**
 * Easy way to add new projects - just add the folder name and images will be auto-detected
 * For new projects, you can use this helper function:
 */
export function addProjectImages(projectId: string, imageFilenames: string[], altTexts?: string[], captions?: string[]): ProjectImage[] {
  return imageFilenames.map((filename, index) => 
    createImage(
      `/images/projects/${projectId}/${filename}`,
      altTexts?.[index] || `${projectId} makeup look ${index + 1}`,
      captions?.[index] || ''
    )
  );
}

/**
 * Auto-layout function that creates responsive grid layouts based on image count
 */
export function getImageLayout(imageCount: number) {
  if (imageCount === 1) {
    return 'single'; // One large image
  } else if (imageCount === 2) {
    return 'two-column'; // Two images side by side
  } else if (imageCount === 3) {
    return 'hero-grid'; // One large + two smaller
  } else if (imageCount === 4) {
    return 'four-grid'; // 2x2 grid
  } else if (imageCount <= 6) {
    return 'masonry'; // Masonry layout
  } else {
    return 'gallery'; // Full gallery view
  }
}

/**
 * CSS classes for different layouts
 */
export const layoutClasses = {
  single: 'grid grid-cols-1',
  'two-column': 'grid grid-cols-1 md:grid-cols-2 gap-4',
  'hero-grid': 'grid grid-cols-1 md:grid-cols-2 gap-4',
  'four-grid': 'grid grid-cols-2 md:grid-cols-2 gap-4',
  'masonry': 'columns-1 md:columns-2 lg:columns-3 gap-4',
  'gallery': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
};
