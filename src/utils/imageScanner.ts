/**
 * Server-side image scanning utility
 * This scans the filesystem for project images automatically
 */

import fs from 'fs';
import path from 'path';
import { ProjectImage } from '@/types';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'projects');
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

/**
 * Scans a project folder for images
 */
export function scanProjectImages(projectId: string): ProjectImage[] {
  const projectDir = path.join(IMAGES_DIR, projectId);
  
  if (!fs.existsSync(projectDir)) {
    console.warn(`Project images directory not found: ${projectDir}`);
    return [];
  }

  try {
    const files = fs.readdirSync(projectDir);
    const imageFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return SUPPORTED_FORMATS.includes(ext);
      })
      .sort((a, b) => {
        // Sort: hero first, then by filename
        const aIsHero = a.toLowerCase().includes('hero');
        const bIsHero = b.toLowerCase().includes('hero');
        
        if (aIsHero && !bIsHero) return -1;
        if (!aIsHero && bIsHero) return 1;
        
        return a.localeCompare(b);
      });

    return imageFiles.map((filename, index) => {
      const isHero = index === 0 || filename.toLowerCase().includes('hero');
      
      return {
        src: `/images/projects/${projectId}/${filename}`,
        alt: generateAltText(filename, projectId),
        width: isHero ? 1200 : 800,
        height: isHero ? 1600 : 1200,
        caption: generateCaption(filename, projectId)
      };
    });
  } catch (error) {
    console.error(`Error scanning project images for ${projectId}:`, error);
    return [];
  }
}

/**
 * Scans all project folders and returns available project IDs
 */
export function scanAllProjects(): string[] {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.warn(`Images directory not found: ${IMAGES_DIR}`);
    return [];
  }

  try {
    return fs.readdirSync(IMAGES_DIR)
      .filter(item => {
        const itemPath = path.join(IMAGES_DIR, item);
        return fs.statSync(itemPath).isDirectory();
      })
      .sort();
  } catch (error) {
    console.error('Error scanning project directories:', error);
    return [];
  }
}

function generateAltText(filename: string, projectId: string): string {
  const projectName = projectId.replace(/-/g, ' ');
  const name = filename.toLowerCase();
  
  if (name.includes('hero')) {
    return `${projectName} makeup artistry - main showcase`;
  }
  if (name.includes('detail')) {
    return `${projectName} makeup artistry - artistic detail`;
  }
  if (name.includes('before')) {
    return `${projectName} makeup artistry - before transformation`;
  }
  if (name.includes('after')) {
    return `${projectName} makeup artistry - final result`;
  }
  
  return `${projectName} makeup artistry`;
}

function generateCaption(filename: string, projectId: string): string {
  const name = filename.toLowerCase();
  
  if (name.includes('hero')) {
    return 'Featured look';
  }
  if (name.includes('detail')) {
    return 'Artistic detail';
  }
  if (name.includes('before')) {
    return 'Before transformation';
  }
  if (name.includes('after')) {
    return 'Final result';
  }
  if (name.includes('process')) {
    return 'Creative process';
  }
  
  return 'Artistic expression';
}
