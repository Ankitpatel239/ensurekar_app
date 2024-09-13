"use client";

import React from "react";
import logo1 from "../../images/logo1.png";
import logo2 from "../../images/logo2.png";
import logo3 from "../../images/logo3.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // Import Autoplay CSS
import { Autoplay } from "swiper/modules"; // Correct import for Autoplay

const CompanySlider = () => {
  return (
    <section className="stp-15 sbp-15 container grid grid-cols-12 gap-6 border-b border-strokeColor">
      <div className="col-span-12 sm:col-span-6 xl:col-span-4">
        <p className="text-xl lg:text-2xl text-bodyText relative after:absolute after:top-[55%] after:right-0 after:w-[50px] after:h-[2px] after:bg-bodyText max-xxl:after:content-none">
          <span className="font-bold text-mainTextColor">15,000+</span>
          businesses from small startups to household names
        </p>
      </div>
      <div className="col-span-12 sm:col-span-6 xl:col-span-8 flex pt-4">
        <Swiper
          modules={[Autoplay]} // Properly pass the Autoplay module
          direction="horizontal"
          spaceBetween={24}
          slidesPerView={4}
          className="continuous-continuous"
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={6000}
        >
          <SwiperSlide>
            <a href="" className="flex justify-center items-center">
              <Image src={logo1} alt="logo1" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="flex justify-center items-center">
              <Image src={logo2} alt="logo2" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="flex justify-center items-center">
              <Image src={logo3} alt="logo3" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="flex justify-center items-center">
              <Image src={logo2} alt="logo2" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="flex justify-center items-center">
              <Image src={logo3} alt="logo3" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="flex justify-center items-center">
              <Image src={logo1} alt="logo1" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="flex justify-center items-center">
              <Image src={logo2} alt="logo2" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="flex justify-center items-center">
              <Image src={logo3} alt="logo3" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="flex justify-center items-center">
              <Image src={logo3} alt="logo3" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="" className="flex justify-center items-center">
              <Image src={logo2} alt="logo2" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CompanySlider;
