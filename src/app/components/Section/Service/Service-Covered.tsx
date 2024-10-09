import { Icon } from "lucide-react";
import React from "react";

interface ServiceCoveredProps {
  ServiceCoveredData: {
    title: string;
    heading: string;
    subHeading: string;
    description: string;
    image: string;
    services: {
      title: string;
      description: string;
      icon: JSX.Element;
    }[];
  };
}

const ServiceCovered = ({ ServiceCoveredData }: ServiceCoveredProps) => {
  return (
    <section className="stp-30 sbp-30">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center max-xxl:overflow-hidden">
          <div className="max-w-[700px] text-center flex justify-center items-center flex-col">
            <p className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white">
                {ServiceCoveredData.title}
            </p>

            <h1 className="display-4 pt-4 pb-4 lg:pb-6">
                {ServiceCoveredData.heading}
            </h1>

            <p className="text-bodyText">
                {ServiceCoveredData.description}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-12 stp-15 gap-6">
            {ServiceCoveredData.services.map((service, index) => (
                <div
                key={index}
                className="col-span-12 sm:col-span-6 xl:col-span-3 wow animate__animated animate__fadeInUp"
                data-wow-duration="1.3s"
                >
                <div className="flex justify-start items-start flex-col p-6 xl:p-10 group border border-strokeColor hover:bg-s2 hover:border-mainTextColor duration-500">
                    <div className="bg-softBg1 p-4 rounded-full text-s1 group-hover:bg-mainTextColor group-hover:text-white duration-500 text-5xl">
                    {service.icon}
                    </div>
                    <h4 className="heading-4 pb-5 pt-8">{service.title}</h4>
                    <p className="text-bodyText lg:pr-4">{service.description}</p>
                </div>
                </div>
            ))}
       
        </div>
      </div>
    </section>
  );
};

export default ServiceCovered;
