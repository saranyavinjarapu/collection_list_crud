import React, { useContext, useState } from "react";
import styles from "./AddCollectionModal.module.css";
import { CollectionContext } from "../../globals/helpers";

const initialNewCollectionModalData = {
  title: "",
  description: "",
};

const AddCollectionModal = () => {
  const { collectionList, setCollectionList, setIsModalOpen } =
    useContext(CollectionContext);
  const [formState, setFormState] = useState(initialNewCollectionModalData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCollectionList([...collectionList, formState]);
    setIsModalOpen(false);
    setFormState(initialNewCollectionModalData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.newCollectionModal}>
      <h1 className={styles.newCollectionModalTitle}>New Collection</h1>
      <div className={styles.newCollectionModalContent}>
        <div>
          <label htmlFor="text">Collection Name</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            value={formState.title}
            onChange={handleInputChange}
          />
          <small className={styles.inputHelperText}>0 / 140</small>
        </div>
        <div>
          <label htmlFor="text">Description</label>
          <br />
          <input
            type="text"
            id="description"
            name="description"
            value={formState.description}
            onChange={handleInputChange}
          />
          <small className={styles.inputHelperText}>0 / 140</small>
        </div>
      </div>
      <div className={styles.newCollectionModalAction}>
        <button
          className={styles.closeButton}
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
        <button className={styles.createCollectionButton}>
          Create Collection
        </button>
      </div>
    </form>
  );
};

export default AddCollectionModal;
