import React from "react";
import styles from "./Collections.module.css";

const Collections = () => {
  return (
    <div className={styles.collectionsMain}>
      <div className={styles.filteredCollections}>
        <div className={styles.collectionInfo}>
          <div className={styles.collectionInfoTitle}>My Collections</div>
          <div className={styles.collectionInfoDescription}>
            Introducing collections: the ability to organise your
            <br />
            materials, your way.
          </div>
        </div>
        <div className={styles.collectionResultsCount}>Showing 118 Results</div>
      </div>
    </div>
  );
};

export default Collections;
