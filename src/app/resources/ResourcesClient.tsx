'use client';

import { useEffect, useState } from "react";
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

// Type for Strapi article
interface Article {
  id: number;
  title: string;
  description: string;
  slug: string;
  cover?: {
    url: string;
  };
  category?: string;
}

export default function ResourcesClient() {
  const [knowledgeBaseArticles, setKnowledgeBaseArticles] = useState<Article[]>([]);
  const [blogArticles, setBlogArticles] = useState<Article[]>([]);
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
        const data = await res.json();

        // Map the response to match Article type
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const articles: Article[] = data.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          slug: item.slug,
          cover: item.cover
            ? {
                url: item.cover.url.startsWith("https")
                  ? item.cover.url
                  : `${STRAPI_URL}${item.cover.url}`,
              }
            : undefined,
            category: item.category?.name ?? "", // safe fallback
        }));

        setKnowledgeBaseArticles(
        articles.filter((a) => a.category?.toLowerCase() === "knowledge base")
        );
      setBlogArticles(
        articles.filter((a) => a.category?.toLowerCase() === "blogs")
      );

      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [STRAPI_URL]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-135 2xl:h-250 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/resources-bg.jpg"
            alt="Resources Background"
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

      {/* RESOURCES SECTION */}
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
            RESOURCES
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
            Wingmen have worked with a number of men who have been on
            their own journeys through mental health issues. As part of 
            this work, we have compiled a number of resources from these 
            individuals, and they are here to share in the hope that they 
            will be of some help.
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
            Please note that each of these articles are written by other men, 
            and are not generated by Artificial Intelligence. As such, Wingmen 
            are immensely grateful to all who have shared their wisdom and experience.
          </motion.p>
        </div>
      </section>

      {/* KNOWLEDGE BASE SECTION */}
      <section className="relative w-full md:overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/BG_volunteer.jpg"
            alt="Knowledge Base Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#212121] opacity-50" />
        </div>

        <div
          className="relative z-10 flex flex-col justify-center md:h-full
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px]
                     xl:px-[80px] 2xl:px-[120px]
                     text-white text-left mt-25 mb-25"
        >
          {/* Narrow content wrapper for title + paragraph */}
          <div className="max-w-[630px]">
            <motion.h2
              className="text-[28px] sm:text-[28px] md:text-[36px]
                         lg:text-[36px] xl:text-[60px] 2xl:text-[100px]
                         font-extrabold antialiased tracking-tight uppercase mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={1}
            >
              KNOWLEDGE BASE
            </motion.h2>

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
              We know that understanding can be an important part of being able to 
              deal with things. As such, we have authored these articles that intend 
              to share knowledge around mental health:
            </motion.p>
          </div>

          {/* Full-width wrapper just for articles */}
          <div className="w-full mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {knowledgeBaseArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  className="p-6 border rounded-lg bg-white text-black shadow-sm hover:shadow-md transition flex flex-col"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={3 + index * 0.2}
                >
                  {article.cover && (
                    <Image
                      src={article.cover.url}
                      alt={article.title}
                      width={500}
                      height={300}
                      className="mb-4 object-cover rounded"
                    />
                  )}
                  <h4 className="text-xl font-bold mb-2">{article.title}</h4>
                  <p className="text-[#212121] text-[15px] mb-4">
                    {article.description}
                  </p>

                  {/* Push button to bottom */}
                  <div className="mt-auto">
                    <a
                      href={`/knowledge-base/${article.slug}`}
                      className="relative inline-block px-[24px] py-[12px] 
                                 text-[14px] sm:text-[14px] md:text-[16px] lg:text-[16px] 
                                 xl:text-[16px] 2xl:text-[20px] mt-[16px] font-heading font-bold tracking-wider 
                                 uppercase border-2 border-[#212121] text-white overflow-hidden 
                                 group transition-all duration-500 ease-in-out"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                        Read More →
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section className="relative w-full bg-[#FFFEED] md:overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/BG_overlay.svg"
            alt="Blogs Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div
          className="relative z-10 flex flex-col justify-center md:h-full
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px]
                     xl:px-[80px] 2xl:px-[120px]
                     text-[#212121] text-left mt-25 mb-25"
        >
          {/* Narrow content wrapper for title + paragraph */}
          <div className="max-w-[630px]">
            <motion.h2
              className="text-[28px] sm:text-[28px] md:text-[36px]
                         lg:text-[36px] xl:text-[60px] 2xl:text-[100px]
                         font-extrabold antialiased tracking-tight uppercase mb-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={1}
            >
              BLOGS
            </motion.h2>

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
              We have curated a selection of opinion pieces around mental health here:
            </motion.p>
          </div>

          {/* Full-width wrapper just for articles */}
          <div className="w-full mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  className="p-6 rounded-lg bg-white text-black shadow-sm hover:shadow-md transition flex flex-col"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={3 + index * 0.2}
                >
                  {article.cover && (
                    <Image
                      src={article.cover.url}
                      alt={article.title}
                      width={500}
                      height={300}
                      className="mb-4 object-cover rounded"
                    />
                  )}
                  <h4 className="text-xl font-bold mb-2">{article.title}</h4>
                  <p className="text-[#212121] text-[15px] mb-4">
                    {article.description}
                  </p>

                  {/* Push button to bottom */}
                  <div className="mt-auto">
                    <a
                      href={`/blogs/${article.slug}`}
                      className="relative inline-block px-[24px] py-[12px] 
                                 text-[14px] sm:text-[14px] md:text-[16px] lg:text-[16px] 
                                 xl:text-[16px] 2xl:text-[20px] mt-[16px] font-heading font-bold tracking-wider 
                                 uppercase border-2 border-[#212121] text-white overflow-hidden 
                                 group transition-all duration-500 ease-in-out"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#212121]">
                        Read More →
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
       
       
       
       
    </>
  );
}
