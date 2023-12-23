import React from "react";
import Items from "./items";

const Sidebar = () => {
  return (
    <div className="w-full p-4 h-full border-r">
      <label className="text-sm text-gray-700 ml-2">Chat</label>
      <div className="mt-4 flex gap-2 flex-col">
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
    </div>
  );
};

export default Sidebar;
