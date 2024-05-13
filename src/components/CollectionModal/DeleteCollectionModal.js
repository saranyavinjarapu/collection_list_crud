import React, { useContext } from "react";
import styles from "./DeleteCollectionModal.module.css";
import { CollectionContext } from "../../globals/helpers";

const DeleteCollectionModal = ({ title, setIsDeleteOpen }) => {
  const { collectionList, setCollectionList } = useContext(CollectionContext);
  const onCollectionItemDelete = () => {
    setCollectionList(collectionList.filter((item) => title !== item.title));
    setIsDeleteOpen(false);
  };
  return (
    <div className={styles.deleteCollectionModal}>
      <h1 className={styles.deleteCollectionModalTitle}>Delete collection</h1>
      <div className={styles.deleteCollectionModalDescription}>
        Are you sure you would like to delete this collection? <br />
        You won’t be able to undo this
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={styles.deleteCollectionButton}
          onClick={onCollectionItemDelete}
        >
          delete
        </button>
        <button
          className={styles.closeButton}
          onClick={() => setIsDeleteOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DeleteCollectionModal;
