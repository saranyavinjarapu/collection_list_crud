import React from "react";
import styles from "./CollectionDetail.module.css";
import download_icon from "../../assets/download.png";
import box_icon from "../../assets/box.png";
import delete_icon from "../../assets/delete.png";

const CollectionDetailItem = () => {
  return (
    <div className={styles.collectionDetailItemCard}>
      <div className={styles.collectionDetailItemToolbar}>
        <button className={styles.downloadButton}>
          Download data <img src={download_icon}></img>
        </button>
        <div className={styles.statsInfo}>
          <button className={styles.statsButton}>
            87<img src={box_icon}></img>
          </button>
          <img src={delete_icon}></img>
        </div>
      </div>
      <div className={styles.collectionDetailItem}>
        <div className={styles.collectionDetailItemTitle}>My Collection</div>
        <div className={styles.collectionDetailItemDesc}>
          Collection Description (Extended) that is added by user when creating
          the collection to inform users of the content etc.
        </div>
      </div>
    </div>
  );
};

export default CollectionDetailItem;
