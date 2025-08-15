'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* TOP NAVIGATION */}
      <div className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4">
        <button
          className="text-[#0061AC] focus:outline-none animate-zoom-in"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-8 h-8" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Centered Logo */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
          <Image
            src="/Wingmen Logo.svg"
            alt="Wingmen Logo"
            width={200}
            height={26}
            priority
            className="filter invert"
          />
        </div>
      </div>

      {/* SMOOTH SLIDE-IN / SLIDE-OUT MENU */}
      <div
        className={`fixed inset-0 bg-[#0061AC] text-white flex flex-col items-center justify-center gap-8 z-[999]
        transform transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.175,1)]
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl"
        >
          &times;
        </button>

        {/* Menu Links */}
        <Link href="/" className="text-2xl hover:underline" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link href="/who-we-are" className="text-2xl hover:underline" onClick={() => setIsMenuOpen(false)}>
          Who We Are
        </Link>
        <Link href="/how-we-help" className="text-2xl hover:underline" onClick={() => setIsMenuOpen(false)}>
          How We Help
        </Link>
        <Link href="/fundraising" className="text-2xl hover:underline" onClick={() => setIsMenuOpen(false)}>
          Fundraising
        </Link>
      </div>
    </>
  );
}
