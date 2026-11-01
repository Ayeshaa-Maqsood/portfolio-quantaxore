import React, { useState } from 'react';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import { LuGlobe, LuCpu, LuLayers, LuRocket } from 'react-icons/lu';
import Badge from '../common/Badge';
import GlowButton from '../common/GlowButton';
import { servicesCategories } from '../../data/services';

export default function ServicesMatrix() {
  const [activeTab, setActiveTab] = useState("web");

  const iconMap = {
    Globe: LuGlobe,
    Cpu: LuCpu,
    Layers: LuLayers,
    Rocket: LuRocket
  };

  const currentCategory = servicesCategories.find(cat => cat.id === activeTab) || servicesCategories[0];

  return (
    <section id="services" className="relative py-24 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <Badge variant="cyan" size="md" dot={true}>
              Service Catalog & Engineering Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Architecting solutions across <span className="text-gradient-cyan">four core vectors</span>.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Every deliverable is modular, production-ready, and scoped with meticulous detail before commencement.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <GlowButton href="#pricing" variant="outline" size="sm" icon={HiArrowRight}>
              Explore Pricing Packages
            </GlowButton>
          </div>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {servicesCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || LuGlobe;
            const isSelected = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 border ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-500/50 text-cyan-200 shadow-[0_0_20px_-3px_rgba(0,242,254,0.3)]'
                    : 'bg-slate-900/60 border-white/[0.06] text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{cat.name}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-cyan-900/50 text-cyan-300' : 'bg-slate-800 text-slate-400'
                }`}>
                  {cat.services.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Overview Strip */}
        <div className="p-6 rounded-2xl bg-[#091122]/80 border border-white/[0.08] backdrop-blur-md mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              PILLAR OVERVIEW: {currentCategory.name}
            </span>
            <p className="text-sm text-slate-200">
              {currentCategory.description}
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/20 text-cyan-300 shrink-0">
            {currentCategory.tagline}
          </span>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentCategory.services.map((service, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-interactive rounded-3xl p-7 border border-white/[0.08] relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Corner ambient glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all duration-500 pointer-events-none" />

              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 uppercase tracking-wider">
                    {service.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    MOD-0{idx + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="pt-2 space-y-2 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block pt-1">
                    Deliverable Architecture:
                  </span>
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <HiCheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action trigger footer */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Ready for Sprint Ingestion
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200 group-hover:translate-x-1 transition-all"
                >
                  <span>Request Scope</span>
                  <HiArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

