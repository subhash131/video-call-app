import React from "react";
import Items from "./items";
import styles from "./styles/sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.containers}>
      <label className={styles.label}>Chat</label>
      <div className={styles.items_wrapper}>
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
    </div>
  );
};

export default Sidebar;
