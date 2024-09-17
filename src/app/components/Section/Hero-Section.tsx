import React, { Suspense } from "react";
import hero_bg_element1 from "../../images/hero_bg_element1.png";
import hero_bg_element2 from "../../images/hero_bg_element2.png";
import hero_bg_element3 from "../../images/hero_bg_element3.png";
import hero_illus from "../../images/hero_illus.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-repeat stp-30 hero_bg_gradient overflow-hidden">
      <Image
        src={hero_bg_element1}
        alt="image"
        className="absolute top-0 left-0 xxxl:left-36 max-lg:w-[300px] max-xxl:w-[500px] max-md:hidden"
      />
      <Suspense  fallback="Loading...">
      
        <Image
          src={hero_bg_element2}
          alt="image"
          className="absolute top-0 right-0 max-xxl:w-[300px] max-sm:hidden"
        />
      </Suspense>
      <div className="absolute -left-[200px] -bottom-1/2 bg-white blur-[200px] rounded-[1176px] max-w-full lg:w-[1176px] h-[1176px] overflow-hidden"></div>
      <div className="xxl:ml-[calc((100%-1296px)/2)] lg:max-xxl:py-10 max-xxl:container relative z-20 max-lg:pt-15 text-s1 grid grid-cols-12">
      <Suspense  fallback="Loading...">
        <Image
          src={hero_bg_element3}
          alt="image"
          className="absolute top-1/3 left-1/3 max-sm:hidden"
        />
        </Suspense>
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-2">
          <p className="uppercase text-base lg:text-xl font-semibold animate__animated animate__fadeInUp">
            Efficiency Payroll and workforce mastery
          </p>
          <div className="display-2">
          We Make Your Legal,  
            <div className="text-s3 inline-flex">Finance</div>
            <br />
            & Taxes Easy.
          </div>
          <p className="max-w-[550px]">
          We get your Finance, Legal, and Taxes
online While providing online access to
everyone.
          </p>
          <div className="flex justify-start items-center gap-4 pt-6 lg:pt-8 pb-15">
            <a
              href="./contact.html"
              className="font-medium bg-s2 py-2 lg:py-3 px-4 lg:px-6 rounded-full text-mainTextColor"
            >
              Get Started
            </a>
            <a href="./faq.html" className="underline font-medium">
              {" "}
              Learn More{" "}
            </a>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
        <Suspense  fallback="Loading...">
          <Image src={hero_illus} alt="image" />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
