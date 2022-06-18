import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";
import { Navigation ,Pagination } from "swiper";
import RoadMapSlide from "./RoadMapSlide";

const SwiperRoad = () => {


  return (
    <>
      <Swiper
    
        className="mySwiper"
      >
        <SwiperSlide>
          <RoadMapSlide />
          </SwiperSlide>
        <SwiperSlide><RoadMapSlide /></SwiperSlide>
        <SwiperSlide><RoadMapSlide /></SwiperSlide>
      </Swiper>
    </>
  );
};
export default SwiperRoad;
