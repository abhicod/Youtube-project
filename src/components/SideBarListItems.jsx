import React from "react";
import { House } from "lucide-react";
import shortsIcon from "../assets/shortsicon.png";

const SideBarListItems = () => {
  return (
    <div className=" border-b border-gray-200 pt-2 pb-4">
      <ul className="flex flex-col justify-center items-center text-md  ">
        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 rounded-xl w-full justify-start pl-10 text-lg ">
        <House size={21} />
        Home
      </li>
      <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2  rounded-xl w-full justify-start pl-10 text-lg">
        <img src={shortsIcon} alt="Shorts" width={21} height={21} />
        Shorts
      </li>
      </ul>
    </div>
  );
};

export default SideBarListItems;
