import React, { useState, useEffect } from 'react';
import { StarryCosmicCanvas } from '../components/StarryCosmicCanvas';
import { ManifestoSection } from '../components/ManifestoSection';
import { SelectedWorkSection } from '../components/SelectedWorkSection';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { ApproachScrollSaturn } from '../components/ApproachScrollSaturn';
import { StartAProjectCTA } from '../components/StartAProjectCTA';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectItem } from '../types';

interface HomePageProps {
  navigate: (path: string) => void;
  onSelectProject: (project: ProjectItem) => void;
  onStartProject: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  navigate,
  onSelectProject,
  onStartProject,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Development capabilities keywords for infinite loop animation as requested
  const developmentKeywords = [
    'UI/UX DESIGN',
    'RESPONSIVE WEB APPS',
    'WEBSITE DEVELOPMENT',
    'E-COMMERCE PLATFORMS',
    'AI-POWERED AUTOMATION',
    'BRAND IDENTITY & SYSTEMS',
    'CUSTOM WEB SYSTEMS',
    'PERFORMANCE OPTIMIZATION',
    'VIDEO EDITING & MOTION',
    'SEARCH ENGINE OPTIMIZATION',
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'We map the terrain — audience, market, and the truth the brand is circling. No pixels until the problem is clear.',
    },
    {
      num: '02',
      title: 'Direction',
      desc: 'We find the single idea worth betting on, then set the visual and motion language that will carry it everywhere.',
    },
    {
      num: '03',
      title: 'Build',
      desc: 'We engineer the system end to end — identity, interface, motion — precise enough to scale without losing its center.',
    },
    {
      num: '04',
      title: 'Launch',
      desc: 'We ship, measure, and refine. The work keeps earning its place long after it goes live.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0B] text-white overflow-hidden font-sans selection:bg-[rgb(99,142,255)] selection:text-white">
      
      {/* ========================================================= */}
      {/* SECTION 0: HERO (100% VESPER DEMO REPLICATION)           */}
      {/* ========================================================= */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
        
        {/* Starfield Canvas Background with Prominent Circles and Crisp Stars */}
        <StarryCosmicCanvas density={115} interactive={true} />

        {/* 3D Center Video Stage (Enlarged on mobile, feathered radial mask eliminates edge seams completely) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div
            className="relative w-[540px] sm:w-[760px] md:w-[860px] h-[360px] sm:h-[440px] md:h-[484px] scale-120 sm:scale-100 opacity-90 mix-blend-screen"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 52% 52% at 50% 50%, #000 35%, transparent 85%)',
              maskImage:
                'radial-gradient(ellipse 52% 52% at 50% 50%, #000 35%, transparent 85%)',
            }}
          >
            <video
              src="https://framerusercontent.com/assets/bQaOKhgAU1CYPKfgZUqo3xPvs.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        </div>

        {/* Completely Symmetrical, Balanced Vignette Layer */}
        <div
          className="absolute inset-0 pointer-events-none z-1"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(10,10,11,0) 35%, rgba(10,10,11,0.55) 72%, #0A0A0B 100%)',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-7">
          
          {/* Eyebrow: CREATIVE STUDIO — CRETIFY */}
          <div
            className="flex items-center gap-2.5 transition-all duration-700 ease-out"
            style={{
              opacity: mounted ? 1 : 0.001,
              transform: mounted ? 'translateY(0)' : 'translateY(12px)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(99,142,255)] shadow-[0_0_8px_rgb(99,142,255)]" />
            <span className="text-[13px] font-medium tracking-[0.26em] uppercase text-white/60">
              CREATIVE STUDIO — CRETIFY
            </span>
          </div>

          {/* Headline with Word-by-Word Reveal */}
          <h1 className="text-4xl sm:text-7xl lg:text-[92px] font-semibold text-white tracking-[-0.02em] leading-[1.02] max-w-4xl">
            {['We', 'build', 'worlds'].map((word, i) => (
              <span
                key={word}
                className="inline-block mr-[0.3em] transition-all duration-700 ease-out"
                style={{
                  opacity: mounted ? 1 : 0.001,
                  filter: mounted ? 'blur(0px)' : 'blur(10px)',
                  transform: mounted ? 'translateY(0)' : 'translateY(28px)',
                  transitionDelay: `${150 + i * 90}ms`,
                }}
              >
                {word}
              </span>
            ))}
            <br className="hidden sm:inline" />
            {['beyond', 'the', 'dark'].map((word, i) => (
              <span
                key={word}
                className="inline-block mr-[0.3em] transition-all duration-700 ease-out"
                style={{
                  opacity: mounted ? 1 : 0.001,
                  filter: mounted ? 'blur(0px)' : 'blur(10px)',
                  transform: mounted ? 'translateY(0)' : 'translateY(28px)',
                  transitionDelay: `${450 + i * 90}ms`,
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Supporting Lead Description */}
          <p
            className="text-[16px] sm:text-[18px] text-white/60 max-w-xl mx-auto leading-[1.5] text-center font-normal transition-all duration-700 ease-out"
            style={{
              opacity: mounted ? 1 : 0.001,
              transform: mounted ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: '650ms',
            }}
          >
            An independent design studio crafting cinematic brands, products, and digital worlds for companies reaching further than before.
          </p>

          {/* Action CTA */}
          <div
            className="pt-2 transition-all duration-700 ease-out"
            style={{
              opacity: mounted ? 1 : 0.001,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '800ms',
            }}
          >
            <button
              onClick={onStartProject}
              className="px-8 py-3.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[rgb(99,142,255)] text-white text-[15px] font-medium tracking-[0.06em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.04)] hover:shadow-[0_0_30px_rgba(99,142,255,0.35)] cursor-pointer active:scale-[0.98]"
            >
              Start a project
            </button>
          </div>
        </div>

        {/* Clean minimal vertical scroll indicator */}
        <div
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center pointer-events-none z-10 transition-all duration-700 ease-out"
          style={{
            opacity: mounted ? 1 : 0.001,
            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
            transitionDelay: '950ms',
          }}
        >
          <div className="w-[1px] h-7 bg-gradient-to-b from-white/35 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 1: MANIFESTO (SCROLL LIGHT FILL & BLUE ACCENT)    */}
      {/* ========================================================= */}
      <ManifestoSection />

      {/* ========================================================= */}
      {/* SECTION 2: DEVELOPMENT KEYWORDS TICKER (LOOP ANIMATION)   */}
      {/* ========================================================= */}
      <section className="relative py-7 border-y border-white/[0.07] bg-[#0A0A0B] overflow-hidden">
        {/* Infinite Marquee Ticker with Development Keywords */}
        <div className="relative w-full overflow-hidden flex select-none">
          <div className="animate-marquee flex items-center gap-10 sm:gap-14 whitespace-nowrap text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/50">
            {[...developmentKeywords, ...developmentKeywords].map((keyword, index) => (
              <span key={index} className="flex items-center gap-10 sm:gap-14">
                <span className="hover:text-white transition-colors cursor-default">
                  {keyword}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[rgb(99,142,255)] shadow-[0_0_8px_rgb(99,142,255)]" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: SELECTED WORK (WITH 3D ENTRANCE FROM VIDEO)    */}
      {/* ========================================================= */}
      <SelectedWorkSection
        projects={PROJECTS_DATA}
        onSelectProject={onSelectProject}
        navigate={navigate}
      />

      {/* ========================================================= */}
      {/* SECTION 4: CAPABILITIES (WITH EXPANDING BLUE LINES)       */}
      {/* ========================================================= */}
      <CapabilitiesSection navigate={navigate} />

      {/* ========================================================= */}
      {/* SECTION 5: THE APPROACH (CENTERED SATURN ANIMATION)      */}
      {/* ========================================================= */}
      <ApproachScrollSaturn />

      {/* ========================================================= */}
      {/* SECTION 6: HOW WE WORK (FROM FIRST CALL TO LAUNCH)        */}
      {/* ========================================================= */}
      <section className="relative py-28 px-5 sm:px-8 lg:px-12 border-t border-white/[0.07] bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[rgb(99,142,255)] shadow-[0_0_8px_rgb(99,142,255)]" />
              <span className="text-[13px] font-medium tracking-[0.26em] uppercase text-white/60">
                How we work
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.02em]">
              From first call to launch
            </h2>
          </div>

          {/* 4 Process Cards matching Vesper exact styles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[rgb(99,142,255)]/50 rounded-[18px] p-7 flex flex-col justify-between gap-6 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <span className="text-[13px] font-mono font-semibold tracking-[0.1em] text-[rgb(99,142,255)] block">
                    {step.num}
                  </span>
                  <h3 className="text-2xl font-semibold text-white tracking-[-0.01em]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-white/60 leading-[1.6] font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: IN THEIR WORDS (RAJAN KUMAR PRASAD)            */}
      {/* ========================================================= */}
      <section className="relative py-32 px-5 sm:px-8 lg:px-12 border-t border-white/[0.07] bg-[#0A0A0B] overflow-hidden flex flex-col items-center justify-center text-center">
        
        {/* Ambient Glow */}
        <div className="absolute w-[500px] h-[300px] bg-[rgb(99,142,255)]/8 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(99,142,255)] shadow-[0_0_8px_rgb(99,142,255)]" />
            <span className="text-[13px] font-medium tracking-[0.28em] uppercase text-white/55">
              In their words
            </span>
          </div>

          {/* Authentic Testimonial Quote requested by user */}
          <blockquote className="text-2xl sm:text-4xl lg:text-[46px] font-medium tracking-[-0.015em] leading-[1.3] text-white/95 max-w-3xl">
            &ldquo;Cretify didn’t just redesign our brand — they gave it gravity. A year on, it still feels three years ahead of everyone else.&rdquo;
          </blockquote>

          {/* Author Details with Separator */}
          <div className="flex flex-col items-center gap-2 pt-2">
            <span className="w-7 h-[1px] bg-white/25 mb-3" />
            <span className="text-[17px] font-semibold text-white tracking-[-0.01em]">
              Rajan Kumar Prasad
            </span>
            <span className="text-[13px] font-medium tracking-[0.08em] uppercase text-white/45">
              Founder · Career Growth Tribe
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: CLOSING CTA (START A PROJECT WITH ROTATING SATURN) */}
      {/* ========================================================= */}
      <StartAProjectCTA onStartProject={onStartProject} />

    </div>
  );
};
