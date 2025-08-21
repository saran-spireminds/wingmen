import './globals.css';
import NavBar from '@/NavBar';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Wingmen Volunteers CIC',
  description: 'A team of mental health volunteers offering connection and support.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="font-sans text-gray-800 bg-transparent">
        <NavBar /> {/* Client component */}
        <main>{children}</main>
        <footer className="bg-gray-100 text-center py-6 text-sm text-gray-500">
          WINGMEN © COPYRIGHT 2023 ALL RIGHTS RESERVED.
        </footer>
        <SpeedInsights /> {/* Vercel Speed Insights */}
      </body>
    </html>
  );
}
