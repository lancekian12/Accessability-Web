"use client";

import React from "react";
import { Users, Zap, Headphones } from "lucide-react";

interface Props {
  speak: (title: string, text: string) => void;
}

const FeaturesSection: React.FC<Props> = ({ speak }) => {
  return (
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
  );
};

export default FeaturesSection;