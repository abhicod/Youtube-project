import Header from "./Header";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex ">
        <div className="w-2/12"><SideBar /></div>
        <div className="w-10/12"><Outlet /></div>
      </div>
    </div>
  );
};

export default AppLayout;
