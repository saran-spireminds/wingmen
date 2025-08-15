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

export default function WhoWeAreClient() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-135 2xl:h-250 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/who-we-are.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center lg:object-[center_-150px] xl:object-[center_-300px]"
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

      {/* WHO WE ARE SECTION */}
      <section className="relative w-full md:h-screen bg-[#FFFEED] md:overflow-hidden">
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
          className="relative z-10 flex flex-col justify-center md:h-full
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px]
                     xl:px-[80px] 2xl:px-[120px]
                     text-[#212121] text-left
                     max-w-[450px] sm:max-w-[720px] md:max-w-[800px]
                     lg:max-w-[800px] xl:max-w-[800px] 2xl:max-w-[1250px]"
        >
          {/* Section Title */}
          <motion.h2
            className="mt-[25px] text-[28px] sm:text-[28px] md:text-[36px]
                       lg:text-[36px] xl:text-[60px] 2xl:text-[100px]
                       font-extrabold antialiased tracking-tight uppercase mb-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={1}
          >
            WHO WE ARE
          </motion.h2>

          {/* Paragraphs */}
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
            Wingmen provides a dedicated phone line where you will be listened to in
            complete anonymity and without judgement.
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
            custom={2}
          >
            Wingmen comprises a group of men who, for various reasons, have
            experienced the anguish of life’s darker moments. We have suffered
            or we have been exposed to the suffering of those close to us, and
            we want to make a difference.
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
            Our experience has taught us that suffering in silence can be
            soul-destroying. We believe that making a connection with another
            person is the first step towards finding a resolution and that simply
            connecting can prevent an issue from becoming a crisis.
          </motion.p>

          {/* Our Values Button */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={5}
          >
            <a
              href="#readmore"
              className="relative inline-block px-[24px] py-[20px]
                         text-[15px] sm:text-[15px] md:text-[18px]
                         lg:text-[18px] xl:text-[18px] 2xl:text-[30px]
                         mb-[24px] font-heading font-bold tracking-widest
                         uppercase border-2 border-[#212121] text-white
                         overflow-hidden group transition-all duration-500 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                OUR VALUES
              </span>
              <span
                className="absolute inset-0 bg-[#212121]
                           transition-transform duration-500 ease-in-out
                           transform translate-x-0 group-hover:translate-x-full"
                aria-hidden="true"
              />
              <span
                className="absolute inset-0 border border-transparent
                           transition-all duration-300 pointer-events-none
                           group-hover:border-[#212121]"
              />
            </a>
          </motion.div>
        </div>
      </section>
      
        {/* OUR VALUES SECTION */}
        <section className="relative w-full bg-[#212121] overflow-hidden">
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
                2xl:px-[120px] text-white text-left"
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
                    OUR VALUES
                </motion.h2>
            
                {/* Paragraph */}
                <motion.p
                    className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                                xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                                text-justify leading-relaxed tracking-[0.5px] 
                                max-w-[450px] sm:max-w-[600px] md:max-w-[800px] 
                                lg:max-w-[800px] xl:max-w-[600px] 2xl:max-w-[1000px]"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    custom={2}
                >
                    At Wingmen, our values drive us in what we do. Our values inform our behaviours 
                    and decision-making. We believe that by having values, we can be accountable to 
                    ourselves, our service users and all other partners. It’s as simple as that.
                </motion.p>
                
                <motion.p
                    className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                                xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                                text-justify leading-relaxed tracking-[0.5px] 
                                max-w-[450px] sm:max-w-[600px] md:max-w-[800px] 
                                lg:max-w-[800px] xl:max-w-[600px] 2xl:max-w-[1000px]"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    custom={3}
                >
                    Our values also help us work with the very best{" "}
                    <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline hover:text-white-600 transition-colors duration-300"
                    >
                        partners
                    </a>
                    . This is why, before embarking on any partnership, we will always aim to ensure that
                    our values resonate with that partner.
                </motion.p>
            
                {/* Dotted Line */}
                <motion.div
                    className="mt-4 w-full max-w-[1200px] 2xl:max-w-[2200px] h-[2px]"
                    style={{
                        backgroundImage:
                        "repeating-linear-gradient(to right, white 0px, white 4px, transparent 4px, transparent 20px)",
                    }}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    custom={1}
                />
            
                {/* Values - First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-20 items-center max-w-[1200px] 2xl:max-w-[2200px] mt-[50px]">
                    {/* Left */}
                    <motion.div
                        className="flex flex-col justify-start items-start"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        custom={2}
                    >
                        <h3 className="text-[28px] md:text-[36px] xl:text-[50px] 2xl:text-[100px] font-extrabold antialiased tracking-normal leading-tight uppercase mb-6">
                            WINGMEN IS COMMITTED TO FIVE VALUES &gt;&gt;
                        </h3>
                    </motion.div>
                    
                    {/* Right */}
                    <motion.div
                        className="flex flex-col items-start text-left"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        custom={3}
                    >
                        <Image
                            src="/icons/Inclusivity.png"
                            alt="Inclusivity Icon"
                            width={60}
                            height={60}
                            className="mb-4"
                        />
                        <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">INCLUSIVITY</h4>
                        <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-justify max-w-[600px] 2xl:max-w-[2000px]">
                            In an attempt to make our service as wide-reaching as possible, we will not discriminate.
                            All callers are welcome, regardless of religious denomination, race, ethnicity, sexual orientation,
                            political viewpoint or age. Whilst we will not tolerate abusive language or discriminatory behaviour,
                            we will not ‘hang up’ without first giving a friendly and professional warning. Because our service is
                            manned by volunteers with particular expertise in dealing with men, only males are encouraged to call us.
                        </p>
                    </motion.div>
                </div>
            
                {/* Values - Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-20 items-top max-w-[1200px] 2xl:max-w-[2200px] mt-[50px]">
                    {/* Left */}
                    <motion.div
                        className="flex flex-col items-start text-left"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        custom={4}
                    >
                        <Image
                            src="/icons/Empathy.png"
                            alt="Empathy Icon"
                            width={60}
                            height={60}
                            className="mb-4"
                        />
                        <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">EMPATHY</h4>
                        <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-justify max-w-[600px] 2xl:max-w-[2000px]">
                            All of our volunteers are empathetic listeners. This means that they will listen actively 
                            to the words that are expressed, their sentiment and context. You will have our undivided 
                            attention when you call Wingmen, and you can be comforted by knowing that the person on 
                            the other end of the phone has a genuine interest in what you have to say.
                        </p>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        className="flex flex-col items-start text-left"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        custom={5}
                    >
                        <Image
                            src="/icons/Professionalism.png"
                            alt="Professionalism Icon"
                            width={60}
                            height={60}
                            className="mb-4"
                        />
                        <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">PROFESSIONALISM</h4>
                        <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-justify max-w-[600px] 2xl:max-w-[2000px]">
                            We believe that a professional approach to running a Social Enterprise will give our 
                            service users the best possible experience. We have put systems in place to ensure that 
                            Wingmen is expertly managed so that there should be no obstacle to obtaining a listening ear.
                        </p>
                    </motion.div>
                </div>

                {/* Values - Third Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-20 items-top max-w-[1200px] 2xl:max-w-[2200px] mt-[50px]">
                    {/* Left */}
                    <motion.div
                        className="flex flex-col items-start text-left"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        custom={6}
                    >
                        <Image
                            src="/icons/Humility.png"
                            alt="Humility Icon"
                            width={60}
                            height={60}
                            className="mb-4"
                        />
                        <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">HUMILITY</h4>
                        <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-justify max-w-[600px] 2xl:max-w-[2000px]">
                            Wingmen provides a service for you to connect and share what is on your mind. Our role 
                            is to listen with humility and empathy, without introducing our own egos or points of 
                            view. By adopting a humble approach, we believe that we can maximise the amount of 
                            listening time we give to anyone who calls our line.
                        </p>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        className="flex flex-col items-start text-left"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        custom={7}
                    >
                        <Image
                            src="/icons/Non-Judgmental.png"
                            alt="Non-Judgmental Icon"
                            width={60}
                            height={60}
                            className="mb-4"
                        />
                        <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">NON-JUDGMENTAL</h4>
                        <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-justify max-w-[600px] 2xl:max-w-[2000px]">
                            Our service is a listening service, designed to help you ‘get it off your chest’. 
                            As such, we will not bring our own judgements into the conversations that take place. 
                            We believe that judgement can lead to guilt, anxiety and remorse, none of which are 
                            emotional responses that we encourage.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* OUR TRUSTEES SECTION */}
        <section className="relative w-full min-h-screen overflow-hidden flex items-center pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-0">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/our-trustees.jpg"
                    alt="Our Trustees Background"
                    fill
                    className="object-cover object-bottom"
                    priority
                />
                <div className="absolute inset-0 bg-[#212121] opacity-50"></div>
            </div>

        {/* Section Content */}
        <div
          className="relative z-10 flex flex-col justify-center md:h-full
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px]
                     xl:px-[80px] 2xl:px-[120px]
                     text-white text-left
                     max-w-[450px] sm:max-w-[720px] md:max-w-[800px]
                     lg:max-w-[800px] xl:max-w-[800px] 2xl:max-w-[1250px]"
        >
          {/* Section Title */}
          <motion.h2
            className="mt-[25px] text-[28px] sm:text-[28px] md:text-[36px]
                       lg:text-[36px] xl:text-[60px] 2xl:text-[100px]
                       font-extrabold antialiased tracking-tight uppercase mb-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={1}
          >
            OUT TRUSTEES
          </motion.h2>

          {/* Paragraphs */}
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
            Wingmen is supported by a group of trustees who have been specifically 
            chosen for what they can bring to benefit our community. The role of a 
            trustee is to help with his or her experience and ensure that the team 
            at Wingmen are held accountable.
          </motion.p>

          {/* Contact Us Button */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={3}
          >
            <a
              href="#readmore"
              className="relative inline-block px-[24px] py-[20px]
                         text-[15px] sm:text-[15px] md:text-[18px]
                         lg:text-[18px] xl:text-[18px] 2xl:text-[30px]
                         mb-[24px] font-heading font-bold tracking-widest
                         uppercase border-2 border-white text-[#212121]
                         overflow-hidden group transition-all duration-500 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                CONTACT US
              </span>
              <span
                className="absolute inset-0 bg-white
                           transition-transform duration-500 ease-in-out
                           transform translate-x-0 group-hover:translate-x-full"
                aria-hidden="true"
              />
              <span
                className="absolute inset-0 border border-transparent
                           transition-all duration-300 pointer-events-none
                           group-hover:border-white"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* OUR ETHOS SECTION */}
        <section className="relative w-full xl:h-screen bg-[#FFFEED] md:overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src="/our-ethos.jpg"
                    alt="Our Ethos Background"
                    fill
                    className="object-cover object-bottom"
                    priority
                />
                <div className="absolute inset-0 bg-[#212121] opacity-70"></div>
            </div>

        {/* Section Content */}
        <div
          className="relative z-10 flex flex-col justify-center h-full
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px]
                     xl:px-[80px] 2xl:px-[120px]
                     text-white text-left"
        >
          {/* Section Title */}
          <motion.h2
            className="xl:mt-[0px] mt-[70px] text-[28px] sm:text-[28px] md:text-[36px]
                       lg:text-[36px] xl:text-[60px] 2xl:text-[100px]
                       font-extrabold antialiased tracking-tight uppercase mb-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={1}
          >
            OUR ETHOS
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                        xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                        text-justify leading-relaxed tracking-[0.5px] 
                        max-w-[450px] sm:max-w-[600px] md:max-w-[800px] 
                        lg:max-w-[800px] xl:max-w-[600px] 2xl:max-w-[1000px]"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={2}
                >
                    At Wingmen, our values drive us in what we do. Our values inform our behaviours 
                    and decision-making. We believe that by having values, we can be accountable to 
                    ourselves, our service users and all other partners. It’s as simple as that.
                </motion.p>

          {/* Dotted Line */}
          <motion.div
            className="mt-4 w-full max-w-[1200px] 2xl:max-w-[2200px] h-[2px]"
            style={{
                backgroundImage:
                "repeating-linear-gradient(to right, white 0px, white 4px, transparent 4px, transparent 20px)",
                }}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={3}
                />

                {/* Values - First Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] md:gap-10 items-top max-w-[1200px] 2xl:max-w-[2200px] mt-[50px]">
                    {/* Column-1 */}
                    <motion.div
                        className="flex flex-col items-center text-left"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        custom={4}
                    >
                        <Image
                            src="/Wingmen Icon.svg"
                            alt="Wingmen Icon"
                            width={60}
                            height={60}
                            className="mb-6"
                        />
                        <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-center max-w-[600px] 2xl:max-w-[2000px]">
                            All conversations will be kept to a maximum of one hour. This is to benefit both caller 
                            and volunteer. Our experience tells us that fatigue can be an issue with longer calls.
                        </p>
                    </motion.div>
                    
                    {/* Column-2 */}
                    <motion.div
                        className="flex flex-col items-center text-left"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        custom={5}
                    >
                        <Image
                            src="/Wingmen Icon.svg"
                            alt="Wingmen Icon"
                            width={60}
                            height={60}
                            className="mb-6"
                        />
                        <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-center max-w-[600px] 2xl:max-w-[2000px]">
                            Conversations will be recorded to help training, but only when this is approved by the caller.
                        </p>
                    </motion.div>

                    {/* Column-3 */}
                    <motion.div
                        className="flex flex-col items-center text-left"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        custom={6}
                    >
                        <Image
                            src="/Wingmen Icon.svg"
                            alt="Wingmen Icon"
                            width={60}
                            height={60}
                            className="mb-6"
                        />
                        <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-center max-w-[600px] 2xl:max-w-[2000px]">
                            Wingmen is non-judgemental and non-discriminatory. This enables us to offer the 
                            best possible service to callers. As such, discriminatory language or opinions 
                            will not be tolerated.
                        </p>
                    </motion.div>
                </div>

                {/* Values - Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] md:gap-10 items-top max-w-[1200px] 2xl:max-w-[2200px] mt-[75px] xl:mb-[0px] mb-[70px]">
                    {/* Column-1 */}
                    <motion.div
                        className="flex flex-col items-center text-left"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        custom={7}
                    >
                        <Image
                            src="/Wingmen Icon.svg"
                            alt="Wingmen Icon"
                            width={60}
                            height={60}
                            className="mb-6"
                        />
                        <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-center max-w-[600px] 2xl:max-w-[2000px]">
                            Whilst we cannot always commit to pairing you with the same volunteer each time, 
                            we will do our best to do so.
                        </p>
                    </motion.div>
                    
                    {/* Column-2 */}
                    <motion.div
                        className="flex flex-col items-center text-left"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        custom={8}
                    >
                        <Image
                            src="/Wingmen Icon.svg"
                            alt="Wingmen Icon"
                            width={60}
                            height={60}
                            className="mb-6"
                        />
                        <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-center max-w-[600px] 2xl:max-w-[2000px]">
                            Our volunteers are specialists in supporting men who need a listening ear. 
                            Therefore, we can only offer our services to males aged 18 and over.
                        </p>
                    </motion.div>

                    {/* Column-3 */}
                    <motion.div
                        className="flex flex-col items-center text-left"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        custom={9}
                    >
                        <Image
                            src="/Wingmen Icon.svg"
                            alt="Wingmen Icon"
                            width={60}
                            height={60}
                            className="mb-6"
                        />
                        <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-center max-w-[600px] 2xl:max-w-[2000px]">
                            We have a duty of care to all of our callers. If we determine that you may be in 
                            immediate danger to yourself, or from another person, we may ask the emergency 
                            services to come and check.
                        </p>
                    </motion.div>
                </div>
        </div>
      </section>
    </>
  );
}
