"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CardAds from "@/app/common/CardAds";
import TitleSesction from "@/app/common/TitleSesction";

function CarouselAds({ title }) {
  return (
    <div className="max-w-7xl m-auto p-2 lg:p-0">
      <TitleSesction title={title} link="/estate" />
      <Swiper
        spaceBetween={5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <SwiperSlide>
            <CardAds />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselAds;
