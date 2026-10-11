export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  source: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Chatterra",
    tagline: "Reddit-like social platform",
    description:
      "A full-stack community platform with Google, GitHub, and email authentication. Supports posts, communities, threaded comments, voting, search, user profiles, and image uploads. Built on Supabase with Row Level Security and database functions to enforce access rules and application logic.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "TanStack Query",
    ],
    source: "https://github.com/hlakokabelo/Chatterra-social-media-app",
    live: "https://chatterra.vercel.app",
    featured: true,
  },
  {
    name: "Photos Clone API",
    tagline: "Java Spring Boot REST API",
    description:
      "A REST API for uploading, searching, downloading, and deleting photos, built with Java 21 and Spring Boot 4. Implements JWT authentication with Spring Security and BCrypt password hashing, persists data with Spring Data JDBC on Neon PostgreSQL, and is containerised with Docker. Includes GitHub Actions for Gradle builds and Swagger UI documentation.",
    stack: [
      "Java 21",
      "Spring Boot 4",
      "Spring Security",
      "Spring Data JDBC",
      "PostgreSQL",
      "Docker",
      "Gradle",
      "GitHub Actions",
    ],
    source: "https://github.com/hlakokabelo/photos-clone-api",
    live: "https://photos-clone-api.onrender.com/api",
    featured: true,
  },
  {
    name: "Trimzo",
    tagline: "Full-stack URL shortener",
    description:
      "A full-stack URL shortener with JWT authentication and protected API endpoints. Users can create and manage shortened links through the web interface, while the REST API returns structured JSON responses. MongoDB data is modelled and queried with Mongoose.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Zustand",
      "TanStack Query",
    ],
    source: "https://github.com/hlakokabelo/Trimzo",
    live: "https://trimzo.vercel.app",
    featured: true,
  },
  {
    name: "Movie List API",
    tagline: "RESTful API for movie data",
    description:
      "A RESTful API for managing movie data with authentication, validation, search, and filtering. Built with Node.js and Express using Prisma for data modelling and PostgreSQL for persistent storage, with structured JSON responses and a clean project architecture.",
    stack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "REST API",
      "Zod",
      "JWT",
    ],
    source: "https://github.com/hlakokabelo/movie-list-api",
    live: "https://movie-list-api-z4dh.onrender.com/api",
    featured: true,
  },
  {
    name: "JobScout",
    tagline: "Job search utility",
    description:
      "A React and TypeScript application that generates targeted job-search URLs across major South African employment platforms. Handles input parsing, deduplication, URL encoding, platform-specific queries, and persistent search settings stored in the browser.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    source: "https://github.com/hlakokabelo/JobScout",
    live: "https://jobscout-za.vercel.app",
    featured: true,
  },
  {
    name: "Vitest Practice",
    tagline: "Component testing playground",
    description:
      "A small React project built to practise component testing with Vitest and React Testing Library. Covers role-based queries, user-event interactions, async fetch mocking, and edge-case handling across a set of intentionally simple components.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Vitest",
      "React Testing Library",
      "jsdom",
    ],
    source: "https://github.com/hlakokabelo/Vitest-Practice",
    featured: true,
    live: "https://vitest-practice-two.vercel.app",
  },
  {
    name: "SYNAT Tutors",
    tagline: "Academic group project",
    description:
      "A cross-platform mobile and web application built as a university group project. Contributed features for accessing courses, assignments, and academic content, and collaborated with the team to deliver a functional learning platform.",
    stack: ["Cross-platform mobile/web"],
    source: "https://github.com/hlakokabelo",
    featured: false,
  },
];
