import React from "react";

interface TimeLineData{
    title: string;
    heading: string;
    subHeading: string;
    description: string;
    steps: {
        heading: string;
        description: string;
        step: {
        heading: string;
        description: string;
        }[];
    };
    aboutSteps: {
        title: string;
        description: string;
    }[];
    footerMessage: string;
}
const Timeline = ({TimeLineData}:{TimeLineData:TimeLineData}) => {
  
  const {
    title,
    heading,
    subHeading,
    description,
    steps,
    aboutSteps,
    footerMessage,
  } = TimeLineData;
  return (
    <div className="stp-30 sbp-30">
      <div className="container gap-6">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{heading}</h2>
          <p className="text-lg text-center mb-12">{description}</p>

          <div className="relative flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center md:hidden ">
              <div className=" mx-auto ">
                {steps.step.map((step, index) => (
                  <div className="flex" key={index}>
                    <div className="flex flex-col items-center mr-4">
                      <div className="rounded-full p-2 border border-blue-500 flex items-center bg-white justify-center text-blue-500 font-bold">
                        <p className="w-8 h-8 flex items-center justify-center rounded-full border border-blue-500 bg-blue-800 text-white">
                          {index + 1}
                        </p>
                      </div>
                      {index < steps.step.length - 1 && (
                        <div className="w-px h-full bg-gray-300"></div>
                      )}
                    </div>
                    <div className="pt-1 pb-8">
                      <p className="  mb-2 text-lg font-bold">{step.heading}</p>
                      <p className="text-xs font-medium text-gray-700">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ol className="mx-auto my-4  w-full ml-14 items-center md:flex hidden justify-between">
              {steps.step.map((step, index) => (
                <li className="flex w-full items-center" key={index}>
                  <div className="relative flex flex-col jus items-center">
                    <div className="rounded-full p-2 border border-blue-500 flex items-center bg-white justify-center text-blue-500 font-bold">
                      <p className="w-8 h-8 flex items-center justify-center rounded-full border border-blue-500 bg-blue-800 text-white">
                        {index + 1}
                      </p>
                    </div>
                    <div className="absolute mt-14 text-center min-w-[150px] pt-1 pb-8">
                      <p className="  mb-2 text-lg font-bold">{step.heading}</p>
                      <p className="text-xs font-medium text-gray-700">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < steps.step.length - 1 && (
                    <div className="flex-auto border-t-2 h-[3px] bg-blue-200"></div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* About Steps */}
        <div className="flex stp-30 flex-col gap-y-5 justify-center">
          {aboutSteps.length > 1 &&
            aboutSteps.map((step, index) => (
              <div key={index}>
                <h5 className="heading-5">
                  {index + 1}
                  {". "} {step.title}
                </h5>
                <p className="py-4">{step.description}</p>
              </div>
            ))}
        </div>
        <div>
          <h1 className="heading-4 pt-8 pb-6">{footerMessage}</h1>
        </div>
      </div>
    </div>
  );
};

export default Timeline;