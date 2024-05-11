import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div>Header</div>
      <div className={styles.main}>
        <nav>navbar menu</nav>
        <div>collection</div>
      </div>
    </div>
  );
};

export default Home;
