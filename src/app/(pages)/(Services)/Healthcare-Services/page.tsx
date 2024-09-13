"use client"

import BreadcrumbSection from "@/app/components/Breadcrump-Sections/Healthcare-Services"
import Image from "next/image"
import healthcare_section_img from "../../../images/healthcare_section_img.png";
import manage_health_section_img from "../../../images/manage_health_section_img.png";
import save_time_money_section from "../../../images/save_time_money_section.png";
import { ChartLineUp, DeviceMobile, Gear, Heartbeat, NotePencil, Timer, UsersThree, Wall, Wallet } from "phosphor-react"
import TestimonialSection from "@/app/components/Section/Testimonial-Section";
const HealthcareServices = () => {
 return(
  <>
  <BreadcrumbSection/>
  <section className="stp-30 sbp-30">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center max-xxl:overflow-hidden">
            <div
              className="max-w-[700px] text-center flex justify-center items-center flex-col"
            >
              <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                Healthcare
              </p>

              <h1 className="display-4 pt-4 pb-4 lg:pb-6">
                Healthcare payroll without the headaches.
              </h1>

              <p className="text-bodyText">
                We get it—managing payroll for healthcare is complex. That’s why
                we’ve designed our platform to streamline your workflow from
                start to finish.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 stp-15">
          <div
            className="col-span-12 lg:col-span-6 xl:col-span-5 flex justify-center items-center overflow-hidden"
          >
            <Image
              src={healthcare_section_img}
              alt="image"
              className="hover:scale-110 duration-500 w-full h-full"
            />
          </div>
          <div
            className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center"
          >
            <div className="flex justify-start items-start gap-4">
              <div
                className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]"
              >
                <i className="ph-fill ph-hand-coins"></i>
                
              </div>
              <div className="">
                <h4 className="heading-4">Payroll for Healthcare Professionals</h4>
                <p className="text-bodyText pt-3">
                  Efficient payroll processing tailored to the unique needs of
                  healthcare professionals. Ensure accurate and timely
                  compensation
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-4">
              <div
                className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]"
              >
                <Gear weight="fill"/>
              </div>
              <div className="">
                <h4 className="heading-4">Compliance Management</h4>
                <p className="text-bodyText pt-3">
                  Stay compliant with ever-evolving healthcare regulations. Our
                  services include compliance management to ensure your practice
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-4">
              <div
                className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]"
              >
                <UsersThree weight="fill"/>
              </div>
              <div className="">
                <h4 className="heading-4">Healthcare Consulting</h4>
                <p className="text-bodyText pt-3">
                  Receive personalized consulting services to address the unique
                  challenges of your healthcare practice.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-4">
              <div
                className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]"
              >
                <Heartbeat weight="fill"/>
              </div>
              <div className="">
                <h4 className="heading-4">
                  Financial Advisory for Healthcare Practices
                </h4>
                <p className="text-bodyText pt-3">
                  Navigate the financial landscape of healthcare with our expert
                  advisory services. From budgeting to strategic planning,
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
              <Timer weight="fill"/>
            </div>
            <h4 className="heading-4 pt-6 pb-3 text-center">Save Time and Money</h4>
            <p className="text-center lg:px-4 xxl:px-8">
              Ditch the spreadsheets and save hours each month with built-in
              time tracking, automated payroll, and worry-free tax filing.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="flex justify-start items-center flex-col">
            <div className="text-5xl text-s1">
              <NotePencil weight="fill"/>
            </div>
            <h4 className="heading-4 pt-6 pb-3 text-center">
              Compliance Made Simple
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
              <Gear weight="fill"/>
            </div>
            <h4 className="heading-4 pt-6 pb-3 text-center">Reduce turnover</h4>
            <p className="text-center lg:px-4 xxl:px-8">
              Burnout is real. Keep your team happy with better benefits,
              flexible scheduling options, and empowering
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6 max-xxl:overflow-hidden">
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-start items-start">
            <div className="max-w-[600px] flex justify-start items-start flex-col">
              <p className="bg-p1 py-3 px-5 rounded-full text-white">Healthcare</p>

              <h1 className="display-4 pt-4 pb-6">
                Manage Your Home Health Business.
              </h1>

              <p className="text-bodyText pb-8">
                Discover the freedom to oversee and optimize your home health
                care operations from anywhere with AccuPay's mobile-friendly
                management solutions.
              </p>

              <ul className="grid grid-cols-2 gap-6">
                <li className="col-span-1">
                  <div className="flex justify-start items-center gap-2">
                    <span
                      className="block bg-softBg1 rounded-full p-3 text-s1 text-2xl"
                    >
                      <i className="ph-fill ph-device-mobile"></i>
                      <DeviceMobile weight="fill"/>
                    </span>
                    Mobile Payroll Processing
                  </div>
                </li>
                <li className="col-span-1">
                  <div className="flex justify-start items-center gap-2">
                    <span
                      className="block bg-softBg1 rounded-full p-3 text-s1 text-2xl"
                    >
                      <Wallet weight="fill"/>
                    </span>
                    Billing and Invoicing
                  </div>
                </li>
                <li className="col-span-1">
                  <div className="flex justify-start items-center gap-2">
                    <span
                      className="block bg-softBg1 rounded-full p-3 text-s1 text-2xl"
                    >
                      <Timer weight="fill"/>
                    </span>
                    Real-Time Compliance
                  </div>
                </li>
                <li className="col-span-1">
                  <div className="flex justify-start items-center gap-2">
                    <span
                      className="block bg-softBg1 rounded-full p-3 text-s1 text-2xl"
                    >
                      <ChartLineUp weight="fill"/>
                    </span>
                    Performance Analytics
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-6 xl:col-span-5 xxl:col-start-8 flex justify-center items-center"
        >
          <Image
            src={manage_health_section_img}
            alt="image"
          />
        </div>
      </div>
    </section>
    <section className="stp-30 sbp-30 bg-softBg1 overflow-hidden">
      <div
        className="xxl:mr-[calc((100%-1296px)/2)] max-xxl:container grid grid-cols-12 lg:gap-6 xxl:gap-32"
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
          className="col-span-12 lg:col-span-6 flex justify-center items-start flex-col"
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
 )
}

export default HealthcareServices
