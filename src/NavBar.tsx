'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactClient from '@/app/contact/ContactClient';
import Modal from '@/components/modal';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reusable class for floating buttons (hamburger & contact)
  const floatingButtonClass = `fixed w-14 h-14 flex items-center justify-center rounded-full
    transition-all duration-300 ease-out cursor-pointer group z-50`;

  const floatingCircleClass = (active: boolean) =>
    `absolute -inset-3 rounded-full bg-white transition-all duration-300 ease-out ${
      active
        ? 'opacity-100 scale-110 shadow-lg'
        : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-110 group-hover:shadow-lg'
    }`;

    const [isHover, setIsHover] = useState(false);

  return (
    <>
      <button
  onClick={() => setIsContactOpen(true)}
  className={`${floatingButtonClass} top-5 right-6`}
  onMouseEnter={() => setIsHover(true)}
  onMouseLeave={() => setIsHover(false)}
>
  <span className={floatingCircleClass(isScrolled)} />
  <EnvelopeIcon
    className={`w-8 h-8 relative z-10 transition-transform duration-300`}
    style={{
      stroke: isScrolled || isHover ? '#212121' : '#FFFFFF', // stroke logic
      transform: isHover ? 'scale(1.1)' : 'scale(1)',       // hover expansion
    }}
  />
</button>

      {/* Contact Modal */}
      <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)}>
        <ContactClient />
      </Modal>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className={`${floatingButtonClass} top-5 left-6`}
      >
        <span className={floatingCircleClass(isScrolled)} />
        <svg
          className={`w-8 h-8 relative z-10 transition-transform duration-300 ${
            isScrolled ? 'stroke-black group-hover:scale-110' : 'stroke-white group-hover:stroke-black group-hover:scale-110'
          }`}
          fill="none"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Logo */}
      {!isScrolled && (
        <div className="fixed top-5 left-0 w-full z-40 flex items-center justify-center px-6 py-4">
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

      {/* Slide-in Menu */}
<div
  className={`fixed inset-0 bg-[#292929] text-white 
              flex flex-col items-start justify-start 
              pl-30 pt-30 px-8 py-12 gap-4 z-[9999]
              ${isMenuOpen ? 'translate-y-0 transition-transform duration-[400ms]' : '-translate-y-full transition-transform duration-[400ms]'}`}
>
  <button
    onClick={() => setIsMenuOpen(false)}
    className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center 
               rounded-full bg-white text-black text-3xl font-light 
               shadow-lg shadow-black/20 cursor-pointer 
               transition-all duration-300 ease-out
               hover:scale-110 hover:shadow-2xl hover:shadow-black/60"
  >
    &times;
  </button>

  {/* 👇 Wrap links in a group */}
  <div className="flex flex-col gap-4 group">
    {[
      { href: '/', label: 'Home' },
      { href: '/who-we-are', label: 'Who We Are' },
      { href: '/how-we-help', label: 'How We Help' },
      { href: '/fundraising', label: 'Fundraising' },
      { href: '/our-patrons', label: 'Our Patrons' },
      { href: '/partners', label: 'Partners' },
      { href: '/volunteer', label: 'Volunteer' },
      { href: '/resources', label: 'Resources' },
      { href: '/resources', label: 'Resources di' },
    ].map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]
                   font-bold uppercase tracking-wide
                   transition-all duration-300
                   group-hover:opacity-30 hover:!opacity-100 hover:scale-110"
        onClick={() => setIsMenuOpen(false)}
      >
        {item.label}
      </Link>
    ))}
  </div>
</div>





    </>
  );
}
