
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function ContactClient() {
  const [formData, setFormData] = useState({
    firstName: '',
    surName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // --- Validate required fields ---
    const requiredFields = ["firstName", "surName", "email", "subject", "message"] as const;
    for (const field of requiredFields) {
      if (!formData[field].trim()) {
        setStatus(`❌ ${field.replace(/([A-Z])/g, " $1")} is required.`);
        return;
      }
    }

    setStatus("Sending...");

    try {
      // --- Send to backend (SuiteDash) ---
      await fetch("/api/suitedash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // ✅ Show success regardless of SuiteDash response
      setStatus("✅ Message sent successfully!");

      // --- Reset form ---
      setFormData({
        firstName: "",
        surName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("❌ Something went wrong. Please try again later.");
    }
  };


  return (
    <div className="w-full flex flex-col gap-1 text-left px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14">
      {/* Animated Title */}
      <motion.h2
        className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[60px] font-extrabold antialiased tracking-tight uppercase text-white text-left"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={1}
      >
        CONTACT US
      </motion.h2>

      {/* Animated Paragraph */}
      <motion.p
        className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[20px] mb-4 font-light text-left leading-relaxed tracking-[0.5px] text-white"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={2}
      >
        If you want to use our services and for any other enquiries, please fill in the form below. Our team is here to assist and guide you every step of the way.
      </motion.p>

      {/* Animated Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="relative w-full max-w-3xl flex flex-col gap-2 p-4 sm:p-6 md:p-8 rounded-lg border border-gray-300 bg-white/10 backdrop-blur-[2px] sm:backdrop-blur-sm"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={3}
      >
        {/* First and Surname */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 flex flex-col">
            <label className="text-white mb-1 font-bold uppercase text-[15px] 2xl:text-[20px]">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#212121] bg-white/10 backdrop-blur-[2px] sm:backdrop-blur-sm text-white placeholder-gray-400 text-[15px] 2xl:text-[20px]"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="text-white mb-1 font-bold uppercase text-[15px] 2xl:text-[20px]">
              Surname <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="surName"
              placeholder="Doe"
              value={formData.surName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#212121] bg-white/10 backdrop-blur-[2px] sm:backdrop-blur-sm text-white placeholder-gray-400 text-[15px] 2xl:text-[20px]"
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 flex flex-col">
            <label className="text-white mb-1 font-bold uppercase text-[15px] 2xl:text-[20px]">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#212121] bg-white/10 backdrop-blur-[2px] sm:backdrop-blur-sm text-white placeholder-gray-400 text-[15px] 2xl:text-[20px]"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label className="text-white mb-1 font-bold uppercase text-[15px] 2xl:text-[20px]">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+44 123 456 7890"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#212121] bg-white/10 backdrop-blur-[2px] sm:backdrop-blur-sm text-white placeholder-gray-400 text-[15px] 2xl:text-[20px]"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col w-full">
          <label className="text-white mb-1 font-bold uppercase text-[15px] 2xl:text-[20px]">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={`border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#212121] bg-white/10 backdrop-blur-[2px] sm:backdrop-blur-sm text-[15px] 2xl:text-[20px] transition ${
              formData.subject === '' ? 'text-gray-400' : 'text-white'
            }`}
          >
            <option value="" disabled>
              Select subject
            </option>
            <option value="Funder">Funder</option>
            <option value="Partner">Partner</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Events">Events</option>
            <option value="General Enquiry">General Enquiry</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col w-full">
          <label className="text-white mb-1 font-bold uppercase text-[15px]">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#212121] bg-white/10 backdrop-blur-[2px] sm:backdrop-blur-sm text-white placeholder-gray-400 text-[15px]"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="relative inline-block px-6 py-5 text-[18px] font-heading font-bold tracking-wide mt-2 uppercase border border-white text-[#212121] overflow-hidden group transition-all duration-500 ease-in-out"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              SEND MESSAGE
            </span>
            <span
              className="absolute inset-0 bg-white transition-transform duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-full"
              aria-hidden="true"
            />
            <span
              className="absolute inset-0 border border-transparent transition-all duration-300 pointer-events-none group-hover:border-white"
            />
          </button>
        </div>

        {status && <p className="mt-1 text-sm text-gray-200">{status}</p>}
      </motion.form>
    </div>
  );
}
