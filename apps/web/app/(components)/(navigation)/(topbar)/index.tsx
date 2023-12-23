import React from "react";
import Profile from "./profile";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className="h-16 p-4  flex justify-between border-b">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/orange.png"
          className="object-cover"
          alt="logo"
          width={30}
          height={20}
        />
        <label className="text-sm">Orange Meet</label>
      </div>
      <Profile />
    </div>
  );
};

export default Topbar;
