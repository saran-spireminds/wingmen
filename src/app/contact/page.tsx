import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact Us | Wingmen',
  description: 'Reach out to Wingmen Volunteers CIC via our contact form.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <ContactClient />
      </div>
    </div>
  );
}
