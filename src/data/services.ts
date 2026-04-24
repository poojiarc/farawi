import wedding from "@/assets/service-wedding.jpg";
import party from "@/assets/service-party.jpg";
import entertainment from "@/assets/service-entertainment.jpg";
import hospitality from "@/assets/service-hospitality.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "managing-organizing-events",
    title: "Managing & Organizing Events",
    short: "Full-scale event production from concept to curtain call.",
    tagline: "Crafting unforgettable moments with meticulous precision.",
    description:
      "From intimate gatherings to grand celebrations, our team orchestrates every element of your event with absolute precision. We blend creative vision with flawless logistics to deliver experiences that linger long after the last guest departs.",
    image: wedding,
    features: [
      "End-to-end event planning & coordination",
      "Bespoke concept design & theming",
      "Venue selection & styling",
      "Vendor management & negotiation",
      "On-site coordination & guest experience",
      "Budget planning & financial oversight",
    ],
  },
  {
    slug: "organizing-parties",
    title: "Organizing Parties",
    short: "Private celebrations designed to dazzle and delight.",
    tagline: "Where every detail becomes a moment to remember.",
    description:
      "Birthdays, anniversaries, engagements, and private soirées — we design parties that reflect your personality and exceed every expectation. Each celebration is uniquely tailored, blending elegance with energy.",
    image: party,
    features: [
      "Themed party design & decor",
      "Custom invitations & branding",
      "Premium catering coordination",
      "Music, lighting & ambience",
      "Photography & videography",
      "Guest concierge services",
    ],
  },
  {
    slug: "entertainments-parties-services",
    title: "Entertainments & Parties Services",
    short: "World-class entertainment that defines the night.",
    tagline: "Live performances, immersive shows, unforgettable energy.",
    description:
      "We curate breathtaking entertainment experiences featuring international artists, live bands, DJs, dancers, and immersive performances. Every show is choreographed to elevate your event into something extraordinary.",
    image: entertainment,
    features: [
      "Live bands, DJs & solo performers",
      "International artists & celebrity bookings",
      "Choreographed dance performances",
      "Stage design & visual production",
      "Sound, lighting & special effects",
      "Themed entertainment concepts",
    ],
  },
  {
    slug: "hospitality-services",
    title: "Hospitality Services",
    short: "Five-star hospitality that elevates every guest.",
    tagline: "Service so refined, your guests feel like royalty.",
    description:
      "Our hospitality team delivers seamless, intuitive service that anticipates every need. From elegant waitstaff to bespoke catering, we ensure your guests experience true luxury from arrival to farewell.",
    image: hospitality,
    features: [
      "Professional waitstaff & butlers",
      "Bartenders & mixologists",
      "Hostesses & guest concierge",
      "Premium catering partnerships",
      "VIP & protocol services",
      "Multilingual staff available",
    ],
  },
];
