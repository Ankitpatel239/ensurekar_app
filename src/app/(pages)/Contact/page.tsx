"use client";
import BreadcrumbSection from '@/app/components/Breadcrump-Sections/Contact';
import { Envelope, MapPin, PencilSimple, Phone, PhoneCall } from 'phosphor-react';
import React, { FormEvent } from 'react'
import Image from 'next/image'
import contact_page_img from "../../images/contact_page_img.png";
const Contact = () => {
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div>
      <BreadcrumbSection />
      <section className="container grid grid-cols-12 stp-30 sbp-30">
        <div
          className="col-span-12 lg:col-span-8 lg:col-start-3 grid grid-cols-12 gap-4 lg:gap-6"
        >
          <div
            className="flex flex-col justify-start items-start p-4 lg:p-8 bg-p1 text-white w-full col-span-12 sm:col-span-4 border border-p1 hover:bg-s2 hover:text-mainTextColor hover:border-mainTextColor duration-500 group"
          >
            <div
              className="bg-white text-p1 text-2xl rounded-full p-4 group-hover:text-white group-hover:bg-mainTextColor duration-500 !leading-[0]"
            >
              <Envelope weight='fill'/>
            </div>
            <h4 className="heading-4 pt-5 pb-2">Chat to Sales</h4>
            <a href="mailto:accupay@gmail.com">accupay@gmail.com</a>
          </div>
          <div
            className="flex flex-col justify-start items-start p-4 lg:p-8 bg-p1 text-white w-full col-span-12 sm:col-span-4 border border-p1 hover:bg-s2 hover:text-mainTextColor hover:border-mainTextColor duration-500 group"
          >
            <div
              className="bg-white text-p1 text-2xl rounded-full p-4 group-hover:text-white group-hover:bg-mainTextColor duration-500 !leading-[0]"
            >
              <PhoneCall weight='fill'/>
            </div>
            <h4 className="heading-4 pt-5 pb-2">Contact Us</h4>
            <a href="tel:accupay@gmail.com">+9190-8687-3345-120</a>
          </div>
          <div
            className="flex flex-col justify-start items-start p-4 lg:p-8 bg-p1 text-white w-full col-span-12 sm:col-span-4 border border-p1 hover:bg-s2 hover:text-mainTextColor hover:border-mainTextColor duration-500 group"
          >
            <div
              className="bg-white text-p1 text-2xl rounded-full p-4 group-hover:text-white group-hover:bg-mainTextColor duration-500 !leading-[0]"
            >
              <MapPin weight='fill'/>
            </div>
            <h4 className="heading-4 pt-5 pb-2">Visit Our Office</h4>
            <p>London 2HX, United Kingdom</p>
          </div>
        </div>

        <div
          className="col-span-12 lg:col-span-8 lg:col-start-3 border p-4 sm:p-6 lg:p-10"
        >
          <h4 className="heading-4 pb-6">Fill the From Below</h4>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <input
                type="text"
                placeholder="First Name"
                className="placeholder:text-bodyText py-4 px-8 border w-full"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <input
                type="text"
                placeholder="Last Name"
                className="placeholder:text-bodyText py-4 px-8 border w-full"
                required
              />
            </div>
            <div
              className="col-span-2 sm:col-span-1 py-4 px-8 border flex justify-start items-center gap-2"
            >
              <span className="text-xl text-bodyText">
                <Envelope weight='fill'/>
              </span>
              <input
                type="text"
                placeholder="Type email address"
                className="placeholder:text-bodyText w-full outline-none"
                required
              />
            </div>
            <div
              className="col-span-2 sm:col-span-1 py-4 px-8 border flex justify-start items-center gap-2"
            >
              <span className="text-xl text-bodyText">
                <PencilSimple weight='fill'/>
              </span>
              <input
                type="text"
                placeholder="Subject"
                className="placeholder:text-bodyText w-full outline-none"
                required
              />
            </div>
            <div
              className="col-span-2 py-4 px-8 border flex justify-start items-center gap-2"
            >
              <textarea
                placeholder="Type Your message..."
                className="placeholder:text-bodyText w-full outline-none h-[200px]"
                required
              ></textarea>
            </div>
            <div
              className="col-span-2 table-checkbox flex justify-between items-center max-[400px]:flex-col max-[400px]:items-start gap-5"
            >
              <label className="flex justify-start items-center gap-2">
                <input type="checkbox" className=" " />
                <span>Subscribe to our newsletter.</span>
              </label>
              <button
                className="py-2 sm:py-3 px-4 sm:px-6 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="container grid grid-cols-12 gap-6 sbp-30">
        <div
          className="col-span-12 md:col-span-5 xl:col-span-4 flex flex-col justify-center items-start"
        >
          <h2 className="display-4 pb-5">Our Office</h2>
          <p className="text-bodyText pb-8 lg:pb-15">
            If you prefer an in-person meeting, our office is open during
            business hours.
          </p>

          <ul className="flex flex-col gap-6 lg:gap-10">
            <li className="flex justify-start items-start gap-3">
              <div
                className="bg-mainTextColor text-white text-3xl p-3 rounded-full !leading-[0]"
              >
                <MapPin weight='fill'/>
              </div>
              <div className="">
                <h4 className="heading-4 pb-1">New York, USA:</h4>
                <p>29 Park Avenue New York, New York 172</p>
              </div>
            </li>

            <li className="flex justify-start items-start gap-3">
              <div
                className="bg-mainTextColor text-white text-3xl p-3 rounded-full !leading-[0]"
              >
                <MapPin weight='fill'/>
              </div>
              <div className="">
                <h4 className="heading-4 pb-1">Switzerland, Bern:</h4>
                <p>30 Stamford Street,London SE1 9LQ</p>
              </div>
            </li>

            <li className="flex justify-start items-start gap-3">
              <div
                className="bg-mainTextColor text-white text-3xl p-3 rounded-full !leading-[0]"
              >
                <MapPin weight='fill'/>
              </div>
              <div className="">
                <h4 className="heading-4 pb-1">New York, USA:</h4>
                <p>891 Daudkandi, Chattogram 58201</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-7 xl:col-start-6 overflow-hidden">
          <Image
            src={contact_page_img}
            alt="image"
            className="hover:scale-110 duration-500 w-full h-full"
          />
        </div>
      </section>
    </div>
  )
}

export default Contact;
