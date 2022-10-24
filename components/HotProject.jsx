import React from "react";
import ItemHotProject from "./layout/ItemHotProject";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const HotProject = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="mt-36 ml-12">
        <div className="flex justify-between mr-9 items-center">
          <p className="font-inter text-4xl font-bold leading-[78px] pt-3 ">
            Hot Prooject
          </p>
          <p className="hidden sm:flex">lihat semua </p>
        </div>
        <div className="flex mt-7 pb-9 ">
          <Swiper
            // slidesPerView={1}
            spaceBetween={150}
            className="overflow-visible"
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="py-16">
                <ItemHotProject />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-16">
                <ItemHotProject />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-16">
                <ItemHotProject />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-16">
                <ItemHotProject />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-16">
                <ItemHotProject />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-16">
                <ItemHotProject />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="py-16">
                <ItemHotProject />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HotProject;
