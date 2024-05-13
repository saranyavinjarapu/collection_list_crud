import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Collections from "../../components/Collections/Collections";
import { existingCollectionList } from "../../globals/helpers";
import { CollectionContext } from "../../globals/helpers";
import AddCollectionModal from "../../components/CollectionModal/AddCollectionModal";

const Home = () => {
  const [collectionList, setCollectionList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setCollectionList(existingCollectionList);
  }, []);

  return (
    <div className={styles.home}>
      <Header></Header>
      <CollectionContext.Provider
        value={{
          collectionList,
          setCollectionList,
          isModalOpen,
          setIsModalOpen,
        }}
      >
        <div className={styles.main}>
          <Navbar></Navbar>
          <Collections></Collections>
        </div>
        {isModalOpen && <AddCollectionModal />}
      </CollectionContext.Provider>
    </div>
  );
};

export default Home;
