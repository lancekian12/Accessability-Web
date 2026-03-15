"use client";

import React from "react";
import Image from "next/image";
import { Satellite, Navigation2 } from "lucide-react";

const Header: React.FC = () => {
  const apkUrl =
    "https://github.com/Montilla007/3Y2AAPWD/releases/latest/download/app-release.apk";

  // Utility to trigger download/navigation
  const triggerDownload = (url: string, suggestedFilename?: string) => {
    try {
      const a = document.createElement("a");
      a.href = url;
      if (suggestedFilename) {
        a.setAttribute("download", suggestedFilename);
      }
      a.setAttribute("rel", "noopener noreferrer");
      a.style.display = "none";
      document.body.appendChild(a);

      const evt = new MouseEvent("click");
      a.dispatchEvent(evt);

      document.body.removeChild(a);
    } catch (e) {
      window.location.href = url;
    }
  };

  const handleStartRoute = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    triggerDownload(apkUrl, "app-release.apk");
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-6 py-4 lg:px-20 bg-white/90 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3 text-text-main">
        <div className="size-10 rounded-full flex items-center justify-center text-primary relative">
          <span className="absolute w-full h-full rounded-full bg-primary/20 map-marker-pulse" />
          <Image
            src="/accessabilitylogo.png"
            alt="Accessibility Logo"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-text-main text-lg font-bold tracking-tight leading-none">
            Accessibility
          </h2>
          <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-primary tracking-widest mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>GPS Active</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={handleStartRoute}
          className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg transition-all border-b-2 border-primary/50 active:border-b-0 active:translate-y-[2px]"
        >
          <span className="truncate">Start Route</span>
        </button>

        <div className="hidden sm:flex items-center gap-2">
          <Satellite className="w-5 h-5 text-primary" />
          <Navigation2 className="w-5 h-5 text-text-muted" />
        </div>
      </div>
    </header>
  );
};

export default Header;