import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header></Header>
      <div className={styles.main}>
        <nav>navbar menu</nav>
        <div>collection</div>
      </div>
    </div>
  );
};

export default Home;
