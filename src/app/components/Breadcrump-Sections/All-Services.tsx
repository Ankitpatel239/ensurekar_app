"use client";
import React, { useEffect, useState } from "react";
import breadcrump_icon from "../../images/breadcrump_icon.png";
import breadcrumb_img_1 from "../../images/breadcrumb_img_1.png";
import Image from "next/image";
import Link from "next/link";
import { CaretRight, House, X } from "phosphor-react";
import confused from "../../images/confused.png";

const BreadcrumbSection = ({
  BreadcrumbData,
}: {
  BreadcrumbData: {
    title: string;
    heading: string;
    description: string;
    image: string;
    component: React.ReactNode;
  };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 180000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <section className="stp-30 sbp-30 bg-softBg1 relative max-xxl:overflow-hidden">
        <Image
          src={breadcrump_icon}
          alt="image"
          className="absolute bottom-0 left-[-10%] xxl:left-0 max-lg:hidden"
        />
        <div className="container grid grid-cols-12 gap-6 max-md:stp-15 relative z-10">
          <div className="col-span-12 md:col-span-6 flex justify-center items-start flex-col">
            <ul className="flex justify-start items-center gap-1 flex-wrap">
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
                {BreadcrumbData.title}
              </li>
            </ul>

            <h1 className="display-3 pt-4">{BreadcrumbData.heading}</h1>

            <p className="text-bodyText pt-6">{BreadcrumbData.description}</p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center flex-col items-center">
            {BreadcrumbData.component && <>{BreadcrumbData.component || ""}</>}
            {!BreadcrumbData.component && (
              <div className="flex justify-center items-center w-full overflow-hidden">
                <Image
                  src={BreadcrumbData.image || breadcrumb_img_1}
                  alt="image"
                  className="object-fit max-sm:max-h-[300px]"
                />
              </div>
            )}
            <div className="font-bold my-4">Still Confused ? <button className="text-blue-500 hover:underline" onClick={handleOpenModal}>click here</button></div>
          </div>
        </div>
      </section>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleCloseModal}
        >
          <div
            className={`bg-white p-5 shadow-md rounded flex flex-col justify-center items-center relative transition-all transform duration-500 ${
              isOpen
                ? "scale-100 translate-y-0 opacity-100"
                : "scale-75 translate-y-10 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 transition duration-300"
              onClick={handleCloseModal}
            >
              <X weight="bold" size={24} />
            </button>
            <div className="flex flex-col lg:flex-row lg:gap-6">
              <div className="hidden lg:flex items-center">
                <Image src={confused} alt="image" className="" />
              </div>
              <div className="grid grid-cols-1 max-w-[320px] gap-6 w-full">
                <p className="text-xl font-semibold text-center">
                  Still Confused?
                </p>

                <div className="col-span-2 py-2 px-5 border rounded flex justify-start items-center gap-2">
                  <input
                    type="text"
                    placeholder="Email"
                    className="placeholder:text-bodyText w-full outline-none"
                  />
                </div>
                <div className="col-span-2 py-2 px-5 border rounded flex justify-start items-center gap-2">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="placeholder:text-bodyText w-full outline-none"
                  />
                </div>
                <div className="col-span-2 py-2 px-5 border rounded flex justify-start items-center gap-2">
                  <input
                    type="text"
                    placeholder="City/Pincode"
                    className="placeholder:text-bodyText w-full outline-none"
                  />
                </div>

                <div className="col-span-2">
                  <button className="py-2.5 bg-yellow-400 border rounded block text-center hover:border-mainTextColor font-bold duration-500 w-full text-slate-800">
                    Talk to Registration expert
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BreadcrumbSection;
