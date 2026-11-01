import React from 'react';
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiOutlineMail, HiArrowUp } from 'react-icons/hi';
import Logo from '../common/Logo';
import Badge from '../common/Badge';
import { companyData } from '../../data/company';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050b] border-t border-white/[0.08] overflow-hidden pt-16 pb-12">
      {/* Top ambient glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" showTag={true} />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {companyData.subheadline}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <Badge variant="cyan" size="sm" dot={true}>
                {companyData.status.label}
              </Badge>
              <span className="text-xs font-mono text-slate-500">•</span>
              <span className="text-xs font-mono text-slate-400">{companyData.status.speed}</span>
            </div>
          </div>

          {/* Core Vectors */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Landing Page Engineering</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Multi-Page Business Portals</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">WhatsApp & AI Automation</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Admin Dashboards & Systems</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">SaaS MVP Prototyping</a></li>
            </ul>
          </div>

          {/* Packages & Framework */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-4">
              Engagement & Pricing
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#pricing" className="hover:text-cyan-300 transition-colors">Starter Presence (PKR 20,000)</a></li>
              <li><a href="#pricing" className="hover:text-cyan-300 transition-colors">SEO Growth Package</a></li>
              <li><a href="#pricing" className="hover:text-cyan-300 transition-colors">Business Pro Package</a></li>
              <li><a href="#pricing" className="hover:text-cyan-300 transition-colors">Business Plus Suite</a></li>
              <li><a href="#process" className="hover:text-cyan-300 transition-colors">6-Stage Delivery Blueprint</a></li>
            </ul>
          </div>

          {/* Quick Contact & Channels */}
          <div>
            <h4 className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-4">
              Direct Channels
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="hover:text-emerald-300 transition-colors">
                  WhatsApp Direct Inquiry
                </a>
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineMail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:contact@quantaxore.com" className="hover:text-cyan-300 transition-colors">
                  contact@quantaxore.com
                </a>
              </li>
              <li className="text-xs text-slate-500 pt-1 font-mono">
                Location: Global Remote / Pakistan
              </li>
            </ul>
          </div>
        </div>

        {/* Future Vision Notice from Catalog PDF */}
        <div className="py-6 border-b border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="max-w-3xl">
            <span className="font-mono text-cyan-300 font-semibold uppercase mr-2">[Future Expansion]:</span>
            QuantaXore is designed to evolve into a hybrid technology collective. Long-term research horizons include autonomous AI research, robotics systems, advanced engineering, and aerospace computational architectures.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-xs font-mono"
          >
            <span>Top</span>
            <HiArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} QuantaXore • Hybrid Group of Companies. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Digital work, considered.</span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

