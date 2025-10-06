import React from "react";
import styles from "./Home.module.scss";
import ResumeDownload from "../../components/ResumeDownload/ResumeDownload";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <h1>Hi, I'm Arbin — Frontend Developer</h1>
            <p>
              I build accessible, performant web apps using React and
              TypeScript. Currently working on open-source projects and
              improving UX on the web.
            </p>
            <div className={styles.cta}>
              <ResumeDownload />
              <Link to="/projects" className={styles.linkBtn}>
                See Projects
              </Link>
            </div>
          </div>
          <div className={styles.visual}>
            <img
              src={
                new URL(
                  "../../assets/images/hero-placeholder.png",
                  import.meta.url
                ).href
              }
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
