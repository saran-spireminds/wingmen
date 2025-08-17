import type { Metadata } from 'next';
import PartnersClient from './PartnersClient';

export const metadata: Metadata = {
  title: 'Partners | Wingmen Volunteers CIC',
  description:
    'Learn about Wingmen Volunteers CIC, our mission, and the people behind the service.',
};

export default function PartnersPage() {
  return <PartnersClient />;
}



