"use client";

import React from "react";
import {
  MapPin,
  Satellite,
  Layers,
  Map,
  Users,
  EyeOff,
  Building,
  CheckCircle2,
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
} from "lucide-react";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnerSection";
import FeaturesSection from "./components/FeatureSection";
import CTASection from "./components/CTASection";


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

      {/* Main */}
      <main className="flex-1">
        {/* Hero section */}
        <HeroSection/>

        {/* Partners */}
        <PartnersSection/>

        {/* Feature Section */}
        <FeaturesSection speak={function (): void {
          throw new Error("Function not implemented.");
        } }/>

        <CTASection/>
      </main>
    </div>
  );
};

export default HeroLanding;
