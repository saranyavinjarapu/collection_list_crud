import React from "react";
import styles from "./Navbar.module.css";
import down_arrow_icon from "../../assets/down_arrow_icon.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navHeader}>
        <div className={styles.navHeaderTitle}>My Collection</div>
        <img src={down_arrow_icon} alt="Nav Bar Expand Icon"></img>
      </div>
    </nav>
  );
};

export default Navbar;
