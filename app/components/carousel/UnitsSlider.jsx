"use client"
import React, { useRef, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { IoClose } from "react-icons/io5";
import { Pagination, Navigation } from 'swiper/modules';
import { Context } from "../../network/context";

export default function App() {
  const { carousel, toggle } = useContext(Context);

  const data = [
    "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/164288/cleoWhatsApp_Image_2023-06-25_at_3.30.21_PM.jpeg",
    "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/property_image/image/164283/cleoWhatsApp_Image_2023-06-25_at_3.30.23_PM__1_.jpeg"
  ];

  const [index, setIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setIndex(swiper.realIndex + 1); 
  };

  return (
    <div className='relative '>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        style={{ right: carousel ? "0px" : "-100%" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mySwiperLeft"
        onSlideChange={handleSlideChange}  
      >
        <div>
          <p className='absolute left-5 top-5 text-md cursor-pointer z-10'>
            <span>{index}</span> / <span>{data.length}</span>
          </p>
          <IoClose
            className='absolute right-5 top-5 text-xl cursor-pointer z-10'
            onClick={toggle}
          />
        </div>
        {data.map((item, idx) => (
          <SwiperSlide key={idx} className='py-14'>
            <img src={item} alt={`Image ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
