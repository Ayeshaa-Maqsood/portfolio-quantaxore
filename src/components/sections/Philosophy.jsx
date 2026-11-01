import React from 'react';
import { HiCheck, HiX, HiOutlineLightBulb, HiOutlineSparkles } from 'react-icons/hi';
import { LuCompass, LuCpu, LuRocket, LuFlame, LuShieldCheck } from 'react-icons/lu';
import Badge from '../common/Badge';
import { companyData } from '../../data/company';

export default function Philosophy() {
  const comparisons = [
    {
      typical: "Push rigid cookie-cutter templates with bloated plugins",
      quantaxore: "Clean, bespoke component architectures built in modern React"
    },
    {
      typical: "Build whatever looks flashy without analyzing customer conversion",
      quantaxore: "Diagnose commercial bottleneck first; select technical service second"
    },
    {
      typical: "Disappear upon launch or charge high retainers for minor fixes",
      quantaxore: "Complimentary 10 to 30 days post-launch maintenance included"
    },
    {
      typical: "Treat websites as isolated brochures with manual inbox checks",
      quantaxore: "Direct WhatsApp business integration, CRM pipelines & AI triage"
    }
  ];

  return (
    <section id="about" className="relative py-24 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="cyan" size="md" dot={true}>
            Company Philosophy & Positioning
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            We don't build websites for the sake of building websites.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            As outlined in our operating manifesto: <span className="text-cyan-300 font-medium">QuantaXore is not primarily a website-development company.</span> Web development is one execution vector inside a broader technology architecture.
          </p>
        </div>

        {/* 2-Column: The Thesis & The Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left: The QuantaXore Core Rule */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-8 border border-cyan-500/20 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                <LuCompass className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  The Fundamental Rule
                </span>
                <h3 className="text-2xl font-bold text-white leading-snug">
                  "Diagnose the business problem first; select the technical service second."
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need customer lead generation, an automated WhatsApp triage funnel, an internal business dashboard, or an MVP web app—our role is to solve the operational friction with the leanest, most durable software possible.
              </p>
            </div>

            <div className="pt-8 border-t border-white/[0.08] mt-6 grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-extrabold text-white">100%</div>
                <div className="text-xs font-mono text-slate-400">Problem-Led Scope</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-cyan-400">0%</div>
                <div className="text-xs font-mono text-slate-400">Vanity Fluff</div>
              </div>
            </div>
          </div>

          {/* Right: The Contrast Table */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-white/[0.08] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                THE QUANTAXORE DIFFERENCE
              </span>
              <span className="text-xs font-mono text-cyan-400">
                ENGINEERING VS TYPICAL AGENCIES
              </span>
            </div>

            <div className="space-y-4">
              {comparisons.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-900/40 border border-white/[0.04]">
                  
                  {/* Typical Agency */}
                  <div className="flex items-start gap-2.5 text-xs text-slate-400">
                    <span className="p-1 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-400 mt-0.5 shrink-0">
                      <HiX className="w-3 h-3" />
                    </span>
                    <span className="leading-relaxed line-through decoration-slate-600">
                      {item.typical}
                    </span>
                  </div>

                  {/* QuantaXore */}
                  <div className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                    <span className="p-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 mt-0.5 shrink-0">
                      <HiCheck className="w-3.5 h-3.5" />
                    </span>
                    <span className="leading-relaxed text-cyan-100">
                      {item.quantaxore}
                    </span>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Future Vision & Hybrid Group Evolution */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-slate-950 via-[#0a1224] to-slate-950 border border-white/[0.08] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-2">
              <Badge variant="purple" size="sm" dot={true}>
                Strategic Expansion Vector
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Evolution into a Hybrid Group of Companies
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400 max-w-sm">
              Current client service delivery provides the foundational capital and engineering discipline for future frontier horizons.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
            {companyData.vision.futureRoadmap.map((item, idx) => {
              const isActive = item.status === "Active Now";

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-slate-900/60 border-cyan-500/30 shadow-[0_0_20px_-5px_rgba(0,242,254,0.1)]' 
                      : 'bg-slate-950/40 border-white/[0.05] opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      0{idx + 1}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase ${
                      isActive 
                        ? 'bg-emerald-950/60 border-emerald-500/30 text-emerald-300' 
                        : 'bg-purple-950/40 border-purple-500/20 text-purple-300'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1.5">
                    {item.domain}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

