"use client"

import BreadcrumbSection from '@/app/components/Breadcrump-Sections/Dentist-Services'
import React from 'react';
import Image from 'next/image';
import dentist_section_img from "../../../images/dentist_section_img.png"
import save_time_money_section from "../../../images/save_time_money_section.png"
import dedicated_img from "../../../images/dedicated_img.png"
import { ArrowUpRight, Headphones, User, UsersThree } from 'phosphor-react';
import Link from 'next/link';
import TestimonialSection from '@/app/components/Section/Testimonial-Section';
const DentistServices = () => {
  return (
    <>
   <BreadcrumbSection />
   <section className="stp-30 sbp-30">
      <div className="container grid grid-cols-12 gap-6">
        <div
          className="col-span-12 lg:col-span-6 xxl:col-span-5 flex justify-start items-start flex-col"
        >
          <p className="bg-p1 py-3 px-5 rounded-full text-white">Dentist</p>
          <h2 className="display-4 pt-4 pb-6">Tailored Solutions for Dentists</h2>
          <p className="text-bodyText pb-6 lg:pb-10">
            AccuPay is dedicated to supporting the financial health of your
            dental practice. From payroll solutions for dental professionals to
            compliance management,
          </p>
          <div className="flex justify-center items-center w-full overflow-hidden">
            <Image
              src={dentist_section_img}
              alt="image"
              className="hover:scale-110 duration-500 w-full h-full"
            />
          </div>
        </div>
        <div
          className="col-span-12 lg:col-span-6 xxl:col-start-7 flex flex-col gap-6 xl:gap-10 justify-center items-center pb-6 xl:pb-12"
        >
          <div className="flex justify-start items-start gap-4">
            <div
              className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]"
            >
              <i className="ph-fill ph-tooth"></i>
              
            </div>
            <div className="">
              <h4 className="heading-4">Payroll for Dental Professionals</h4>
              <p className="text-bodyText pt-3">
                Accurate and efficient payroll processing tailored to meet the
                unique needs of dental professionals. Ensure your dedicated team
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-4">
            <div
              className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]"
            >
              <UsersThree weight='fill'/>
            </div>
            <div className="">
              <h4 className="heading-4">Compliance Management</h4>
              <p className="text-bodyText pt-3">
                Stay compliant with the ever-evolving regulations in the dental
                industry. Our services include compliance management
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-4">
            <div
              className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]"
            >
              <User weight='fill'/>
            </div>
            <div className="">
              <h4 className="heading-4">Financial Advisory for Dental Practices</h4>
              <p className="text-bodyText pt-3">
                Navigate the financial landscape of dental care with our expert
                advisory services. From budgeting to strategic planning,
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-4">
            <div
              className="text-s1 text-2xl sm:text-3xl p-3 sm:p-4 rounded-full bg-softBg1 !leading-[0]"
            >
              <UsersThree weight='fill'/>   
            </div>
            <div className="">
              <h4 className="heading-4">Dental Consulting</h4>
              <p className="text-bodyText pt-3">
                Receive personalized consulting services to address the unique
                challenges of your dental practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="stp-30 sbp-30 bg-softBg1 overflow-hidden">
      <div
        className="xxl:ml-[calc((100%-1296px)/2)] max-xxl:container grid grid-cols-12 lg:gap-6 xxl:gap-32"
      >
        <div
          className="col-span-12 lg:col-span-6 flex justify-start items-start self-stretch order-2"
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
          <p className="bg-p1 py-3 px-5 rounded-full text-white">All in one</p>

          <h2 className="display-4 pt-4 pb-6">Run a smarter dental practice</h2>

          <p className="text-bodyText">
            Hire effortlessly with automation-assisted job listings, applicant
            tracking, and popular job board integrations. Then, give your new
            hires a delightfully smooth and paperless onboarding. Accupay will
            send forms, training modules,
          </p>
        </div>
      </div>
    </section>

    <section className="sbp-30 stp-30">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center max-xxl:overflow-hidden">
            <div
              className="max-w-[700px] text-center flex justify-center items-center flex-col"
            >
              <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                Why Choose Us
              </p>

              <h1 className="display-4 pt-4 pb-4 lg:pb-6">
                Why Choose AccuPay for Dentist Services?
              </h1>

              <p className="text-bodyText">
                AccuPay is dedicated to supporting the financial health of your
                dental practice. From payroll solutions for dental professionals
                to compliance management.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 stp-15">
          <div
            className="col-span-12 md:col-span-4 flex justify-center items-center flex-col"
          >
            <div className="text-7xl text-s1">
              <i className="ph-fill ph-tooth"></i>
            </div>
            <h4 className="heading-4 pb-4 pt-3 text-center">
              Dental Industry Expertise
            </h4>
            <p className="text-center">
              Our team understands the specific needs and challenges of the
              dental industry, providing tailored solutions.
            </p>
          </div>
          <div
            className="col-span-12 md:col-span-4 flex justify-center items-center flex-col"
          >
            <div className="text-7xl text-s1">
              <Headphones weight='fill'/>
            </div>
            <h4 className="heading-4 pb-4 pt-3 text-center">Financial Support</h4>
            <p className="text-center">
              Beyond payroll, we offer a range of financial services to support
              the overall health of your dental practice.
            </p>
          </div>
          <div
            className="col-span-12 md:col-span-4 flex justify-center items-center flex-col"
          >
            <div className="text-7xl text-s1">
              <i className="ph-fill ph-webhooks-logo"></i>
              
            </div>
            <h4 className="heading-4 pb-4 pt-3 text-center">
              Technology Integration
            </h4>
            <p className="text-center">
              Stay ahead with technology-driven solutions that enhance
              efficiency and compliance in the dental care sector.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="stp-30 sbp-30 bg-softBg1">
      <div className="container grid grid-cols-12 gap-6">
        <div
          className="col-span-12 md:col-span-6 lg:col-span-5 max-md:order-2 overflow-hidden"
        >
          <Image
            src={dedicated_img}
            alt="image"
            className="hover:scale-110 duration-500 w-full h-full"
          />
        </div>
        <div
          className="col-span-12 md:col-span-6 lg:col-start-7 flex justify-center items-start flex-col"
        >
          <p className="bg-p1 py-3 px-5 rounded-full text-white">
            Dedicated Support
          </p>
          <h2 className="display-4 pt-4 pb-6">Run a Smarter Dental Practice</h2>
          <p className="text-bodyText pb-8">
            At Accupay, we don’t think payroll should feel like pulling teeth.
            That’s why we’ve made the process as painless as possible. But if
            you should have any questions, our best-in-class support team is
            just a call, chat, or email away.
          </p>
          <Link
            href="/Contact"
            className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
          >
            Contact Us
            <span
              className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
            >
              <ArrowUpRight weight='bold'/>
            </span>
          </Link>
        </div>
      </div>
    </section>
    <TestimonialSection/>
    </>
   
  )
}

export default DentistServices
