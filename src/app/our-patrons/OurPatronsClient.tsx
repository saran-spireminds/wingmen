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

export default function OurPatronsClient() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-135 2xl:h-250 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/our-patrons-bg.jpg"
            alt="Our Patrons Background"
            fill
            priority
            className="object-cover object-center"
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

      {/* OUR PATRONS SECTION */}
      <section className="relative w-full bg-[#FFFEED] overflow-hidden">
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

        {/* Title Above Grid */}
        <div className="relative z-10 w-full text-left px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px] mt-20 mb-[25px]">
          <motion.h2
            className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] 
                       2xl:text-[100px] font-extrabold antialiased tracking-tight 
                       uppercase text-[#212121]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            OUR PATRONS
          </motion.h2>
        </div>

        {/* Grid Content-1 */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row w-full mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Left Content */}
          <div
            className="flex flex-col justify-center h-full 
                       px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                       2xl:px-[120px] text-[#212121] text-justify basis-[55%]
                       flex-1"
          >
            <motion.h3
              className="text-[28px] md:text-[36px] 
                         xl:text-[40px] 2xl:text-[60px] font-bold 
                         antialiased tracking-tighter uppercase"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              DIRECT IMAGING
            </motion.h3>

            <motion.h3
              className="text-[28px] md:text-[36px] 
                         xl:text-[30px] 2xl:text-[40px] font-semibold italic 
                         antialiased tracking-tighter mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              Flight Lieutenant
            </motion.h3>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
            >
              Direct Imaging Supplies was established in 2009.
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={4}
            >
              They supply over 60,000 Products ranging from printer cartridges,
              stationary, office furniture and IT equipment.
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={5}
            >
              They have an extremely knowledgeable, passionate and friendly team
              who are always on hand to offer service and advice on products.
              Their Personal Account Managers are solely dedicated to your
              account, your individual business needs and requirements.
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={5}
            >
              Direct Imaging Supplies also now offer a printer repair and
              maintenance service.
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={5}
            >
              They offer free deliveries around the UK and have parking available
              for customers to collect.
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={5}
            >
              For more information or assistance, please{" "}
              <span className="font-semibold">call 01653 917999</span>. To learn
              more about their products and services, please{" "}
              <span className="font-semibold">click the button</span> to visit
              their website.
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={6}
            >
              {/* Button*/}
              <a
                href="https://www.directimagingsupplies.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-[24px] py-[20px]
                           text-[15px] sm:text-[15px] md:text-[18px]
                           lg:text-[18px] xl:text-[18px] 2xl:text-[30px]
                           font-heading font-bold tracking-widest uppercase
                           border-2 border-[#212121] text-white
                           overflow-hidden group transition-all duration-500 ease-in-out"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                  VISIT DIRECT IMAGING
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

          {/* Right Side Image */}
          <motion.div
            className="relative flex items-center justify-center 
                       w-full basis-[45%] py-1 sm:py-2 lg:py-0 
                       px-[8px] sm:px-[24px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={6}
          >
            <div
              className="relative w-full 
                         max-w-[450px] sm:max-w-[480px] md:max-w-[600px] 
                         lg:max-w-[500px] xl:max-w-[800px] 2xl:max-w-[1250px]
                         mb-6 sm:mb-0"
            >
              <Image
                src="/directimaginglogo.jpg"
                alt="Direct Imaging Logo"
                width={1000}
                height={1000}
                className="object-contain w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Grid Content-2 */}
        <div className="relative z-10 flex flex-col lg:flex-row w-full mb-25">
          {/* Left Side Image */}
          <motion.div
            className="relative flex items-center justify-center 
                       w-full basis-[45%] py-1 sm:py-2 lg:py-0 
                       px-[8px] sm:px-[24px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={6}
          >
            <div
              className="relative w-full 
                         max-w-[450px] sm:max-w-[480px] md:max-w-[600px] 
                         lg:max-w-[500px] xl:max-w-[800px] 2xl:max-w-[1250px]
                         mb-6 sm:mb-0"
            >
              <Image
                src="/switchnetworkslogo.png"
                alt="Switch Networks Logo"
                width={1000}
                height={1000}
                className="object-contain w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <div
            className="flex flex-col justify-center h-full 
                       px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                       2xl:px-[120px] text-[#212121] text-justify basis-[55%]
                       flex-1"
          >
            <motion.h3
              className="text-[28px] md:text-[36px] 
                         xl:text-[40px] 2xl:text-[60px] font-bold 
                         antialiased tracking-tighter uppercase"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              SWITCH NETWOKS
            </motion.h3>

            <motion.h3
              className="text-[28px] md:text-[36px] 
                         xl:text-[30px] 2xl:text-[40px] font-semibold italic 
                         antialiased tracking-tighter mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              Flight Lieutenant
            </motion.h3>

            {/* Paragraphs */}
            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
            >
              Switch Networks is a well established local Telecoms and IT
              provider, our offices are based near the Castle Howard Estate just
              outside Malton, North Yorkshire.
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={4}
            >
              Our team has over 50 years combined experience in the Telecoms and
              IT sectors, we are good listeners and work closely with our
              clients, this unique partnership approach means that we really get
              to know and understand our clients’ needs, their systems and the
              support they actually need.
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={5}
            >
              This way of working has helped us build up an outstanding
              reputation, much of our customer base has been earned through
              valuable referrals and recommendations!
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={5}
            >
              For more information or assistance, please{" "}
              <span className="font-semibold">call 01653 917000</span>. To learn
              more about their products and services, please{" "}
              <span className="font-semibold">click the button</span> to visit
              their website.
            </motion.p>

            {/* Button */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={6}
            >
              <a
                href="https://www.switch-networks.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-[24px] py-[20px]
                           text-[15px] sm:text-[15px] md:text-[18px]
                           lg:text-[18px] xl:text-[18px] 2xl:text-[30px]
                           font-heading font-bold tracking-widest uppercase
                           border-2 border-[#212121] text-white
                           overflow-hidden group transition-all duration-500 ease-in-out"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                  VISIT SWITCH NETWORKS
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
        </div>

        {/* Grid Content-3 */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row w-full mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Left Content */}
          <div
            className="flex flex-col justify-center h-full 
                       px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                       2xl:px-[120px] text-[#212121] text-justify basis-[55%]
                       flex-1"
          >
            <motion.h3
              className="text-[28px] md:text-[36px] 
                         xl:text-[40px] 2xl:text-[60px] font-bold 
                         antialiased tracking-tighter uppercase"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              ABS FOUNDATION
            </motion.h3>

            <motion.h3
              className="text-[28px] md:text-[36px] 
                         xl:text-[30px] 2xl:text-[40px] font-semibold italic 
                         antialiased tracking-tighter mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              Squadron Leader
            </motion.h3>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
            >
              The ABS Foundation was established 10 years ago by Elland based ABS A Better Way.
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={4}
            >
              The foundation carefully invests money raised into meaningful, sustainable projects 
              worldwide, supporting communities in Sri Lanka, India, and locally in West Yorkshire, 
              and we are extremely proud to be supporting Wingmen. 
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={5}
            >
              Funds are raised jointly between ABS and sister company Crest IT through 
              events and donations per print from the ABS range of photocopiers, and 
              where possible our dedicated team volunteers their time to projects, 
              embodying our commitment to “Be Better”, turning everyday printing 
              into positive change.  
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={5}
            >
              For more information or assistance and to learn
              more about their products and services, please{" "}
              <span className="font-semibold">click the button</span> to visit
              their websites.
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={6}
            >
              {/* Button*/}
              <a
                href="https://absabetterway.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-[24px] py-[20px]
                           text-[15px] sm:text-[15px] md:text-[18px]
                           lg:text-[18px] xl:text-[18px] 2xl:text-[30px]
                           font-heading font-bold tracking-widest uppercase
                           border-2 border-[#212121] text-white
                           overflow-hidden group transition-all duration-500 ease-in-out"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                  VISIT ABS FOUNDATION
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

              <a
                href="https://crest-it.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-[24px] py-[20px]
                           text-[15px] sm:text-[15px] md:text-[18px]
                           lg:text-[18px] xl:text-[18px] 2xl:text-[30px]
                           font-heading font-bold tracking-widest uppercase
                           border-2 border-[#212121] text-white
                           overflow-hidden group transition-all duration-500 ease-in-out"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                  VISIT CREST
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

          {/* Right Side Image */}
          <motion.div
            className="relative flex items-center justify-center 
                       w-full basis-[45%] py-1 sm:py-2 lg:py-0 
                       px-[8px] sm:px-[24px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={6}
          >
            <div
              className="relative w-full 
                         max-w-[450px] sm:max-w-[480px] md:max-w-[600px] 
                         lg:max-w-[500px] xl:max-w-[800px] 2xl:max-w-[1250px]
                         mb-6 sm:mb-0"
            >
              <Image
                src="/abslogo.png"
                alt="ABS Foundation Logo"
                width={1000}
                height={1000}
                className="object-contain w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Grid Content-4 */}
        <div className="relative z-10 flex flex-col lg:flex-row w-full mb-25">
          {/* Left Side Image */}
          <motion.div
            className="relative flex items-center justify-center 
                       w-full basis-[45%] py-1 sm:py-2 lg:py-0 
                       px-[8px] sm:px-[24px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={6}
          >
            <div
              className="relative w-full 
                         max-w-[450px] sm:max-w-[480px] md:max-w-[600px] 
                         lg:max-w-[500px] xl:max-w-[800px] 2xl:max-w-[1250px]
                         mb-6 sm:mb-0"
            >
              <Image
                src="/TABlogo.png"
                alt="TAB Logo"
                width={1000}
                height={1000}
                className="object-contain w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <div
            className="flex flex-col justify-center h-full 
                       px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                       2xl:px-[120px] text-[#212121] text-justify basis-[55%]
                       flex-1"
          >
            <motion.h3
              className="text-[28px] md:text-[36px] 
                         xl:text-[40px] 2xl:text-[60px] font-bold 
                         antialiased tracking-tighter uppercase"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              THE ALTERNATIVE BOARD
            </motion.h3>

            <motion.h3
              className="text-[28px] md:text-[36px] 
                         xl:text-[30px] 2xl:text-[40px] font-semibold italic 
                         antialiased tracking-tighter mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              Flight Lieutenant
            </motion.h3>

            {/* Paragraphs */}
            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
            >
              TAB are specialists in peer-to-peer advisory boards for MDs and business owners; 
              they set up boards where numerous heads of business can come together to improve 
              their business by sharing and learning. It’s a great model that empowers you to 
              think about your business whilst not being drawn into the day-to-day.
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={5}
            >
              For more information or assistance and to learn
              more about their products and services, please{" "}
              <span className="font-semibold">click the button</span> to visit
              their website.
            </motion.p>

            {/* Button */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={6}
            >
              <a
                href="https://www.thealternativeboard.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-[24px] py-[20px]
                           text-[15px] sm:text-[15px] md:text-[18px]
                           lg:text-[18px] xl:text-[18px] 2xl:text-[30px]
                           font-heading font-bold tracking-widest uppercase
                           border-2 border-[#212121] text-white
                           overflow-hidden group transition-all duration-500 ease-in-out"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                  VISIT TAB
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
        </div>

        {/* Grid Content-5 */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row w-full mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Left Content */}
          <div
            className="flex flex-col justify-center h-full 
                       px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                       2xl:px-[120px] text-[#212121] text-justify basis-[55%]
                       flex-1"
          >
            <motion.h3
              className="text-[28px] md:text-[36px] 
                         xl:text-[40px] 2xl:text-[60px] font-bold 
                         antialiased tracking-tighter uppercase"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              PIVOTAL CGI
            </motion.h3>

            <motion.h3
              className="text-[28px] md:text-[36px] 
                         xl:text-[30px] 2xl:text-[40px] font-semibold italic 
                         antialiased tracking-tighter mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              Flight Lieutenant
            </motion.h3>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={4}
            >
              Pivotal CGI specialises in empowering architects and property developers with 
              high-quality 3D visualisations that transform designs into striking realities. 
              Our visuals ensure every project is represented with accuracy, clarity, and 
              style, helping you stand out in a competitive market.
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={5}
            >
              By focusing on your unique vision, we create tailored solutions that enhance 
              presentations and inspire confidence. Committed to delivering exceptional quality 
              and fast, reliable service, we strive to help our clients win more business and 
              showcase their projects at the highest standard. 
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={5}
            >
              We are proud to support Wingmen and their mission to uplift and inspire men.
            </motion.p>

            <motion.p
              className="text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] 
                         xl:text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                         leading-relaxed tracking-[0.5px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={5}
            >
              For more information or assistance and to learn
              more about their products and services, please{" "}
              <span className="font-semibold">click the button</span> to visit
              their website.
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={6}
            >
              {/* Button*/}
              <a
                href="https://pivotalcgi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-[24px] py-[20px]
                           text-[15px] sm:text-[15px] md:text-[18px]
                           lg:text-[18px] xl:text-[18px] 2xl:text-[30px]
                           font-heading font-bold tracking-widest uppercase
                           border-2 border-[#212121] text-white
                           overflow-hidden group transition-all duration-500 ease-in-out"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                  VISIT PIVOTAL CGI
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

          {/* Right Side Image */}
          <motion.div
            className="relative flex items-center justify-center 
                       w-full basis-[45%] py-1 sm:py-2 lg:py-0 
                       px-[8px] sm:px-[24px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={6}
          >
            <div
              className="relative w-full 
                         max-w-[450px] sm:max-w-[480px] md:max-w-[600px] 
                         lg:max-w-[500px] xl:max-w-[800px] 2xl:max-w-[1250px]
                         mb-6 sm:mb-0"
            >
              <Image
                src="/pivotallogo.png"
                alt="Pivotal Logo"
                width={1000}
                height={1000}
                className="object-contain w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

      </section>
    </>
  );
}
