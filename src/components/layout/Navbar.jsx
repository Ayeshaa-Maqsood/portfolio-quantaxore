import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { HiOutlineSparkles, HiArrowRight } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import Logo from '../common/Logo';
import Badge from '../common/Badge';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: "About & Vision", href: "#about" },
    { label: "Capabilities", href: "#services" },
    { label: "Selected Work", href: "#work" },
    { label: "Packages & Pricing", href: "#pricing" },
    { label: "Delivery Process", href: "#process" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active section spy
      const sections = ['hero', 'about', 'services', 'work', 'pricing', 'process', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-[#040711]/85 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center focus:outline-none">
            <Logo showTag={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_-3px_rgba(0,242,254,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-3">
            <Badge variant="cyan" size="sm" dot={true}>
              Cohort Open
            </Badge>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 shadow-[0_0_20px_-3px_rgba(0,242,254,0.4)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start Project</span>
              <HiArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 text-slate-950 sm:inline-flex hidden"
            >
              Contact
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#090e1c]/95 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-3 animate-in fade-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
              <Badge variant="cyan" size="sm" dot={true}>
                Early Stage Hybrid Tech Group
              </Badge>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-lg"
              >
                Launch Project With Us
              </a>
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-medium bg-emerald-950/40 border border-emerald-500/30 text-emerald-300"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

