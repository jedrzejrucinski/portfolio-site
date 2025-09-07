import { projects } from '@/data/projects';
import ProjectsGallery from '@/components/ProjectsGallery';

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-16 lg:pt-20">
      <ProjectsGallery projects={projects} />
    </main>
  );
}
