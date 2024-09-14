"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import login_bg_img from "../../images/login_bg_img.png";
import google from "../../images/google.png";
import logo from "../../images/logo.png"
import { ArrowLeft, ArrowRight, Envelope, Lock } from 'phosphor-react';
import Link from 'next/link';

const Login = () => {
  // Testimonial data
  const testimonials = [
    {
      text: "Incredible customer service. Their responsiveness and dedication to understanding our unique needs make them a trusted ally in our financial journey.",
      name: "David Warner",
      title: "Web Designer"
    },
    {
      text: "Excellent support from the team. They understood our business challenges and helped streamline our financial processes effectively.",
      name: "John Doe",
      title: "Project Manager"
    },
    {
      text: "The best decision we made was to partner with them. Their advice and services are top-notch, and they really care about their clients.",
      name: "Jane Smith",
      title: "CEO"
    }
  ];

  // State to track current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle the previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="pt-24 lg:stp-30 sbp-30 flex justify-start items-center gap-8 xl:gap-20 xxl:gap-32 max-xl:flex-col">
      <div className="relative lg:max-h-screen lg:min-h-screen overflow-hidden max-xl:order-2">
        <Image src={login_bg_img} alt="image" className="object-cover h-full" />

        <div className="absolute bottom-10 xl:bottom-20 left-4 xl:left-16 xxl:left-24 xxxl:left-32 testimonial-bg p-4 sm:p-8 max-xl:container lg:w-[550px] rounded-xl overflow-hidden">
          <div className="relative">
            {/* Display current testimonial */}
            <p className="text-lg sm:text-xl">{testimonials[currentIndex].text}</p>
            <div className="flex gap-3 pt-3 justify-between">
              <div className="">
                <p className="text-lg sm:text-2xl font-medium">{testimonials[currentIndex].name}</p>
                <p className="max-sm:text-xs">{testimonials[currentIndex].title}</p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-end items-center gap-3 absolute right-0 sm:right-4 bottom-4 z-20">
              <button
                className="bg-mainTextColor rounded-full text-white p-3"
                onClick={handlePrev}
              >
                <ArrowLeft />
              </button>
              <button
                className="bg-mainTextColor rounded-full text-white p-3"
                onClick={handleNext}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-xl:container xl:w-[650px] xl:pr-8 max-xl:stp-30">
        <Link href="/">
          <Image src={logo} alt="image" />
        </Link>
        <h2 className="display-4 py-5">Login</h2>
        <p className="text-bodyText pb-6 lg:pb-10">Grow with expert consulting support.</p>
        <button className="flex justify-center items-center gap-2 font-semibold bg-softBg py-4 rounded-xl w-full">
          <span>
            <Image src={google} alt="image" />
          </span>
          Sign up with Google
        </button>

        <div className="py-6 lg:py-8 text-center">
          <p className="relative after:absolute after:top-3 after:left-0 after:h-px after:bg-strokeColor after:w-[40%] before:absolute before:top-3 before:right-0 before:h-px before:bg-strokeColor max-md:before:content-none max-md:after:content-none before:w-[40%]">
            Or Sign In With
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 py-4 px-8 border flex justify-start items-center gap-2">
            <span className="text-xl text-bodyText">
              <Envelope weight='fill' />
            </span>
            <input
              type="text"
              placeholder="Type email address"
              className="placeholder:text-bodyText w-full outline-none"
            />
          </div>
          <div className="col-span-2 py-4 px-8 border flex justify-start items-center gap-2">
            <span className="text-xl text-bodyText">
              <Lock weight="fill" />
            </span>
            <input
              type="text"
              placeholder="Password"
              className="placeholder:text-bodyText w-full outline-none"
            />
          </div>

          <div className="col-span-2 table-checkbox flex justify-between items-center">
            <label className="flex justify-start items-center gap-2">
              <input type="checkbox" className=" " />
              <span>Remember me</span>
            </label>
            <Link href="/Forget-Password" className="font-medium">
              Forget Password?
            </Link>
          </div>
          <div className="col-span-2">
            <button className="py-4 bg-p1 text-white block text-center border border-p1 hover:bg-s2 hover:border-mainTextColor hover:text-mainTextColor duration-500 w-full">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;
