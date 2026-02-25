import React from "react";
import SideBarListItems from "./SideBarListItems";
import SideBarCategories from "./SideBarCategories";
import { useSelector } from "react-redux";

const SideBar = () => {

  const isMenuOpen = useSelector(store =>store.app.isMenuOpen);

 if(!isMenuOpen) return null;

  return  (
    <div className="flex-1 border-r border-gray-200 w-2/12">
      <SideBarListItems />
      <SideBarCategories />
    </div>
  ) ;
};

export default SideBar;
