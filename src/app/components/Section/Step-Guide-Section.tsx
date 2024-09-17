"use client";

// import React from "react";
// import stepArrow1 from "../../images/stepArrow1.png";
// import stepArrow2 from "../../images/stepArrow2.png";
// import Image from "next/image";
// import { FilePlus, User } from "phosphor-react";

// const StepGuideSection = () => {
//   return (
//     <section className="stp-30 sbp-30">
//     <div className="container">
//       <div className="flex justify-center items-center">
//         <div className="flex justify-center items-center max-xxl:overflow-hidden">
//           <div
//             className="max-w-[700px] text-center flex justify-center items-center flex-col"
//           >
//             <p
//               className="bg-p1 py-2 sm:py-3 px-5 rounded-full text-white wow animate__animated animate__fadeInUp"
//             >
//               How it works
//             </p>

//             <h1
//               className="display-4 pt-4 pb-4 lg:pb-6 wow animate__animated animate__fadeInDown"
//             >
//               A Step-by-Step Guide to Our Platform
//             </h1>

//             <p className="text-bodyText wow animate__animated animate__fadeInUp">
//               Explore our platform with ease! Sign up, select your industry,
//               and seamlessly integrate our tailored payment solutions.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div
//         className="flex justify-between items-center gap-6 md:gap-4 lg:gap-6 stp-15 relative max-md:flex-col"
//       >
//         <Image
//           src={stepArrow1}
//           alt="image"
//           className="absolute top-28 right-[22%] max-xxl:right-[23%] max-xxl:top-24 max-xxl:w-[200px] max-lg:right-[25%] max-lg:w-[100px] max-md:hidden"
//         />
//         <Image
//           src={stepArrow2}
//           alt="image"
//           className="absolute top-16 left-[21%] max-xxl:top-20 max-xxl:left-[23%] max-xxl:w-[200px] max-lg:left-[25%] max-lg:w-[100px] max-md:hidden"
//         />

//         <div
//           className="flex justify-center items-center text-center flex-col max-w-[350px]"
//         >
//           <div
//             className="text-s1 bg-softBg border border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl"
//           >
//             <FilePlus  weight="fill" />
//           </div>
//           <h4 className="heading-4 pt-8 pb-6">Create An Account</h4>
//           <p className="text-bodyText">
//             Join our platform effortlessly! Streamlined user registration with
//             secure verification.
//           </p>
//         </div>
//         <div
//           className="flex justify-center items-center text-center flex-col max-w-[350px]"
//         >
//           <div
//             className="text-s1 bg-softBg border border-strokeColor rounded-full p-6 lg:p-7 text-3xl lg:text-5xl"
//           >
//             <User weight="fill" />
//           </div>
//           <h4 className="heading-4 pt-8 pb-6">Add Your Employees</h4>
//           <p className="text-bodyText">
//             Join our platform effortlessly! Streamlined user registration with
//             secure verification.
//           </p>
//         </div>
//         <div
//           className="flex justify-center items-center text-center flex-col max-w-[350px]"
//         >
//           <div
//             className="text-s1 bg-softBg border border-strokeColor rounded-full p-3 lg:p-7 text-3xl lg:text-5xl"
//           >
//             <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="50"
//                   viewBox="0 0 256 256"
//                 >
//                   <path d="M128.09,57.38a36,36,0,0,1,55.17-27.82,4,4,0,0,1-.56,7A52.06,52.06,0,0,0,152,84c0,1.17,0,2.34.12,3.49a4,4,0,0,1-6,3.76A36,36,0,0,1,128.09,57.38ZM240,160.61a24.47,24.47,0,0,1-13.6,22l-.44.2-38.83,16.54a6.94,6.94,0,0,1-1.19.4l-64,16A7.93,7.93,0,0,1,120,216H16A16,16,0,0,1,0,200V160a16,16,0,0,1,16-16H44.69l22.62-22.63A31.82,31.82,0,0,1,89.94,112H140a28,28,0,0,1,27.25,34.45l41.84-9.62A24.61,24.61,0,0,1,240,160.61Zm-16,0a8.61,8.61,0,0,0-10.87-8.3l-.31.08-67,15.41a8.32,8.32,0,0,1-1.79.2H112a8,8,0,0,1,0-16h28a12,12,0,0,0,0-24H89.94a15.86,15.86,0,0,0-11.31,4.69L56,155.31V200h63l62.43-15.61,38-16.18A8.56,8.56,0,0,0,224,160.61ZM168,84a36,36,0,1,0,36-36A36,36,0,0,0,168,84Z" />
//                 </svg>

//           </div>
//           <h4 className="heading-4 pt-8 pb-6">Run Your First Payroll</h4>
//           <p className="text-bodyText">
//             Join our platform effortlessly! Streamlined user registration with
//             secure verification.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
//   )
// }
// interface TimelineProps {
//   items: {
//     title: string;
//     description: string;
//     date: string;
//     buttonText?: string;
//     highlight?: boolean;
//     buttonLink?: string;
//   }[];
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import { div } from "framer-motion/client";

interface TimelineEvent {
  date: string;
  year: string;
  title: string;
  description: string;
  label?: string;
}

