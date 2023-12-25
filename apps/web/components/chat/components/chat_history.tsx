import React from "react";
import styles from "../(styles)/chat_history.module.css";

const ChatHistory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.recevied_msg}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, esse
      </div>
      <div className={styles.sent_msg}>Lorem ipsum dolor sit</div>
      <div className={styles.recevied_msg}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, esse
        qui velit veniam sunt quo possimus sapiente molestias, aut itaque quasi
        praesentium maxime hic,
      </div>
      <div className={styles.sent_msg}>Lorem,</div>
      <div className={styles.sent_msg}>Lorem ipsum dolor sit</div>
      <div className={styles.recevied_msg}>Lorem ipsum</div>
      <div className={styles.sent_msg}>Lorem,</div>
      <div className={styles.sent_msg}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, esse
        qui velit veniam sunt quo possimus sapiente molestias, aut itaque quasi
        praesentium maxime hic,
      </div>
      <div className={styles.recevied_msg}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, esse
        qui velit veniam sunt quo possimus sapiente molestias, aut itaque quasi
        praesentium maxime hic,
      </div>
    </div>
  );
};

export default ChatHistory;
