import React from 'react';

export default function Badge({ 
  children, 
  variant = "cyan", 
  size = "md",
  dot = false, 
  className = "" 
}) {
  const variantStyles = {
    cyan: "bg-cyan-950/40 border-cyan-500/30 text-cyan-300 shadow-[0_0_15px_-3px_rgba(0,242,254,0.15)]",
    purple: "bg-violet-950/40 border-violet-500/30 text-violet-300 shadow-[0_0_15px_-3px_rgba(139,92,246,0.15)]",
    emerald: "bg-emerald-950/40 border-emerald-500/30 text-emerald-300 shadow-[0_0_15px_-3px_rgba(16,185,129,0.15)]",
    amber: "bg-amber-950/40 border-amber-500/30 text-amber-300 shadow-[0_0_15px_-3px_rgba(245,158,11,0.15)]",
    slate: "bg-slate-900/60 border-slate-700/40 text-slate-300"
  };

  const dotColors = {
    cyan: "bg-cyan-400",
    purple: "bg-violet-400",
    emerald: "bg-emerald-400",
    amber: "bg-amber-400",
    slate: "bg-slate-400"
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
    lg: "px-3.5 py-1.5 text-xs font-medium"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border font-mono tracking-wider uppercase transition-all duration-300 backdrop-blur-md ${variantStyles[variant] || variantStyles.cyan} ${sizeStyles[size] || sizeStyles.md} ${className}`}>
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant] || dotColors.cyan}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColors[variant] || dotColors.cyan}`}></span>
        </span>
      )}
      {children}
    </span>
  );
}

