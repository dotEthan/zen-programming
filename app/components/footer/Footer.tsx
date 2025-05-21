"use client";

import Link from 'next/link';
import { NAV_ITEMS } from '@/app/types/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left - Branding */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-indigo-600 mr-3"></div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Zenful Programming
            </span>
          </div>
        </div>

        {/* Right - Links */}
        <nav className="grid grid-cols-2 gap-x-8 gap-y-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}