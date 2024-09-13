"use client"

import React from "react";
import Image from "next/image";
import logo_white from "../images/ensure_logo.png";
import {
  FacebookLogo,
  PinterestLogo,
  RedditLogo,
  YoutubeLogo,
} from "phosphor-react";
const footer = () => {
  return (
    <footer className="bg-mainTextColor text-white/60">
      <div className="container grid grid-cols-12 stp-30 sbp-30 gap-6 max-xxl:pr-4">
        <div className="col-span-12 min-[450px]:col-span-6 lg:col-span-3 flex flex-col gap-6 lg:gap-8">
          <a href="./index.html">
            <Image src={logo_white} alt="image" />
          </a>
          <p className="">
            Your trusted partner in accounting and payroll solutions. We deliver
            precision, efficiency, and tailored services
          </p>
          <ul className="flex justify-start items-center gap-2">
            <li className="  ">
              <a
                className="bg-s1/50 rounded-full w-[40px] h-[40px] hover:bg-s1 duration-500 hover:-translate-y-1 text-white flex justify-center items-center"
                href="/"
              >
                <FacebookLogo className="leading-[0] text-2xl" />
              </a>
            </li>
            <li className="  ">
              <a
                className="bg-s1/50 rounded-full w-[40px] h-[40px] hover:bg-s1 duration-500 hover:-translate-y-1 text-white flex justify-center items-center"
                href="/"
              >
                <RedditLogo className="leading-[0] text-2xl" />
              </a>
            </li>
            <li className="  ">
              <a
                className="bg-s1/50 rounded-full w-[40px] h-[40px] hover:bg-s1 duration-500 hover:-translate-y-1 text-white flex justify-center items-center"
                href="/"
              >
                <YoutubeLogo className="leading-[0] text-2xl" />
              </a>
            </li>
            <li className="  ">
              <a
                className="bg-s1/50 rounded-full w-[40px] h-[40px] hover:bg-s1 duration-500 hover:-translate-y-1 text-white flex justify-center items-center"
                href="/"
              >
                <PinterestLogo className="leading-[0] text-2xl" />
              </a>
            </li>
          </ul>
        </div>

        <div className="xl:pl-30 col-span-12 min-[400px]:col-span-6 lg:col-span-3">
          <h4 className="heading-4 mb-6 pb-2 relative text-white after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 hover:after:w-[40%] after:duration-500">
            Resources
          </h4>
          <ul className="flex flex-col gap-4 md:gap-5">
            <li>
              <a
                href="./index.html"
                className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="./about.html"
                className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
              >
                About Page
              </a>
            </li>
            <li>
              <a
                href="./faq.html"
                className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
              >
                FAQs Page
              </a>
            </li>
            <li>
              <a
                href="./blog.html"
                className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="./contact.html"
                className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="xl:pl-30 col-span-12 min-[400px]:col-span-6 lg:col-span-3">
          <h4 className="heading-4 mb-6 pb-2 relative text-white after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 hover:after:w-[40%] after:duration-500">
            Services
          </h4>
          <ul className="flex flex-col gap-4 md:gap-5">
            <li>
              <a
                href="./dentist-services.html"
                className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
              >
                Dentist Services
              </a>
            </li>
            <li>
              <a
                href="./healthcare-services.html"
                className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
              >
                Healthcare Services
              </a>
            </li>
            <li>
              <a
                href="./taxation-services.html"
                className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
              >
                Taxations Services
              </a>
            </li>
            <li>
              <a
                href="./accounting-services.html"
                className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
              >
                Accounting Services
              </a>
            </li>
            <li>
              <a
                href="./payroll-processing.html"
                className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
              >
                Payroll Processing
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-12 min-[450px]:col-span-6 lg:col-span-3 xl:pl-30">
          <h4 className="heading-4 mb-4 md:mb-6 pb-2 relative after:absolute after:w-[20%] after:h-[2px] after:bottom-0 after:left-0 after:bg-p1 hover:after:w-[40%] after:duration-500 text-white">
            Get In Touch
          </h4>
          <ul className="flex flex-col gap-4 md:gap-3">
            <li>
              <a
                href="mailto:info@mail.com"
                className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
              >
                <span className="text-2xl pt-2">
                  <i className="ph ph-envelope-simple-open"></i>
                </span>
                info@mail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+1234579"
                className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500"
              >
                <span className="text-2xl pt-2">
                  <i className="ph ph-phone-call"></i>
                </span>
                +112 1254 124
              </a>
            </li>
            <li>
              <p className="flex justify-start items-center gap-2 hover:text-white hover:translate-x-2 duration-500">
                <span className="text-2xl pt-2">
                  <i className="ph ph-paper-plane-tilt"></i>
                </span>
                255 Sheet, City Name Home Land, NY
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 flex justify-between items-center max-md:flex-col gap-6">
          <p className="max-sm:text-center">
            Accupay © Copyright 2024. All Rights Reserved.
          </p>
          <div className="flex justify-end items-center">
            <a
              href="./privacy-policy.html"
              className="border-r-2 border-white/60 pr-3 hover:text-white duration-500 leading-none"
            >
              Privacy Policy
            </a>
            <a
              href="./terms-conditions.html"
              className="pl-3 hover:text-white duration-500 leading-none"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
