import { Skill, Project } from "@/types/types";

export const skills: Skill[] = [
  {
    title: "Frontend",
    tech: ["JavaScript", "TypeScript", "React.js", "Tailwind", "CSS"],
    data: "I build dynamic, responsive UIs using JavaScript and TypeScript, with React for reusable components and Tailwind for fast, modern designs. Focused on seamless user experiences and performance.",
  },
  {
    title: "Backend",
    tech: ["Python", "Django", "Flask", "SQL", "NoSQL"],
    data: "I develop scalable server-side apps with Python, using Django and Flask for secure APIs. Experienced with both SQL and NoSQL databases to design efficient data models.",
  },
  {
    title: "DevOps",
    tech: ["AWS", "Docker", "Terraform", "Jenkins", "Git"],
    data: "I automate cloud infrastructure with AWS and Terraform, containerize apps with Docker, and set up CI/CD pipelines with Jenkins. Proficient in Git for version control and collaboration.",
  },
];

export const projects: Project[] = [
  {
    name: "Retro Chat",
    tech: [
      "React",
      "Django",
      "Postgres",
      "Docker",
      "Tailwind",
      "JavaScript",
      "Django Channels",
    ],
    info: "This project is a real-time chat application that combines a robust Django Channels and PostgreSQL backend with a modern React, Tailwind CSS, ShadCN, TypeScript, and Vite frontend. It supports one-on-one and group chats with seamless real-time communication, user notifications, and an admin interface for managing users and chat rooms. The frontend offers a clean, responsive design with fast performance and real-time updates, making the platform ideal for efficient and engaging communication.",
    link: "https://github.com/Psudopodiya/Retro-Chat",
    repository_link: "https://github.com/Psudopodiya/Retro-Chat",
  },

  {
    name: "Retro Chat",
    tech: [
      "React",
      "Tailwind",
      "JavaScript",
      "3js",
      "react-three",
      "Zustand",
      "TypeScript",
    ],
    info: "This project is a demonstration for the 3js website that functions and can be used as a landing page for other websites, serving as an interactive way for users to use them an guide around ",
    link: "https://landing-page-gamma-liard-58.vercel.app/",
    repository_link: "https://github.com/Psudopodiya/3js-COE",
  },
];
