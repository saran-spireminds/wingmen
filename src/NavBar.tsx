'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // adjust threshold
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hamburger Button (always visible) */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className={`fixed top-5 left-6 w-14 h-14 flex items-center justify-center rounded-full 
                    transition-all duration-300 ease-out cursor-pointer group z-50`}
      >
        {/* White circle background */}
        <span
          className={`absolute -inset-3 rounded-full bg-white transition-all duration-300 ease-out
                      ${isScrolled
                        ? 'opacity-100 scale-110 shadow-lg' // bigger circle + shadow after scroll
                        : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-110 group-hover:shadow-lg'}`}
        />

        {/* Hamburger Icon */}
        <svg
          className={`w-8 h-8 relative z-10 transition-transform duration-300
                      ${isScrolled
                        ? 'stroke-black group-hover:scale-110'
                        : 'stroke-white group-hover:stroke-black group-hover:scale-110'}`}
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Top Navbar & Logo (only visible when not scrolled) */}
      {!isScrolled && (
        <div
          className="fixed top-5 left-0 w-full z-40 flex items-center justify-center px-6 py-4"
        >
          <Image
            src="/Wingmen Logo.svg"
            alt="Wingmen Logo"
            width={200}
            height={26}
            priority
            className="filter invert"
          />
        </div>
      )}

      {/* SLIDE-IN / SLIDE-OUT MENU */}
      <div
        className={`fixed inset-0 bg-[#212121] text-white flex flex-col items-start justify-start px-12 pt-24 gap-6 z-[9999]
                    ${isMenuOpen
                      ? 'translate-y-0 transition-transform duration-[400ms]'
                      : '-translate-y-full transition-transform duration-[400ms]'}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 w-16 h-16 flex items-center justify-center 
                     rounded-full bg-white text-black text-5xl font-light 
                     shadow-lg shadow-black/20 cursor-pointer 
                     transition-all duration-300 ease-out
                     hover:scale-110 hover:shadow-2xl hover:shadow-black/60"
        >
          &times;
        </button>

        {/* Menu Links */}
        {[
          { href: '/', label: 'Home' },
          { href: '/who-we-are', label: 'Who We Are' },
          { href: '/how-we-help', label: 'How We Help' },
          { href: '/fundraising', label: 'Fundraising' },
          { href: '/our-patrons', label: 'Our Patrons' },
          { href: '/partners', label: 'Partners' },
          { href: '/volunteer', label: 'Volunteer' },
          { href: '/resources', label: 'Resources' },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[20px] md:text-[40px] font-extrabold uppercase tracking-wide hover:underline"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
