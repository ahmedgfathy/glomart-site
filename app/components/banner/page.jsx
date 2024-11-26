"use client"
import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import "swiper/css"; // Make sure the Swiper CSS is included
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowForward } from "react-icons/io";
import Swiper from "./Swiper";
import Filter from "../filter/Filter"
import "./style.css"
const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Dummy options for Filters, replace with your actual data
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setIsDropdownVisible(query.length > 0);
    // Here you can filter your data based on the query
    // setFilteredResults(filteredData); // Make sure `filteredData` is available
  };

  const handleItemClick = (item) => {
    setSearchQuery(item.top); // Assume `top` is the property to display
    setIsDropdownVisible(false);
  };

  return (
    <div className="banner sm:h-[70vh] md:h-[90vh] flex flex-col gap-5 justify-center items-center w-full  relative">
      <Swiper />
      <div className="w-full absolute px-10 lg:px-10 z-20 flex flex-col gap-4">
        <h1 className="text-2xl lg:text-5xl text-white font-bold">
          Find Your New Home
        </h1>
        <p className="text-white text-xl hidden md:block">
          Search & compare among 5000+ properties and 500+ compounds or list your property for sale
        </p>

        <Grid container className="hidden lg:flex justify-center gap-5 p-4" style={{ backgroundColor: "rgb(255 255 255 / 90%)" }}>
          <Grid item className="flex-1">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onClick={() => setFilteredResults([])} // Assuming you want to reset results when clicked
                placeholder="Area, Compound, Real Estate Developer..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500"
              />

              {isDropdownVisible && (
                <ul className="p-3 
 absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  <h1 className="font-bold text-gray-600 mb-3">Search Results</h1>
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleItemClick(item)}
                        className="py-2 flex items-center cursor-pointer hover:bg-gray-100"
                      >
                        <div className="flex items-center px-2 gap-2 flex-1">
                          <img src={item.img} className="w-[40px] h-[40px]" alt="Property" />
                          <div>
                            <p className="text-md">{item.top}</p>
                            <p className="text-sm text-gray-400">{item.bottom}</p>
                          </div>
                        </div>
                        <IoIosArrowForward className="text-sm text-gray-400" />
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-500">No results found</li>
                  )}
                </ul>
              )}
            </div>
          </Grid>

          {/* Filter Components */}
          <Grid item xs={12} sm={5.8} md={3} lg={1.6}>
            <Filter options={options} label="Property Types" />
          </Grid>
          <Grid item xs={12} sm={5.8} md={3} lg={1.6}>
            <Filter options={options} label="Bedrooms" />
          </Grid>
          <Grid item xs={12} sm={5.8} md={3} lg={1.6}>
            <Filter options={options} label="Price" />
          </Grid>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded" style={{ backgroundColor: "rgb(30, 65, 100)" }}>
            Search
          </button>
        </Grid>
      </div>
    </div>
  );
};

export default Banner;
