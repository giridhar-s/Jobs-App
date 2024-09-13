import { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import JobCard from "./JobCard";
import { Loader2 } from "lucide-react";

const SIMULATED_DELAY_MS = 1000;

const Jobs = () => {
 const [jobs, setJobs] = useState([]);
 const [hasMore, setHasMore] = useState(true);
 const [page, setPage] = useState(1);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

 const fetchJobs = useCallback(async (pageNum) => {
  try {
   setIsLoading(true);
   // Simulated delay
   await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));

   const response = await axios.get(
    `https://testapi.getlokalapp.com/common/jobs?page=${pageNum}`
   );
   setJobs((prevJobs) => [...prevJobs, ...response.data.results]);
   setHasMore(response.data.results.length > 0);
   setError(null);
  } catch (err) {
   setError("Failed to fetch jobs. Please try again later.");
   console.error(err);
  } finally {
   setIsLoading(false);
  }
 }, []);

 useEffect(() => {
  fetchJobs(page);
 }, [fetchJobs, page]);

 const fetchMoreData = () => {
  setPage((prevPage) => prevPage + 1);
 };

 if (error) {
  return <div className="text-red-500 text-center p-5">{error}</div>;
 }

 return (
  <div className="bg-gray-100 min-h-screen p-5 sm:p-12">
   {isLoading && jobs.length === 0 ? (
    <div className="flex flex-col justify-center items-center h-64">
     <Loader2 className="animate-spin h-12 w-12 text-blue-500 mb-4" />
     <p className="text-gray-600">Loading jobs...</p>
    </div>
   ) : (
    <InfiniteScroll
     dataLength={jobs.length}
     next={fetchMoreData}
     hasMore={hasMore}
     loader={
      <div className="flex justify-center items-center h-20">
       <Loader2 className="animate-spin h-8 w-8 text-blue-500" />
      </div>
     }>
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 p-4 md:px-4 md:py-8">
      {jobs.map((job, index) => (
       <JobCard data={job} key={index} />
      ))}
     </div>
    </InfiniteScroll>
   )}
  </div>
 );
};

export default Jobs;
