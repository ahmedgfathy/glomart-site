import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import './style.css';

// import required modules
import { Autoplay } from 'swiper/modules';

export default function App() {
    const images = [
        "/images/slide-1.webp",
        "/images/slide-2.webp",
        "/images/slide-3.jpg",
    ];

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full min:h-[100vh] md:h-[90vh]"
        >
          {images.map((item, index) => (
                    <SwiperSlide key={index} className='h-full'>
                        <img
                            src={item}
                            alt={`Slide ${index + 1}`}
                            className="h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
