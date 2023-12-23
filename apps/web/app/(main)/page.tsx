import React from "react";
import styles from "./(styles)/page.module.css";
import Topbar from "../(components)/(navigation)/(topbar)";
import Sidebar from "../(components)/(navigation)/(sidebar)";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topbar_container}>
        <Topbar />
      </div>
      <div className={styles.sidebar_container}>
        <Sidebar />
      </div>
      <div className={styles.chat_container}>{/* <Chat /> */}</div>
    </div>
  );
};

export default Page;
