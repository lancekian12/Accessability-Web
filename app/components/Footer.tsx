"use client";

import React from "react";
import { MapPin, CheckCircle2 } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 lg:px-20 border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <MapPin className="w-4 h-4 text-primary" />
          <span>© 2024 AccessMap Inc.</span>
        </div>

        <div className="flex gap-6">
          <a className="text-text-muted hover:text-primary transition-colors text-sm font-medium" href="#">
            Accessibility Statement
          </a>
          <a className="text-text-muted hover:text-primary transition-colors text-sm font-medium" href="#">
            Privacy Map
          </a>
          <a className="text-text-muted hover:text-primary transition-colors text-sm font-medium" href="#">
            Contact Support
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm text-text-muted">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span>iOS & Android • Free for users</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;