import {
 createBrowserRouter,
 Navigate,
 RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Jobs from "./pages/Jobs";
import Bookmarks from "./pages/Bookmarks";
import Layout from "./pages/Layout";
import JobDetails from "./pages/JobDetails";

function App() {
 const router = createBrowserRouter([
  {
   path: "/",
   element: <Layout />,
   children: [
    {
     path: "bookmarks",
     element: <Bookmarks />,
    },
    {
     path: "job-details",
     element: <JobDetails />,
    },
    {
     path: "jobs",
     element: <Jobs />,
    },
    {
     index: true,
     element: <Navigate to="/jobs" replace />,
    },
    {
     path: "*",
     element: <div>Nothing to see here</div>,
    },
   ],
  },
 ]);

 return (
  <>
   <RouterProvider router={router} />
   <ToastContainer />
  </>
 );
}

export default App;
