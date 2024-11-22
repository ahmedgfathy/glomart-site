"use client";
// components/Carousel.js
import React from "react";
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

export default function App({ data }) {
  return (
    <div>
      <Grid container className="flex justify-center">
        <Grid item xs={12} lg={10.8}>
          <div className="relative">
            <Swiper
              spaceBetween={20}
              navigation={{
                nextEl: ".swiper-button-nexttt",
                prevEl: ".swiper-button-prevvv",
              }}
              id="swiper-3"
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                // Adjust the number of slides per view at different screen widths
                320: {
                  slidesPerView: 1, // Mobile screens
                },
                640: {
                  slidesPerView: 2, // Tablet screens
                },
                768: {
                  slidesPerView: 3, // Medium screens
                },
                1024: {
                  slidesPerView: 3, // Large screens
                },
              }}
            >
              {data.map((ele, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={ele.img}
                    alt="..."
                    className="rounded-lg h-[200px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Previous Button */}
            <div className="swiper-button-prevvv  w-[35px] h-[35px]  flex justify-center items-center black absolute top-1/2 left-2 transform -translate-1/2   z-10 cursor-pointer text-white  rounded-full p-1 ">
              <MdKeyboardArrowLeft />
            </div>

            {/* Next Button */}
            <div className="swiper-button-nexttt  w-[35px] h-[35px] flex justify-center items-center black  absolute top-1/2 right-2 transform -translate-1/2  z-10 cursor-pointer text-white  rounded-full p-1 ">
              <MdKeyboardArrowRight />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
