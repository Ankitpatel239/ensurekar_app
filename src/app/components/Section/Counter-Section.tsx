"use client";

import React, { useEffect, useState } from 'react';
import counter_bg from '../../images/counter_bg.png'; // Background image

const CounterSection = () => {
  const [clients, setClients] = useState(0);
  const [startups, setStartups] = useState(0);
  const [cities, setCities] = useState(0);

  useEffect(() => {
    // Simulate the incremental update of the numbers
    const clientServed = 5000;
    const startupGuidanceAndSupport = 200; 
    const  totalCities = 10;
     
    const incrementValue = (currentValue: number, targetValue: number, setValue: React.Dispatch<React.SetStateAction<number>>) => {
      if (currentValue < targetValue) {
        const step = Math.ceil((targetValue - currentValue) / 20); // Adjust the step size
        const interval = setInterval(() => {
          setValue((prev) => {
            if (prev + step >= targetValue) {
              clearInterval(interval);
              return targetValue;
            }
            return prev + step;
          });
        }, 100); // Adjust the speed of the increment
      }
    };

    incrementValue(0, clientServed, setClients);
    incrementValue(0, startupGuidanceAndSupport, setStartups);
    incrementValue(0,  totalCities, setCities);
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${counter_bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="stp-30 sbp-30 relative"
    >
      <div className="container text-white flex justify-between items-center gap-8 sm:gap-4 md:gap-8 lg:gap-16 max-sm:flex-col">
        {/* Counter 1 */}
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3 flex justify-center items-center">
            <span>{clients}</span>
            <span>+</span>
          </p>
          <p className='text-2xl font-bold text-wrap md:text-nowrap'>
          Client Served
            {/* Average time saved per month running payroll and HR after switching to Ensurekar. */}
          </p>
        </div>

        <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>

        {/* Counter 2 */}
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3 counters flex justify-center items-center">
            <span>{startups.toLocaleString()}</span>
            <span>+</span>
          </p>
          <p className='text-2xl font-bold text-wrap md:text-nowrap'>
          startup guidance and support
            {/* Average startups made per year running payroll and HR after switching to Ensurekar. */}
          </p>
        </div>

        <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>

        {/* Counter 3 */}
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3 counters flex justify-center items-center">
            <span>{cities}</span>
            <span>+</span>
          </p>
          <p className='text-2xl font-bold text-wrap md:text-nowrap'>
          cities at present
            {/* Average time it takes to switch to Ensurekar - and often less. */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
