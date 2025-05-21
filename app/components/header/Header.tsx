"use client";

import BrandLogo from './BrandLogo';
import NavMenu from './NavMenu';
import AuthButtons from './AuthButtons';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <BrandLogo />
        <NavMenu />
        <div className="flex items-center gap-6">
          <AuthButtons />
          {/* Language dropdown placeholder */}
        </div>
      </div>
    </header>
  );
} 