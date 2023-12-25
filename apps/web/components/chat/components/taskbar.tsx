import React from "react";
import styles from "../(styles)/taskbar.module.css";
import Image from "next/image";
import { MonitorUp, Phone } from "lucide-react";

const Taskbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <Image
          src="/assets/profile-img.jpg"
          width={30}
          height={30}
          alt="profile"
          className={styles.image}
        />
        <label className={styles.label}>Subhash</label>
      </div>
      <div className={styles.right_container}>
        <div className={styles.icon_container}>
          <Phone strokeWidth={1.5} className={styles.icon} />
        </div>
        <div className={styles.icon_container}>
          <MonitorUp strokeWidth={1.5} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
