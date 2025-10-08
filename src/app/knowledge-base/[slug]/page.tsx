import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ArticleContentClient from "./ArticleContentClient";

type KnowledgeBasePageProps = {
  params: { slug: string };
};

// Generate one page per markdown file
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", "knowledge-base");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }));
}

export default async function KnowledgeBaseArticle({ params }: KnowledgeBasePageProps) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "content", "knowledge-base", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return <h1>Article not found</h1>;
  }

  const fileData = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileData);

  const article = {
    title: data.title,
    cover: {
      url: data.cover,
      formats: { large: { url: data.cover } },
    },
    blocks: [{ body: content }],
  };

  const coverUrl = data.cover || "/default-cover.jpg";

  return <ArticleContentClient article={article} coverUrl={coverUrl} />;
}
