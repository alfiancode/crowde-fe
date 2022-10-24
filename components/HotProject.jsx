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
          <p className="font-inter text-5xl font-bold leading-[78px] ">
            Hot Prooject
          </p>
          <p className="">lihat semua </p>
        </div>
        <div className="flex mt-7 pb-9 ">
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              // 768: {
              //   width: 768,
              //   slidesPerView: 2,
              // },
            }}
            slidesPerView={1}
            spaceBetween={130}
            className="overflow-visible"
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
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
