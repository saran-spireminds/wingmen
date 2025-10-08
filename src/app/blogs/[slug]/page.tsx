import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ArticleContentClient from "./ArticleContentClient";

// 🧠 Type for params
interface PageProps {
  params: Promise<{ slug: string }>;
}

// 🏗️ Generate static paths for all markdown files in /content/blogs
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", "blogs");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

// 🚀 The actual blog page
export default async function BlogPage({ params }: PageProps) {
  // ✅ Next.js 15+ params are Promises
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content", "blogs", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return <h1>Article not found</h1>;
  }

  const fileData = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileData);

  const article = {
    title: data.title || "Untitled Article",
    cover: {
      url: data.cover || "/default-cover.jpg",
      formats: {
        large: { url: data.cover || "/default-cover.jpg" },
      },
    },
    blocks: [{ body: content }],
  };

  const coverUrl = data.cover || "/default-cover.jpg";

  return <ArticleContentClient article={article} coverUrl={coverUrl} />;
}
