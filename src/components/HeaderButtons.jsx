import { ChevronRight } from "lucide-react";
import React from "react";

const HeaderButtons = ({ name, isFirst, isLast }) => {
  return (
    <div
      className={`px-4 py-1 rounded-lg my-4 mx-2 hover:bg-gray-300 cursor-pointer transition-all duration-300 ease-in-out bg-gray-200 ${isFirst ? "bg-gray-700 text-white hover:bg-gray-800" : ""} ${isLast ? "mr-10" : ""}`}
    >
      <button className="cursor-pointer">{name}</button>
    </div>
  );
};

export default HeaderButtons;
