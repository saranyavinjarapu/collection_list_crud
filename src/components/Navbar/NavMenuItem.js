import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { CollectionContext } from "../../globals/helpers";

const NavMenuItem = ({ displayIcon, title, expandIcon, isNewCollection }) => {
  const { setIsModalOpen } = useContext(CollectionContext);

  const handleOpenNewCollectionModal = () => {
    if (isNewCollection) setIsModalOpen(true);
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
    </div>
  );
};

export default NavMenuItem;
