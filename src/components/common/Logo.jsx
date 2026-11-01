import React from 'react';

export default function Logo({ size = "default", showTag = false, className = "" }) {
  const isLarge = size === "lg";
  const isSmall = size === "sm";

  // Height sizing for the official logo lockup
  const imgHeightClass = isLarge 
    ? 'h-14 sm:h-16' 
    : isSmall 
    ? 'h-8 sm:h-9' 
    : 'h-11 sm:h-12';

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Official QuantaXore Logo with ambient backdrop glow */}
      <div className="relative flex items-center justify-center">
        {/* Ambient hover glow matching the electric blue & cyan in the logo */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
        
        {/* Logo Image with mix-blend-screen for seamless black blend */}
        <img
          src="/logos/quantaxore-logo.jpg"
          alt="QuantaXore Official Logo"
          className={`relative z-10 ${imgHeightClass} w-auto object-contain mix-blend-screen filter drop-shadow-[0_0_12px_rgba(0,242,254,0.35)] group-hover:scale-105 transition-transform duration-300`}
          loading="eager"
        />
      </div>

      {/* Sub-label and active cohort indicator */}
      <div className="hidden sm:flex flex-col justify-center">
        <span className="text-[10px] font-mono tracking-widest text-cyan-400/90 uppercase font-semibold flex items-center gap-1.5">
          <span>HYBRID TECH GROUP</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
        </span>
        <span className="text-[10px] font-mono text-slate-400">
          Digital • AI • Automation • SaaS
        </span>
      </div>

      {showTag && (
        <span className="hidden xl:inline-flex items-center text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 ml-1">
          Official Brand
        </span>
      )}
    </div>
  );
}
