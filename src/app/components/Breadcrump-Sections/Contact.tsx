"use client";

import React from "react";
import Image from "next/image";
import {
  CaretRight,
   House,
} from "phosphor-react";
import breadcrump_icon from "../../images/breadcrump_icon.png";
import breadcrumb_img_21 from "../../images/breadcrumb_img_21.png";
import Link from "next/link";
const BreadcrumbSection = () => {
  return (
    <section className="stp-30 bg-softBg1 relative max-xxl:overflow-hidden">
      <Image
        src={breadcrump_icon}
        alt="image"
        className="absolute bottom-0 left-[-10%] xxl:left-0 max-lg:hidden"
      />
      <div className="container grid grid-cols-12 gap-6 max-md:stp-15 relative z-10">
        <div className="col-span-12 md:col-span-6 flex justify-center items-start flex-col">
          <ul className="flex justify-start items-center gap-1 flex-wrap">
            <li>
              <Link href="/" className="flex justify-start items-center gap-1">
                <House />
                <span className="hover:text-s2 duration-300">Home</span>
              </Link>
            </li>

            <li className="flex justify-start items-center gap-1">
              <CaretRight />
              Contact
            </li>
          </ul>

          <h1 className="display-3 pt-4">Connect With Us</h1>

          <p className="text-bodyText pt-6">
            Connect with us for experts in Finance, Legal, and Tax. Reach out to
            us via the form or contact information below.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <Image
            src={breadcrumb_img_21}
            alt="image"
            className="object-fit max-sm:max-h-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
