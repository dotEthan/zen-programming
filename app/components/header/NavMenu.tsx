"use client";

import Link from 'next/link';
import { NAV_ITEMS } from '@/app/types/navigation';

export default function NavMenu() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}