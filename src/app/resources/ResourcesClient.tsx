'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, Variants, Transition } from "framer-motion";

// Animation easing
const ease: [number, number, number, number] = [0.43, 0.13, 0.23, 0.96];

// Motion variants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease } as Transition,
  }),
};

interface Article {
  id: number;
  title: string;
  description: string;
  slug: string;
  cover?: { url: string };
}

export default function ResourcesClient() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, ""); // remove trailing slash

  useEffect(() => {
    if (!STRAPI_URL) {
      console.error("NEXT_PUBLIC_STRAPI_URL is not set!");
      return;
    }

    const fetchArticles = async () => {
      try {
        const res = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
        const data = await res.json();

        if (!data?.data) {
          console.error("No articles returned from Strapi:", data);
          setArticles([]);
          return;
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mappedArticles: Article[] = data.data.map((item: any) => ({
          id: item.id,
          title: item.title || "No Title",
          description: item.description || "",
          slug: item.slug || "",
          cover: item.cover?.url
            ? { url: item.cover.url.startsWith("http") ? item.cover.url : `${STRAPI_URL}${item.cover.url}` }
            : undefined,
        }));

        setArticles(mappedArticles);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [STRAPI_URL]);

  if (loading) return <p className="text-center mt-8">Loading articles...</p>;
  if (!articles.length) return <p className="text-center mt-8">No articles available.</p>;

  return (
    <section className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-12">
      {articles.map((article, index) => (
        <motion.div
          key={article.id}
          className="p-6 border rounded-lg bg-white text-black shadow-sm hover:shadow-md transition"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
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
          {article.slug && (
            <a
              href={`/knowledge-base/${article.slug}`}
              className="text-[#212121] font-medium underline"
            >
              Read More →
            </a>
          )}
        </motion.div>
      ))}
    </section>
  );
}
