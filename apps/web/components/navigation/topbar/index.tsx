import React from "react";
import Profile from "./profile";
import Image from "next/image";
import styles from "./styles/topbar.module.css";

const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image src="/assets/orange.png" alt="logo" width={30} height={20} />
        <p className="text-sm">Orange Meet</p>
      </div>
      <Profile />
    </div>
  );
};

export default Topbar;
