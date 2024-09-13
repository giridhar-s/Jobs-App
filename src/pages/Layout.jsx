import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";

const Layout = () => {
 return (
  <>
   <Outlet />
   <BottomNavigation />
  </>
 );
};

export default Layout;
