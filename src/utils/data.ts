import { Skill, Project } from "@/types/types";

export const skills: Skill[] = [
  {
    title: "Frontend",
    tech: ["JavaScript", "TypeScript", "React.js", "Tailwind", "CSS"],
    data: "I love working with creative designs to bring out the best dynamic interfaces from scratch",
  },
  {
    title: "Backend",
    tech: ["Python", "Django", "Flask", "SQL", "NoSQL"],
    data: "I love working with creative designs to bring out the best dynamic interfaces from scratch",
  },
  {
    title: "DevOps",
    tech: ["AWS", "Docker", "Terraform", "Jenkins", "Git"],
    data: "I love working with creative designs to bring out the best dynamic interfaces from scratch",
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
  },
];
