import React from 'react';

export default function GlowButton({ 
  children, 
  variant = "primary", 
  size = "md", 
  href, 
  onClick, 
  icon: Icon,
  iconPosition = "right",
  className = "",
  disabled = false
}) {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl overflow-hidden group select-none disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-slate-950 font-semibold shadow-[0_0_25px_-5px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_0px_rgba(0,242,254,0.6)] hover:brightness-110",
    secondary: "bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/60 hover:border-cyan-500/50 shadow-sm backdrop-blur-md hover:text-white",
    ghost: "bg-transparent text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/20",
    outline: "bg-transparent border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 shadow-[0_0_15px_-3px_rgba(0,242,254,0.15)]"
  };

  const content = (
    <>
      {/* Light sheen effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
      
      {Icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {typeof Icon === 'function' ? <Icon className="w-4 h-4" /> : Icon}
        </span>
      )}
      
      <span>{children}</span>

      {Icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {typeof Icon === 'function' ? <Icon className="w-4 h-4" /> : Icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        onClick={onClick}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {content}
    </button>
  );
}

