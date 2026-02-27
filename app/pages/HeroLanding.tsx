"use client";

import React from "react";
import {
  MapPin,
  Satellite,
  Layers,
  Navigation2,
  Clock,
  Map,
  Users,
  EyeOff,
  Building,
  MapPinOff,
  CheckCircle2,
  ArrowRight,
  FolderOpen,
  Speaker,
  Zap,
  Headphones,
  Accessibility,
  BedDouble,
  Utensils,
  X,
  Navigation,
  Siren,
  LocateFixed,
  Bookmark,
  ShieldCheck,
  Mic,
  User,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const HeroLanding: React.FC = () => {
  // small helper to speak card content (press-to-play audio)
  const speak = (title: string, text: string) => {
    if (typeof window === "undefined") return;
    const utter = new SpeechSynthesisUtterance(`${title}. ${text}`);
    // prefer user's language if available
    try {
      utter.lang = navigator.language || "en-US";
    } catch {
      /* ignore */
    }
    window.speechSynthesis.cancel(); // stop any previous speech
    window.speechSynthesis.speak(utter);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Header />

      {/* Main */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 px-6 lg:px-20 bg-white">
          
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
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
                  Navigate the world with confidence. Real-time accessible
                  routes, voice guidance, and obstacle alerts designed for
                  people with disabilities.
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
                            <span className="text-white font-bold text-sm">
                              LK
                            </span>
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
                          <span className="text-[10px] font-medium">
                            Location
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-1 text-slate-400">
                          <Bookmark className="w-5 h-5" />
                          <span className="text-[10px] font-medium">
                            Favorite
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-1 text-slate-400">
                          <ShieldCheck className="w-5 h-5" />
                          <span className="text-[10px] font-medium">
                            Safety
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
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

        {/* Feature grid */}
        <section className="py-20 px-6 lg:px-20 bg-background-light border-b border-slate-200">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
                Designed for Diverse Navigation Needs
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                Intuitive interfaces that map directly to your specific
                abilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card: Audio-Guidance */}
              <article
                role="button"
                tabIndex={0}
                onClick={() =>
                  speak(
                    "Audio Guidance",
                    "Hear your route with detailed environmental descriptions for visually impaired users.",
                  )
                }
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  speak(
                    "Audio Guidance",
                    "Hear your route with detailed environmental descriptions for visually impaired users.",
                  )
                }
                className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-map-card hover:shadow-map-float transition-all duration-300 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8" />
                <div className="h-40 bg-slate-50 rounded-xl mb-6 relative border border-slate-100 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.3]" />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="flex gap-1 items-end h-8">
                      <div className="w-2 bg-primary h-4 rounded-full animate-pulse" />
                      <div className="w-2 bg-primary h-8 rounded-full animate-pulse delay-75" />
                      <div className="w-2 bg-primary h-6 rounded-full animate-pulse delay-150" />
                      <div className="w-2 bg-primary h-3 rounded-full animate-pulse" />
                    </div>
                    <div className="bg-white px-3 py-1 rounded-full shadow-sm text-xs font-mono text-primary border border-primary/20">
                      Audio Guidance Active
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-main mb-2">
                  Audio Guidance
                </h3>
                <p className="text-text-muted leading-relaxed">
                  Turn-by-turn voice guidance optimized for visually impaired
                  users, with detailed environmental descriptions.
                </p>
              </article>

              {/* Card: Accessible Routing */}
              <article
                role="button"
                tabIndex={0}
                onClick={() =>
                  speak(
                    "Accessible Routing",
                    "Automatically avoid stairs and steep inclines. Prioritizes ramps and elevators.",
                  )
                }
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  speak(
                    "Accessible Routing",
                    "Automatically avoid stairs and steep inclines. Prioritizes ramps and elevators.",
                  )
                }
                className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-map-card hover:shadow-map-float transition-all duration-300 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8" />
                <div className="h-40 bg-slate-50 rounded-xl mb-6 relative border border-slate-100 overflow-hidden flex items-center justify-center">
                  <svg className="w-full h-full p-4" viewBox="0 0 100 60">
                    <path
                      d="M10 50 L 30 50 L 40 40 L 60 40 L 90 40"
                      fill="none"
                      stroke="#cbd5e1"
                      strokeDasharray="2 2"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M10 50 L 30 50 L 40 30 L 60 30 L 90 30"
                      fill="none"
                      stroke="#6750A4"
                      strokeLinecap="round"
                      strokeWidth="3"
                    ></path>
                    <circle cx="10" cy="50" fill="#6750A4" r="3"></circle>
                    <circle cx="90" cy="30" fill="#6750A4" r="3"></circle>
                    <g transform="translate(45, 15)">
                      <rect
                        fill="white"
                        height="12"
                        rx="2"
                        stroke="#e2e8f0"
                        width="30"
                      ></rect>
                      <text
                        fill="#6750A4"
                        fontSize="4"
                        fontWeight="bold"
                        x="4"
                        y="8"
                      >
                        Ramp
                      </text>
                    </g>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-main mb-2">
                  Accessible Routing
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Automatically avoid stairs and steep inclines. Prioritizes
                  ramps and elevators.
                </p>
              </article>

              {/* Card: Adaptive Interface */}
              <article
                role="button"
                tabIndex={0}
                onClick={() =>
                  speak(
                    "Adaptive Interface",
                    "High contrast modes, large typography, and color-blind friendly map themes.",
                  )
                }
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  speak(
                    "Adaptive Interface",
                    "High contrast modes, large typography, and color-blind friendly map themes.",
                  )
                }
                className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-map-card hover:shadow-map-float transition-all duration-300 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8" />
                <div className="h-40 bg-slate-50 rounded-xl mb-6 relative border border-slate-100 overflow-hidden flex items-center justify-center">
                  <div className="w-32 bg-white rounded shadow-sm border border-slate-200 p-2 space-y-2">
                    <div className="h-4 bg-slate-900 rounded w-3/4" />
                    <div className="h-4 bg-slate-900 rounded w-1/2" />
                    <div className="flex gap-2 mt-2">
                      <div className="size-8 bg-primary rounded" />
                      <div className="flex-1 h-8 bg-slate-200 rounded" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-main mb-2">
                  Adaptive Interface
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  High contrast modes, large typography, and color-blind
                  friendly map themes.
                </p>
              </article>

              {/* Card: SPACES */}
              <article
                role="button"
                tabIndex={0}
                onClick={() =>
                  speak(
                    "Spaces",
                    "Create group Spaces to plan routes, share live location, and chat with friends in a community-like group chat.",
                  )
                }
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  speak(
                    "Spaces",
                    "Create group Spaces to plan routes, share live location, and chat with friends in a community-like group chat.",
                  )
                }
                className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-map-card hover:shadow-map-float transition-all duration-300 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <div className="size-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors p-3 mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-text-main text-xl font-bold">
                    Spaces Guidance
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Group-like spaces for friends, caregivers, and community
                    members to share routes, messages, and live locations.
                  </p>
                </div>
              </article>

              {/* Card: SOS (replaces Crowd Alerts) */}
              <article
                role="button"
                tabIndex={0}
                onClick={() =>
                  speak(
                    "SOS",
                    "Instant SOS alerts and location-sharing for emergencies, with quick contact to local responders.",
                  )
                }
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  speak(
                    "SOS",
                    "Instant SOS alerts and location-sharing for emergencies, with quick contact to local responders.",
                  )
                }
                className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-map-card hover:shadow-map-float transition-all duration-300 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <div className="size-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors p-3 mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-text-main text-xl font-bold">SOS</h4>
                  <p className="text-text-muted leading-relaxed">
                    Instant SOS alerts and location-sharing for emergencies,
                    with quick contact to local responders.
                  </p>
                </div>
              </article>

              {/* Card: Messaging (replaces Haptic Feedback) */}
              <article
                role="button"
                tabIndex={0}
                onClick={() =>
                  speak(
                    "Messaging",
                    "In-app messaging for trusted contacts and community reports, with quick attachments and audio notes.",
                  )
                }
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  speak(
                    "Messaging",
                    "In-app messaging for trusted contacts and community reports, with quick attachments and audio notes.",
                  )
                }
                className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-map-card hover:shadow-map-float transition-all duration-300 relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <div className="size-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors p-3 mb-4">
                  {/* replaced missing icon with Headphones for AssistiveListening replacement in partner list; messaging card uses Speaker */}
                  <Headphones className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-text-main text-xl font-bold">
                    Messaging
                  </h4>
                  <p className="text-text-muted leading-relaxed">
                    In-app messaging for trusted contacts and community reports,
                    with quick attachments and audio notes.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CTA dark */}
        <section className="py-20 px-6 lg:px-20 bg-text-main text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
              <Map className="w-8 h-8" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
              Ready to move freely?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Join a community building a more accessible world. Download the
              app today and regain your independence.
            </p>

            <button className="inline-flex cursor-pointer items-center justify-center rounded-xl h-14 px-10 bg-primary text-white text-lg font-bold hover:bg-white hover:text-primary transition-all shadow-[0_0_20px_rgba(103,80,164,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] border border-transparent hover:border-primary">
              Download Now
            </button>

            <div className="mt-8 flex justify-center gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> iOS &amp; Android
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Free for users
              </span>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default HeroLanding;
