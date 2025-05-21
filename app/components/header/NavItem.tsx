import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import type { KeyboardEvent } from 'react';
import { NavItemProp } from '@/app/types/navigation';

export default function NavItem({ item }: { item: NavItemProp }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | KeyboardEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) ||
        (event instanceof KeyboardEvent && event.key === 'Escape')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleClickOutside as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleClickOutside as EventListener);
    };
  }, []);

  // Toggle dropdown on Enter/Space
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  if (item.subItems) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          aria-haspopup="true"
          aria-expanded={isOpen}
          className="flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          {item.label}
          <span aria-hidden="true">{isOpen ? '▲' : '▼'}</span>
        </button>
        {isOpen && (
          <div
            className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10"
            role="menu"
          >
            {item.subItems.map((subItem) => (
              <Link
                key={subItem.path}
                href={subItem.path}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                role="menuitem"
                tabIndex={0}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.path!}
      className="text-gray-800 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
      aria-current={typeof window !== 'undefined' && window.location.pathname === item.path ? 'page' : undefined}
    >
      {item.label}
    </Link>
  );
}