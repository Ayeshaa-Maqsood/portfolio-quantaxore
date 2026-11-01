import React, { useState } from 'react';
import { HiCheck, HiOutlineSparkles, HiInformationCircle, HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { LuCalculator, LuShieldCheck, LuLayers } from 'react-icons/lu';
import Badge from '../common/Badge';
import GlowButton from '../common/GlowButton';
import { pricingPackages, customAddons, termsAndConditions } from '../../data/packages';

export default function PackagesPricing() {
  const [currency, setCurrency] = useState('PKR'); // PKR or USD
  const [selectedPackage, setSelectedPackage] = useState('seo-growth');
  const [selectedAddons, setSelectedAddons] = useState(['whatsapp-bot']);
  const [activeTab, setActiveTab] = useState('packages'); // 'packages' or 'calculator'

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculate customized total
  const currentPkg = pricingPackages.find(p => p.id === selectedPackage) || pricingPackages[1];
  const pkgBasePrice = currency === 'PKR' ? parseInt(currentPkg.pricePKR.replace(',', '')) : parseInt(currentPkg.priceUSD);
  
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = customAddons.find(a => a.id === addonId);
    if (!item) return sum;
    return sum + (currency === 'PKR' ? item.pkr : item.usd);
  }, 0);

  const grandTotal = pkgBasePrice + addonsTotal;

  return (
    <section id="pricing" className="relative py-24 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <Badge variant="cyan" size="md" dot={true}>
              Transparent Packages & Pricing
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Honest, clearly defined tiers. <br />
              <span className="text-gradient-cyan">Zero hidden surcharges.</span>
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Every package builds directly upon the last. Complimentary post-launch maintenance included with every deployment.
            </p>
          </div>

          {/* Currency Toggle Switcher */}
          <div className="flex items-center gap-3 self-start md:self-auto p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-md">
            <span className="text-xs font-mono text-slate-400 pl-2">Currency:</span>
            <button
              onClick={() => setCurrency('PKR')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                currency === 'PKR'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              PKR (Rs)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* View Switcher: Standard Packages vs Interactive Calculator */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/80 border border-white/[0.08] backdrop-blur-md">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'packages'
                  ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-[0_0_15px_-3px_rgba(0,242,254,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Four Core Packages
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === 'calculator'
                  ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 shadow-[0_0_15px_-3px_rgba(0,242,254,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LuCalculator className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive Scope Estimator</span>
            </button>
          </div>
        </div>

        {/* TAB 1: 4 Core Pricing Cards */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-in fade-in">
            {pricingPackages.map((pkg) => {
              const isPopular = pkg.popular;
              const priceDisplay = currency === 'PKR' ? `PKR ${pkg.pricePKR}` : `$${pkg.priceUSD}`;

              return (
                <div
                  key={pkg.id}
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                    isPopular
                      ? 'bg-gradient-to-b from-[#0f1d38] via-[#091122] to-[#070c18] border-2 border-cyan-400/60 shadow-[0_0_35px_-5px_rgba(0,242,254,0.25)] scale-[1.02] z-10'
                      : 'glass-panel border border-white/[0.08] hover:border-cyan-500/30'
                  }`}
                >
                  {/* Popular Floating Tag */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 font-extrabold text-[10px] tracking-widest uppercase shadow-md flex items-center gap-1">
                      <HiOutlineSparkles className="w-3 h-3" />
                      <span>RECOMMENDED</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        {pkg.badge}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {pkg.name}
                      </h3>
                    </div>

                    {/* Price Block */}
                    <div className="pt-2 pb-3 border-b border-white/[0.08]">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-white">
                          {priceDisplay}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                        Scope: {pkg.pages}
                      </span>
                    </div>

                    {/* Maintenance Tag from PDF */}
                    <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center gap-2">
                      <LuShieldCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                      <span className="text-xs text-cyan-200 font-mono font-medium">
                        {pkg.maintenanceDays} Days Free Maintenance
                      </span>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">
                        Included in Scope:
                      </span>
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <HiCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 mt-6 border-t border-white/[0.08]">
                    <a
                      href={`#contact?package=${pkg.id}`}
                      className={`w-full py-2.5 rounded-xl text-xs font-bold text-center block transition-all ${
                        isPopular
                          ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-lg hover:brightness-110'
                          : 'bg-slate-800 hover:bg-slate-700 text-white'
                      }`}
                    >
                      Select {pkg.name}
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: Interactive Custom Scope Calculator */}
        {activeTab === 'calculator' && (
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/30 mb-16 max-w-4xl mx-auto shadow-2xl animate-in fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  INTERACTIVE ESTIMATOR
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Tailor Your Custom Solution Architecture
                </h3>
              </div>
              <div className="text-xs font-mono text-slate-400">
                Transparent instant calculation
              </div>
            </div>

            {/* Step 1: Base Package */}
            <div className="py-6 border-b border-white/[0.08] space-y-3">
              <label className="text-xs font-mono uppercase text-slate-400 block">
                1. Select Foundation Tier:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {pricingPackages.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPackage(p.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedPackage === p.id
                        ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-md'
                        : 'bg-slate-900/40 border-white/[0.06] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold truncate">{p.name}</div>
                    <div className="text-[11px] font-mono text-cyan-300 mt-1">
                      {currency === 'PKR' ? `PKR ${p.pricePKR}` : `$${p.priceUSD}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Advanced Capabilities / Add-ons */}
            <div className="py-6 border-b border-white/[0.08] space-y-3">
              <label className="text-xs font-mono uppercase text-slate-400 block">
                2. Select Advanced Integrations & Custom Features:
              </label>
              <div className="space-y-2.5">
                {customAddons.map(addon => {
                  const isChecked = selectedAddons.includes(addon.id);
                  const priceStr = currency === 'PKR' ? `+PKR ${addon.pkr.toLocaleString()}` : `+$${addon.usd}`;

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                        isChecked
                          ? 'bg-cyan-950/40 border-cyan-500/50 text-white'
                          : 'bg-slate-900/30 border-white/[0.05] text-slate-400 hover:bg-slate-900/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                          isChecked ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-600 bg-slate-900'
                        }`}>
                          {isChecked && <HiCheck className="w-4 h-4 font-bold" />}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-200">
                            {addon.name}
                          </div>
                          <div className="text-xs text-slate-400">
                            {addon.desc}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-cyan-300 font-bold shrink-0">
                        {priceStr}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Total Calculation & CTA */}
            <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 uppercase">
                  Estimated Total Scope Investment:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan-300">
                  {currency === 'PKR' ? `PKR ${grandTotal.toLocaleString()}` : `$${grandTotal}`}
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Includes {currentPkg.maintenanceDays} days complimentary maintenance & testing
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-[0_0_25px_-5px_rgba(0,242,254,0.5)] hover:brightness-110 transition-all"
              >
                <span>Lock In This Configuration</span>
                <HiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* General Terms & Conditions Accordion from PDF Page 3 */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/70 border border-white/[0.08] max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <HiInformationCircle className="w-5 h-5 text-cyan-400" />
            <h4 className="text-sm font-mono uppercase tracking-wider text-white font-semibold">
              General Terms & Assurance Guidelines (from QuantaXore Operating Catalog)
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs text-slate-400">
            {termsAndConditions.map((term, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono">0{idx + 1}.</span>
                <span className="leading-relaxed">{term}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
