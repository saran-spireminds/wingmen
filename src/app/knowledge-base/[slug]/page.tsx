import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ArticleContentClient from "./ArticleContentClient";

// 🧱 Optional type for clarity
type KnowledgeBasePageProps = {
  params: { slug: string };
};

// 🏗️ Tell Next.js to statically generate one page per .mdx file
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", "knowledge-base");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

// 🚀 The main article page
export default async function KnowledgeBasePage({ params }: KnowledgeBasePageProps) {
  const { slug } = params;

  // 🧭 Locate your markdown file
  const filePath = path.join(process.cwd(), "content", "knowledge-base", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return <h1>Article not found</h1>;
  }

  // 📖 Read and parse the MDX file
  const fileData = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileData);

  // 🧠 Shape the article object as your UI expects
  const article = {
    title: data.title || "Untitled Article",
    cover: {
      url: data.cover || "/default-cover.jpg",
      formats: { large: { url: data.cover || "/default-cover.jpg" } },
    },
    blocks: [{ body: content }],
  };

  const coverUrl = data.cover || "/default-cover.jpg";

  // 🎨 Pass it to your existing client component (UI stays the same)
  return <ArticleContentClient article={article} coverUrl={coverUrl} />;
}
