"use client";
import React from "react";

import BreadcrumbSection from "@/app/components/Breadcrump-Sections/Payroll-Processing";
import Image from "next/image";
import we_help from "../../../images/we_help.png";
import what_we_do from "../../../images/what_we_do.png";
import { CheckCircle } from "phosphor-react";
import StepGuideSection from "@/app/components/Section/Step-Guide-Section";
import CounterSection from "@/app/components/Section/Counter-Section";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-Section";
import GotQuestionsSection from "@/app/components/Section/Got-Questions-Section";
const PayrollProcessing = () => {
  return (
    <>
      <BreadcrumbSection />
      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <h1 className="display-4">
              We help you with payroll processing services
            </h1>
            <p className="text-bodyText pt-4 pb-6 lg:pb-8">
              At AccuPay, we understand the critical importance of accurate and
              timely payroll processing. Our comprehensive payroll solutions
            </p>
            <h3 className="heading-3 pb-6">
              Our Payroll Processing Offerings:
            </h3>
            <ul className="flex flex-col gap-5 justify-start items-start">
              <li>
                <div className="flex justify-start items-center gap-2">
                  <span className="text-2xl text-s1">
                    <CheckCircle weight="fill" />
                  </span>
                  Efficient Payroll Management
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center gap-2">
                  <span className="text-2xl text-s1">
                    <CheckCircle weight="fill" />
                  </span>
                  Compliance Assurance
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center gap-2">
                  <span className="text-2xl text-s1">
                    <CheckCircle weight="fill" />
                  </span>
                  Direct Deposit Service
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center gap-2">
                  <span className="text-2xl text-s1">
                    <CheckCircle weight="fill" />
                  </span>
                  Tax Filing and Reporting
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center gap-2">
                  <span className="text-2xl text-s1">
                    <CheckCircle weight="fill" />
                  </span>
                  Employee Self-Service Portals
                </div>
              </li>
            </ul>
          </div>
          <div className="xxl:col-start-8 col-span-12 md:col-span-6 xxl:col-span-5 overflow-hidden flex justify-center items-center">
            <Image
              src={we_help}
              alt="image"
              className="object-fit hover:scale-110 duration-500"
            />
          </div>
        </div>
      </section>

      <section className="bg-softBg1 stp-30 sbp-30">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center max-xxl:overflow-hidden">
                <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
                  <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                    What We Do
                  </p>

                  <h1 className="display-4 pt-4 pb-4 lg:pb-6">
                    Payroll services we provide for the client
                  </h1>

                  <p className="text-bodyText">
                    At AccuPay, we specialize in delivering comprehensive
                    Accounting and Payroll Processing services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 stp-15">
            <div className="col-span-12 lg:col-span-6 xl:col-span-5 flex overflow-hidden justify-center items-center self-stretch">
              <Image
                src={what_we_do}
                alt="image"
                className="hover:scale-110 duration-500 w-full h-full"
              />
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col gap-6 xl:gap-10 justify-start items-start">
              <div className="flex justify-start items-start gap-4 sm:gap-6 group">
                <div className="heading-4 group-hover:bg-s2 p-4 rounded-full relative duration-500 after:absolute after:bg-strokeColor after:h-[200px] min-[340px]:after:h-[170px] min-[450px]:after:h-[130px] lg:after:h-[150px] after:w-[1px] after:right-1/2 group-hover:after:bg-s2 after:duration-500 group-hover:after:w-[3px]">
                  <span className="text-white bg-s1 w-10 h-10 rounded-full flex justify-center items-center !leading-none">
                    1
                  </span>
                </div>
                <div className="border-b border-strokeColor">
                  <h4 className="heading-4">Payroll Processing Services</h4>
                  <p className="text-bodyText pt-4 pb-6 xl:pb-10">
                    Efficiently manage your payroll with our state-of-the-art
                    processing services. From accurate salary disbursements.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-4 sm:gap-6 group">
                <div className="heading-4 group-hover:bg-s2 p-4 rounded-full relative duration-500 after:absolute after:bg-strokeColor after:h-[200px] min-[340px]:after:h-[170px] min-[450px]:after:h-[130px] lg:after:h-[150px] after:w-[1px] after:right-1/2 group-hover:after:bg-s2 after:duration-500 group-hover:after:w-[3px]">
                  <span className="text-white bg-s1 w-10 h-10 rounded-full flex justify-center items-center !leading-none">
                    2
                  </span>
                </div>
                <div className="border-b border-strokeColor">
                  <h4 className="heading-4">Accounting and Bookkeeping</h4>
                  <p className="text-bodyText pt-4 pb-6 xl:pb-10">
                    Navigate the complexities of financial management with our
                    professional accounting and bookkeeping services.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-4 sm:gap-6 group">
                <div className="heading-4 group-hover:bg-s2 p-4 rounded-full relative duration-500 after:absolute after:bg-strokeColor after:h-[200px] min-[340px]:after:h-[170px] min-[450px]:after:h-[130px] lg:after:h-[150px] after:w-[1px] after:right-1/2 group-hover:after:bg-s2 after:duration-500 group-hover:after:w-[3px]">
                  <span className="text-white bg-s1 w-10 h-10 rounded-full flex justify-center items-center !leading-none">
                    3
                  </span>
                </div>
                <div className="border-b border-strokeColor">
                  <h4 className="heading-4">Tax Preparation and Filing</h4>
                  <p className="text-bodyText pt-4 pb-6 xl:pb-10">
                    Ensure a seamless tax season with our expert tax preparation
                    and filing services. We handle all necessary documentation.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-4 sm:gap-6 group">
                <div className="heading-4 group-hover:bg-s2 p-4 rounded-full relative duration-500">
                  <span className="text-white bg-s1 w-10 h-10 rounded-full flex justify-center items-center !leading-none">
                    4
                  </span>
                </div>
                <div className="">
                  <h4 className="heading-4">Financial Advisory</h4>
                  <p className="text-bodyText pt-4 pb-6 xl:pb-10">
                    Empower your business with strategic financial guidance. Our
                    experienced advisors provide insights and recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StepGuideSection />
      <CounterSection />
      <WhyEnsurekarSection />
      <GotQuestionsSection />
    </>
  );
};

export default PayrollProcessing;
