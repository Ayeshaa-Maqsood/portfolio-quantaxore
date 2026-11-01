import React from 'react';

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep dark void base */}
      <div className="absolute inset-0 bg-[#040711]" />

      {/* Cyber grid lines */}
      <div className="absolute inset-0 cyber-grid opacity-60" />

      {/* Subtle quantum dot matrix */}
      <div className="absolute inset-0 cyber-dots opacity-40" />

      {/* Ambient Gradient Orbs */}
      {/* Cyan orb top left */}
      <div className="absolute -top-[15%] -left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse-slow pointer-events-none" />

      {/* Electric Violet orb right center */}
      <div className="absolute top-[35%] -right-[15%] w-[700px] h-[700px] rounded-full bg-indigo-600/10 blur-[150px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2.5s' }} />

      {/* Deep blue orb lower bottom */}
      <div className="absolute bottom-[5%] left-[20%] w-[650px] h-[650px] rounded-full bg-cyan-600/8 blur-[160px] pointer-events-none" />

      {/* Subtle top horizontal beam */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </div>
  );
}

