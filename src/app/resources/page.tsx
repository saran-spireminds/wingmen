import ResourcesClient from "./ResourcesClient";

// Example local MDX articles
const localArticles = [
  {
    id: "1",
    title: "HOW CAN I HELP SOMEONE THAT IS IN NEED?",
    description: "A Q&A-style guide offering practical advice on how to support someone who may be struggling or in crisis.",
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
  {
    id: "3",
    title: "WHAT IS DEPRESSION?",
    description: "An article exploring what depression really means, its symptoms, and how to help someone experiencing it.",
    slug: "what-is-depression",
    cover: { url: "/partner-wingmen.jpg" },
  },
];

// Example local MDX articles
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
    title: "MEN'S MENTAL HEALTH IS NO LONGER STIGMATISED",
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
  {
    id: "104",
    title: "WHY BOTHER TALKING? A PERSONAL OPINION",
    description: "A personal reflection on why talking and being listened to can be a powerful part of understanding ourselves and making a recovery.",
    slug: "why-bother-talking-a-personal-opinion",
    cover: { url: "/volunteer-with-wingmen.jpg" },
  },
];

export default function ResourcesPage() {
  return <ResourcesClient localArticles={localArticles} blogArticles={blogArticles} />;
}
