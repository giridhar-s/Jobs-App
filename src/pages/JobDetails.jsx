import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
 const navigate = useNavigate();

 const data = JSON.parse(localStorage.getItem("job-details"));

 return !data ? (
  <div className="flex flex-col justify-center items-center h-64">
   <Loader2 className="animate-spin h-12 w-12 text-blue-500 mb-4" />
   <p className="text-gray-600">Loading jobs...</p>
  </div>
 ) : (
  <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
   <h3 className="text-2xl font-bold mb-4 text-gray-800">
    {data?.company_name ? data.company_name : "-"}
   </h3>
   <div className="space-y-3 text-gray-700">
    <p className="flex items-center">
     <span className="">{data?.title ? data.title : "-"}</span>
    </p>
    <p className="flex items-center">
     <span className="font-medium">Location:</span>
     <span className="ml-2">
      {data?.primary_details?.Place ? data.primary_details.Place : "-"}
     </span>
    </p>
    <p className="flex items-center">
     <span className="font-medium">Salary:</span>
     <span className="ml-2">
      {data?.primary_details?.Salary ? data.primary_details.Salary : "-"}
     </span>
    </p>
    <p className="flex items-center">
     <span className="font-medium">Experience:</span>
     <span className="ml-2">
      {data?.primary_details?.Experience
       ? data.primary_details.Experience
       : "-"}
     </span>
    </p>
    <p className="flex items-center">
     <span className="font-medium">Qualification:</span>
     <span className="ml-2">
      {data?.primary_details?.Qualification
       ? data.primary_details.Qualification
       : "-"}
     </span>
    </p>
    <p className="flex items-center">
     <span className="font-medium">Contact:</span>
     <span className="ml-2">
      {data?.primary_details?.whatsapp_no
       ? data.primary_details.whatsapp_no
       : "-"}
     </span>
    </p>
    <p className="flex items-center">
     <span className="font-medium">No of Openings:</span>
     <span className="ml-2">
      {data?.primary_details?.openings_count
       ? data.primary_details.openings_count
       : "-"}
     </span>
    </p>
    <p className="flex items-center">
     <span className="font-medium">Created On:</span>
     <span className="ml-2">
      {data?.created_on ? new Date(data.created_on).toDateString() : "-"}
     </span>
    </p>
    <p className="flex items-center">
     <span className="font-medium">Expires On:</span>
     <span className="ml-2">
      {data?.expire_on ? new Date(data.expire_on).toDateString() : "-"}
     </span>
    </p>
   </div>
   <div className="flex justify-center gap-3 my-5">
    <button
     className="bg-[#343a40] text-[#fffcd4] px-6 py-2 rounded-md hover:pointer"
     onClick={() => {
      setTimeout(() => {
       navigate(`/jobs`);
      }, 300);
     }}>
     Back
    </button>
    <button className="bg-[#343a40] text-[#fffcd4] px-6 py-2 rounded-md hover:pointer">
     Apply
    </button>
   </div>
  </div>
 );
};

export default JobDetails;
