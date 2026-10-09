import React from 'react';
import { ProjectItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectProject,
  index = 0,
}) => {
  return (
    <div
      onClick={() => onSelectProject(project)}
      className="group relative flex flex-col cursor-pointer transition-all duration-500"
    >
      {/* Media Container matching Vesper Showcase style */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-[#0A0A0B] border border-white/[0.08] group-hover:border-[rgb(99,142,255)]/50 transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(99,142,255,0.18)]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        
        {/* Subtle Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent opacity-60" />

        {/* Top-Left Category Badge matching Vesper */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0A0B]/70 backdrop-blur-md border border-white/15 text-[11px] font-medium tracking-[0.14em] uppercase text-white/90 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[rgb(99,142,255)] shadow-[0_0_6px_rgb(99,142,255)]" />
          <span>{project.category}</span>
        </div>

        {/* Top-Right Year */}
        <div className="absolute top-4 right-4 text-[11px] font-mono tracking-wider text-white/60 drop-shadow">
          {project.year}
        </div>

        {/* Hover Arrow Trigger */}
        <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[rgb(99,142,255)] group-hover:text-white group-hover:border-[rgb(99,142,255)] transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Typography beneath card matching Vesper */}
      <div className="mt-4 flex flex-col gap-1">
        <div className="flex items-center justify-between text-[12px] font-medium tracking-[0.1em] uppercase text-white/50">
          <span>{project.client}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[rgb(99,142,255)] transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-[13px] text-white/50 line-clamp-1 mt-0.5 font-normal">
          {project.tagline}
        </p>
      </div>
    </div>
  );
};
