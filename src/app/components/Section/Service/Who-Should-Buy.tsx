import { desc } from "framer-motion/client";
import React from "react";

interface WhoShouldBuyData {
  title: string;
  heading: string;
  subHeading: string;
  rolesData: {
    heading: string;
    description: string;
    roles: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
}

const WhoShouldBuy = ({
  WhoShouldBuyData,
}: {
  WhoShouldBuyData: WhoShouldBuyData;
}) => {
  const { title, heading, subHeading, rolesData } = WhoShouldBuyData;
  return (
    <section className="bg-softBg1 stp-30 sbp-30 max-xxl:overflow-hidden">
      <div className="container gap-6">
        <div className="col-span-12 lg:col-span-12 flex flex-col justify-center items-center">
          <div className="max-w-[1000px] text-center flex justify-center items-center flex-col">
            {title && (
              <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                {title}
              </p>
            )}

            <h1 className="display-4 pt-4 pb-4 lg:pb-6">{heading}</h1>

            <p className="text-bodyText">{subHeading}</p>
          </div>
          <div>
            <h1 className="display-4 pt-4 pb-4 lg:pb-6">{rolesData.heading}</h1>

            <p className="text-bodyText text-center">{rolesData.description}</p>

            <div className="grid grid-cols-12 stp-15 gap-6">
              {rolesData.roles.map((role, index) => (
                <div
                  key={index}
                  className="col-span-12 sm:col-span-6 xl:col-span-3 wow animate__animated animate__fadeInUp"
                  data-wow-duration="1.3s"
                >
                  <div className="flex justify-center items-center flex-col p-6 xl:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                    <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                      {role.icon}
                    </div>
                    <h4 className="font-semibold pb-5 pt-8 text-nowrap">
                      {role.title}
                    </h4>
                    <p className="text-bodyText lg:pr-4">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldBuy;
