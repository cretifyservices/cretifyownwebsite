import React from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { StartAProjectCTA } from '../components/StartAProjectCTA';
import { StarryCosmicCanvas } from '../components/StarryCosmicCanvas';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';

interface CaseStudyPageProps {
  slug: string;
  navigate: (path: string) => void;
  onStartProject: () => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  slug,
  navigate,
  onStartProject,
}) => {
  const project = PROJECTS_DATA.find((p) => p.slug === slug) || PROJECTS_DATA[0];

  return (
    <div className="relative min-h-screen bg-[#0A0A0B] text-white overflow-hidden pt-28 font-sans">
      <StarryCosmicCanvas density={60} interactive={false} className="opacity-25" />

      {/* Navigation Breadcrumb */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pt-4">
        <button
          onClick={() => {
            navigate('/work');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Work</span>
        </button>
      </div>

      {/* Hero Header */}
      <section className="relative py-12 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs">
            <span className="font-mono font-medium uppercase tracking-[0.2em] text-[rgb(99,142,255)]">
              {project.category}
            </span>
            <span className="text-white/40">·</span>
            <span className="text-white/60">{project.client}</span>
            <span className="text-white/40">·</span>
            <span className="text-white/40 font-mono">{project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-semibold text-white tracking-[-0.02em] leading-[1.05]">
            {project.title}
          </h1>

          <p className="text-[16px] sm:text-[20px] text-white/70 max-w-3xl leading-relaxed font-normal">
            {project.tagline}
          </p>
        </div>

        {/* Cinematic Preview Image */}
        <div className="mt-10 relative rounded-[22px] overflow-hidden aspect-[16/9] w-full bg-black border border-white/10 shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-60" />
        </div>
      </section>

      {/* Overview & Core Scope */}
      <section className="py-16 px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto border-t border-white/[0.08]">
        <div className="space-y-4">
          <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[rgb(99,142,255)]">
            Executive Summary
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-[-0.015em]">
            Project Overview
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal pt-2">
            {project.overview}
          </p>
        </div>
      </section>

      {/* Objectives & Challenges */}
      <section className="py-16 px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Objectives */}
          <div className="p-8 rounded-[22px] bg-white/[0.02] border border-white/[0.08] space-y-4">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[rgb(99,142,255)]" />
              <span>Project Objectives</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70 font-normal">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[rgb(99,142,255)] font-mono text-xs mt-0.5">0{i + 1}.</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="p-8 rounded-[22px] bg-white/[0.02] border border-white/[0.08] space-y-4">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-white/60" />
              <span>Key Challenges</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70 font-normal">
              {project.challenges.map((ch, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-white/40 font-mono text-xs mt-0.5">0{i + 1}.</span>
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions & Engineering */}
      <section className="py-16 px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto border-t border-white/[0.08]">
        <div className="space-y-6">
          <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[rgb(99,142,255)]">
            Engineering & Strategy
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-[-0.015em]">
            Cretify Approach & Architectural Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {project.solutions.map((sol, i) => (
              <div
                key={i}
                className="p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.08] space-y-2"
              >
                <span className="text-xs font-mono font-semibold text-[rgb(99,142,255)] block">
                  Phase 0{i + 1}
                </span>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                  {sol}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Stack */}
      <section className="py-16 px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-4">
              Final Deliverables
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75 font-normal">
              {project.deliverables.map((d, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[rgb(99,142,255)]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-4">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Start A Project CTA */}
      <StartAProjectCTA
        onStartProject={onStartProject}
        title="Inspired by This Casework?"
      />
    </div>
  );
};
