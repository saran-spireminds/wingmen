import type { Metadata } from 'next';
import ResourcesClient from './ResourcesClient';

export const metadata: Metadata = {
  title: 'Resources | Wingmen Volunteers CIC',
  description:
    'Learn about Wingmen Volunteers CIC, our mission, and the people behind the service.',
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
