import React, { useState } from 'react';
import { HiArrowRight, HiOutlineMail, HiCheckCircle } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { LuSend, LuClock, LuShieldCheck, LuMessageSquare } from 'react-icons/lu';
import Badge from '../common/Badge';
import GlowButton from '../common/GlowButton';
import { companyData } from '../../data/company';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    serviceType: 'business-site',
    budget: 'pkr-25-35k',
    problem: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello QuantaXore team! I'm interested in discussing a project for my business.\n\nService: ${formData.serviceType}\nBudget Range: ${formData.budget}`
  );

  return (
    <section id="contact" className="relative py-24 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <Badge variant="cyan" size="md" dot={true}>
            Client Ingestion & Inquiry
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Initiate a project with <span className="text-gradient-cyan">QuantaXore</span>.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Whether you need a high-converting web presence, automated WhatsApp operations, or a bespoke system—tell us your commercial goal and let's scope it cleanly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Fast Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-emerald-950/50 via-[#071a17] to-slate-950 border border-emerald-500/30 relative overflow-hidden shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 uppercase">
                  Fastest Communication Route
                </span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FaWhatsapp className="w-5 h-5 text-emerald-400" />
                  <span>Direct WhatsApp Channel</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Skip the email backlog. Chat directly with our engineering team for instant project qualification, scope feedback, or quotes.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/923000000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_-5px_rgba(16,185,129,0.5)] transition-all"
                >
                  <FaWhatsapp className="w-4 h-4 text-slate-950" />
                  <span>Launch WhatsApp Chat</span>
                  <HiArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Email & Assurance Details */}
            <div className="glass-panel rounded-3xl p-7 border border-white/[0.08] space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Engagement Guarantees
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <LuClock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">&lt; 4-Hour Response Window</strong>
                    Inquiries are addressed swiftly during business hours.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LuShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Post-Launch Defect Warranty</strong>
                    10 to 30 days complimentary maintenance included in every agreed package.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LuMessageSquare className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Direct Founder / Lead Access</strong>
                    No junior middle-management telephone games.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Official Channel:</span>
                <a href="mailto:contact@quantaxore.com" className="text-cyan-300 hover:underline">
                  contact@quantaxore.com
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Ingestion Consultation Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/[0.08] shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto text-3xl">
                    <HiCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out to QuantaXore. We will review your project requirements and respond within 4 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-mono hover:text-white"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      PROJECT INGESTION SPECIFICATION
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400">
                      STEP 1 OF 1
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300">
                        Your Name / Business *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Malik / Apex Logistics"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300">
                        WhatsApp or Email *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="+92 300 1234567 or email"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300">
                        Target Service Vector
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="landing-page">Landing Page (Single Page)</option>
                        <option value="business-site">Business Website (Multi-Page)</option>
                        <option value="whatsapp-automation">WhatsApp Business Automation</option>
                        <option value="ai-systems">AI Knowledge Work & Agents</option>
                        <option value="custom-software">Custom Dashboard / Portal</option>
                        <option value="saas-mvp">SaaS MVP Prototyping</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase text-slate-300">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="starter-pkr-20k">Starter Presence (PKR 20,000 / $75)</option>
                        <option value="seo-pkr-25k">SEO Growth (PKR 25,000 / $95)</option>
                        <option value="pro-pkr-30k">Business Pro (PKR 30,000 / $115)</option>
                        <option value="plus-pkr-35k">Business Plus (PKR 35,000 / $135)</option>
                        <option value="custom-beyond">Custom Architecture (&gt; PKR 35,000)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-slate-300">
                      Problem Statement or Scope Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.problem}
                      onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                      placeholder="Briefly describe what your business does and what problem or outcome you are aiming for..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-slate-950 shadow-[0_0_25px_-5px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_0px_rgba(0,242,254,0.6)] hover:brightness-110 transition-all flex items-center justify-center gap-2"
                    >
                      <LuSend className="w-4 h-4" />
                      <span>Submit Project Specification</span>
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-slate-400 text-center">
                    No spam. No obligations. We review feasibility and deliver a transparent scope.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

