import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import ResumeDownload from "../ResumeDownload/ResumeDownload";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className={styles.navbar}>
      <div className="container">
        <div className={styles.inner}>
          <Link to="/" className={styles.brand}>
            <strong>Arbin</strong>
          </Link>
          <nav className={styles.navlinks}>
            <Link to="/" className={pathname === "/" ? styles.active : ""}>
              Home
            </Link>
            <Link
              to="/about"
              className={pathname === "/about" ? styles.active : ""}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={pathname === "/projects" ? styles.active : ""}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={pathname === "/contact" ? styles.active : ""}
            >
              Contact
            </Link>
            <ResumeDownload small />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
