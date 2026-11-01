import React, { useState } from 'react';
import { HiArrowRight, HiOutlineSparkles, HiCheckCircle } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { LuTerminal, LuCpu, LuGlobe, LuLayers, LuRocket } from 'react-icons/lu';
import Badge from '../common/Badge';
import GlowButton from '../common/GlowButton';
import { companyData } from '../../data/company';

export default function Hero() {
  const [activeNode, setActiveNode] = useState(0);

  const telemetryNodes = [
    {
      id: "web",
      title: "Web & Digital Systems",
      icon: LuGlobe,
      metric: "Sub-Second Load",
      desc: "Fast, responsive conversion architectures & custom portals.",
      color: "from-cyan-500 to-sky-400"
    },
    {
      id: "ai",
      title: "AI & Automation",
      icon: LuCpu,
      metric: "24/7 Autonomy",
      desc: "WhatsApp pipelines, LLM knowledge agents & data scraping.",
      color: "from-sky-400 to-indigo-500"
    },
    {
      id: "systems",
      title: "Custom Software",
      icon: LuLayers,
      metric: "Purpose-Built",
      desc: "Admin command dashboards & bespoke client operations.",
      color: "from-indigo-500 to-violet-500"
    },
    {
      id: "saas",
      title: "SaaS Prototyping",
      icon: LuRocket,
      metric: "Sprint MVP",
      desc: "Working browser apps with accounts, logic & cloud infrastructure.",
      color: "from-violet-500 to-cyan-400"
    }
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Terminal Status Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-white/[0.08] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="text-[11px] font-mono tracking-wider text-slate-300 uppercase">
              QUANTAXORE // EARLY-STAGE STARTUP COLLECTIVE
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="text-slate-600">/</span>
            <span>HYBRID GROUP: DIGITAL • AI • AUTOMATION • SAAS</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Digital work, <br />
              <span className="text-gradient-cyan relative">
                considered.
                {/* Underline glow accent */}
                <span className="absolute left-0 -bottom-1.5 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-sky-500 to-transparent rounded-full opacity-70"></span>
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              We diagnose commercial bottlenecks first, then engineer high-conversion web architectures, intelligent AI automation pipelines, and custom software. 
              <span className="text-cyan-300 font-medium"> Zero template bloat. Surgical engineering.</span>
            </p>

            {/* Core Value Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] backdrop-blur-sm">
                <div className="text-xs font-mono text-slate-400">Philosophy</div>
                <div className="text-sm font-semibold text-slate-100 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Problem-First
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] backdrop-blur-sm">
                <div className="text-xs font-mono text-slate-400">Pricing Packages</div>
                <div className="text-sm font-semibold text-slate-100 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  From PKR 20k
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="text-xs font-mono text-slate-400">Post-Launch Care</div>
                <div className="text-sm font-semibold text-slate-100 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  10-30 Days Free
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <GlowButton href="#pricing" variant="primary" size="lg" icon={HiArrowRight}>
                View Transparent Packages
              </GlowButton>

              <GlowButton href="#work" variant="secondary" size="lg">
                Explore Selected Project
              </GlowButton>

              <a
                href="https://wa.me/923000000000?text=Hello%20QuantaXore%20team,%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/40 hover:text-emerald-200 transition-all duration-200 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                <span>Quick WhatsApp</span>
              </a>
            </div>

            {/* Micro reassurance notes */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1 text-slate-300">
                <HiCheckCircle className="w-4 h-4 text-cyan-400" /> Transparent Scopes
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <HiCheckCircle className="w-4 h-4 text-cyan-400" /> Direct Engineer Access
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <HiCheckCircle className="w-4 h-4 text-cyan-400" /> Handover Guarantee
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Quantum Core Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md w-full">
              
              {/* Outer decorative glow disc */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-indigo-600/20 rounded-3xl blur-2xl transform scale-95" />

              {/* Main Futuristic Console Box */}
              <div className="relative glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl overflow-hidden">
                
                {/* Console header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80 animate-pulse" />
                    <span className="text-xs font-mono tracking-wider text-slate-300 font-semibold uppercase">
                      QUANTA_CORE // ENGINE_v1.0
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    LIVE TELEMETRY
                  </span>
                </div>

                {/* Central Quantum Node Visualizer */}
                <div className="relative py-8 flex items-center justify-center">
                  
                  {/* Rotating orbital rings */}
                  <div className="absolute w-56 h-56 rounded-full border border-dashed border-cyan-500/20 animate-spin-slow" />
                  <div className="absolute w-44 h-44 rounded-full border border-cyan-500/30 animate-pulse-slow" />
                  <div className="absolute w-32 h-32 rounded-full border border-indigo-500/30" />

                  {/* Core Glowing Orb */}
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 p-[1.5px] shadow-[0_0_40px_rgba(0,242,254,0.45)]">
                    <div className="w-full h-full rounded-2xl bg-[#040814] flex flex-col items-center justify-center p-1 text-center overflow-hidden">
                      <img 
                        src="/logos/quantaxore-logo.jpg" 
                        alt="QuantaXore Emblem" 
                        className="w-full h-full object-contain mix-blend-screen filter drop-shadow-[0_0_10px_rgba(0,242,254,0.5)]"
                      />
                    </div>
                  </div>

                  {/* Orbiting Satellite badges */}
                  <div className="absolute -top-1 left-2">
                    <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-[#0b1426] border border-cyan-500/30 text-cyan-300 shadow-md">
                      AI_AGENTS: ACTIVE
                    </span>
                  </div>

                  <div className="absolute -bottom-1 right-2">
                    <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-[#0b1426] border border-indigo-500/30 text-indigo-300 shadow-md">
                      REACT_19: READY
                    </span>
                  </div>
                </div>

                {/* Interactive Capability Switcher */}
                <div className="space-y-2.5 mt-2">
                  <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>SELECT CAPABILITY NODE:</span>
                    <span className="text-cyan-400">Node {activeNode + 1} of 4</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {telemetryNodes.map((node, idx) => {
                      const Icon = node.icon;
                      const isSelected = activeNode === idx;

                      return (
                        <button
                          key={node.id}
                          onClick={() => setActiveNode(idx)}
                          className={`p-2.5 rounded-xl text-left transition-all duration-200 border ${
                            isSelected
                              ? 'bg-cyan-950/40 border-cyan-500/60 shadow-[0_0_15px_-3px_rgba(0,242,254,0.2)]'
                              : 'bg-slate-900/40 border-white/[0.05] hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-1.5">
                            <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`} />
                            <span className={`text-xs font-medium truncate ${isSelected ? 'text-cyan-200 font-semibold' : 'text-slate-300'}`}>
                              {node.title}
                            </span>
                          </div>
                          <div className="text-[10px] font-mono text-cyan-400/90 mt-1">
                            {node.metric}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active node detail snippet */}
                  <div className="p-3 rounded-xl bg-[#091122] border border-cyan-500/20 text-xs text-slate-300 flex items-start gap-2.5">
                    <div className="p-1 rounded bg-cyan-500/10 text-cyan-300 mt-0.5">
                      <LuTerminal className="w-3.5 h-3.5" />
                    </div>
                    <div className="space-y-0.5 flex-1">
                      <div className="font-semibold text-white text-xs">
                        {telemetryNodes[activeNode].title}
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {telemetryNodes[activeNode].desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom console metadata */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>DISPATCH: GLOBAL</span>
                  <span className="text-emerald-400">READY FOR DEPLOYMENT</span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

