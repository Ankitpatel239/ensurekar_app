"use client";
import BreadcrumbSection from "@/app/components/Breadcrump-Sections/About";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ensurekar_developer from "../../images/accupay_developer.png";
import award_element from "../../images/award_element.png";
import {
  ArrowUpRight,
  Binoculars,
  ChatCentered,
  CheckCircle,
  Desktop,
  Handshake,
  Headphones,
  User,
  UsersThree,
} from "phosphor-react";
import award_icon from "../../images/award_icon.png";
import CounterSection from "@/app/components/Section/Counter-Section";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-Section";
import TestimonialSection from "@/app/components/Section/Testimonial-Section";
import PricingSection from "@/app/components/Section/Pricing-Section";
const About = () => {
  const CounterSectionData = [
    { number: 5000, text: "Client Served" },
    { number: 200, text: "Startup Guidance and Support" },
    { number: 10, text: "Cities at Present" },
  ];
  return (
    <>
      <BreadcrumbSection />

      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 max-lg:gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col justify-center items-start">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">
              Ensurekar Story
            </p>
            <h1 className="display-4 pt-4 pb-6">
              In 2012, an exciting journey began with a daring vision.
            </h1>
            <p className="uppercase text-bodyText font-medium text-base lg:text-xl">
              message from our ceo.
            </p>
            <p className="heading-4 xl:text-[32px] pt-4 pb-6">
              “A successful team requires members with complementary skill
              sets.”
            </p>
            <div className="flex justify-start items-center gap-3">
              <Image
                src={Ensurekar_developer}
                alt="image"
                className="rounded-full"
              />
              <div className="">
                <p>Sa Kibb</p>
                <p className="text-bodyText text-sm">CEO Ensurekar</p>
              </div>
            </div>
          </div>

          <div className="lg:col-start-7 col-span-12 md:col-span-6 flex flex-col gap-6 lg:gap-10 max-md:pt-6">
            <div className="border-b pb-6 lg:pb-10">
              <h4 className="heading-4 pb-6">Who We Are</h4>
              <p className="text-bodyText">
                Ensurekar has been at the forefront of delivering innovative
                financial solutions. Our journey began with a vision to simplify
                financial processes for businesses of all sizes. Today, we stand
                proud as a trusted partner,
              </p>
            </div>
            <div className="border-b pb-6 lg:pb-10">
              <h4 className="heading-4 pb-6">Our Mission</h4>
              <p className="text-bodyText">
                Ensurekar is on a mission to empower businesses by providing
                reliable, efficient, and innovative financial services. We
                strive to be your go-to partner for all your accounting and
                payroll needs, enabling you to focus on what you do best.
              </p>
            </div>
            <div className="border-b pb-6 lg:pb-10">
              <h4 className="heading-4 pb-6">Expert Team</h4>
              <p className="text-bodyText">
                Our team of experienced professionals brings a wealth of
                knowledge to every client interaction. From payroll processing
                to financial advisory, we have the expertise to guide your
                business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30 bg-softBg1">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center max-xxl:overflow-hidden">
              <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
                <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                  Our Values
                </p>

                <h1 className="display-4 pt-4 pb-4 lg:pb-6">Our Values</h1>

                <p className="text-bodyText">
                  At Ensurekar, our values are the foundation of everything we do.
                  They reflect our commitment to excellence, integrity, and
                  client success.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 stp-15">
            <div className="col-span-12 min-[450px]:col-span-6 md:col-span-3 flex justify-center items-center flex-col">
              <div className="text-6xl text-s1">
                <Handshake weight="fill" />
              </div>
              <h4 className="heading-4 pb-4 pt-3">Integrity</h4>
              <p className="pb-5 text-center">
                We are transparent and do the right thing for the right reason
              </p>
            </div>

            <div className="col-span-12 min-[450px]:col-span-6 md:col-span-3 flex justify-center items-center flex-col">
              <div className="text-6xl text-s1">
                <CheckCircle weight="fill" />
              </div>
              <h4 className="heading-4 pb-4 pt-3">Accountability</h4>
              <p className="pb-5 text-center">
                We take ownership of outcomes and deliver on our commitments
              </p>
            </div>
            <div className="col-span-12 min-[450px]:col-span-6 md:col-span-3 flex justify-center items-center flex-col">
              <div className="text-6xl text-s1">
                <UsersThree weight="fill" />
              </div>
              <h4 className="heading-4 pb-4 pt-3">Diversity</h4>
              <p className="pb-5 text-center">
                We seek and leverage differences and unique perspectives
              </p>
            </div>
            <div className="col-span-12 min-[450px]:col-span-6 md:col-span-3 flex justify-center items-center flex-col">
              <div className="text-6xl text-s1">
                <User weight="fill" />
              </div>
              <h4 className="heading-4 pb-4 pt-3">Customer Centricity</h4>
              <p className="pb-5 text-center">
                We start with the customer in everything we do
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stp-30 sbp-30">
        <div className="container grid grid-cols-12 gap-6">
          <div className="flex flex-col justify-star items-start col-span-12 min-[500px]:col-span-6 lg:col-span-5 max-[500px]:pb-15">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">
              Our Awards
            </p>
            <h2 className="display-4 pt-3">Award & Achievement</h2>
            <div className="flex flex-col justify-end items-start lg:items-end relative w-full">
              <Image
                src={award_element}
                alt="image"
                className="absolute min-[500px]:-bottom-14 lg:bottom-0 min-[500px]:right-0 xl:right-20 bottom-0 right-4"
              />
              <p className="text-[60px] md:text-[100px] xl:text-[150px] font-bold !leading-none text-outline -rotate-12 min-[500px]:-rotate-45 min-[500px]:pt-28 pt-8 lg:pt-40">
                Award
              </p>
              <p className="text-s1 text-[60px] md:text-[100px] xl:text-[150px] font-bold leading-none -rotate-12 min-[500px]:-rotate-45 min-[500px]:max-lg:pt-6 lg:pr-0 xl:pr-11">
                Award
              </p>
            </div>
          </div>
          <div className="col-span-12 min-[500px]:col-span-6 lg:col-start-7 flex flex-col justify-start items-start gap-6 lg:gap-10 relative">
            <div className="flex justify-between items-center border-b pb-6 lg:pb-10 w-full group relative">
              <div className="">
                <p className="heading-4 group-hover:text-s2 duration-500">
                  Awwwards SOTD
                </p>
                <p>FOR DISPLAY 2022</p>
              </div>
              <Link
                href="/"
                className="p-3 rounded-full bg-s1 text-2xl text-white group-hover:bg-s2 duration-500 !leading-[0]"
              >
                <ArrowUpRight />
              </Link>
              <div className="absolute top-4 lg:top-0 left-10 xl:left-1/2 w-[150px] lg:w-[250px] bg-s2 py-10 flex flex-col justify-center items-center border border-mainTextColor group-hover:visible group-hover:opacity-100 group-hover:z-10 group-hover:translate-y-4 invisible opacity-0 -translate-y-4 duration-500">
                <Image src={award_icon} alt="image" />
                <h4 className="heading-4 max-w-[100px] text-center pt-8">
                  Awwwards SOTD
                </h4>
              </div>
            </div>
            <div className="flex justify-between items-center border-b pb-6 lg:pb-10 w-full group relative">
              <div className="">
                <p className="heading-4 group-hover:text-s2 duration-500">
                  Wix.com
                </p>
                <p>INTERVIEW 2021</p>
              </div>
              <Link
                href=""
                className="p-3 rounded-full bg-s1 text-2xl text-white group-hover:bg-s2 duration-500 !leading-[0]"
              >
                <ArrowUpRight />
              </Link>
              <div className="absolute top-4 lg:top-0 left-10 xl:left-1/2 w-[150px] lg:w-[250px] bg-s2 py-10 flex flex-col justify-center items-center border border-mainTextColor group-hover:visible group-hover:opacity-100 group-hover:z-10 group-hover:translate-y-4 invisible opacity-0 -translate-y-4 duration-500">
                <Image src={award_icon} alt="image" />

                <h4 className="heading-4 max-w-[100px] text-center pt-8">
                  Wix.com
                </h4>
              </div>
            </div>
            <div className="flex justify-between items-center border-b pb-6 lg:pb-10 w-full group relative">
              <div className="">
                <p className="heading-4 group-hover:text-s2 duration-500">
                  CSS Awards
                </p>
                <p>FEATURE 2020</p>
              </div>
              <Link
                href="/"
                className="p-3 rounded-full bg-s1 text-2xl text-white group-hover:bg-s2 duration-500 !leading-[0]"
              >
                <ArrowUpRight />
              </Link>
              <div className="absolute top-4 lg:top-0 left-10 xl:left-1/2 w-[150px] lg:w-[250px] bg-s2 py-10 flex flex-col justify-center items-center border border-mainTextColor group-hover:visible group-hover:opacity-100 group-hover:z-10 group-hover:translate-y-4 invisible opacity-0 -translate-y-4 duration-500">
                <Image src={award_icon} alt="image" />
                <h4 className="heading-4 max-w-[100px] text-center pt-8">
                  CSS Awards
                </h4>
              </div>
            </div>
            <div className="flex justify-between items-center border-b pb-6 lg:pb-10 w-full group relative">
              <div className="">
                <p className="heading-4 group-hover:text-s2 duration-500">
                  Muzli
                </p>
                <p>FEATURE 2020</p>
              </div>
              <Link
                href="/"
                className="p-3 rounded-full bg-s1 text-2xl text-white group-hover:bg-s2 duration-500 !leading-[0]"
              >
                <ArrowUpRight />
              </Link>
              <div className="absolute top-4 lg:top-0 left-10 xl:left-1/2 w-[150px] lg:w-[250px] bg-s2 py-10 flex flex-col justify-center items-center border border-mainTextColor group-hover:visible group-hover:opacity-100 group-hover:z-10 group-hover:translate-y-4 invisible opacity-0 -translate-y-4 duration-500">
                <Image src={award_icon} alt="image" />
                <h4 className="heading-4 max-w-[100px] text-center pt-8">
                  Muzli
                </h4>
              </div>
            </div>
            <div className="flex justify-between items-center border-b pb-6 lg:pb-10 w-full group relative">
              <div className="">
                <p className="heading-4 group-hover:text-s2 duration-500">
                  Awwwards
                </p>
                <p>FOR MUTEZA 2019</p>
              </div>
              <Link
                href="/"
                className="p-3 rounded-full bg-s1 text-2xl text-white group-hover:bg-s2 duration-500 !leading-[0]"
              >
                <ArrowUpRight />
              </Link>
              <div className="absolute top-4 lg:top-0 left-10 xl:left-1/2 w-[150px] lg:w-[250px] bg-s2 py-10 flex flex-col justify-center items-center border border-mainTextColor group-hover:visible group-hover:opacity-100 group-hover:z-10 group-hover:translate-y-4 invisible opacity-0 -translate-y-4 duration-500">
                <Image src={award_icon} alt="image" />
                <h4 className="heading-4 max-w-[100px] text-center pt-8">
                  Awwwards
                </h4>
              </div>
            </div>
            <div className="flex justify-between items-center border-b pb-6 lg:pb-10 w-full group relative">
              <div className="">
                <p className="heading-4 group-hover:text-s2 duration-500">
                  Chapters Studio
                </p>
                <p>FOR DISPLAY 2018</p>
              </div>
              <Link
                href="/"
                className="p-3 rounded-full bg-s1 text-2xl text-white group-hover:bg-s2 duration-500 !leading-[0]"
              >
                <ArrowUpRight />
              </Link>
              <div className="absolute top-4 lg:top-0 left-10 xl:left-1/2 w-[150px] lg:w-[250px] bg-s2 py-10 flex flex-col justify-center items-center border border-mainTextColor group-hover:visible group-hover:opacity-100 group-hover:z-10 group-hover:translate-y-4 invisible opacity-0 -translate-y-4 duration-500">
                <Image src={award_icon} alt="image" />
                <h4 className="heading-4 max-w-[100px] text-center pt-8">
                  Chapters Studio
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CounterSection CounterSectionData={CounterSectionData} />

      <WhyEnsurekarSection />
      <TestimonialSection />
      <PricingSection />

      <section className="sbp-30 stp-30">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center max-xxl:overflow-hidden">
            <div
              className="max-w-[700px] text-center flex justify-center items-center flex-col"
            >
              <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                Contact
              </p>

              <h1 className="display-4 pt-4 pb-4 lg:pb-6">
                Questions? Meet Ansawer
              </h1>

              <p className="text-bodyText">
                Startups thrive with Ensurekar. Their flexible payroll solutions
                have been instrumental in our journey, providing the support
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 stp-15">
          <div className="col-span-12 min-[450px]:col-span-6 md:col-span-3">
            <div className="flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
                <Binoculars weight="fill"/>
              </div>
              <h4 className="heading-4 pb-4 pt-3">Compare Ensurekar</h4>
              <p className="pb-5 text-center">
                Explore how Ensurekar stands out. Check our comparison.
              </p>
              <Link href="" className="text-s1 underline font-medium">
                Compare Ensurekar
              </Link>
            </div>
          </div>
          <div className="col-span-12 min-[450px]:col-span-6 md:col-span-3">
            <div className="flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
                <Desktop weight="fill"/>
              </div>
              <h4 className="heading-4 pb-4 pt-3">Explore The Demo</h4>
              <p className="pb-5 text-center">
                Curious about our services? Request a demo to experience
                firsthand
              </p>
              <Link href="/" className="text-s1 underline font-medium"> See Demo </Link>
            </div>
          </div>
          <div className="col-span-12 min-[450px]:col-span-6 md:col-span-3">
            <div className="flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
                <Headphones weight="fill"/>
              </div>
              <h4 className="heading-4 pb-4 pt-3">Give Us a Ring</h4>
              <p className="pb-5 text-center">
                Monday through Friday from 6AM - 6PM MST
              </p>
              <Link href="/" className="text-s1 underline font-medium"> Contact </Link>
            </div>
          </div>
          <div className="col-span-12 min-[450px]:col-span-6 md:col-span-3">
            <div className="flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
                <ChatCentered weight="fill"/>
              </div>
              <h4 className="heading-4 pb-4 pt-3">Help Centre</h4>
              <p className="pb-5 text-center">
                Looking for answers? Visit our Help Center for detailed guides
              </p>
              <Link href="/" className="text-s1 underline font-medium"> Help Center </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
