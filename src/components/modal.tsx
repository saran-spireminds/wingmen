'use client';

import { ReactNode, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

// Type-safe variants
const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeInOut' }, // Use string easing
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#212121]/70"
      onClick={onClose}
    >
      {/* Modal container with motion */}
      <motion.div
        className="relative w-full max-w-5xl 2xl:max-w-[1250px] max-h-[90vh] mx-4 sm:mx-6 md:mx-8 overflow-hidden rounded-lg"
        onClick={(e) => e.stopPropagation()}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/contact-us.jpg"
            alt="Contact Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          {/* Overlay behind the form */}
          <div className="absolute inset-0 bg-[#212121] opacity-70"></div>
        </div>

        {/* Modal content */}
        <div className="relative p-6 overflow-y-auto max-h-[90vh]">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white text-5xl font-light hover:text-gray-300 z-20"
          >
            &times;
          </button>

          {children}
        </div>
      </motion.div>
    </div>
  );
}
