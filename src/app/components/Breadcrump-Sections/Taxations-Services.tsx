"use client"

import React from 'react'
import Image from 'next/image';
import breadcrump_icon from '../../images/breadcrump_icon.png';
import breadcrumb_img_4 from '../../images/breadcrumb_img_4.png';
import Link from 'next/link';
import { CaretRight } from 'phosphor-react';
const BreadcrumbSection = () => {
  return (
    <section className="stp-30 bg-softBg1 relative max-xxl:overflow-hidden">
      <Image
        src={breadcrump_icon}
        alt="image"
        className="absolute bottom-0 left-[-10%] xxl:left-0 max-lg:hidden"
      />
      <div
        className="container grid grid-cols-12 gap-6 max-md:stp-15 relative z-10"
      >
        <div
          className="col-span-12 md:col-span-6 flex justify-center items-start flex-col"
        >
          <ul className="flex justify-start items-center gap-1 flex-wrap">
            <li>
              <Link
                href="/"
                className="flex justify-start items-center gap-1"
              >
                <i className="ph ph-house"></i>
                <span className="hover:text-s2 duration-300">Home</span>
              </Link>
            </li>

            <li>
              <Link
                href="/All-Services"
                className="flex justify-start items-center gap-1"
              >
                <CaretRight/>
                <span className="hover:text-s2 duration-300"> Services </span>
              </Link>
            </li>

            <li className="flex justify-start items-center gap-1">
            <CaretRight/>
            Taxations Services
            </li>
          </ul>

          <h1 className="display-3 pt-4">Taxations Services</h1>

          <p className="text-bodyText pt-6">
            AccuPay takes the complexity out of taxes, offering a range of
            services to ensure your business stays compliant and maximizes.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <Image
            src={breadcrumb_img_4}
            alt="image"
            className="object-fit max-sm:max-h-[300px]"
          />
        </div>
      </div>
    </section>
  )
}

export default BreadcrumbSection;