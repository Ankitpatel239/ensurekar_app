"use client";

import React from "react";

import circleIcon from "../../images/circleIcon.png";
import sliceIcon from "../../images/sliceIcon.png";
import solution_illustrations from "../../images/solution_illustrations.png";
import Image from "next/image";
import { ArrowUpRight, FileText, LightbulbFilament, RocketLaunch } from "phosphor-react";

const SolutionsSection = () => {
  return (
    <section className="stp-30 sbp-30 relative">
      <Image
        src={circleIcon}
        alt="circle icon"
        className="absolute top-10 left-0 max-xxl:hidden xxl:-left-72 xxxl:-left-40"
      />
      <Image
        src={sliceIcon}
        alt="slice icon"
        className="absolute right-0 sm:right-2 lg:right-10 top-10 xl:top-32 max-md:h-[80px]"
      />
      <div className="container z-10 relative">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center max-xxl:overflow-hidden">
            <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
              <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp">
                Solutions
              </p>

              <h1 className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown">
              The Indian Finance, tax , and legal Solution

              </h1>

              <p className="text-bodyText wow animate__animated animate__fadeInDown">
                When it comes to payroll solutions, we have a variety of options
                that benefit both your company and your contractor.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 stp-15 max-lg:gap-6">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex justify-center items-center overflow-hidden self-stretch">
              <Image
                src={solution_illustrations}
                alt="image"
                className="hover:scale-110 duration-500 w-full"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex justify-center items-start flex-col">
            <h1 className="heading-1 pb-5">Consolidate Payroll Processing</h1>
            <p className="text-bodyText">
              {/* We have designed a fast and effective payroll system that
              streamlines your payment process. */}
              We Verified CA, CS and Leagal Experts ready to streamline your business Opertaions.

            </p>
            <div className="grid grid-cols-2 gap-4 lg:gap-6 py-6 lg:py-10 w-full">
              <div className="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5">
                <FileText
                  size={40}
                  weight="fill"
                  className="rounded-full border border-strokeColor p-5 bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor transition-all duration-500 ease-in-out"
                />
                <p className="text-lg font-medium group-hover:text-s1 duration-500">
                  {/* Tax Preparation */}
                  Talk to a lawyer
                </p>
              </div>
              <div className="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#0e160f"
                  className=" p-5 rounded-full border border-strokeColor bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500 !leading-[0] flex justify-center items-center"
                  viewBox="0 0 256 256"
                >
                  <path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56Zm-10.9,27.15-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z" />
                </svg>

                <p className="text-lg font-medium group-hover:text-s1 duration-500">
                  {/* Payroll Processing */}
                  Talk to a Charted accountant
                </p>
              </div>
              <div className="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5">
                <LightbulbFilament
                  size={40}
                  weight="fill"
                  className="rounded-full border p-5 border-strokeColor bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500 !leading-[0] flex justify-center items-center"
                />
         
                <p className="text-lg font-medium group-hover:text-s1 duration-500">
                  {/* Cost Effective */}
                  Talk to the Company secretary
                </p>
              </div>
              <div className="group col-span-2 sm:col-span-1 flex justify-start items-center gap-5">
                <RocketLaunch
                  size={40}
                  weight="fill"
                  className=" p-5 rounded-full border border-strokeColor bg-softBg w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] text-4xl text-s1 group-hover:text-mainTextColor group-hover:bg-s2 group-hover:border-mainTextColor duration-500 !leading-[0] flex justify-center items-center"
                />
                
                <p className="text-lg font-medium group-hover:text-s1 duration-500 ">
                  {/* Scale Rapidly */}
                  Talk to an intellectual Property lawyer
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start">
              <a
                href="./contact.html"
                className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium font-bold"
              >
                Contact Us
                <span className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl !leading-[0]">
                <ArrowUpRight/>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
