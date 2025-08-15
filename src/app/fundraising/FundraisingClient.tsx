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

export default function FundraisingClient() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-135 2xl:h-250 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/fundraising.jpg"
            alt="Hero Background"
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

      {/* FUNDRAISING SECTION */}
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
                FUNDRAISING
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
                Wingmen is a community group that relies on donations from individuals or 
                organisations. Put simply; we cannot survive without our community of fundraisers.
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
                Our aim is to grow the profile of Wingmen so that any man, whatever the time 
                and regardless of how busy we are, can find his Wingman on the other end of 
                the phone.
            </motion.p>
      
            {/* How to Donate Button */}
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
                    HOW TO DONATE
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

      {/* PATRONS SECTION */}
      <section className="relative w-full bg-[#212121] overflow-hidden">
        {/* Overlay Image */}
        <div className="absolute inset-0 w-full z-10">
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
            className="relative z-10 flex mt-[70px] mb-[70px] flex-col justify-center 
                      px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                      2xl:px-[120px] text-white text-left"
            >
              
              {/* Section Title */}
              <motion.h2
                className="text-[28px] md:text-[36px] xl:text-[60px] 2xl:text-[80px] 
                          font-bold antialiased tracking-tight leading-tight uppercase max-w-[450px] 
                          sm:max-w-[600px] md:max-w-[800px] lg:max-w-[800px] xl:max-w-[800px] 
                          2xl:max-w-[1600px] mb-6"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={1}
              >
                THERE ARE THREE WAYS IN WHICH YOU CAN DONATE MONEY TO WINGMEN &gt;&gt;
              </motion.h2>

              {/* DONATE DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] md:gap-20 items-top 
                              max-w-[1200px] 2xl:max-w-[2200px] mt-[50px] mb-[25px]">
                {/* COLUMN-1 */}
                <motion.div
                  className="flex flex-col items-center max-w-[300px] 2xl:max-w-[2000px]"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  custom={2}
                >
                  <Image
                    src="/icons/Empathy.png"
                    alt="Donate Icon"
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                    <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">DONATE</h4>
                    <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-center 
                                  max-w-[600px] 2xl:max-w-[2000px]">
                      Donate a one-off amount to Wingmen
                    </p>
                </motion.div>
                
                {/* COLUMN-2 */}
                <motion.div
                  className="flex flex-col items-center max-w-[300px] 2xl:max-w-[2000px]"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  custom={3}
                >
                  <Image
                    src="/icons/Professionalism.png"
                    alt="Monthly Icon"
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                    <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">MONTHLY</h4>
                    <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-center 
                                  max-w-[600px] 2xl:max-w-[2000px]">
                      Set up a standing order for a monthly donation
                    </p>
                </motion.div>

                {/* COLUMN-3 */}
                <motion.div
                  className="flex flex-col items-center max-w-[300px] 2xl:max-w-[2000px]"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  custom={4}
                >
                  <Image
                    src="/icons/Humility.png"
                    alt="Patron Icon"
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                    <h4 className="text-[20px] 2xl:text-[40px] font-semibold mb-4">PATRON</h4>
                    <p className="text-[14px] 2xl:text-[25px] leading-relaxed text-center 
                                  max-w-[600px] 2xl:max-w-[2000px]">
                      Become a Wingmen Patron
                    </p>
                </motion.div>
              </div>

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
                  custom={5}
              />
          </div>
          {/* Section Title */}
          <motion.h2
            className="relative z-10 flex flex-col justify-center 
                       px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 
                       2xl:px-[120px] text-white text-left text-[28px] md:text-[36px] 
                       xl:text-[60px] 2xl:text-[100px] font-extrabold antialiased tracking-tight 
                       leading-tight uppercase mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={6}
            >
              PATRONS
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="relative z-10 flex flex-col justify-center 
                       px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px]
                        text-[15px] 2xl:text-[27px] mb-[24px] font-light 
                        text-white text-justify leading-relaxed tracking-[0.5px]
                        max-w-[450px] sm:max-w-[600px] md:max-w-[800px] 
                        xl:max-w-[800px] 2xl:max-w-[1235px]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={2}
            >
              Patrons have committed to an annual fee and are able to support Wingmen at 
              one of three levels:
          </motion.p>

          {/* Patron Table */}
