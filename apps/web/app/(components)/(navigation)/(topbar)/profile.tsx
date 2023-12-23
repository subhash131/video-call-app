import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="relative">
        <Image
          src="/assets/profile-img.jpg"
          width={32}
          height={32}
          alt="profile"
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <div className="">
        <label className="text-sm block">Subhash</label>
        <label className="text-xs block text-gray-700">
          Subhashnayak131@gmail.com
        </label>
      </div>
    </div>
  );
};

export default Profile;
