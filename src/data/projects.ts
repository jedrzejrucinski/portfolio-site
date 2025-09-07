import { Project, Artist } from '@/types';

export const artist: Artist = {
  name: "Alexandra Mitchell",
  title: "Makeup Artist & Creative Director",
  bio: "Passionate makeup artist specializing in editorial, fashion, and special effects makeup. With over 8 years of experience, I transform visions into reality through the art of makeup.",
  email: "hello@alexandramitchell.com",
  instagram: "@alexandra_makeup",
  location: "New York, NY",
  avatar: "/images/artist/avatar.jpg"
};

export const projects: Project[] = [
  {
    id: "ethereal-beauty",
    title: "Ethereal Beauty",
    description: "A dreamy editorial shoot exploring soft, ethereal makeup looks with emphasis on glowing skin and subtle color palettes.",
    category: "Editorial",
    year: 2024,
    client: "Vogue Magazine",
    featured: true,
    images: [
      {
        src: "/images/projects/ethereal-beauty/hero.jpg",
        alt: "Ethereal beauty makeup look with glowing skin",
        width: 1200,
        height: 1600,
        caption: "Glowing skin with subtle pink undertones"
      },
      {
        src: "/images/projects/ethereal-beauty/detail-1.jpg",
        alt: "Close-up of ethereal eye makeup",
        width: 800,
        height: 1200,
        caption: "Soft shimmer and natural lashes"
      },
      {
        src: "/images/projects/ethereal-beauty/detail-2.jpg",
        alt: "Side profile with ethereal makeup",
        width: 800,
        height: 1200,
        caption: "Luminous complexion with natural glow"
      }
    ]
  },
  {
    id: "avant-garde-fantasy",
    title: "Avant-Garde Fantasy",
    description: "Bold, experimental makeup pushing creative boundaries with vibrant colors and innovative techniques.",
    category: "Creative",
    year: 2024,
    featured: true,
    images: [
      {
        src: "/images/projects/avant-garde-fantasy/hero.jpg",
        alt: "Avant-garde fantasy makeup with bold colors",
        width: 1200,
        height: 1600,
        caption: "Electric blue and silver geometric design"
      },
      {
        src: "/images/projects/avant-garde-fantasy/detail-1.jpg",
        alt: "Close-up of avant-garde eye art",
        width: 800,
        height: 1200,
        caption: "Intricate geometric patterns"
      }
    ]
  },
  {
    id: "natural-glow",
    title: "Natural Glow",
    description: "Celebrating natural beauty with 'no-makeup makeup' looks that enhance rather than mask.",
    category: "Beauty",
    year: 2024,
    client: "Glossier",
    featured: false,
    images: [
      {
        src: "/images/projects/natural-glow/hero.jpg",
        alt: "Natural glowing makeup look",
        width: 1200,
        height: 1600,
        caption: "Fresh, dewy skin with natural flush"
      }
    ]
  },
  {
    id: "fashion-week",
    title: "Fashion Week Backstage",
    description: "Behind-the-scenes looks from New York Fashion Week, creating runway-ready makeup for top designers.",
    category: "Fashion",
    year: 2023,
    featured: false,
    images: [
      {
        src: "/images/projects/fashion-week/hero.jpg",
        alt: "Fashion week backstage makeup",
        width: 1200,
        height: 1600,
        caption: "Backstage energy and creativity"
      }
    ]
  },
  {
    id: "bridal-elegance",
    title: "Bridal Elegance",
    description: "Timeless bridal makeup looks that enhance natural beauty for the most important day.",
    category: "Bridal",
    year: 2023,
    featured: false,
    images: [
      {
        src: "/images/projects/bridal-elegance/hero.jpg",
        alt: "Elegant bridal makeup look",
        width: 1200,
        height: 1600,
        caption: "Classic elegance with modern touches"
      }
    ]
  },
  {
    id: "special-effects",
    title: "Special Effects Magic",
    description: "Transformative special effects makeup for film and television productions.",
    category: "SFX",
    year: 2023,
    featured: true,
    images: [
      {
        src: "/images/projects/special-effects/hero.jpg",
        alt: "Special effects makeup transformation",
        width: 1200,
        height: 1600,
        caption: "Dramatic transformation using prosthetics"
      }
    ]
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
