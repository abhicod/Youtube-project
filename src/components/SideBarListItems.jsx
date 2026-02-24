import React from "react";
import { House } from "lucide-react";
import shortsIcon from "../assets/shortsicon.png";
import { Link } from "react-router-dom";

const SideBarListItems = () => {
  return (
    <div className=" border-b border-gray-200 pt-2 pb-4 ">
      <ul className="flex flex-col justify-center items-center text-md ">
        <Link to="/" className="w-full pl-10 hover:bg-gray-100 rounded-xl">
          <li className="flex items-center gap-2 cursor-pointer  py-2  justify-start text-lg ">
            <House size={21} />
            Home
          </li>
        </Link>
        <Link
          to="/shorts"
          className="w-full pl-10 hover:bg-gray-100 rounded-xl"
        >
          <li className="flex items-center gap-2 cursor-pointer py-2 justify-start text-lg">
            <img src={shortsIcon} alt="Shorts" width={21} height={21} />
            Shorts
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBarListItems;
