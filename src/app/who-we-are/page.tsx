import type { Metadata } from 'next';
import WhoWeAreClient from './WhoWeAreClient';


export const metadata: Metadata = {
  title: 'Who We Are | Wingmen Volunteers CIC',
  description:
    'Learn about Wingmen Volunteers CIC, our mission, and the people behind the service.',
};

export default function WhoWeArePage() {
  return <WhoWeAreClient />;
}
