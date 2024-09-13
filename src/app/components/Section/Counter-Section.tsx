"use client"

import React, { useEffect } from 'react';
import Odometer from 'odometer'; 
import counter_bg from '../../images/counter_bg.png'; // Background image
import "../../styles/odometer.css"
const CounterSection = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const odometer1 = new Odometer({
        el: document.querySelector('#odometer1')!,
        value: 0,
        format: '(ddd).dd',
      });

      const odometer2 = new Odometer({
        el: document.querySelector('#odometer2')!,
        value: 0,
        format: '(,ddd)',
      });

      const odometer3 = new Odometer({
        el: document.querySelector('#odometer3')!,
        value: 0,
      });

      // Update the values (you can trigger this dynamically if needed)
      odometer1.update(63); // For hours
      odometer2.update(264589); // For savings
      odometer3.update(8); // For weeks
    }
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
            <span id="odometer1" className="odometer">0</span>
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
            <span id="odometer2" className="odometer">0</span>
          </p>
          <p>
            Average savings made per year running payroll and HR after switching to Accupay.
          </p>
        </div>

        <div className="h-[120px] w-[2px] bg-white/70 mt-8 max-sm:hidden"></div>

        {/* Counter 3 */}
        <div className="text-center max-w-[280px]">
          <p className="display-4 pb-3 counters flex justify-center items-center">
            <span id="odometer3" className="odometer">0</span>
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
