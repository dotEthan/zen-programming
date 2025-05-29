"use client";

import ThemeToggle from './ThemeToggle';

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <button className="px-4 py-2 text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
        Login
      </button>
      <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
        Sign Up
      </button>
      <ThemeToggle />
    </div>
  );
} 