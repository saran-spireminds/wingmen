import type { Metadata } from 'next';
import VolunteerClient from './VolunteerClient';

export const metadata: Metadata = {
  title: 'Volunteer | Wingmen Volunteers CIC',
  description:
    'Learn about Wingmen Volunteers CIC, our mission, and the people behind the service.',
};

export default function VolunteerPage() {
  return <VolunteerClient />;
}



