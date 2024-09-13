"use client";
import React from "react";
import Image from "next/image";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/Real-State-Services";
import real_state_section_img from "../../../images/real_state_section_img.png";
import unlimited_payrolls_img from "../../../images/unlimited_payrolls_img.png";
import save_time_money_section from "../../../images/save_time_money_section.png";
import { Buildings, Handshake, Money, Star, Timer } from "phosphor-react";
import TestimonialSection from "@/app/components/Section/Testimonial-Section";
const RealStateServices = () => {
  return (
    <>
      <BreadcrumbSection />
      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 xxl:col-span-5 flex justify-start items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">
              Real-estate
            </p>
            <h2 className="display-4 pt-4 pb-6">
              Real estate payroll, real simple
            </h2>
            <p className="text-bodyText pb-6 lg:pb-10">
              With reliable commission payments and support for both employees
              and independent contractors, Gusto takes the complexity out of
              payroll for real estate.
            </p>
            <div className="flex justify-center items-center w-full overflow-hidden">
              <Image
                src={real_state_section_img}
                alt="image"
                className="hover:scale-110 duration-500 w-full h-full"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center">
            <div className="">
              <div className="flex justify-start items-start gap-4">
                <div className="text-s1 !leading-[0] text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1">
                  <Buildings weight="fill" />
                </div>
                <div className="">
                  <h4 className="heading-4">Property Management</h4>
                  <p className="text-bodyText pt-3">
                    Effortlessly manage your properties with our professional
                    property management services. From tenant relations to
                    maintenance,
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex justify-start items-start gap-4">
                <div className="text-s1 !leading-[0] text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current group-hover:text-white duration-500"
                    width="32"
                    height="32"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128.09,57.38a36,36,0,0,1,55.17-27.82,4,4,0,0,1-.56,7A52.06,52.06,0,0,0,152,84c0,1.17,0,2.34.12,3.49a4,4,0,0,1-6,3.76A36,36,0,0,1,128.09,57.38ZM240,160.61a24.47,24.47,0,0,1-13.6,22l-.44.2-38.83,16.54a6.94,6.94,0,0,1-1.19.4l-64,16A7.93,7.93,0,0,1,120,216H16A16,16,0,0,1,0,200V160a16,16,0,0,1,16-16H44.69l22.62-22.63A31.82,31.82,0,0,1,89.94,112H140a28,28,0,0,1,27.25,34.45l41.84-9.62A24.61,24.61,0,0,1,240,160.61Zm-16,0a8.61,8.61,0,0,0-10.87-8.3l-.31.08-67,15.41a8.32,8.32,0,0,1-1.79.2H112a8,8,0,0,1,0-16h28a12,12,0,0,0,0-24H89.94a15.86,15.86,0,0,0-11.31,4.69L56,155.31V200h63l62.43-15.61,38-16.18A8.56,8.56,0,0,0,224,160.61ZM168,84a36,36,0,1,0,36-36A36,36,0,0,0,168,84Z" />
                  </svg>
                </div>
                <div className="">
                  <h4 className="heading-4">Investment Analysis</h4>
                  <p className="text-bodyText pt-3">
                    Make informed investment decisions with our detailed
                    investment analysis. Our experts assess potential properties
                    and provide insights to guide
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-start items-start gap-4">
                <div className="text-s1 !leading-[0] text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1">
                  <Handshake weight="fill"/>
                </div>
                <div className="">
                  <h4 className="heading-4">Real Estate Transactions</h4>
                  <p className="text-bodyText pt-3">
                    Navigate real estate transactions with confidence. Our team
                    facilitates smooth buying, selling, or leasing processes,
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-start items-start gap-4">
                <div className="text-s1 !leading-[0] text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1">
                  <Star weight="fill"/>
                </div>
                <div className="">
                  <h4 className="heading-4">Lease Administration</h4>
                  <p className="text-bodyText pt-3">
                    Streamline lease management with our lease administration
                    services. We handle documentation, renewals,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-softBg1 stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <div className="flex justify-start items-center flex-col">
            <div className="text-5xl text-s1">
              <Money weight="fill"/>
            </div>
            <h4 className="heading-4 pt-6 pb-3 text-center">
              Commissions Made Easy
            </h4>
            <p className="text-center lg:px-4 xxl:px-8">
              Whether admin or agent, employee or contractor, run unlimited
              payrolls for your team in just a few clicks.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="flex justify-start items-center flex-col">
            <div className="text-5xl text-s1">
              <Timer weight="fill"/>
            </div>
            <h4 className="heading-4 pt-6 pb-3 text-center">
              Time-Saving Workflows
            </h4>
            <p className="text-center lg:px-4 xxl:px-8">
              Employees can access earnings, check their paystubs, and add
              expenses, at the office or on the go.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="flex justify-start items-center flex-col">
            <div className="text-5xl text-s1">
              <Star weight="fill"/>
              
            </div>
            <h4 className="heading-4 pt-6 pb-3 text-center">
              Worry-free from start to finish
            </h4>
            <p className="text-center lg:px-4 xxl:px-8">
              Never stress about late or incorrect payments again. With Gusto,
              payroll is accurate, efficient, and on time, every time.
            </p>
          </div>
        </div>
      </div>
    </section>

      <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-start items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">
              Unlimited Payrolls
            </p>
            <h2 className="display-4 pt-4 pb-6">
              Covering Payroll Hourly, Salaried, or Commission
            </h2>
            <p className="text-bodyText">
              Our built-in commission tool gets your agents paid quickly and
              accurately every time they close. Pay your salaried employees on
              AutoPilot, and easily approve hours for any support staff and
              contractors.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:col-start-8">
          <div className="flex justify-center items-center">
            <Image src={unlimited_payrolls_img} alt="image" />
          </div>
        </div>
      </div>
    </section>

    <section className="stp-30 sbp-30 bg-softBg1 overflow-hidden">
      <div
        className="xxl:mr-[calc((100%-1296px)/2)] max-xxl:container  grid grid-cols-12 lg:gap-6 xxl:gap-32"
      >
        <div
          className="col-span-12 lg:col-span-6 flex justify-start items-start self-stretch max-lg:order-2"
        >
          <Image
            src={save_time_money_section}
            alt="image"
            className="w-full h-full"
          />
        </div>
        <div
          className="col-span-12 lg:col-span-6 ml-5 flex justify-center items-start flex-col"
        >
          <p className="bg-p1 py-3 px-5 rounded-full text-white">
            Save time & money
          </p>

          <h2 className="display-4 pt-4 pb-6">
            Time-Saving Solutions for Business Growth
          </h2>

          <p className="text-bodyText">
            Our built-in commission tool gets your agents paid quickly and
            accurately every time they close. Pay your salaried employees on
            AutoPilot, and easily approve hours for any support staff and
            contractors.
          </p>
        </div>
      </div>
    </section>

    <TestimonialSection/>
    </>
  );
};

export default RealStateServices;
