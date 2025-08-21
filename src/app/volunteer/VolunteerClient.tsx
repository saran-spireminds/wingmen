"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants, Transition } from "framer-motion";
import Modal from "@/components/modal";
import ContactClient from "../contact/ContactClient"; 

// Define easing
const ease: [number, number, number, number] = [0.43, 0.13, 0.23, 0.96];

// Animation variants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease,
    } as Transition,
  }),
};

export default function VolunteerClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-135 2xl:h-250 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/volunteer-bg.jpg"
            alt="Volunteer Background"
            fill
            priority
            className="object-cover object-[center] lg:object-[center_-200px]"
          />
          <div className="absolute inset-0 bg-[#212121]/50" />
        </div>

        {/* Hero Content */}
        <div
          className="relative z-10 flex flex-col justify-center h-full
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px]
                     xl:px-[80px] 2xl:px-[120px]
                     text-white text-left
                     max-w-[450px] sm:max-w-[720px] md:max-w-[960px]
                     lg:max-w-[1280px] xl:max-w-[1600px] 2xl:max-w-[2000px]"
        >
          {/* Top Icon */}
          <motion.div
            className="mt-[16px] mb-[16px] w-[50px] h-[50px]
                       sm:w-[50px] sm:h-[50px] md:w-[50px] md:h-[50px]
                       lg:w-[50px] lg:h-[50px] 2xl:w-[150px] 2xl:h-[150px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={1}
          >
            <Image
              src="/Wingmen Icon.svg"
              alt="Wingmen Icon"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Top Logo */}
          <motion.div
            className="mb-[16px] w-[250px] h-[40px]
                       sm:w-[250px] sm:h-[40px] md:w-[250px] md:h-[40px]
                       lg:w-[250px] lg:h-[40px] xl:w-[250px] xl:h-[40px]
                       2xl:w-[500px] 2xl:h-[80px] hidden md:block"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={2}
          >
            <Image
              src="/Wingmen.svg"
              alt="Wingmen Logo"
              width={1000}
              height={158}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* PARTNER WITH SECTION */}
      <section className="relative w-full min-h-screen bg-[#FFFEED] overflow-hidden flex flex-col lg:flex-row pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/BG_overlay.svg"
            alt="Overlay Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Left Content */}
        <div
          className="relative z-10 flex flex-col justify-center h-full 
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                     2xl:px-[120px] text-[#212121] text-left 
                     max-w-[450px] sm:max-w-[720px] md:max-w-[800px] lg:max-w-[500px] 
                     xl:max-w-[800px] 2xl:max-w-[1250px]
                     flex-1 min-h-[50vh] lg:min-h-screen mt-25"
        >
          <motion.h2
            className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[60px] 
                       2xl:text-[100px] font-extrabold antialiased leading-tight tracking-tight uppercase mb-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            VOLUNTEER WITH WINGMEN
          </motion.h2>

          <motion.p
            className="text-[15px] 2xl:text-[27px] mb-[24px] font-light leading-relaxed tracking-[0.5px] text-justify"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            Our aim is to provide a 24-hour phone line because we know that anguish does not 
            follow office hours. In order to achieve this aim, we need to expand our growing 
            team of volunteers. For a full specification of the role, please get in touch at{" "}
            <a
              href="mailto:info@wingmen.org.uk"
              className="font-semibold underline transition-colors duration-300"
            >
              info@wingmen.org.uk
            </a>. In short, we are looking for the following:
          </motion.p>

          <div className="flex flex-col justify-start text-left">
            {/* Pair 1 */}
            <div className="grid grid-cols-[25px_1fr] 2xl:grid-cols-[40px_1fr] gap-x-4 gap-y-2 ml-6 mb-2">
              <motion.div
                className="row-start-1 col-start-1"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                custom={1}
              >
                <Image
                  src="/Wingmen Icon Black.svg"
                  alt="Wingmen Logo"
                  width={25}
                  height={25}
                  className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
                />
              </motion.div>

              <motion.h4
                className="row-start-1 col-start-2 text-[#212121] uppercase text-[18px] 2xl:text-[40px] font-bold"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                custom={1}
              >
                FEELINGS OF REJECTION
              </motion.h4>

              <div className="row-start-2 col-start-1" aria-hidden />

              <motion.p
                className="row-start-2 col-start-2 text-[15px] 2xl:text-[27px] mb-[24px] font-light leading-relaxed tracking-[0.5px] text-justify"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                custom={2}
              >
                You should be an empathetic listener who can spare around 2 hours per week
              </motion.p>
            </div>

            {/* Pair 2 */}
            <div className="grid grid-cols-[25px_1fr] 2xl:grid-cols-[40px_1fr] gap-x-4 gap-y-2 ml-6 mb-2">
              <motion.div
                className="row-start-1 col-start-1"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                custom={1}
              >
                <Image
                  src="/Wingmen Icon Black.svg"
                  alt="Wingmen Logo"
                  width={25}
                  height={25}
                  className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
                />
              </motion.div>

              <motion.h4
                className="row-start-1 col-start-2 text-[#212121] uppercase text-[18px] 2xl:text-[40px] font-bold"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                custom={1}
              >
                KNOWLEDGE OR EXPERIENCE
              </motion.h4>

              <div className="row-start-2 col-start-1" aria-hidden />

              <motion.p
                className="row-start-2 col-start-2 text-[15px] 2xl:text-[27px] mb-[24px] font-light leading-relaxed tracking-[0.5px] text-justify"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                custom={2}
              >
                You do not need to have had direct or indirect experience of the problems caused by mental
                health issues, but any knowledge or experience you do have could be useful
              </motion.p>
            </div>

            {/* Pair 3 */}
            <div className="grid grid-cols-[25px_1fr] 2xl:grid-cols-[40px_1fr] gap-x-4 gap-y-2 ml-6 mb-2">
              <motion.div
                className="row-start-1 col-start-1"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                custom={1}
              >
                <Image
                  src="/Wingmen Icon Black.svg"
                  alt="Wingmen Logo"
                  width={25}
                  height={25}
                  className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
                />
              </motion.div>

              <motion.h4
                className="row-start-1 col-start-2 text-[#212121] uppercase text-[18px] 2xl:text-[40px] font-bold"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                custom={1}
              >
                SHARE OUR VALUES
              </motion.h4>

              <div className="row-start-2 col-start-1" aria-hidden />

              <motion.p
                className="row-start-2 col-start-2 text-[15px] 2xl:text-[27px] mb-[24px] font-light leading-relaxed tracking-[0.5px] text-justify"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                custom={2}
              >
                Most of all, we ask that you are joining for the right reasons, and passionately share our values
              </motion.p>
            </div>

            <motion.p
              className="row-start-2 col-start-2 text-[15px] 2xl:text-[27px] mb-[24px] font-light leading-relaxed tracking-[0.5px] text-justify"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              custom={2}
            >
              Whilst we are not a position to remunerate these positions, we will support you in what 
              you need in terms of sharing and leveraging your volunteer status.
            </motion.p>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={4}
            >
              {/* Updated button to open modal */}
            <button
              onClick={() => setIsModalOpen(true)}
                className="relative inline-block px-[24px] py-[20px] 
                           text-[15px] md:text-[18px] 2xl:text-[30px] mb-25 font-heading 
                           font-bold tracking-widest uppercase border-2 border-[#212121] 
                           text-white overflow-hidden group transition-all duration-500 ease-in-out "
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                  GET IN TOUCH
                </span>
                <span
                  className="absolute inset-0 bg-[#212121] transition-transform duration-500 
                             ease-in-out transform translate-x-0 group-hover:translate-x-full"
                  aria-hidden="true"
                />
                <span
                  className="absolute inset-0 border border-transparent transition-all duration-300 
                             pointer-events-none group-hover:border-[#212121]"
                />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Side Image */}
        <motion.div
          className="relative flex items-center justify-center 
                     w-full lg:w-1/2 py-8 lg:py-0 
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px]"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={5}
        >
          <div
            className="relative w-full max-w-[450px] sm:max-w-[720px] md:max-w-[800px] 
                       lg:max-w-[500px] xl:max-w-[800px] 2xl:max-w-[1250px] aspect-square"
          >
            <Image
              src="/volunteer-with-wingmen.jpg"
              alt="Volunteer with Wingmen Image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* CONTACT US MODAL */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <ContactClient />
            </Modal>
    </>
  );
}
