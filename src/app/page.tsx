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

const values = [
    { icon: '/icons/Empathy.png', title: 'EMPATHY' },
    { icon: '/icons/Professionalism.png', title: 'PROFESSIONALISM' },
    { icon: '/icons/Inclusivity.png', title: 'INCLUSIVITY' },
    { icon: '/icons/Non-Judgmental.png', title: 'NON-JUDGMENTAL' },
    { icon: '/icons/Humility.png', title: 'HUMILITY' },
  ];

const patrons = [
  { name: "Pivotal", logo: "/Pivotal.png" },
  { name: "Switch Networks", logo: "/Switch Networks.png" },
  { name: "Direct Imaging", logo: "/Direct Imaging.png" },
  { name: "ABS Foundation", logo: "/ABS.png" },
  { name: "Tab", logo: "/Tab.png" },
  // add more patrons here
];

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
          className="relative z-10 flex flex-col justify-center h-full 
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] 
                     xl:px-[80px] 2xl:px-[120px]
                     text-white text-left
                     max-w-[450px] sm:max-w-[720px] md:max-w-[960px] 
                     lg:max-w-[1280px] xl:max-w-[1600px] 2xl:max-w-[2000px]"
        >
          {/* Top Icon */}
          <motion.div
            className="mt-[16px] mb-[16px] w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] 
                       md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] 
                       2xl:w-[200px] 2xl:h-[200px]"
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
            className="mb-[16px] w-[300px] h-[53px] sm:w-[450px] sm:h-[80px] 
                       md:w-[450px] md:h-[80px] lg:w-[450px] lg:h-[80px] 
                       xl:w-[600px] xl:h-[106px] 2xl:w-[1000px] 2xl:h-[158px] hidden md:block"
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
            className="text-[35px] sm:text-[40px] md:text-[40px] lg:text-[40px] 
                       xl:text-[60px] 2xl:text-[100px] font-bold uppercase"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
          >
            We&apos;ve got your back
          </motion.h1>

          <motion.p
            className="mt-[16px] text-[16px] sm:text-[16px] md:text-[16px] 
                       lg:text-[16px] xl:text-[18px] 2xl:text-[30px] 
                       max-w-[700px] 2xl:max-w-[1250px] font-light text-justify tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
          >
            We are a team of mental health volunteers who understand that by
            providing you with a connection, we can try and prevent your issues
            from escalating.
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
              className="relative inline-block px-[24px] py-[20px] 
                         text-[15px] sm:text-[15px] md:text-[18px] lg:text-[18px] 
                         xl:text-[18px] 2xl:text-[30px] mb-[24px] font-heading font-bold tracking-widest 
                         uppercase border-2 border-white text-[#212121] overflow-hidden 
                         group transition-all duration-500 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                CALL US: +44 1135 477636
              </span>
              <span
                className="absolute inset-0 bg-[#ffffff] transition-transform duration-500 
                           ease-in-out transform translate-x-0 group-hover:translate-x-full"
                aria-hidden="true"
              />
              <span
                className="absolute inset-0 border border-transparent transition-all duration-300 
                           pointer-events-none group-hover:border-white"
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
        <div
          className="relative z-10 flex flex-col justify-center h-full 
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                     2xl:px-[120px] text-[#212121] text-left 
                     max-w-[450px] sm:max-w-[720px] md:max-w-[800px] lg:max-w-[800px] 
                     xl:max-w-[800px] 2xl:max-w-[1250px]"
        >
          {/* Section Title */}
          <motion.h2
            className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[60px] 2xl:text-[100px] font-extrabold antialiased tracking-tight uppercase mb-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            WHAT WE DO
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                       xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                       text-justify leading-relaxed tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            We are empathetic professionals who will listen with humility and never
            judge. <br />
            We provide a completely anonymous space to talk; our mission is as
            follows:
          </motion.p>

          {/* Highlighted Content */}
          <motion.p
            className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px] 
                       xl:text-[28px] 2xl:text-[35px] font-bold mb-[24px] text-[#707070] 
                       leading-normal"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
          >
            “To provide a dedicated phone line where you will be listened to in
            complete anonymity and without judgement.”
          </motion.p>

          {/* Another Paragraph */}
          <motion.p
            className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                       xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                       text-justify leading-relaxed tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
          >
            We are here to listen and, where appropriate, provide a signpost to
            the other mental health partners with whom we work.
          </motion.p>

          {/* Read More Button */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={5}
          >
            <a
              href="#readmore"
              className="relative inline-block px-[24px] py-[20px] 
                         text-[15px] sm:text-[15px] md:text-[18px] lg:text-[18px] 
                         xl:text-[18px] 2xl:text-[30px] mb-[24px] font-heading font-bold tracking-widest 
                         uppercase border-2 border-[#212121] text-white overflow-hidden 
                         group transition-all duration-500 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                READ MORE
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
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="relative w-full min-h-screen bg-[#212121] overflow-hidden flex flex-col lg:flex-row pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-0">
        {/* Overlay Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/BG_overlay.svg"
            alt="Overlay Background"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>

        {/* Left Content */}
        <div
          className="relative z-10 flex flex-col justify-center h-full 
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                     2xl:px-[120px] text-white text-left 
                     max-w-[450px] sm:max-w-[720px] md:max-w-[800px] lg:max-w-[500px] 
                     xl:max-w-[800px] 2xl:max-w-[1250px]
                     flex-1 min-h-[50vh] lg:min-h-screen"
        >
          <motion.h2
            className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[60px] 
                       2xl:text-[100px] font-extrabold antialiased tracking-tight uppercase mb-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            WHO WE ARE
          </motion.h2>

          <motion.p
            className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 
                       2xl:text-[27px] mb-[24px] font-light leading-relaxed tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            Wingmen comprises a group of men who for various reasons have experienced
            the anguish of life’s darker moments. We have suffered, or we have been
            exposed to the suffering of those close to us, and we want to make a
            difference.
          </motion.p>

          <motion.p
            className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 
                       2xl:text-[27px] mb-[24px] font-light leading-relaxed tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
          >
            Our experience has taught us that suffering in silence can be soul
            destroying. We believe that making a connection with another person is
            the first step towards finding a resolution, and that connection can
            prevent an issue from becoming a crisis. Wingmen are here to provide that
            connection.
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
          >
            <a
              href="#readmore"
              className="relative inline-block px-[24px] py-[20px] 
                         text-[15px] sm:text-[15px] md:text-[18px] lg:text-[18px] 
                         xl:text-[18px] 2xl:text-[30px] mb-[24px] font-heading font-bold tracking-widest 
                         uppercase border-2 border-white text-[#212121] overflow-hidden 
                         group transition-all duration-500 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                READ MORE
              </span>
              <span
                className="absolute inset-0 bg-white transition-transform duration-500 
                           ease-in-out transform translate-x-0 group-hover:translate-x-full"
                aria-hidden="true"
              />
              <span
                className="absolute inset-0 border border-transparent transition-all duration-300 
                           pointer-events-none group-hover:border-white"
              />
            </a>
          </motion.div>
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
              src="/Who we are.jpg"
              alt="Who We Are Image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* OUR VALUES SECTION */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-0">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/Our Values.jpg"
            alt="Our Values Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#212121] opacity-50"></div>
        </div>
        
        {/* Section Content */}
        <div
          className="relative z-10 flex flex-col justify-center h-full 
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                     2xl:px-[120px] text-white text-left"
        >
          {/* Section Title */}
          <motion.h2
            className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[60px] 2xl:text-[100px] font-extrabold antialiased tracking-tight uppercase mb-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            OUR VALUES
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                       xl:text-[15px] 2xl:text-[27px] max-w-[450px] sm:max-w-[720px] md:max-w-[800px] lg:max-w-[500px] 
                     xl:max-w-[800px] 2xl:max-w-[1250px] mb-[24px] font-light 
                       text-justify leading-relaxed tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            Our organisation is values-driven. This means that everyone who represents Wingmen shares these values, and uses them as a guide. Our values describe who we are, and are as follows:
          </motion.p>

          {/* Icons grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 mt-12 mb-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index + 2}
              >
                <div className="mb-6">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={60} // adjust size as needed
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] 
                       xl:text-[20px] 2xl:text-[35px] font-semibold tracking-[1.5px]">
                        {value.title}
                  </h3>
              </motion.div>
            ))}
          </div>

          {/* Read More Button */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={5}
          >
            <a
              href="#readmore"
              className="relative inline-block px-[24px] py-[20px] 
                         text-[15px] sm:text-[15px] md:text-[18px] lg:text-[18px] 
                         xl:text-[18px] 2xl:text-[30px] mb-[24px] font-heading font-bold tracking-widest 
                         uppercase border-2 border-white text-[#212121] overflow-hidden 
                         group transition-all duration-500 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                READ MORE
              </span>
              <span
                className="absolute inset-0 bg-white transition-transform duration-500 
                           ease-in-out transform translate-x-0 group-hover:translate-x-full"
                aria-hidden="true"
              />
              <span
                className="absolute inset-0 border border-transparent transition-all duration-300 
                           pointer-events-none group-hover:border-white"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section className="relative w-full min-h-screen bg-[#FFFEED] overflow-hidden flex flex-col lg:flex-row pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-0">
        {/* Overlay Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/BG_overlay.svg"
            alt="Overlay Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Left Side Image */}
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
              src="/Support.jpg"
              alt="Support Image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <div
          className="relative z-10 flex flex-col justify-center h-full 
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                     2xl:px-[120px] text-[#212121] text-left 
                     max-w-[450px] sm:max-w-[720px] md:max-w-[800px] lg:max-w-[500px] 
                     xl:max-w-[800px] 2xl:max-w-[1250px]
                     flex-1 min-h-[50vh] lg:min-h-screen"
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
            Support Wingmen with a donation
          </motion.h2>

          <motion.p
            className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 
                       2xl:text-[27px] mb-[24px] font-light leading-relaxed tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            Wingmen is dedicated to making a difference, but we cannot do this alone. 
            We trade with a social purpose, and as such we rely on fundraising activities and 
            donations. If you share our values, and our drive and ambition to really make a 
            difference, then please get in touch about how you can support our work. 
            Donations can be made anonymously or not, depending on your preference.
          </motion.p>

          <motion.p
            className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 
                       2xl:text-[27px] mb-[24px] font-light italic leading-relaxed tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
          >
            You can make one off or regular donations, or become a Patron at one of 
            three levels – flight lieutenant, squadron leader or wing commander.
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
          >
            <a
              href="#readmore"
              className="relative inline-block px-[24px] py-[20px] 
                         text-[15px] sm:text-[15px] md:text-[18px] lg:text-[18px] 
                         xl:text-[18px] 2xl:text-[30px] mb-[24px] font-heading font-bold tracking-widest 
                         uppercase border-2 border-[#212121] text-white overflow-hidden 
                         group transition-all duration-500 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                HOW TO DONATE
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
            </a>
          </motion.div>
        </div>
      </section>

      {/* VOLUNTEER SECTION */}
      <section className="relative w-full min-h-screen bg-[#212121] overflow-hidden flex flex-col lg:flex-row pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/BG_volunteer.jpg"
            alt="Volunteer Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#212121] opacity-70"></div>
        </div>

        {/* Left Content */}
        <div
          className="relative z-10 flex flex-col justify-center h-full 
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                     2xl:px-[120px] text-white text-left 
                     max-w-[450px] sm:max-w-[720px] md:max-w-[800px] lg:max-w-[500px] 
                     xl:max-w-[800px] 2xl:max-w-[1250px]
                     flex-1 min-h-[50vh] lg:min-h-screen"
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
            Volunteer to work with Wingmen
          </motion.h2>

          <motion.p
            className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 
                       2xl:text-[27px] mb-[24px] font-light leading-relaxed tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            Wingmen cannot exist without our brilliant team of volunteers that man the phones. 
            If you would like to get involved, think you can help, and feel like the Wingmen 
            message resonates with you, then please get in touch.
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
          >
            <a
              href="#readmore"
              className="relative inline-block px-[24px] py-[20px] 
                         text-[15px] sm:text-[15px] md:text-[18px] lg:text-[18px] 
                         xl:text-[18px] 2xl:text-[30px] mb-[24px] font-heading font-bold tracking-widest 
                         uppercase border-2 border-white text-[#212121] overflow-hidden 
                         group transition-all duration-500 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                FIND OUT MORE
              </span>
              <span
                className="absolute inset-0 bg-white transition-transform duration-500 
                           ease-in-out transform translate-x-0 group-hover:translate-x-full"
                aria-hidden="true"
              />
              <span
                className="absolute inset-0 border border-transparent transition-all duration-300 
                           pointer-events-none group-hover:border-white"
              />
            </a>
          </motion.div>
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
              src="/volunteer.jpg"
              alt="Volunteer Image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="relative w-full min-h-screen bg-[#FFFEED] overflow-hidden flex flex-col lg:flex-row pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-0">
        {/* Overlay Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/BG_overlay.svg"
            alt="Overlay Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Left Side Image */}
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
              src="/Partners.jpg"
              alt="Partners Image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <div
          className="relative z-10 flex flex-col justify-center h-full 
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                     2xl:px-[120px] text-[#212121] text-left 
                     max-w-[450px] sm:max-w-[720px] md:max-w-[800px] lg:max-w-[500px] 
                     xl:max-w-[800px] 2xl:max-w-[1250px]
                     flex-1 min-h-[50vh] lg:min-h-screen"
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
            Help raise awareness of Wingmen
          </motion.h2>

          <motion.p
            className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 
                       2xl:text-[27px] mb-[24px] font-light leading-relaxed tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            Whilst Wingmen is a professional organisation, it is also a Social Enterprise that 
            has a finite capacity to spread the word about what we do. We would love to chat 
            with you if you think you can help raise awareness to benefit the community.
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
          >
            <a
              href="#readmore"
              className="relative inline-block px-[24px] py-[20px] 
                         text-[15px] sm:text-[15px] md:text-[18px] lg:text-[18px] 
                         xl:text-[18px] 2xl:text-[30px] mb-[24px] font-heading font-bold tracking-widest 
                         uppercase border-2 border-[#212121] text-white overflow-hidden 
                         group transition-all duration-500 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                MORE INFO
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
            </a>
          </motion.div>
        </div>
      </section>

      {/* PARTNER WITH SECTION */}
      <section className="relative w-full min-h-screen bg-[#212121] overflow-hidden flex flex-col lg:flex-row pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/BG_overlay.svg"
            alt="Overlay Background"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>

        {/* Left Content */}
        <div
          className="relative z-10 flex flex-col justify-center h-full 
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                     2xl:px-[120px] text-white text-left 
                     max-w-[450px] sm:max-w-[720px] md:max-w-[800px] lg:max-w-[500px] 
                     xl:max-w-[800px] 2xl:max-w-[1250px]
                     flex-1 min-h-[50vh] lg:min-h-screen"
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
            Partner with Wingmen
          </motion.h2>

          <motion.p
            className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[15px] 
                       2xl:text-[27px] mb-[24px] font-light leading-relaxed tracking-[0.5px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            If you are also involved in men’s mental health, and believe that our organisation 
            could signpost to yours (or vice-versa), then we’d love to have a chat about adding 
            you to our roster of partners.
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
          >
            <a
              href="#readmore"
              className="relative inline-block px-[24px] py-[20px] 
                         text-[15px] sm:text-[15px] md:text-[18px] lg:text-[18px] 
                         xl:text-[18px] 2xl:text-[30px] mb-[24px] font-heading font-bold tracking-widest 
                         uppercase border-2 border-white text-[#212121] overflow-hidden 
                         group transition-all duration-500 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                GET IN TOUCH
              </span>
              <span
                className="absolute inset-0 bg-white transition-transform duration-500 
                           ease-in-out transform translate-x-0 group-hover:translate-x-full"
                aria-hidden="true"
              />
              <span
                className="absolute inset-0 border border-transparent transition-all duration-300 
                           pointer-events-none group-hover:border-white"
              />
            </a>
          </motion.div>
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
              src="/Partner with Wingmen.jpg"
              alt="Partner with Wingmen Image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* OUR PATRONS SECTION */}
      <section className="relative w-full min-h-[50vh] bg-[#FFFEED] overflow-hidden py-20">
        {/* Section Title */}
        <div className="relative z-10 px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px] text-center text-[#212121] ">
          <motion.h2
            className="text-[28px] sm:text-[28px] md:text-[36px] lg:text-[36px] xl:text-[60px] 
                       2xl:text-[100px] font-extrabold antialiased leading-tight tracking-tight uppercase mb-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            OUR PATRONS
          </motion.h2>
        </div>
        
        {/* Logos Slider */}
        <div className="relative z-10 overflow-hidden">
          <motion.div
    className="flex justify-center items-center gap-25 xl:gap-40 2xl:gap-75 mt-[50px] xl:mt-[70px] 2xl:mt-[100px] px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[100px] 2xl:px-[180px]"
    initial={{ x: "100%" }}
    animate={{ x: "-100%" }}
    transition={{ repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" }}
  >
    {patrons.concat(patrons).map((patron, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[220px]"
      >
        <Image
          src={patron.logo} // your public folder path
          alt={patron.name}
          width={220}
          height={100}
          className="object-contain"
        />
      </div>
    ))}
  </motion.div>
        </div>
      </section>

    </>
  );
}
