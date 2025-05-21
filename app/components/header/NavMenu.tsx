"use client";

import { NAV_ITEMS } from '@/app/types/navigation';
import NavItem from './NavItem';

export default function NavMenu() {
  return (
    <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.label} item={item} />
      ))}
    </nav>
  );
}