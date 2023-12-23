"use client";
import { Phone } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./(styles)/sidebar.module.css";

const Items = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      className={styles.items_container}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="flex items-center gap-2">
        <Image
          src="/assets/profile-img.jpg"
          width={32}
          height={32}
          alt="profile"
          className="rounded-full  object-cover"
        />
        <label className="pointer-events-none text-gray-600 text-xs">
          Subhash
        </label>
      </div>
      <div
        className={`w-8 h-8 bg-[#D7E4E0] rounded-full grid place-content-center ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-all ease-in-out`}
      >
        <Phone strokeWidth={1.5} className="h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
};

export default Items;
