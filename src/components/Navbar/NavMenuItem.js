import React, { useState } from "react";
import styles from "./Navbar.module.css";
import AddCollectionModal from "../AddCollectionModal/AddCollectionModal";

const NavMenuItem = ({ displayIcon, title, expandIcon, isNewCollection }) => {
  const [isNewCollectionModalOpen, setIsNewCollectionModalOpen] =
    useState(false);

  const handleOpenNewCollectionModal = () => {
    if (isNewCollection) setIsNewCollectionModalOpen(true);
  };

  const handleCloseNewCollectionModal = () => {
    setIsNewCollectionModalOpen(false);
  };

  const handleFormSubmit = () => {
    handleCloseNewCollectionModal();
  };

  return (
    <div className={styles.navMenuItem} onClick={handleOpenNewCollectionModal}>
      <div className={styles.navMenuItemName}>
        {displayIcon && (
          <img src={displayIcon} alt="Nav Bar Content Display Icon"></img>
        )}
        {title}
      </div>
      {expandIcon && (
        <img src={expandIcon} alt="Nav Bar Expand/Collapse Icon"></img>
      )}
      {isNewCollectionModalOpen && (
        <AddCollectionModal
          isOpen={isNewCollectionModalOpen}
          onSubmit={handleFormSubmit}
          onClose={handleCloseNewCollectionModal}
        />
      )}
    </div>
  );
};

export default NavMenuItem;
