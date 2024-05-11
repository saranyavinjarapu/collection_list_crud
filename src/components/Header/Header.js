import React from "react";
import styles from "./Header.module.css";
import revalu_logo from "../../assets/revalu_logo.png";
import header_profile from "../../assets/header_profile.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={revalu_logo} alt="Revalu Header Logo"></img>
      <div className={styles.headerTabs}>
        <a href="#materials">Materials</a>
        <a href="#elements">Elements</a>
        <a href="#projects">Projects</a>
        <a href="#manufacturers">Manufacturers</a>
        <a href="#collections" className={styles.headerTabActive}>
          Collections
        </a>
      </div>
      <img src={header_profile} alt="Header User Icon"></img>
    </header>
  );
};

export default Header;
