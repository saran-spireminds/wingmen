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

export default function PartnersClient() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-135 2xl:h-250 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/partners-bg.jpg"
            alt="Partners Background"
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
            PARTNERS
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
                         antialiased tracking-tighter uppercase mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              MENTAL HEALTH PARTNERS
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
              Wingmen has been designed specifically as a listening service for men. 
              We are not here to provide advice or guidance; as such we rely on having 
              partners by our side to whom we can signpost our service users.
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
              If you are also involved in men’s mental health, and believe that our 
              organisation could signpost to yours (or vice-versa), then we’d love to 
              have a chat about adding you to our roster of partners.
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
              Specifically we are looking to partner with organisations who offer 
              counselling, face to face classes or events, exercise classes, talking 
              therapy etc. All we ask is that you share or respect{" "}
              <a
                        href="/who-we-are#our-values"
                        className="font-bold underline hover:text-white-600 transition-colors duration-300"
                    >
                         our values
                    </a>.
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
                href=""
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
                  GET IN TOUCH
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
                src="/mental-health-partners.jpg"
                alt="Mental Health Partners Image"
                width={1000}
                height={1000}
                className="object-contain w-full h-auto rounded-lg"
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
                src="/Volunteer.jpg"
                alt="Awareness Partners"
                width={1000}
                height={1000}
                className="object-contain w-full h-auto rounded-lg"
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
                         antialiased tracking-tighter uppercase mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              AWARENESS PARTNERS
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
              Whilst Wingmen is a professional organisation, it is also a Social Enterprise 
              that has a finite capacity to spread the word about what we do. As such, if 
              you are involved in any of the following industries, and think you can help 
              raise awareness of Wingmen, we’d love to chat with you about how you could help:
            </motion.p>

            <div className="flex flex-col justify-start text-left">
              {/* Multiple Logo + Title Lines */}
              <div className="flex flex-col gap-2 ml-6 mb-8">
                <motion.div className="flex items-center gap-4"
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
                    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
                      Events and Excibitions
                    </h4>
                </motion.div>
            
                <motion.div className="flex items-center gap-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  custom={2}
                >
                  <Image
                    src="/Wingmen Icon Black.svg"
                    alt="Wingmen Logo"
                    width={25}
                    height={25}
                    className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
                  />
                    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
                      PR
                    </h4>
                </motion.div>
            
                <motion.div className="flex items-center gap-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  custom={3}
                >
                  <Image
                    src="/Wingmen Icon Black.svg"
                    alt="Wingmen Logo"
                    width={25}
                    height={25}
                    className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
                  />
                    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
                      Adveritising and Sponsorship
                    </h4>
                </motion.div>
            
                <motion.div className="flex items-center gap-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  custom={4}
                >
                  <Image
                    src="/Wingmen Icon Black.svg"
                    alt="Wingmen Logo"
                    width={25}
                    height={25}
                    className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
                  />
                    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
                      Merchandising
                    </h4>
                </motion.div>
            
                <motion.div className="flex items-center gap-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  custom={5}
                >
                  <Image
                    src="/Wingmen Icon Black.svg"
                    alt="Wingmen Logo"
                    width={25}
                    height={25}
                    className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
                  />
                    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
                      Broadcasting
                    </h4>
                </motion.div>
            
                <motion.div className="flex items-center gap-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  custom={6}
                >
                  <Image
                    src="/Wingmen Icon Black.svg"
                    alt="Wingmen Logo"
                    width={25}
                    height={25}
                    className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
                  />
                    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
                      Social Media Influencing
                    </h4>
                </motion.div>
            
                <motion.div className="flex items-center gap-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  custom={7}
                >
                  <Image
                   src="/Wingmen Icon Black.svg"
                   alt="Wingmen Logo"
                   width={25}
                   height={25}
                    className="object-contain 2xl:w-[40px] 2xl:h-[40px]"
                  />
                    <h4 className="text-[#212121] uppercase text-[18px] 2xl:text-[40px] xl:ml-4 font-bold">
                      High Profile, Male-Oriented activities such as Professional Sport
                    </h4>
                </motion.div>
              </div>
            </div>

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
                href=""
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
                  GET IN TOUCH
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
      </section>
      
      {/* OUR PARTNERS SECTION */}
      <section id="our-values" className="relative w-full bg-[#212121] overflow-hidden">
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
                  OUR PARTNERS
                </motion.h2>
                  
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-20 items-top max-w-[1200px] 2xl:max-w-[2200px] mt-[50px]">
                        <motion.div
                          className="flex flex-col items-start text-left"
                          variants={itemVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.1 }}
                          custom={2}
                        >
                          <div className="w-[300px] h-[50px] flex items-start mb-4">
                            <Image
                              src="/icons/kindacollectivelogo.png"
                              alt="Kinda Collective Logo"
                              width={100}
                              height={100}
                              className="mb-4"
                            />
                          </div>
                            <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">KINDA COLLECTIVE</h4>
                            <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-justify max-w-[600px] 2xl:max-w-[2000px]">
                                  Did you know that you can buy Wingmen coffee? Those wonderful folk at Kinda 
                                  Collective have a come up with a super tasty Kinda x Wingmen blend. Best of all, 
                                  proceeds of sales are shared with Wingmen! You can purchase Kinda x Wingmen 
                                  coffee here…
                                  <a
                                    href="https://kindacollective.co.uk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold underline transition-colors duration-300"
                                  >
                                    https://kindacollective.co.uk/
                                  </a>                        
                              </p>
                              
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
                            <div className="w-[300px] h-[50px] flex items-start mb-4">
                              <Image
                                src="/icons/printcrew.png"
                                alt="Print Crew Logo"
                                width={150}
                                height={150}
                                className="mb-4"
                              />
                            </div>
                              <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">PRINT CREW</h4>
                              <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-justify max-w-[600px] 2xl:max-w-[2000px]">
                                  The guys at Print Crew print everything except money! They are expert printers, 
                                  and support Wingmen with discounted pricing. Here’s how you can find out 
                                  more:
                                  <a
                                    href="https://printcrew.co.uk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold underline transition-colors duration-300"
                                  >
                                    https://printcrew.co.uk/
                                  </a>                        
                              </p>
                          </motion.div>
                      </div>

                      {/* Values - Second Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-20 items-top max-w-[1200px] 2xl:max-w-[2200px] mt-[50px]">
                        <motion.div
                          className="flex flex-col items-start text-left"
                          variants={itemVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.1 }}
                          custom={4}
                        >
                          <div className="w-[300px] h-[50px] flex items-start mb-4">
                            <Image
                              src="/icons/ppg.png"
                              alt="Perfect Personalised Gifts Logo"
                              width={150}
                              height={150}
                              className="mb-4"
                            />
                          </div>
                            <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">PERFECT PERSONALISED GIFTS</h4>
                            <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-justify max-w-[600px] 2xl:max-w-[2000px]">
                                  Wingmen get their merchandise made by Perfect Personalised Gifts, who have been 
                                  incredibly supportive of our CIC. You can buy your merchandise here: 
                                  <a
                                    href="https://bit.ly/perfectpersonalisedgifts"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold underline transition-colors duration-300"
                                  >
                                    https://bit.ly/perfectpersonalisedgifts
                                  </a>                        
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
                            <div className="w-[300px] h-[50px] flex items-start mb-4">
                              <Image
                                src="/icons/standtall.png"
                                alt="Stand Tall Logo"
                                width={100}
                                height={100}
                                className="mb-4"
                              />
                            </div>
                              <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">STAND TALL</h4>
                              <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-justify max-w-[600px] 2xl:max-w-[2000px]">
                                  Gina Stringer from Stand Tall carries out all of our PR, and does so at a discounted 
                                  rate. You can find out more about Stand Tall here: 
                                  <a
                                    href="https://www.standtallpr.co.uk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold underline transition-colors duration-300"
                                  >
                                    https://www.standtallpr.co.uk/
                                  </a>                        
                              </p>
                          </motion.div>
                      </div>

                      {/* Values - Third Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-20 items-top max-w-[1200px] 2xl:max-w-[2200px] mt-[50px]">
                        <motion.div
                          className="flex flex-col items-start text-left"
                          variants={itemVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.1 }}
                          custom={6}
                        >
                          <div className="w-[300px] h-[50px] flex items-start mb-4">
                            <Image
                            src="/icons/madeby7.png"
                            alt="Madeby7 Logo"
                            width={200}
                            height={200}
                            className="mb-4"
                          />
                          </div>
                            <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">MADEBY7</h4>
                            <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-justify max-w-[600px] 2xl:max-w-[2000px]">
                                  MADEBY7 are expert marketers, designers and website developers. They know a thing 
                                  or two about brand, too! MADEBY7 built our wonderful website at cost…you can see 
                                  more about what they do here: 
                                  <a
                                    href="https://www.madeby7.co.uk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold underline transition-colors duration-300"
                                  >
                                    https://www.madeby7.co.uk/
                                  </a>                        
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
                            <div className="w-[300px] h-[50px] flex items-start mb-4">
                              <Image
                                src="/icons/ancp.png"
                                alt="ANCP Properties Logo"
                                width={150}
                                height={150}
                                className="mb-4"
                              />
                            </div>
                              <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">ANCP PROPERTIES</h4>
                              <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-justify max-w-[600px] 2xl:max-w-[2000px]">
                                  Aysha Kenny runs ANCP properties, an estate agent based in Bradford; Aysha also helps 
                                  us run our events in her own time, which is amazing. Here’s some information 
                                  about ANCP: 
                                  <a
                                    href="https://www.ancpproperties.co.uk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold underline transition-colors duration-300"
                                  >
                                    https://www.ancpproperties.co.uk/
                                  </a>                        
                              </p>
                          </motion.div>
                      </div>

                      {/* Values - Fourth Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-20 items-top max-w-[1200px] 2xl:max-w-[2200px] mt-[50px]">
                        <motion.div
                          className="flex flex-col items-start text-left"
                          variants={itemVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.1 }}
                          custom={8}
                        >
                          <div className="w-[300px] h-[50px] flex items-center mb-4">
                            <Image
                              src="/icons/virtualcollege.png"
                              alt="Virtual College Logo"
                              width={200}
                              height={200}
                              className="object-contain"
                            />
                          </div>
                            <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">Virtual College</h4>
                            <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-justify max-w-[600px] 2xl:max-w-[2000px]">
                                  We could not support our Wingmen volunteers without professional training, and we’re 
                                  proud to have this gifted to us by the wonderful guys and girls at Virtual College. 
                                  Here’s a link to their comprehensive e-learning catalogue:  
                                  <a
                                    href="https://www.virtual-college.co.uk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold underline transition-colors duration-300"
                                  >
                                    https://www.virtual-college.co.uk/
                                  </a>                        
                              </p>
                          </motion.div>
                      </div>
              </div>
      </section>
    </>
  );
}
