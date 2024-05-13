import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Collections from "../../components/Collections/Collections";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header></Header>
      <div className={styles.main}>
        <Navbar></Navbar>
        <Collections></Collections>
      </div>
    </div>
  );
};

export default Home;
