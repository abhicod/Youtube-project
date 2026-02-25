import Header from "./Header";
import { Outlet , useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import ButtonsList from "./ButtonsList";

const AppLayout = () => {
  const location = useLocation();
  const isWatchPage = location.pathname === "/watch";


  return (
  <div className="min-h-screen flex flex-col">
    <Header className="fixed top-0 left-0 w-full z-50 bg-white shadow" />
    <div className="flex flex-1 min-h-screen">
      <SideBar className="h-screen sticky top-14" />
      <div className={`flex flex-col ${isWatchPage ? "w-full" : "w-10/12"} overflow-auto`}>
        <ButtonsList />
        <Outlet />
      </div>
    </div>
  </div>
);

};

export default AppLayout;
