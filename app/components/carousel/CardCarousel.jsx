"use client";
// components/Carousel.js
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { MdKeyboardArrowRight } from "react-icons/md";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Grid } from "@mui/material";
import Card from "../card/Cards";
import { getAllProperties } from "@/actions/propertiesAction";
import CardProperty from "../CardProperty";
import RentAndSellCard from "../rent-and-sell-card/RentAndSellCard";
import { properties } from "@/app/(pages)/home/data";

export default function App({ data }) {
  const [units, setUnits] = useState([]);
  const fetchData = async () => {
    const { properties, totalProperties } = await getAllProperties();
    const likeProperties = properties.filter((property) => property.liked);
    setUnits(likeProperties);
    console.log(likeProperties);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Grid container className="flex justify-center">
        <Grid item xs={12} >
          <h1
            className="font-bold text-2xl my-4"
            style={{ color: "rgb(30, 65, 100)" }}
          >
            Recommended{" "}
          </h1>

          <div className="relative">
            <Swiper
              spaceBetween={20}
              navigation={{
                nextEl: ".swiper-button-nextt",
                prevEl: ".swiper-button-prevv",
              }}
              modules={[Navigation]}
              className="mySwiper"
              id="swiper-1"
              breakpoints={{
                // Adjust the number of slides per view at different screen widths
                320: {
                  slidesPerView: 1, // Mobile screens
                },
                640: {
                  slidesPerView: 2, // Tablet screens
                },
                768: {
                  slidesPerView:2, // Medium screens
                },
                1200: {
                  slidesPerView: 3, // Large screens
                },
              }}
            >


              {units.map((property, index) => (
                <SwiperSlide key={index}>

                  <RentAndSellCard property={property} key={index} h1="Recommended" />

                </SwiperSlide>
              ))}
            </Swiper>

            {/* Previous Button */}
            <div className="swiper-button-prevv  w-[35px] h-[35px]  flex justify-center items-center absolute top-1/2 left-2 transform  z-10 cursor-pointer text-white black rounded-full p-1 ">
              <MdKeyboardArrowLeft />
            </div>

            {/* Next Button */}
            <div className="swiper-button-nextt w-[35px] h-[35px] flex justify-center items-center absolute top-1/2 right-2 transform  z-10 cursor-pointer text-white  black rounded-full p-1 ">
              <MdKeyboardArrowRight />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
