import React from "react";
import styles from "./CollectionDetail.module.css";
import CollectionDetailItem from "./CollectionDetailItem";
import { collectionsList } from "./helpers";
import add_collection_icon from "../../assets/add_collection.png";

const CollectionDetail = () => {
  return (
    <div className={styles.collectionDetailMain}>
      {collectionsList.map((item, index) => (
        <CollectionDetailItem
          key={index}
          title={item.title}
          description={item.description}
          stats={item.stats}
        ></CollectionDetailItem>
      ))}
      <div className={styles.addCollectionItem}>
        <img src={add_collection_icon} alt="add new collection item"></img>
      </div>
    </div>
  );
};

export default CollectionDetail;
