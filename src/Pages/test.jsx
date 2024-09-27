import React, { useEffect, useState } from "react";
import { IoSearchOutline, IoFilter } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import ScrollTop from "./Scrolltop/Scrolltop";
import Example from "../utils/Shimmer";

export default function Fundraisers() {
  const [fundraisers, setFundraisers] = useState([]);
  const [filter, setFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Display 5 fundraisers per page

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchFundraisers = async () => {
      try {
        const response = await axios.get(
          `https://ibm-server.onrender.com/api/fundraisers?page=${currentPage}&limit=${itemsPerPage}`
        );
        const sortedFundraisers = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setFundraisers(sortedFundraisers);
        
        // Update URL with current page
        navigate(`/fundraisers?page=${currentPage}`, { replace: true });
      } catch (err) {
        console.error("Error fetching fundraisers:", err);
      }
    };

    fetchFundraisers();
  }, [currentPage, navigate]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');
    if (page) {
      setCurrentPage(parseInt(page));
    }
  }, [location]);

  const Filterdata = () => {
    setFilter(!filter);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((item) => item !== location)
        : [...prev, location]
    );
  };

  const clearFilters = () => {
    setSelectedCategory([]);
    setSelectedLocation([]);
  };

  const filteredFundraisers = fundraisers.filter((fundraiser) => {
    return (
      (selectedCategory.length === 0 ||
        selectedCategory.includes(fundraiser.category)) &&
      (selectedLocation.length === 0 ||
        selectedLocation.includes(fundraiser.location)) &&
      fundraiser.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const startFundraiser = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      navigate("/create-fundraiser");
    }
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredFundraisers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedFundraisers = filteredFundraisers.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <ScrollTop />
      {/* banner */}
      <div className='bg-[url("/poster.jpg")] bg-cover xl:bg-center bg-[10%] xl:h-[40vh] h-[32vh] bg-no-repeat flex justify-end xl:items-center p-5 xl:p-10 md:items-center'>
        <div className="xl:w-1/2 xl:space-y-3 space-y-1 w-[61%] text-end ">
          <h1 className="text-zinc-900 xl:text-3xl text-lg font-semibold tracking-tighter xl:font-bold xl:tracking-wide xl:leading-8">
            Save Lives Every Month: Join Our Zero Hunger Initiative
          </h1>
          <p className="text-zinc-900 xl:text-sm text-xs tracking-tighter">
            Join over <span className="font-bold">500,000</span> monthly donors
            in our Zero Hunger Initiative and make a lasting impact on
            communities in need. Together, we can ensure that no one goes hungry
            and build a world where food security is a reality for all.
          </p>
        </div>
      </div>
      {/* search */}
      <div className="relative p-5">
        <input
          type="text"
          placeholder="Search for Fundraiser"
          value={searchTerm}
          onChange={handleSearch}
          className="dark:bg-zinc-900 dark:text-[#DFDFD6] w-full xl:w-1/2 text-start py-3 pl-10 pr-3 rounded-2xl outline-none border border-gray-400 placeholder:text-sm placeholder:text-start placeholder:px-3"
        />
        <IoSearchOutline className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* fundraisers list */}
      {fundraisers.length === 0 ? (
        <Example />
      ) : (
        <div className="p-5  xl:grid xl:grid-cols-3 xl:gap-10">
          {paginatedFundraisers.map((fundraiser) => (
            <div
              key={fundraiser.id}
              className="p-4 border rounded-lg mb-4 dark:bg-[#2C2C2B] dark:text-[#DFDFD6]"
            >
              <h2 className="text-xl font-semibold">{fundraiser.name}</h2>
              <p>Category: {fundraiser.category}</p>
              <p>Location: {fundraiser.location}</p>
              <p className="text-xs text-end">
                Created on: {formatDate(fundraiser.createdAt)}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination controls */}
      <div className="p-5 flex justify-between items-center">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 dark:text-black dark:bg-[#DFDFD6] text-white rounded-full"
        >
          Previous
        </button>
        <span className="dark:text-[#DFDFD6]">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 dark:text-black dark:bg-[#DFDFD6] text-white rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
}
