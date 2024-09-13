import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
 const location = useLocation();

 return (
  <div className=" fixed rounded-3xl bg-[#343a40] bottom-8 left-0 right-0 mx-auto opacity-90 shadow-xl w-[100%] sm:w-[60%] md:w-[50%] lg:w-[30%]">
   <div className="flex justify-between items-center">
    <Link
     to="/jobs"
     className={`flex-1 py-3 text-center ${
      location.pathname === "/jobs"
       ? "text-[#fffcd4] rounded-3xl"
       : "text-[#9a9da0]"
     }`}>
     <span className="block responsive-text">Jobs</span>
    </Link>

    <Link
     to="/bookmarks"
     className={`flex-1 py-3 text-center ${
      location.pathname === "/bookmarks"
       ? "text-[#fffcd4] rounded-3xl"
       : "text-[#9a9da0]"
     }`}>
     <span className="block responsive-text">Bookmarks</span>
    </Link>
   </div>
  </div>
 );
};

export default BottomNavigation;
