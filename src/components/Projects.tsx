import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'EcoBank Mobile App',
    category: 'Mobile App Design',
    description: 'A complete redesign of a banking app focused on sustainability and user-friendly financial management.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY3MDQyOTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Mobile', 'Fintech', 'iOS/Android'],
  },
  {
    id: 2,
    title: 'Dashboard Analytics Platform',
    category: 'Web Application',
    description: 'An enterprise dashboard for real-time data visualization and business intelligence.',
    image: 'https://images.unsplash.com/photo-1704699175212-117f10d5b3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3MDUxMjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Web', 'B2B', 'SaaS'],
  },
  {
    id: 3,
    title: 'Minimal E-Commerce',
    category: 'E-Commerce',
    description: 'A clean and modern online store with focus on product photography and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1528262004378-a108d795029c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWdufGVufDF8fHx8MTc2NzA1Nzk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['E-Commerce', 'Responsive', 'Branding'],
  },
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-blue-600 mb-2">Featured Work</p>
          <h2 className="text-slate-900 mb-4">
            Selected Projects
          </h2>
          <p className="text-slate-600 text-lg">
            A collection of projects that showcase my approach to solving design challenges
            across different industries and platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent transition-opacity ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <button className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-blue-600 text-sm mb-2">{project.category}</p>
                <h3 className="text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-colors inline-flex items-center gap-2">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
