export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  images: ProjectImage[];
  featured: boolean;
  year: number;
  client?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Artist {
  name: string;
  title: string;
  bio: string;
  email: string;
  instagram?: string;
  location: string;
  avatar: string;
}
