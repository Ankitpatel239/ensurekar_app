import BreadcrumbSection from "@/app/components/Breadcrump-Sections/All-Services";
import BrandnameSearch from "@/app/components/Section/Brandname-Search";
import HelpSection from "@/app/components/Section/help-section";
import RegistrationGuide from "@/app/components/Section/Registration-Guide";
import we_help from "@/app/images/we_help.png";
import React from "react";
import what_we_do from "../../../../images/what_we_do.png";
import RegisterSteps from "@/app/components/Section/Register-Steps";
import CounterSection from "@/app/components/Section/Counter-Section";
import BenefitSection from "@/app/components/Section/Benefit-Section";
import FAQsServicesSection from "@/app/components/Section/FAQs-All-Services";
import faq_illus from "../../../../images/faq_illus.png";

const TrademarkSearch = () => {
  const BreadcrumbData = {
    title: "Trademark Search",
    heading: "Trademark Search",
    subHeading: "",
    description:
      "A trademark search is a strategy for your business's marketing toolkit. This search, often called a TM search, allows you to discover trademarks already used within the market and obtain detailed information about them. Moreover, it enables you to determine if there are any ongoing attempts to register a trademark that might infringe on your brand name or other related identifiers.",
    image: "",
    bottomHeading: "",
  };
  const HelpSectionData = {
    heading: "Why Do You Need a Trademark Search India?",
    subHeading: "",
    description:
      "Trademark searches can be complex and time-consuming, which is why many opt to outsource the task. If you decide to do it yourself, be aware that it may cost more than using an agency. ",
    image: we_help,
    bottomHeading:
      "When selecting a trademark public search company, consider these factors:",
    bottomDescription: "",
    bottomList: [
      {
        heading: "Expertise : ",
        description:
          "Choose a company with experience in multiple industries to ensure accurate results.",
      },
      {
        heading: "Cost : ",
        description:
          "Look for a competitive and reasonable fee compared to other agencies.",
      },
      {
        heading: "Time frame : ",
        description:
          "Check their turnaround time to know how quickly you'll receive results.",
      },
      {
        heading: "Results : ",
        description:
          "Select a reputable company that delivers reliable outcomes to ensure your trademark is well-protected.",
      },
    ],
  };
  const RegistrationGuideData = {
    title: "Registration Guide",
    heading:
      "Steps to Conduct a Trademark Search in India - Brand Registration Guide",
    description: "",
    image: what_we_do,

    guideList: [
      {
        heading: "Utilize Online Trademark Search Tools:",
        description:
          "Use platforms like Ensurekar or the Indian Trademark Registry database to perform a free trademark search.",
      },
      {
        heading: "Assess the Need for Filing",
        description:
          "Analyze the results of your search to determine if filing for a trademark is necessary.",
      },
      {
        heading: "Identify the Right Trademark Type:",
        description:
          "Ensure you understand which type of trademark is suitable for your brand.",
      },
      {
        heading: "File and Protect Your Trademark : ",
        description:
          "If your application is approved, your trademark will be published in the Trademark Journal.",
      },
    ],
  };
  const RegisterStepsData = {
    title: " Trademark Search",
    heading: "Steps to Register your",
    meta: "Trademark Search",
    description: "",
    steps: [
      {
        title: "Trademark Search",
        description:
          "We conduct a thorough search to check the availability of your chosen trademark name.",
      },
      {
        title: "Application Filing",
        description:
          "Our team prepares and files the trademark application with all required documents.",
      },
      {
        title: "Registration and Approval",
        description:
          "We monitor the application process and notify you once your trademark is successfully registered.",
      },
    ],
    aboutSteps: [
      {
        title: "Trademark Name Availability Check",
        description:
          "After selecting a unique name for your brand, we will check its availability through an extensive trademark search. Once confirmed, we'll proceed with the necessary filings to secure your trademark.",
      },
      {
        title: "Trademark Application Filing",
        description:
          "Our team will handle the entire process of preparing and filing the trademark application with the appropriate authorities. We ensure all essential documents are submitted correctly.",
      },
      {
        title: "Trademark Registration and Approval",
        description:
          "Once filed, we track the progress of your application and keep you informed. Upon approval, your trademark will be registered, securing your brand's identity and protection.",
      },
    ],
    footerMessage: "Simple, quick, and hassle-free!",
  };
  const CounterSectionData = [
    { number: 50, text: "Tradmarks" },
    { number: 200, text: "Startup Guidance and Support" },
    { number: 1, text: "T.M in 1 week" },
  ];
  const BenefitData = {
    title: "",
    heading: "Question? Meet Answer",
    subHeading: "",
    benefitsData: {
      heading: "",
      description: "",
      benefits: [
        {
          icon: "",
          title: "Trademark Search Clarity ",
          description: "",
        },
        {
          icon: "",
          title: "Explore the Search Demo ",
          description: "",
        },
        {
          icon: "",
          title: "Reach Out for Support ",
          description: "",
        },
        {
          icon: "",
          title: "Help Center Resources  ",
          description: "",
        },
      ],
    },
  };

  const FAQsData = {
    title: "FAQs",
    heading: "What Ensurekar offer you?",
    description: "",
    FAQs: [
      { question: "What does a Trademark Knockout Search involve?", answer: "NA" },
      { question: "What is included in a Comprehensive Trademark Search?", answer: "NA" },
      { question: "How do I properly conduct a trademark search?", answer: "NA" },
      { question: "What are the advantages of conducting a trademark search?", answer: "NA" },
      { question: "Can I conduct a trademark search on my own?", answer: "NA" },
      { question: "What is the most effective type of trademark search before registration?", answer: "NA" },
      { question: "Is it possible to perform a trademark search without identifying the class?", answer: "NA" },
      { question: "Why is conducting a trademark search important?", answer: "NA" },
      { question: "How does the process of a comprehensive trademark search work?", answer: "NA" },
      { question: "Is knowing the trademark class necessary for conducting a search?", answer: "NA" },
      { question: "What is a Trademark Clearance Search and why is it important?", answer: "NA" },
    ],
    imageUrl: faq_illus,
  };
  return (
    <>
      <BreadcrumbSection BreadcrumbData={BreadcrumbData} />
      <BrandnameSearch />
      <HelpSection HelpSectionData={HelpSectionData} />
      <RegistrationGuide RegistrationGuideData={RegistrationGuideData} />
      <RegisterSteps RegisterSteps={RegisterStepsData} />
      <CounterSection CounterSectionData={CounterSectionData} />
      <BenefitSection BenefitData={BenefitData} />
      <FAQsServicesSection FAQsData={FAQsData} />
    </>
  );
};

export default TrademarkSearch;
