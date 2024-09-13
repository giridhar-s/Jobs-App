import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const JobCard = ({ data = {} }) => {
 const navigate = useNavigate();
 const location = useLocation();

 const isBookmarksPage = location.pathname === "/bookmarks";

 const {
  title = "Untitled Position",
  company_name = "Unknown Company",
  primary_details = {},
  whatsapp_no = "-",
 } = data;

 return (
  <div className="bg-white flex flex-col shadow-md rounded-lg p-6 sm:p-6 lg:p-10 space-y-4 md:space-y-6 mb-4 border border-gray-200">
   <h3 className="responsive-heading font-semibold text-gray-800">{title}</h3>
   <p className="text-gray-600 responsive-text">Comapny: {company_name}</p>
   {primary_details.place && (
    <p className="text-gray-600 responsive-text">
     Place: {primary_details.Place}
    </p>
   )}
   <p className="text-gray-600 responsive-text">
    Salary: {primary_details.Salary}
   </p>
   <p className="text-gray-600 responsive-text">
    Contact Number: {whatsapp_no}
   </p>
   <div className="flex-1 flex flex-col justify-end relative bottom-0 md:gap-6">
    <div className="flex justify-center gap-3">
     <button
      className="bg-[#343a40] text-[#fffcd4] px-6 py-2 rounded-md hover:pointer"
      onClick={() => {
       localStorage.setItem("job-details", JSON.stringify(data));
       setTimeout(() => {
        navigate(`/job-details`);
       }, 300);
      }}>
      More Details
     </button>
     {!isBookmarksPage && (
      <button
       className="bg-[#343a40] text-[#fffcd4] px-6 py-2 rounded-md hover:pointer"
       onClick={() => {
        const previousBookmarks =
         JSON.parse(localStorage.getItem("bookmarks")) || [];
        const isAlreadyBookmarked = previousBookmarks.some(
         (bookmark) => bookmark.id === data.id
        );
        if (!isAlreadyBookmarked) {
         const resultedBookmarks = [...previousBookmarks, { ...data }];
         localStorage.setItem("bookmarks", JSON.stringify(resultedBookmarks));
         toast.success("Job bookmarked successfully!");
        } else {
         toast.info("Job is already bookmarked.");
        }
       }}>
       Bookmark
      </button>
     )}
     {isBookmarksPage && (
      <button
       className="bg-[#343a40] text-[#fffcd4] px-6 py-2 rounded-md hover:pointer"
       onClick={() => {
        const previousBookmarks =
         JSON.parse(localStorage.getItem("bookmarks")) || [];
        const resultedArr = previousBookmarks?.filter(
         (item) => item?.id !== data?.id
        );
        localStorage.setItem("bookmarks", JSON.stringify(resultedArr));
        toast.success("Job removed from bookmarks.");
       }}>
       Remove Bookmark
      </button>
     )}
    </div>
   </div>
  </div>
 );
};

export default JobCard;
