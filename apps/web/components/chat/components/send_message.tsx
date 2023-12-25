import React from "react";
import styles from "../(styles)/send_message.module.css";
import { Paperclip, Send } from "lucide-react";

const SendMessage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input className={styles.input} placeholder="Type..." />
        <div className={styles.icon_container}>
          <Send strokeWidth={1.5} className={styles.icon} />
        </div>
        <div className={styles.icon_container}>
          <Paperclip strokeWidth={1.5} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
