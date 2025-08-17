'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, Variants, Transition } from "framer-motion";

// Easing
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

// Article type
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

        if (!data.data) {
          console.warn("No articles found or permission issue");
          setKnowledgeBaseArticles([]);
          return;
        }

        const articles: Article[] = data.data.map((item: any) => {
          let coverUrl = undefined;

          if (item.cover) {
            // Use full URL if present, otherwise prepend STRAPI_URL
            coverUrl = item.cover.url.startsWith('http')
              ? item.cover.url
              : `${STRAPI_URL}${item.cover.url}`;
          }

          return {
            id: item.id,
            title: item.title,
            description: item.description,
            slug: item.slug,
            cover: coverUrl ? { url: coverUrl } : undefined,
          };
        });

        setKnowledgeBaseArticles(articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [STRAPI_URL]);

  return (
    <section className="relative w-full md:h-screen bg-[#FFFEED] md:overflow-hidden">
      <div className="relative z-10 max-w-[1250px] mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-6">Knowledge Base</h2>
        {knowledgeBaseArticles.length === 0 ? (
          <p>No articles available</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {knowledgeBaseArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className="p-6 border rounded-lg bg-white text-black shadow-sm hover:shadow-md transition"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.2}
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
        )}
      </div>
    </section>
  );
}
