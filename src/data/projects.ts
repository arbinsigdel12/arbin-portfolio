export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Personal Portfolio",
    description: "Responsive portfolio built with React, TypeScript and Vite.",
    image: "/src/assets/images/portfolio-screenshot.png",
    technologies: ["React", "TypeScript", "Vite", "SCSS"],
    liveUrl: "https://yourdomain.com",
    repoUrl: "https://github.com/yourusername/portfolio",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Task Manager",
    description: "A full-stack task manager with authentication.",
    image: "/src/assets/images/tasks-screenshot.png",
    technologies: ["React", "Node", "Express", "MongoDB"],
    liveUrl: "https://tasks.example.com",
    repoUrl: "https://github.com/yourusername/tasks",
  },
];
