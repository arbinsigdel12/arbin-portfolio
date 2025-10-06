import React from "react";
import styles from "./About.module.scss";

const About: React.FC = () => {
  return (
    <section className="container">
      <div className={styles.wrap}>
        <div className={styles.left}>
          <h2>About Me</h2>
          <p>
            I’m a frontend developer from Nepal who loves building performant
            user interfaces — especially with React + TypeScript.
          </p>
          <h3>Skills</h3>
          <ul className={styles.skills}>
            <li>React</li>
            <li>TypeScript</li>
            <li>SCSS / CSS Architecture</li>
            <li>Testing / CI</li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.card}>
            <img
              src={
                new URL("../../assets/images/profile.jpg", import.meta.url).href
              }
              alt="profile"
            />
            <div className={styles.meta}>
              <h4>Arbin Sigdel</h4>
              <p>Frontend Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
