import React from "react";
import styles from "./styles/index.module.css";
import Taskbar from "./(components)/taskbar";
import ChatHistory from "./(components)/chat_history";
import SendMessage from "./(components)/send_message";

const Chat = () => {
  return (
    <div className={styles.container}>
      <Taskbar />
      <div className={styles.chat_window}>
        <ChatHistory />
        <SendMessage />
      </div>
    </div>
  );
};

export default Chat;
