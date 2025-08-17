import type { Metadata } from 'next';
import OurPatronsClient from './OurPatronsClient';

export const metadata: Metadata = {
  title: 'Our Patrons | Wingmen Volunteers CIC',
  description:
    'Learn about Wingmen Volunteers CIC, our mission, and the people behind the service.',
};

export default function OurPatronsPage() {
  return <OurPatronsClient />;
}



