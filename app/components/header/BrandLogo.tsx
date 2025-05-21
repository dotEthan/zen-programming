"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function BrandLogo() {
  return (
    <div>
      <Link href="/" className="flex items-center">
      <div className="w-10 h-10 rounded-full mr-3 relative overflow-hidden">
          <Image
            src="/zen.png"
            alt="Zenful Programming Logo"
            fill
            className="object-cover dark:invert" 
          />
        </div>
        <span className="text-xl font-bold text-gray-900 dark:text-white">Zenful Programming</span>
      </Link>
    </div>
  );
} 