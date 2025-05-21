"use client";

export default function NavMenu() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
        Tutorials
      </a>
      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
        Blog
      </a>
      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
        Courses
      </a>
      <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
        About
      </a>
    </nav>
  );
} 