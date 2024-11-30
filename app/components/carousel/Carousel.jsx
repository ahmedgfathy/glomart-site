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

export default function App({ data }) {
  return (
    <div>
      <Grid container className="flex justify-center mb-5">
        <Grid item xs={12} >
          <h1
            className="font-bold text-2xl my-4"
            style={{ color: "rgb(30, 65, 100)" }}
          >
            Top Compounds
          </h1>
          <p className="text-gray-500 mb-3">21 Results Available </p>

          <div className="relative">
            <Swiper
              spaceBetween={20}
              id="swiper-2"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
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
                  slidesPerView: 5, // Large screens
                },
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="box w-full h-[200px] flex flex-col justify-end gap-2 py-3 rounded-lg cursor-pointer"
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) ), url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <p className="text-white font-bold">{item.h1}</p>
                    <p className="text-gray-200">
                      <span>{item.number}</span> <span>{item.text}</span>
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Previous Button */}
            <div className="swiper-button-prev absolute top-1/2 left-2 transform  z-10 cursor-pointer text-white bg-black rounded-full p-1 w-[25px]">
              <MdKeyboardArrowLeft />
            </div>

            {/* Next Button */}
            <div className="swiper-button-next absolute top-1/2 right-2 transform  z-10 cursor-pointer text-white bg-black rounded-full p-1 w-[25px]">
              <MdKeyboardArrowRight />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
