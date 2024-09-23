
import { CaretDown, Check } from "phosphor-react";
import React, { useState } from "react";
import { PiSealPercent, PiSealWarningBold } from "react-icons/pi";
import Select from 'react-select'

const plans = [
  {
    id: 1,
    name: "Standard",
    price: "₹1499",
    discount: "₹500 off",
    afterDiscount: "₹999",
    features: [
      "Expert assisted process",
      "Your company name is reserved in just 2 - 4 days",
      "DSC in just 4 - 7 days",
      "SPICe+ form filing in 14 days*",
      "Incorporation Certificate in 14 - 21 days",
      "Company PAN+TAN",
      "DIN for directors",
    ],
  },
  {
    id: 2,
    name: "Fastrack",
    price: "₹2999",
    discount: "50% off",
    afterDiscount: "₹1499",
    features: [
      "Expert assisted process",
      "Your company name is reserved in just 1 - 2 days*",
      "DSC in just 3 - 4 days",
      "SPICe+ form filing in 5 - 7 days*",
      "Incorporation Certificate in 7 - 14 days",
      "Company PAN+TAN",
      "DIN for directors",
      "Digital welcome kit that includes a checklist of all post-incorporation compliances",
    ],
  },
  {
    id: 3,
    name: "Premium",
    price: "₹29,999",
    discount: "17% off",
    afterDiscount: "₹24,999",
    features: [
      "Expert assisted process",
      "Your company name is reserved in just 1 - 2 days*",
      "DSC in just 3 - 4 days",
      "SPICe+ form filing in 5 - 7 days*",
      "Incorporation Certificate in 7 - 14 days",
      "Company PAN+TAN",
      "DIN for directors",
      "Digital welcome kit that includes a checklist of all post-incorporation compliances",
      "Appointment of Auditor - ADT 01",
      "Issuance of share certificate",
      "INC 20 A form filing",
      "DIR 3 KYC (For 2 directors)",
      "Accounting & Bookkeeping (Up to 100 transactions)",
      "Financial statement preparation",
      "Accounting software (1-year license)",
      "AOC 4, MGT 7 & ADT filing",
      "Annual filing (Up to turnover of 20 lakhs)",
      "Facilitation of Annual General Meeting",
      "Statutory regulations PF, ESI",
      "One Year Income Tax filing (Up to turnover of 20 lakhs)",
      "30-minute call with a senior CA/CS for your business planning",
    ],
    splitPayment: true,
  },
];

