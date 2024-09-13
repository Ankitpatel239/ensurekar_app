"use client"
import React from 'react'

import BreadcrumbSection from '@/app/components/Breadcrump-Sections/Accounting-Services'
import { Calculator, ChartLineUp, ChatCircle, CheckCircle, FileText, Money, NotePencil } from 'phosphor-react'
import Image from 'next/image'
import never_worry_img from "../../../images/never_worry_img.png"
import StepGuideSection from '@/app/components/Section/Step-Guide-Section'
import account_section_img from "../../../images/account_section_img.png"
import FAQsSection from '@/app/components/other-page-sections/FAQs-Section'
const AccountingServices = () => {
  return (
    <>
    <BreadcrumbSection />
    <section className="stp-30 sbp-30">
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center max-xxl:overflow-hidden">
        <div
          className="max-w-[700px] text-center flex justify-center items-center flex-col"
        >
          <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
            Accounting Services
          </p>

          <h1 className="display-4 pt-4 pb-4 lg:pb-6">
            Explore Our Accounting Services
          </h1>

          <p className="text-bodyText">
            At AccuPay, our Accounting Services are designed to provide you
            with a comprehensive and accurate financial picture.
          </p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="grid grid-cols-12 stp-15 gap-6">
        <div
          className="col-span-12 sm:col-span-6 xl:col-span-3 wow animate__animated animate__fadeInUp"
          data-wow-duration="1.3s"
        >
          <div
            className="flex justify-start items-start flex-col p-6 xl:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500"
          >
            <div
              className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl"
            >
              <Calculator weight='fill'/>
            </div>
            <h4 className="heading-4 pb-5 pt-8">Bookkeeping</h4>
            <p className="text-bodyText lg:pr-4">
              Maintain precise and up-to-date records with our professional
              bookkeeping services.
            </p>
          </div>
        </div>
        <div
          className="col-span-12 sm:col-span-6 xl:col-span-3 wow animate__animated animate__fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay=".1s"
        >
          <div
            className="flex justify-start items-start flex-col p-6 xl:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500"
          >
            <div
              className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl"
            >
              <FileText  weight='fill'/>
            

            </div>
            <h4 className="heading-4 pb-5 pt-8">Financial Reporting</h4>
            <p className="text-bodyText lg:pr-4">
              Gain valuable insights into your business's performance with our
              detailed financial reporting.
            </p>
          </div>
        </div>
        <div
          className="col-span-12 sm:col-span-6 xl:col-span-3 wow animate__animated animate__fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay=".2s"
        >
          <div
            className="flex justify-start items-start flex-col p-6 xl:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500"
          >
            <div
              className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl"
            >
              <Money weight='fill'/>
            </div>
            <h4 className="heading-4 pb-5 pt-8">Tax Planning</h4>
            <p className="text-bodyText lg:pr-4">
              Stay tax-compliant and maximize your savings with our expert tax
              planning services.
            </p>
          </div>
        </div>
        <div
          className="col-span-12 sm:col-span-6 xl:col-span-3 wow animate__animated animate__fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay=".3s"
        >
          <div
            className="flex justify-start items-start flex-col p-6 xl:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500"
          >
            <div
              className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl"
            >
              <ChartLineUp weight='fill'/>
            </div>
            <h4 className="heading-4 pb-5 pt-8">Financial Analysis</h4>
            <p className="text-bodyText lg:pr-4">
              Harness the power of data with our financial analysis services.
              We interpret financial trends,
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-softBg1 stp-30 sbp-30 max-xxl:overflow-hidden">
      <div className="container grid grid-cols-12 gap-6">
        <div
          className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center max-lg:order-2 max-lg:stp-15 overflow-hidden"
        >
          <Image
            src={never_worry_img}
            alt="image"
            className="hover:scale-110 duration-500 w-full h-full"
          />
        </div>

        <div className="xxl:col-start-7 col-span-12 lg:col-span-6">
          <h1 className="display-4">Never Worry About Your Accounting Again</h1>
          <p className="pt-6 text-bodyText pb-6 xl:pb-8">
            Experience peace of mind with AccuPay. Our comprehensive accounting
            services ensure accuracy and compliance, so you can focus on growing
            your business
          </p>
          <div
            className="flex flex-col gap-6 xl:gap-10 justify-start items-start pb-6 xl:pb-12"
          >
            <div className="flex justify-start items-center gap-4">
              <div
                className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-white !leading-[0]"
              >
                <ChatCircle weight='fill'/>
              </div>
              <div className="">
                <h4 className="heading-4">Great Communication</h4>
                <p className="text-bodyText pt-2">
                  We resolve issues and offer advice quickly.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div
                className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-white !leading-[0]"
              >
                <ChartLineUp weight='fill'/>
              </div>
              <div className="">
                <h4 className="heading-4">Growth Potential</h4>
                <p className="text-bodyText pt-2">
                  We proactively offer growth and profitability advice
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div
                className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-white !leading-[0]"
              >
                <NotePencil  weight='fill'/>
              </div>
              <div className="">
                <h4 className="heading-4">Stay in Compliance</h4>
                <p className="text-bodyText pt-2">
                  Your dedicated expert knows your business inside and out.
                </p>
              </div>
            </div>
          </div>
          <a
            href="contact"
            className="bg-s2 rounded-full py-3 px-6 font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
    <StepGuideSection/>
    <section className="bg-softBg1 stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <div className="flex flex-col justify-start items-start">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">Accountant</p>
            <h1 className="display-4 pt-4 pb-4 lg:pb-6">
              Time for a Proactive Accountant
            </h1>
            <p className="text-bodyText pb-6 lg:pb-8">
              Feel neglected by your accountant? Experience the attentive and
              personalized service you deserve with AccuPay.
            </p>

            <ul className="flex flex-col gap-6 justify-start items-start w-full">
              <li className="flex justify-start items-start gap-3 pb-5 w-full">
                <div className="text-s1 text-3xl">
                  <CheckCircle weight="fill"/>
                </div>
                <div className="">
                  <h4 className="heading-4">Communication issues.</h4>
                  <p className="text-bodyText pt-2">
                    Plus, accountants often charge by the minute.
                  </p>
                </div>
              </li>

              <li className="flex justify-start items-start gap-3 pb-5 w-full">
                <div className="text-s1 text-3xl">
                  <CheckCircle weight="fill"/>
                </div>
                <div className="">
                  <h4 className="heading-4">Shrinking business.</h4>
                  <p className="text-bodyText pt-2">
                    There's no such thing as staying the same; you're either
                    growing or you're shrinking.
                  </p>
                </div>
              </li>

              <li className="flex justify-start items-start gap-3 pb-5 w-full">
                <div className="text-s1 text-3xl">
                  <CheckCircle weight="fill"/>
                </div>
                <div className="">
                  <h4 className="heading-4">
                    Compliance and customer service problems.
                  </h4>
                  <p className="text-bodyText pt-2">
                    National providers are known for mistakes and poor issue
                    resolution.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="xxl:col-start-8 col-span-12 lg:col-span-6 xxl:col-span-5 overflow-hidden flex justify-center items-center"
        >
          <Image
            src={account_section_img}
            alt="image"
            className="object-fit hover:scale-110 duration-500 w-full h-full"
          />
        </div>
      </div>
    </section>
    <FAQsSection/>
  </>
  )
}

export default AccountingServices
