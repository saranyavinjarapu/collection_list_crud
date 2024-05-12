import React from "react";
import styles from "./Navbar.module.css";
import down_arrow_icon from "../../assets/down_arrow_icon.png";
import expand_arrow_icon from "../../assets/expand_arrow_icon.png";
import folder_icon from "../../assets/folder_icon.png";
import { menuCollectionList } from "./helpers";
import NavMenuItem from "./NavMenuItem";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavMenuItem
        title="My Collections"
        expandIcon={down_arrow_icon}
      ></NavMenuItem>
      <div className={styles.navContent}>
        {menuCollectionList &&
          menuCollectionList.map((item, index) => (
            <NavMenuItem
              key={index}
              title={item}
              displayIcon={folder_icon}
              expandIcon={expand_arrow_icon}
            ></NavMenuItem>
          ))}
        <hr className={styles.divider}></hr>
        <NavMenuItem
          title="New Collection"
          displayIcon={folder_icon}
          expandIcon={expand_arrow_icon}
        ></NavMenuItem>
      </div>
    </nav>
  );
};

export default Navbar;
