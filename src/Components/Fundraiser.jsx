import React, { useEffect, useState } from "react";
import { IoSearchOutline, IoFilter } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const dummyFundraisers = [
  {
    id: 1,
    name: "Hunger Relief in Delhi",
    category: "Trending",
    location: "Delhi",
  },
  {
    id: 2,
    name: "Feeding Bengaluru's Needy",
    category: "Urgently Foods",
    location: "Bengaluru",
  },
  {
    id: 3,
    name: "Support for Hyderabad's Hungry",
    category: "Trending",
    location: "Hyderabad",
  },
  {
    id: 4,
    name: "National Hunger Relief Fund",
    category: "All Types",
    location: "Delhi",
  },
];

export default function Fundraisers() {
  const [fundraisers, setFundraisers] = useState([]);
  const [filter, setFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/fundraisers")
      .then((response) => setFundraisers(response.data))
      .catch((error) => console.error(error));
  }, []);

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

  const filteredFundraisers = dummyFundraisers.filter((fundraiser) => {
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

  return (
    <div className="h-screen">
      {/* banner */}
      <div className='bg-[url("./poster.jpg")] bg-cover xl:bg-center bg-[10%] xl:h-[40vh] h-[32vh] bg-no-repeat flex justify-end xl:items-center p-5 xl:p-10'>
        <div className="xl:w-1/2 xl:space-y-3 space-y-1 w-[61%] text-end">
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
          className="w-full text-start py-3 pl-10 pr-3 rounded-2xl outline-none border border-gray-400 placeholder:text-sm placeholder:text-start placeholder:px-3"
        />
        <IoSearchOutline className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      {/* filter */}
      <div className="p-5 pt-0 relative z-10">
        <div
          onClick={Filterdata}
          className={`flex border-black justify-end items-center gap-2 pr-3`}
        >
          <h1 className="capitalize">Filter Results</h1>
          <IoFilter />
        </div>
        {filter && (
          <div
            className={`p-5 border-b bg-black/50 h-screen fixed rounded-t-3xl bottom-0 left-0 right-0`}
          >
            <div className="bg-white h-[65%] absolute bottom-0 left-0 right-0 rounded-t-3xl overflow-y-scroll">
              <div className="p-5 bg-white sticky top-0 z-50 border-b flex justify-between items-center">
                <h1 className="tracking-wide font-medium text-[20px]">
                  Filter
                </h1>
                <AiOutlineClose
                  size={20}
                  className="cursor-pointer"
                  onClick={() => {
                    setFilter(!filter);
                  }}
                />
              </div>
              {/* Selected Filters */}
              {(selectedCategory.length > 0 || selectedLocation.length > 0) && (
                <div className="p-5 ">
                  <div className=" flex justify-between items-center">
                    <h1 className="font-medium text-xs">Selected Filters:</h1>
                    <button
                      className=" text-black underline text-xs"
                      onClick={clearFilters}
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="flex gap-2 flex-wrap mt-2">
                    {selectedCategory.map((category) => (
                      <div
                        key={category}
                        className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full"
                      >
                        {category}
                        <AiOutlineClose
                          size={16}
                          className="cursor-pointer"
                          onClick={() => handleCategorySelect(category)}
                        />
                      </div>
                    ))}
                    {selectedLocation.map((location) => (
                      <div
                        key={location}
                        className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full"
                      >
                        {location}
                        <AiOutlineClose
                          size={16}
                          className="cursor-pointer"
                          onClick={() => handleLocationSelect(location)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* filters for mobile */}
              <div>
                {/* Categories */}
                <div className="border-b">
                  <div className="flex justify-between p-5 items-center">
                    <h1 className="font-medium">Category</h1>
                    <MdKeyboardArrowUp />
                  </div>
                  <div className="flex p-5 pt-2 flex-wrap gap-5">
                    {["All Types", "Trending", "Urgently Foods"].map(
                      (category) => (
                        <h1
                          key={category}
                          className={`bg-[#F5F4F4] rounded-full px-3 py-2 cursor-pointer ${
                            selectedCategory.includes(category) && "bg-gray-300"
                          }`}
                          onClick={() => handleCategorySelect(category)}
                        >
                          {category}
                        </h1>
                      )
                    )}
                  </div>
                </div>
                {/* Locations */}
                <div className="border-b">
                  <div className="flex justify-between p-5 items-center">
                    <h1 className="font-medium">Location</h1>
                    <MdKeyboardArrowUp />
                  </div>
                  <div className="flex p-5 pt-2 flex-wrap gap-5">
                    {["All Locations", "Delhi", "Bengaluru", "Hyderabad"].map(
                      (location) => (
                        <h1
                          key={location}
                          className={`bg-[#F5F4F4] rounded-full px-3 py-2 cursor-pointer ${
                            selectedLocation.includes(location) && "bg-gray-300"
                          }`}
                          onClick={() => handleLocationSelect(location)}
                        >
                          {location}
                        </h1>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* fundraisers list */}
      <div className="p-5">
        {filteredFundraisers.map((fundraiser) => (
          <div key={fundraiser.id} className="p-4 border rounded-lg mb-4">
            <h2 className="text-xl font-semibold">{fundraiser.name}</h2>
            <p>Category: {fundraiser.category}</p>
            <p>Location: {fundraiser.location}</p>
          </div>
        ))}
      </div>
      <div className="p-5">
        <button
          onClick={startFundraiser}
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          Start Your Fundraiser
        </button>
      </div>
    </div>
  );
}