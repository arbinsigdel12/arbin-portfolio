import React from "react";
import styles from "./Projects.module.scss";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects: React.FC = () => {
  return (
    <section className="container">
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
