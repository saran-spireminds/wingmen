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
}

export default function ResourcesClient() {
  const [knowledgeBaseArticles, setKnowledgeBaseArticles] = useState<Article[]>([]);
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
  ? { url: item.cover.url.startsWith('http') ? item.cover.url : `${STRAPI_URL}${item.cover.url}` }
  : undefined
        }));

        setKnowledgeBaseArticles(articles);
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
      <section className="relative w-full md:h-screen md:overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/BG_volunteer.jpg"
            alt="Knowledge Base Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#212121] opacity-50"></div>
        </div>

        <div
          className="relative z-10 flex flex-col justify-center md:h-full
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px]
                     xl:px-[80px] 2xl:px-[120px]
                     text-white text-left
                     max-w-[450px] sm:max-w-[720px] md:max-w-[800px]
                     lg:max-w-[800px] xl:max-w-[800px] 2xl:max-w-[1250px]"
        >
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

          <div className="grid md:grid-cols-2 gap-8">
            {knowledgeBaseArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className="p-6 border rounded-lg bg-white text-black shadow-sm hover:shadow-md transition"
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
                <h4 className="text-xl font-semibold mb-2">{article.title}</h4>
                <p className="text-gray-700 mb-4">{article.description}</p>
                <a
                  href={`/knowledge-base/${article.slug}`}
                  className="text-[#212121] font-medium underline"
                >
                  Read More →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* KNOWLEDGE BASE SECTION */}
      <section className="relative w-full md:h-screen md:overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/BG_volunteer.jpg"
            alt="Knowledge Base Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#212121] opacity-50"></div>
        </div>

        <div
          className="relative z-10 flex flex-col justify-center md:h-full
                     px-[16px] sm:px-[32px] md:px-[48px] lg:px-[64px]
                     xl:px-[80px] 2xl:px-[120px]
                     text-white text-left
                     max-w-[450px] sm:max-w-[720px] md:max-w-[800px]
                     lg:max-w-[800px] xl:max-w-[800px] 2xl:max-w-[1250px]"
        >
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

          <div className="grid md:grid-cols-2 gap-8">
            {knowledgeBaseArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className="p-6 border rounded-lg bg-white text-black shadow-sm hover:shadow-md transition"
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
                <h4 className="text-xl font-semibold mb-2">{article.title}</h4>
                <p className="text-gray-700 mb-4">{article.description}</p>
                <a
                  href={`/knowledge-base/${article.slug}`}
                  className="text-[#212121] font-medium underline"
                >
                  Read More →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS SECTION */}
      {/* ...keep your blogs section unchanged... */}
    </>
  );
}
