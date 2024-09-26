"use client"

import Image from 'next/image'
import React from 'react'
import about_vector from "../../images/about_vector.png";
import aboutVideoImg from "../../images/aboutVideoImg.png";
import circleIcon from "../../images/circleIcon.png";
import Link from 'next/link';
import { CaretRight, House, Play } from 'phosphor-react';

const BreadcrumbSection = () => {
  return (
    <section className="pt-24 lg:stp-30 sbp-30 bg-softBg1 relative">
    <Image
      src={circleIcon}
      alt="image"
      className="absolute top-60 -left-20 max-lg:h-[400px] max-sm:hidden"
    />
    <Image
      src={about_vector}
      alt="image"
      className="absolute top-36 right-0 xl:right-28 max-lg:hidden"
    />
    <div className="container pb-10">
      <ul className="flex justify-start items-center gap-1">
        <li>
          <Link
            href="/"
            className="flex justify-start items-center gap-1"
          >
            <House />
            <span className="hover:text-s2 duration-300">Home</span>
          </Link>
        </li>
        <li className="flex justify-start items-center gap-1">
          <CaretRight />
           About Us
        </li>
      </ul>
    </div>
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-center items-center pb-10 lg:pb-16 xl:pb-24">
        <div
          className="max-w-[600px] text-center flex justify-center items-center flex-col"
        >
          <p className="bg-p1 py-3 px-5 rounded-full text-white">About</p>
          <h1 className="display-4 pt-4 pb-6">Work with Ensurekar</h1>
          <p className="text-bodyText">
            Welcome to Ensurekar, where financial excellence meets personalized
            service. At Ensurekar, we understand the intricacies of accounting
            and payroll processing.
          </p>
        </div>
      </div>
      <div
        className={`stp-30 sbp-30 w-[80%] h-[300px] bg-cover md:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[800px] flex justify-center items-center z-10 relative after:absolute after:inset-0 after:bg-black/20`}
        style={{backgroundImage: `url(${aboutVideoImg.src})`}}
      >
        <button
          className="bg-softBg1 text-s1 p-6 lg:p-6 rounded-full text-3xl lg:text-5xl hover:bg-s2 hover:text-white duration-500 relative flex justify-center items-center z-20 leading-[0] videoModalButtonOpen"
        >
          <Play weight='fill'/>
        </button>
      </div>
    </div>
  </section>
  )
}

export default BreadcrumbSection
