import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import ServiceAdvantages from "@/app/components/Section/Advantages-All-Services";
import dentist_section_img from "../../../../images/dentist_section_img.png";
import React from "react";
import WhoShouldBuy from "@/app/components/Section/Service/Who-Should-Buy";
import All_In_One_ServiceSection from "@/app/components/Section/All-in-One-All-Services";
import save_time_money_section from "../../../../images/save_time_money_section.png";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import WhyEnsurekarSection from "@/app/components/Section/Why-Ensurekar-All-Services";
import whyAccoupayCard_1 from "../../../../images/whyAccoupayCard_1.png";
import whyAccoupayCard_2 from "../../../../images/whyAccoupayCard_2.png";
import whyAccoupayCard_3 from "../../../../images/whyAccoupayCard_3.png";
import whyAccoupayCard_4 from "../../../../images/whyAccoupayCard_4.png";
import whyAccoupayCard_5 from "../../../../images/whyAccoupayCard_5.png";
import whyAccoupayCard_6 from "../../../../images/whyAccoupayCard_6.png";
import EnsurekarFeature from "@/app/components/Section/features";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import faq_illus from "../../../../images/faq_illus.png";
const TrademarkRegistration = () => {
  const BreadcrumbData = {
    title: "Trademark Registration",
    heading: "Trademark Registration",
    subHeading:
      "File your TM in just 6 hours using our quick and secured plateform",
    description: "",
    image: "",
    bottomHeading:
      "1. Our senior IP lawyer conducts thorough trademark searches before application.       2. Stay informed with regular updates throughout  the process, TM filing starts from 1499+ Govt. fees",
  };
  const WhoShouldBuyData = {
    title: "",
    heading: "Types of trade mark",
    subHeading:"",

    rolesData: {
      heading: "",
      description:
        "",
      roles: [
        {
          icon: "",
          title: "",
          description: "",
        },
        {
          icon: "",
          title: "",
          description: "",
        },
        {
          icon: "",
          title: "",
          description: "",
        },
        {
          icon: "",
          title: "",
          description: "",
        },
      
      ],
    },
  };
  const AllInOneData = {
    title: "",
    heading: "Trade Mark validity ",
    image: save_time_money_section,
    description:
      [" Trademark is valid for 10 years from the date of filing an application once registration certificate issues. However, it has to be renewed every 10 years further for keeping the trademark recognition."],
  };
  const TradeMarkClass = {
    title: "",
    heading: "Trade mark class ",
    image: save_time_money_section,
    description:
      [" Trademark is valid for 10 years from the date of filing an application once registration certificate issues. However, it has to be renewed every 10 years further for keeping the trademark recognition."],
  };
  const RegisterStepsData = {
    title: "Simple Steps",
    heading: "How to register",
    meta: "trademark",
    description: "",
    steps: [
      {title: "Our Trademark lawyer will conduct an extensive trademark search",description:""},
      {title: "Class section and trademark application filing",description:""},
      {title: "Trademark publication in journals and registration",description:""},
    ],
    aboutSteps: [],
  };
  const FeatureData = {
    title: "",
    heading: "A Platform for Your All Legal Finance And Tax's",
    subHeading:
      "Achieve operational excellence with our expert guidance in legal, financial, and tax matters. Build the ideal workplace while ensuring compliance and efficiency.",
    description: "",
    image: "",
    bottomHeading: "",
    elements: [
      { image: whyAccoupayCard_1, heading: "Affordable Professional Services" },
      {
        image: whyAccoupayCard_2,
        heading: "All Professional Services at One Place",
      },
      { image: whyAccoupayCard_3, heading: "Easy Dashboard" },
      { image: whyAccoupayCard_4, heading: "Security, Confidentiality" },
      { image: whyAccoupayCard_5, heading: "Expert Network" },
      { image: whyAccoupayCard_6, heading: "Quick Customer Support" },
    ],
  };
  const FAQsData  = {
    title: "FAQs",
    heading: "What services does Ensurekar offer?",
    description: "",
    imageUrl: faq_illus,
    FAQs: [{ question: 'NA', answer: 'NA' }],
  }
  const WhyEnsurekar = {
    heading: "Why to choose Ensurekar for Trademark Registration ",
    description: "",
    elements: [
      {
        heading: "Expert Assistance",
        description:
          "EnsureKar offers professional guidance throughout the entire registration process, ensuring compliance with legal requirements.",
        imageUrl: "",
      },
      {
        heading: "Hassle-Free & Fast Service",
        description:
          "We handle everything from name approval to incorporation documents, ensuring a smooth and quick registration process.",
        imageUrl: "",
      },
      {
        heading: "Transparent & Affordable",
        description:
          "We provide clear, upfront pricing with no hidden fees, making the entire process cost-effective and stress-free.",
        imageUrl: "",
      },
    ],
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <WhoShouldBuy WhoShouldBuyData={WhoShouldBuyData} />
      <All_In_One_ServiceSection AllInOneData={AllInOneData} />
      <All_In_One_ServiceSection AllInOneData={TradeMarkClass} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <EnsurekarFeature FeatureData={FeatureData} />
      <FAQsServicesSection FAQsData={FAQsData} />
      <WhyEnsurekarSection WhyEnsurekarData={WhyEnsurekar} />
    </>
  );
};

export default TrademarkRegistration;
