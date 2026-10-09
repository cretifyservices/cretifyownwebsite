import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigateCaseStudy: (slug: string) => void;
  onStartProject: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNavigateCaseStudy,
  onStartProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0B] border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col">
        {/* Header bar */}
        <div className="flex items-center justify-between p-5 border-b border-white/[0.08] bg-[#0A0A0B]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(99,142,255)] shadow-[0_0_8px_rgb(99,142,255)]" />
            <span className="text-xs font-medium text-white tracking-[0.16em] uppercase">
              Transmission · {project.client}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full bg-black border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase font-medium text-[rgb(99,142,255)] tracking-[0.14em]">
                {project.category}
              </span>
              <h2 id="case-study-title" className="text-2xl sm:text-4xl font-semibold text-white mt-1">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Overview text */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-2">
              Overview
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          {/* Objectives & Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <h4 className="text-xs font-medium uppercase tracking-wider text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[rgb(99,142,255)]" />
                <span>Primary Objectives</span>
              </h4>
              <ul className="space-y-2 text-xs text-white/60">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[rgb(99,142,255)] shrink-0 font-mono">0{i + 1}.</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <h4 className="text-xs font-medium uppercase tracking-wider text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white/60" />
                <span>Challenges Encountered</span>
              </h4>
              <ul className="space-y-2 text-xs text-white/60">
                {project.challenges.map((ch, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white/40 shrink-0 font-mono">0{i + 1}.</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution & Approach */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
            <h4 className="text-xs font-medium uppercase tracking-wider text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-[rgb(99,142,255)]" />
              <span>Cretify Engineering & Strategy</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.solutions.map((sol, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] text-xs text-white/70">
                  <span className="block text-[10px] font-mono text-[rgb(99,142,255)] mb-1">
                    Phase 0{i + 1}
                  </span>
                  {sol}
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables & Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-3">
                Deliverables
              </h4>
              <ul className="space-y-1.5 text-xs text-white/80">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[rgb(99,142,255)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer actions */}
        <div className="p-5 border-t border-white/[0.08] bg-[#0A0A0B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onNavigateCaseStudy(project.slug);
            }}
            className="text-xs text-white/60 hover:text-white flex items-center gap-1.5 cursor-pointer"
          >
            <span>Open Dedicated Case Study Page</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => {
              onClose();
              onStartProject();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black hover:bg-[rgb(99,142,255)] hover:text-white text-xs font-medium uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer"
          >
            Start a Similar Project
          </button>
        </div>
      </div>
    </div>
  );
};