const eventsData: TimelineEvent[] = [
  {
    label: "Company Founded",
    date: "July",
    year: "2015",
    title: "",
    description: "",
  },
  {
    date: "SEP",
    year: "2016",
    title: "Solution for slow money transfers",
    description:
      "Phasellus in iaculis ante. Fusce odio justo, pulvinar sit amet nisl sed, lacinia laoreet augue.",
  },
  {
    date: "MAR",
    year: "2017",
    title: "Funding campaign launched",
    description:
      "Phasellus in iaculis ante. Fusce odio justo, pulvinar sit amet nisl",
  },
  {
    label: "Funded $300,000",
    date: "APR",
    year: "2017",
    title: "",
    description: "",
  },
  {
    date: "JUN",
    year: "2017",
    title: "Development started with 10 team members",
    description:
      "Pulvinar sit amet nisl sed, lacinia laoreet augue. Integer eu ultrices lacus, at laoreet nunc.",
  },
  {
    date: "AUG",
    year: "2017",
    title: "Next 8 developers join our team",
    description: "Integer eu ultrices lacus, at laoreet nunc. In tincidunt",
  },
];

export default function Component() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  useEffect(() => {
    setEvents(eventsData);
  }, []);
  return (
    <section className="container mx-auto min-h-[600px] px-4 py-16">
      <h1 className="text-center font-bold text- heading-1 pb-5 my-5">Our Life Story</h1>
      <div className="relative">
        <div className="flex md:space-y-0 md:flex-row md:justify-between md:items-end">
          {events.map((event, index) => (
            <>
              <div>
                {event.label && (
                  <div className="mr-5 ml-5">
                    <span className="bg-blue-500 absolute text-white text-xs flex py-4 my-5 flex-end font-bold py-1 px-2 rounded bottom-3 transform -translate-x-1/2 rotate-90 whitespace-nowrap">
                      {event.label}
                      <div className="absolute align-center flex items-center top-5 -right-[22px] -rotate-90 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-t-blue border-blue-500  border-l-transparent border-r-transparent"></div>
                    </span>
                    <div className="absolute -bottom-[80px]  transform -translate-x-1/2 text-center">
                      <div className="w-4 h-4 rounded-full z-10 cursor-pointer bg-gray-300 mx-auto"></div>
                      <div className="text-center">
                        {event.date} {event.year}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {!event.label && (
                <div
                  key={index}
                  className={`bg-white p-6 m-5 rounded-lg min-w-11 shadow-lg transition-all duration-300 relative ${
                    activeIndex === index ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="group inline-flex items-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                    Read More
                    <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-b-white shadow-2xl border-l-transparent border-r-transparent rotate-180"></div>
                  <div className="absolute -bottom-[80px] left-1/2 transform -translate-x-1/2 text-center">
                    <div className="w-4 h-4 rounded-full z-10 cursor-pointer bg-gray-300 mx-auto"></div>
                    <div className="text-center">
                      {event.date} {event.year}
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
          <div className="absolute -z-10 -bottom-[51px] left-0 w-full h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="relative">
<div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:justify-between md:items-end">
  {events.map((event, index) => (
    <motion.article
      key={index}
      className={`flex-1 relative ${
        index !== events.length - 1 ? "md:mr-8" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {event.label && (
        <div>
          <span className="bg-blue-500 absolute text-white text-xs flex py-4 my-5 flex-end font-bold py-1 px-2 rounded bottom-3 transform -translate-x-1/2 rotate-90 whitespace-nowrap">
            {event.label}
            <div className="absolute align-center flex items-center top-5 -right-[22px] -rotate-90 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-t-blue border-blue-500  border-l-transparent border-r-transparent"></div>
          </span>
        </div>
      )}

      <div
        className={`bg-white p-6 ${
          event.label ? "ml-9" : ""
        } rounded-lg shadow-lg transition-all duration-300 ${
          activeIndex === index ? "ring-2 ring-blue-500" : ""
        }`}
        onMouseEnter={() => setActiveIndex(index)}
      >
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <button className="group inline-flex items-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
          Read More
          <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-t-white border-l-transparent border-r-transparent"></div>
    </motion.article>
  ))}
</div>
<div className="mt-8 relative">
  <div className="absolute top-[6px] left-0 w-full h-1 bg-gray-200 rounded-full">
    <motion.div
      className="h-full bg-blue-500 rounded-full"
      initial={{ width: "0%" }}
      animate={{
        width: `${((activeIndex + 1) / events.length) * 100}%`,
      }}
      transition={{ duration: 0.5 }}
    />
  </div>
  <div className="flex justify-between items-center">
    {events.map((event, index) => (
      <div key={index} className="flex flex-col items-center">
        <motion.div
          className={`w-4 h-4 rounded-full z-10 cursor-pointer ${
            activeIndex >= index ? "bg-blue-500" : "bg-gray-300"
          }`}
          whileHover={{ scale: 1.2 }}
          onClick={() => setActiveIndex(index)}
        />
        <div className="mt-2 text-center">
          <div className="text-sm font-bold">{event.date}</div>
          <div
            className="text-xs text-gray-500"
            style={{
              position: "relative",
              top: "-8px", // Adjust this value to align the year with the dot/cone
            }}
          >
            {event.year}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div> */
}