<motion.div
  className="relative z-10 px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px] overflow-x-auto"
  variants={itemVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
  custom={3}
>
  <table className="min-w-full border-collapse border border-gray-300 text-white text-[14px] 2xl:text-[25px] mb-[75px]">
    <thead>
      <tr>
        <th className="border border-gray-500 px-4 py-4 w-[1000px] sm:w-[800px] text-[15px] 2xl:text-[30px] font-bold">
          Cost per annum
        </th>
        <th className="border border-gray-500 px-4 py-4 w-[200px] text-[15px] 2xl:text-[30px] font-bold">
          £250 – £1000
        </th>
        <th className="border border-gray-500 px-4 py-4 w-[200px] text-[15px] 2xl:text-[30px] font-bold">
          £1000 – £5000
        </th>
        <th className="border border-gray-500 px-4 py-4 w-[200px] text-[15px] 2xl:text-[30px] font-bold">
          £5000 +
        </th>
      </tr>
      <tr className="bg-[#2B2B2B]">
        <td className="border border-gray-500 px-4 py-4"></td>
        <td className="border border-gray-500 px-4 py-4 text-center font-semibold w-[200px]">
          Flight Lieutenant
        </td>
        <td className="border border-gray-500 px-4 py-4 text-center font-semibold w-[200px]">
          Squadron Leader
        </td>
        <td className="border border-gray-500 px-4 py-4 text-center font-semibold w-[200px]">
          Wing Commander
        </td>
      </tr>
    </thead>
    <tbody>
      {[
        ["Wingmen Patron certificate", "✔", "✔", "✔"],
        ["Your logo and link to your website on our website", "✔", "✔", "✔"],
        ["Your logo and business featured in all our presentations", "✔", "✔", "✔"],
        ["Your logo and link to your website in our email newsletter", "", "", "✔"],
        ["Digital assets incl. email signature, socials, web banners etc…", "", "", "✔"],
        ["Social media post promoting your patronage", "", "", "✔"],
        ["Event sponsorship opportunities", "", "", "✔"],
        ["Referrals to your business through our networking", "", "", "✔"],
        ["A feature blog on our website about you and your business", "", "✔", "✔"],
        ["Exclusive invitation to successful local business networking group", "", "✔", "✔"],
        ["Annual social media posts about the service or product your business offers", "", "", "✔"],
        ["Merchandise 1 Tee-Shirt", "✔", "", ""],
        ["Merchandise 2 Tee-Shirt plus Hoodie", "", "✔", ""],
        ["Merchandise 3 Tee-Shirt + Hoodie x5", "", "", "✔"],
        ["Annual CIC Gala: One Table of Eight FOC", "", "", "✔"],
        ["Annual CIC Gala: Two seats FOC", "", "", "✔"],
        ["Annual CIC Gala: Two seats FOC", "", "✔", ""],
        ["Wingmen metal pin badge", "", "", "✔"],
      ].map((row, idx) => (
        <tr key={idx} className={idx % 2 === 1 ? "bg-[#2B2B2B]" : ""}>
          <td className="border border-gray-500 px-4 py-4">{row[0]}</td>
          <td className="border border-gray-500 px-4 py-4 text-center w-[200px]">{row[1]}</td>
          <td className="border border-gray-500 px-4 py-4 text-center w-[200px]">{row[2]}</td>
          <td className="border border-gray-500 px-4 py-4 text-center w-[200px]">{row[3]}</td>
        </tr>
      ))}
      <tr>
        <td className="border border-gray-500 p-4"></td>
        <td className="border p-4 text-center w-[200px]">
          <a
            href="https://example.com/donate1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#212121] uppercase font-bold px-4 py-2 hover:bg-gray-500 hover:text-white transition"
          >
            Donate Now
          </a>
        </td>
        <td className="border p-4 text-center w-[200px]">
          <a
            href="https://example.com/donate2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#212121] uppercase font-bold px-4 py-2 hover:bg-gray-500 hover:text-white transition"
          >
            Donate Now
          </a>
        </td>
        <td className="border p-4 text-center w-[200px]">
          <a
            href="https://example.com/donate3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#212121] uppercase font-bold px-4 py-2 hover:bg-gray-500 hover:text-white transition"
          >
            Donate Now
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</motion.div>

      </section>
    </>
  );
}
