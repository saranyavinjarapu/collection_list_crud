import React from "react";
import styles from "./Navbar.module.css";

const NavMenuItem = ({ displayIcon, title, expandIcon }) => {
  return (
    <div className={styles.navHeader}>
      <div className={styles.navHeaderTitle}>
        {displayIcon && (
          <img src={displayIcon} alt="Nav Bar Content Display Icon"></img>
        )}
        {title}
      </div>
      <img src={expandIcon} alt="Nav Bar Expand/Collapse Icon"></img>
    </div>
  );
};

export default NavMenuItem;
