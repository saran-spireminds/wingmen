"use client";

import Image from "next/image";
import { motion, Variants, Transition } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ease: [number, number, number, number] = [0.43, 0.13, 0.23, 0.96];

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

// Define proper types instead of any
type ArticleBlock = {
  body: string;
};

type Article = {
  title: string;
  cover?: {
    url?: string;
    formats?: {
      large?: { url: string };
    };
  };
  blocks?: ArticleBlock[];
};

type ArticleContentClientProps = {
  article: Article;
  coverUrl: string;
};

export default function ArticleContentClient({ article }: ArticleContentClientProps) {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-135 2xl:h-250 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src={article.cover?.formats?.large?.url || article.cover?.url || "/default-cover.jpg"}
            alt={article.title ?? "Article Cover"}
            fill
            priority
            className="object-cover object-top md:object-top"
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

      {/* ARTICLE SECTION */}
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
          {/* Article Title */}
          <motion.h2
            className="text-[28px] md:text-[36px] xl:text-[60px] 2xl:text-[100px] font-extrabold antialiased tracking-tight uppercase mb-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={1}
          >
            {article.title}
          </motion.h2>

          {/* Article Content */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={2}
          >
            {article.blocks?.length ? (
              <div className="space-y-6">
                {article.blocks.map((block: ArticleBlock, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    custom={index + 2}
                  >
                    <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{
    p: ({ children }) => (
      <p
        className="mb-4 text-[15px] sm:text-[15px] md:text-[15px]
                   lg:text-[15px] xl:text-[15px] 2xl:text-[27px]
                   font-light leading-relaxed tracking-[0.5px]"
      >
        {children}
      </p>
    ),
    ul: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
    li: ({ children }) => <li className="font-light ml-4">{children}</li>,
    h1: ({ children }) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-bold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold mb-2">{children}</h3>,
    a: ({ children, href }) => (
      <a href={href} className="font-bold underline text-[#212121]">
        {children}
      </a>
    ),
  }}
>
  {block.body}
</ReactMarkdown>


                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-[15px] sm:text-[15px] md:text-[15px]
                            lg:text-[15px] xl:text-[15px] 2xl:text-[27px]
                            mb-[24px] font-light text-justify
                            leading-relaxed tracking-[0.5px]">
                No content found
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
