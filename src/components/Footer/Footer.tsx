import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div>© {year} Arbin Sigdel. All rights reserved.</div>
          <div>
            Built with <span>React</span> + <span>TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
