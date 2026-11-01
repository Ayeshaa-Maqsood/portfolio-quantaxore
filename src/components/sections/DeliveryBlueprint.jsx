import React, { useState } from 'react';
import { HiCheck, HiArrowRight } from 'react-icons/hi';
import { LuSearch, LuFileCheck, LuCode, LuCheckCheck, LuRocket, LuHeartHandshake } from 'react-icons/lu';
import Badge from '../common/Badge';
import { deliverySteps } from '../../data/deliveryProcess';

export default function DeliveryBlueprint() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    LuSearch,
    LuFileCheck,
    LuCode,
    LuCheckCheck,
    LuRocket,
    LuHeartHandshake
  ];

  return (
    <section id="process" className="relative py-24 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <Badge variant="cyan" size="md" dot={true}>
            Operating Framework // Section 6
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The 6-Stage Delivery Blueprint.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            A disciplined, repeatable process designed to eliminate guesswork, communicate transparently, and launch on schedule.
          </p>
        </div>

        {/* Stepper Navigation Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {deliverySteps.map((item, idx) => {
            const Icon = stepIcons[idx] || LuCode2;
            const isSelected = activeStep === idx;

            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'bg-cyan-950/50 border-cyan-400 text-white shadow-[0_0_20px_-3px_rgba(0,242,254,0.25)]'
                    : 'glass-panel border-white/[0.06] text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-300' : 'text-slate-500'}`}>
                    {item.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`} />
                </div>
                <div className="text-xs sm:text-sm font-bold truncate">
                  {item.name}
                </div>
                <div className="text-[10px] font-mono text-slate-400 truncate mt-0.5">
                  {item.phase}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Deep Dive Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 uppercase">
                  Stage {deliverySteps[activeStep].step} of 06
                </span>
                <span className="text-xs font-mono text-slate-400">
                  // {deliverySteps[activeStep].tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                {deliverySteps[activeStep].name}: <span className="text-gradient-cyan">{deliverySteps[activeStep].phase}</span>
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {deliverySteps[activeStep].description}
              </p>

              {/* Key Deliverables in this stage */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase text-slate-400 block">
                  Mandatory Stage Verification:
                </span>
                {deliverySteps[activeStep].keyActions.map((action, aIdx) => (
                  <div key={aIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <span className="p-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                      <HiCheck className="w-3.5 h-3.5" />
                    </span>
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Telemetry Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs font-mono text-slate-400">
                <span>STAGE_VALIDATION</span>
                <span className="text-cyan-400">STRICT PROTOCOL</span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Client Review Gate:</span>
                  <span className="font-semibold text-emerald-400">Explicit Approval</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Commercial Rule:</span>
                  <span className="font-semibold text-cyan-300">Zero Undocumented Scope</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Handover Protocol:</span>
                  <span className="font-semibold text-white">Full Source & Credentials</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => setActiveStep((activeStep - 1 + 6) % 6)}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-xs text-slate-300 hover:text-white"
                >
                  &larr; Prev Stage
                </button>
                <button
                  onClick={() => setActiveStep((activeStep + 1) % 6)}
                  className="px-4 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold hover:brightness-110 flex items-center gap-1"
                >
                  <span>Next Stage</span>
                  <HiArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
