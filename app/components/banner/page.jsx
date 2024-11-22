"use client";
import React, { useState } from "react";
import "./style.css";
import Filter from "../filter/Filter";
import { Grid } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

export default function Page() {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const data = [
    {
      img: "https://prod-images.cooingestate.com/processed/compound_image/image/1109/vLow.webp",
      top: "Mountain View ICity New Cairo",
      bottom: "New Cairo",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound_image/image/1109/vLow.webp",
      top: "City View Cairo",
      bottom: "Cairo",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound_image/image/1109/vLow.webp",
      top: "Zayed Heights",
      bottom: "6th of October",
    },
    {
      img: "https://prod-images.cooingestate.com/processed/compound_image/image/1109/vLow.webp",
      top: "Mivida New Cairo",
      bottom: "New Cairo",
    },
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const results = data.filter(
        (item) =>
          item.top.toLowerCase().includes(query.toLowerCase()) ||
          item.bottom.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
      setIsDropdownVisible(true);
    } else {
      setIsDropdownVisible(false);
    }
  };

  const handleItemClick = (item) => {
    setSearchQuery(item.top); // Set to `top` or whatever property you prefer
    setIsDropdownVisible(false);
  };

  return (
    <div className="banner m-h-[72vh] flex flex-col gap-5 justify-center px-12  py-10 lg:px-24 ">
      <h1 className="text-3xl lg:text-5xl text-white font-bold">
        Find Your New Home
      </h1>
      <p className="text-white text-xl">
        Search & compare among 5000+ properties and 500+ compounds or list your
        property for sale
      </p>

      <Grid
        container
        className="flex justify-center gap-5 p-4"
        style={{ backgroundColor: "rgb(255 255 255 / 90%)" }}
      >
        <Grid item className="flex-1">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onClick={() => setFilteredResults(data)}
              placeholder="Area, Compound, Real Estate Developer..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500"
            />

            {isDropdownVisible && (
              <ul className="p-3 absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                <h1 className="font-bold text-gray-600 mb-3">Search Results</h1>

                {filteredResults.length > 0 ? (
                  filteredResults.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleItemClick(item)}
                      className=" py-2 flex items-center cursor-pointer hover:bg-gray-100 flex"
                    >
                      <div className="flex items-center px-2  gap-2 flex-1">
                        <img
                          src={item.img}
                          className="w-[40px] h-[40px]"
                          alt="Property"
                        />
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
        <Grid item xs={12} sm={5.8} md={3} lg={1.6}>
          <Filter options={options} label="Property Types" />
        </Grid>
        <Grid item xs={12} sm={5.8} md={3} lg={1.6}>
          <Filter options={options} label="Bedrooms" />
        </Grid>
        <Grid item xs={12} sm={5.8} md={3} lg={1.6}>
          <Filter options={options} label="Price" />
        </Grid>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
          style={{ backgroundColor: "rgb(30, 65, 100)" }}
        >
          Search
        </button>
      </Grid>
    </div>
  );
}
