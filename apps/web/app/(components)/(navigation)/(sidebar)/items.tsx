"use client";
import { Phone } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./(styles)/sidebar.module.css";

const Items = () => {
  return (
    <div className={styles.items_container}>
      <div className={styles.item}>
        <Image
          src="/assets/profile-img.jpg"
          width={32}
          height={32}
          alt="profile"
          className="rounded-full  object-cover"
        />
        <label className={styles.name}>Subhash</label>
      </div>
      <div className={styles.icon_container}>
        <Phone strokeWidth={1.5} className={styles.icon} />
      </div>
    </div>
  );
};

export default Items;
