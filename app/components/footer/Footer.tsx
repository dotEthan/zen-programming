"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12" aria-label="Footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-xl font-bold text-gray-800 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Home"
            >
              Zenful Programming
            </Link>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
              aria-label="Privacy Policy"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
              aria-label="Terms of Service"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
              aria-label="Contact Us"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}