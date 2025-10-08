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
    title: "LESSONS FROM JUDO: VULNERABILITY CAN BE A SIGN OF MENTAL STRENGTH",
    description: "In this article we see how it is possible to turn a perceived weakness into a mental strength.",
    slug: "lessons-from-judo-vulnerability-can-be-a-sign-of-mental-strength",
    cover: { url: "/Partners.jpg" },
  },
   {
    id: "102",
    title: "MEN’S MENTAL HEALTH IS NO LONGER STIGMATISED",
    description: "Exploring how men’s mental health has evolved from stigma and silence to openness and support.",
    slug: "mens-mental-health-is-no-longer-stigmatised",
    cover: { url: "/mental-health.jpg" },
  },
  {
    id: "103",
    title: "NEW ANNOUNCEMENT: THE NATIONAL SUICIDE PREVENTION STRATEGY",
    description: "A summary and reflection on the UK’s new national suicide prevention strategy and Wingmen’s perspective on its impact.",
    slug: "new-announcement-the-national-suicide-prevention-strategy",
    cover: { url: "/national-suicide-prevention.jpg" },
  },
];

export default function ResourcesPage() {
  return <ResourcesClient localArticles={localArticles} blogArticles={blogArticles} />;
}
