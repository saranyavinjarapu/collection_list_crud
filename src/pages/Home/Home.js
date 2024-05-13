import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Collections from "../../components/Collections/Collections";
import { existingCollectionList } from "../../globals/helpers";
import { CollectionContext } from "../../globals/helpers";

const Home = () => {
  const [collectionList, setCollectionList] = useState([]);

  useEffect(() => {
    setCollectionList(existingCollectionList);
  }, []);

  return (
    <div className={styles.home}>
      <Header></Header>
      <CollectionContext.Provider value={{ collectionList, setCollectionList }}>
        <div className={styles.main}>
          <Navbar></Navbar>
          <Collections></Collections>
        </div>
      </CollectionContext.Provider>
    </div>
  );
};

export default Home;
