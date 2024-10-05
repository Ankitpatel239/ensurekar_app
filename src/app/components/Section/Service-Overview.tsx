"use client";

import Image, { StaticImageData } from "next/image";
import logo1 from "../../images/logo1.png";

interface OverviewData {
  heading: string;
  meta: string;
  introduction: {
    heading: string;
    description: string[];
  };
  advantagesInfo: {
    heading: string;
    meta: string;
    description: string;
    advantages: {
      imageUrl: string;
      heading: string;
      details: string;
    }[];
  };
  eligibilityCriteria: {
    imageData: {
      imageUrl: StaticImageData;
      imageDirection: string;
    };
    heading: {
      start: string;
      blueText: string;
      end: string;
    };
    subHeading: string;
    startingDescription: string;
    endingDescription: string;
    requiredSteps?: {
      heading: string;
      description: string;
      steps: { heading: string; description: string }[];
    }[];
  }[];
}

const ServiceOverview = ({ OverviewData }: { OverviewData: OverviewData }) => {
  if (!OverviewData) return <div>loading...</div>;
  const { heading, meta, introduction, advantagesInfo, eligibilityCriteria } =
    OverviewData;

  return (
    <div className="container stp-30 sbp-10">
      <div className="flex flex-col items-center">
        <h3 className="heading-3 text-center">
          {heading}
          <span className="text-blue-600"> - {meta}</span>
        </h3>

        <div className="border my-8 p-4 shadow-inner shadow-cyan max-w-[1000px]">
          <h4 className="heading-4 my-5 text-center">
            <span className="text-blue-600">{'"'}</span> {introduction?.heading}{" "}
            <span className="text-blue-600 text-semibold">{'"'}</span>
          </h4>
          {introduction?.description.map((answer: any, index) => (
            <p key={index} className="text-bodyText text-start mb-2">
              {answer}
            </p>
          ))}
        </div>

        <div className="my-5 text-center">
          <h3 className="heading-3 my-4">
            <span className="text-blue-600">{advantagesInfo?.heading} </span>{" "}
            {advantagesInfo?.meta}
          </h3>
          {advantagesInfo?.description && (
            <p className="p-5">{advantagesInfo?.description}</p>
          )}

          <div className="flex flex-wrap justify-center items-center">
            {advantagesInfo?.advantages?.map((advantage) => (
              <div
                key={advantage.heading}
                className="flex flex-col justify-between items-center bg-slate-100 rounded p-3 m-3 w-full sm:w-[400px] max-w-[400px] min-h-[280px]"
              >
                <div className="border w-[70px] h-[70px] mx-auto">
                  <Image src={advantage.imageUrl} alt="img" />
                </div>
                <h5 className="text-center heading-5">{advantage.heading}</h5>
                <p className="text-center px-5 mb-5">{advantage.details}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center my-5 text-center">
            {eligibilityCriteria?.map((criteria) => (
              <div
                key={criteria.heading.start}
                className={`flex flex-col md:flex-row ${
                  criteria.imageData.imageDirection === "right"
                    ? "md:flex-row-reverse"
                    : "md:flex-row"
                } items-center my-6 text-center`}
              >
                {/* Image */}
                <div className="mx-5 mb-4 md:mb-0 w-full md:w-1/3 flex justify-center">
                  <Image
                    src={criteria.imageData.imageUrl || logo1}
                    alt="Related"
                    className="w-full max-w-[250px] h-auto"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h3 className="heading-3 my-5">
                    {criteria.heading.start}{" "}
                    <span className="text-blue-600">
                      {criteria.heading.blueText}
                    </span>{" "}
                    {criteria.heading.end}
                  </h3>

                  <h3 className="font-semibold mt-4">
                    {criteria.subHeading}
                  </h3>
             
                          <ul
                          className={`text-start ml-5  ${
                            (criteria.requiredSteps ?? []).length > 1
                              ? "list-disc"
                              : "disc-none"
                          }`}
                        >
                    <p className="my-3">{criteria.startingDescription}</p>
                    {criteria.requiredSteps?.map((step) => (
                      <li key={step.heading} className="my-6">
                        <h4 className="heading-5 md:text-2xl font-bold">{step.heading}</h4>
                        <p>{step.description}</p>
                        <ul className="pl-5 list-disc">
                          {step.steps.map((subStep) => (
                            <li key={subStep.heading} className="my-2">
                               {subStep.heading && (
                                    <h5 className="font-bold inline">
                                      {subStep.heading}:{" "}
                                    </h5>
                                  )}
                              <p className="inline">{subStep.description}</p>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                    <p className="py-5">{criteria.endingDescription}</p>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;
