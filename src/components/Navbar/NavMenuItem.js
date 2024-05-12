import React from "react";
import styles from "./Navbar.module.css";

const NavMenuItem = ({ displayIcon, title, expandIcon }) => {
  return (
    <div className={styles.navMenuItem}>
      <div className={styles.navMenuItemName}>
        {displayIcon && (
          <img src={displayIcon} alt="Nav Bar Content Display Icon"></img>
        )}
        {title}
      </div>
      {expandIcon && (
        <img src={expandIcon} alt="Nav Bar Expand/Collapse Icon"></img>
      )}
    </div>
  );
};

export default NavMenuItem;
