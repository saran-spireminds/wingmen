import './globals.css';
import Image from 'next/image'

export const metadata = {
  title: 'Wingmen Volunteers CIC',
  description: 'A team of mental health volunteers offering connection and support.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-800 bg-transparent">

        {/* TOP NAVIGATION */}
       <div className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4">
  {/* Hamburger Menu */}
  <button className="text-[#0061AC] focus:outline-none animate-zoom-in">
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="white"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

          {/* Centered Logo */}
<div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50 text-white font-bold text-xl tracking-wide animate-zoom-in">
  <Image
    src="/Wingmen Logo.svg"
  alt="Wingmen Logo"
    width={200}
    height={25.6}
    priority
    className="filter invert" // makes dark SVG white
  />
</div>
        </div>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
          WINGMEN © COPYRIGHT 2023 ALL RIGHTS RESERVED.
        </footer>
      </body>
    </html>
  );
}