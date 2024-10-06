import {  Check } from "phosphor-react";
import React, { useState } from "react";
import { PiSealPercent, PiSealWarningBold } from "react-icons/pi";
import Select from "react-select";




interface planData{
  heading:{
    startText:string;
    blueText:string;
    endText:string;
  };
  description:string;
  plans:{
    id:number;
    name:string;
    description:string;
    states:{
      state:string;
      price:string;
      discount:string;
      afterDiscount:string;
      laterPaid:{
        ammount:string;
        text:string;
        iconInfo:{
          text:string;
          link:string;
        };
      };
      questionHeading:string[];
      offers:{
        imageUrl:string;
        heading:string;
        subHeading:string;
        description:string;
        knowMore:{
          text:string;
          link:string;
        };
      }[];
      splitPayment:{
        enabled:boolean;
        instalments:number;
        instalmentAmount:string;
        text:string;
        knowMore:{
          text:string;
          link:string;
        };
      };
      features:string[];
    }[];
  }[];
  defaultState:string;
  defaultPlan:string;
  statesOptions:{
    value:string;
    label:string;
  }[];
}
const PlansSection = ({planData}:{planData:planData}) => {
  const {
    heading,
    description,
    plans,
    statesOptions,
    defaultState,
    defaultPlan,
  } = planData;

  const [selectedState, setSelectedState] = useState(defaultState);
  const [plansData, setPlansData] = useState(plans);
  const [selectPlane, setSelectPlane] = useState(defaultPlan);

  const [splitPaymentStates, setSplitPaymentStates] = useState<{
    [key: number]: boolean;
  }>(plans.reduce((acc, plan) => ({ ...acc, [plan.id]: false }), {}));
  const handleToggle = (planId: any) => {
    setSplitPaymentStates((prevStates) => ({
      ...prevStates,
      [planId]: !prevStates[planId],
    }));
  };

  const handleStateChange = (selectedOption: any) => {
    setSelectedState(selectedOption.value);
    const updatedPlans = plans.map((plan) => {
      const stateData = plan.states.find(
        (state) => state.state === selectedOption.value
      );
      if (stateData) {
        return { ...plan, states: [{ ...stateData }] };
      }
      return plan;
    });
    setPlansData(updatedPlans);
  };

  const handlePlanChange = (planName: string) => {
    setSelectPlane(planName);
  };

  function handleBuy(
    data:
      | {
          state: string;
          price: string;
          discount: string;
          afterDiscount: string;
          laterPaid: {
            ammount: string;
            text: string;
            iconInfo: { text: string; link: string };
          };
          offers: {
            imageUrl: string;
            heading: string;
            subHeading: string;
            description: string;
            knowMore: { text: string; link: string };
          }[];
          splitPayment: {
            enabled: boolean;
            instalments: number;
            instalmentAmount: string;
            text: string;
            knowMore: { text: string; link: string };
          };
          features: string[];
        }
      | undefined
  ): void {
    console.log(data);
  }

  return (
    <section className="bg-[#F8FBFF] ">
      <div id="pricing-package" className="md:pt-[80px] py-[52px] ">
        <div className="p-4 flex flex-col gap-[16px] relative items-center">
          <p className="text-black text-[24px] md:text-[34px] font-bold flex max-md:flex-col max-md:items-center md:gap-2 leading-normal">
            {heading.startText}{" "}
            <span className="text-[#007AFF]">{heading.blueText}</span>{" "}
            {heading.endText}
          </p>
          <p className="text-[#606162] text-[14px] md:text-[16px] font-normal max-md:text-center md:mb-4">
            {description}
          </p>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <div className="flex md:flex-row flex-col md:w-[619px] w-[320px] px-[12px] items-center md:justify-between justify-center md:gap-[5px] md:py-[10px] py-[10px] border-[#53A3F9] rounded-[3px] bg-yellow-400 my-[16px]">
            <div className="flex flex-col md:gap-[5px] gap-[2px]">
              <p className="md:text-[18px] text-[14px] max-md:w-full text-[#022B50] md:text-left text-center font-medium">
                Select your state to view the Government Fee
              </p>
            </div>
            <div className=" my-2 w-full md:max-w-[200px]">
              <div className="cursor-pointer">
                <Select
                  closeMenuOnSelect={true}
                  options={statesOptions}
                  defaultValue={statesOptions.find(
                    (option) => option.value === selectedState
                  )}
                  onChange={handleStateChange}
                  className="bg-[#CCE4FF]"
                />
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
            onClick={() => handlePlanChange("Standard")}
          >
            Standard
          </p>
          <p
            className={`text-[16px] px-4 py-1 text-[#8095A7] font-medium ${
              selectPlane === "Fastrack"
                ? "border-b-2 border-[#022B50] font-semibold"
                : ""
            }`}
            onClick={() => handlePlanChange("Fastrack")}
          >
            Fastrack
          </p>
          <p
            className={`text-[16px] px-4 py-1 text-[#8095A7] font-medium ${
              selectPlane === "Premium"
                ? "border-b-2 border-[#022B50] font-semibold"
                : ""
            }`}
            onClick={() => handlePlanChange("Premium")}
          >
            Premium
          </p>
        </div>

        {plansData.map((plan) => (
          <div
            key={plan.id}
            className="p-4 flex m-3 mx-auto group  relative flex-col gap-[10px] max-md:w-[335px] md:w-[360px] mt-[25px] md:mt-0 hover:bg-yellow-400 hover:border-[ #007AFF] border-[1px] rounded-md shadow-[0px_0px_10px_rgba(104,104,104,0.08)] animation cursor-pointer transition delay-150 duration-500"
          >
            <p className="text-[24px] font-semibold text-[#171717]">
              {plan.name}
            </p>
            <p className="text-[16px] md:h-[48px] font-normal group-hover:text-black duration-500 text-[#606162]">
              {plan.description}
            </p>
            <div className="flex gap-3 items-center">
              <div className="relative w-fit">
                <p className="text-[12px] md:text-[16px] group-hover:text-gray-600 font-medium">
                  {
                    plan.states.find((state) => state.state === selectedState)
                      ?.price
                  }
                </p>
                <div className="border-b-[1px] translate-y-[-40%] md:top-[11px] rotate-[-16deg] border-[#E83E3E] w-full absolute top-[9px]"></div>
              </div>
              <div className="flex w-fit gap-[4px] bg-[#ECF8EB] rounded-lg px-[8px] p-2">
                <PiSealPercent size={14} color="#2cdb14" />
                <p className="text-[10px] text-[#3EB837]">
                  {
                    plan.states.find((state) => state.state === selectedState)
                      ?.discount
                  }
                </p>
              </div>
            </div>

            <div className="md:min-h-[95px]">
              <div className="flex gap-4 items-end">
                <p className="text-[32px] md:text-[46px] font-semibold text-[#171717]">
                  {
                    plan.states.find((state) => state.state === selectedState)
                      ?.afterDiscount
                  }
                </p>
              </div>
              <div className="flex flex-row pb-[16px] items-center ">
                <p className="text-[18px] text-[#8095A7] group-hover:text-gray-700 duration-500 font-medium">
                  {
                    plan.states.find((state) => state.state === selectedState)
                      ?.laterPaid.ammount
                  }
                  {" "}
                  {
                    plan.states.find((state) => state.state === selectedState)
                      ?.laterPaid.text
                  }
                </p>
                <div
                  className="relative flex group  "
                  title={
                    plan.states.find((state) => state.state === selectedState)
                      ?.laterPaid.iconInfo.text
                  }
                >
                  <PiSealWarningBold
                    size={20}
                    color="#8095A7"
                    className="mx-1 cursor-pointer"
                  />
                </div>
              </div>

              {plan.states.find((state) => state.state === selectedState)
                ?.splitPayment.enabled && (
                <div
                  className="flex gap-[6px]  items-center md:gap-[10px]"
                  key={plan.id}
                >
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => {
                      handleToggle(plan.id);
                    }}
                  >
                    <div className="relative">
                      <div className="block w-[40px] h-[25px] rounded-full border-[1px] border-[#022b50] bg-[#E5F0FF]"></div>
                      <div
                        className={`absolute top-[3px] transition-all duration-300 ease-in-out rounded-full 
        ${
          splitPaymentStates[plan.id]
            ? "left-[20px] w-[18px] h-[19px] bg-[#53A3F9]"
            : "left-[1px] w-[20px] h-[19px] bg-[#53A3F9]"
        }`}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[12px] md:text-[14px] text-[#606162] font-medium ">
                      {
                        plan.states.find(
                          (state) => state.state === selectedState
                        )?.splitPayment.text
                      }
                      {plan.states.find(
                        (state) => state.state === selectedState
                      )?.splitPayment.knowMore.text ? (
                        <a
                          href={
                            plan.states.find(
                              (state) => state.state === selectedState
                            )?.splitPayment.knowMore.link
                          }
                          className="text-[#007AFF]"
                        >
                          {
                            plan.states.find(
                              (state) => state.state === selectedState
                            )?.splitPayment.knowMore.text
                          }
                        </a>
                      ) : null}
                    </p>
                  </div>
                </div>
              )}
              <div className="col-span-12 md:col-span-6  md:mt-1 flex justify-center items-center">
                <div className="w-full">
                  <div className="grid grid-cols-1 mt-4 ">
                    <div className="col-span-2">
                      <button
                        className="py-2.5  bg-yellow-400 border  rounded  block text-center   hover:border-mainTextColo group-hover:border-black font-bold duration-500 w-full text-slate-800"
                        onClick={() =>
                          handleBuy(
                            plan.states.find(
                              (state) => state.state === selectedState
                            )
                          )
                        }
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col my-5">
                {plan.states.find((state) => state.state === selectedState)?.questionHeading.map(
                  (question, index) => (
                    <h3 className="text-xl font-bold my-2" key={index}>{question}</h3>
                  )
                )}
                
                {plan.states
                  .find((state) => state.state === selectedState)
                  ?.features.map((feature, index) => (
                    <div key={index} className="flex gap-1 items-center justify-start">
                      <div className="w-[25px] h-[25px] items-center flex">
                        {" "}
                        <Check color="#2cdb14" size={23} weight="bold" />
                      </div>

                      <p className="text-[14px] text-[#606162] group-hover:text-gray-700 duration-500">{feature}</p>
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
