"use client";

import BreadcrumbSection from "@/app/components/Breadcrump-Sections/Taxations-Services";
import Image from "next/image";
import React from "react";
import taxation_services_img from "../../../images/taxation_services_img.png";
import taxation_video_img from "../../../images/taxation_video_img.png";
import { Coin, Headphones, LightbulbFilament, Play, User, UsersThree } from "phosphor-react";
import StepGuideSection from "@/app/components/Section/Step-Guide-Section";
import TestimonialSection from "@/app/components/Section/Testimonial-Section";

const TaxationServices = () => {
  return (
    <>
      <BreadcrumbSection />
      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
          <div className="col-span-12 lg:col-span-6 xxl:col-span-5">
            <div className="flex justify-start items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white">
                Taxation
              </p>
              <h2 className="display-4 pt-4 pb-6">
                AccuPay's Taxation Expertise
              </h2>
              <p className="text-bodyText pb-10">
                Feel neglected by your accountant? Experience the attentive and
                personalized service you deserve with AccuPay.
              </p>
              <div className="flex justify-center items-center w-full overflow-hidden">
                <Image
                  src={taxation_services_img}
                  alt="image"
                  className="hover:scale-110 duration-500 w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center">
            <div className="">
              <div className="flex justify-start items-start gap-4">
                <div className="text-s1 !leading-[0] text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1">
                  <Coin weight="fill" />
                </div>
                <div className="">
                  <h4 className="heading-4">Tax Preparation and Filing</h4>
                  <p className="text-bodyText pt-3">
                    Ensure a seamless tax season with our expert tax preparation
                    services. We handle all necessary documentation and filing
                    requirements,
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-start items-start gap-4">
                <div className="text-s1 !leading-[0] text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    className="fill-current"
                    height="32"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128.09,57.38a36,36,0,0,1,55.17-27.82,4,4,0,0,1-.56,7A52.06,52.06,0,0,0,152,84c0,1.17,0,2.34.12,3.49a4,4,0,0,1-6,3.76A36,36,0,0,1,128.09,57.38ZM240,160.61a24.47,24.47,0,0,1-13.6,22l-.44.2-38.83,16.54a6.94,6.94,0,0,1-1.19.4l-64,16A7.93,7.93,0,0,1,120,216H16A16,16,0,0,1,0,200V160a16,16,0,0,1,16-16H44.69l22.62-22.63A31.82,31.82,0,0,1,89.94,112H140a28,28,0,0,1,27.25,34.45l41.84-9.62A24.61,24.61,0,0,1,240,160.61Zm-16,0a8.61,8.61,0,0,0-10.87-8.3l-.31.08-67,15.41a8.32,8.32,0,0,1-1.79.2H112a8,8,0,0,1,0-16h28a12,12,0,0,0,0-24H89.94a15.86,15.86,0,0,0-11.31,4.69L56,155.31V200h63l62.43-15.61,38-16.18A8.56,8.56,0,0,0,224,160.61ZM168,84a36,36,0,1,0,36-36A36,36,0,0,0,168,84Z" />
                  </svg>
                </div>
                <div className="">
                  <h4 className="heading-4">Strategic Tax Planning</h4>
                  <p className="text-bodyText pt-3">
                    Plan for the future with our strategic tax planning
                    services. We help optimize your financial decisions to
                    maximize savings and minimize potential risks.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-start items-start gap-4">
                <div className="text-s1 !leading-[0] text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1">
                  <i className="ph-fill ph-seal-check"></i>
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    className="fill-current"
                    height="32"
                    viewBox="0 0 256 256"
                  >
                    <path xmlns="http://www.w3.org/2000/svg" d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/>
                    </svg>
                </div>
                <div className="">
                  <h4 className="heading-4">Compliance Assurance</h4>
                  <p className="text-bodyText pt-3">
                    Stay compliant with ever-changing tax regulations. Our team
                    stays abreast of updates, ensuring your business adheres to
                    all relevant tax laws
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-start items-start gap-4">
                <div className="text-s1 !leading-[0] text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1">
                  <Headphones weight="fill"/>
                </div>
                <div className="">
                  <h4 className="heading-4">Audit Support</h4>
                  <p className="text-bodyText pt-3">
                    In the event of an audit, our experienced team provides
                    support, helping you navigate the process efficiently and
                    effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-softBg1 stp-30 sbp-30">
      <div className="container">
        <div
          className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start"
        >
          <div className="max-w-[600px] flex justify-center items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">What We Do</p>
            <h1 className="display-4 pt-4">
              Why Choose AccuPay for Taxation Services?
            </h1>
          </div>
          <p className="text-bodyText max-w-[500px]">
            Accounting, Taxation & Payroll Processing Services refer to a range
            of professional services provided by accounting firms or specialized
            firms that assist businesses
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <div
              className="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 group items-start justify-start"
            >
              <div
                className="text-4xl !leading-[0] text-s1 p-3 group-hover:text-mainTextColor duration-500 bg-softBg1 group-hover:bg-white rounded-full"
              >
                <User weight="fill"/>
              </div>
              <h4 className="heading-4 pb-5 pt-8">Expert Tax Professionals</h4>
              <p className="text-bodyText">
                Our team of tax professionals brings extensive knowledge and
                expertise to handle various tax scenarios.
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <div
              className="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 group items-start justify-start"
            >
              <div
                className="text-4xl !leading-[0] text-s1 p-3 group-hover:text-mainTextColor duration-500 bg-softBg1 group-hover:bg-white rounded-full"
              >
                <UsersThree weight="fill"/>
              </div>
              <h4 className="heading-4 pb-5 pt-8">Personalized Consultations</h4>
              <p className="text-bodyText">
                We understand that every business is unique. Our personalized
                consultations ensure that our tax services.
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <div
              className="bg-white p-6 xl:p-8 flex flex-col border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 group items-start justify-start"
            >
              <div
                className="text-4xl !leading-[0] text-s1 p-3 group-hover:text-mainTextColor duration-500 bg-softBg1 group-hover:bg-white rounded-full"
              >
                <LightbulbFilament weight="fill"/>
              </div>
              <h4 className="heading-4 pb-5 pt-8">Strategic Advice</h4>
              <p className="text-bodyText">
                Beyond compliance, we offer strategic advice to help you make
                informed financial decisions that benefit your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <StepGuideSection/>
    <section className="bg-softBg1 stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
        <div className="col-span-12 lg:col-span-6">
          <div className="flex justify-center items-start flex-col">
            <h2 className="display-4">
              How Small Business Tax Returns Are Prepared
            </h2>
            <p className="font-medium py-5">
              They help clients meet deadlines, maintain proper documentation,
              and fulfill reporting requirements, including income tax, sales
              tax, payroll tax,
            </p>
            <p className="text-bodyText">
              They help clients meet deadlines, maintain proper documentation,
              and fulfill reporting requirements, including income tax, sales
              tax, payroll tax, and other applicable taxes. In the event of a
              tax audit or examination by tax authorities, taxation services
              provide support and representation.
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 xl:col-start-8">
          <div
            className="relative flex justify-center items-center bg-no-repeat bg-cover max-[400px]:h-[250px] max-[500px]:h-[300px] h-[370px] sm:h-[400px]"
            style={{backgroundImage: `url(${taxation_video_img.src})`}}
          >
            <button
              className="bg-softBg1 text-s1 !leading-[0] p-4 lg:p-6 rounded-full text-3xl lg:text-4xl hover:bg-s2 hover:text-white duration-500 z-20 relative videoModalButtonOpen"
            >
              <Play weight="fill"/>
            </button>
          </div>
        </div>
      </div>
    </section>
    <TestimonialSection/>
    </>
  );
};

export default TaxationServices;
