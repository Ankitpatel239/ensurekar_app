"use client";
import React from "react";
import Link from "next/link";
import { Buildings, Heartbeat, User } from "phosphor-react";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-Section";
import StepGuideSection from "@/app/components/Section/Step-Guide-Section";
import ExperienceAccupaySection from "@/app/components/Section/Experience-Accupay-Section";
import PricingSection from "@/app/components/Section/Pricing-Section";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import FAQsSection from "@/app/components/other-page-sections/FAQs-Section";
const AllServices = () => {
  return (
    <>
      {/* Breadcrumb Section  Start*/}

      <BreadcrumbSection />

      {/* Breadcrumb Section  End*/}

      {/* Core Services Section Start */}
      <section className="stp-30 sbp-30 overflow-hidden">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-w-[600px] flex-col">
              <h1 className="display-4 wow animate__animated animate__fadeInUp">
                Our Core Services
              </h1>
              <p className="text-bodyText text-center pt-6 wow animate__animated animate__fadeInDown">
                hile we go so much further and do so much more for clients,
                these core services help provide a framework to provide you with
                relevant, reliable & real-time reporting.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 stp-15 gap-6">
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 wow animate__animated animate__fadeInUp"
              data-wow-duration="1.3s"
            >
              <div className="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                  <User />
                </div>
                <Link href="/accounting-services">
                  <h4 className="heading-4 pb-5 pt-8 hover:underline duration-300">
                    Accounting Services
                  </h4>
                </Link>
                <p className="text-bodyText lg:pr-4">
                  Efficient payroll management is at the heart of our services.
                  Experience seamless payroll processing.
                </p>
              </div>
            </div>
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 wow animate__animated animate__fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay=".2s"
            >
              <div className="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    height="47"
                    className="fill-current group-hover:text-white duration-500"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128.09,57.38a36,36,0,0,1,55.17-27.82,4,4,0,0,1-.56,7A52.06,52.06,0,0,0,152,84c0,1.17,0,2.34.12,3.49a4,4,0,0,1-6,3.76A36,36,0,0,1,128.09,57.38ZM240,160.61a24.47,24.47,0,0,1-13.6,22l-.44.2-38.83,16.54a6.94,6.94,0,0,1-1.19.4l-64,16A7.93,7.93,0,0,1,120,216H16A16,16,0,0,1,0,200V160a16,16,0,0,1,16-16H44.69l22.62-22.63A31.82,31.82,0,0,1,89.94,112H140a28,28,0,0,1,27.25,34.45l41.84-9.62A24.61,24.61,0,0,1,240,160.61Zm-16,0a8.61,8.61,0,0,0-10.87-8.3l-.31.08-67,15.41a8.32,8.32,0,0,1-1.79.2H112a8,8,0,0,1,0-16h28a12,12,0,0,0,0-24H89.94a15.86,15.86,0,0,0-11.31,4.69L56,155.31V200h63l62.43-15.61,38-16.18A8.56,8.56,0,0,0,224,160.61ZM168,84a36,36,0,1,0,36-36A36,36,0,0,0,168,84Z" />
                  </svg>
                </div>
                <Link href="/payroll-processing">
                  <h4 className="heading-4 pb-5 pt-8 hover:underline duration-300">
                    Payroll Processing
                  </h4>
                </Link>

                <p className="text-bodyText lg:pr-4">
                  Efficient payroll management is at the heart of our services.
                  Experience seamless payroll processing,
                </p>
              </div>
            </div>
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 wow animate__animated animate__fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay=".4s"
            >
              <div className="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                  <i className="ph-fill ph-file"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    className="fill-current group-hover:text-white duration-500"
                    height="47"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Z" />
                  </svg>
                </div>
                <Link href="/taxation-services">
                  <h4 className="heading-4 pb-5 pt-8 hover:underline duration-300">
                    Taxation services
                  </h4>
                </Link>

                <p className="text-bodyText lg:pr-4">
                  Efficient payroll management is at the heart of our services.
                  Experience seamless payroll processing,
                </p>
              </div>
            </div>
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 wow animate__animated animate__fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay=".6s"
            >
              <div className="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                  <Buildings />
                </div>
                <Link href="/real-state-services">
                  <h4 className="heading-4 pb-5 pt-8 hover:underline duration-300">
                    Real State Service
                  </h4>
                </Link>
                <p className="text-bodyText lg:pr-4">
                  Efficient payroll management is at the heart of our services.
                  Experience seamless payroll processing,
                </p>
              </div>
            </div>
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 wow animate__animated animate__fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay=".8s"
            >
              <div className="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                  <Heartbeat />
                </div>
                <Link href="/healthcare-services">
                  <h4 className="heading-4 pb-5 pt-8 hover:underline duration-300">
                    Healthcare Services
                  </h4>
                </Link>

                <p className="text-bodyText lg:pr-4">
                  Efficient payroll management is at the heart of our services.
                  Experience seamless payroll processing,
                </p>
              </div>
            </div>
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 wow animate__animated animate__fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="1s"
            >
              <div className="flex justify-start items-start flex-col p-6 lg:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="47"
                    height="47"
                    className="fill-current group-hover:text-white duration-500"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M171,71.42,149.54,80,171,88.57A8,8,0,1,1,165,103.42L128,88.61,91,103.42A8,8,0,1,1,85,88.57L106.46,80,85,71.42A8,8,0,1,1,91,56.57l37,14.81,37-14.81A8,8,0,1,1,171,71.42Zm53,8.33c0,42.72-8,75.4-14.69,95.28-8.73,25.8-20.63,45.49-32.65,54a15.69,15.69,0,0,1-15.95,1.41,16.09,16.09,0,0,1-9.18-13.36C150.68,205.58,146.48,168,128,168s-22.68,37.59-23.53,49.11a16.09,16.09,0,0,1-16,14.9,15.67,15.67,0,0,1-9.13-2.95c-12-8.53-23.92-28.22-32.65-54C40,155.15,32,122.47,32,79.75A56,56,0,0,1,88,24h80A56,56,0,0,1,224,79.75Zm-16,0A40,40,0,0,0,168,40H88A40,40,0,0,0,48,79.76c0,40.55,7.51,71.4,13.85,90.14,11.05,32.66,23,43.37,26.61,46C91.57,174.67,105.59,152,128,152s36.45,22.71,39.49,63.94h0c3.6-2.59,15.57-13.26,26.66-46C200.49,151.16,208,120.31,208,79.76Z" />
                  </svg>
                </div>
                <Link href="/dentist-services">
                  <h4 className="heading-4 pb-5 pt-8 hover:underline duration-300">
                    Dentist Services
                  </h4>
                </Link>

                <p className="text-bodyText lg:pr-4">
                  Efficient payroll management is at the heart of our services.
                  Experience seamless payroll processing,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Core Services Section End */}
      <WhyEnsurekarSection />
      <StepGuideSection />
      <ExperienceAccupaySection />
      <PricingSection />
      <FAQsSection/>
    </>
  );
};

export default AllServices;
