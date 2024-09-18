"use client";

import { useEffect, useState } from "react";
import { ChevronRightIcon } from "lucide-react";


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
      <div className="overflow-y-auto min-h-[400px]">
      <div className="relative ml-5">
        <div className="flex md:space-y-0 md:flex-row md:justify-between md:items-end">
          {events.map((event, index) => (
            <div className="flex justify-end" key={index}>
       
                {event.label && (
                  <div className="mr-10 ml-5" >
                    <span className="bg-blue-500 absolute text-white text-xs flex py-4 my-5 flex-end font-bold py-1 px-2 rounded bottom-3 transform -translate-x-1/2 rotate-90 whitespace-nowrap">
                      {event.label}
                      <div className="absolute align-center flex items-center top-5 -right-[22px] -rotate-90 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-t-blue border-blue-500  border-l-transparent border-r-transparent"></div>
                    </span>
                    <div className="absolute -bottom-[80px]  transform -translate-x-1/2 text-center">
                      <div className="w-4 h-4 rounded-full z-10 cursor-pointer bg-gray-300 mx-auto"></div>
                      <div className="text-center text-nowrap">
                        {event.date} {event.year}
                      </div>
                    </div>
                  </div>
                )}
          
              {!event.label && (
                <div
                
                  className="bg-white p-6 mr-5 rounded-lg w-[300px] shadow-lg transition-all duration-300 relative"
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
                    <div className="text-center text-nowrap">
                      {event.date} {event.year}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="absolute ml-3 -z-10 -bottom-[51px] left-4 w-full h-1 bg-gray-200 rounded-full"  ></div>
        </div>
      </div>
      </div>
    </section>
  );
}
