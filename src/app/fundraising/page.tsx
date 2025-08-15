import type { Metadata } from 'next';
import FundraisingClient from './FundraisingClient';

export const metadata: Metadata = {
  title: 'How We Help | Wingmen Volunteers CIC',
  description:
    'Learn about Wingmen Volunteers CIC, our mission, and the people behind the service.',
};

export default function FundraisingPage() {
  return <FundraisingClient />;
}



