# Joanna Mrowczynska - Makeup Artist Portfolio

A modern, minimalistic portfolio website built for a professional makeup artist. This site showcases makeup artistry work through high-quality photography with smooth animations and an artistic feel inspired by top portfolio sites.

## ✨ Features

- **Modern Design**: Clean, minimalistic aesthetic with artistic touches
- **Smooth Animations**: Framer Motion powered animations throughout the site
- **Photography-First**: Image galleries optimized for showcasing makeup work
- **Responsive Design**: Fully responsive across all devices
- **Easy Content Management**: Simple project structure for adding new work
- **Performance Optimized**: Built with Next.js 15 and optimized images
- **Professional Layout**: Navigation, project filtering, and contact forms

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Images**: Next.js Image component for optimization
- **Fonts**: Inter & Playfair Display from Google Fonts

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects listing and individual project pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── Navigation.tsx     # Site navigation
│   └── Footer.tsx         # Site footer
├── data/                  # Project data and content
│   └── projects.ts        # Project information and artist bio
├── types/                 # TypeScript type definitions
│   └── index.ts           # Project and artist types
└── styles/                # Global styles
    └── globals.css        # Tailwind and custom CSS

public/
└── images/               # Static image assets
    ├── projects/         # Project photo galleries
    └── artist/           # Artist photos
```

## 🚀 Getting Started

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open [http://localhost:3000](http://localhost:3000) to view the site**

## 📝 Adding New Projects

To add a new makeup project:

1. **Add project data** in `src/data/projects.ts`:
```typescript
{
  id: "project-name",
  title: "Project Title",
  description: "Project description...",
  category: "Editorial", // Editorial, Creative, Beauty, Fashion, Bridal, SFX
  year: 2024,
  client: "Client Name", // Optional
  featured: true, // Show on homepage
  images: [
    {
      src: "/images/projects/project-name/hero.jpg",
      alt: "Alt text",
      width: 1200,
      height: 1600,
      caption: "Image caption" // Optional
    }
  ]
}
```

2. **Add images** to `public/images/projects/project-name/`

3. **The project will automatically appear** in the projects grid and be accessible via `/projects/project-name`

## 🎨 Customization

### Artist Information
Update the artist bio and contact information in `src/data/projects.ts`:

```typescript
export const artist: Artist = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  email: "your@email.com",
  instagram: "@your_handle",
  location: "Your Location",
  avatar: "/images/artist/avatar.jpg"
};
```

### Design Tokens
Customize colors and styling in `src/app/globals.css`:

```css
:root {
  --background: #fefefe;
  --foreground: #2a2a2a;
  --accent: #8b7355;      /* Change this for brand color */
  --muted: #f8f6f3;
  --border: #e5e5e5;
}
```

### Categories
Add or modify project categories in `src/data/projects.ts`:

```typescript
export const categories = [
  "All",
  "Editorial",
  "Creative", 
  "Beauty",
  "Fashion",
  "Bridal",
  "SFX"
];
```

## 📱 Pages

- **Home** (`/`) - Hero section with featured projects
- **Projects** (`/projects`) - Filterable project gallery
- **Project Detail** (`/projects/[id]`) - Individual project showcase
- **About** (`/about`) - Artist biography and experience
- **Contact** (`/contact`) - Contact form and information

## 🚀 Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
npm run build
```

Or deploy to any platform that supports Next.js.

## 📸 Image Guidelines

For best results:
- **Hero images**: 1200x1600px (3:4 aspect ratio)
- **Detail images**: 800x1200px or similar portrait orientation
- **File format**: JPG for photos, PNG for graphics
- **File size**: Optimize for web (< 500KB recommended)
- **File naming**: Use descriptive names (hero.jpg, detail-1.jpg, etc.)

## 🎯 SEO & Performance

- Optimized meta tags and Open Graph data
- Next.js Image component for automatic optimization
- Semantic HTML structure
- Fast loading with code splitting
- Mobile-first responsive design

## 📄 License

This project is created as a portfolio template. Customize and use for your own makeup artistry portfolio.

---

Built with ❤️ for makeup artists who want to showcase their work beautifully.
