import React from "react";
import { FaGraduationCap, FaLaptopCode, FaBriefcase } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Student",
    location: "Ateneo de Davao University, Davao City",
    description:
      "Currently a 4th year student pursuing a Bachelor of Science in Computer Science. Gaining a solid foundation in algorithms, data structures, and software development principles.",
    icon: React.createElement(FaGraduationCap),
    date: "Expected Graduation: 2025",
  },
  {
    title: "Backend Developer - Samahan Systems Development",
    location: "Ateneo de Davao University, Davao City",
    description:
      "Actively contributing to the development of backend systems as a member of Samahan Systems Development. Working with technologies like React, Typescript, Node.js, Express, and MySQL to build robust APIs.",
    icon: React.createElement(FaLaptopCode),
    date: "June 2023 - Present",
  },
  {
    title: "Software Engineer Intern - Orange & Bronze Software Labs",
    location: "Legaspi Village, Makati City",
    description:
      "Interning at Orange & Bronze Software Labs, focusing on Java, gaining practical experience in software engineering. Working with a team of professionals to deliver high-quality software solutions.",
    icon: React.createElement(FaBriefcase),
    date: "June 2024 - Present",
  },
] as const;


export const projectsData = [
  {
    title: "NeverForEver E-commerce",
    description:
      "I worked as a backend developer on this  project for a Software Engineering course for 5 months. It is a full-stack web application designed for online shopping. It features a front-end built with React and a back-end powered by Node.js, Express, and MySQL. The application allows users to register and login, browse products, add items to their cart, and make purchases.",
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    // imageUrl: 
  },
  {
    title: "NeverForEver Admin",
    description:
      "I worked as a fullstack developer on this  project for a Software Engineering course for 5 months. It is the administrative interface for the Neverforever E-commerce platform. It is an application designed for managing products, orders, suppliers, and users within the Neverforever E-commerce system. The front-end is built with React, and the back-end is powered by Node.js, Express, and MySQL.",
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    // imageUrl: 
  },

  {
    title: "All Bookstore",
    description:
      "A full-stack web application designed to revolutionize how people interact with online bookstores and libraries. It seamlessly integrates a user-friendly interface with powerful backend functionality to ensure efficient book tracking and user interaction. ALL Bookstore promises to be a go-to platform in providing an enriching experience for book enthusiasts and knowledge seekers alike.",
    tags: ["React", "Python", "Django", "PostgreSQL", "Tailwind", "REST"],
  },
  // imageUrl: 
] as const;

export const skillsData = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;