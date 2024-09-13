import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const Bookmarks = () => {
 const [data, setData] = useState([]);
 const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

 useEffect(() => {
  setData(bookmarks);
 }, [bookmarks]);

 return bookmarks.length === 0 ? (
  <div className="flex flex-col justify-center items-center h-64">
   <p className="text-gray-600">No bookmarks available.</p>
  </div>
 ) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 p-4 md:px-6 md:py-8 lg:px-16 lg:py-8">
   {data.map((job, index) => (
    <JobCard data={job} key={index} />
   ))}
  </div>
 );
};

export default Bookmarks;
