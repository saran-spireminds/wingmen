import ResourcesClient from "./ResourcesClient";

// Example local MDX articles
const localArticles = [
  {
    id: "1",
    title: "HOW CAN I HELP SOMEONE THAT IS IN NEED?",
    description: "Please note that what follows is subjective advice, and is to be taken as a simple guide if you are concerned about someone you know. We have arranged this article as a Q&A in order to make it easy for you to find the right information for your circumstance.",
    slug: "how-can-i-help-someone-in-need",
    cover: { url: "/mental-health-partners.jpg" },
  },
  {
    id: "2",
    title: "WHAT IS ANXIETY",
    description: "An honest look at the symptoms, causes, and ways to ease anxiety, written from personal experience.",
    slug: "what-is-anxiety",
    cover: { url: "/who-we-are.jpg" },
  },
];

// Example blogs (from Strapi or static for now)
const blogArticles = [
  {
    id: "101",
    title: "Importance of Sleep",
    description: "How sleep impacts mental health.",
    slug: "importance-of-sleep",
    cover: { url: "/blog-cover-1.jpg" },
  },
];

export default function ResourcesPage() {
  return <ResourcesClient localArticles={localArticles} blogArticles={blogArticles} />;
}
