import React from "react";
import styles from "./ProjectCard.module.scss";
import type { Project } from "../../data/projects";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  // Resolve image path for Vite (if images are local)
  // If using local assets with relative path in project.image, transform:
  let imgSrc = project.image;
  if (project.image.startsWith("/src/")) {
    imgSrc = new URL(
      `../../${project.image.replace(/^\/src\//, "")}`,
      import.meta.url
    ).href;
  }

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={imgSrc} alt={`${project.title} screenshot`} />
      </div>
      <div className={styles.body}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.tech}>
          {project.technologies.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
        <div className={styles.actions}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
