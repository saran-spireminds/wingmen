import ArticleContentClient from "./ArticleContentClient";

type KnowledgeBasePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function KnowledgeBaseArticle({ params }: KnowledgeBasePageProps) {
  const { slug } = await params;

  const base = process.env.NEXT_PUBLIC_STRAPI_URL;
  const url = `${base}/api/articles?filters[slug][$eq]=${encodeURIComponent(
    slug
  )}&populate=*`;

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

  if (!data?.data || data.data.length === 0) {
    return <h1>No article found for slug: {slug}</h1>;
  }

  const article = data.data[0];

  // Get cover image URL (prepend base URL if relative)
  const coverUrl =
    article.coverImage?.data?.attributes?.url
      ? `${base}${article.coverImage.data.attributes.url}`
      : "/default-cover.jpg";

  return <ArticleContentClient article={article} coverUrl={coverUrl} />;
}
