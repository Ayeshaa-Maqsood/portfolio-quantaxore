import React, { useState } from 'react';
import { HiOutlineExternalLink, HiOutlineSparkles, HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import { LuLaptop, LuSmartphone, LuLayers, LuCpu, LuCheck } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';
import Badge from '../common/Badge';
import GlowButton from '../common/GlowButton';
import { projectsData, incubationProjects } from '../../data/projects';

export default function FeaturedProject() {
  const [previewMode, setPreviewMode] = useState('desktop'); // desktop, mobile, workflows
  const project = projectsData[0];

  return (
    <section id="work" className="relative py-24 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <Badge variant="cyan" size="md" dot={true}>
              Selected Work // Startup Portfolio
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Flagship Project <span className="text-gradient-cyan">Showcase</span>.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              As an early-stage startup, we focus on depth over vanity volume. Here is our maiden client delivery, engineered for speed, clean UX, and automated inquiry triage.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/[0.08] flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-slate-300">
              Project 01 of 01 Live • Cohort 02 Incubation Underway
            </span>
          </div>
        </div>

        {/* Main Flagship Project Feature Box */}
        <div className="glass-panel rounded-3xl border border-white/[0.1] overflow-hidden shadow-2xl mb-16">
          
          {/* Top Bar with Project Metadata and Viewport Switcher */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#0c162c] via-[#091122] to-[#0c162c] border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                  {project.category}
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                  {project.status}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Year: {project.year}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-300/80 font-mono">
                {project.isPlaceholderNote}
              </p>
            </div>

            {/* Interactive Viewport Controls */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/10 self-start md:self-center">
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  previewMode === 'desktop'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LuLaptop className="w-3.5 h-3.5" />
                <span>Desktop View</span>
              </button>

              <button
                onClick={() => setPreviewMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  previewMode === 'mobile'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LuSmartphone className="w-3.5 h-3.5" />
                <span>Mobile View</span>
              </button>

              <button
                onClick={() => setPreviewMode('workflows')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  previewMode === 'workflows'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LuLayers className="w-3.5 h-3.5" />
                <span>Architecture</span>
              </button>
            </div>
          </div>

          {/* Interactive Project Preview Stage */}
          <div className="p-6 sm:p-10 bg-[#040814]/90">
            {previewMode === 'desktop' && (
              <div className="relative rounded-2xl border border-white/10 bg-[#070e1e] shadow-2xl overflow-hidden transition-all duration-300 animate-in fade-in">
                
                {/* Browser chrome bar */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="px-4 py-1 rounded-md bg-slate-950/80 border border-white/10 text-[11px] font-mono text-slate-400 max-w-sm truncate text-center w-full mx-4">
                    {project.url}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">SSL SECURE</span>
                </div>

                {/* Simulated Web Application Display */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Mock Navbar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-400 to-rose-400 flex items-center justify-center font-bold text-slate-950 text-xs">
                        LB
                      </div>
                      <span className="font-bold text-white text-sm">Little Bloomers Early Learning</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400 font-medium">
                      <span className="text-cyan-400">Home</span>
                      <span>Programs</span>
                      <span>Admissions</span>
                      <span>Facilities</span>
                      <span>Gallery</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5">
                      <FaWhatsapp className="w-3.5 h-3.5" />
                      <span>Book Tour</span>
                    </div>
                  </div>

                  {/* Mock Hero Banner */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-2xl bg-gradient-to-r from-[#0d1830] to-[#0a1224] border border-cyan-500/20">
                    <div className="md:col-span-8 space-y-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                        NURTURING CURIOSITY & EARLY DEVELOPMENT
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white">
                        A Safe, Vibrant Environment Where Every Child Blossoms
                      </h4>
                      <p className="text-xs text-slate-300">
                        Full-day daycare, preschool learning frameworks, certified caretakers, and live parent communication portals.
                      </p>
                      <div className="flex items-center gap-3 pt-2">
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950">
                          Explore Admissions
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          9 Specialized Classrooms
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-4 grid grid-cols-2 gap-2 text-center text-xs font-mono">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                        <div className="text-cyan-400 font-bold text-base">Infant</div>
                        <div className="text-[10px] text-slate-400">6wks - 12mos</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                        <div className="text-cyan-400 font-bold text-base">Toddler</div>
                        <div className="text-[10px] text-slate-400">1 - 2.5 yrs</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                        <div className="text-cyan-400 font-bold text-base">Pre-K</div>
                        <div className="text-[10px] text-slate-400">3 - 5 yrs</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
                        <div className="text-cyan-400 font-bold text-base">After-School</div>
                        <div className="text-[10px] text-slate-400">Grade K-5</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {previewMode === 'mobile' && (
              <div className="max-w-xs mx-auto rounded-3xl border-2 border-slate-700 bg-[#070e1e] shadow-2xl overflow-hidden p-3 transition-all duration-300 animate-in fade-in">
                {/* Mobile top pill */}
                <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3" />
                
                <div className="space-y-4 text-left p-2">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="font-bold text-xs text-white">Little Bloomers</span>
                    <span className="text-[10px] font-mono text-emerald-400">MOBILE OK</span>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 space-y-1">
                    <div className="text-xs font-bold text-white">Quick Parent Booking</div>
                    <div className="text-[10px] text-slate-300">Schedule in-person facility inspection via WhatsApp.</div>
                    <div className="pt-2">
                      <span className="w-full text-center block py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-[11px]">
                        WhatsApp Admissions
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <HiCheckCircle className="w-3.5 h-3.5 text-cyan-400" /> 100% Touch-Optimized
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <HiCheckCircle className="w-3.5 h-3.5 text-cyan-400" /> Fast Image Compression
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <HiCheckCircle className="w-3.5 h-3.5 text-cyan-400" /> Instant Inquiry Handover
                    </div>
                  </div>
                </div>
              </div>
            )}

            {previewMode === 'workflows' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-300 animate-in fade-in">
                {project.features.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#091122] border border-cyan-500/20 space-y-2">
                    <div className="text-xs font-mono text-cyan-400 uppercase">
                      ARCHITECTURE 0{idx + 1}
                    </div>
                    <h5 className="font-bold text-white text-sm">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Project Outcomes & Metrics Strip */}
          <div className="p-6 sm:p-8 bg-[#091122] border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  {metric.label}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-300">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="px-6 sm:px-8 py-4 bg-slate-950/80 border-t border-white/[0.06] flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-slate-400 mr-2">TECH ARCHITECTURE:</span>
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-slate-300">
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* In Incubation / Next Cohort Teaser */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                CURRENT INTERNAL INCUBATION PIPELINE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Upcoming Products & Systems Under Active Engineering
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-400 hidden sm:inline-block">
              Derived from QuantaXore Operating System
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {incubationProjects.map((item, idx) => (
              <div
                key={item.id}
                className="glass-panel rounded-3xl p-7 border border-white/[0.08] relative overflow-hidden space-y-4 group hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-950/60 border border-indigo-500/30 text-indigo-300">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    {item.phase}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06]">
                  {item.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

