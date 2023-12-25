import Image from "next/image";
import React from "react";
import styles from "./styles/topbar.module.css";

const Profile = () => {
  return (
    <div className={styles.profile_container}>
      <div className="relative">
        <Image
          src="/assets/profile-img.jpg"
          width={32}
          height={32}
          alt="profile"
        />
      </div>
      <div className={styles.label_container}>
        <p className="text-sm">Subhash</p>
        <p className="text-xs text-gray">Subhashnayak131@gmail.com</p>
      </div>
    </div>
  );
};

export default Profile;
