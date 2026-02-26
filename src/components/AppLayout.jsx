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

// import Header from "./Header";
// import { Outlet, useLocation } from "react-router-dom";
// import SideBar from "./SideBar";
// import ButtonsList from "./ButtonsList";
// import { useDispatch, useSelector } from "react-redux";
// import { openMenu, closeMenu } from "../utils/appSlice";
// import { useEffect } from "react";

// const AppLayout = () => {

//   const location = useLocation();
//   const dispatch = useDispatch();

//   // ✅ READ REDUX STATE
//   const isMenuOpen = useSelector(
//     (store) => store.app.isMenuOpen
//   );

//   /* -------- Route Based Sidebar -------- */
//   useEffect(() => {
//     if (location.pathname === "/") {
//       dispatch(openMenu());
//     } else {
//       dispatch(closeMenu());
//     }
//   }, [location.pathname, dispatch]);

//   return (
//     <div className="min-h-screen flex flex-col">

//       <Header />

//       <div className="flex flex-1">

//         {/* Sidebar */}
//         <SideBar />

//         {/* ✅ MAIN CONTAINER */}
//         <div
//           className={`
//             flex flex-col transition-all duration-300
//             ${isMenuOpen ? "w-10/12" : "w-full"}
//           `}
//         >
//           <ButtonsList />
//           <Outlet />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AppLayout;
