"use client"
import { Binoculars, ChatCentered, Desktop } from 'phosphor-react'
import React from 'react'

const GotQuestionsSection = () => {
  return (
    <section className="sbp-30 overflow-hidden">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center max-xxl:overflow-hidden">
            <div
              className="max-w-[700px] text-center flex justify-center items-center flex-col"
            >
              <p
                className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__zoomIn"
              >
                Contact
              </p>

              <h1
                className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInUp"
              >
                Questions? Meet Answer
              </h1>

              <p
                className="text-bodyText wow animate__animated animate__fadeInDown"
              >
                Startups thrive with AccuPay. Their flexible payroll solutions
                have been instrumental in our journey, providing the support
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 stp-15">
          <div
            className="col-span-12 min-[450px]:col-span-6 md:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
          >
            <div className="flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
                <Binoculars weight="fill"/>
              </div>
              <h4 className="heading-4 pb-4 pt-3">Compare Accupay</h4>
              <p className="pb-5 text-center">
                Explore how AccuPay stands out. Check our comparison.
              </p>
              <a href="../contact.html" className="text-s1 underline font-medium">
                Compare Accupay
              </a>
            </div>
          </div>
          <div
            className="col-span-12 min-[450px]:col-span-6 md:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".2s"
          >
            <div className="flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
                <Desktop weight="fill"/>
              </div>
              <h4 className="heading-4 pb-4 pt-3">Explore The Demo</h4>
              <p className="pb-5 text-center">
                Curious about our services? Request a demo to experience
                firsthand
              </p>
              <a href="../contact.html" className="text-s1 underline font-medium">
                See Demo
              </a>
            </div>
          </div>
          <div
            className="col-span-12 min-[450px]:col-span-6 md:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".4s"
          >
            <div className="flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
              <Binoculars weight='fill'/>
              </div>
              <h4 className="heading-4 pb-4 pt-3">Give Us a Ring</h4>
              <p className="pb-5 text-center">
                Monday through Friday from 6AM - 6PM MST
              </p>
              <a href="../contact.html" className="text-s1 underline font-medium">
                Contact
              </a>
            </div>
          </div>
          <div
            className="col-span-12 min-[450px]:col-span-6 md:col-span-3 wow animate__animated animate__fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay=".6s"
          >
            <div className="flex justify-center items-center flex-col">
              <div className="text-7xl text-s1">
                <ChatCentered weight='fill'/>
              </div>
              <h4 className="heading-4 pb-4 pt-3">Help Centre</h4>
              <p className="pb-5 text-center">
                Looking for answers? Visit our Help Center for detailed guides
              </p>
              <a href="../contact.html" className="text-s1 underline font-medium">
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GotQuestionsSection
