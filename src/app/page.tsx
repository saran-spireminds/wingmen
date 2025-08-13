"use client";

import Image from "next/image";
import { motion, Variants, Transition } from "framer-motion";

// Define easing
const ease: [number, number, number, number] = [0.43, 0.13, 0.23, 0.96];

// Animation variants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease } as Transition,
  }),
};

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/wingmen_bg.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-[#212121]/50"></div>
        </div>

        {/* Hero Content */}
        <div
          className="
            relative z-10 flex flex-col justify-center h-full px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px]
            text-white text-left
            max-w-[450px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1280px] xl:max-w-[1600px] 2xl:max-w-[2000px]
          "
        >
          {/* Top Icon */}
          <motion.div
            className="mt-[16px] mb-[16px] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] 2xl:w-[200px] 2xl:h-[200px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
            className="mb-[16px] w-[300px] h-[53px] sm:w-[450px] sm:h-[80px] md:w-[600px] md:h-[106px] lg:w-[600px] lg:h-[106px] xl:w-[600px] xl:h-[106px] 2xl:w-[1000px] 2xl:h-[158px] hidden md:block"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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

          {/* Hero Text */}
          <motion.h1
            className="text-[35px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[60px] 2xl:text-[100px] font-bold uppercase"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
          >
            We&apos;ve got your back
          </motion.h1>

          <motion.p
            className="mt-[16px] text-[15px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[30px] max-w-[700px] lg:max-w-[700px] xl:max-w-[700px] 2xl:max-w-[1200px] font-light text-justify tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
          >
            We are a team of mental health volunteers who understand that by providing you with a connection, we can try and prevent your issues from escalating.
          </motion.p>

          {/* Hero Button */}
          <motion.div
            className="mt-[25px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={5}
          >
            <a
              href="tel:+441135477636"
              className="
                relative inline-block px-[24px] py-[20px] text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[26px]
                font-heading font-bold tracking-widest border border-white text-[#212121] overflow-hidden group transition-all duration-500 ease-in-out
              "
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                CALL US: +44 1135 477636
              </span>

              <span
                className="absolute inset-0 bg-[#ffffff] transition-transform duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-full"
                aria-hidden="true"
              ></span>

              <span
                className="absolute inset-0 border border-transparent transition-all duration-300 pointer-events-none group-hover:border-white"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="relative w-full h-screen bg-[#FFFEED] overflow-hidden">
        {/* Overlay Image */}
        <div className="absolute inset-0 w-full h-full z-10">
          <Image
            src="/BG_overlay.svg"
            alt="Overlay Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Section Content */}
              <div className="relative z-10 flex flex-col justify-center h-full px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px] text-[#212121] text-left max-w-[450px] sm:max-w-[720px] md:max-w-[800px] lg:max-w-[800px] xl:max-w-[800px] 2xl:max-w-[2000px]">

          {/* Section Title */}
          <motion.h2
            className="text-[35px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[60px] 2xl:text-[80px] font-bold uppercase mb-[24px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={6}
          >
            WHAT WE DO
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light text-justify leading-relaxed tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={7}
          >
            We are empathetic professionals who will listen with humility and never judge.
            <br />
            We provide a completely anonymous space to talk; our mission is as follows:
          </motion.p>

          {/* Highlighted Content */}
          <motion.p
            className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px] xl:text-[28px] 2xl:text-[30px] font-bold mb-[24px] text-[#707070] leading-normal"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={8}
          >
            “To provide a dedicated phone line where you will be listened to in complete anonymity and without judgement.”
          </motion.p>

          {/* Another Paragraph */}
          <motion.p
            className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light text-justify leading-relaxed tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={9}
          >
            We are here to listen and, where appropriate, provide a signpost to the other mental health partners with whom we work.
          </motion.p>

          {/* Read More Button */}
          <motion.div
            className=""
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            animate="visible"
            custom={10}
          >
            <a
              href="#readmore"
              className="
                relative inline-block px-[24px] py-[20px] text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[26px]
                font-heading font-bold tracking-widest uppercase border-2 border-[#212121] text-white overflow-hidden group transition-all duration-500 ease-in-out
              "
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                READ MORE
              </span>

              <span
                className="absolute inset-0 bg-[#212121] transition-transform duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-full"
                aria-hidden="true"
              ></span>

              <span
                className="absolute inset-0 border border-transparent transition-all duration-300 pointer-events-none group-hover:border-white"
              />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
