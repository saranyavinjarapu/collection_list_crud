import React from "react";
import styles from "./Navbar.module.css";
import down_arrow_icon from "../../assets/down_arrow_icon.png";
import folder_icon from "../../assets/folder_icon.png";
import NavMenuItem from "./NavMenuItem";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavMenuItem
        title="My Collection"
        expandIcon={down_arrow_icon}
      ></NavMenuItem>
      <div className={styles.navContent}>
        <NavMenuItem
          title="My Collection"
          displayIcon={folder_icon}
          expandIcon={down_arrow_icon}
        ></NavMenuItem>
        <NavMenuItem
          title="My Collection"
          displayIcon={folder_icon}
          expandIcon={down_arrow_icon}
        ></NavMenuItem>
      </div>
    </nav>
  );
};

export default Navbar;
