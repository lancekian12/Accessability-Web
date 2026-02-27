"use client";

import { Users, Headphones, EyeOff, Building } from "lucide-react";

const PartnersSection = () => {
  return (
    <section className="border-y border-slate-100 bg-white py-10 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.2] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
        <p className="mb-6 text-xs font-bold uppercase tracking-widest text-text-muted">
          Connected Network &amp; Partners
        </p>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-70">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-700 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
            <Users className="w-5 h-5 text-primary" /> InclusiveCity
          </div>

          <div className="flex items-center gap-2 text-lg font-bold text-slate-700 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
            <Headphones className="w-5 h-5 text-primary" /> MobilityFirst
          </div>

          <div className="flex items-center gap-2 text-lg font-bold text-slate-700 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
            <EyeOff className="w-5 h-5 text-primary" /> VisionTech
          </div>

          <div className="flex items-center gap-2 text-lg font-bold text-slate-700 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
            <Building className="w-5 h-5 text-primary" /> CityTransit
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
