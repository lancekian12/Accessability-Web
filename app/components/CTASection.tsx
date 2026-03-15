"use client";

import { Map, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-primary/90 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <div className="inline-block p-3 rounded-full bg-primary backdrop-blur-md mb-6 border border-white/20">
          <Map className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
          Ready to move freely?
        </h2>
        <p className="text-slate-50 text-lg mb-10 max-w-2xl mx-auto">
          Join a community building a more accessible world. Download the app
          today and regain your independence.
        </p>

        <button className="inline-flex cursor-pointer items-center justify-center rounded-xl h-14 px-10 bg-primary text-white text-lg font-bold hover:bg-white hover:text-primary transition-all shadow-[0_0_20px_rgba(103,80,164,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] border border-transparent hover:border-primary">
          Download Now
        </button>

        <div className="mt-8 flex justify-center gap-6 text-sm text-slate-50 font-medium">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> iOS &amp; Android
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> Free for users
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
