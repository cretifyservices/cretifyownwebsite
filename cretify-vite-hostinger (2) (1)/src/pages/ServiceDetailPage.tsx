import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';
import { StartAProjectCTA } from '../components/StartAProjectCTA';
import { StarryCosmicCanvas } from '../components/StarryCosmicCanvas';
import { ProjectItem } from '../types';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronDown, 
  ShieldAlert, 
  Layers, 
  Workflow 
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  navigate: (path: string) => void;
  onSelectProject: (project: ProjectItem) => void;
  onStartProject: (serviceId?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  navigate,
  onSelectProject,
  onStartProject,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = SERVICES_DATA.find((s) => s.slug === slug) || SERVICES_DATA[0];

  const relevantProjects = PROJECTS_DATA.filter((p) => {
    if (slug === 'website-development') return p.category === 'Websites' || p.category === 'Branding';
    if (slug === 'web-app-development') return p.category === 'Web Applications';
    if (slug === 'ecommerce-development') return p.category === 'E-commerce';
    if (slug === 'ui-ux-design') return p.category === 'UI/UX' || p.category === 'Web Applications';
    if (slug === 'video-editing') return p.category === 'Video Editing';
    if (slug === 'branding') return p.category === 'Branding';
    if (slug === 'ai-automation') return p.category === 'AI Automation' || p.category === 'Web Applications';
    return true;
  }).slice(0, 2);

  const relatedServices = SERVICES_DATA.filter((s) =>
    service.relatedServiceIds.includes(s.id)
  );

  return (
    <div className="relative min-h-screen bg-[#0A0A0B] text-white overflow-hidden pt-28 font-sans">
      <StarryCosmicCanvas density={70} interactive={false} className="opacity-25" />

      {/* Back button */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-4">
        <button
          onClick={() => {
            navigate('/services');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.14em] text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Disciplines</span>
        </button>
      </div>

      {/* 1. Hero Headline & Description */}
      <section className="relative py-16 px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[rgb(99,142,255)] shadow-[0_0_8px_rgb(99,142,255)]" />
          <span className="text-[13px] font-medium tracking-[0.26em] uppercase text-white/60">
            {service.shortTag}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-semibold text-white tracking-[-0.02em] leading-[1.05] max-w-4xl mx-auto">
          {service.title}
        </h1>

        <p className="mt-6 text-[16px] sm:text-[18px] text-white/65 max-w-3xl mx-auto leading-relaxed font-normal">
          {service.heroDescription}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onStartProject(service.id)}
            className="px-8 py-3.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[rgb(99,142,255)] text-white text-[14px] font-medium tracking-[0.06em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_30px_rgba(99,142,255,0.3)] cursor-pointer"
          >
            Request a Quote for {service.shortTag}
          </button>
        </div>
      </section>

      {/* 2. Clear Explanation */}
      <section className="py-16 px-5 sm:px-8 lg:px-12 max-w-4xl mx-auto border-t border-white/[0.08]">
        <div className="space-y-4">
          <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[rgb(99,142,255)]">
            Discipline Overview
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-[-0.015em]">
            How Cretify Delivers {service.title}
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal pt-2">
            {service.overview}
          </p>
        </div>
      </section>

      {/* 3. Problems This Service Helps Solve */}
      <section className="py-16 px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto border-t border-white/[0.08]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-white/50">
            <ShieldAlert className="w-4 h-4 text-white/60" />
            <span>Bottlenecks & Friction</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-[-0.015em]">
            Problems This Service Helps Solve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {service.problemsSolved.map((prob, i) => (
              <div
                key={i}
                className="p-5 rounded-[18px] bg-white/[0.02] border border-white/[0.08] flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[rgb(99,142,255)] mt-2 shrink-0 shadow-[0_0_6px_rgb(99,142,255)]" />
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                  {prob}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Capabilities & Deliverables */}
      <section className="py-16 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Capabilities */}
          <div className="p-8 rounded-[22px] bg-white/[0.02] border border-white/[0.08] space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-[rgb(99,142,255)]" />
              <span>Full Scope Capabilities</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 pt-2 font-normal">
              {service.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[rgb(99,142,255)] mt-0.5 shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="p-8 rounded-[22px] bg-white/[0.02] border border-white/[0.08] space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Workflow className="w-5 h-5 text-[rgb(99,142,255)]" />
              <span>Concrete Deliverables</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70 pt-2 font-normal">
              {service.deliverables.map((del, i) => (
                <li key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[rgb(99,142,255)] block mb-0.5">
                    Deliverable 0{i + 1}
                  </span>
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Benefits for Businesses */}
      <section className="py-16 px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto border-t border-white/[0.08]">
        <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[rgb(99,142,255)]">
          Commercial Impact
        </span>
        <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-[-0.015em] mt-2 mb-8">
          Measurable Business Benefits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {service.businessBenefits.map((b, i) => (
            <div
              key={i}
              className="p-6 rounded-[20px] bg-white/[0.02] border border-white/[0.08] space-y-2"
            >
              <h3 className="text-base sm:text-lg font-semibold text-white">{b.title}</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Relevant Examples / Case Studies */}
      {relevantProjects.length > 0 && (
        <section className="py-16 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto border-t border-white/[0.08]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[rgb(99,142,255)]">
                Selected Work
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1">
                Featured {service.shortTag} Transmissions
              </h2>
            </div>
            <button
              onClick={() => navigate('/work')}
              className="text-xs text-[rgb(99,142,255)] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relevantProjects.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                onSelectProject={onSelectProject}
                index={i}
              />
            ))}
          </div>
        </section>
      )}

      {/* 7. Process for Delivering That Service */}
      <section className="py-16 px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto border-t border-white/[0.08]">
        <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[rgb(99,142,255)]">
          Step-by-Step Delivery
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-2 mb-8">
          Our Process for {service.title}
        </h2>

        <div className="space-y-4">
          {service.processSteps.map((step) => (
            <div
              key={step.step}
              className="p-5 rounded-[18px] bg-white/[0.02] border border-white/[0.08] flex items-start gap-4"
            >
              <span className="text-xs font-mono font-bold text-white bg-white/10 px-2.5 py-1 rounded-md shrink-0 border border-white/10">
                {step.step}
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm text-white/60 mt-1 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="py-16 px-5 sm:px-8 lg:px-12 max-w-4xl mx-auto border-t border-white/[0.08]">
        <span className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[rgb(99,142,255)]">
          FAQ
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-2 mb-8">
          Questions About {service.title}
        </h2>

        <div className="space-y-3">
          {service.faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-[18px] bg-white/[0.02] border border-white/[0.08] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-white/40 transition-transform ${
                      isOpen ? 'rotate-180 text-[rgb(99,142,255)]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/[0.06] pt-3 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. Related Services */}
      <section className="py-16 px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto border-t border-white/[0.08]">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">
          Complementary Solutions
        </span>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mt-1 mb-6">
          Related Services Often Paired Together
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedServices.map((rel) => (
            <button
              key={rel.slug}
              onClick={() => {
                navigate(`/services/${rel.slug}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-5 rounded-[18px] bg-white/[0.02] border border-white/[0.08] hover:border-[rgb(99,142,255)]/50 text-left transition-colors cursor-pointer group"
            >
              <h3 className="text-sm font-semibold text-white group-hover:text-white flex items-center justify-between">
                <span>{rel.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[rgb(99,142,255)]" />
              </h3>
              <p className="text-xs text-white/50 mt-1 line-clamp-2 font-normal">
                {rel.tagline}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* 10. Strong CTA */}
      <StartAProjectCTA
        onStartProject={() => onStartProject(service.id)}
        title={`Ready to Build Your ${service.shortTag}?`}
      />
    </div>
  );
};
