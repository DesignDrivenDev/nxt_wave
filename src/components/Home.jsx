import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResourceCard from "./ResourceCard";
import { setResources } from "../features/resource/resourceSlice";

const Home = () => {
  const dispatch = useDispatch();
  const resources = useSelector((state) => state?.resource?.resources);
  const [active, setActive] = useState("resources");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const ITEMS_PER_PAGE = 6; // Number of items per page
  const getResources = async () => {
    const response = await fetch(
      "https://media-content.ccbp.in/website/react-assignment/resources.json"
    );
    const data = await response.json();
    if (data.length) {
      dispatch(setResources(data));
    }
  };

  useEffect(() => {
    getResources();
    // eslint-disable-next-line
  }, []);
  // filteron tab change
  const requestResources =
    resources && resources?.filter((resource) => resource?.tag === "request");

  const userResources =
    resources && resources?.filter((resource) => resource?.tag === "user");

  // Filter resources based on the search query
  const filterResources = (items) => {
    if (!searchQuery) {
      return items;
    }
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Calculate items to display based on current page
  const paginatedResources = (items) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return items?.slice(startIndex, endIndex);
  };

  const currentResources =
    active === "resources"
      ? resources
      : active === "requests"
      ? requestResources
      : userResources;

  const totalPages = Math.ceil(
    (currentResources?.length || 0) / ITEMS_PER_PAGE
  );
  const filteredResources = filterResources(currentResources || []);

  console.log(filteredResources, "filteredResources");

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const resourcesData = paginatedResources(filteredResources);

  return (
    <div className="max-w-screen-lg mx-auto w-11/12 pt-24">
      <nav className="grid grid-cols-1 md:grid-cols-3 max-w-2xl mx-auto border-2 divide-x-2 rounded-md ">
        <div
          className={`text-center py-2 ${
            active === "resources" && "bg-blue-700 text-white"
          }  cursor-pointer rounded-l`}
          onClick={() => {
            setActive("resources");
            setCurrentPage(1);
          }}
        >
          Resources
        </div>
        <div
          className={`text-center py-2 ${
            active === "requests" && "bg-blue-700 text-white"
          }  cursor-pointer`}
          onClick={() => {
            setActive("requests");
            setCurrentPage(1);
          }}
        >
          Requests
        </div>
        <div
          className={`text-center py-2 ${
            active === "users" && "bg-blue-700 text-white"
          }  cursor-pointer rounded-r `}
          onClick={() => {
            setActive("users");
            setCurrentPage(1);
          }}
        >
          Users
        </div>
      </nav>
      {/* Search input */}
      <div className="relative max-w-2xl my-8">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full rounded-md p-2.5 border-2 ps-10 shadow-sm sm:text-sm focus:outline-none"
        />
        <span className="absolute inset-y-0 start-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resourcesData?.map((resource, ind) => (
          <ResourceCard key={ind} resource={resource} />
        ))}
      </div>
      <div>
        {filteredResources.length < 1 && (
          <p className="flex justify-center items-center text-lg">
            No search found
          </p>
        )}
      </div>
      <div
        className={`flex justify-center space-x-2 mt-4 ${
          searchQuery && "hidden"
        }`}
      >
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1
              ? ""
              : "hover:text-blue-600 transition-all duration-200"
          }`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "font-extrabold" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages
              ? ""
              : "hover:text-blue-600 transition-all duration-200"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;

// {/* {active === "resources" ? (
//           paginatedResources(filteredResources)?.map((resource, ind) => (
//             <ResourceCard key={ind} resource={resource} />
//           ))
//         ) : active === "requests" ? (
//           paginatedResources(filteredResources)
//             .filter((resource) => resource?.tag === "request")
//             ?.map((resource, ind) => (
//               <ResourceCard key={ind} resource={resource} />
//             ))
//         ) : active === "users" ? (
//           paginatedResources(filteredResources)
//             .filter((resource) => resource?.tag === "user")
//             ?.map((resource, ind) => (
//               <ResourceCard key={ind} resource={resource} />
//             ))
//         ) : (
//           <p>No Data </p>
//         )} */}
