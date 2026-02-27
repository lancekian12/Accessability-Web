"use client";

import {
  Satellite,
  Map,
  Zap,
  Accessibility,
  BedDouble,
  Utensils,
  X,
  Navigation,
  Layers,
  CheckCircle2,
  Siren,
  LocateFixed,
  MapPin,
  Bookmark,
  ShieldCheck,
  Mic,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 px-6 lg:px-20 bg-white">
<div
  className="absolute inset-x-0 top-0 bottom-[-200px] pointer-events-none opacity-30"
  style={{
    backgroundImage: `
      linear-gradient(to right, #e5e7eb 1px, transparent 1px),
      linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  }}
/>

      {/* Gradient Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-6 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light/30 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit">
              <Satellite className="w-4 h-4" />
              Precision Mapping
            </div>

            <h1 className="text-text-main text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              Navigation for{" "}
              <span className="relative inline-block text-primary">
                Everyone
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 100 10"
                >
                  <path d="M0 5 Q 50 10 100 5 L 100 8 Q 50 13 0 8 Z"></path>
                </svg>
              </span>
            </h1>

            <h2 className="text-text-muted text-lg lg:text-xl font-normal leading-relaxed max-w-lg border-l-4 border-primary/20 pl-4">
              Navigate the world with confidence. Real-time accessible routes,
              voice guidance, and obstacle alerts designed for people with
              disabilities.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-all shadow-map-float hover:-translate-y-1">
                <span className="mr-2">
                  <Map className="w-5 h-5" />
                </span>
                Download on iOS
              </button>

              <button className="flex cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white text-text-main border border-slate-200 text-base font-bold hover:bg-slate-50 transition-all hover:border-slate-300 shadow-map-card">
                <span className="mr-2">
                  <Zap className="w-5 h-5" />
                </span>
                Get for Android
              </button>
            </div>
          </div>

          {/* Right column: REPLACED mockup + background lines (from your design) */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative perspective-1000">
            <div className="relative w-full max-w-[270px] lg:max-w-[320px] aspect-9/19 rounded-[2.5rem] bg-white border-[8px] border-slate-800 shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 ease-out z-20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-800 rounded-b-xl z-30" />

              <div className="w-full h-full bg-slate-50 overflow-hidden relative flex flex-col">
                {/* CATEGORY BUTTONS */}
                <div className="absolute top-8 left-0 right-0 z-20 px-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    <button className="bg-white rounded-full px-4 py-2 shadow-sm border border-slate-200 flex items-center gap-2 whitespace-nowrap">
                      <Accessibility className="w-5 h-5 text-primary" />
                      <span className="text-slate-800 font-bold text-sm">
                        PWD
                      </span>
                    </button>

                    <button className="bg-white rounded-full px-4 py-2 shadow-sm border border-slate-200 flex items-center gap-2 whitespace-nowrap">
                      <BedDouble className="w-5 h-5 text-primary" />
                      <span className="text-slate-800 font-bold text-sm">
                        Hotel
                      </span>
                    </button>

                    <button className="bg-primary rounded-full px-4 py-2 shadow-sm flex items-center gap-2 whitespace-nowrap">
                      <Utensils className="w-5 h-5 text-white" />
                      <span className="text-white font-bold text-sm">
                        Restaurant
                      </span>
                    </button>
                  </div>
                </div>

                <div className="relative w-full h-full bg-[#f0f4f8] overflow-hidden">
                  {/* Map SVG routes */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 200"
                  >
                    <rect fill="#f1f5f9" height="200" width="100" />
                    <path
                      d="M-10 60 L 110 30"
                      fill="none"
                      stroke="white"
                      strokeWidth="8"
                    />
                    <path
                      d="M-10 120 L 110 80"
                      fill="none"
                      stroke="white"
                      strokeWidth="6"
                    />
                    <path
                      d="M30 0 L 70 200"
                      fill="none"
                      stroke="white"
                      strokeWidth="8"
                    />
                    <path
                      d="M80 0 L 20 200"
                      fill="none"
                      stroke="white"
                      strokeWidth="4"
                    />
                    <path
                      d="M10 60 L 60 46 L 80 140"
                      fill="none"
                      stroke="#22c55e"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M10 60 L 60 46 L 80 140"
                      fill="none"
                      stroke="rgba(34, 197, 94, 0.3)"
                      strokeWidth="6"
                    />
                    <circle cx={10} cy={60} r={2.5} fill="#22c55e" />
                  </svg>

                  {/* Floating restaurant info (centered icon + avatar) */}
                  {/* Restaurant info box (keeps original position) */}
                  <div className="absolute top-[210px]  left-[70%] -translate-x-1/2 z-10">
                    <div className="bg-white px-3 py-1.5 rounded shadow-lg border border-slate-200 max-w-[140px] text-center">
                      <div className="text-[8px] font-bold text-slate-800 leading-tight">
                        Cholly&apos;s Grill and Seafood Restaurant
                      </div>
                      <div className="text-[6px] text-slate-500">
                        Tap to show route
                      </div>
                    </div>
                  </div>

                  {/* Centered restaurant icon (independent position) */}
                  <div className="absolute top-[270px] left-[70%] -translate-x-1/2 z-20">
                    <div className="relative flex items-center justify-center">
                      <div className="size-10 bg-pink-500 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white z-10">
                        <Utensils className="w-5 h-5" />
                      </div>
                      <div className="size-17 bg-primary/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>

                  {/* Avatar below the restaurant icon (independent position) */}
                  <div className="absolute top-[180px] left-[10%] -translate-x-1/2 z-10">
                    <div className="relative flex items-center justify-center">
                      <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white shadow-md flex items-center justify-center z-10">
                        <span className="text-white font-bold text-sm">LK</span>
                      </div>
                      <div className="w-16 h-16 bg-primary/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                </div>

                {/* FLOATING ACTION BUTTONS */}
                <div className="absolute top-20 right-3 flex flex-col gap-3 z-10">
                  <button className="size-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-700">
                    <X className="w-5 h-5" />
                  </button>

                  <button className="size-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-700">
                    <Navigation className="w-5 h-5" />
                  </button>

                  <button className="size-10 bg-white rounded-full shadow-md flex items-center justify-center text-green-600">
                    <Accessibility className="w-5 h-5" />
                  </button>
                </div>

                {/* BOTTOM SHEET */}
                <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2rem] shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-30 pb-4">
                  <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto mt-3 mb-2" />

                  <div className="px-5 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Accessibility className="w-5 h-5 text-green-600" />
                      <h3 className="text-green-600 font-bold text-base">
                        Wheelchair-friendly route
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="animate-spin h-3 w-3 border-2 border-primary border-t-transparent rounded-full" />
                      <span className="text-slate-500 text-sm">
                        Calculating...
                      </span>
                    </div>

                    <div className="flex justify-between items-end">
                      <p className="text-slate-800 font-medium text-sm">
                        Distance remaining: 0.4 km
                      </p>

                      <button className="size-10 bg-white rounded-full border border-slate-100 shadow-md flex items-center justify-center text-primary">
                        <Layers className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                      <button className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm whitespace-nowrap">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-slate-700 font-bold text-xs">
                          Check-in
                        </span>
                      </button>

                      <button className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm whitespace-nowrap">
                        <Siren className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-primary font-bold text-xs">
                          SOS
                        </span>
                      </button>

                      <button className="size-10 ml-auto bg-white rounded-full border border-slate-100 shadow-md flex items-center justify-center text-primary">
                        <LocateFixed className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* CHAT INPUT */}
                  <div className="px-4 pb-6">
                    <div className="bg-slate-100 rounded-full px-4 py-3 flex items-center gap-3">
                      <div className="size-8 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                        M
                      </div>
                      <span className="text-slate-500 text-sm flex-1">
                        Say Hi to Melody
                      </span>
                      <Mic className="w-5 h-5 text-slate-500" />
                    </div>
                  </div>

                  {/* BOTTOM NAV */}
                  <div className="flex justify-between px-8 border-t border-slate-100 pt-3 bg-white">
                    <div className="flex flex-col items-center gap-1 text-primary">
                      <MapPin className="w-5 h-5" />
                      <span className="text-[10px] font-medium">Location</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 text-slate-400">
                      <Bookmark className="w-5 h-5" />
                      <span className="text-[10px] font-medium">Favorite</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 text-slate-400">
                      <ShieldCheck className="w-5 h-5" />
                      <span className="text-[10px] font-medium">Safety</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
