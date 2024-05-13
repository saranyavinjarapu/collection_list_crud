import React from "react";
import styles from "./Navbar.module.css";
import expander_arrow_icon from "../../assets/expander_arrow.png";
import open_arrow_icon from "../../assets/open_arrow.png";
import collection_icon from "../../assets/collection.png";
import new_collection_icon from "../../assets/new_collection.png";
import { menuCollectionList } from "./helpers";
import NavMenuItem from "./NavMenuItem";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavMenuItem
        title="My Collections"
        expandIcon={expander_arrow_icon}
      ></NavMenuItem>
      <div className={styles.navContent}>
        {menuCollectionList &&
          menuCollectionList.map((item, index) => (
            <NavMenuItem
              key={index}
              title={item}
              displayIcon={collection_icon}
              expandIcon={open_arrow_icon}
            ></NavMenuItem>
          ))}
        <hr className={styles.divider}></hr>
        <NavMenuItem
          title="New Collection"
          displayIcon={new_collection_icon}
        ></NavMenuItem>
      </div>
    </nav>
  );
};

export default Navbar;
