import React, { useContext } from "react";
import styles from "./CollectionDetail.module.css";
import CollectionDetailItem from "./CollectionDetailItem";
import add_collection_icon from "../../assets/add_collection.png";
import { CollectionContext } from "../../globals/helpers";

const CollectionDetail = () => {
  const { collectionList, setIsModalOpen } = useContext(CollectionContext);
  return (
    <div className={styles.collectionDetailMain}>
      {collectionList.map((item, index) => (
        <CollectionDetailItem
          key={index}
          title={item.title}
          description={item.description}
          stats={item.stats}
        ></CollectionDetailItem>
      ))}
      <div className={styles.addCollectionItem}>
        <img
          src={add_collection_icon}
          alt="add new collection item"
          onClick={() => setIsModalOpen(true)}
        ></img>
      </div>
    </div>
  );
};

export default CollectionDetail;
