import React from 'react'
import Image from 'next/image';
import whyAccoupayCard_1 from '../../images/whyAccoupayCard_1.png';
import whyAccoupayCard_2 from '../../images/whyAccoupayCard_2.png';
import whyAccoupayCard_3 from '../../images/whyAccoupayCard_3.png';
import whyAccoupayCard_4 from '../../images/whyAccoupayCard_4.png';
import whyAccoupayCard_5 from '../../images/whyAccoupayCard_5.png';
import whyAccoupayCard_6 from '../../images/whyAccoupayCard_6.png';
const WhyEnsurekarSection = () => {
  return (
    <section className="bg-softBg1 stp-30 sbp-30 overflow-hidden">
      <div className="container">
        <div
          className="flex justify-between items-end gap-6 max-lg:flex-col max-lg:items-start"
        >
          <div className="max-w-[600px] flex justify-center items-start flex-col">
            <p className="bg-p1 py-3 px-5 rounded-full text-white">Why Accupay</p>
            <h1 className="display-4 pt-4">A platform for your global team</h1>
          </div>
          <p className="text-bodyText max-w-[500px]">
            Your dependable guide to achieving freedom from manual HR work and
            building that perfect workplace you have always aspired to build.
            Your dependable guide to achieving freedom.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 stp-15">
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
          >
            <div className="">
              <Image src={whyAccoupayCard_1} alt="image" />
            </div>
            <h4 className="pt-8 heading-4">
              Hire or relocate team member with in house visa support
            </h4>
          </div>
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".2s"
          >
            <div className="">
              <Image src={whyAccoupayCard_2} alt="image" />
            </div>
            <h4 className="pt-8 heading-4">
              Create complaint contracts with a single click
            </h4>
          </div>
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".4s"
          >
            <div className="">
              <Image src={whyAccoupayCard_3} alt="image" />
            </div>
            <h4 className="pt-8 heading-4">
              Send equipment worldwide, without the hassle
            </h4>
          </div>
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".6s"
          >
            <div className="">
              <Image src={whyAccoupayCard_4} alt="image" />
            </div>
            <h4 className="pt-8 heading-4">
              Offer country- specific benefits at competitive rates
            </h4>
          </div>
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".8s"
          >
            <div className="">
              <Image src={whyAccoupayCard_5} alt="image" />
            </div>
            <h4 className="pt-8 heading-4">
              Provide your team with co-working access via work
            </h4>
          </div>
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white p-6 xl:py-10 xl:px-15 flex flex-col items-center border border-white group hover:border-mainTextColor duration-700 hover:bg-s2 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="1s"
          >
            <div className="">
              <Image src={whyAccoupayCard_6} alt="image" />
            </div>
            <h4 className="pt-8 heading-4">Save time using advance integrations</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyEnsurekarSection