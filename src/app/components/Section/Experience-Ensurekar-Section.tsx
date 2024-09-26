"use client"
import React from 'react'
import contact_illus from '../../images/contact_illus.png';
import Image from 'next/image';
import { ArrowUpRight } from 'phosphor-react';
const ExperienceEnsurekarSection = () => {
  return (
    <div className="bg-p1 pt-15 overflow-hidden">
      <div
        className="max-xxl:container xxl:ml-[calc((100%-1296px)/2)] flex justify-between text-white sm:max-xxl:gap-6 max-lg:flex-col"
      >
        <div
          className="flex flex-col justify-center items-start w-full lg:max-xxl:w-1/2 xxl:max-w-[550px] max-xxl:pb-8 max-xxl:overflow-hidden"
        >
          <p
            className="text-lg font-medium underline wow animate__animated animate__fadeInUp"
          >
            Experience Ensurekar
          </p>

          <h1
            className="display-4 pb-6 pt-4 wow animate__animated animate__fadeInDown"
          >
            We’ve got everything you need?
          </h1>

          <p className="pb-8 wow animate__animated animate__fadeInUp">
            We save you from all that boring paperwork! From global hiring, to
            instant payments, and taxes, we’ve got your back.
          </p>

          <a
            href="./contact.html"
            className="flex justify-center max-sm:text-sm items-center gap-3 py-2 md:py-3 px-3 md:px-6 rounded-full bg-s2 border border-mainTextColor text-mainTextColor group font-medium"
          >
            Contact Us
            <span
              className="group-hover:rotate-[45deg] duration-500 text-base sm:text-xl lg:text-2xl"
            >
                <ArrowUpRight weight="bold"/>
            </span>
          </a>
        </div>
        <div
          className="w-full lg:max-xxl:w-1/2 self-stretch flex justify-center max-xxl:items-center lg:pt-10 wow animate__animated animate__fadeInUp"
        >
          <Image
            src={contact_illus}
            alt="image"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default ExperienceEnsurekarSection
