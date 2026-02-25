// my-app/lib/constants.ts

// ================== Image consts (=/public/assets/) ==================
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiVercel,
  SiPostman,
  SiPython,
  SiCplusplus,
  SiNextdotjs,
  SiPostgresql,
  SiRender
} from "react-icons/si";
import { IconType } from "react-icons";

const project1Image = "/assets/megamart.png";
const project2Image = "/assets/MomentShare.png";
const project3Image = "/assets/urbanstay.png";
const project4Image = "/assets/civic_resolve.png";

const githubIcon ="/assets/github.png";
const linkedinIcon ="/assets/linkedin.png";
const profilePic ="/assets/anurag-prof.png";

// Leetcode
const leetCodeProfilePic = "/assets/Leetcode/leetcode-profile.png";
const badge100 = "/assets/Leetcode/2025-100-days.gif";
const badgeAnnual = "/assets/Leetcode/2025-50-days.gif";
const badgeAnother = "/assets/Leetcode/2024-100-days.gif";
const badgeFourth = "/assets/Leetcode/2024-50-days.gif";

// ================== Types ==================

export interface TagType {
  name: string;
  color: string;
}

export interface ProjectType {
  name: string;
  description: string;
  tags: TagType[];
  image: string;
  source_code_link: string;
}
export interface Technology {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  title: string;
  technologies: Technology[];
}

// ================== Nav Links ==================
export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "leetcode", title: "LeetCode" },
  { id: "achievements", title: "Achievements" },
  { id: "collaboration", title: "Collaboration" },
  { id: "contact", title: "Contact" },
];

// ================== Hero Section ==================

export const hero = {
  name: "Anurag Singh",
  tagline:
    "MERN Stack Developer building efficient, user-centric web applications.",
  profilePic,
  leetcodeLink: "https://leetcode.com/Anuragsingh_123",
  resumeLink: "/Anuragsingh_Resume (1).pdf",
};

// ================== About Section ==================
export const aboutSection = {
  introduction: "Introduction",
  overview: "Overview.",
  text: "A MERN Stack Developer and Computer Science student at MAIT with expertise in React, Node.js, and MongoDB, complemented by a strong foundation in DSA.",

  education: {
    institution: "Maharaja Agrasen Institute of Technology, Delhi",
    degree: "B.Tech in Computer Science",
    gpa: "CGPA: 7.8",
    years: "2023–2026",
    coursework: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
    ],
  },
};

// ================== Technical Skills ==================
export const skills: SkillCategory[] = [
  {
    title: "Frontend Technologies",
    technologies: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend Technologies & Databases",
    technologies: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      
    ],
  },
  {
    title: "Programming Languages",
    technologies: [
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
    ],
  },
  {
    title: "Tools",
    technologies: [
      { name: "Git & GitHub", icon: FaGitAlt },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Render", icon: SiRender },
    ],
  },
];
// ================== Projects ==================

export const projects: ProjectType[] = [
  {
    name: "UrbanStay – Hotel booking system",
    description:
      "🏨 Full-stack hotel booking platform built with React, TypeScript, Express & MongoDB. Features user authentication, hotel search, booking management, and admin analytics dashboard.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "nodejs", color: "text-green-500" },
      { name: "express", color: "text-yellow-500" },
      { name: "mongodb", color: "text-green-600" },
      { name: "typescript", color: "text-yellow-400" },
      { name: "tailwind", color: "text-cyan-500" },
    ],
    image: project3Image,
    source_code_link: "https://urban-stay-smoky.vercel.app/",
  },
  {
    name: "Civic Resolve – Issue Management Platform",
    description:
      "A full-stack platform for citizens to report issues, track status, and help authorities manage tasks with geotagging and real-time updates.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "nodejs", color: "text-green-500" },
      { name: "express", color: "text-yellow-500" },
      { name: "mongodb", color: "text-green-600" },
      { name: "tailwind", color: "text-cyan-500" },
      { name: "typescript", color: "text-yellow-500" },
    ],
    image: project4Image,
    source_code_link: "https://civic-resolve-ebon.vercel.app/",
  },
  {
    name: "Moment Share – Social Media Platform",
    description:
      "A social media platform with authentication, posts, likes, comments, and real-time updates built using MERN.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "nodejs", color: "text-green-500" },
      { name: "express", color: "text-yellow-500" },
      { name: "mongodb", color: "text-green-600" },
      { name: "tailwind", color: "text-cyan-500" },
      { name: "javascript", color: "text-yellow-500" },
    ],
    image: project2Image,
    source_code_link: "https://moment-share-beta.vercel.app/",
  },
  {
    name: "MegaMart – Full-Stack E-commerce",
    description:
      "A complete MERN e-commerce app with authentication, product catalog, cart system, and admin features.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "nodejs", color: "text-green-500" },
      { name: "express", color: "text-yellow-500" },
      { name: "mongodb", color: "text-green-600" },
      { name: "tailwind", color: "text-cyan-500" },
      { name: "javascript", color: "text-yellow-500" },
    ],
    image: project1Image,
    source_code_link:
      "https://github.com/Singhanurag45/MegaMart_Ecommerce_Website",
  },
];

// ================== LeetCode Stats ==================

export const leetCodeStats = {
  profilePic: leetCodeProfilePic,
  username: "Anurag Singh",
  handle: "Anuragsingh_123",
  rank: "257,828",

  solvedProblems: {
    total: 400,
    easy: "225/913",
    medium: "159/1951",
    hard: "16/885",
    totalAvailable: 3749,
  },

  badges: [
    { id: 1, image: badge100, name: "100 Days Badge 2025" },
    { id: 2, image: badgeAnnual, name: "Annual Badge 2025" },
    { id: 3, image: badgeAnother, name: "Another Badge" },
    { id: 4, image: badgeFourth, name: "Fourth Badge" },
  ],

  submissionsPastYear: 558,
  totalActiveDays: 184,
  maxStreak: 33,
};

// ================== Achievements ==================

export const achievements = [
  {
    title: "Solved 500+ Data Structures & Algorithms Problems",
    description: "Solved 400 problems on LeetCode and 100+ problems on GeeksforGeeks.",
    link: "https://leetcode.com/Anuragsingh_123/",
  },
  {
    title: "Finalist — BUILD WARS Hackathon",
    description: "Collaborated in a team of 4 to build an innovative project under time constraints.",
    link: "https://drive.google.com/file/d/1GCrv4DYGOFj0xgO8nqBbWuGGWJxf-NEI/view",
  },
  {
    title: "Secured AIR 30 (Top 2%) in IPU-LEET 2023",
    description: "Demonstrated strong analytical and academic excellence.",
    link: "https://drive.google.com/file/d/15EmEZv7wtEYqHnw3S7MHz6ba1LcbVLHB/view",
  },
  {
    title: "Full-Stack Web Development Course — Udemy",
    description: "Completed a comprehensive full-stack web development course by Hitesh Choudhary.",
    link: "https://www.udemy.com/certificate/UC-4725a447-f532-4b01-92ac-bfe165521573/",
  },
  {
    title: "Data Structures & Algorithms using C++ with System Design — Coding Blocks",
    description: "Earned a Certificate of Excellence for outstanding performance.",
    link: "https://drive.google.com/file/d/1KRoKcUOVNWtpJQyhAoAV7UPoE7eW6z5M/view",
  },
];