const PlansSection = () => {
  const [isSplitPayment, setIsSplitPayment] = useState(false);
  const [selectPlane, isSelectPlane] = useState("Standard");

  const handleToggle = () => {
    setIsSplitPayment(!isSplitPayment);
  };

  return (
    <section className="stp-30 sbp-30 bg-[#F8FBFF] ">
      <div id="pricing-package" className="md:pt-[80px] py-[52px] ">
        <div className="p-4 flex flex-col gap-[16px] relative items-center">
          <p className="text-black text-[24px] md:text-[34px] font-bold flex max-md:flex-col max-md:items-center md:gap-2 leading-normal">
            <span className="text-[#007AFF]">Right plan</span> for Your Business
          </p>
          <p className="text-[#606162] text-[14px] md:text-[16px] font-normal max-md:text-center md:mb-4">
            Vakilsearch's incorporation experts register over 1500 companies
            every month.
          </p>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex md:flex-row flex-col md:w-[619px] w-[320px] px-[12px] items-center md:justify-between justify-center md:gap-[5px] md:py-[10px] py-[10px] border-[1px] border-[#53A3F9] rounded-[8px] bg-[#CCE4FF] my-[16px]">
            <div className="flex flex-col md:gap-[5px] gap-[2px]">
              <p className="md:text-[18px] text-[14px] max-md:w-full text-[#022B50] md:text-left text-center font-medium">
                Select your state to view the Government Fee
              </p>
            </div>
            <div className="flex flex-col p-[10px]">
              <div className="flex flex-row md:gap-[16px] gap-[8px] items-center justify-center ">
                <div className="flex flex-row border-[1px] md:min-w-[180px] min-w-[180px] max-md:mr-[8px] items-center justify-between border-[#53A3F9] bg-[#ffffff] py-[10px] rounded-[4px] gap-[4px] px-[8px] cursor-pointer">
                  <p className="md:text-[14px] text-[12px] text-[#606162]">
                    Select State
                  </p>

                  <CaretDown weight="bold" size={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Section */}
      <div className=" max-md:flex flex max-md:flex-col max-md:gap-[16px]  items-start justify-around">
        <div className="flex md:hidden justify-between items-center mx-auto  ">
          <p
            className={`text-[16px] px-4 py-1 text-[#8095A7] font-medium ${
              selectPlane === "Standard"
                ? "border-b-2 border-[#022B50] font-semibold"
                : ""
            }`}
            onClick={() => isSelectPlane("Standard")}
          >
            Standard
          </p>
          <p
            className={`text-[16px] px-4 py-1 text-[#8095A7] font-medium ${
              selectPlane === "Fastrack"
                ? "border-b-2 border-[#022B50] font-semibold"
                : ""
            }`}
            onClick={() => isSelectPlane("Fastrack")}
          >
            Fastrack
          </p>
          <p
            className={`text-[16px] px-4 py-1 text-[#8095A7] font-medium ${
              selectPlane === "Premium"
                ? "border-b-2 border-[#022B50] font-semibold"
                : ""
            }`}
            onClick={() => isSelectPlane("Premium")}
          >
            Premium
          </p>
        </div>

        {plans.map((plan) => (
          <div
            key={plan.id}
            className="p-4 flex m-3 mx-auto  relative flex-col gap-[10px] max-md:w-[335px] md:w-[360px] mt-[25px] md:mt-0 hover:bg-[#E5F0FF] hover:border-[#007AFF] border-[1px] rounded-md shadow-[0px_0px_10px_rgba(104,104,104,0.08)]"
          >
            <p className="text-[24px] font-semibold text-[#171717]">
              {plan.name}
            </p>
            <p className="text-[16px] md:h-[48px] font-normal text-[#606162]">
              {plan.name === "Fastrack"
                ? "Quick company registration in 7 to 14 days"
                : plan.name === "Standard"
                ? "Perfect for initiating company registration"
                : "Top priority service + annual compliance to keep your business on track"}
            </p>
            <div className="flex gap-3 items-center">
              <div className="relative w-fit">
                <p className="text-[12px] md:text-[16px] font-medium">
                  {plan.price}
                </p>
                <div className="border-b-[1px] translate-y-[-40%] md:top-[11px] rotate-[-16deg] border-[#E83E3E] w-full absolute top-[9px]"></div>
              </div>
              <div className="flex w-fit gap-[4px] bg-[#ECF8EB] rounded-lg px-[8px] p-2">
                <PiSealPercent size={14} color="#2cdb14" />
                <p className="text-[10px] text-[#3EB837]">{plan.discount}</p>
              </div>
            </div>

            <div className="md:min-h-[95px]">
              <div className="flex gap-4 items-end">
                <p className="text-[32px] md:text-[46px] font-semibold text-[#171717]">
                  {plan.afterDiscount}
                </p>
              </div>
              <div className="flex flex-row pb-[16px] items-center ">
                <p className="text-[18px] text-[#8095A7] font-medium">
                  + Govt. Fee (to be paid later)
                </p>
                <div className="relative flex group">
                  <PiSealWarningBold
                    size={20}
                    color="#8095A7"
                    className="mx-1 cursor-pointer"
                  />
                </div>
              </div>

              {plan.splitPayment && (
                <div
                  className="flex gap-[6px] items-center md:gap-[10px]"
                  key={plan.id}
                >
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={handleToggle}
                  >
                    <div className="relative">
                      <div className="block w-[40px] h-[25px] rounded-full border-[1px] border-[#022b50] bg-[#E5F0FF]"></div>
                      <div
                        className={`absolute top-[3px] transition-all duration-300 ease-in-out rounded-full 
                    ${
                      isSplitPayment
                        ? "left-[20px] w-[18px] h-[19px] bg-[#53A3F9]"
                        : "left-[1px] w-[20px] h-[19px] bg-[#53A3F9]"
                    }`}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[12px] md:text-[14px] text-[#606162] font-medium">
                      Split your payment into 2 instalments
                    </p>
                  </div>
                </div>
              )}
              <div className="pt-[16px] flex flex-col gap-[8px]">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <div className="w-[30px] h-[30px]">
                      {" "}
                      <Check color="#2cdb14" size={25} weight="bold" />
                    </div>

                    <p className="text-[14px] text-[#606162]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
