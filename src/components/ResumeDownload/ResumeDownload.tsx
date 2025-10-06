import React from "react";
import styles from "./ResumeDownload.module.scss";
import { resume } from "../../data/resume";

interface Props {
  small?: boolean;
}

const ResumeDownload: React.FC<Props> = ({ small = false }) => {
  // Resolve URL relative to Vite bundler
  // If you keep resume in src/assets/resume/resume.pdf
  const resumeUrl = new URL("../../assets/resume/resume.pdf", import.meta.url)
    .href;

  const onDownload = () => {
    // programmatic download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = resume.fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <button
      className={`${styles.btn} ${small ? styles.small : ""}`}
      onClick={onDownload}
    >
      Download Resume
    </button>
  );
};

export default ResumeDownload;
