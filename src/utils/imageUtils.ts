import fs from 'fs';
import path from 'path';
import { ProjectImage } from '@/types';

/**
 * Automatically scans a project folder and returns an array of image objects
 * @param projectId - The project ID (folder name)
 * @returns Array of ProjectImage objects
 */
export function getProjectImages(projectId: string): ProjectImage[] {
  try {
    const projectPath = path.join(process.cwd(), 'public', 'images', 'projects', projectId);
    
    // Check if directory exists
    if (!fs.existsSync(projectPath)) {
      console.warn(`Project folder not found: ${projectPath}`);
      return [];
    }

    // Get all files in the directory
    const files = fs.readdirSync(projectPath);
    
    // Filter for image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG', '.WEBP'];
    const imageFiles = files.filter(file => 
      imageExtensions.some(ext => file.toLowerCase().endsWith(ext.toLowerCase()))
    );

    // Sort files naturally (hero first if exists, then alphabetically)
    imageFiles.sort((a, b) => {
      if (a.toLowerCase().includes('hero')) return -1;
      if (b.toLowerCase().includes('hero')) return 1;
      return a.localeCompare(b);
    });

    // Convert to ProjectImage objects
    return imageFiles.map((filename, index) => {
      const isHero = index === 0 || filename.toLowerCase().includes('hero');
      const isDetail = filename.toLowerCase().includes('detail');
      
      return {
        src: `/images/projects/${projectId}/${filename}`,
        alt: `${projectId} makeup look ${index + 1}`,
        width: isHero ? 1200 : 800,
        height: isHero ? 1600 : 1200,
        caption: generateCaption(filename, projectId, isHero, isDetail)
      };
    });
  } catch (error) {
    console.error(`Error scanning project folder ${projectId}:`, error);
    return [];
  }
}

/**
 * Generates a caption based on filename and project context
 */
function generateCaption(filename: string, projectId: string, isHero: boolean, isDetail: boolean): string {
  const baseFilename = filename.split('.')[0].toLowerCase();
  
  if (isHero) {
    return `Featured ${projectId.replace('-', ' ')} look`;
  }
  
  if (isDetail) {
    return `Close-up detail shot`;
  }
  
  if (baseFilename.includes('before')) {
    return 'Before transformation';
  }
  
  if (baseFilename.includes('after')) {
    return 'After transformation';
  }
  
  if (baseFilename.includes('process')) {
    return 'Behind the scenes process';
  }
  
  return `${projectId.replace('-', ' ')} artistic detail`;
}

/**
 * Client-side version that works with static data
 * This will be used when we can't access the filesystem
 */
export function getStaticProjectImages(projectId: string, imageList: string[]): ProjectImage[] {
  return imageList.map((filename, index) => {
    const isHero = index === 0 || filename.toLowerCase().includes('hero');
    const isDetail = filename.toLowerCase().includes('detail');
    
    return {
      src: `/images/projects/${projectId}/${filename}`,
      alt: `${projectId} makeup look ${index + 1}`,
      width: isHero ? 1200 : 800,
      height: isHero ? 1600 : 1200,
      caption: generateCaption(filename, projectId, isHero, isDetail)
    };
  });
}
