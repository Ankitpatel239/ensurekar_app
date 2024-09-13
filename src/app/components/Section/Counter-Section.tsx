"use client";

import React, { useEffect, useState } from 'react';
import counter_bg from '../../images/counter_bg.png'; // Background image

const CounterSection = () => {
  const [hours, setHours] = useState(0);
  const [savings, setSavings] = useState(0);
  const [weeks, setWeeks] = useState(0);

  useEffect(() => {
    // Simulate the incremental update of the numbers
    const hoursTarget = 63;
    const savingsTarget = 264589;
    const weeksTarget = 8;

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

    incrementValue(0, hoursTarget, setHours);
    incrementValue(0, savingsTarget, setSavings);
    incrementValue(0, weeksTarget, setWeeks);
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
            <span>{hours}</span>
            <span>hrs</span>
          </p>
          <p>
            Average time saved per month running payroll and HR after switching to Accupay.
          </p>
        </div>

        <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>

        {/* Counter 2 */}
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3 counters flex justify-center items-center">
            <span>$</span>
            <span>{savings.toLocaleString()}</span>
          </p>
          <p>
            Average savings made per year running payroll and HR after switching to Accupay.
          </p>
        </div>

        <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>

        {/* Counter 3 */}
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3 counters flex justify-center items-center">
            <span>{weeks}</span>
            <span>Weeks</span>
          </p>
          <p>
            Average time it takes to switch to Accupay - and often less.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
