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
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease,
    } as Transition,
  }),
};

export default function HowWeHelpClient() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-135 2xl:h-250 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/how-we-help.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center md:object-top"
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

      {/* HOW WE HELP SECTION */}
<section className="relative w-full bg-[#FFFEED] overflow-hidden">
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
  <div
    className="relative z-10 flex mt-[70px] mb-[70px] flex-col justify-center h-full 
               px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
               2xl:px-[120px] text-[#212121] text-left"
  >
    {/* Section Title */}
    <motion.h2
      className="text-[28px] md:text-[36px] xl:text-[60px] 2xl:text-[100px] font-extrabold antialiased tracking-tight uppercase mb-6"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={1}
    >
      HOW WE HELP
    </motion.h2>

    {/* Values - First Row */}
    <div className="flex flex-col md:flex-row gap-[50px] md:gap-20 items-start">
      {/* LEFT COLUMN - Main Paragraphs */}
      <div className="flex flex-col md:w-[48.8%]">
        <motion.p
          className="text-[15px] sm:text-[15px] md:text-[15px]
                     lg:text-[15px] xl:text-[15px] 2xl:text-[27px]
                     mb-[24px] font-light text-justify
                     leading-relaxed tracking-[0.5px]"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={2}
        >
          Wingmen understand the importance of providing a connection so that you 
          can be listened to without judgement.
        </motion.p>

        <motion.p
          className="text-[15px] sm:text-[15px] md:text-[15px]
                     lg:text-[15px] xl:text-[15px] 2xl:text-[27px]
                     mb-[24px] font-light text-justify
                     leading-relaxed tracking-[0.5px]"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={3}
        >
          We provide a dedicated, anonymous phone line that has one of our experienced volunteers 
          on the other end. Put simply, we will listen to what it is that is troubling you. We’re 
          here to help you get it off your chest.
        </motion.p>

        <motion.p
          className="text-[15px] sm:text-[15px] md:text-[15px]
                     lg:text-[15px] xl:text-[15px] 2xl:text-[27px]
                     mb-[24px] font-light text-justify
                     leading-relaxed tracking-[0.5px]"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={4}
        >
          We are not here to offer advice, but we collaborate with a number of organisations that 
          we may signpost you to, in order to make sure you are not left without an option.
        </motion.p>

        <motion.p
          className="text-[15px] sm:text-[15px] md:text-[15px]
                     lg:text-[15px] xl:text-[15px] 2xl:text-[27px]
                     mb-[24px] font-light text-justify
                     leading-relaxed tracking-[0.5px]"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={5}
        >
          Whether you want to talk about personal or professional worries, it doesn’t matter. Our 
          volunteers have the personal and professional experience to listen actively to what you 
          have to say, and act accordingly.
        </motion.p>

        <motion.h3
          className="text-[20px] md:text-[25px] xl:text-[35px] 
                     2xl:text-[50px] font-extrabold antialiased tracking-normal 
                     leading-tight uppercase text-left"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={6}
        >
          SOME THINGS THAT YOU MAY RECOGNISE AS BEING SYMPTOMS OF AN ISSUE ARE AS FOLLOWS &gt;&gt;
        </motion.h3>
      </div>

      {/* RIGHT COLUMN - Paragraph + Logo and Title */}
      <div className="flex flex-col justify-start md:w-[41.2%] text-left">

        {/* Multiple Logo + Title Lines */}
<div className="flex flex-col gap-2 ml-6 mb-8">
  <div className="flex items-center gap-4">
    <Image
      src="/Wingmen Icon Black.svg"
      alt="Wingmen Logo"
      width={25}
      height={25}
      className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
    />
    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
      Social Anxiety
    </h4>
  </div>

  <div className="flex items-center gap-4">
    <Image
      src="/Wingmen Icon Black.svg"
      alt="Wingmen Logo"
      width={25}
      height={25}
      className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
    />
    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
      Anger or Frustration
    </h4>
  </div>

  <div className="flex items-center gap-4">
    <Image
      src="/Wingmen Icon Black.svg"
      alt="Wingmen Logo"
      width={25}
      height={25}
      className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
    />
    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
      Feelings of Rejection
    </h4>
  </div>

  <div className="flex items-center gap-4">
    <Image
      src="/Wingmen Icon Black.svg"
      alt="Wingmen Logo"
      width={25}
      height={25}
      className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
    />
    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
      Feelings of Remorse or Guilt
    </h4>
  </div>

  <div className="flex items-center gap-4">
    <Image
      src="/Wingmen Icon Black.svg"
      alt="Wingmen Logo"
      width={25}
      height={25}
      className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
    />
    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
      Low Self-Esteem
    </h4>
  </div>

  <div className="flex items-center gap-4">
    <Image
      src="/Wingmen Icon Black.svg"
      alt="Wingmen Logo"
      width={25}
      height={25}
      className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
    />
    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
      Low Motivation
    </h4>
  </div>

  <div className="flex items-center gap-4">
    <Image
      src="/Wingmen Icon Black.svg"
      alt="Wingmen Logo"
      width={25}
      height={25}
      className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
    />
    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
      Trouble Sleeping
    </h4>
  </div>

  <div className="flex items-center gap-4">
    <Image
      src="/Wingmen Icon Black.svg"
      alt="Wingmen Logo"
      width={25}
      height={25}
      className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
    />
    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
      Low Mood and Depression
    </h4>
  </div>

  <div className="flex items-center gap-4">
    <Image
      src="/Wingmen Icon Black.svg"
      alt="Wingmen Logo"
      width={25}
      height={25}
      className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
    />
    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
      Loneliness
    </h4>
  </div>
</div>


        {/* Paragraph */}
        <motion.p
          className="text-[15px] sm:text-[15px] md:text-[15px]
                     lg:text-[15px] xl:text-[15px] 2xl:text-[27px]
                     mb-[24px] font-light text-justify leading-relaxed tracking-[0.5px]"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={7}
        >
          If any of these sound familiar, we would invite you to get in touch. Even if these don’t sound familiar, but you have the feeling that something isn’t right, then also please give us a call.
        </motion.p>

      </div>
    </div>
  </div>
</section>

    </>
  );
}
