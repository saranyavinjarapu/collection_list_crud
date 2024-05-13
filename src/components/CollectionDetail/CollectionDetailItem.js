import React from "react";
import styles from "./CollectionDetail.module.css";
import download_icon from "../../assets/download.png";
import box_icon from "../../assets/box.png";
import delete_icon from "../../assets/delete.png";

const CollectionDetailItem = ({ title, description, stats }) => {
  return (
    <div className={styles.collectionDetailItemCard}>
      <div className={styles.collectionDetailItemToolbar}>
        <button className={styles.downloadButton}>
          Download data <img src={download_icon} alt="download data"></img>
        </button>
        <div className={styles.statsInfo}>
          <button className={styles.statsButton}>
            {stats}
            <img src={box_icon} alt="collection stats"></img>
          </button>
          <img src={delete_icon} alt="delete"></img>
        </div>
      </div>
      <div className={styles.collectionDetailItem}>
        <div className={styles.collectionDetailItemTitle}>{title}</div>
        <div className={styles.collectionDetailItemDesc}>{description}</div>
      </div>
    </div>
  );
};

export default CollectionDetailItem;
